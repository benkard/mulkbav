/* Umschrift → Keilschrift für das altbabylonische Wörterbuch.
   Quelle: normalisiertes Akkadisch in Lateinschrift. Die Silbentrennung
   geschieht mechanisch (V / KV / VK, keine KVK-Zeichen), Logogramme
   stehen in geschweiften Klammern als Unicode-Zeichennamen.
   Jedes unbekannte Zeichen bricht den Lauf ab — stille Fehler wären
   hier die schlimmste Sorte, weil niemand sie lesen könnte. */
const SIGN = {
  a:'A', e:'E', i:'I', u:'U',
  ba:'BA', bi:'BI', bu:'BU', be:'BAD',
  pa:'PA', pi:'BI', pu:'BU', pe:'BAD',
  da:'DA', di:'DI', du:'DU', de:'DI',
  ta:'TA', ti:'TI', tu:'TU', te:'TE',
  'ṭa':'DA', 'ṭi':'DI', 'ṭu':'DU', 'ṭe':'DI',
  ga:'GA', gi:'GI', gu:'GU', ge:'GI',
  ka:'KA', ki:'KI', ku:'KU', ke:'KI',
  qa:'GA', qi:'KI', qu:'KU', qe:'KI',
  za:'ZA', zi:'ZI', zu:'ZU', ze:'ZE2',
  sa:'SA', si:'SI', su:'SU', se:'SI',
  'ṣa':'ZA', 'ṣi':'ZI', 'ṣu':'ZU', 'ṣe':'ZE2',
  'ša':'SHA', 'ši':'IGI', 'šu':'SHU', 'še':'SHE',
  ha:'HA', hi:'HI', hu:'HU', he:'HI',
  la:'LA', li:'LI', lu:'LU', le:'LI',
  ma:'MA', mi:'MI', mu:'MU', me:'ME',
  na:'NA', ni:'NI', nu:'NU', ne:'NE',
  ra:'RA', ri:'RI', ru:'RU', re:'RI',
  wa:'PI', wi:'PI', wu:'PI', we:'PI',
  ab:'AB', ap:'AB', ib:'IB', ip:'IB', ub:'UB', up:'UB', eb:'IB', ep:'IB',
  ad:'AD', at:'AD', 'aṭ':'AD', id:'A2', it:'A2', 'iṭ':'A2',
  ud:'UD', ut:'UD', 'uṭ':'UD', ed:'A2', et:'A2', 'eṭ':'A2',
  ag:'AK', ak:'AK', aq:'AK', ig:'IG', ik:'IG', iq:'IG', eg:'IG', ek:'IG', eq:'IG',
  al:'AL', il:'IL', el:'EL',
  am:'GUD TIMES KUR', im:'IM', um:'UM', em:'IM',
  an:'AN', in:'IN', un:'UN', en:'EN',
  ir:'IR', ur:'UR', er:'IR',
  'aš':'ASH', 'iš':'ISH', 'uš':'USH', 'eš':'ESH2',
  as:'UD KUSHU2', az:'UD KUSHU2', 'aṣ':'UD KUSHU2'
};
/* KVK-Zeichen. Das Altbabylonische schreibt geschlossene Silben gern mit
   einem einzigen Zeichen statt mit KV+VK; wo es eines gibt, wird es
   genommen. Das ist nicht nur kürzer, sondern schliesst auch Lücken der
   VK-Reihe: /šar/ hat ein Zeichen (ŠÁR), /ar/ allein nicht. */
const CVC = {
  tum:'TUM', lum:'LUM', kur:'KUR', nam:'NAM', tar:'TAR', lal:'LAL', sum:'SUM',
  gar:'GAR', gal:'GAL', til:'TIL', din:'DIN', tab:'TAB', zag:'ZAG', sag:'SAG',
  dam:'DAM', dub:'DUB', dug:'DUG', bar:'BAR', bal:'BAL', bur:'BUR', dag:'DAG',
  dar:'DAR', gam:'GAM', gan:'GAN', gur:'GUR', hal:'HAL', kak:'KAK', kal:'KAL',
  kin:'KIN', kul:'KUL', kun:'KUN', lam:'LAM', lul:'LUL', mar:'MAR', mes:'MES',
  nim:'NIM', nun:'NUN', pad:'PAD', pan:'PAN', sar:'SAR', sig:'SIG', sud:'SUD',
  sur:'SUR', tag:'TAG', tir:'TIR', tuk:'TUK', mah:'MAH', gig:'GIG', gul:'GUL',
  gum:'GUM', mug:'MUG', rab:'RAB', pap:'PAP', zig:'ZIG', zum:'ZUM', bad:'BAD',
  kam:'KAM2', tur:'TUR', kid:'KID', lil:'LIL', nin:'NIN', zib:'ZIB',
  'šar':'SHAR2', 'šeš':'SHESH', 'šid':'SHID', 'šim':'SHIM', 'šir':'SHIR',
  'maš':'MASH', 'muš':'MUSH', 'kiš':'KISH',
  /* stimmlos/emphatisch teilen sich das Zeichen, wie ueblich */
  dum:'TUM', qar:'GAR', kam2:'KAM2', 'ṭab':'TAB', 'ṭar':'TAR', qal:'GAL',
  bat:'BAD', pat:'BAD', 'ṭup':'DUB', dur:'BUR', sik:'SIK2'
};
const V = 'aeiu', LONG = {'ā':'a','ē':'e','ī':'i','ū':'u','â':'a','ê':'e','î':'i','û':'u'};

