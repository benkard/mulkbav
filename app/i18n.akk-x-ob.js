/* =====================================================================
   Wörterbuch Altbabylonisch — KEILSCHRIFT, ERZEUGT (459 Schlüssel).

   ERZEUGTE DATEI — nicht von Hand ändern. Quelle ist
   i18n.akk-x-ob.translit.js; nach jeder Änderung dort neu bauen:
       node akk-keilschrift.js
   Ein Rückweg aus dieser Datei in die Umschrift existiert nicht:
   die Umsetzung ist nicht injektiv, mehrere Silben teilen sich ein
   Zeichen (da/ṭa, ka/qa, sa/ṣa).

   SCHRIFT. Unicode-Keilschriftblock U+12000…U+1247F. Ohne
   passenden Zeichensatz erscheinen leere Kästchen; das Stilblatt
   setzt für lang="akk-x-ob" einen Stapel, der mit Santakku
   beginnt — dem einzigen darin, dessen Zeichenformen wirklich
   altbabylonisch sind. Die Referenzglyphen des Unicode-Standards
   sind neuassyrisch, also rund tausend Jahre zu jung; das ist
   eine Frage des Zeichensatzes, nicht der Kodierung.

   SPRACHCODE akk-x-ob. akk ist ISO 639-3 für das Akkadische insgesamt;
   das Altbabylonische ist eine Sprachstufe davon und hat keinen
   eigenen Code. Daher der BCP-47-Privatuntertag, wie bei de-x-amt.

   UMSCHRIFT. Normalisiertes Akkadisch, nicht Zeichenumschrift: ša, ṣ,
   ṭ, h für ḫ, Länge mit Makron. Die Silbentrennung übernimmt das
   Bauskript. In {geschweiften Klammern} stehen Logogramme als
   Unicode-Zeichennamen, mit Punkt verbunden: {KU3.UD} ist KÙ.BABBAR.
   In [[doppelten eckigen Klammern]] steht, was unangetastet bleiben
   muss — Paragraphenketten, Gesetzeskürzel, Dateinamen.

   WORTSCHATZ. Die Logogramme sind die des altbabylonischen
   Wirtschafts- und Rechtsurkundenwesens, was hier genau passt:
     {KU3.UD}   KÙ.BABBAR   kaspum    Silber, Geld
     {SAG.DU}   SAG.DU      qaqqadum  Kapital, Hauptsumme
     {MASH}     MÁŠ         ṣibtum    Zins, Ertrag
     {MU}       MU          šattum    Jahr
     {UD TIMES U PLUS U PLUS U}  ITI  warhum  Monat
     {LU2} LÚ awīlum · {TUR} DUMU mārum · {E2} É bītum
     {LUGAL} LUGAL šarrum · {DUB} DUB ṭuppum · {A2} Á idum Lohn
     {ZAG} ZAG  Grenze, Rand — trägt hier Beitragsbemessungsgrenze,
                Freibetrag, Grenzsteuersatz und Prozentpunkt
   Syllabisch u.a.: miksum Abgabe · riksum Bindung, Vertrag,
   Versicherung · murṣum Krankheit · šībūtum Greisenalter, Ruhestand ·
   nēmelum Gewinn · makkūrum Vermögen · napharum Summe · mišlum
   Hälfte · ṣimdatum Erlass · dīnum Recht, Fall, Variante · šiprum
   Arbeit · bēl šiprim Arbeitgeber · sittum Rest, netto · mitharum
   Vergleich · tukultum Vertrauensgrad.

   ORTHOGRAPHISCHE BESCHRÄNKUNG. Das Bauskript kennt nur Zeichen, die
   es im Unicode-Keilschriftblock namentlich auflösen kann. Für /ar/,
   /aḫ/, /iḫ/, /uḫ/, /ul/, /uk/, /is/, /us/, /iz/, /uz/ und /ay/ gibt
   es dort keinen auflösbaren Namen; die betroffenen Wörter sind
   deshalb umgangen worden — statt warhum steht das Logogramm ITI,
   statt kayyānum das synonyme kīnum, statt ṣehrum die offene
   Schreibung ṣeherum. Das ist eine Beschränkung des Werkzeugs, keine
   des Akkadischen, und sie ist bewusst hart: jedes unbekannte Zeichen
   bricht den Bau ab, statt still ein falsches Zeichen zu setzen.

   Vertrauensgrad: Wortschatz ca. 80 % (CAD, AHw), Morphologie ca.
   75 %, Syntax ca. 70 % — Akkadisch ist SOV mit Verbletztstellung,
   das ist gesichert, aber die Wortstellung innerhalb der Nominal-
   gruppe und der Gebrauch der Subordinativendung sind hier
   pragmatisch gehandhabt. Zeichenwerte ca. 85 %; die Reihe der
   emphatischen Dentale (ṭ) teilt sich hier die Zeichen der d-Reihe,
   was für DA=ṭà und DI=ṭe₄ belegt, für DU=ṭù aber Vereinfachung ist.
   Codepunkte 100 %: sie stammen nicht aus dem Gedächtnis, sondern
   werden zur Bauzeit über die Unicode-Namenstabelle aufgelöst.
   ===================================================================== */
