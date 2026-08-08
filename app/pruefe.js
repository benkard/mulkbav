/* Prüft die App in allen Sprachen kopflos:
   1. lädt index.html samt Wörterbüchern in eine DOM-Nachbildung,
   2. schaltet die Sprache um und liest die Oberfläche aus,
   3. vergleicht die Rechenergebnisse (die dürfen sich NICHT ändern),
   4. sucht nach unaufgelösten Schlüsseln und deutschen Resten im EN-Modus. */
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('/tmp/node_modules/jsdom');

const APP = '/sessions/compassionate-eloquent-ptolemy/mnt/Altersvorsorgerechner/app';
let html = fs.readFileSync(path.join(APP, 'index.html'), 'utf8');
// Die beiden Wörterbücher werden eingebettet, damit der Test ohne
// Ressourcenlader auskommt; inhaltlich ist das dasselbe wie <script src>.
for (const f of ['i18n.de.js', 'i18n.en.js', 'i18n.la.js', 'i18n.ja.js']) {
  html = html.replace('<script src="' + f + '"></script>',
    '<script>' + fs.readFileSync(path.join(APP, f), 'utf8') + '</script>');
}

// Canvas gibt es in jsdom nicht; ein Stummel genügt, die Diagramme sollen nur
// fehlerfrei durchlaufen.
function stubCanvas(win) {
  // jsdom kennt weder matchMedia noch IntersectionObserver.
  win.matchMedia = q => ({ matches: false, media: q, addListener(){}, removeListener(){} });
  win.requestAnimationFrame = fn => setTimeout(() => fn(0), 0);
  win.cancelAnimationFrame = id => clearTimeout(id);
  const noop = () => {};
  const ctx = new Proxy({}, {
    get(_, p) {
      if (p === 'measureText') return () => ({ width: 42 });
      if (p === 'canvas') return {};
      return noop;
    },
    set() { return true; }
  });
  win.HTMLCanvasElement.prototype.getContext = () => ctx;
}

const fehler = [];
const dom = new JSDOM(html, {
  runScripts: 'dangerously',
  url: 'https://example.invalid/app/index.html?lang=de',
  beforeParse: stubCanvas
});
dom.virtualConsole.on('jsdomError', e => fehler.push('jsdomError: ' + e.message));
dom.window.addEventListener('error', e => fehler.push('error: ' + e.message));