let NAMES = null;
function names(){
  if (NAMES) return NAMES;
  NAMES = new Map();
  /* Node kennt keine Unicode-Namenstabelle; sie wird deshalb einmalig
     aus einer JSON-Datei gelesen, die ein Python-Vorlauf erzeugt hat. */
  const tab = require('./akk-zeichennamen.json');
  for (const [n, cp] of Object.entries(tab)) NAMES.set(n, String.fromCodePoint(cp));
  return NAMES;
}
function glyph(signName){
  const g = names().get('CUNEIFORM SIGN ' + signName);
  if (!g) { throw new Error('unbekanntes Keilschriftzeichen: ' + signName); }
  return g;
}
/* Silbentrennung: Konsonant zwischen Vokalen zum folgenden Vokal,
   zwei Konsonanten werden getrennt. Danach KVK → KV + VK. */
function syllables(w){
  const s = [...w].map(c => LONG[c] || c).join('');
  const isV = c => V.includes(c);
  const out = []; let i = 0;
  while (i < s.length){
    let on = '';
    if (!isV(s[i])) { on = s[i]; i++; }
    if (i >= s.length) { if (on) throw new Error('Konsonant ohne Vokal: ' + w); break; }
    const vow = s[i]; i++;
    let coda = '';
    if (i < s.length && !isV(s[i]) && (i+1 >= s.length || !isV(s[i+1]))) { coda = s[i]; i++; }
    out.push(on + vow + coda);
  }
  return out;
}
function word(w){
  let g = '';
  for (const syl of syllables(w)){
    if (CVC[syl]) { g += glyph(CVC[syl]); continue; }
    const m = /^(.*?)([aeiu])(.*)$/.exec(syl);
    const on = m[1], vow = m[2], coda = m[3];
    /* Ohne Anlaut und mit Auslaut ist die Silbe selbst ein VK-Zeichen:
       um-ma-nu-um, nicht u-um-ma-nu-um. Ein eigenes V-Zeichen davor
       waere schlicht falsch. */
    if (!on && coda){ const k = vow + coda; if (!SIGN[k]) throw new Error('keine Silbe ' + k + ' (in ' + w + ')'); g += glyph(SIGN[k]); continue; }
    if (on){ const k = on + vow; if (!SIGN[k]) throw new Error('keine Silbe ' + k + ' (in ' + w + ')'); g += glyph(SIGN[k]); }
    else    { g += glyph(SIGN[vow]); }
    if (coda){ const k = vow + coda; if (!SIGN[k]) throw new Error('keine Silbe ' + k + ' (in ' + w + ')'); g += glyph(SIGN[k]); }
  }
  return g;
}
/* HTML-Auszeichnung, Entities, Zahlen, Paragraphenketten und lateinische
   Kuerzel bleiben unangetastet. Umgesetzt wird nur, was ganz aus kleinen
   akkadischen Buchstaben besteht und einen Vokal enthaelt: damit fallen
   BetrAVG, EStG, ETF, IRR und die Formelvariablen von selbst heraus.
   [[...]] ist die Notbremse fuer alles Uebrige (file://, localStorage). */
const AKK = /^[a-zāēīūâêîûšṣṭ]+$/;
function convert(text){
  return text.split(/(<[^>]*>|\{[^}]*\}|\[\[[^\]]*\]\]|&[a-zA-Z]+;|&#\d+;)/).map(part => {
    if (part.startsWith('<') || part.startsWith('&')) return part;
    if (part.startsWith('{')) return part.slice(1,-1).split('.').map(glyph).join('');
    if (part.startsWith('[[')) return part.slice(2,-2);
    return part.replace(/(?<![0-9])[A-Za-zāēīūâêîûšṣṭ]+/g, m =>
      AKK.test(m) && /[aeiuāēīū]/.test(m) ? word(m) : m);
  }).join('');
}
module.exports = { convert, word, glyph, syllables };