window.I18N_AKK_X_OB = {
  'f.I:gehalt.label': '𒀉 𒊭 𒈬 𒄿𒈾𒀭𒈾',
  'f.I:gehalt.hint': '𒅗𒌔𒁍𒌝 𒊭 𒅖𒋼𒂗 𒈬 𒁀𒈝 𒈾𒁕𒈾𒋾𒅎 𒊭 𒅖𒋼𒂗 𒉺𒇷. 𒀭𒉡𒌝 𒈪𒅅𒊓𒄠 𒊭 𒍠-𒅗 𒄿𒅗𒀭 𒌋 𒀉𒁷 𒋗𒌝𒈠 𒂊𒇷 𒍠 𒊭 𒊑𒅅𒋛𒅎 𒋫𒋫𒀜𒋫𒀠.',
  'f.I:beitrag.label': '𒈾𒁕𒉡𒌝 𒊭 𒌗 𒀀𒈾 𒇽-𒈦 𒊭 𒂍 𒅆𒅁𒊑𒅎',
  'f.I:beitrag.hint': '𒀉𒅗 𒀀𒈾 𒊕𒁺 𒌅𒉿𒀸𒊹 (§ 1a BetrAVG). 𒁲𒉡𒌝 𒀀𒈾 𒅕𒁁 𒄿𒈾 𒈨𒀜 𒊭 𒍠 𒊭 𒊕𒁺 𒀉𒋫𒈾𒀜𒁷; 𒂊𒇷 𒀭𒉏 𒁁𒂖 𒅆𒅁𒊑𒅎 𒇷𒅎𒄥.',
  'f.I:netto_ziel.label': '𒅗𒌔𒁍𒌝 𒋛𒀉𒌈 𒊭 𒌗',
  'f.I:netto_ziel.hint': '𒀭𒉡𒌝 𒅗𒌔𒁍𒌝 𒊭 𒄿𒈾 𒅖𒋼𒂗 𒈬 𒉺𒉏 𒀀𒈾 𒂵𒋾𒅗 𒆷 𒅋𒆷𒀝 — 𒈠𒀝𒆪𒊒𒌝 𒊭 𒋫𒀜𒁲𒉡. 𒅗𒌔𒁍𒌝 𒀭𒉡𒌝 𒀀𒈾 𒊭𒆷𒀸 𒁲𒈾𒋾𒅎 𒅆𒀉𒋼𒂗 𒅖𒊭𒀝𒅗𒀭; 𒀭𒉡𒌝 𒁲𒉡𒌝 𒊭 𒈪𒀉𒄩𒊑𒅎. N(B) = B − 𒈠𒁺𒌝 𒊭 𒊑𒅅𒋛𒅎 − 𒈠𒁺𒌝 𒊭 𒈪𒅅𒋛𒅎, 𒆠𒉡𒌝 𒌋 𒆠𒉡𒌝, 𒌋 𒀀𒈾 𒌋𒈪 𒊭𒉡𒋾𒅎 𒄿𒌉𒊒. 𒄿𒈾 𒍠 𒋼𒂗𒆪𒊏𒌈 𒄿𒁀𒀸𒅆, 𒌋 𒀀𒈾 𒀭𒉏 34 𒈪𒅖𒆷𒌈 𒅔𒉈𒅁𒉺𒊭; 𒅆𒅋𒆷𒌈 𒅖𒌅 𒅖𒋼𒂗 𒂠𒊑𒀉 𒊭 𒅖𒋼𒂗 𒅗𒌔𒁉𒅎 𒈠𒁕𒀜.',
  'f.I:agzus.label': '𒋫𒀊𒁍𒌈 𒊭 𒁁𒂖 𒅆𒅁𒊑𒅎',
  'f.I:agzus.hint': '𒍣𒅎𒁕𒌈 𒄩𒄠𒊭𒀜 𒂠𒊑𒀉 𒄿𒈾 𒈨𒀜 𒄿𒈾𒀜𒁷 (§ 1a Abs. 1a BetrAVG); 𒁁𒇻 𒅆𒅁𒊑𒅎 𒈠𒁺𒌈 𒂊𒇷 𒀭𒉏 𒄿𒈾𒀜𒁲𒉡. 𒈪𒀉𒄩𒊒𒌝 𒀉𒋾 𒊕𒁺 𒊭 𒊏𒈠𒉌𒅗 𒄿𒈾 (1+z)·(1−0,211) ≈ 1, 𒌋 z ≈ 26,7 %.',
  'f.I:agz_fix.label': '𒋫𒀊𒁍𒌈 𒆠𒈾𒌈 𒂊𒇷 𒀭𒉏',
  'f.I:agz_fix.hint': '𒋫𒀊𒁍𒌈 𒆠𒈾𒌈 𒊭 𒊑𒅅𒋛𒅎 𒊭 𒆠𒇲𒇷 — 𒄿𒈾 𒈠𒋾𒅎 𒀭𒉌𒋾𒅎 𒆠𒈾𒀜, 𒂊𒇷 𒄩𒄠𒊭𒀜 𒂠𒊑𒀉 𒊭 § 1a Abs. 1a BetrAVG. 𒅗𒌔𒁍𒌝 𒊭 𒁁𒂖 𒅆𒅁𒊑𒅎 𒅆 (§ 3 Nr. 63 EStG), 𒌋 𒉺𒈾𒉡𒌝 𒀀𒈾 𒍠 𒊭 𒊓𒈠𒈾𒀜 𒌋 𒅕𒁁 𒄿𒈠𒀠𒆷 (§ 1 Abs. 1 S. 1 Nr. 9 SvEV): 𒈾𒁕𒉡𒌝 𒊭 𒊏𒈠𒉌𒅗 𒄿𒈠𒀜𒁲. 𒅖𒌈 𒅆, 𒆷 𒉺𒈝: 𒈦 𒊭 𒈾𒁕𒉏 𒊭 𒌋𒈪 𒊭𒉡𒋾𒅎 𒆷 𒄿𒈾𒀝𒆠𒅕, 𒈾𒀊𒄩𒊏𒄠 𒊏𒁉𒅖 𒍑𒋼𒇷.',
  'f.I:agz_fix_dyn.label': '𒋫𒀊𒁍𒌈 𒆠𒈾𒌈 𒄿𒊐𒁉 𒌋 𒆷',
  'f.I:agz_fix_dyn.hint': '𒅗𒌔𒁍𒌝 𒆠𒉡𒌝 𒄿𒈾 𒊑𒅅𒋛𒅎 𒊭𒁲𒅕𒈠 𒄿𒈾 𒊑𒅅𒋛𒅎 𒂠𒋆 𒋼𒅕𒋫𒋗 𒅋𒆷𒀝; 𒅖𒋗 𒀭𒉏 𒉺𒈾𒉡𒌝 "𒆥". 𒄿𒈾 27 𒊭𒈾𒋾𒅎 𒀉𒋾 𒅆𒈾 𒄿𒈾 𒈨𒀜 𒊭 𒅆𒈪𒅎, 𒈪𒅖𒈝 1,02⁻²⁷ ≈ 0,59 𒄿𒊓𒀝𒆠𒅁.',
  'f.I:agz_fix_dyn.o0': '𒆥',
  'f.I:agz_fix_dyn.o1': '𒀉𒋾 𒀉 𒄿𒊐𒁉',
  'f.I:agzus_sv.label': '𒈾𒁕𒉡𒌝 𒊭 𒋫𒀊𒁍𒋾𒅎',
  'f.I:agzus_sv.hint': '"𒅗𒌔𒊒𒌝" 𒀀𒉿𒀜 𒍣𒅎𒁕𒋾𒅎 𒅆: § 1a Abs. 1a BetrAVG 𒋫𒀊𒁍𒋫𒄠 𒄿𒈾𒀜𒁷 𒄠𒈪𒉌 𒁁𒂖 𒅆𒅁𒊑𒅎 𒄿𒈾 𒊑𒅅𒋛𒅎 𒄿𒇷𒅅𒆠. 𒋗𒌝𒈠 𒀉-𒅗 𒂊𒇷 𒅆𒈾 𒍠 𒅋𒆷𒀝, 𒈪𒅎𒈠 𒆷 𒄿𒇷𒅅𒆠 𒌋 𒈪𒅎𒈠 𒆷 𒄿𒈾𒀜𒁷. 𒅖𒋗 𒀭𒉏 𒉺𒈝 𒄿𒈾 𒅖𒋼𒂗 𒂠𒊑𒀉 𒄿𒈾 𒈨𒀜 𒄿𒈠𒀠𒆷. 𒌅𒆰𒌈 𒊭 𒀀𒉿𒋾𒅎: 75 %.',
  'f.I:agzus_sv.o0': '𒈾𒀊𒄩𒊒𒌝 𒊭 𒈾𒁕𒉏',
  'f.I:agzus_sv.o1': '𒍣𒀉𒌈 𒆷 𒊑𒅅𒊓𒌈',
  'f.I:agzus_sv.o2': '𒅗𒌔𒊒𒌝 𒀀𒈾 𒆠𒈾𒋾𒅎',
  'f.I:dyn.label': '𒈾𒁕𒉡𒌝 𒄿𒊐𒁉 𒌋 𒆷',
  'f.I:dyn.hint': '𒋗𒌝𒈠 𒈾𒁕𒉡𒌝 𒀉𒋾 𒀉 𒄿𒊐𒁉, 𒍠 𒊭 𒊓𒈠𒈾𒀜 𒄿𒈾 𒈨𒀜 𒄿𒈾 𒆗 𒊭𒈾𒋾𒅎 𒈠𒇷. 𒋗𒌝𒈠 𒆥, 𒋆𒋗 𒀀𒈾 𒅆𒈪𒅎 𒄿𒈠𒀜𒁲, 𒌋 𒅗𒌔𒁍𒌝 𒋛𒀉𒌈 𒊭 𒊭𒆷𒀸 𒁲𒈾𒋾𒅎 𒀉𒋾𒋗 𒄿𒈠𒀜𒁲.',
  'f.I:dyn.o1': '𒀉𒋾 𒀉 𒄿𒊐𒁉',
  'f.I:dyn.o0': '𒆥',
  'f.I:rendite.label': '𒈦 𒈾𒀊𒄩𒊒𒌝 𒊭 ETF 𒄿𒈾 𒈬',
  'f.I:rendite.hint': '𒉺𒉡𒌝 𒊭 𒍣𒋫𒋾𒅎 𒌋 𒉺𒉡𒌝 𒊭 𒈪𒅅𒋛𒅎. ETF 𒅖𒋼𒂗𒈠 𒄿𒈾 𒊭𒆷𒀸 𒁲𒈾𒋾𒅎 𒅋𒆷𒀝 — 𒄿𒈾 𒀭𒉏 𒊑𒅅𒊓𒋾𒅎 𒋫𒈠𒀜𒁕𒀜, 𒆷 𒍣𒁍𒋫𒋾𒅎.',
  'f.I:alter.label': '𒊭𒈾𒌅𒅗 𒄿𒈾𒀭𒈾',
  'f.I:alter.hint': '𒊑𒂠 𒁲𒄷𒋾𒅎. 𒊭𒀜𒌈 𒊭 𒆷 𒈠𒉏 2026 𒅆.',
  'f.I:alter.unit': '𒊭𒈾𒌈',
  'f.I:rentbeg.label': '𒊑𒂠 𒈾𒁕𒉏',
  'f.I:rentbeg.hint': '𒊭𒆷𒀸 𒁲𒈾𒌈 𒄿𒈾 𒊭𒀜𒋾𒅎 𒀭𒉌𒋾𒅎 𒄿𒈾𒀜𒁲𒈾. 𒊕𒁺 𒊭 𒅆𒁍𒋾𒅎 𒄿𒈾 65 𒊭𒈾𒋾𒅎 𒌋 𒂊𒇷 𒄿𒈾𒀜𒁷 (𒍣𒅎𒁕𒌈 𒂠𒊺𒌈 𒊭 2026).',
  'f.I:rentbeg.unit': '𒊭𒈾𒌈',
  'f.I:kv_ruhe.label': '𒊑𒅅𒋧 𒊭 𒈬𒌨𒍣𒅎 𒄿𒈾 𒅆𒁍𒋾𒅎',
  'f.I:kv_ruhe.hint': '𒀭𒉡𒌝 𒊑𒋗𒌝 𒊏𒁍𒌝 𒅆. 𒄿𒈾 𒊑𒅅𒋛𒅎 𒊭 𒈠𒋾𒅎, 𒈦 𒊭 𒂍 𒅆𒅁𒊑𒅎 𒈾𒀊𒄩𒊏𒄠 𒊭 𒈾𒁕𒉏 𒄿𒈾𒀜𒁷 (§§ 229, 250 SGB V); 𒊕𒁺 𒊭 𒊏𒈠𒉌𒅗 𒆷 𒄿𒈾𒀜𒁷. 𒅖𒋼𒂗 𒍣𒁍𒌈 𒀭𒉌𒌈 𒈾𒀊𒄩𒊏𒄠 𒄿𒋻.',
  'f.I:kv_ruhe.o1': '𒊭 𒈠𒋾𒅎',
  'f.I:kv_ruhe.o2': '𒊭 𒊏𒈠𒉏',
  'f.I:auszform.label': '𒈾𒁕𒉡𒌝 𒊭 𒇽-𒈦 𒊭 𒂍 𒅆𒅁𒊑𒅎',
  'f.I:auszform.hint': '𒅗𒌔𒁍𒌝 𒅖𒋼𒂗: 𒈪𒅅𒋧 𒈾𒀊𒄩𒊒𒌝 𒄿𒈾 𒊭𒀜𒋾𒅎 𒊭 𒂊𒊑𒁉𒅎, 𒊑𒅅𒋧 𒊭 𒈬𒌨𒍣𒅎 𒀀𒈾 120 𒌗 𒀉𒋫𒈾𒀜𒁷 (§ 229 Abs. 1 S. 3 SGB V). 𒈾𒁕𒉡𒌝 𒊭 𒁀𒆷𒁲𒅎 𒀀𒈾 𒆗 𒌋𒈪 𒅋𒆷𒀝 𒌋 𒅗𒌔𒉺𒄠 𒈠𒁮 𒄿𒈾 𒍠 𒅖𒋼𒂗 𒄿𒉺𒀝𒆠𒀉. 𒁲𒉡𒌝 𒀭𒉡𒌝 𒅗𒇴 𒌋 𒆷 𒈪𒅎𒈠 𒄿𒁲; 𒍣𒀉𒌈 𒆷 𒅔𒉈𒁍𒍑.',
  'f.I:auszform.o1': '𒅗𒌔𒁍𒌝 𒅖𒋼𒂗',
  'f.I:auszform.o2': '𒈾𒁕𒉡𒌝 𒀀𒈾 𒆗 𒁀𒆷𒁲𒅎',
  'f.I:teilkap.label': '𒊕𒁺 𒊭 𒅆𒁍𒋾𒅎: 𒅗𒌔𒁍𒌝 𒅖𒋼𒂗 𒄿𒈾 𒊑𒋆',
  'f.I:teilkap.hint': '𒀀𒈾 𒊭𒆷𒊭𒀜 𒄿𒈾 𒈨𒀜 𒊭 𒊕𒁺-𒅗 𒄿𒈾 𒊑𒂠 𒈾𒁕𒉏 𒅖𒋼𒉌𒅖 𒋫𒆷𒀝𒆠 — 𒄿𒈾 𒆠𒇲𒇷 𒁲𒈾𒋾𒅎. 𒅆𒀉𒋫 𒍣𒋫𒌈: 𒈪𒅅𒋧 𒈾𒀊𒄩𒊒𒌝 𒄿𒈾 𒊭𒀜𒋾𒅎 𒊭 𒂊𒊑𒁉𒅎, 𒌋 𒅖𒌅 𒀭𒉏 𒈦 𒊭 𒈪𒅅𒋛𒅎 𒅖𒋼𒂗, 𒆷 𒈦 𒊭 𒊑𒅅𒋛𒅎. 𒈠𒌈 𒂊𒇷 𒍠 𒊭 𒊭𒀜𒋾𒅎 𒀀𒈾 𒈾𒁕𒉏 𒊭 𒁀𒆷𒁲𒅎 𒄿𒋻; 𒁲𒉡𒌝 𒊭 𒁾𒁉𒅎 𒅆, 𒆷 𒍣𒅎𒁕𒌈.',
  'f.I:av_auszform.label': '𒊕𒁺 𒊭 𒅆𒁍𒋾𒅎: 𒋛𒀉𒌈',
  'f.I:av_auszform.hint': '𒈪𒅎𒈠 𒂊𒇷 𒅗𒌔𒁉𒅎 𒅖𒋼𒂗 𒈪𒉡𒌝. 𒁲𒉡𒌝 𒅖𒋼𒂗: 𒅗𒌔𒁍𒌝 𒄿𒈾 𒊕𒁺 𒅋𒆷𒀝, 𒄿𒊐𒁉 𒌋 𒅔𒈾𒀜𒁷; 𒍣𒀉𒌈 𒆷 𒅗𒍣𒅕𒌈 𒈪𒅖𒇴 𒊭 𒉿𒀜𒊑𒅎 𒀀𒈾 𒈪𒅅𒋛𒅎 𒄿𒈾𒀜𒁷. 𒁲𒉡𒌝 𒅆𒈾: 𒊕𒁺 𒀀𒈾 𒋫𒄠𒅗𒊑𒅎 𒅋𒆷𒀝, 𒌋 𒍣𒀉𒌈 𒆷 𒅗𒍣𒅕𒌈 𒈦-𒈠 𒀀𒈾 𒈪𒅅𒋛𒅎 𒄿𒈾𒀜𒁷 (§ 22 Nr. 5 S. 2 Buchst. a EStG, 17 % 𒄿𒈾 67 𒊭𒈾𒋾𒅎, 𒆷 26 %). 𒍣𒀉𒌈 𒅗𒍣𒅕𒌈 𒈾𒀊𒄩𒊏𒄠 𒄿𒈾𒀜𒁷 𒄿𒈾 𒆠𒇲𒇷.',
  'f.I:av_auszform.o1': '𒁲𒉡𒌝 𒊭 𒈾𒁕𒉏',
  'f.I:av_auszform.o2': '𒈾𒁕𒉡𒌝 𒀀𒈾 𒆗 𒁀𒆷𒁲𒅎',
  'f.I:agz_fix_min.label': '𒈾𒁕𒉡𒌝 𒍢𒄭𒊒𒌝 𒀀𒈾 𒋫𒀊𒁍𒋾𒅎 𒆠𒈾𒋾𒅎',
  'f.I:agz_fix_min.hint': '𒊑𒅅𒊓𒌈 𒈠𒁺𒌈 𒋫𒀊𒁍𒋫𒄠 𒀀𒈾 𒈾𒁕𒉏 𒍢𒄭𒊑𒅎 𒄿𒅗𒌔𒍝𒊏: "𒊭 X 𒀉𒁲𒉡, Y 𒄿𒆷𒀝𒆠". 𒆷 𒈪𒅎𒈠 𒁲𒉡𒌝 𒊭 𒆷 𒍣𒁍𒋾𒅎 — 𒋫𒀊𒁍𒌈 𒄿𒈾 𒆗 𒊭𒈾𒋾𒅎 𒅋𒆷𒀝, 𒌋 𒈾𒁕𒉡𒌝 𒆷 𒄿𒁀𒀸𒅆. 𒀀𒈬𒌨: 𒋫𒀊𒁍𒌈 𒊭 𒆷 𒍣𒁍𒋾𒅎 𒀀𒉿𒋫𒄠 𒊭 𒍣𒁍𒋾𒅎 𒆷 𒄿𒅗𒀭 𒌋 𒇽-𒈦 𒊭 𒂍 𒅆𒅁𒊑𒅎 𒁮𒆠𒅖 𒍑𒋼𒇷. 𒊭 𒀀𒈾 𒋫𒀊𒁍𒋾𒅎 𒅗𒌔𒊒 𒋗𒈠 𒋗𒁺𒌨.',
  'f.I:rentfak_av.label': '𒈪𒉡𒌈 𒊭 𒈾𒁕𒉏 𒊭 𒊕𒁺 𒊭 𒅆𒁍𒋾𒅎',
  'f.I:rentfak_av.hint': '𒄿𒈾 𒈾𒁕𒉏 𒊭 𒁀𒆷𒁲𒅎 𒅖𒋼𒂗𒈠. 𒉺𒈾𒉡𒌝 𒆠𒈠 𒇽-𒈦 𒊭 𒂍 𒅆𒅁𒊑𒅎; 𒊕𒁺 𒊑𒅅𒊓𒄠 𒊭 𒈬𒌨𒍣𒅎 𒆷 𒄿𒋗 𒌋 𒁮𒆠𒅖 𒄿𒊐𒁉. 𒈪𒉡𒋫𒄠 𒊭 𒁾𒁉𒅗 𒋗𒁺𒌨. 𒄿𒈾 𒆷 𒈠𒉏 𒈾𒁕𒉡𒌝 𒆷 𒄿𒁀𒀸𒅆.',
  'f.I:rentfak_av.unit': '€ 𒀀𒈾 10.000 €',
  'f.I:rentdyn_av.label': '𒊏𒁍𒌝 𒊭 𒈾𒁕𒉏 𒊭 𒊕𒁺 𒄿𒈾 𒈬',
  'f.I:rentdyn_av.hint': '𒉿𒀜𒊒𒌝 𒊭 𒋫𒀊𒁍𒋾𒅎 𒌋 𒊏𒁍𒌝 𒊭 𒊕𒁺 𒄿𒈾 𒌋𒈪 𒊭 𒈾𒁕𒉏.',
  'f.I:rentfak.label': '𒈪𒉡𒌈 𒊭 𒈾𒁕𒉏 𒊭 𒇽-𒈦 𒊭 𒂍 𒅆𒅁𒊑𒅎',
  'f.I:rentfak.hint': '𒄿𒈾 𒈾𒁕𒉏 𒊭 𒁀𒆷𒁲𒅎 𒅖𒋼𒂗𒈠. 26 € 𒄿𒈾 𒌗 𒀀𒈾 10.000 € 𒆠𒈠 𒊭𒆷𒀸 𒌋 𒅖𒋼𒂗 𒂠𒊑𒀉 𒄿𒈾 𒈨𒀜. 𒄿𒈾 𒁾𒁉𒅎 𒊭 𒁾𒊹𒊑𒅎 𒊭𒁲𒅕𒈠.',
  'f.I:rentfak.unit': '€ 𒀀𒈾 10.000 €',
  'f.I:rentdyn.label': '𒊏𒁍𒌝 𒊭 𒈾𒁕𒉏 𒊭 𒂍 𒅆𒅁𒊑𒅎 𒄿𒈾 𒈬',
  'f.I:rentdyn.hint': '𒉿𒀜𒊒𒌝 𒊭 𒋫𒀊𒁍𒋾𒅎 𒌋 𒊏𒁍𒌝 𒊭 𒊕𒁺 𒄿𒈾 𒌋𒈪 𒊭 𒈾𒁕𒉏.',
  'f.I:fuenftel.label': '𒁲𒉆 𒊭 𒄩𒈪𒅖𒋾𒅎 𒀀𒈬𒌨',
  'f.I:fuenftel.hint': '§ 34 EStG 𒄿𒈾 𒅗𒌔𒁉𒅎 𒅖𒋼𒂗 𒊭 𒊑𒅅𒋛𒅎 𒊭 § 3 Nr. 63 𒄿𒈾 𒌋𒈪 𒍢𒄭𒊒𒋾𒅎 𒀉𒋫𒈾𒀜𒁷 (BFH X R 23/15). 𒁲𒉡𒌝 𒆠𒉡𒌝: 𒆷.',
  'f.I:fuenftel.o0': '𒆷 (𒁲𒉡𒌝 𒆠𒉡𒌝)',
  'f.I:fuenftel.o1': '𒆠𒄠',
  'f.I:planende.label': '𒍠 𒊭 𒈪𒀉𒄩𒊑𒅎 𒄿𒈾 𒊭𒈾𒋾𒅎',
  'f.I:planende.hint': '𒁲𒉡𒌝 𒊭 𒈾𒁕𒉏 𒀀𒁲 𒀭𒉏 𒅋𒆷𒀝. 𒈾𒁕𒉡𒌝 𒊭 𒁀𒆷𒁲𒅎 𒄿𒈾 𒍠 𒅖𒋼𒂗 𒅎𒈠𒀜𒁕𒀜; 𒊭 𒅖𒌅 𒀭𒉏 𒅋𒆷𒆪 𒄿𒈾 𒁾𒁉𒅎 𒊭 𒋼𒅕𒋾𒅎 𒊭𒁲𒅕𒈠. 𒊭 𒄿𒆷𒀊𒁉𒊒 𒄿𒈾 𒀭𒉏 𒄿𒇷𒅅𒆠.',
  'f.I:planende.unit': '𒊭𒈾𒌈',
  'f.I:ausscheid.label': '𒉿𒍪𒌝 𒅖𒌅 𒅆𒅁𒊑𒅎',
  'f.I:ausscheid.hint': '𒅖𒌅 𒀭𒉏 𒆷 𒀉 𒌋 𒆷 𒈾𒁕𒉡𒌝. 𒊕𒁺 𒄿𒊐𒁉 𒀀𒁲 𒊑𒂠 𒈾𒁕𒉏.',
  'f.I:ausscheid.unit': '𒊭𒈾𒌈',
  'f.I:tzalter.label': '𒅆𒅁𒊒𒌝 𒍣𒀉𒌈 𒅖𒌅 𒊭𒈾𒋾𒅎',
  'f.I:tzalter.hint': '𒆗 𒈪𒈾𒋾𒅎 𒂊𒇷 𒊑𒂠 𒈾𒁕𒉏: 𒅆𒅁𒊒𒌝 𒍣𒀉𒌈 𒆷 𒄿𒁀𒀸𒅆. 𒅖𒋗 𒀭𒉏 𒉺𒈾𒉡𒌝 67 𒅆.',
  'f.I:tzalter.unit': '𒊭𒈾𒌈',
  'f.I:tzfaktor.label': '𒈪𒉡𒌈 𒊭 𒅆𒅁𒊑𒅎 𒍣𒀉𒋾𒅎',
  'f.I:tzfaktor.hint': '𒍣𒀉𒌈 𒊭 𒀉 𒈾𒀊𒄩𒊑𒅎. 𒋛𒀉𒋫 𒊭𒆷𒊭𒀜 𒄿𒈾 𒈨𒀜 𒆠𒈠 𒅆𒅁𒊒𒌝 𒊭 𒋛𒀉𒋫 𒊭𒆷𒊭𒀜 𒄿𒈾 𒈨𒀜.',
  'f.I:gsteig.label': '𒊏𒁍𒌝 𒊭 𒀉 𒄿𒈾 𒈬',
  'f.I:gsteig.hint': '𒀭𒉡𒌝 𒍠 𒊭 𒊑𒅅𒋛𒅎, 𒈪𒉡𒋫𒄠 𒊑𒂠𒋫𒄠, 𒀉 𒊭 𒈾𒀊𒄩𒊑𒅎 𒌋 𒅆𒈠𒄠 𒊭 𒈾𒁕𒉏 𒀉𒋾 𒊏𒈠𒉌𒋗 𒄿𒊐𒁉.',
  'f.I:stkl.label': '𒁲𒉡𒌝 𒊭 𒈪𒅅𒋛𒅎',
  'f.I:stkl.hint': 'DĪNUM 𒊏𒁍𒌝 𒅆, 𒆷 𒈪𒉡𒌈 𒊭 𒌗: 𒈪𒉡𒌈 𒍣𒋫𒄠 𒊭 𒌗 𒄿𒅗𒀭, 𒌋 𒁾𒁍𒌝 𒊭 𒊭𒀜𒋾𒅎 𒄿𒈾 𒁲𒉏 𒊭 𒈪𒅖𒇷𒅎 𒄿𒈠𒀭𒉡 (§ 32a Abs. 5 EStG). 𒄿𒈾 "𒅖𒋼𒉌𒅖" 𒅗𒌔𒉺𒄠 𒊭 𒋫𒀊𒁉𒅗 𒋗𒁺𒌨.',
  'f.I:stkl.o1': '𒀀𒈾 𒊏𒈠𒉌𒅗',
  'f.I:stkl.o3': '𒅖𒋼𒉌𒅖 (𒁲𒉡𒌝 𒊭 𒈪𒅖𒇷𒅎)',
  'f.I:partner.label': '𒅗𒌔𒁍𒌝 𒊭 𒈪𒅅𒋛𒅎 𒊭 𒋫𒀊𒁉𒅗',
  'f.I:partner.hint': '𒄿𒈾 "𒅖𒋼𒉌𒅖" 𒅖𒋼𒂗𒈠. 𒄿𒈠𒀭𒉡: 2·ESt((zvE + zvE_𒋫𒀊𒁉𒅎)/2).',
  'f.I:kist.label': '𒈪𒉡𒌈 𒊭 𒈪𒅅𒋛𒅎 𒊭 𒂍 𒄿𒇷𒅎',
  'f.I:kist.hint': '𒊓𒈠𒈾𒀜 𒄿𒈾 𒈨𒀜 𒄿𒈾 𒈠𒋾𒅎 𒅖𒋼𒂗, 𒋾𒅆𒀉 𒄿𒈾 𒈨𒀜 𒄿𒈾 𒈠𒋾𒅎 𒊭𒉌𒋾𒅎, 𒆷 𒈪𒅎𒈠 𒀀𒈾 𒊭 𒅖𒌅 𒂍 𒄿𒇷𒅎 𒉿𒍪. 𒀭𒉡𒌝 𒈪𒅅𒊓𒄠 𒊭 𒈦 𒄿𒋻: 0,25/(1+0,25k)·(1+0,055+k).',
  'f.I:tarifanp.label': '𒈾𒅗𒊒𒌝 𒊭 𒍠 𒊭 𒈪𒅅𒋛𒅎 𒄿𒈾 𒈬',
  'f.I:tarifanp.hint': '𒈾𒀊𒄩𒊒𒌝 𒊭 𒁲𒉏 𒀀𒈾 λ = (1+x)^t 𒄿𒊏𒀊𒁉𒅖: ESt = s·λ·T(zvE/s/λ). 𒀭𒉡𒌝 𒆠𒈠 𒈾𒅗𒊒𒌝 𒊭 𒆗 𒍠 𒅆. 𒆷 𒈪𒅎𒈠 𒈾𒀊𒄩𒊏𒄠 𒊭 𒊏𒁍𒌝 𒊭 𒅗𒌔𒍣𒅎 𒌋𒆗𒇴.',
  'f.I:kinder.label': '𒈪𒉡𒌈 𒊭 𒌉-𒅗',
  'f.I:kinder.hint': '𒋫𒀊𒁍𒌈 𒊭 𒌉 𒄿𒈾 𒊕𒁺 𒊭 𒅆𒁍𒋾𒅎: 𒅖𒋼𒂗 € 𒀀𒈾 𒅖𒋼𒂗 € 𒊭 𒋫𒀜𒁲𒉡, 𒀀𒁲 𒊭𒆷𒀸 𒈨𒀜 € 𒀀𒈾 𒌉 𒅖𒋼𒂗.',
  'f.I:kind_jahre.label': '𒊭𒈾𒌈 𒊭 𒋫𒀊𒁍𒋾𒅎 𒊭 𒌉',
  'f.I:kind_jahre.hint': '𒋫𒀊𒁍𒌈 𒊭 𒌉 𒀀𒈾 𒅗𒌔𒁉𒅎 𒊭 𒌉 𒅗𒌔𒊏𒀜 (§ 85 EStG), 𒌋 𒅖𒋗 𒀭𒉏 𒄿𒈾 𒆗 𒌋𒈪 𒊭 𒁲𒄷𒋾𒅎 𒆷 𒅋𒆷𒀝.',
  'f.I:kind_jahre.unit': '𒊭𒈾𒌈',
  'f.I:kinderlos.label': '𒆷 𒌉 (𒋫𒀊𒁍𒌈 𒊭 𒊑𒅅𒋛𒅎)',
  'f.I:kinderlos.hint': '𒋛𒀉𒋫 𒄿𒈾 𒂠𒊑𒀉 𒊭 𒅖𒋼𒂗 𒄿𒈾 𒈨𒀜 𒀀𒈾 𒊑𒅅𒋛𒅎 𒊭 𒈬𒌨𒍣𒅎, 𒌋 𒇽 𒅆𒅁𒊏𒄠 𒂊𒁉𒋗𒌝 𒂊𒁲𒅖𒅆𒋗 𒄿𒈾𒀜𒁷 (§ 55 Abs. 3 SGB XI).',
  'f.I:kinderlos.o0': '𒆷',
  'f.I:kinderlos.o1': '𒆠𒄠',
  'f.I:k_bav.label': '𒍣𒋫𒌈 𒊭 𒂍 𒅆𒅁𒊑𒅎 𒄿𒈾 𒈬',
  'f.I:k_bav.hint': '𒊑𒅅𒋧 𒊭 𒋫𒄠𒅗𒊑𒅎 𒌋 TER. 𒍣𒋫𒌈 𒆠𒈾𒌈 𒄿𒈾 𒁾𒁉𒅎 𒊭 𒁾𒊹𒊑𒅎 𒊭𒀜𒊏 — 𒀀𒈬𒌨, 𒆷 𒋫𒈠𒀭𒉡 𒄿𒈾 𒇷𒅁𒁉𒅗.',
  'f.I:k_av.label': '𒍣𒋫𒌈 𒊭 𒊕𒁺 𒊭 𒅆𒁍𒋾𒅎 𒄿𒈾 𒈬',
  'f.I:k_av.hint': '𒄿𒈾 𒊕𒁺 𒆠𒉏 𒍣𒅎𒁕𒌈 𒍣𒋫𒋾𒅎 𒀀𒈾 𒅖𒋼𒂗 𒄿𒈾 𒈨𒀜 𒄿𒈾 𒈬 𒄿𒆗𒆷.',
  'f.I:k_priv.label': '𒍣𒋫𒌈 𒊭 𒊕𒁺 𒊭 𒊏𒈠𒉌𒅗 𒄿𒈾 𒈬',
  'f.I:k_priv.hint': 'TER 𒊭 ETF 𒊏𒀊𒋆 𒊭 𒆗 𒈠𒋫𒋾𒅎 𒅖𒋼𒂗𒈠.',
  'f.I:infl.label': '𒈠𒁺𒌝 𒊭 𒁕𒀭𒉡𒌓 𒅗𒌔𒁉𒅎 𒄿𒈾 𒈬',
  'f.I:infl.hint': '𒈪𒉡𒌈 𒊭 𒌉𒊑𒅎 𒀀𒈾 "𒁕𒀭𒉡𒌈 𒊭 𒄿𒈾𒀭𒈾". 𒁲𒈾𒋾𒅎 𒆷 𒄿𒈾𒀝𒆠𒅕, 𒈪𒈾𒋾𒅎 𒅗𒇴 𒄿𒈾𒀝𒆠𒅕.',
  'f.I:sonst_zve.label': '𒅗𒌔𒁍𒌝 𒊭𒉡𒌝 𒊭 𒈪𒅅𒋛𒅎 𒄿𒈾 𒅆𒁍𒋾𒅎',
  'f.I:sonst_zve.hint': '𒁀𒈝 𒍣𒀉𒋾𒅎 𒊭 𒈾𒁕𒉏 𒊭 𒈠𒋾𒅎 𒊭 𒈪𒅅𒊓𒄠 𒄿𒈾𒀜𒁷, 𒁀𒈝 𒊭𒆷𒀸 𒁲𒈾𒋾𒅎 𒀭𒈾𒋾𒅎. 𒀭𒉡𒌝 𒈪𒅅𒊓𒄠 𒊭 𒍠 𒄿𒈾 𒌋𒈪 𒊭 𒈾𒁕𒉏 𒄿𒅗𒀭, 𒌋 𒅖𒋗 𒀭𒉏 𒈾𒅗𒊒𒌝 t₀ − t₁.',
  'f.I:rente_br.label': '𒈾𒁕𒉡𒌝 𒊭 𒈠𒋾𒅎 𒈾𒀊𒄩𒊒𒌝 𒄿𒈾 𒈬',
  'f.I:rente_br.hint': '𒀀𒈾 𒍠 𒊭 𒊑𒅅𒋛𒅎 𒊭 𒈬𒌨𒍣𒅎 𒅖𒋼𒂗𒈠: 𒈾𒁕𒉡𒌝 𒊭 𒈠𒋾𒅎 𒌋 𒈾𒁕𒉡𒌝 𒊭 𒂍 𒅆𒅁𒊑𒅎 𒅖𒋼𒂗 𒍠 𒀀𒈾 𒅆𒈾 𒄿𒋗 (§ 223 Abs. 3 SGB V).',
  'f.P:bbg_rv.label': '𒍠 𒊭 𒈾𒁕𒉏, 𒊑𒅅𒋧 𒊭 𒅆𒁍𒋾𒅎 (𒄿𒈾 𒈬)',
  'f.P:bbg_rv.hint': 'SVBezGrV 2026 (BGBl. 2025 I Nr. 116), 𒅖𒋼𒂗 𒀀𒈾 𒆗 𒈠𒋾𒅎.',
  'f.P:bbg_kv.label': '𒍠 𒊭 𒈾𒁕𒉏, 𒊑𒅅𒋧 𒊭 𒈬𒌨𒍣𒅎',
  'f.P:bbg_kv.hint': 'SVBezGrV 2026; 5.812,50 € 𒄿𒈾 𒌗.',
  'f.P:bezug.label': '𒈪𒉡𒌈 𒊑𒂠𒌈 (𒄿𒈾 𒌗)',
  'f.P:bezug.hint': 'SVBezGrV 2026, 47.460 € 𒄿𒈾 𒈬. 𒍣𒀉𒌈 𒊭 𒂠𒊑𒅎 𒊭 𒀭𒉏 𒍠 𒊭 𒆷 𒈪𒅅𒋛𒅎 𒀀𒈾 𒈾𒁕𒉏 𒊭 𒂍 𒅆𒅁𒊑𒅎 𒅆 (§ 226 Abs. 2 S. 2 SGB V).',
  'f.P:de_rv.label': '𒀉 𒊭 𒈾𒀊𒄩𒊑𒅎, 𒊑𒅅𒋧 𒊭 𒅆𒁍𒋾𒅎',
  'f.P:de_rv.hint': 'Anlage 1 zu SGB VI, 𒈪𒉡𒌈 𒊭 2026 — 𒅖𒌈 𒊭 𒈪𒈾𒋾𒅎 𒊭 𒀉.',
  'f.P:rw.label': '𒅆𒈬𒌝 𒊭 𒈾𒁕𒉏 𒄿𒈾𒀭𒈾',
  'f.P:rw.hint': 'Rentenwertbestimmungsverordnung 2026, 𒅖𒌅 1.7.2026: 42,52 € (+4,24 %).',
  'f.P:rw.unit': '€',
  'f.P:rv_an.label': '𒍣𒀉𒌈 𒊭 𒇽 𒅆𒅁𒊏𒄠 𒂊𒁉𒋆, 𒊑𒅅𒋧 𒊭 𒅆𒁍𒋾𒅎',
  'f.P:rv_an.hint': '18,6 %, 𒈪𒅖𒇴.',
  'f.P:av_an.label': '𒍣𒀉𒌈 𒊭 𒇽 𒅆𒅁𒊏𒄠 𒂊𒁉𒋆, 𒊑𒅅𒋧 𒊭 𒆷 𒅆𒅁𒊑𒅎',
  'f.P:av_an.hint': '2,6 %, 𒈪𒅖𒇴.',
  'f.P:kv_allg.label': '𒈪𒉡𒌈 𒈾𒀊𒄩𒊒𒌝 𒊭 𒊑𒅅𒋛𒅎 𒊭 𒈬𒌨𒍣𒅎',
  'f.P:kv_allg.hint': '§ 241 SGB V.',
  'f.P:kv_zus.label': '𒈪𒉡𒌈 𒂠𒊺𒌈 𒊭 𒊑𒅅𒋛𒅎 𒊭 𒈬𒌨𒍣𒅎',
  'f.P:kv_zus.hint': '𒋼𒅕𒌈 𒊭 BMG; 𒆗 𒁉𒋫𒌈 𒊭 𒊑𒅅𒋛𒅎 𒄿𒈾𒀝𒆠𒊏 — 𒈪𒉡𒋫𒄠 𒊭 𒁉𒋾𒅗 𒋗𒁺𒌨.',
  'f.P:pv_ges.label': '𒈪𒉡𒌈 𒈾𒀊𒄩𒊒𒌝 𒊭 𒊑𒅅𒋛𒅎 𒊭 𒉺𒆷𒄭𒅎',
  'f.P:pv_ges.hint': '§ 55 SGB XI. 𒈠𒁺𒌝 𒀀𒈾 𒌉 𒊭𒉏 𒌋 𒂊𒇷 𒆷 𒄿𒈠𒀭𒉡.',
  'f.P:pv_an.label': '𒍣𒀉𒌈 𒊭 𒇽 𒅆𒅁𒊏𒄠 𒂊𒁉𒋆, 𒊑𒅅𒋧 𒊭 𒉺𒆷𒄭𒅎',
  'f.P:pv_an.hint': '𒄿𒈾 𒈠𒋾𒅎 𒅖𒋼𒂗 𒈾𒆠𒅕 (2,3 %).',
  'f.P:pv_kl.label': '𒂠𒊺𒌈 𒀀𒈾 𒊭 𒆷 𒌉',
  'f.P:pv_kl.hint': '§ 55 Abs. 3 SGB XI, 𒇽 𒅆𒅁𒊏𒄠 𒂊𒁉𒋗𒌝 𒂊𒁲𒅖𒅆𒋗.',
  'f.P:gfb.label': '𒍠 𒊭 𒆷 𒈪𒅅𒋛𒅎 (𒌀 𒊭 𒍠 𒅖𒋼𒂗)',
  'f.P:gfb.hint': '§ 32a Abs. 1 EStG 𒄿𒈾 Steuerfortentwicklungsgesetz.',
  'f.P:e2.label': '𒌀 𒊭 𒍠 𒅆𒈾',
  'f.P:e2.hint': '𒈪𒅅𒋧 𒊭 𒍠 𒅖𒌅 14 % 𒀀𒈾 23,97 % 𒄿𒊐𒁉.',
  'f.P:e3.label': '𒌀 𒊭 𒍠 𒊭𒆷𒀸',
  'f.P:e3.hint': '𒈪𒅅𒋧 𒊭 𒍠 𒅖𒌅 23,97 % 𒀀𒈾 42 % 𒄿𒊐𒁉.',
  'f.P:e4.label': '𒊑𒂠 𒍠 𒄩𒈪𒅖 (𒈪𒅅𒋧 𒊭 𒊭𒊑)',
  'f.P:e4.hint': '𒅖𒌅 277.826 € 45 % 𒄿𒁀𒀸𒅆.',
  'f.P:a2.label': '𒈪𒉡𒌈 𒀀₂',
  'f.P:a2.hint': 'ESt = (a₂·y + b₂)·y, y = (zvE − Grundfreibetrag)/10.000.',
  'f.P:b2.label': '𒈪𒉡𒌈 b₂',
  'f.P:a3.label': '𒈪𒉡𒌈 𒀀₃',
  'f.P:a3.hint': 'ESt = (a₃·z + b₃)·z + c₃, z = (zvE − 17.799)/10.000.',
  'f.P:b3.label': '𒈪𒉡𒌈 b₃',
  'f.P:c3.label': '𒆠𒉡𒌝 c₃',
  'f.P:c4.label': '𒆠𒉡𒌝 c₄',
  'f.P:c4.hint': 'ESt = 0,42·zvE − c₄.',
  'f.P:c5.label': '𒆠𒉡𒌝 c₅',
  'f.P:c5.hint': 'ESt = 0,45·zvE − c₅.',
  'f.P:soli.label': '𒂠𒊺𒌈 𒊭 𒈪𒀉𒄥𒋾𒅎 (Soli)',
  'f.P:soli.hint': 'SolzG 1995.',
  'f.P:soli_fg.label': '𒍠 𒊭 Soli',
  'f.P:soli_fg.hint': '2026, 𒁲𒉡𒌝 𒊑𒂠𒌈, 𒀀𒈾 𒈪𒅅𒋛𒅎 𒆠𒉏. 𒄿𒈾 𒁲𒉏 𒊭 𒈪𒅖𒇷𒅎 𒅆𒉌𒋗. 𒌋 𒀉𒋾𒋗 𒍠 𒊭 𒋰𒋾𒅎.',
  'f.P:soli_mz.label': '𒍠 𒊭 𒋰𒋾𒅎, 𒁉𒅋𒌈 𒊭 𒍠',
  'f.P:soli_mz.hint': '§ 3 Abs. 2a SolzG.',
  'f.P:an_pausch.label': '𒍠 𒊭 𒆷 𒈪𒅅𒋛𒅎 𒀀𒈾 𒇽 𒅆𒅁𒊏𒄠 𒂊𒁉𒋆',
  'f.P:an_pausch.hint': '§ 9a S. 1 Nr. 1a EStG.',
  'f.P:sa_pausch.label': '𒍠 𒊭 𒆷 𒈪𒅅𒋛𒅎 𒀀𒈾 𒈾𒁕𒈾𒋾𒅎 𒊭𒉡𒋾𒅎',
  'f.P:sa_pausch.hint': '§ 10c EStG.',
  'f.P:kapst.label': '𒈪𒉡𒌈 𒊭 𒈪𒅅𒋛𒅎 𒊭 𒈦',
  'f.P:kapst.hint': '§ 32d Abs. 1 EStG.',
  'f.P:tfs.label': '𒍣𒀉𒌈 𒆷 𒈪𒅅𒋛𒌈, 𒊕𒁺 𒊭 𒋫𒄠𒅗𒊒𒋾𒅎',
  'f.P:tfs.hint': '§ 20 Abs. 1 Nr. 3 i.V.m. § 20 InvStG, 𒍣𒀉𒌈 𒊭 𒋫𒄠𒅗𒊒𒋾𒅎 𒂊𒇷 50 %.',
  'f.P:sparerpb.label': '𒍠 𒊭 𒆷 𒈪𒅅𒋛𒅎 𒀀𒈾 𒊭 𒄿𒉺𒀝𒆠𒁺',
  'f.P:sparerpb.hint': '§ 20 Abs. 9 EStG; 𒄿𒈾 𒁲𒉏 𒊭 𒈪𒅖𒇷𒅎 𒅆𒉌𒋗. 𒈪𒅅𒊓𒄠 𒊭 𒊑𒋆 𒈠𒁲𒅖 𒄿𒆷𒀝𒆠 — 𒉺𒀠𒃵 𒊭 𒈪𒈾𒋾𒅎 𒀀𒈬𒌨.',
  'f.P:basiszins.label': '𒈦 𒊑𒂠𒌈 𒊭 𒈪𒅅𒋛𒅎 𒊭 𒊑𒋆',
  'f.P:basiszins.hint': 'BMF-Schreiben 13.01.2026, § 18 Abs. 4 InvStG (2025: 2,53 %). 𒀀𒈾 𒆷 𒈪𒅎𒈠 𒋗𒁺𒌨𒈠 𒈪𒅅𒋧 𒊭 𒊑𒋆 𒆷 𒄿𒁀𒀸𒅆.',
  'f.P:vp_faktor.label': '𒈪𒉡𒌈 𒀀𒈾 𒈦 𒊑𒂠𒋾𒅎',
  'f.P:vp_faktor.hint': '§ 18 Abs. 1 S. 1 InvStG.',
  'f.P:st_frei_q.label': '𒆷 𒈪𒅅𒋧 § 3 Nr. 63 (𒍣𒀉𒌈 𒊭 BBG-RV)',
  'f.P:st_frei_q.hint': '𒊓𒈠𒈾𒀜 𒄿𒈾 𒈨𒀜 𒊭 BBG-RV = 8.112 € 𒄿𒈾 2026.',
  'f.P:sv_frei_q.label': '𒆷 𒊑𒅅𒋧 (𒍣𒀉𒌈 𒊭 BBG-RV)',
  'f.P:sv_frei_q.hint': '§ 1 Abs. 1 S. 1 Nr. 9 SvEV; 4 % = 4.056 € 𒄿𒈾 2026. 𒌋 𒀭𒉡𒌝 𒍠 𒊭 𒁲𒉏 𒊭 § 1a BetrAVG 𒅆.',
  'f.P:zul_g1.label': '𒋫𒀊𒁍𒌈 𒅖𒋼𒂗 (𒀀𒈾 € 𒊭 𒈾𒁕𒉏 𒊭 𒊏𒈠𒉌𒅗)',
  'f.P:zul_g1.hint': '𒍣𒅎𒁕𒌈 𒂠𒊺𒌈 𒊭 𒊕𒁺 𒊭 𒅆𒁍𒋾𒅎, 𒅖𒌅 𒌗 𒄩𒄠𒋆 𒊭 2026, 𒀀𒈾 𒂊𒁁𒋆 𒅖𒌅 1.1.2027.',
  'f.P:zul_s1.label': '𒍠 𒅖𒋼𒂗',
  'f.P:zul_s1.hint': '𒀀𒁲 360 €: 𒄩𒄠𒊭𒀜 𒄿𒈾 𒂠𒊑𒀉 𒀀𒈾 € 𒅖𒋼𒂗.',
  'f.P:zul_g2.label': '𒋫𒀊𒁍𒌈 𒊭𒉌𒌈 (𒀀𒈾 € 𒊭 𒈾𒁕𒉏 𒊭 𒊏𒈠𒉌𒅗)',
  'f.P:zul_g2.hint': '𒅖𒌅 361 𒀀𒁲 1.800 €: 𒄩𒄠𒊭𒀜 𒄿𒈾 𒂠𒊑𒀉 𒊭 𒈪𒅖𒇷𒅎 𒀀𒈾 € 𒅖𒋼𒂗.',
  'f.P:zul_s2.label': '𒍠 𒊭𒉌𒌈',
  'f.P:zul_s2.hint': '𒍠 𒊏𒁍𒌝 𒊭 𒈾𒁕𒉏 𒅗𒍣𒊑𒅎; 𒌋 𒋫𒀊𒁍𒌈 𒊑𒂠𒌈 𒈾𒀊𒄩𒊒𒌝 540 € 𒄿𒁀𒀸𒅆.',
  'f.P:kind_zul.label': '𒋫𒀊𒁍𒌈 𒀀𒈾 𒌉 𒅖𒋼𒂗',
  'f.P:kind_zul.hint': '𒅖𒋼𒂗 € 𒀀𒈾 𒅖𒋼𒂗 € 𒊭 𒋫𒀜𒁲𒉡, 𒀀𒁲 𒊭𒆷𒀸 𒈨𒀜 € 𒀀𒈾 𒌉.',
  'f.P:av_max.label': '𒍠 𒊏𒁍𒌝 𒊭 𒈾𒁕𒉏 𒄿𒈾 𒈬',
  'f.P:av_max.hint': 'BMF-FAQ, 05.05.2026. 𒈠𒌈 𒂊𒇷 𒀭𒉏 𒀀𒈾 𒉺𒁕𒉏 𒊭𒉏 𒅋𒆷𒀝 𒌋 𒆠𒈠 𒊕𒁺 𒊭 𒊏𒈠𒉌𒅗 𒈪𒅅𒊓𒄠 𒄿𒈾𒀜𒁷.',
  'f.P:av_sa_max.label': '𒍠 𒊏𒁍𒌝 𒊭 𒈾𒁕𒈾𒋾𒅎 𒊭𒉡𒋾𒅎 § 10a',
  'f.P:av_sa_max.hint': 'DĪNUM ŠA ṬUPPIM, 𒌅𒆰𒌈 70 %. 𒈾𒁕𒉡𒌝 𒊭 𒊏𒈠𒉌𒅗 𒀀𒁲 1.800 € 𒀉𒋾 𒋫𒀊𒁍𒋾𒅎. 𒈪𒉡𒌈 𒅖𒋼𒂗𒈠 𒄿𒅗𒀭 𒋗𒌝𒈠 𒌉 𒅆𒈠𒄠 𒊭 𒊕𒁺 𒊭 𒅆𒁍𒋾𒅎 𒍑𒋼𒇷 𒌋 𒄿𒈠𒀜𒁲.',
  'f.P:ertragsq.label': '𒍣𒀉𒌈 𒊭 𒈦 (𒄿𒈾 67 𒊭𒈾𒋾𒅎)',
  'f.P:ertragsq.hint': '§ 22 Nr. 1 S. 3 Buchst. a Doppelbuchst. bb EStG, 𒀀𒈾 𒍣𒀉𒋫𒋾𒅎 𒆷 𒅗𒍣𒊏𒋾𒅎.',
  'f.P:halb.label': '𒍣𒀉𒌈 𒈪𒅅𒋛𒌈 𒊭 𒈾𒅗𒊑𒅎',
  'f.P:halb.hint': '𒆠𒈠 § 20 Abs. 1 Nr. 6 S. 2 EStG (𒊑𒅅𒋧 𒂊𒇷 12 𒊭𒈾𒋾𒅎, 𒈾𒁕𒉡𒌝 𒅖𒌅 62 𒊭𒈾𒋾𒅎): 𒈪𒅖𒈝 𒊭 𒈾𒅗𒊑𒅎. 𒌅𒆰𒌈 80 %.',

  /* ---------------- Rahmen, Fenstertitel, Kopf und Fuß ---------------- */
  'app.title': '𒈪𒀉𒄩𒊒𒌝 𒊭 𒊕𒁺 𒊭 𒅆𒁍𒋾𒅎',
  'app.meta': '𒇽-𒈦 𒊭 𒂍 𒅆𒅁𒊑𒅎, 𒊕𒁺 𒊭 𒅆𒁍𒋾𒅎 𒌋 𒊕𒁺 𒊭 𒊏𒈠𒉌𒅗 𒄿𒈾 𒅗𒌔𒁉𒅎 𒋛𒀉𒋾𒅎 𒅖𒋼𒂗 𒀀𒈾 𒈪𒀉𒄩𒊑𒅎 𒅋𒆷𒆪. 𒍣𒅎𒁕𒌈 𒊭 2026.',
  'hdr.title': '𒈪𒀉𒄩𒊒𒌝 𒊭 𒊕𒁺 𒊭 𒅆𒁍𒋾𒅎',
  'hdr.sub': '𒇽-𒈦 𒊭 𒂍 𒅆𒅁𒊑𒅎, 𒊕𒁺 𒊭 𒅆𒁍𒋾𒅎 𒌋 𒊕𒁺 𒊭 𒊏𒈠𒉌𒅗 &mdash; 𒄿𒈾 <b>𒅗𒌔𒁉𒅎 𒋛𒀉𒋾𒅎 𒅖𒋼𒂗</b> 𒌋 𒄿𒈾 ETF 𒅖𒋼𒂗. 𒍣𒅎𒁕𒌈 𒊭 2026.',
  'win.header': '𒈪𒀉𒄩𒊒𒌝 𒊭 𒊕𒁺 𒊭 𒅆𒁍𒋾𒅎',
  'win.result': '𒀀𒉿𒌈 𒂵𒈪𒅕𒌈',
  'win.input': '𒈪𒈾𒌅𒅗',
  'win.chart': '𒉺𒀠𒄖',
  'win.extra': '𒈪𒈾𒌈 𒊭𒉡𒌈',
  'win.calc': '𒉺𒁕𒀭 𒈪𒈾𒋾𒅎',
  'win.share': '𒆪𒍑𒋓 𒌋 𒄿𒁷',
  'win.min': '𒍢𒄭𒊏𒄠 𒂊𒁍𒍑',
  'win.restore': '𒀀𒈾 𒀸𒊑𒋗 𒋼𒅕',
  'win.n': function(p){ return '𒁾𒁍𒌝 ' + p.n; },
  'input.sub': '𒈪𒈾𒌈 𒄿𒈾 𒆗 𒈾𒅗𒊑𒅎 𒀉𒋫𒈾𒀊𒁀𒆷. <span class="qm" style="cursor:default">?</span> 𒆗 𒀸𒊑𒅎 𒊏𒈠𒀭𒋗 𒌋𒊭𒀭𒈾.',
  'extra.sub': '𒅗𒇴 𒀭𒉡𒌝 𒈪𒈾𒋾𒅎 𒁮𒂵𒋾𒅎 𒊭 𒊑𒋆 𒄿𒋗. 𒆷 𒋫𒆷𒀊𒁁 𒋗𒌝𒈠 𒆷 𒀀𒈾 𒅗𒋆.',
  'calc.sub': '𒀀𒈾 𒊭 𒉺𒁕𒉆 𒀀𒈠𒊏𒄠 𒄿𒄩𒀸𒊺𒄷.',
  'share.sub': '𒈪𒈾𒌅𒅗 𒄿𒈾 𒁾𒁉𒅎 𒊭 𒊏𒈠𒉌𒅗 𒅖𒋼𒂗𒈠 𒊭𒀝𒈾 (<kbd>localStorage</kbd>). 𒈪𒅎𒈠 𒆷 𒅔𒈾𒀜𒁷; 𒆷 𒂍 𒁾𒁉𒅎 𒊭 𒈠𒋾𒅎, 𒆷 𒇽 𒀀𒈪𒊒𒌝.',
  'ui.share': '𒉺𒁕𒉆 𒊭 𒈪𒈾𒋾𒅎 𒆪𒍑𒋓',
  'ui.export': '𒀀𒈾 𒁾 𒆪𒍑𒋓',
  'ui.import': '𒁾 𒇷𒆠',
  'ui.reset': '𒅗𒇴 𒀀𒈾 𒀸𒊑𒋗 𒋼𒅕',
  'ui.pin.set': '𒀀𒈾 𒈪𒀉𒄩𒊑𒅎 𒄩𒊓𒌔',
  'ui.pin.clear': '𒈪𒀉𒄩𒊏𒄠 𒉺𒊓𒌔',
  'ui.lang': '𒇷𒊭𒉡𒌝',
  'ui.lang.aria': '𒇷𒊭𒉆 𒁉𒅕',
  'ui.lang.partial': '𒍣𒀉𒋫𒄠 𒅖𒋼𒂗 𒈾𒁄𒆪𒌈',
  'ui.lang.partialNote': '𒇷𒊭𒉡𒌝 𒀭𒉡𒌝 <b>𒍣𒀉𒋫𒄠 𒅖𒋼𒂗</b> 𒈾𒁄𒆪𒌓: 𒋗𒈠𒌈 𒊭 𒁾𒁉𒅎, 𒋗𒈠𒌈 𒊭 𒈪𒈾𒋾𒅎, 𒊑𒊭𒌈 𒊭 𒁾𒉺𒋾𒅎 𒌋 𒋗𒈠𒌈 𒊭 𒉺𒀠𒄀𒅎 𒄿𒁀𒀸𒅆. 𒀀𒉿𒌈 𒊭 𒍣𒅎𒁕𒋾𒅎 𒊏𒀊𒊭𒌈 — 𒀀𒉿𒌈 𒊭 <span class="qm" style="cursor:default">?</span>, 𒀀𒉿𒌈 𒂵𒈪𒅕𒌈, 𒌋 𒉺𒁕𒀭 𒈪𒈾𒋾𒅎 — 𒄿𒈾 𒇷𒊭𒉏 𒊭 𒈠𒋾𒅎 𒅖𒋼𒂗 𒄿𒁀𒀸𒅆𒀀. 𒋗𒈠𒌈 𒊭 𒍣𒅎𒁕𒋾𒅎 (BetrAVG, EStG, SGB V) 𒄿𒈾 𒆗 𒇷𒊭𒉌 𒄿𒈾 𒇷𒊭𒉏 𒊭 𒈠𒋾𒅎 𒊭𒀜𒊏: 𒄿𒈾 𒍣𒅎𒁕𒋾𒅎 𒀭𒉌𒌈𒈠 𒄿𒁀𒀸𒅆.',
  'sb.up': '𒀀𒈾 𒂊𒇷𒅖 𒀀𒈾 𒀀𒉿𒋾𒅎 𒂵𒈪𒅕𒋾𒅎',
  'footer.1': '<b>𒆷 𒀀𒉿𒀜 𒈪𒅅𒋛𒅎, 𒆷 𒀀𒉿𒀜 𒊕𒁺.</b> 𒁾𒁍𒌝 𒆷 𒊑𒅅𒋧 𒅆. 𒍣𒅎𒁕𒌈 𒊭 2026 𒀀𒈾 𒊕𒁺 𒂠𒋆 𒊭 𒅆𒁍𒋾𒅎 𒄿𒈾 𒀸𒊑 𒈠𒁺𒋾𒅎 𒆷 𒃵𒊏𒀜; 𒁲𒈾𒌈 𒊭 𒌅𒆰𒋾𒅎 𒈠𒁲𒋾𒅎 𒄿𒈾 "𒉺𒁕𒀭 𒈪𒈾𒋾𒅎 → 𒁕𒀭𒉡𒌈 𒊭 𒁲𒈾𒋾𒅎" 𒊭𒀜𒊏 𒌋 𒄿𒈾 𒀭𒉏 𒅔𒈾𒀝𒆠𒊏.',
  'footer.2': '𒇷𒅁𒁉 𒈪𒈾𒋾𒅎 𒅖𒋼𒂗 𒀀𒈾 𒅖𒋼𒂗 𒅖𒌅 𒁾 𒉺𒉏 𒇷𒆪𒌝 𒌋 𒀀𒈾 𒊭𒆷𒀸 𒈪𒀉𒄩𒊏𒋾𒅎 𒀀𒁲 𒍠 𒊭 𒄿𒇷𒅎 𒈠𒍣 (𒈾𒅗𒊒𒌝 𒊏𒁍𒌝 1,3·10<sup>&minus;14</sup>).',

  /* ---------------- Die drei Optionen ---------------- */
  'opt.bav.name': '𒇽-𒈦 𒊭 𒂍 𒅆𒅁𒊑𒅎 (𒈾𒅗𒊒𒌝 𒊭 𒀉)',
  'opt.bav.short': '𒂍 𒅆𒅁𒊑𒅎',
  'opt.bav.nom': '𒇽-𒈦 𒊭 𒂍 𒅆𒅁𒊑𒅎',
  'opt.bav.satz': '𒇽-𒈦 𒊭 𒂍 𒅆𒅁𒊑𒅎',
  'opt.bav.gen': '𒊭 𒇽-𒈦 𒊭 𒂍 𒅆𒅁𒊑𒅎',
  'opt.av.name': '𒊕𒁺 𒊭 𒅆𒁍𒋾𒅎',
  'opt.av.short': '𒊕𒁺 𒅆𒁍𒋾𒅎',
  'opt.av.nom': '𒊕𒁺 𒊭 𒅆𒁍𒋾𒅎',
  'opt.av.satz': '𒊕𒁺 𒊭 𒅆𒁍𒋾𒅎',
  'opt.av.gen': '𒊭 𒊕𒁺 𒊭 𒅆𒁍𒋾𒅎',
  'opt.priv.name': '𒊕𒁺 ETF 𒊭 𒊏𒈠𒉌𒅗',
  'opt.priv.short': '𒊭 𒊏𒈠𒉌𒅗',
  'opt.priv.nom': '𒊕𒁺 𒊭 𒊏𒈠𒉌𒅗',
  'opt.priv.satz': '𒊕𒁺 𒊭 𒊏𒈠𒉌𒅗',
  'opt.priv.gen': '𒊭 𒊕𒁺 𒊭 𒊏𒈠𒉌𒅗',

  /* ---------------- Kennzahlen ---------------- */
  'metric.monat.label': '𒈾𒁕𒉡𒌝 𒊭 𒌗',
  'metric.monat.unit': '€ 𒄿𒈾 𒌗',
  'metric.monat.desc': '𒈾𒁕𒉡𒌝 𒆠𒉡𒌝 𒄿𒈾 𒆗 𒌋𒈪 𒊭 𒈾𒁕𒉏, 𒄿𒈾 𒁕𒀭𒉡𒌓 𒅗𒌔𒁉𒅎 𒊭 𒄿𒈾𒀭𒈾. 𒈪𒉡𒌈 𒀭𒉌𒌈 𒅖𒋼𒂗𒈠 𒀉𒋾 𒅗𒌔𒁉𒅎 𒋛𒀉𒋾𒅎 𒊭 𒄿𒈾𒀭𒈾 𒀀𒈾 𒈪𒀉𒄩𒊑𒅎 𒅋𒆷𒀝.',
  'metric.ertrag.label': '𒉈𒈨𒈝 𒋛𒀉𒌈 (𒅆𒈬𒌝 𒊭 𒄿𒈾𒀭𒈾)',
  'metric.ertrag.unit': '€',
  'metric.ertrag.desc': '𒈪𒅎𒈠 𒊭 𒁲𒉡𒌝 𒂊𒇷 𒈾𒁕𒉏 𒊭 𒊏𒈠𒉌𒅗 𒄿𒈾𒀜𒁷, 𒄿𒈾 𒁕𒀭𒉡𒌓 𒅗𒌔𒁉𒅎 𒊭 𒄿𒈾𒀭𒈾: 𒅆𒈬𒌝 𒊭 𒄿𒈾𒀭𒈾 𒊭 𒆗 𒈾𒁕𒈾𒋾𒅎 𒋛𒀉𒋫𒋾𒅎 𒁀𒈝 𒅆𒈪𒅎 𒊭 𒅗𒌔𒁉𒅎 𒋛𒀉𒋾𒅎 𒊭 𒋫𒀜𒁲𒉡.',
  'metric.irr.label': '𒈦 𒊭 𒇷𒅁𒁉𒅎',
  'metric.irr.unit': '% 𒄿𒈾 𒈬',
  'metric.irr.desc': '𒈦 𒀀𒈾 𒅗𒌔𒁉𒅎 𒋛𒀉𒋾𒅎 𒊭 𒋫𒀜𒁲𒉡, 𒆠𒉡𒌝. 𒀉𒋾 𒈦 𒊭 ETF 𒀀𒈾 𒈪𒀉𒄩𒊑𒅎 𒅋𒆷𒀝 — 𒈾𒅗𒊒𒌝 𒈪𒅎𒈠 𒅆 𒊭 𒋫𒀊𒁍𒌈 𒌋 𒈾𒁕𒈾𒌈 𒄿𒈾𒀜𒁲𒈾 𒌋 𒄿𒇷𒅅𒆠𒀀.',
  'metric.kapital.label': '𒊕𒁺 𒄿𒈾 𒊑𒂠 𒈾𒁕𒉏',
  'metric.kapital.unit': '€',
  'metric.kapital.desc': '𒉺𒉡𒌝 𒊭 𒈪𒅅𒋛𒅎 𒌋 𒉺𒉡𒌝 𒊭 𒊑𒅅𒊓𒋾𒅎. 𒀭𒉡𒌝 𒀀𒉿𒀜 𒍣𒁍𒋾𒅎 LĀ 𒅆: 𒇽-𒈦 𒊭 𒂍 𒅆𒅁𒊑𒅎 𒄿𒈾 𒀭𒉏 𒈠𒁲𒅖 𒉺𒉆 𒅋𒆷𒀝 𒌋 𒄿𒈾 𒈾𒁕𒉏 𒄿𒈠𒀜𒁲.',
  'metric.pa': ' 𒄿𒈾 𒈬',
  'metric.pp': ' 𒍠',
  'metric.short.monat': '𒌗',
  'metric.short.ertrag': '𒉈𒈨𒈝',
  'metric.short.irr': '𒈦',
  'metric.short.kapital': '𒊕𒁺',

  /* ---------------- Eingabefelder, Rahmenwerk ---------------- */
  'unit.pct': '%',
  'unit.eur': '€',
  'unit.eurm': '€ 𒄿𒈾 𒌗',
  'ui.hintFor': function(p){ return '𒀀𒉿𒌈 𒀀𒈾: ' + p.label; },
  'ui.couple': '<span>⇅</span> 𒅆𒈾 𒀀𒈪𒊏𒌈 𒀀𒈾 𒈪𒉡𒋾𒅎 𒅖𒋼𒂗. 𒅖𒋼𒂗 𒋼𒈾𒀝𒆠𒅕, 𒊭𒉌𒌈 𒅋𒆷𒀝.',
  'ui.cnt.legal': function(p){ return p.n + ' 𒈪𒈾𒌈 𒊭 𒍣𒅎𒁕𒋾𒅎'; },
  'ui.cnt.fields': function(p){ return p.n + ' 𒀸𒊏𒌈'; },
  'ui.legalNote': '𒈪𒈾𒌈 𒊭 𒍣𒅎𒁕𒋾𒅎 𒀉𒋾 𒋗𒈠𒋾𒅎. 𒆷 𒋫𒈾𒀝𒆠𒅕 𒋗𒌝𒈠 𒍣𒅎𒁕𒌈 𒆷 𒅔𒈾𒆠𒅕 𒌋 𒁉𒌈 𒊭 𒊑𒅅𒋛𒅗 𒆷 𒈾𒆠𒅕.',
  'group.bav': '𒋫𒀊𒁍𒌈 𒌋 𒁲𒈾𒌈 𒊭 𒈾𒁕𒉏, 𒀀𒈾 𒇷𒅁𒁉𒅎',
  'group.person': '𒌋𒈬, 𒉿𒍪𒌝 𒅖𒌅 𒅆𒅁𒊑𒅎, 𒅆𒅁𒊒𒌝 𒍣𒀉𒌈',
  'group.steuer': '𒈪𒅅𒋧, 𒁲𒉡𒌝, 𒌉',
  'group.markt': '𒍣𒋫𒌈 𒌋 𒈠𒁺𒌝 𒊭 𒁕𒀭𒉡𒌓 𒅗𒌔𒁉𒅎',
  'group.ruhe': '𒅆𒁍𒌈',
  'group.p_sv': '𒈪𒈾𒌈 𒊭 𒍣𒅎𒁕𒋾𒅎: 𒊑𒅅𒊓𒌈 𒊭 2026',
  'group.p_est': '𒈪𒈾𒌈 𒊭 𒍣𒅎𒁕𒋾𒅎: 𒈪𒅅𒋧 𒊭 2026 (§ 32a EStG)',
  'group.p_kap': '𒈪𒈾𒌈 𒊭 𒍣𒅎𒁕𒋾𒅎: 𒈪𒅅𒋧 𒊭 𒈦 𒌋 𒊭 𒋫𒄠𒅗𒊒𒋾𒅎',
  'group.p_bav': '𒈪𒈾𒌈 𒊭 𒍣𒅎𒁕𒋾𒅎: 𒂍 𒅆𒅁𒊑𒅎 𒌋 𒊕𒁺 𒅗𒍣𒊒𒌝 𒊭 𒊏𒈠𒉌𒅗',

  /* ---------------- Live-Notizen an den Feldern ---------------- */
  'n.beitrag.ueber8': function(p, f){
    return '𒂊𒇷 𒊓𒈠𒈾𒀜 𒄿𒈾 𒈨𒀜 𒊭 𒍠 𒊭 𒊑𒅅𒋛𒅎 𒊭 𒅆𒁍𒋾𒅎 (' + f.eur(p.v8) + ' 𒄿𒈾 𒈬). 𒍣𒀉𒌈 𒂊𒇷 𒀭𒉏 𒆷 𒈪𒅅𒊓𒄠 𒌋 𒆷 𒊑𒅅𒊓𒄠 𒄿𒇷𒅅𒆠 — 𒀀𒈾 𒊑𒅅𒋛𒅎 𒊭 𒋫𒄠𒅗𒊑𒅎 𒅋𒆷𒀝 𒌋 𒄿𒈾 𒀭𒉏 𒈾𒁕𒉆 𒊭 𒊑𒅅𒋛𒅎 𒊭 𒈬𒌨𒍣𒅎 𒅖𒋼𒂗𒈠 𒄿𒇷𒅅𒆠.'; },
  'n.beitrag.ueber4': function(p, f){
    return '𒂊𒇷 𒅕𒁁 𒄿𒈾 𒈨𒀜 𒊭 𒍠 𒊭 𒊑𒅅𒋛𒅎 𒊭 𒅆𒁍𒋾𒅎 (' + f.eur(p.v4) + ' 𒄿𒈾 𒈬). 𒀀𒁲 𒀭𒉏 𒁲𒉡𒌝 𒀀𒈾 𒅗𒋆 𒄿𒁀𒀸𒅆 (§ 1a BetrAVG); 𒂊𒇷 𒀭𒉏 𒁁𒂖 𒅆𒅁𒊑𒅎 𒇷𒅎𒄥.'; },
  'n.agzus.gedeckelt': function(p, f){
    return '𒀀𒈾 ' + f.pct(p.quote, 1) + ' 𒅗𒇷. 𒁁𒂖 𒅆𒅁𒊑𒅎 ' + f.eur2(p.ersparnis) + ' 𒄿𒈾 𒈬 𒅖𒋼𒂗𒈠 𒄿𒈠𒀜𒁲 — 𒈪𒈾𒌈 𒊏𒁀𒌈 𒈪𒅎𒈠 𒆷 𒄿𒈾𒀝𒆠𒊏 𒀀𒁲 𒁲𒉡𒌝 "𒅗𒌔𒊒𒌝 𒀀𒈾 𒆠𒈾𒋾𒅎" 𒄿𒁀𒀸𒋗.'; },
  'n.agz_fix.fliesstNicht': function(p, f){
    return '𒆷 𒅋𒆷𒀝: 𒈾𒁕𒀭𒅗 𒊭 𒌗 (' + f.eur2(p.beitrag) + ') 𒊭𒉺𒀠 𒍠 𒊭 ' + f.eur2(p.schwelle) + ' 𒄿𒁀𒀸𒅆 (𒀸𒊒𒌝 𒄿𒈾 "𒈪𒈾𒌈 𒊭𒉡𒌈").'; },
  'n.agz_fix.ueber4': function(p, f){
    return '𒋫𒀊𒁍𒌈 𒆠𒈾𒌈 𒂊𒁲𒅖𒅆𒊭 𒍠 𒊭 𒅕𒁁 𒄿𒈾 𒈨𒀜 (' + f.eur(p.topf) + ' 𒄿𒈾 𒈬) 𒄿𒈾 ' + f.eur(p.ueber) + ' 𒀉𒋾𒅅. 𒍣𒀉𒌈 𒀭𒉡𒌝 𒀉 𒊭 𒊑𒅅𒊓𒄠 𒄿𒈾𒀜𒁷 — 𒁾𒁍𒌝 𒁉𒅋𒋫𒄠 𒂠𒊺𒋫𒄠 LĀ 𒄿𒈠𒀭𒉡 𒌋 𒇽-𒈦 𒊭 𒂍 𒅆𒅁𒊑𒅎 𒄿𒈾 𒀭𒉏 𒍑𒋼𒇷.'; },
  'n.agz_fix.verdraengung': function(p, f){
    return '𒍠 𒊭 𒅕𒁁 𒄿𒈾 𒈨𒀜 𒉺𒉆 𒄿𒈠𒀠𒆷: 𒅖𒌅 𒈾𒁕𒉌𒅗 ' + f.eur(p.rest) + ' 𒅖𒋼𒂗𒈠 𒁀𒈝 𒊑𒅅𒋛𒅎 𒄿𒊓𒀝𒆠𒁍. 𒅗𒌔𒁍𒌝 𒋛𒀉𒌈 𒄿𒊐𒁉 — 𒋫𒀊𒁍𒌈 𒅗𒌔𒁍𒌝 𒈾𒀜𒉡𒌝 𒅆𒈠, 𒀀𒊹 𒋫𒀊𒁍𒌈 𒊭 𒊏𒈠𒉌𒅗 𒄿𒁀𒀸𒋗 𒅖𒋼𒂗𒈠 𒄿𒈾𒀝𒆠𒅕.'; },
  'n.agz_fix.ueber8': '𒀉𒋾 𒈾𒁕𒉌𒅗 𒂊𒇷 𒊓𒈠𒈾𒀜 𒄿𒈾 𒈨𒀜 𒊭 BBG-RV — 𒉿𒀜𒊒𒌝 𒆷 𒈪𒅅𒊓𒄠 𒌋 𒆷 𒊑𒅅𒊓𒄠 𒄿𒇷𒅅𒆠.',
  'n.agz_fix_min.knapp': function(p, f){
    return '𒍠 𒄿𒈾 ' + f.eur2(p.d) + ' 𒅖𒋼𒂗𒈠 𒋼𒀉𒋾𒅅. 𒊭𒉺𒀠 𒀭𒉏 𒋫𒀊𒁍𒌈 𒆠𒈾𒌈 𒅗𒇴 𒄿𒄬𒇷𒅅: 𒈦 𒊭 € 𒊭 𒀀𒈾 𒉺𒉏 𒅋𒆷𒆪 𒄿𒈾 𒀸𒊑𒅎 𒀭𒉏 𒆷 𒍠 𒄿𒋗, 𒌋 𒊑𒅅𒋧 𒊭 𒈾𒀊𒄩𒊑𒅎 𒌋 𒋛𒀉𒋾𒅎 𒄿𒈾 𒀭𒉏 𒆷 𒂵𒈪𒅕.'; },
  'n.agz_fix_min.verfehlt': function(p, f){
    return '𒍠 𒆷 𒅗𒋃 — ' + f.eur2(p.fehlt) + ' 𒈠𒌈 𒄿𒈾 𒌗 𒋫𒀊𒁍𒋫𒄠 𒊭 ' + f.eur2(p.zuschuss) + ' 𒌋𒊭𒀊𒁀𒆷. 𒀭𒉡𒌝 𒄿𒈾 𒆗 𒁾𒁉𒅎 € 𒁮𒆪𒌝 𒊭 𒅗𒆷𒈠.'; },
  'n.teilkap.kosten': function(p, f){
    return '𒍣𒌈: ' + (p.gewinn ? '𒆷 𒈪𒅎𒈠 — 𒌋 𒉈𒈨𒈝 𒄿𒁀𒀸𒅆: ' + p.dtxt : p.dtxt + ' ' + p.unit) + ' 𒀀𒈾 𒈾𒁕𒉏 𒊭 𒁀𒆷𒁲𒅎 𒂊𒁲𒅖𒅆𒋗 𒀀𒈾 𒈪𒀉𒄩𒊑𒅎 𒅋𒆷𒀝. 𒅖𒌈: 𒅗𒌔𒁍𒌝 𒅖𒋼𒂗 𒈪𒅅𒊓𒄠 𒈾𒀊𒄩𒊏𒄠 𒄿𒈾 𒊭𒀜𒋾𒅎 𒊭 𒂊𒊑𒁉𒅎 𒄿𒈾𒀜𒁷 (𒁉𒅋𒌈 𒊭 𒍠 ' + f.pct(p.grenz, 1) + ') 𒌋 𒅖𒌅 𒀭𒉏 𒈦 𒊭 𒈪𒅅𒋛𒅎 𒅖𒋼𒂗𒈠 𒄿𒊐𒁉, 𒆷 𒈦 𒊭 𒊑𒅅𒋛𒅎.'; },
  'n.av_auszform.horizont': function(p, f){
    return '𒂊𒇷 𒍠 𒊭 𒈪𒀉𒄩𒊑𒅎 𒈾𒁕𒉡𒌝 𒀭𒉡𒌝 ' + f.eur(p.rest) + ' 𒀉𒋫𒈾𒀜𒁷, 𒌋 𒁾𒁍𒌝 𒀭𒉆 LĀ 𒄿𒈠𒀭𒉡. 𒍠 𒆠𒉡𒌝 𒆗 𒈾𒁕𒉏 𒊭 𒁀𒆷𒁲𒅎 𒄿𒈾 𒉺𒁕𒉏 𒍑𒋼𒇷 — 𒊭 𒄿𒆷𒀊𒁉𒊒 𒄿𒈾 𒀭𒉏 𒄿𒇷𒅅𒆠.'; },

  /* ---------------- Ergebniskarten ---------------- */
  'card.lead': '𒉺𒉡𒌝',
  'card.unchanged': '𒆷 𒈾𒆠𒅕',
  'base.pinned': '𒈾𒅗𒊒𒌝 𒀀𒈾 𒀸𒊑𒅎 𒄩𒌔𒈪𒅎',
  'base.delta': function(p){ return '𒈾𒅗𒊒𒌝 𒀀𒈾 ' + p.desc; },
  'base.none': '𒉺𒇴 𒇻𒌒𒁍𒌓 — 𒈾𒅗𒊒𒌝 𒄿𒈾 𒀭𒉏 𒄿𒁀𒀸𒅆.',
  'base.desc.prev': '𒀸𒊒𒌝 𒉺𒉡𒌝',
  'base.desc.pinned': '𒀸𒊒𒌝 𒄩𒌔𒈬𒌝',
  'base.desc.change': function(p){ return '𒉺𒉡𒌝 𒊭 𒈾𒅗𒊑𒅎 𒊭 "' + p.label + '"'; },
  'rank.swap': function(p, f){
    return '<b>𒈪𒈾𒌈 𒆷 𒅎𒋳𒊏.</b> 𒄿𒈾 𒈾𒁕𒉏 𒊭 𒌗 ' + p.a + ' 𒉺𒉡𒌝 ' + p.b + ' 𒅋𒆷𒀝; 𒄿𒈾 𒅆𒈪𒅎 𒊭 𒄿𒈾𒀭𒈾 𒊭 𒉈𒈨𒇷𒅎 𒋛𒀉𒋾𒅎 𒈾𒆠𒅕. 𒅖𒌈: 𒅆𒈬𒌝 𒊭 𒄿𒈾𒀭𒈾 𒄿𒈾 𒈠𒁲𒅎 𒊭 𒁕𒀭𒉡𒌓 𒅗𒌔𒁉𒅎 𒄿𒌉𒊒 (' + f.pct(p.infl, 2) + '), 𒌋 𒈾𒁕𒉡𒌝 𒊭 𒌗 𒄿𒈾 𒈦 𒊭 𒌉𒊑𒅎 𒁀𒈝 𒈪𒅅𒋛𒅎 𒅎𒈠𒀭𒉡 (' + f.pct(p.wiederanl, 2) + '). 𒆠𒈠 𒅆𒈾 𒊒𒂵, 𒅗𒌔𒁍𒌝 𒅖𒋼𒂗 𒄿𒈾 𒊑𒋆 𒁕𒈪𒅅. 𒈪𒉡𒌝 𒊭 𒈪𒈾𒋾𒅎 𒄿𒅗𒀭? 𒋗𒌝𒈠 𒅗𒌔𒉺𒄠 𒋫𒉺𒀝𒆠𒀉 𒌋 𒆷 𒋫𒀝𒆗. 𒋗𒌝𒈠 𒋫𒀝𒆗, 𒈪𒉡𒋫𒄠 𒄿𒈾 "𒍣𒋫𒌈 𒊭 𒊕𒁺 𒊭 𒊏𒈠𒉌𒅗" 𒋗𒁺𒌨𒈠 𒈦 𒊭 𒌉𒊑𒅎 𒀀𒈾 𒆷 𒈪𒅎𒈠 𒅋𒆷𒀝.'; },
  'warn.unreachable': '𒅗𒌔𒁍𒌝 𒋛𒀉𒌈 𒀭𒉡𒌝 𒆷 𒅗𒋃 — 𒂊𒇷 𒀉-𒅗 𒀉𒋾𒅅. 𒈪𒉡𒌈 𒊏𒁉𒌈 𒊭 𒅗𒊭𒁲𒅎 𒊭𒀝𒈾𒀜.',
  'warn.inactive': '𒄿𒈾 𒊭𒀜𒋾𒅎 𒉺𒉌𒋾𒅎 𒀀𒈾 𒈪𒈾𒋾𒅗 𒅆𒅁𒊏𒄠 𒆷 𒋼𒅁𒁍𒍑 — 𒈾𒅗𒊒𒌝 𒊭 𒀉 𒆷 𒄿𒁀𒀸𒅆, 𒌋 𒅖𒋗 𒀭𒉏 𒅗𒌔𒁍𒌝 𒋛𒀉𒌈 𒊭 𒀀𒈾 𒈾𒁕𒉏 𒈾𒀊𒄩𒊑𒅎 𒄿𒌉𒊒 𒆷 𒄿𒁀𒀸𒅆. "𒉿𒍪𒌝 𒅖𒌅 𒅆𒅁𒊑𒅎" 𒌋 "𒊭𒈾𒌅𒅗 𒄿𒈾𒀭𒈾" 𒀀𒈬𒌨.',

  /* ---------------- Klartext-Fazit ---------------- */
  'verdict.lead': function(p){
    return '<b>' + p.satz + '</b> 𒉺𒉡𒌝 𒅋𒆷𒀝 𒄿𒈾 ' + p.wert + ' — ' + p.d2 + ' 𒈠𒌈 𒂊𒇷 ' + p.nom2 + (p.nom3 ? ' 𒌋 ' + p.d3 + ' 𒈠𒌈 𒂊𒇷 ' + p.nom3 : '') + '.'; },
  'verdict.pp': function(p){ return p.v + ' 𒍠'; },
  'verdict.top': function(p, f){
    return ' 𒍣𒀉𒌈 𒊏𒁍𒌝 𒊭 𒈾𒅗𒊑𒅎 ' + p.gen + ' 𒀀𒈾 𒊕𒁺 𒊭 𒊏𒈠𒉌𒅗 "' + p.label + '" 𒅆 — 𒌋 ' + (p.pro ? '𒀀𒈾 𒁕𒈪𒅅𒋾𒅎' : '𒀀𒈾 𒇷𒈬𒌓𒋾𒅎') + ' ' + p.gen + ', 𒄿𒈾 ' + f.eur(p.wert) + ' 𒊭 𒅆𒈪𒅎 𒊭 𒄿𒈾𒀭𒈾. 𒍝𒍮 𒃵𒊒𒌝 𒄿𒈾 "𒅖𒁺 𒊭 𒅆𒈪𒅎" 𒊭𒁲𒅕𒈠.'; },
  'verdict.band': function(p, f){
    return '<span class="band">𒀭𒉡𒌝 𒆠 𒁕𒀭? 𒄿𒈾 𒈦 𒈾𒀊𒄩𒊑𒅎 𒊭 ' + f.pct(p.lo, 1) + ' 𒁀𒈝 ' + f.pct(p.mid, 1) + ' ' + p.vlo + ' 𒄿𒁀𒀸𒋗; 𒄿𒈾 ' + f.pct(p.hi, 1) + ' ' + p.vhi + '. 𒁲𒉡𒌝 ' + (p.stabil ? '𒄿𒈾 𒍠 𒀭𒉏 𒆥 𒌋 𒆷 𒄿𒈾𒀝𒆠𒅕.' : '𒄿𒈾 𒍠 𒀭𒉏 <b>𒄿𒌉𒊒</b> — 𒌋 𒀀𒉿𒌈 𒂵𒈪𒅕𒌈 𒄿𒈾 𒀭𒉏 𒆷 𒁕𒈾𒀜.') + '</span>'; },
  'demo.text': '<b>𒈪𒈾𒌈 𒀭𒈾𒌈 𒈪𒈾𒌈 𒊭 𒁾𒁉𒅎 𒅖𒋼𒂗𒈠</b> — 40 𒊭𒈾𒌈, 75.000 € 𒄿𒈾 𒈬, 300 € 𒄿𒈾 𒌗, 𒊑𒅅𒋧 𒊭 𒈬𒌨𒍣𒅎 𒊭 𒈠𒋾𒅎. 𒈪𒈾𒋾𒅗 𒄿𒈾 "𒈪𒈾𒌅𒅗" 𒋗𒁺𒌨; 𒀀𒉿𒌈 𒀭𒉌𒌈 𒄿𒈾 𒊏𒈠𒉌𒊭 𒄿𒄬𒇷𒅅.',

  /* ---------------- Mitlaufende Leiste ---------------- */
  'sb.cap': function(p){ return p.label + ' · ' + p.unit + (p.kaufkraft ? ', 𒁕𒀭𒉡𒌈 𒊭 𒄿𒈾𒀭𒈾' : ''); },
  'sb.aria': function(p){ return '𒀀𒉿𒌈 𒂵𒈪𒅕𒌈: ' + p.label; },

  /* ---------------- Diagramme ---------------- */
  'tab.sens': '𒉺𒁕𒉡𒌝 𒊭 𒈾𒅗𒊑𒅎',
  'tab.wf': '𒅖𒁺 𒊭 𒅆𒈪𒅎',
  'tab.kap': '𒉺𒁕𒀭 𒊕𒁺',
  'tab.zer': 'zâz 𒌗',
  'chart.error': function(p){ return '𒉺𒀠𒄣 𒆷 𒅔𒉆𒈥: ' + p.msg; },
  'sens.readout': '𒉺𒀠𒄣 𒊭 𒆠𒅁𒉺𒋾𒅎: 𒈪𒉡𒌓𒅗 𒊭 𒄿𒈾𒀭𒈾. 𒆠𒅁𒉺𒌈: 𒀀𒊹 𒀉𒋾 𒊕𒁺 𒊭 𒊏𒈠𒉌𒅗 𒀀𒈾 𒈪𒀉𒄩𒊑𒅎 𒅋𒆷𒆪. 𒂊𒇷 𒉺𒀠𒄀𒅎 𒀀𒇷𒅅 𒌋 𒈪𒈾𒋾𒅎 𒀀𒈬𒌨.',
  'sens.legendY': function(p){ return 'y: ' + p.label + ' (' + p.unit + ')'; },
  'sens.note': function(p){
    return '𒉺𒈝 𒊭 𒀀𒈾 𒉺𒉏 𒌅𒆷𒀊𒁉𒌅 𒄿𒈾 𒆗 𒍠-𒋗 𒅎𒈠𒀭𒉡 — ' + p.n + ' 𒁾𒉺𒌈 𒃵𒊏𒌈. 𒄿𒈾𒀭𒈾: "' + p.label + '". 𒉺𒇴 𒊭𒉌𒄠 𒇻𒌒𒁍𒌓 𒌋 𒉺𒀠𒄣 𒀉𒋾𒋗 𒅋𒆷𒀝.'; },
  'sens.noteNetto': function(p, f){
    return ' 𒀀𒈬𒌨: 𒉺𒈝 𒀭𒉡𒌝 𒅗𒌔𒉺𒄠 𒋛𒀉𒋫𒄠 𒄿𒈾𒀝𒆠𒅕 (' + f.eur2(p.lo) + ' 𒀀𒁲 ' + f.eur2(p.hi) + ' 𒄿𒈾 𒌗) 𒌋 𒅖𒋗 𒀭𒉏 𒅗𒌔𒉺𒄠 𒊭 𒄿𒈾 𒊭𒆷𒀸 𒁲𒈾𒋾𒅎 𒅖𒊭𒀝𒅗𒉡. 𒅖𒋗 𒀭𒉏 𒊭𒆷𒀸 𒉺𒀠𒄖 𒄿𒈾 𒆗 x 𒅖𒋼𒂗 𒀀𒈾 𒈪𒀉𒄩𒊑𒅎 𒅋𒆷𒆪, 𒈪𒈾𒌈 𒄿𒈾 x 𒈾𒀝𒊑𒅎 𒆷 𒀀𒈾 𒈪𒀉𒄩𒊑𒅎 𒅋𒆷𒅗. 𒋼𒂗𒆪𒊏𒌈 𒄿𒈾 𒍠 𒊭 𒊑𒅅𒋛𒅎 (' + f.eur(p.bbgkv) + ' 𒀀𒈾 𒊑𒅅𒋛𒅎 𒊭 𒈬𒌨𒍣𒅎, ' + f.eur(p.bbgrv) + ' 𒀀𒈾 𒊑𒅅𒋛𒅎 𒊭 𒅆𒁍𒋾𒅎) 𒌋 𒄿𒈾 𒍠 𒊭 𒈪𒅅𒋛𒅎 𒊭𒀝𒈾.'; },
  'wf.up': '𒉈𒈨𒇴 𒍑𒋼𒇷',
  'wf.down': '𒉈𒈨𒇴 𒌋𒊭𒄠𒁲',
  'wf.legend': '𒅆𒈬𒌝 𒊭 𒄿𒈾𒀭𒈾 𒊭 𒉈𒈨𒇷𒅎 𒋛𒀉𒋾𒅎',
  'wf.check': function(p, f){
    return '𒈪𒀉𒄩𒊒𒌝: ' + f.eur(p.start) + ' + ' + f.eur(p.summe) + ' = ' + f.eur(p.start + p.summe) + ' (𒆠𒉡𒌝 ' + f.eur(p.ende) + ', 𒈾𒅗𒊒𒌝 ' + f.nf2(p.start + p.summe - p.ende) + ' €).'; },
  'wf.note': '𒍝𒍮 𒀭𒉡𒌝 𒀀𒈾 𒊏𒈠𒉌𒋗 𒄿𒋻, 𒅖𒋗 𒀭𒉏 𒂵𒈪𒅕 — 𒌋 <b>𒀀𒈾 𒉺𒁕𒉏 𒅗𒍣𒅕</b>: 𒅖𒁺 𒆷 𒍝𒍪 𒄿𒈾 𒊏𒈠𒉌𒋗𒉡; 𒆗 𒉺𒀠𒄣 𒍣𒀉𒋫𒄠 <i>𒄿𒈾 𒉺𒉏</i> 𒊭 𒉺𒀠𒄀𒅎 𒂊𒇷𒅎 𒄿𒈠𒀭𒉡. 𒉺𒀠𒃵 𒇻𒌒𒁍𒌓 𒌋 𒅖𒁮 𒀀𒈬𒌨.',
  'wf.barinfo': function(p){ return p.label + ': ' + p.note; },
  'wfb.vp.label': '𒄩𒆷𒀝 𒈪𒅅𒋛𒅎 𒊭 𒊑𒋆',
  'wfb.vp.note': '𒆷 𒂍 𒅆𒅁𒊑𒅎 𒌋 𒆷 𒊕𒁺 𒊭 𒅆𒁍𒋾𒅎 𒈪𒅅𒊓𒄠 𒊭 𒊑𒋆 𒄿𒁺 (§ 18 InvStG). 𒅎𒈠𒀭𒉡 𒆠𒈠 𒊕𒁺 𒊭 𒊏𒈠𒉌𒅗 𒁀𒈝 𒈪𒅅𒋛𒅎 𒊭 𒊑𒋆 𒁀𒈝 𒊕𒁺 𒊭 𒊏𒈠𒉌𒅗 𒀉𒋾 𒈪𒅅𒋛𒅎 𒊭 𒊑𒋆. 𒉺𒀠𒄣 𒀀𒈾 𒊭𒀊𒇷𒅎 𒅋𒆷𒀝: 𒈪𒅅𒋧 𒊭 𒊑𒋆 𒈠𒁲𒅖 𒀀𒈾 𒍠 𒊭 𒆷 𒈪𒅅𒋛𒅎 𒅋𒆷𒀝, 𒌋 𒈾𒀊𒄩𒊏𒄠 𒊭 𒅖𒁲𒅎 𒍑𒋼𒇷 — 𒌋 𒅖𒋗 𒀭𒉏 𒀀𒈾 𒊕𒁺 𒊭 𒊏𒈠𒉌𒅗 𒁕𒈪𒅅.',
  'wfb.zul.label': '𒋫𒀊𒁍𒌈 𒌋 𒈾𒁕𒈾𒌈 𒊭𒉡𒌈',
  'wfb.zul.note': '𒅗𒌔𒁍𒌝 𒊭 𒊭𒉏 𒄿𒈾 𒁲𒉏 𒂠𒋆 𒊭 𒋫𒀊𒁍𒋾𒅎 𒌋 𒈾𒁕𒉡𒌝 𒊭𒉡𒌝 𒊭 § 10a EStG. 𒅎𒈠𒀭𒉡 𒄿𒈾 𒉺𒁕𒊑𒅎 𒊭 𒆠𒇲𒇷 𒉺𒁕𒉌.',
  'wfb.arch.label': '𒊑𒅅𒋧 𒊭 𒈪𒅅𒋛𒅎 (𒋛𒀉𒌈)',
  'wfb.arch.note': '𒈾𒅗𒊒𒌝 t₀ − t₁ 𒌋 𒅗𒇴 𒊭𒉡𒌝. 𒀀𒈾 𒋛𒀉𒋾𒅎 𒄿𒅗𒀭, 𒌋 𒅖𒋗 𒀭𒉏 𒉺𒁕𒉡𒌝 𒂵𒈪𒅕.',
  'wfb.agz.label': '𒋫𒀊𒁍𒌈 𒊭 𒁁𒂖 𒅆𒅁𒊑𒅎',
  'wfb.agz.note': '𒅗𒌔𒁍𒌝 𒊭 𒊭𒉏 — 𒀭𒉡𒌝 𒅖𒋼𒂗𒈠 𒁕𒈪𒅅𒌈 𒊭 𒂍 𒅆𒅁𒊑𒅎 𒊭 𒅖𒌅 𒍣𒅎𒁕𒋾𒅎 𒊭 𒈪𒅅𒋛𒅎 𒆷 𒅋𒇴. 𒅎𒈠𒀭𒉡 𒄿𒈾 𒉺𒁕𒊑𒅎 𒊭 𒋫𒀊𒁍𒋾𒅎.',
  'wfb.tarif.label': '𒈾𒅗𒊒𒌝 𒊭 𒈪𒅅𒋛𒅎 𒌋 𒋛𒀉𒌈',
  'wfb.tarif.note': '𒈪𒅅𒋧 𒊭 𒍠 𒄿𒈾 𒈾𒁕𒉏 𒁀𒈝 𒈪𒅅𒋛𒅎 𒊭 𒍠 𒄿𒈾 𒇷𒆠𒅎, 𒌋 𒅗𒇴 𒊭𒉡𒌝. 𒀀𒈾 𒋛𒀉𒋾𒅎 𒄿𒅗𒀭. 𒅗𒈝 𒊭 𒈪𒅅𒋛𒅎 𒂊𒁲𒅖𒅆𒋗 𒆷 𒅆𒈠𒄠 𒄿𒋗: (1−t)(1+r)ⁿ = (1+r)ⁿ(1−t), 𒌋 𒋫𒈾𒀸𒋗𒌝 𒄿𒌉𒊒.',
  'wfb.kvpv.label': '𒊑𒅅𒋧 𒊭 𒈬𒌨𒍣𒅎 𒀀𒈾 𒈾𒁕𒉏 𒊭 𒂍 𒅆𒅁𒊑𒅎',
  'wfb.kvpv.note': '§§ 229, 250 SGB V: 𒈾𒀊𒄩𒊏𒄠 𒊭 𒈪𒉡𒋾𒅎 𒇽 𒊭 𒅆𒁍𒋾𒅎 𒂊𒁲𒅖𒅆𒋗 𒄿𒈾𒀸𒅆. 𒅎𒈠𒀭𒉡 𒄿𒈾 𒈾𒅗𒊑𒅎 𒀀𒈾 𒍣𒁍𒋾𒅎 "𒊑𒅅𒋧 𒊭 𒊏𒈠𒉏 𒄿𒈾 𒅆𒁍𒋾𒅎".',
  'wfb.ep.label': '𒄩𒆷𒀝 𒈪𒈾𒋾𒅎 𒊭 𒀉',
  'wfb.ep.note': '𒈾𒅗𒊒𒌝 𒊭 𒀉 𒀉 𒊭 𒊑𒅅𒋛𒅎 𒌋𒊭𒄠𒁲 𒌋 𒅖𒋗 𒀭𒉏 𒈾𒁕𒉆 𒊭 𒈠𒋾𒅎. 𒀀𒈾 𒋛𒀉𒋾𒅎 𒅎𒈠𒀭𒉡.',
  'kap.rentbeg': '𒊑𒂠 𒈾𒁕𒉏',
  'kap.swap': '𒊕𒁺 → 𒁲𒉡𒌝 𒊭 𒈾𒁕𒉏',
  'kap.legend': '𒉺𒀠𒄣 𒃵𒊒𒌝: 𒈾𒀊𒄩𒊒𒌝 &nbsp;·&nbsp; 𒉺𒀠𒄣 𒊭 𒆠𒅁𒉺𒋾𒅎: 𒈪𒅎𒈠 𒊭 𒀀𒈾 𒂵𒋾𒅗 𒅋𒆷𒆪',
  'kap.readout': function(p, f){
    return '𒄿𒈾 𒊑𒂠 𒈾𒁕𒉏 𒅗𒍣𒅕: 𒂍 𒅆𒅁𒊑𒅎 ' + f.eur(p.bavGeb) + ' 𒅖𒌅 ' + f.eur(p.bav) + ' · 𒊕𒁺 𒊭 𒅆𒁍𒋾𒅎 ' + f.eur(p.avGeb) + ' 𒅖𒌅 ' + f.eur(p.av) + ' · 𒊕𒁺 𒊭 𒊏𒈠𒉌𒅗 ' + f.eur(0) + ' 𒅖𒌅 ' + f.eur(p.priv) + '.  𒈾𒁕𒉡𒌝 𒊭 𒌗 𒈪𒀉𒄷𒊒𒌝 𒅅𒆗, 𒌋 𒅖𒋗 𒀭𒉏 𒆗 𒁲𒉡𒌝 𒀀𒈾 𒆷 𒈪𒅎𒈠 𒅋𒆷𒀝.'; },
  'kap.note': function(p, f){
    return '𒊕𒁺 𒄿𒈾 𒊑𒅅𒋛𒅎, 𒌋 𒄿𒈾 𒌋𒈪 𒊭 𒈾𒁕𒉏 𒀉𒋾 𒈾𒁕𒈾𒋾𒅎 𒋛𒀉𒋫𒋾𒅎 𒊭 𒌉𒊑𒅎 (' + f.pct(p.wiederanl, 2) + ' 𒁀𒈝 𒈪𒅅𒋛𒅎) 𒌋 𒁀𒈝 𒈾𒁕𒉏 𒊭 𒌗 𒊭 𒅅𒅗𒇻. 𒅖𒋗 𒀭𒉏 𒆗 𒁲𒉡𒌝 𒀀𒈾 𒆷 𒈪𒅎𒈠 𒅋𒆷𒀝. 𒀀𒅗𒈝 𒅖𒌅 𒌉𒊑𒅎 𒅖𒋼𒂗𒈠 𒅋𒇴, 𒌋 𒊕𒁺 𒄿𒈾 𒊑𒅅𒋛𒅎 𒄿𒊓𒀝𒆠𒁍, 𒀀𒊹 𒄿𒈾 𒈦 𒊭 𒊑𒅅𒋛𒅎 𒉺𒉡𒌝 𒊭 𒈪𒅅𒋛𒅎 𒄿𒊐𒁍 — 𒅖𒋗 𒀭𒉏 𒉺𒀠𒄖 𒆷 𒈪𒀉𒄩𒊒. 𒉺𒀠𒄣 𒊭 𒆠𒅁𒉺𒋾𒅎 𒈪𒅎𒈠 𒊭 𒀀𒈾 𒂵𒋾𒅗 𒅋𒆷𒆪 𒅆: 𒂍 𒅆𒅁𒊑𒅎 𒀀𒁲 𒊑𒂠 𒈾𒁕𒉏 𒅗𒇴 𒅗𒍣𒅕 (§ 1b BetrAVG 𒆷 𒄩𒆷𒂵𒄠 𒄿𒁲, 𒆷 𒂵𒋫𒄠), 𒄿𒈾 𒊕𒁺 𒊭 𒅆𒁍𒋾𒅎 𒇷𒆪𒌝 𒉺𒉡𒌝 𒊭 65 𒊭𒈾𒋾𒅎 𒋫𒀊𒁍𒋫𒄠 𒄿𒄬𒇷𒅅 𒌋 𒈠𒌈 𒂊𒇷 𒍠 𒊭 𒈬 𒅖𒋼𒂗𒈠 𒅋𒆷𒀝, 𒌋 𒊕𒁺 𒊭 𒊏𒈠𒉌𒅗 𒄿𒈾 𒆗 𒌋𒈪 𒀀𒈾 𒂵𒋾𒅗 𒅋𒆷𒀝. 𒀭𒉡𒌝 𒅖𒋼𒂗𒈠 𒉺𒁕𒉡𒌝 𒊭 𒅗𒌔𒁍𒌝 𒅖𒋼𒂗 𒄿𒈾 𒁕𒈪𒅅𒋾𒅎 𒄿𒁀𒀸𒋗. ' + (p.verrentet ? '𒆠𒈠 𒊕𒁺 𒀀𒈾 𒈾𒁕𒉏 𒊭 𒁀𒆷𒁲𒅎 𒌅𒉿𒀸𒊭𒊒, 𒊕𒁺 𒀀𒈾 𒋫𒄠𒅗𒊑𒅎 𒅋𒆷𒀝 — 𒉺𒀠𒄣 𒄿𒃲𒇸 𒌋 𒈪𒅎𒈠 𒆷 𒄬𒆪𒌝. ' : '') + '𒌋 𒀀𒈾 𒊭𒉏: 𒉺𒀠𒄖 𒊕𒁺 𒊭 ṢIBÛTIM ANNĪTIM 𒅖𒋼𒂗𒈠 𒌋𒆗𒆷𒈬, 𒆷 𒈾𒀊𒄩𒊏𒄠 𒊭 𒈠𒀝𒆪𒊑𒅗.'; },
  'zer.netto': 'sittum',
  'zer.tax': 'miksum',
  'zer.kv': 'riksum',
  'zer.pension': '𒈾𒁕𒉡𒌝',
  'zer.legend': '<span><i style="background:#808080"></i>𒈪𒅅𒋧</span><span><i style="background:#800000"></i>𒊑𒅅𒋧</span><span><i style="background:#800080"></i>𒈾𒁕𒉡𒌝 𒊭 𒈠𒋾𒅎 𒄬𒆪𒌝</span><span style="margin-left:auto">𒅖𒌈 𒊭 𒆠𒈠 = 𒈪𒅎𒈠 𒊭 𒄿𒊓𒀝𒆠𒁍</span>',
  'zer.readout': '𒅗𒇴 𒆠𒈠 𒈾𒁕𒉡𒌝 𒆠𒉡𒌝 𒊭 𒌗 𒄿𒈾 𒁕𒀭𒉡𒌓 𒅗𒌔𒁉𒅎 𒊭 𒄿𒈾𒀭𒈾. zâz 𒊭𒈾𒋾𒅎 𒉺𒁕𒉡𒌝 𒆠𒉡𒌝 𒅆, 𒅖𒋗 𒀭𒉏 𒅖𒁕𒌈 𒃵𒊑𒅖 𒅔𒉆𒈠𒊏.',
  'zer.note': function(p, f){
    return '𒌋𒈬 𒊭 𒇷𒆠𒅎 𒀀𒈾 𒊭𒆷𒀸 𒁲𒈾𒋾𒅎 𒅖𒋼𒂗. 𒅗𒌔𒁍𒌝 𒅖𒋼𒂗 𒀀𒈾 12 𒍝𒍝𒄠 𒆷 𒅋𒆷𒀝; 𒄿𒈾 𒈦 𒊭 𒌉𒊑𒅎 𒁀𒈝 𒈪𒅅𒋛𒅎 (' + f.pct(p.wiederanl, 2) + ' 𒄿𒈾 𒈬) 𒀀𒈾 𒌋𒈪 𒅖𒋼𒂗 𒅎𒈠𒀭𒉡. 𒊭 𒅗𒌔𒉺𒄠 𒅅𒅗𒇻 𒌋 𒆷 𒄿𒉺𒀝𒆠𒁺, 𒊭𒉺𒀠 𒅋𒆷𒀝.'; },

  /* ---------------- Rechenweg ---------------- */
  'det.h.bav': '𒂍 𒅆𒅁𒊑𒅎',
  'det.h.av': '𒊕𒁺 𒅆𒁍𒋾𒅎',
  'det.h.priv': '𒊭 𒊏𒈠𒉌𒅗',
  'det.h.kennzahl': '𒈪𒉡𒌈',
  'det.h.wert': '𒅆𒈬𒌝',
  'det.erg.netto': '𒈾𒀊𒄩𒊒𒌝 𒊭 𒈾𒁕𒉏 𒅖𒌅 𒅗𒌔𒁉𒅎 𒋛𒀉𒋾𒅎 (𒆠𒉡𒌝)',
  'det.erg.fremd': '𒅗𒌔𒁍𒌝 𒊭 𒊭𒉏 (𒋫𒀊𒁍𒌈)',
  'det.erg.kapital': '𒊕𒁺 𒄿𒈾 𒊑𒂠 𒈾𒁕𒉏',
  'det.erg.brutto': '𒈾𒀊𒄩𒊒𒌝 𒊭 𒈾𒁕𒈾𒋾𒅎 𒈾𒀊𒄩𒊑𒅎',
  'det.erg.steuer': '𒄿𒈾 𒀭𒉏: 𒈪𒅅𒋧',
  'det.erg.kvpv': '𒄿𒈾 𒀭𒉏: 𒊑𒅅𒋧 𒊭 𒈬𒌨𒍣𒅎 𒌋 𒊭 𒉺𒆷𒄭𒅎',
  'det.erg.rentenverlust': '𒄩𒆷𒀝 𒈾𒁕𒉏 𒊭 𒈠𒋾𒅎 (𒈾𒀊𒄩𒊒𒌝)',
  'det.erg.nettoausz': '𒈾𒀊𒄩𒊒𒌝 𒊭 𒈾𒁕𒈾𒋾𒅎 𒋛𒀉𒋫𒋾𒅎 (𒆠𒉡𒌝)',
  'det.erg.bwausz': '𒅆𒈬𒌝 𒊭 𒄿𒈾𒀭𒈾 𒊭 𒈾𒁕𒈾𒋾𒅎 𒋛𒀉𒋫𒋾𒅎',
  'det.erg.bwaufw': '𒅆𒈬𒌝 𒊭 𒄿𒈾𒀭𒈾 𒊭 𒅗𒌔𒁉𒅎 𒋛𒀉𒋾𒅎 𒊭 𒋫𒀜𒁲𒉡',
  'det.erg.ertrag': '𒅆𒈬𒌝 𒊭 𒄿𒈾𒀭𒈾 𒊭 𒉈𒈨𒇷𒅎 𒋛𒀉𒋾𒅎',
  'det.erg.verhaeltnis': '𒈪𒉡𒌈 𒊭 𒉈𒈨𒇷𒅎 𒀀𒈾 𒈾𒁕𒉏',
  'det.erg.irr': '𒈦 𒊭 𒇷𒅁𒁉𒅎 (𒆠𒉡𒌝)',
  'det.erg.vorsprung': '𒈠𒌈 𒂊𒇷 𒊕𒁺 𒊭 𒊏𒈠𒉌𒅗',
  'det.mon.brutto': '𒈾𒁕𒉡𒌝 𒈾𒀊𒄩𒊒𒌝 𒄿𒈾 𒌗',
  'det.mon.steuer': '𒁀𒈝 𒈪𒅅𒋛𒅎',
  'det.mon.kvpv': '𒁀𒈝 𒊑𒅅𒋛𒅎 𒊭 𒈬𒌨𒍣𒅎 𒌋 𒊭 𒉺𒆷𒄭𒅎',
  'det.mon.ep': '𒁀𒈝 𒄩𒆷𒆠𒅎 𒊭 𒈾𒁕𒉏 𒊭 𒈠𒋾𒅎',
  'det.mon.netto': 'SITTUM INA 𒌗 (𒁕𒀭𒉡𒌈 𒊭 𒄿𒈾𒀭𒈾)',
  'det.diag.beitrag': '𒈾𒁕𒉡𒌝 𒈾𒀊𒄩𒊒𒌝 𒀀𒈾 𒂍 𒅆𒅁𒊑𒅎 𒄿𒈾 𒌗',
  'det.diag.aufwand': '𒅗𒌔𒁍𒌝 𒋛𒀉𒌈 𒄿𒈾 𒌗 (𒊭𒀜𒌈 𒉺𒉌𒌈)',
  'det.diag.grenzsteuer': '𒈪𒅅𒋧 𒊭 𒍠 𒄿𒈾 𒌋𒈪 𒊭 𒁲𒄷𒋾𒅎 (𒊭𒀜𒌈 𒉺𒉌𒌈)',
  'det.diag.ersparnis': '𒈾𒀊𒄩𒊒𒌝 𒊭 𒈠𒁲𒅎 (𒈪𒅅𒋧 𒌋 𒊑𒅅𒋧), 𒊭𒀜𒌈 𒉺𒉌𒌈',
  'det.diag.svAG': '𒈠𒁺𒌝 𒆠𒉡𒌝 𒊭 𒁁𒂖 𒅆𒅁𒊑𒅎',
  'det.diag.svAN': '𒈠𒁺𒌝 𒆠𒉡𒌝 𒊭 𒇽 𒅆𒅁𒊏𒄠 𒂊𒁉𒋆',
  'det.diag.ngef': '𒍣𒀉𒌈 𒊭 𒈾𒁕𒈾𒋾𒅎 𒆷 𒅗𒍣𒊏𒋾𒅎 (𒊭𒀜𒌈 𒉺𒉌𒌈)',
  'det.diag.aussch': '𒈠𒈝 𒊭 𒁲𒉏 (4 % BBG-RV)',
  'det.diag.agzVar': '𒄿𒈾 𒀭𒉏: 𒋫𒀊𒁍𒌈 𒊭 𒁁𒂖 𒅆𒅁𒊑𒅎, 𒄿𒈾 𒈪𒉡𒋾𒅎 (𒊭𒀜𒌈 𒉺𒉌𒌈)',
  'det.diag.agzFix': '𒄿𒈾 𒀭𒉏: 𒋫𒀊𒁍𒌈 𒆠𒈾𒌈 𒊭 𒁁𒂖 𒅆𒅁𒊑𒅎 (𒊭𒀜𒌈 𒉺𒉌𒌈)',
  'det.diag.agzFixUeber4': '𒋫𒀊𒁍𒌈 𒆠𒈾𒌈 𒂊𒇷 𒍠 𒊭 𒅕𒁁 𒄿𒈾 𒈨𒀜 (𒆠𒈠 𒁉𒅋𒌈 𒆷 𒅎𒈠𒀭𒉡)',
  'det.diag.vbMonat': '𒈾𒁕𒉡𒌝 𒊭 𒂍 𒅆𒅁𒊑𒅎 𒄿𒈾 𒌗 𒄿𒈾 𒊑𒂠 𒈾𒁕𒉏',
  'det.diag.freibetrag': '𒍠 𒊭 𒆷 𒈪𒅅𒋛𒅎 𒀀𒈾 𒈾𒁕𒉏 𒊭 𒂍 𒅆𒅁𒊑𒅎 𒄿𒈾 𒊭𒀜𒋾𒅎 𒅖𒋼𒂗',
  'det.diag.vbQuote': '𒈪𒉡𒌈 𒊭 𒈾𒁕𒉏 𒀀𒈾 𒍠 𒊭 𒆷 𒈪𒅅𒋛𒅎',
  'det.diag.kapFreiKapital': '𒊕𒁺 𒊭 𒁀𒈝 𒊑𒅅𒋛𒅎 (𒅗𒌔𒁍𒌝 𒅖𒋼𒂗)',
  'det.diag.kapFreiRente': '𒊕𒁺 𒊭 𒁀𒈝 𒊑𒅅𒋛𒅎 (𒈾𒁕𒉡𒌝 𒀀𒈾 𒆗 𒁀𒆷𒁲𒅎)',
  'det.diag.memoRest': 'TĒRTUM: 𒈾𒁕𒈾𒌈 𒊭 𒂍 𒅆𒅁𒊑𒅎 𒂊𒇷 𒍠 𒊭 𒈪𒀉𒄩𒊑𒅎',
  'det.diag.memoRestAv': 'TĒRTUM: 𒈾𒁕𒈾𒌈 𒊭 𒊕𒁺 𒂊𒇷 𒍠 𒊭 𒈪𒀉𒄩𒊑𒅎',
  'det.diag.wiederanl': '𒈦 𒊭 𒌉𒊑𒅎 𒁀𒈝 𒈪𒅅𒋛𒅎',
  'det.diag.kapstEff': '𒈪𒅅𒋧 𒆠𒉡𒌝 𒊭 𒈦 𒀉𒋾 Soli 𒌋 𒈪𒅅𒋛𒅎 𒊭 𒂍 𒄿𒇷𒅎',
  'det.diag.bestAnteil': '𒍣𒀉𒌈 𒈪𒅅𒋛𒌈 𒊭 𒈾𒁕𒉏 𒊭 𒈠𒋾𒅎',
  'det.warn.lead': '𒂊𒇷 𒍠 𒊭 𒉺𒁕𒉏 𒁮𒆠𒅎 𒋫𒌔𒍝𒌔: ',
  'det.warn.aussch': '𒂊𒇷 𒈨𒀜 𒄿𒈾 𒈨𒀜 𒁲𒉡𒌝 𒀀𒈾 𒈾𒅗𒊑𒅎 𒊭 𒀉 𒆷 𒄿𒁀𒀸𒅆. ',
  'det.warn.ngef': '𒍣𒀉𒌈 𒊏𒁍𒌝 𒊭 𒈾𒁕𒈾𒋾𒅎 𒆷 𒈪𒅅𒊓𒄠 𒌋 𒆷 𒊑𒅅𒊓𒄠 𒄿𒇷𒅅𒆠 — 𒍣𒀉𒌈 𒀭𒉡𒌝 𒀀𒈾 𒊑𒅅𒋛𒅎 𒊭 𒋫𒄠𒅗𒊑𒅎 𒅋𒆷𒀝 𒌋 𒄿𒈾 𒀭𒉏 𒈾𒁕𒉆 𒊭 𒊑𒅅𒋛𒅎 𒊭 𒈬𒌨𒍣𒅎 𒅖𒋼𒂗𒈠 𒄿𒇷𒅅𒆠. ',
  'det.warn.vb': '𒈾𒁕𒉡𒌝 𒊭 𒂍 𒅆𒅁𒊑𒅎 𒂊𒇷 𒍠 𒊭 𒆷 𒈪𒅅𒋛𒅎 𒈠𒁲𒅖 𒀉𒋾𒅅; 𒁕𒀭𒉡𒌓 𒍠 𒆠𒉏 𒆠𒈠 𒅖𒋼𒂗 𒀀𒈾 𒊕𒁺 𒄿𒈠𒀜𒁲. ',
  'det.anspar.h.jahr': '𒈬',
  'det.anspar.h.brutto': 'napharum',
  'det.anspar.h.beitrag': '𒈾𒁕𒉡𒌝 𒀀𒈾 𒂍 𒅆𒅁𒊑𒅎',
  'det.anspar.h.agzVar': '𒋫𒀊𒁍𒌈 %',
  'det.anspar.h.agzFix': '𒋫𒀊𒁍𒌈 𒆠𒈾𒌈',
  'det.anspar.h.sv': '𒈠𒁺𒌝 𒊭 𒊑𒅅𒋛𒅎',
  'det.anspar.h.st': '𒈠𒁺𒌝 𒊭 𒈪𒅅𒋛𒅎',
  'det.anspar.h.netto': '𒅗𒌔𒁍𒌝 𒋛𒀉𒌈',
  'det.anspar.h.zul': '𒋫𒀊𒁍𒌈',
  'det.anspar.h.kbav': '𒊕𒁺 𒂍 𒅆𒅁𒊑𒅎',
  'det.anspar.h.kav': '𒊕𒁺 𒅆𒁍𒋾𒅎',
  'det.anspar.h.kpriv': '𒊕𒁺 𒊏𒈠𒉌𒅗',
  'det.row.year': function(p){ return p.jahr + ' (' + p.alter + ' 𒊭𒈾𒌈)'; },
  'det.ausz.h.jahr': '𒈬',
  'det.ausz.h.bavBr': '𒂍 𒅆𒅁𒊑𒅎 𒈾𒀊𒄩𒊒𒌝',
  'det.ausz.h.kvpv': 'riksum',
  'det.ausz.h.steuer': 'miksum',
  'det.ausz.h.mind': '𒄩𒆷𒀝 𒈾𒁕𒉏',
  'det.ausz.h.bavNet': '𒂍 𒅆𒅁𒊑𒅎 𒋛𒀉𒌈',
  'det.ausz.h.avBr': '𒊕𒁺 𒈾𒀊𒄩𒊒𒌝',
  'det.ausz.h.avNet': '𒊕𒁺 𒋛𒀉𒌈',
  'det.ausz.h.privBr': '𒊏𒈠𒉌𒅗 𒈾𒀊𒄩𒊒𒌝',
  'det.ausz.h.privNet': '𒊏𒈠𒉌𒅗 𒋛𒀉𒌈',
  'det.ann.intro': '𒁲𒉡𒌝 𒀀𒈾 𒀀𒉿𒋾𒅎 𒊭 𒍣𒅎𒁕𒋾𒅎 𒅗𒍣𒅕, 𒌋 𒄿𒈾 2026 𒆷 𒅗𒇴 𒂵𒈪𒅕. 𒈪𒈾𒌈 𒄿𒈾 𒆠𒅁𒉺𒋾𒅎 𒌅𒆰𒌈 𒊭 𒇷𒅁𒁉𒅎 𒅆𒈾.',
  'det.ann.h.annahme': '𒁲𒉡𒌝 𒊭 𒁾𒁉𒅎',
  'det.ann.h.vertrauen': 'tukultum',
  'det.ann.h.anmerkung': '𒋼𒅕𒌈',
  'det.ann.r1.a': '𒈪𒈾𒌈 𒊭 𒊑𒅅𒊓𒋾𒅎 2026, 𒈪𒅅𒋧 𒊭 § 32a 2026',
  'det.ann.r1.c': 'SVBezGrV 2026, Steuerfortentwicklungsgesetz',
  'det.ann.r2.a': '𒊑𒅅𒋧 𒊭 𒈬𒌨𒍣𒅎 𒀀𒈾 𒈾𒁕𒉏 𒊭 𒂍 𒅆𒅁𒊑𒅎',
  'det.ann.r2.c': '§§ 229, 250 SGB V',
  'det.ann.r3.a': '𒍠 𒊭 𒆷 𒈪𒅅𒋛𒅎 § 226 Abs. 2 S. 2 SGB V',
  'det.ann.r3.c': '𒆷 𒍝𒀠𒌈',
  'det.ann.r4.a': '𒍠 𒃵𒊒𒌝 𒁀𒈝 𒍠 𒊭 𒆷 𒈪𒅅𒋛𒅎 𒄿𒈾 𒊑𒅅𒋛𒅎 𒊭 𒉺𒆷𒄭𒅎',
  'det.ann.r4.c': '𒅆𒅋𒆷𒌈 𒊭 𒄿𒈾 𒁾𒉺𒋾𒅎 𒊭 𒋼𒅕𒋾𒅎 𒈠𒁲𒅖 𒄿𒁀𒀸𒋗',
  'det.ann.r5.a': '𒈾𒁕𒉡𒌝 𒊭 𒊕𒁺 𒊭 𒅆𒁍𒋾𒅎 𒊑𒅅𒊓𒄠 𒆷 𒄿𒈾𒀜𒁷',
  'det.ann.r5.c': '𒈾𒁕𒉡𒌝 𒊭 𒂍 𒅆𒅁𒊑𒅎 𒆷 𒅆',
  'det.ann.r6.a': '𒈪𒅖𒈝 𒊭 𒈾𒅗𒊑𒅎 𒀀𒈾 𒍣𒀉𒋫𒋾𒅎 𒆷 𒅗𒍣𒊏𒋾𒅎',
  'det.ann.r6.c': '§ 22 Nr. 5 S. 2 Buchst. b i.V.m. § 20 Abs. 1 Nr. 6 S. 2 EStG',
  'det.ann.r7.a': '𒋫𒀊𒁍𒌈 𒀀𒁲 𒈠𒁲𒅎 𒆠𒉏 𒊭 𒁁𒂖 𒅆𒅁𒊑𒅎 𒅖𒋼𒂗𒈠',
  'det.ann.r7.c': '𒀀𒉿𒌈 𒊭𒉌𒌈 𒄩𒄠𒊭𒀜 𒂠𒊑𒀉 𒄿𒈾 𒈨𒀜 𒆠𒈠 𒈪𒉡𒋫𒄠 𒆠𒈾𒋫𒄠 𒄿𒈠𒀭𒉡',
  'det.ann.r8.a': '𒍠 𒊏𒁍𒌝 𒊭 𒈾𒁕𒈾𒋾𒅎 𒊭𒉡𒋾𒅎 2.340 €',
  'det.ann.r8.c': 'DĪNUM ŠA ṬUPPIM. 𒄿𒅗𒀭 𒋗𒌝𒈠 𒌉 𒅆𒈠𒄠 𒊭 𒊕𒁺 𒊭 𒅆𒁍𒋾𒅎 𒍑𒋼𒇷 𒌋 𒄿𒈠𒀜𒁲',
  'det.ann.r9.a': '𒊑𒅅𒋧 KVdR 𒄿𒈾 𒅆𒁍𒋾𒅎 𒄿𒈾 𒁾𒁉𒅎 𒊭𒆥',
  'det.ann.r9.c': '𒊭 𒄿𒈾 𒍣𒁍𒋾𒅎 𒄿𒊑𒅅𒋢 𒆷 𒄠𒈠𒊒',
  'det.ann.notmodelled': '<b>𒄿𒈾 𒁾𒁉𒅎 𒆷 𒊭𒀝𒉡:</b> 𒈠𒁺𒌝 𒄿𒈾 𒈾𒁕𒉏 𒉺𒉏, 𒀀𒉿𒌈 𒊭 𒈾𒅗𒊑𒅎 𒊭 𒀉 𒀀𒈾 𒊑𒅅𒋛𒅎 𒊭 𒈬𒌨𒍣𒅎 𒌋 𒀀𒈾 𒅗𒌔𒁉𒅎 𒊭 𒆷 𒅆𒅁𒊑𒅎 𒌋 𒀀𒈾 𒅗𒌔𒁉𒅎 𒊭 𒌉, 𒈾𒁕𒉡𒌝 𒀀𒈾 𒁉𒀉 𒈬𒋾𒅎, 𒈾𒍝𒊒𒌝 𒄿𒈾 𒄩𒆷𒀝 𒋫𒄠𒅗𒊑𒅎 (PSVaG), 𒀀𒆷𒆪𒌝 𒀀𒈾 𒁁𒂖 𒅆𒅁𒊑𒅎 𒂠𒋆, 𒈠𒁺𒌝 𒀀𒈾 𒌉 𒄿𒈾 𒊑𒅅𒋛𒅎 𒊭 𒉺𒆷𒄭𒅎, 𒈪𒀉𒄩𒊒𒌝 𒊭 𒁕𒈪𒅅𒋾𒅎 (§ 32d Abs. 6 EStG), 𒈾𒍝𒊒𒌝 𒄿𒈾 𒍝𒁀𒋾𒅎 𒊭 𒈠𒀝𒆪𒊑𒅎, 𒌋 𒀀𒁕𒊒𒌝 𒊭 𒆷𒁀𒊑𒅎 𒂊𒇷 𒍠 𒊭 𒈪𒀉𒄩𒊑𒅎.',
  'det.prinzip': '<p>𒈪𒀉𒄩𒊒𒌝 𒊭 <i>𒈾𒁕𒈾𒋾𒅎 𒈾𒀊𒄩𒊑𒅎</i> 𒆷 𒆠𒉡𒌝: 𒈾𒅗𒊒𒌝 𒊭 𒀉 𒅖𒌅 𒈾𒀊𒄩𒊑𒅎 𒅋𒇴, 𒌋 𒉺𒂵𒌈 𒊭 𒊏𒈠𒉌𒅗 𒅖𒌅 𒅗𒌔𒁉𒅎 𒋛𒀉𒋾𒅎. 𒅖𒋗 𒀭𒉏 <b>𒅗𒌔𒁍𒌝 𒋛𒀉𒌈</b> 𒅖𒋼𒂗 𒅖𒊭𒀝𒅗𒀭:</p>'
    + '<p style="font-family:var(--mono);font-size:.82rem;background:var(--chip);padding:9px 11px;border-radius:9px">𒅗𒌔𒁍𒌝 𒋛𒀉𒌈 = 𒈾𒁕𒉡𒌝 𒈾𒀊𒄩𒊒𒌝 − 𒈠𒁺𒌝 𒊭 𒈪𒅅𒋛𒅎 − 𒈠𒁺𒌝 𒊭 𒊑𒅅𒋛𒅎 𒊭 𒇽 𒅆𒅁𒊏𒄠 𒂊𒁉𒋆</p>'
    + '<p>𒅗𒌔𒁍𒌝 𒀭𒉡𒌝 𒄿𒈾 𒊭𒆷𒀸 𒁲𒈾𒋾𒅎 𒅖𒊭𒀝𒅗𒀭. 𒈪𒅎𒈠 𒊭 𒄿𒁀𒀸𒅆 𒈪𒀉𒄩𒊒𒌝 𒊭 <i>𒊑𒅅𒊓𒋾𒅎 𒊭 𒋫𒀊𒁍𒋾𒅎</i> 𒅆, 𒆷 𒈪𒀉𒄩𒊒𒌝 𒊭 𒈾𒁕𒈾𒋾𒅎.</p>'
    + '<p><b>𒅗𒈝 𒊭 𒈪𒅅𒋛𒅎 𒂊𒁲𒅖𒅆𒋗 𒆷 𒅆𒈠𒄠 𒄿𒋗:</b> (1−t)·(1+r)ⁿ = (1+r)ⁿ·(1−t). 𒋫𒈾𒀸𒋗𒌝 𒄿𒌉𒊒. 𒅕𒁁 𒅖𒁺 𒅖𒋼𒂗𒈠 𒄿𒁀𒀸𒅆𒌋:</p>'
    + '<ol style="padding-left:1.2em;margin:.3em 0"><li>𒈾𒅗𒊒𒌝 𒊭 𒈪𒅅𒋛𒅎 t₀ − t₁</li>'
    + '<li>𒅗𒌔𒁍𒌝 𒊭 𒊭𒉏 — 𒋫𒀊𒁍𒌈 𒊭 𒁁𒂖 𒅆𒅁𒊑𒅎 𒌋 𒊭 𒈠𒋾𒅎</li>'
    + '<li>𒊏𒁍𒌝 𒁀𒈝 𒈪𒅅𒋛𒅎 — 𒈪𒅅𒋧 𒊭 𒊑𒋆 𒆷 𒄿𒁀𒀸𒅆</li>'
    + '<li>𒈾𒁕𒈾𒌈 𒂠𒊺𒌈 𒊭 𒀀𒈾 𒁲𒉏 𒅖𒋼𒂗 𒅖𒋼𒂗𒈠 𒅋𒆷𒅗 — 𒊑𒅅𒋧 𒊭 𒈬𒌨𒍣𒅎 𒀀𒈾 𒈾𒁕𒉏 𒊭 𒂍 𒅆𒅁𒊑𒅎</li></ol>'
    + '<p>𒅖𒌈 𒅕𒁍𒌝 𒇷𒈬𒌓𒌈 𒊏𒁉𒌈 𒊭 𒂍 𒅆𒅁𒊑𒅎 𒅆, 𒌋 𒅖𒌈 𒊭𒉡𒌝 𒁕𒈪𒅅𒌈 𒅖𒋼𒂗𒈠 𒊭 𒊑𒅅𒊓𒋾𒋗. 𒈦 𒊭 𒂍 𒅆𒅁𒊑𒅎 <b>𒄿𒈾 𒊏𒁁𒅎 𒊭 𒈾𒁕𒉏 𒆠𒉌𒅖 𒄿𒈠𒀜𒁲</b>, 𒀸𒋗𒌝 𒍠 𒊭 𒆷 𒈪𒅅𒋛𒅎 𒆠𒉡𒌝 𒌋 𒁕𒀭𒉡𒌈 𒊭 𒆠𒈠 𒅖𒋼𒂗 𒀀𒈾 𒊕𒁺 𒄿𒈠𒀜𒁲 — 𒌋 𒁕𒈪𒅅𒌈 𒄿𒈾 𒇷𒅁𒁉𒅎 𒆷 𒄿𒁀𒀸𒅆.</p>'
    + '<p>𒋗𒌝𒈠 𒅗𒌔𒁍𒌝 𒋛𒀉𒌈 𒊭𒆥, 𒈾𒁕𒉡𒌝 𒈾𒀊𒄩𒊒𒌝 𒄿𒈾 𒈪𒅖𒆷𒋾𒅎 𒀀𒈾 𒅖𒁲𒅎 𒅎𒈠𒀭𒉡: N(B) 𒆥 𒌋 𒆠𒉌𒅖 𒄿𒊐𒁉 (dN/dB = 1 − 𒈪𒉡𒌈 𒊭 𒊑𒅅𒋛𒅎 𒊭 𒍠 − 𒈪𒉡𒌈 𒊭 𒈪𒅅𒋛𒅎 𒊭 𒍠 > 0), 𒌋 𒀸𒋗𒌝 𒋼𒂗𒆪𒊏𒋾𒅎 𒄿𒈾 𒅕𒁁 𒌋 𒊓𒈠𒈾𒀜 𒄿𒈾 𒈨𒀜 𒊭 BBG-RV 𒌋 𒄿𒈾 𒍠 𒊭 𒊑𒅅𒋛𒅎 𒌋 𒊭 𒈪𒅅𒋛𒅎 𒀀𒈾 𒅖𒋼𒂗 𒈨𒆪𒋾𒅎 𒆷 𒄿𒌉𒊒. 34 𒈪𒅖𒆷𒌈 𒅆𒅋𒆷𒋫𒄠 𒅖𒌅 𒅖𒋼𒂗 𒂠𒊑𒀉 𒊭 𒅖𒋼𒂗 𒅗𒌔𒁉𒅎 𒈠𒁲𒋫𒄠 𒄿𒈾𒀜𒁲𒈾.</p>',
  'det.t.prinzip': '𒁲𒉡𒌝 𒊭 𒈪𒀉𒄩𒊑𒅎',
  'det.t.erg': '𒀀𒉿𒌈 𒂵𒈪𒅕𒌈 𒀀𒈾 𒇷𒅁𒁉𒅎',
  'det.s.erg': '𒊭𒆷𒀸 𒁲𒈾𒌈 𒄿𒈾 𒌋𒈪 𒊭 𒁲𒄷𒋾𒅎 𒅗𒌔𒉺𒄠 𒋛𒀉𒋫𒄠 𒅖𒋼𒂗 𒄿𒇷𒅅𒆠𒀀.',
  'det.s.mon': '𒆗 𒁲𒈾𒌈 𒄿𒈾 𒌋𒈪 𒅖𒋼𒂗 𒀀𒈾 𒈾𒁕𒉏 𒄿𒌉𒊏, 𒄿𒈾 𒁕𒀭𒉡𒌓 𒅗𒌔𒁉𒅎 𒊭 𒄿𒈾𒀭𒈾. zâz 𒊭𒈾𒋾𒅎 𒉺𒁕𒉡𒌝 𒆠𒉡𒌝 𒅆, 𒅖𒋗 𒀭𒉏 𒆷𒂵𒌈 𒃵𒊑𒅖 𒅔𒉆𒈠𒊏.',
  'det.t.mon': '𒈾𒁕𒉡𒌝 𒊭 𒌗, 𒍝𒍮',
  'det.t.diag': '𒅖𒌈',
  'det.s.diag': '𒅖𒌈 — 𒌋 𒀀𒊹 𒂊𒇷 𒍠 𒊭 𒉺𒁕𒉏 𒁮𒆠𒅎 𒋫𒌔𒍝𒌔𒍪.',
  'det.t.anspar': '𒌋𒈬 𒊭 𒁲𒄷𒋾𒅎, 𒊭𒀜𒋫𒄠 𒀀𒈾 𒊭𒀜𒋾𒅎',
  'det.t.ausz': '𒌋𒈬 𒊭 𒈾𒁕𒉏, 𒊭𒀜𒋫𒄠 𒀀𒈾 𒊭𒀜𒋾𒅎',
  'det.t.ann': '𒁕𒀭𒉡𒌈 𒊭 𒁲𒈾𒋾𒅎 𒊭 𒁾𒁉𒅎',

  /* ---------------- Speichern und weitergeben ---------------- */
  'msg.linkCopied': '𒉺𒁕𒉡𒌝 𒆪𒍑𒋗𒌨. 𒊭 𒄿𒁁𒀉𒌅 𒈪𒈾𒋾𒅎 𒀭𒈾𒋾𒅎 𒄠𒈥 — 𒈪𒅎𒈠 𒀀𒈾 𒂍 𒁾𒁉𒅎 𒊭 𒈠𒋾𒅎 𒆷 𒅋𒆷𒀝.',
  'msg.linkFailed': '𒆪𒍑𒋗𒊒𒌝 𒆷 𒂵𒈪𒅕. 𒉺𒁕𒉡𒌝 𒄿𒈾𒀭𒈾 𒄿𒈾 𒋗𒈪𒅎 𒊭 𒉺𒁕𒉏 𒊭𒆥.',
  'msg.loaded': 'leqi.',
  'msg.loadError': function(p){ return '𒁾 𒆷 𒅔𒉆𒈥: ' + p.msg; },
  'msg.reset': '𒀀𒈾 𒁲𒉏 𒊑𒂠𒋾𒅎 𒋼𒅕.',

  /* ---------------- PWA ---------------- */
  'pwa.offline': '<b>𒁀𒈝 𒉺𒁕𒉏 𒅁𒁁𒂠.</b> 𒁾𒁍𒌝 𒄿𒈾𒀭𒈾 𒄿𒈾 𒁉𒋾𒅗 𒊭𒆥 𒌋 𒁀𒈝 𒉺𒁕𒉏 𒅁𒁁𒂠. 𒀀𒈾 𒊭𒅗𒉏: 𒄿𒈾 iPhone "𒄿𒁷" → "𒀀𒈾 𒁾𒁉𒅎 𒊑𒂠𒋾𒅎"; 𒄿𒈾 Android 𒁾𒁍𒌝 → "𒁾𒉺𒄠 𒋗𒆲".',
  'pwa.installAsk': '<b>𒁾𒉺𒄠 𒆠𒈠 𒁾𒉺𒄠 𒋗𒆲?</b> 𒌋 𒄿𒈾 𒁾𒁉𒅎 𒊑𒂠𒋾𒅎 𒀉𒋾 𒋗𒈪𒋗 𒄿𒁀𒀸𒅆 𒌋 𒁀𒈝 𒉺𒁕𒉏 𒅁𒁁𒂠. ',
  'pwa.installBtn': '𒋗𒆲',
  'pwa.installed': '<b>𒊭𒆥.</b> 𒄿𒈾𒀭𒈾 𒁾𒉺𒄠 𒀉𒋾 𒁾𒉺𒋾𒅗 𒊭𒉡𒋾𒅎 𒋫𒄠𒈥.',
  'pwa.declined': '𒁕𒈪𒅅 — 𒁾𒁍𒌝 𒅁𒁁𒂠 𒌋 𒁀𒈝 𒉺𒁕𒉏 𒅁𒁁𒂠.',
  'pwa.file': '<b>𒁾 𒅖𒋼𒂗 𒋼𒁁𒀉𒋼</b> (<kbd>file://</kbd>). 𒅗𒇴 𒅎𒈠𒀭𒉡, 𒅗𒇴 𒅖𒊭𒀝𒅗𒀭. 𒅆𒈾 𒅖𒋼𒂗𒈠 𒆷 𒄿𒁀𒀸𒅆𒀀: 𒋗𒈬𒌝 𒄿𒈾 𒁾𒁉𒅎 𒊑𒂠𒋾𒅎 𒌋 𒈾𒍝𒊒𒌝 𒁀𒈝 𒉺𒁕𒉏 — 𒌋 𒀭𒉌𒌈 𒄿𒈾 𒀭𒉏 𒆷 𒋫𒁀𒀸𒅆, 𒁾 𒄿𒈾 𒁉𒋾𒅗 𒊭𒆥. 𒀀𒈾 𒅗𒆷𒈠: 𒀸𒊏𒄠 𒀀𒈾 HTTPS 𒋗𒆲 𒌋 𒅖𒌅 𒀭𒉏 𒁁𒋼.'
};