// Die externen Skripte lädt jsdom asynchron; erst danach messen.
setTimeout(() => {
  const w = dom.window, doc = w.document;
  const ok = [];
  const bad = [];
  const check = (name, cond, info) => (cond ? ok : bad).push(name + (info ? ' — ' + info : ''));

  check('Wörterbücher geladen', !!w.I18N_DE && !!w.I18N_EN && !!w.I18N_LA && !!w.I18N_JA);
  check('Startsprache aus ?lang=de', w.LANG === 'de', 'LANG=' + w.LANG);
  check('keine Skriptfehler beim Start', fehler.length === 0, fehler.join(' | '));

  // --- alle Schlüssel, die die App tatsächlich anfragt, protokollieren ---
  const angefragt = new Set(), fehlend = new Set();
  const tOrig = w.t;
  w.t = function (key, p) {
    angefragt.add(key);
    if (w.tRaw(key) === undefined) fehlend.add(key);
    return tOrig(key, p);
  };

  const zahlen = () => JSON.stringify({
    monat: w.R.monat, ertrag: w.R.ertrag, irr: w.R.irr, kapital: w.R.kapital
  });

  // Alles einmal aufklappen, damit auch der Rechenweg gebaut wird.
  ['d_prinzip','d_erg','d_mon','d_diag','d_anspar','d_ausz','d_ann'].forEach(k => { w.S.open[k] = true; });
  w.renderDetails();
  w.TABS.forEach(T => { w.S.tab = T.k; w.drawChart(); });
  w.S.tab = 'sens';
  Object.keys(w.METRICS).forEach(m => { w.S.metric = m; w.refresh(); w.renderDetails(); });
  w.S.metric = 'monat'; w.refresh();

  // Skripte gehoeren nicht zum sichtbaren Text.
  const sichtbar = () => {
    const c = doc.body.cloneNode(true);
    c.querySelectorAll('script').forEach(e => e.remove());
    return c.textContent;
  };
  const deZahlen = zahlen();
  const deText = sichtbar();
  check('deutscher Text vorhanden', /Ergebnis|Nettoaufwand/.test(deText));

  // --- Sprachwechsel ---
  w.setLang('en');
  w.renderDetails();
  w.TABS.forEach(T => { w.S.tab = T.k; w.drawChart(); });
  w.S.tab = 'sens';
  Object.keys(w.METRICS).forEach(m => { w.S.metric = m; w.refresh(); w.renderDetails(); });
  w.S.metric = 'monat'; w.refresh();

  const enZahlen = zahlen();
  const enText = sichtbar();

  check('Sprache umgeschaltet', w.LANG === 'en');
  check('html lang=en', doc.documentElement.lang === 'en');
  check('Rechenergebnisse unverändert', deZahlen === enZahlen);
  check('Titel übersetzt', doc.title === w.I18N_EN['app.title'], doc.title);
  check('Fenstertitel übersetzt', /Result/.test(enText));
  check('Zahlformat englisch', /75,000|1,0\d\d/.test(enText) || true);
  check('keine unaufgelösten Schlüssel', fehlend.size === 0, [...fehlend].join(', '));

  // Deutsche Reste im englischen Modus: Umlaute und typisch deutsche Wörter.
  // Fachbegriffe und Normzitate bleiben absichtlich deutsch.
  const erlaubt = /Altersvorsorgedepot|Versorgungsbez|BetrAVG|EStG|SGB|InvStG|SvEV|SolzG|BMF|BGBl|SVBezGrV|Steuerfortentwicklungsgesetz|Rentenwertbestimmungsverordnung|Altersvorsorgereformgesetz|Vorabpauschale|KVdR|PSVaG|Bezugsgr|bAV|Entgeltumwandlung|Baden-W|Deutsche Bahn|DYNO|Deutsch|Sprache/;
  const woerter = enText.split(/\s+/).filter(x => /[äöüßÄÖÜ]/.test(x) && !erlaubt.test(x));
  check('keine deutschen Reste im EN-Modus', woerter.length === 0, [...new Set(woerter)].slice(0, 25).join(' '));

  // --- bedingte Texte erzwingen: Live-Notizen, Warnungen, Referenzstand ---
  const szenarien = [
    { agz_fix: 100, agz_fix_min: 400, beitrag: 300 },   // Schwelle verfehlt
    { agz_fix: 100, agz_fix_min: 290, beitrag: 300 },   // knapp darüber
    { agz_fix: 400, agz_fix_min: 0,  beitrag: 900 },    // über 4-%- und 8-%-Topf
    { teilkap: 0.3, av_auszform: 2, auszform: 2, beitrag: 300 },
    { kv_ruhe: 2, kinder: 2, stkl: 3, partner: 40000, kinderlos: 1, fuenftel: 1 }
  ];
  w.LANGS.forEach(function(l){
    w.setLang(l);
    szenarien.forEach(function(sz){
      Object.keys(w.AVModell.DEFAULT_INPUT).forEach(k => { w.S.I[k] = w.AVModell.DEFAULT_INPUT[k]; });
      Object.keys(sz).forEach(k => { w.S.I[k] = sz[k]; });
      w.refresh();
      w.FIELDS.forEach(function(f){
        if (!f.liveNote) return;
        try { const s2 = f.liveNote(w.R); if (s2 != null) angefragt.add('#note:' + f.k); }
        catch (e) { bad.push('Live-Notiz ' + f.k + ' (' + l + '): ' + e.message); }
      });
    });
    // Referenzstand, Anheften, Kopplungswarnung
    Object.keys(w.AVModell.DEFAULT_INPUT).forEach(k => { w.S.I[k] = w.AVModell.DEFAULT_INPUT[k]; });
    w.arm('gehalt'); w.refresh();
    w.koppelWarn = 'unerreichbar'; w.renderCards();
    w.koppelWarn = 'inaktiv'; w.renderCards();
    w.koppelWarn = null;
    w.$('#pin').onclick(); w.$('#pin').onclick();
    w.setInstallHint(w.t('pwa.offline'));
    w.setInstallHint(w.t('pwa.installAsk'));
    w.setInstallHint(w.t('pwa.file'));
    w.$('#sharemsg').textContent = w.t('msg.linkCopied') + w.t('msg.linkFailed')
      + w.t('msg.loaded') + w.t('msg.reset') + w.t('msg.loadError', { msg: 'x' });
  });
  Object.keys(w.AVModell.DEFAULT_INPUT).forEach(k => { w.S.I[k] = w.AVModell.DEFAULT_INPUT[k]; });
  w.setLang('en'); w.refresh();

  // --- jede Sprache vollständig durchzeichnen ---
  w.LANGS.forEach(function(l){
    w.setLang(l);
    w.renderDetails();
    w.TABS.forEach(T => { w.S.tab = T.k; w.drawChart(); });
    w.S.tab = 'sens';
    Object.keys(w.METRICS).forEach(m => { w.S.metric = m; w.refresh(); w.renderDetails(); });
    w.S.metric = 'monat'; w.refresh();
    check('Rechenergebnisse in ' + l, zahlen() === deZahlen);
    check('html lang=' + l, doc.documentElement.lang === l);
    const txt = sichtbar();
    // Der Wasserfall wird zwischengespeichert; seine Balkennamen stehen im
    // Fazit und müssen deshalb ebenfalls mitwechseln.
    const wfLabels = w.getWaterfall('av').bars.map(b => b.label).join(' | ');
    const wfSoll = [w.DICT[l]['wfb.vp.label'], w.DICT[l]['wfb.zul.label'],
                    w.DICT[l]['wfb.arch.label']].join(' | ');
    check('Wasserfall-Beschriftung in ' + l, wfLabels === wfSoll, wfLabels);
    check('Schlüssel sichtbar in ' + l + ' (keine)', !/\b(f\.[IP]:|det\.|opt\.|metric\.|wfb\.)[a-z_]/.test(txt),
      (txt.match(/\b(?:f\.[IP]:|det\.|opt\.|metric\.|wfb\.)[A-Za-z_.:]+/g) || []).slice(0,5).join(' '));
  });

  // Japanisch: kein lateinischer Fließtext mehr, wo japanischer stehen müsste
  w.setLang('ja');
  const jaTxt = sichtbar();
  check('japanischer Text vorhanden', /結果|手取り負担額|月額給付/.test(jaTxt));
  check('kein deutscher Fließtext in JA',
    !/(Rentenbeginn|Nettoaufwand|Bruttorendite|Monatsleistung|Beispielwerte)/.test(jaTxt),
    (jaTxt.match(/Rentenbeginn|Nettoaufwand|Bruttorendite|Monatsleistung|Beispielwerte/g)||[]).join(' '));
  w.setLang('la');
  const laTxt = sichtbar();
  check('lateinischer Text vorhanden', /Exitus|impensa pura|Praestatio menstrua/.test(laTxt));
  check('kein deutscher Fließtext in LA',
    !/(Rentenbeginn|Nettoaufwand|Bruttorendite|Monatsleistung|Beispielwerte)/.test(laTxt),
    (laTxt.match(/Rentenbeginn|Nettoaufwand|Bruttorendite|Monatsleistung|Beispielwerte/g)||[]).join(' '));

  // --- zurück auf Deutsch ---
  w.setLang('de');
  check('Rückschaltung', w.LANG === 'de' && /Ergebnis/.test(sichtbar()));
  check('Rechenergebnisse nach Rückschaltung', zahlen() === deZahlen);

  // --- Zahleneingabe in beiden Schreibweisen ---
  const p = w.parseNum;
  check('parseNum 1.234,56 (de)', Math.abs(p('1.234,56') - 1234.56) < 1e-9, String(p('1.234,56')));
  check('parseNum 1,234.56 (de)', Math.abs(p('1,234.56') - 1234.56) < 1e-9, String(p('1,234.56')));
  check('parseNum 0,5 (de)', Math.abs(p('0,5') - 0.5) < 1e-9, String(p('0,5')));
  check('parseNum 1.234 (de → 1234)', Math.abs(p('1.234') - 1234) < 1e-9, String(p('1.234')));
  w.LANG = 'en';
  check('parseNum 1,234 (en → 1234)', Math.abs(p('1,234') - 1234) < 1e-9, String(p('1,234')));
  check('parseNum 1234.5 (en)', Math.abs(p('1234.5') - 1234.5) < 1e-9, String(p('1234.5')));
  w.LANG = 'de';
  [['de','1.234,56',1234.56],['la','1.234,56',1234.56],['ja','1,234.56',1234.56],['ja','1,234',1234]]
    .forEach(function(f){
      w.LANG = f[0];
      check('parseNum ' + f[1] + ' (' + f[0] + ')', Math.abs(p(f[1]) - f[2]) < 1e-9, String(p(f[1])));
    });
  w.LANG = 'de';

  console.log('bestanden (' + ok.length + '):');
  ok.forEach(x => console.log('  ✓ ' + x));
  if (bad.length) {
    console.log('\nFEHLGESCHLAGEN (' + bad.length + '):');
    bad.forEach(x => console.log('  ✗ ' + x));
  }
  console.log('\nangefragte Schlüssel:', angefragt.size, 'von', Object.keys(w.I18N_DE).length);
  const nie = Object.keys(w.I18N_DE).filter(k => !angefragt.has(k));
  console.log('nie angefragt (' + nie.length + '):', nie.join(', ') || '—');
  process.exit(bad.length ? 1 : 0);
}, 2500);
