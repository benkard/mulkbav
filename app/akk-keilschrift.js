/* Baut i18n.akk-x-ob.js aus i18n.akk-x-ob.translit.js.
   Aufruf:  node akk-keilschrift.js
   Umgesetzt wird ausschliesslich der Inhalt einfacher Zeichenketten;
   Bezeichner, Zahlen und Kommentare bleiben unberuehrt. Jedes Zeichen,
   das die Unicode-Namenstabelle nicht kennt, bricht den Lauf ab. */
const fs = require('fs'), path = require('path');
const { convert } = require('./akk-keilschrift-lib.js');
const APP = __dirname;
const src = fs.readFileSync(path.join(APP, 'i18n.akk-x-ob.translit.js'), 'utf8');
const kopf = src.slice(0, src.indexOf('window.I18N_AKK_X_OB'));
const rumpf = src.slice(src.indexOf('window.I18N_AKK_X_OB'));
const KEY = /^[A-Za-z0-9.:_-]+$/;
let n = 0;
const neu = rumpf.replace(/'((?:[^'\\]|\\.)*)'/g, (m, s) => {
  if (KEY.test(s)) return m;
  n++; return "'" + convert(s) + "'";
});
const neuerKopf = kopf
  .replace('UMSCHRIFT, QUELLE', 'KEILSCHRIFT, ERZEUGT')
  .replace(/   Diese Datei wird NICHT[\s\S]*?mehrere Silben sich ein Zeichen teilen \(da\/ṭa, ka\/qa, ša\/…\)\./,
    '   ERZEUGTE DATEI — nicht von Hand ändern. Quelle ist\n'
  + '   i18n.akk-x-ob.translit.js; nach jeder Änderung dort neu bauen:\n'
  + '       node akk-keilschrift.js\n'
  + '   Ein Rückweg aus dieser Datei in die Umschrift existiert nicht:\n'
  + '   die Umsetzung ist nicht injektiv, mehrere Silben teilen sich ein\n'
  + '   Zeichen (da/ṭa, ka/qa, sa/ṣa).\n\n'
  + '   SCHRIFT. Unicode-Keilschriftblock U+12000…U+1247F. Ohne\n'
  + '   passenden Zeichensatz erscheinen leere Kästchen; das Stilblatt\n'
  + '   setzt für lang="akk-x-ob" einen Stapel, der mit Santakku\n'
  + '   beginnt — dem einzigen darin, dessen Zeichenformen wirklich\n'
  + '   altbabylonisch sind. Die Referenzglyphen des Unicode-Standards\n'
  + '   sind neuassyrisch, also rund tausend Jahre zu jung; das ist\n'
  + '   eine Frage des Zeichensatzes, nicht der Kodierung.');
fs.writeFileSync(path.join(APP, 'i18n.akk-x-ob.js'), neuerKopf + neu);
console.log('umgesetzte Zeichenketten:', n);
