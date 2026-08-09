/* =====================================================================
   Wörterbuch Deutsch, Register „Vertrieb" (BCP 47 § 2.2.7, privater
   Untertag de-x-sales) — VOLLSTÄNDIG (459 Schlüssel).

   Keine Übersetzung, sondern eine Stilvariante derselben Sprache: exakt
   dieselben Zahlen, Formeln und Paragraphen wie im Wörterbuch Deutsch
   (i18n.de.js) und im Amtsdeutsch (i18n.de-x-amt.js), aber in der
   Diktion eines Vertriebs- bzw. Werbetextes — Imperativ, direkte
   Anrede, Vorteilsformulierung, Ausrufezeichen, kurze Sätze. Derselbe
   § 1a BetrAVG, der im Amtsdeutsch „Ein Rechtsanspruch besteht nur bis
   zur Höhe von vier vom Hundert der Beitragsbemessungsgrenze" heißt,
   wird hier zu „Bis zu 4 % on top — geschenkt vom Gesetzgeber!".

   Wichtig: Zahlen, Rechenergebnisse und Rechtsaussagen ändern sich
   nicht — nur die Verpackung. Auch Warnhinweise bleiben inhaltlich
   vollständig erhalten (Risikohinweise gehören in echter Finanzwerbung
   ebenso zum Pflichttext wie das Kleingedruckte); sie werden lediglich
   in denselben Ton gesetzt wie der Rest der Seite, nicht abgeschwächt.

   Vertrauensgrad: muttersprachliche Stiltransformation, kein
   Übersetzungsrisiko. Das Risiko liegt in der Registertreue an den
   Stellen, wo Vertriebsdeutsch mit fachlicher Präzision kollidiert
   (Formeln, Paragraphen) — dort bleibt der Fachbegriff unangetastet
   und nur der Rahmensatz wird verkauft. Vertrauensgrad ca. 90 %.
   ===================================================================== */
window.I18N_DE_X_SALES = {
  'f.I:gehalt.label': 'Ihr Jahresgehalt brutto',
  'f.I:gehalt.hint': 'Ohne Einmalzahlungen — das 13. Gehalt dürfen Sie anteilig mitzählen, wenn Sie mögen. Damit wissen wir, wo Sie steuerlich stehen und ob für Sie noch mehr drin ist als die üblichen Grenzen.',
  'f.I:beitrag.label': 'Ihr Monatsbeitrag zur bAV, brutto',
  'f.I:beitrag.hint': 'Bruttoentgeltumwandlung nach § 1a BetrAVG — Ihr gesetzlicher Anspruch reicht bis 4 % der Beitragsbemessungsgrenze RV, quasi geschenkt vom Gesetzgeber. Wer mehr will, braucht nur das Okay vom Arbeitgeber — meistens eine Formsache!',
  'f.I:netto_ziel.label': 'Ihr monatlicher Nettoaufwand',
  'f.I:netto_ziel.hint': 'Das ist der einzige Betrag, der Ihnen wirklich fehlt — alles andere zahlt der Staat oder der Chef mit. Genau diesen Betrag stecken wir fair in alle drei Varianten, damit Sie 1:1 vergleichen können. Und keine Sorge: der Zusammenhang zum Bruttobeitrag ist glasklar monoton, wir rechnen das mit 34 Verfeinerungsschritten bis auf den Zehntelcent genau für Sie durch.',
  'f.I:agzus.label': 'Zuschuss von Ihrem Arbeitgeber',
  'f.I:agzus.hint': 'Mindestens 15 % on top schreibt der Gesetzgeber vor (§ 1a Abs. 1a BetrAVG) — viele Arbeitgeber legen sogar noch eine Schippe drauf! Ab etwa z ≈ 26,7 % schlägt die bAV rechnerisch das Privatdepot — mit der Sensitivitätskurve können Sie das live nachverfolgen.',
  'f.I:agz_fix.label': 'Extra: fester Zuschuss obendrauf',
  'f.I:agz_fix.hint': 'Ein fixer Bonus aus Tarifvertrag oder Betriebsvereinbarung — bei der Deutschen Bahn und vielen anderen ganz normal, und zwar zusätzlich zu den 15 % aus § 1a Abs. 1a BetrAVG! Der fließt garantiert steuerfrei in Ihre 8-%- und 4-%-Töpfe (§ 1 Abs. 1 S. 1 Nr. 9 SvEV) — Ihre eigene Umwandlung rutscht dadurch etwas nach hinten, macht aber unterm Strich nichts, denn geschenktes Geld bleibt geschenktes Geld!',
  'f.I:agz_fix_dyn.label': 'Festen Zuschuss mitwachsen lassen',
  'f.I:agz_fix_dyn.hint': 'Festbeträge stehen meist fix im Tarifvertrag und werden erst bei der nächsten Tarifrunde nachgezogen — Standardannahme deshalb „bleibt gleich". Über 27 Jahre bei 2 % Inflation ist real noch der Faktor 1,02⁻²⁷ ≈ 0,59 übrig; wer optimistischer plant, wählt einfach „wächst mit dem Gehalt"!',
  'f.I:agz_fix_dyn.o0': 'bleibt gleich',
  'f.I:agz_fix_dyn.o1': 'wächst mit dem Gehalt',
  'f.I:agzus_sv.label': 'So rechnen wir Ihren Zuschuss',
  'f.I:agzus_sv.hint': '„Spitz" ist die gesetzestreue Variante: Ihr Arbeitgeber zahlt genau so viel drauf, wie er selbst an Sozialabgaben spart (§ 1a Abs. 1a BetrAVG). Liegen Sie über beiden Beitragsbemessungsgrenzen, spart er nichts — dann gibt es leider auch nichts obendrauf. Deshalb pendelt sich der Regler meist bei rund 21 % ein. „Voller Beitrag" und „sv-freier Anteil" sind die großzügigeren Varianten, die manche Arbeitgeber freiwillig zahlen. Vertrauensgrad der spitzen Lesart: 75 %.',
  'f.I:agzus_sv.o0': 'voller Beitrag',
  'f.I:agzus_sv.o1': 'sv-freier Anteil',
  'f.I:agzus_sv.o2': 'spitz gerechnet',
  'f.I:dyn.label': 'Beitrag mitwachsen lassen',
  'f.I:dyn.hint': 'Wächst Ihr Beitrag mit dem Gehalt, bleibt Ihr 8-%-Topf Jahr für Jahr optimal ausgeschöpft. Bleibt er starr, verliert er real an Wert — und Ihr Vergleichsbetrag für die beiden anderen Varianten schrumpft entsprechend mit.',
  'f.I:dyn.o1': 'wächst mit dem Gehalt',
  'f.I:dyn.o0': 'bleibt gleich',
  'f.I:rendite.label': 'ETF-Rendite p.a., brutto',
  'f.I:rendite.hint': 'Vor Kosten, vor Steuern. Wir setzen in allen drei Varianten denselben ETF an — so vergleichen Sie wirklich Äpfel mit Äpfeln, nur die Förderung macht den Unterschied!',
  'f.I:alter.label': 'Ihr Alter heute',
  'f.I:alter.hint': 'Startschuss für Ihre Ansparphase. Kalenderjahr 0 = 2026.',
  'f.I:alter.unit': 'Jahre',
  'f.I:rentbeg.label': 'Wann soll’s losgehen?',
  'f.I:rentbeg.hint': 'Auszahlungsbeginn für alle drei Varianten. Das Altersvorsorgedepot zahlt frühestens ab 65 aus (neu seit der Reform 2026).',
  'f.I:rentbeg.unit': 'Jahre',
  'f.I:kv_ruhe.label': 'Krankenversicherung im Ruhestand',
  'f.I:kv_ruhe.hint': 'Der Punkt, der wirklich den Unterschied macht! In der GKV gelten Betriebsrenten als Versorgungsbezüge und werden voll verbeitragt (§§ 229, 250 SGB V) — Ihr Altersvorsorgedepot bleibt hier außen vor. Diese eine Einstellung dreht das ganze Ergebnis.',
  'f.I:kv_ruhe.o1': 'gesetzlich versichert',
  'f.I:kv_ruhe.o2': 'privat versichert',
  'f.I:auszform.label': 'So möchten Sie Ihre bAV genießen',
  'f.I:auszform.hint': 'Kapital: einmal volle Kanne versteuern, KV-Beiträge werden dafür freundlicherweise auf 120 Monate gestreckt (§ 229 Abs. 1 S. 3 SGB V). Rente: läuft ein Leben lang und schont dabei Ihren Freibetrag gleich um ein Vielfaches. Ganz oder gar nicht — eine Teilkapitalisierung bieten wir hier (noch) nicht an.',
  'f.I:auszform.o1': 'Kapital auf einen Schlag',
  'f.I:auszform.o2': 'Rente, ein Leben lang',
  'f.I:teilkap.label': 'Altersvorsorgedepot: Startbonus als Einmalbetrag',
  'f.I:teilkap.hint': 'Bis zu 30 % Ihres angesparten Kapitals holen Sie sich gleich zu Beginn als Einmalbetrag ab — bei beiden Auszahlungsformen möglich! Kostet zwar etwas Progression im ersten Jahr, dafür haben Sie das Geld sofort in der Tasche. Was über den Jahreshöchstbetrag hinausgeht (unser „Sleeve"), verrenten wir automatisch mit — kein Paragraf, nur unsere praktische Modellregel.',
  'f.I:av_auszform.label': 'Altersvorsorgedepot: der Rest',
  'f.I:av_auszform.hint': 'So läuft’s mit dem Kapital nach dem Einmalbetrag — unabhängig davon, was Sie bei der bAV wählen. Auszahlungsplan: bleibt investiert, wird verzinst ausgezahlt, die ungeförderte Schicht zahlt nur den halben Unterschiedsbetrag. Lebenslange Rente: das Kapital geht an den Anbieter, dafür wird die ungeförderte Schicht mit nur dem Ertragsanteil besteuert (§ 22 Nr. 5 S. 2 Buchst. a EStG, ab 67 nur 17 % statt der hier üblichen 26 %) — richtig günstig! Die geförderte Schicht bleibt in beiden Fällen voll nachgelagert steuerpflichtig, das lässt sich nicht wegverkaufen.',
  'f.I:av_auszform.o1': 'Auszahlungsplan',
  'f.I:av_auszform.o2': 'Rente, ein Leben lang',
  'f.I:agz_fix_min.label': 'Mindesteinsatz für den Extra-Zuschuss',
  'f.I:agz_fix_min.hint': 'Manche Arbeitgeber koppeln den Bonus an eine Mindestbeteiligung nach dem Motto „ab X ist Y garantiert". 0 bedeutet: bedingungslos — der Zuschuss fließt in jedem aktiven Jahr, auch ganz ohne eigenen Beitrag! Kleiner Praxistipp: Ein wirklich bedingungsloser Zuschuss ist streng genommen kein Argument FÜR die Umwandlung, weil er sowieso fließt — bitte nur eintragen, was wirklich an Ihre Teilnahme geknüpft ist.',
  'f.I:rentfak_av.label': 'Rentenfaktor Ihres Altersvorsorgedepots',
  'f.I:rentfak_av.hint': 'Nur relevant, wenn Sie sich fürs Verrenten entscheiden. Voreingestellt wie bei der bAV; ein Depotvertrag kommt ohne teuren Versicherungsmantel aus und ist deshalb oft günstiger — den genauen Wert liefert Ihnen Ihr Angebot. Bei 0 gibt’s keine Rente.',
  'f.I:rentfak_av.unit': '€ je 10.000 €',
  'f.I:rentdyn_av.label': 'Wachstum Ihrer Depotrente p.a.',
  'f.I:rentdyn_av.hint': 'Überschussbeteiligung bzw. Fondsentwicklung während der Rentenphase Ihres Depotvertrags.',
  'f.I:rentfak.label': 'Rentenfaktor Ihrer bAV',
  'f.I:rentfak.hint': 'Nur bei Auszahlungsform „Rente" wichtig. 26 € Monatsrente je 10.000 € entspricht etwa 3,1 % Entnahmequote — steht ganz genau in Ihrem Produktinformationsblatt.',
  'f.I:rentfak.unit': '€ je 10.000 €',
  'f.I:rentdyn.label': 'Wachstum Ihrer bAV-Rente p.a.',
  'f.I:rentdyn.hint': 'Überschussbeteiligung bzw. Fondsentwicklung während der Rentenphase.',
  'f.I:fuenftel.label': 'Fünftelregelung mitnehmen?',
  'f.I:fuenftel.hint': 'Der Steuervorteil nach § 34 EStG greift bei planmäßiger Kapitalabfindung aus § 3 Nr. 63-Verträgen leider nur in Ausnahmefällen (BFH X R 23/15). Wir rechnen sicherheitshalber ohne — konservativ, aber ehrlich.',
  'f.I:fuenftel.o0': 'nein (auf Nummer sicher)',
  'f.I:fuenftel.o1': 'ja',
  'f.I:planende.label': 'Bis wohin vergleichen wir?',
  'f.I:planende.hint': 'Bis hierhin laufen die Auszahlungspläne. Lebenslange Renten vergleichen wir über denselben Zeitraum fair mit — was danach noch on top kommt, sehen Sie als Bonus-Hinweis unter „Diagnose". Wer alt wird, macht hier das beste Geschäft!',
  'f.I:planende.unit': 'Jahre',
  'f.I:ausscheid.label': 'Ausstieg aus dem Job',
  'f.I:ausscheid.hint': 'Ab hier: kein Gehalt, keine Beiträge mehr. Ihr Kapital verzinst sich trotzdem munter weiter bis zum Rentenbeginn.',
  'f.I:ausscheid.unit': 'Jahre',
  'f.I:tzalter.label': 'Teilzeit ab wann?',
  'f.I:tzalter.hint': 'Jeder Wert ab Rentenbeginn heißt schlicht: keine Teilzeit. Voreingestellt: 67.',
  'f.I:tzalter.unit': 'Jahre',
  'f.I:tzfaktor.label': 'Ihr Teilzeitfaktor',
  'f.I:tzfaktor.hint': 'Anteil am Vollzeitgehalt. 60 % = 60-%-Stelle.',
  'f.I:gsteig.label': 'Gehaltssteigerung p.a.',
  'f.I:gsteig.hint': 'Zieht ganz automatisch Beitragsbemessungsgrenzen, Bezugsgröße, Durchschnittsentgelt und Rentenwert mit hoch.',
  'f.I:stkl.label': 'Ihre Veranlagung',
  'f.I:stkl.hint': 'Wichtig ist die VERANLAGUNGSART, nicht die Lohnsteuerklasse — die Klasse ist nur der unterjährige Vorschuss, am Jahresende rechnet das Finanzamt sowieso mit Splitting (§ 32a Abs. 5 EStG). Bei „zusammen" bitte unbedingt das zvE Ihres Partners mit angeben, sonst stimmt die Rechnung nicht!',
  'f.I:stkl.o1': 'einzeln',
  'f.I:stkl.o3': 'zusammen (Splitting-Bonus)',
  'f.I:partner.label': 'zvE Ihres Partners',
  'f.I:partner.hint': 'Nur bei Zusammenveranlagung relevant. Wir rechnen 2·ESt((zvE + zvE_Partner)/2).',
  'f.I:kist.label': 'Ihr Kirchensteuersatz',
  'f.I:kist.hint': '8 % in Bayern und Baden-Württemberg, sonst 9 %, 0 wenn Sie ausgetreten sind. Wirkt sich übrigens auch auf die Abgeltungsteuer aus: 0,25/(1+0,25k)·(1+0,055+k).',
  'f.I:tarifanp.label': 'Steuertarif-Anpassung p.a.',
  'f.I:tarifanp.hint': 'Der komplette Tarif wird mit dem Faktor λ = (1+x)^t gestreckt: ESt = s·λ·T(zvE/s/λ) — technisch dasselbe wie eine proportionale Verschiebung aller Eckwerte. Bei 0 % droht die volle kalte Progression.',
  'f.I:kinder.label': 'Ihre Kinderanzahl',
  'f.I:kinder.hint': 'Kinderzulage im Altersvorsorgedepot: 1 € pro eingezahltem €, bis zu 300 € pro Kind — geschenkt!',
  'f.I:kind_jahre.label': 'Jahre mit Kinderzulage',
  'f.I:kind_jahre.hint': 'Die Kinderzulage läuft, solange Kindergeldanspruch besteht (§ 85 EStG) — also nicht über die komplette Ansparphase.',
  'f.I:kind_jahre.unit': 'Jahre',
  'f.I:kinderlos.label': 'Kinderlos? (PV-Zuschlag)',
  'f.I:kinderlos.hint': '0,6 Prozentpunkte Aufschlag zur Pflegeversicherung, den Arbeitnehmer allein tragen (§ 55 Abs. 3 SGB XI) — klein, aber man sollte ihn kennen.',
  'f.I:kinderlos.o0': 'nein',
  'f.I:kinderlos.o1': 'ja',
  'f.I:k_bav.label': 'Kosten Ihres bAV-Produkts p.a.',
  'f.I:k_bav.hint': 'Versicherungsmantel plus TER. Die echten Kosten stehen im Produktinformationsblatt — dort nachschauen statt raten lohnt sich!',
  'f.I:k_av.label': 'Kosten Altersvorsorgedepot p.a.',
  'f.I:k_av.hint': 'Beim Standarddepot per Gesetz gedeckelt auf maximal 1,0 % p.a. — mehr darf’s nicht kosten!',
  'f.I:k_priv.label': 'Kosten privates ETF-Depot p.a.',
  'f.I:k_priv.hint': 'Reine TER eines breiten Welt-ETF — schlank und einfach.',
  'f.I:infl.label': 'Inflation p.a.',
  'f.I:infl.hint': 'Unser Umrechner für „heutige Kaufkraft" bei allen Beträgen. Ändert an der Reihenfolge kaum etwas, macht aber alle Zahlen realistischer.',
  'f.I:sonst_zve.label': 'Sonstiges zvE im Ruhestand',
  'f.I:sonst_zve.hint': 'Vor allem der steuerpflichtige Teil Ihrer gesetzlichen Rente, ohne die hier verglichenen Produkte. Bestimmt Ihren Steuersatz in der Auszahlungsphase — und damit, wie groß Ihr Steuervorteil beim Einzahlen wirklich war.',
  'f.I:rente_br.label': 'Gesetzliche Bruttorente p.a.',
  'f.I:rente_br.hint': 'Nur für den KV-Deckel wichtig: gesetzliche Rente und Versorgungsbezüge teilen sich EINE Beitragsbemessungsgrenze (§ 223 Abs. 3 SGB V).',
  'f.P:bbg_rv.label': 'BBG Rentenversicherung (jährlich)',
  'f.P:bbg_rv.hint': 'SVBezGrV 2026 (BGBl. 2025 I Nr. 116), bundesweit einheitlich.',
  'f.P:bbg_kv.label': 'BBG Kranken-/Pflegeversicherung',
  'f.P:bbg_kv.hint': 'SVBezGrV 2026; 5.812,50 € im Monat.',
  'f.P:bezug.label': 'Bezugsgröße (monatlich)',
  'f.P:bezug.hint': 'SVBezGrV 2026, 47.460 € im Jahr. Ein Zwanzigstel davon ist Ihr Freibetrag für Versorgungsbezüge in der KV (§ 226 Abs. 2 S. 2 SGB V).',
  'f.P:de_rv.label': 'Durchschnittsentgelt RV',
  'f.P:de_rv.hint': 'Anlage 1 zu SGB VI, Wert 2026 — die Basis für Ihre Entgeltpunkte.',
  'f.P:rw.label': 'Aktueller Rentenwert',
  'f.P:rw.hint': 'Rentenwertbestimmungsverordnung 2026, ab 1.7.2026: 42,52 € — ein Plus von 4,24 %!',
  'f.P:rw.unit': '€',
  'f.P:rv_an.label': 'RV-Beitrag, Ihr Anteil',
  'f.P:rv_an.hint': '18,6 %, fifty-fifty mit dem Arbeitgeber.',
  'f.P:av_an.label': 'AV-Beitrag, Ihr Anteil',
  'f.P:av_an.hint': '2,6 %, fifty-fifty mit dem Arbeitgeber.',
  'f.P:kv_allg.label': 'KV allgemeiner Beitragssatz',
  'f.P:kv_allg.hint': '§ 241 SGB V.',
  'f.P:kv_zus.label': 'KV durchschnittlicher Zusatzbeitrag',
  'f.P:kv_zus.hint': 'Wird vom BMG bekanntgegeben; jede Kasse tickt etwas anders — tragen Sie am besten Ihren eigenen Satz ein.',
  'f.P:pv_ges.label': 'PV Gesamtbeitragssatz',
  'f.P:pv_ges.hint': '§ 55 SGB XI. Ermäßigungen ab dem zweiten Kind rechnen wir hier nicht mit ein.',
  'f.P:pv_an.label': 'PV, Ihr Anteil',
  'f.P:pv_an.hint': 'In Sachsen etwas anders (2,3 %).',
  'f.P:pv_kl.label': 'PV-Zuschlag für Kinderlose',
  'f.P:pv_kl.hint': '§ 55 Abs. 3 SGB XI, allein vom Arbeitnehmer getragen.',
  'f.P:gfb.label': 'Grundfreibetrag (Ende Zone 1)',
  'f.P:gfb.hint': '§ 32a Abs. 1 EStG in der Fassung des Steuerfortentwicklungsgesetzes.',
  'f.P:e2.label': 'Ende Zone 2',
  'f.P:e2.hint': 'Grenzsteuersatz klettert von 14 % auf 23,97 %.',
  'f.P:e3.label': 'Ende Zone 3',
  'f.P:e3.hint': 'Grenzsteuersatz klettert von 23,97 % auf 42 %.',
  'f.P:e4.label': 'Beginn Zone 5 (Reichensteuer)',
  'f.P:e4.hint': 'Ab 277.826 € sind 45 % fällig.',
  'f.P:a2.label': 'Koeffizient a₂',
  'f.P:a2.hint': 'ESt = (a₂·y + b₂)·y mit y = (zvE − Grundfreibetrag)/10.000.',
  'f.P:b2.label': 'Koeffizient b₂',
  'f.P:a3.label': 'Koeffizient a₃',
  'f.P:a3.hint': 'ESt = (a₃·z + b₃)·z + c₃ mit z = (zvE − 17.799)/10.000.',
  'f.P:b3.label': 'Koeffizient b₃',
  'f.P:c3.label': 'Konstante c₃',
  'f.P:c4.label': 'Konstante c₄',
  'f.P:c4.hint': 'ESt = 0,42·zvE − c₄.',
  'f.P:c5.label': 'Konstante c₅',
  'f.P:c5.hint': 'ESt = 0,45·zvE − c₅.',
  'f.P:soli.label': 'Solidaritätszuschlag',
  'f.P:soli.hint': 'SolzG 1995.',
  'f.P:soli_fg.label': 'Soli-Freigrenze',
  'f.P:soli_fg.hint': '2026, Grundtarif, bezogen auf die festgesetzte ESt; beim Splitting doppelt so hoch. Plus eine Milderungszone obendrauf.',
  'f.P:soli_mz.label': 'Milderungszone Grenzbelastung',
  'f.P:soli_mz.hint': '§ 3 Abs. 2a SolzG.',
  'f.P:an_pausch.label': 'Arbeitnehmer-Pauschbetrag',
  'f.P:an_pausch.hint': '§ 9a S. 1 Nr. 1a EStG.',
  'f.P:sa_pausch.label': 'Sonderausgaben-Pauschbetrag',
  'f.P:sa_pausch.hint': '§ 10c EStG.',
  'f.P:kapst.label': 'Abgeltungsteuersatz',
  'f.P:kapst.hint': '§ 32d Abs. 1 EStG.',
  'f.P:tfs.label': 'Teilfreistellung Aktienfonds',
  'f.P:tfs.hint': '§ 20 Abs. 1 Nr. 3 i.V.m. § 20 InvStG, ab 50 % Aktienfondsanteil — ein netter Steuerbonus für ETF-Sparer!',
  'f.P:sparerpb.label': 'Sparer-Pauschbetrag',
  'f.P:sparerpb.hint': '§ 20 Abs. 9 EStG; beim Splitting verdoppelt. Fängt einen großen Batzen der Vorabpauschale ab — Details im Wasserfall-Diagramm.',
  'f.P:basiszins.label': 'Basiszins Vorabpauschale',
  'f.P:basiszins.hint': 'BMF-Schreiben vom 13.01.2026, § 18 Abs. 4 InvStG (2025: 2,53 %). Auf 0 setzen heißt: keine Vorabpauschale fällig.',
  'f.P:vp_faktor.label': 'Faktor für den Basisertrag',
  'f.P:vp_faktor.hint': '§ 18 Abs. 1 S. 1 InvStG.',
  'f.P:st_frei_q.label': 'steuerfrei § 3 Nr. 63 (Anteil BBG-RV)',
  'f.P:st_frei_q.hint': '8 % der BBG-RV = 8.112 € in 2026 — komplett steuerfrei!',
  'f.P:sv_frei_q.label': 'sozialabgabenfrei (Anteil BBG-RV)',
  'f.P:sv_frei_q.hint': '§ 1 Abs. 1 S. 1 Nr. 9 SvEV; 4 % = 4.056 € in 2026. Genau bis hierhin reicht auch Ihr Rechtsanspruch nach § 1a BetrAVG.',
  'f.P:zul_g1.label': 'Zulage Stufe 1 (je € Eigenbeitrag)',
  'f.P:zul_g1.hint': 'Altersvorsorgereformgesetz, seit Mai 2026 in Kraft, anwendbar ab 1.1.2027.',
  'f.P:zul_s1.label': 'Grenze Stufe 1',
  'f.P:zul_s1.hint': 'Bis 360 € Eigenbeitrag: 50 Cent obendrauf je €.',
  'f.P:zul_g2.label': 'Zulage Stufe 2 (je € Eigenbeitrag)',
  'f.P:zul_g2.hint': 'Von 361 bis 1.800 €: 25 Cent obendrauf je €.',
  'f.P:zul_s2.label': 'Grenze Stufe 2',
  'f.P:zul_s2.hint': 'Höchstbetrag für den geförderten Eigenbeitrag; macht maximal 540 € Grundzulage — geschenkt!',
  'f.P:kind_zul.label': 'Kinderzulage je Kind',
  'f.P:kind_zul.hint': '1 € je eingezahltem €, bis 300 € je Kind.',
  'f.P:av_max.label': 'Höchstbetrag Einzahlung p.a.',
  'f.P:av_max.hint': 'BMF-FAQ zur Reform der geförderten privaten Altersvorsorge, Stand 05.05.2026. Alles darüber läuft in eine Nebenschiene, die wie ein ganz normales Privatdepot besteuert wird — auch kein Beinbruch.',
  'f.P:av_sa_max.label': 'Höchstbetrag Sonderausgabenabzug § 10a',
  'f.P:av_sa_max.hint': 'MODELLANNAHME, Vertrauensgrad ca. 70 %. Eigenbeitrag bis 1.800 € plus Zulagen. Diese eine Zahl entscheidet, ob ein Kind Ihr AV-Depot noch attraktiver macht oder nicht.',
  'f.P:ertragsq.label': 'Ertragsanteil (Alter 67)',
  'f.P:ertragsq.hint': '§ 22 Nr. 1 S. 3 Buchst. a Doppelbuchst. bb EStG, für nicht geförderte Rententeile.',
  'f.P:halb.label': 'steuerpflichtiger Anteil des Unterschiedsbetrags',
  'f.P:halb.hint': '§ 20 Abs. 1 Nr. 6 S. 2 EStG analog (Vertrag über 12 Jahre, Auszahlung nach 62): nur der halbe Unterschiedsbetrag ist steuerpflichtig — ein echter Bonus! Vertrauensgrad ca. 80 %.',

  /* ---------------- Rahmen, Fenstertitel, Kopf und Fuß ---------------- */
  'app.title': 'Altersvorsorge-Vergleich',
  'app.meta': 'Jetzt in nur 30 Sekunden schwarz auf weiß: bAV, Altersvorsorgedepot oder privates ETF-Depot — welche der drei Varianten holt bei exakt gleichem Nettoaufwand das Maximum für Sie heraus? Rechtsstand 2026, topaktuell und komplett kostenlos!',
  'hdr.title': 'Altersvorsorge‑Vergleich',
  'hdr.sub': 'Betriebliche Altersvorsorge, Altersvorsorgedepot und privates ETF‑Depot &mdash; endlich einmal <b>schonungslos fair</b> gegenübergestellt: gleicher Nettoaufwand, derselbe ETF, null Schönrechnerei. Rechtsstand 2026. Entdecken Sie in Sekunden, wo Ihr Geld am härtesten für Sie arbeitet!',
  'win.header': 'Altersvorsorge-Vergleich',
  'win.result': 'Ihr persönliches Ergebnis',
  'win.input': 'Ihre Angaben — schnell gemacht',
  'win.chart': 'Ihre Zahlen auf einen Blick',
  'win.extra': 'Für Profis: das Feintuning',
  'win.calc': 'Volle Transparenz: so rechnen wir',
  'win.share': 'Sichern & teilen',
  'win.min': 'Minimieren',
  'win.restore': 'Wiederherstellen',
  'win.n': function(p){ return 'Fenster ' + p.n; },
  'input.sub': 'Jede Änderung rechnen wir <b>sofort und in Echtzeit</b> komplett neu für Sie durch — kein Klick auf „Berechnen", kein Warten! Und falls Sie irgendwo unsicher sind: das <span class="qm" style="cursor:default">?</span> erklärt Ihnen jedes einzelne Feld in Sekunden.',
  'extra.sub': 'Gute Nachricht: Hier ist bereits alles optimal für Sie voreingestellt — Sie müssen nichts tun! Anfassen lohnt sich nur, wenn es bei Ihnen wirklich anders läuft. Dann aber richtig.',
  'calc.sub': 'Nichts zu verbergen: Für alle, die es ganz genau wissen wollen, legen wir hier jede einzelne Formel offen. Bitte prüfen Sie uns nach!',
  'share.sub': 'Ihre Daten gehören <b>ausschließlich Ihnen</b> und verlassen diesen Browser nie (<kbd>localStorage</kbd>). Kein Server, kein Tracking, keine Weitergabe, keine Ausrede — großes Ehrenwort!',
  'ui.share': 'Ergebnis-Link jetzt kopieren',
  'ui.export': 'Ergebnis dauerhaft sichern',
  'ui.import': 'Gespeichertes Ergebnis laden',
  'ui.reset': 'Frisch von vorn beginnen',
  'ui.pin.set': 'Diesen Stand als Bestwert merken',
  'ui.pin.clear': 'Bestwert wieder freigeben',
  'ui.lang': 'Sprache',
  'ui.lang.aria': 'Sprache wählen',
  'ui.lang.partial': 'nur teilweise übersetzt',
  'ui.lang.partialNote': 'Diese Sprache ist <b>teilweise übersetzt</b>: Oberfläche, Feldnamen, Tabellenköpfe und Diagrammlegenden sind startklar. Die langen Erläuterungen — die <span class="qm" style="cursor:default">?</span>-Texte, das Fazit und der Rechenweg — zeigen wir noch auf Deutsch. Die Gesetzestexte (BetrAVG, EStG, SGB V) bleiben ohnehin überall deutsch, anders gibt es sie amtlich nicht.',
  'sb.up': 'Rauf zu Ihrem Ergebnis',
  'footer.1': '<b>Wichtig und ehrlich: keine Steuer- oder Anlageberatung.</b> So gut unser Rechner ist — das persönliche Gespräch ersetzt er nicht, und das wollen wir auch gar nicht behaupten. Die Rechtslage 2026 zur reformierten privaten Altersvorsorge ist an einigen Stellen noch offen; wir verstecken das nicht, sondern legen die unsichersten Annahmen unter „Rechenweg → Belastbarkeit der Annahmen" komplett offen — und Sie dürfen jede einzelne davon selbst nachjustieren. So viel Transparenz bekommen Sie sonst nirgends!',
  'footer.2': 'Unser Rechenkern? Eins zu eins aus dem geprüften Excel-Modell <span class="pill">bAV-DYNO_vs_Altersvorsorgedepot_vs_ETF.xlsx</span> übernommen und an drei Testfällen bis auf Maschinengenauigkeit bestätigt — größte Abweichung 1,3·10<sup>&minus;14</sup>. Das ist der vierzehnte Nachkommastellenbereich. Genauer geht es auf diesem Planeten schlicht nicht!',

  /* ---------------- Die drei Optionen ---------------- */
  'opt.bav.name': 'bAV (Entgeltumwandlung)',
  'opt.bav.short': 'bAV',
  'opt.bav.nom': 'Ihre betriebliche Altersvorsorge',
  'opt.bav.satz': 'Ihre betriebliche Altersvorsorge',
  'opt.bav.gen': 'der bAV',
  'opt.av.name': 'Altersvorsorgedepot',
  'opt.av.short': 'AV-Depot',
  'opt.av.nom': 'Ihr Altersvorsorgedepot',
  'opt.av.satz': 'Ihr Altersvorsorgedepot',
  'opt.av.gen': 'des Altersvorsorgedepots',
  'opt.priv.name': 'privates ETF-Depot',
  'opt.priv.short': 'privat',
  'opt.priv.nom': 'Ihr privates ETF-Depot',
  'opt.priv.satz': 'Ihr privates ETF-Depot',
  'opt.priv.gen': 'des privaten ETF-Depots',

  /* ---------------- Kennzahlen ---------------- */
  'metric.monat.label': 'Monatliche Leistung',
  'metric.monat.unit': '€/Monat',
  'metric.monat.desc': 'Ihre konstante Monatszahlung über die gesamte Rentenzeit, in heutiger Kaufkraft. Die Zahl, die Sie am direktesten mit Ihrem heutigen Netto vergleichen können.',
  'metric.ertrag.label': 'Netto-Ertrag (Barwert)',
  'metric.ertrag.unit': '€',
  'metric.ertrag.desc': 'Was für Sie unterm Strich übrig bleibt, in heutiger Kaufkraft: Barwert aller Netto-Leistungen minus Barwert Ihres Aufwands.',
  'metric.irr.label': 'Interne Rendite',
  'metric.irr.unit': '% p.a.',
  'metric.irr.desc': 'Ihre Rendite auf den tatsächlich eingesetzten Netto-Betrag, nominal. Direkt vergleichbar mit der ETF-Bruttorendite — die Differenz zeigt, was Förderung und Abgaben Ihnen bringen oder kosten.',
  'metric.kapital.label': 'Kapital bei Rentenbeginn',
  'metric.kapital.unit': '€',
  'metric.kapital.desc': 'Vor Steuern und Sozialabgaben, nominal. Sieht oft beeindruckend aus, ist aber NICHT die entscheidende Zahl: die bAV liegt hier häufig vorn, verliert dann aber bei der Auszahlung wieder.',
  'metric.pa': ' p.a.',
  'metric.pp': ' Prozentpunkte',
  'metric.short.monat': 'Monat',
  'metric.short.ertrag': 'Ertrag',
  'metric.short.irr': 'IRR',
  'metric.short.kapital': 'Kapital',

  /* ---------------- Eingabefelder, Rahmenwerk ---------------- */
  'unit.pct': '%',
  'unit.eur': '€',
  'unit.eurm': '€/Monat',
  'ui.hintFor': function(p){ return 'Erklärung zu: ' + p.label; },
  'ui.couple': '<span>⇅</span> Zwei Blickwinkel, ein Wert — clever gekoppelt! Sie ändern eine Zahl, die andere zieht blitzschnell nach. Bequemer geht es nicht.',
  'ui.cnt.legal': function(p){ return p.n + ' Rechengrößen'; },
  'ui.cnt.fields': function(p){ return p.n + ' Felder'; },
  'ui.legalNote': 'Alles gesetzlich verbrieft, mit Quelle zum Nachschlagen. Ehrlich gesagt: Hier müssen Sie nichts anpassen — außer der Gesetzgeber überrascht uns oder Ihre Kasse tanzt aus der Reihe.',
  'group.bav': 'Zuschuss und Auszahlungsformen im Detail',
  'group.person': 'Zeitachse, Ausstieg, Teilzeit',
  'group.steuer': 'Steuer, Veranlagung, Kinder',
  'group.markt': 'Kosten und Inflation',
  'group.ruhe': 'Ruhestand',
  'group.p_sv': 'Rechengrößen: Sozialversicherung 2026',
  'group.p_est': 'Rechengrößen: Einkommensteuertarif 2026 (§ 32a EStG)',
  'group.p_kap': 'Rechengrößen: Kapitalertrag- und Investmentsteuer',
  'group.p_bav': 'Rechengrößen: betriebliche und geförderte private Vorsorge',

  /* ---------------- Live-Notizen an den Feldern ---------------- */
  'n.beitrag.ueber8': function(p, f){
    return 'Über 8 % der Beitragsbemessungsgrenze RV (' + f.eur(p.v8) + ' im Jahr) — dieser Teil bringt '
      + 'leider keinen Steuer- oder SV-Bonus mehr, er landet im Versicherungsmantel und zieht dort nur '
      + 'die KV-Beitragspflicht nach sich.'; },
  'n.beitrag.ueber4': function(p, f){
    return 'Über 4 % der Beitragsbemessungsgrenze RV (' + f.eur(p.v4) + ' im Jahr). Bis hierhin haben Sie '
      + 'einen festen Rechtsanspruch nach § 1a BetrAVG — darüber braucht’s einfach noch das Okay Ihres '
      + 'Arbeitgebers.'; },
  'n.agzus.gedeckelt': function(p, f){
    return 'Gedeckelt bei ' + f.pct(p.quote, 1) + '. Ihr Arbeitgeber spart real ' + f.eur2(p.ersparnis)
      + ' im Jahr — mehr geht hier nicht, solange „spitz gerechnet" eingestellt bleibt.'; },
  'n.agz_fix.fliesstNicht': function(p, f){
    return 'Fließt leider noch nicht: Ihr Monatsbeitrag von ' + f.eur2(p.beitrag) + ' liegt unter der '
      + 'Mindestschwelle von ' + f.eur2(p.schwelle) + ' (siehe Feld unter „Noch mehr Feintuning").'; },
  'n.agz_fix.ueber4': function(p, f){
    return 'Der feste Zuschuss allein knackt schon den 4-%-Topf (' + f.eur(p.topf)
      + ' im Jahr) um ' + f.eur(p.ueber) + '. Dieser Teil wäre bei Ihnen eigentlich beitragspflichtig — '
      + 'das rechnen wir hier bewusst nicht gegen, macht die bAV also in diesem Punkt sogar etwas '
      + 'besser, als sie streng genommen ist.'; },
  'n.agz_fix.verdraengung': function(p, f){
    return 'Belegt zuerst den 4-%-Topf: von Ihrem eigenen Beitrag bleiben noch ' + f.eur(p.rest)
      + ' sozialabgabenfrei übrig. Ihr Nettoaufwand steigt dadurch zwar etwas — der Zuschuss bleibt '
      + 'trotzdem geschenktes Geld, er verschiebt nur, wo Ihre eigene Förderung ansetzt.'; },
  'n.agz_fix.ueber8': 'Zusammen mit Ihrem Eigenbeitrag geht’s über 8 % der BBG-RV — der Überhang bringt leider weder Steuer- noch Beitragsvorteil.',
  'n.agz_fix_min.knapp': function(p, f){
    return 'Sie liegen nur ' + f.eur2(p.d) + ' über der Schwelle — knapp geschafft! Darunter fiele der '
      + 'feste Zuschuss komplett weg: an genau dieser Stelle ist die Grenzrendite Ihres letzten '
      + 'Beitragseuros besonders hoch.'; },
  'n.agz_fix_min.verfehlt': function(p, f){
    return 'Schwelle noch nicht erreicht — nur ' + f.eur2(p.fehlt) + ' mehr im Monat lösen bereits '
      + f.eur2(p.zuschuss) + ' Zuschuss aus. Das ist fast immer der lohnendste Euro im ganzen Modell — '
      + 'unbedingt mitnehmen!'; },
  'n.teilkap.kosten': function(p, f){
    return 'Kostet ' + (p.gewinn ? 'nichts — im Gegenteil, Sie sparen sogar: ' + p.dtxt : p.dtxt + ' ' + p.unit)
      + ' gegenüber der reinen Rente. Grund: der Einmalbetrag wird im ersten Jahr voll versteuert '
      + '(Grenzbelastung dort ' + f.pct(p.grenz, 1) + '), verzinst sich danach aber nur noch mit dem '
      + 'Abgeltungsteuersatz statt mit der vollen Produktrendite.'; },
  'n.av_auszform.horizont': function(p, f){
    return 'Über den Vergleichshorizont hinaus zahlt diese Rente noch ' + f.eur(p.rest)
      + ' weiter — das zählen wir hier fair NICHT mit. Ein fester Horizont unterschätzt jede lebenslange '
      + 'Rente systematisch: wer alt wird, macht hier das beste Geschäft!'; },

  /* ---------------- Ergebniskarten ---------------- */
  'card.lead': 'Ihr Sieger',
  'card.unchanged': 'unverändert',
  'base.pinned': 'Δ gegenüber Ihrem gemerkten Vergleichswert',
  'base.delta': function(p){ return 'Δ ' + p.desc; },
  'base.none': 'Neugierig? Bewegen Sie einfach irgendeinen Regler — die Auswirkung erscheint hier auf der Stelle als Δ. Probieren Sie es aus, kaputtmachen können Sie nichts!',
  'base.desc.prev': 'vorheriger Stand',
  'base.desc.pinned': 'gemerkter Vergleichswert',
  'base.desc.change': function(p){ return 'vor der Änderung von „' + p.label + '"'; },
  'rank.swap': function(p, f){
    return '<b>Die Kennzahlen sind sich hier uneinig — das kann passieren!</b> Nach Monatsleistung liegt '
      + p.a + ' vor ' + p.b + ', nach Barwert des Netto-Ertrags ist es umgekehrt. '
      + 'Grund: der Barwert zinst mit der Inflation ab (' + f.pct(p.infl, 2) + '), die Monatsleistung '
      + 'verrentet mit dem Wiederanlagezins nach Steuern (' + f.pct(p.wiederanl, 2) + '). Je weiter beide '
      + 'auseinanderliegen, desto attraktiver eine frühe Kapitalauszahlung. Welche Kennzahl für Sie zählt, '
      + 'hängt einfach davon ab, ob Sie anlegen oder ausgeben würden — beim „Ausgeben"-Fall setzen Sie den '
      + 'Wert bei „Kosten privates ETF-Depot" so, dass der Wiederanlagezins gegen null geht.'; },
  'warn.unreachable': 'Ambitioniert! Dieser Nettoaufwand übersteigt allerdings Ihr Gehalt — so viel geht beim besten Willen nicht. Kein Problem: Wir haben bereits automatisch das Maximum für Sie eingestellt, damit Sie nahtlos weitermachen können.',
  'warn.inactive': 'Kleiner Stolperstein: Nach Ihren Angaben sind Sie im ersten Jahr gar nicht mehr berufstätig — ohne Beschäftigung keine Entgeltumwandlung und damit leider auch kein Nettoaufwand, den wir für Sie zurückrechnen könnten. Ein kurzer Blick auf „Ausstieg aus dem Job" und „Ihr Alter heute" genügt, und schon läuft alles wieder!',

  /* ---------------- Klartext-Fazit ---------------- */
  'verdict.lead': function(p){
    return '<b>' + p.satz + '</b> macht bei Ihnen das Rennen mit ' + p.wert + ' — ' + p.d2 + ' mehr als ' + p.nom2
      + (p.nom3 ? ' und ' + p.d3 + ' mehr als ' + p.nom3 : '') + '!'; },
  'verdict.pp': function(p){ return p.v + ' Prozentpunkte'; },
  'verdict.top': function(p, f){
    return ' Der größte Einzelposten im Vorsprung ' + p.gen + ' gegenüber dem privaten ETF-Depot ist '
      + '„' + p.label + '" — und zwar ' + (p.pro ? 'zu Ihren Gunsten' : 'zu Ihren Lasten') + ' ' + p.gen
      + ', mit ' + f.eur(p.wert) + ' Barwert. Die komplette Aufschlüsselung finden Sie unter „Werttreiber".'; },
  'verdict.band': function(p, f){
    return '<span class="band">Wie sicher ist das? Bei einer Bruttorendite von ' + f.pct(p.lo, 1)
      + ' statt ' + f.pct(p.mid, 1) + ' wären es ' + p.vlo + ', bei ' + f.pct(p.hi, 1) + ' sogar ' + p.vhi
      + ' — die Reihenfolge '
      + (p.stabil ? 'bleibt in dieser Spanne stabil, Sie können sich also darauf verlassen.'
                  : '<b>kann sich in dieser Spanne umdrehen</b> — das Ergebnis ist hier also mit Vorsicht zu genießen.')
      + '</span>'; },
  'demo.text': '<b>Noch sehen Sie nur unser Beispiel!</b> 40 Jahre alt, 75.000 € Jahresbrutto, 300 € Entgeltumwandlung im Monat, gesetzlich krankenversichert. Ihr eigenes Ergebnis ist nur wenige Sekunden entfernt: einfach unter „Ihre Angaben" Ihre Zahlen eintippen — dieser Hinweis verabschiedet sich dann ganz von allein.',

  /* ---------------- Mitlaufende Leiste ---------------- */
  'sb.cap': function(p){ return p.label + ' · ' + p.unit + (p.kaufkraft ? ', heutige Kaufkraft' : ''); },
  'sb.aria': function(p){ return 'Ergebnis: ' + p.label; },

  /* ---------------- Diagramme ---------------- */
  'tab.sens': 'Sensitivität',
  'tab.wf': 'Werttreiber',
  'tab.kap': 'Kapitalverlauf',
  'tab.zer': 'Monatszerlegung',
  'chart.error': function(p){ return 'Diagramm gerade nicht darstellbar: ' + p.msg; },
  'sens.readout': 'Gestrichelt: genau Ihr aktueller Wert. Die Ringe markieren die Schnittpunkte mit dem Privatdepot — dort kippt das Ergebnis! Einfach über die Kurve fahren oder tippen und jede Zahl live ablesen.',
  'sens.legendY': function(p){ return 'y: ' + p.label + ' (' + p.unit + ')'; },
  'sens.note': function(p){
    return 'Der zuletzt bewegte Regler wird über seine ganze Spanne für Sie durchgerechnet — ' + p.n
      + ' komplette Modellläufe! Aktuell dran: „' + p.label + '". '
      + 'Bewegen Sie einfach einen anderen Regler, die Kurve zieht sofort mit.'; },
  'sens.noteNetto': function(p, f){
    return ' Kleiner Hinweis: dieser Regler verändert auch Ihren Nettoaufwand (hier ' + f.eur2(p.lo) + ' bis '
      + f.eur2(p.hi) + ' im Monat) und damit den Betrag, der in allen drei Optionen für Sie arbeitet. '
      + 'Deshalb sind die drei Kurven bei jedem einzelnen x fair vergleichbar, das Niveau zwischen '
      + 'verschiedenen x aber nicht direkt. Die Knicke liegen an den Beitragsbemessungsgrenzen ('
      + f.eur(p.bbgkv) + ' für KV/PV, ' + f.eur(p.bbgrv) + ' für RV/AV) und an den Tarifeckwerten.'; },
  'wf.up': 'hebt Ihren Ertrag',
  'wf.down': 'senkt Ihren Ertrag',
  'wf.legend': 'Barwert des Netto-Ertrags, heutige Kaufkraft',
  'wf.check': function(p, f){
    return 'Gegenprobe: ' + f.eur(p.start) + ' + ' + f.eur(p.summe) + ' = ' + f.eur(p.start + p.summe)
      + ' (Soll ' + f.eur(p.ende) + ', Abweichung ' + f.nf2(p.start + p.summe - p.ende) + ' €).'; },
  'wf.note': 'Diese Zerlegung geht rechnerisch exakt auf — sie hängt aber <b>von der Reihenfolge ab</b>: die Effekte lassen sich nicht sauber trennen, jeder Balken zeigt seinen Beitrag <i>unter der Annahme</i> der darüberliegenden. Tippen Sie einen Balken an für die Herleitung.',
  'wf.barinfo': function(p){ return p.label + ': ' + p.note; },
  'wfb.vp.label': 'Wegfall der Vorabpauschale',
  'wfb.vp.note': 'Weder bAV noch Altersvorsorgedepot kennen die Vorabpauschale (§ 18 InvStG) — ein echter Pluspunkt! Gemessen als Privatdepot ohne minus mit Vorabpauschale. Der Balken kann auch mal negativ sein: die Vorabpauschale wird großteils vom Sparer-Pauschbetrag aufgefangen, zählt aber voll für die Kostenbasis — dann ist sie fürs Privatdepot unterm Strich sogar von Vorteil.',
  'wfb.zul.label': 'Zulagen und Sonderausgabenabzug',
  'wfb.zul.note': 'Geschenktes Geld nach dem neuen Zulagenmodell plus der Abzug nach § 10a EStG. Gemessen, indem wir beide Förderwege probeweise abschalten.',
  'wfb.arch.label': 'Besteuerungsarchitektur (Rest)',
  'wfb.arch.note': 'Tarifarbitrage t₀ − t₁ und alles Übrige. Als Restgröße bestimmt, damit die Rechnung exakt aufgeht.',
  'wfb.agz.label': 'Arbeitgeberzuschuss',
  'wfb.agz.note': 'Geschenktes Geld — der einzige echte strukturelle Vorteil der bAV, der nicht aus dem Steuerrecht kommt. Gemessen durch Abschalten des Zuschusses.',
  'wfb.tarif.label': 'Tarifarbitrage und Rest',
  'wfb.tarif.note': 'Grenzsteuersatz beim Einzahlen minus beim Auszahlen, plus alles Übrige. Als Restgröße bestimmt, damit die Rechnung exakt aufgeht. Der reine Steueraufschub allein bringt übrigens nichts: (1−t)(1+r)ⁿ = (1+r)ⁿ(1−t), die Reihenfolge der Multiplikation ist egal.',
  'wfb.kvpv.label': 'KV/PV auf Versorgungsbezüge',
  'wfb.kvpv.note': '§§ 229, 250 SGB V: den vollen Beitragssatz trägt der Rentner allein — hier lohnt sich ein zweiter Blick. Gemessen als Differenz zur Einstellung „privat versichert im Ruhestand".',
  'wfb.ep.label': 'Verlust an Entgeltpunkten',
  'wfb.ep.note': 'Die Entgeltumwandlung mindert das beitragspflichtige Entgelt und damit auch die gesetzliche Rente etwas. Wir rechnen das fair netto gegen.',
  'kap.rentbeg': 'Rentenbeginn',
  'kap.swap': 'Kapital → Rentenanspruch',
  'kap.legend': 'durchgezogen: gesamt &nbsp;·&nbsp; gestrichelt: frei verfügbar',
  'kap.readout': function(p, f){
    return 'Am Rentenbeginn gebunden: bAV ' + f.eur(p.bavGeb) + ' von ' + f.eur(p.bav)
      + ' · AV-Depot ' + f.eur(p.avGeb) + ' von ' + f.eur(p.av)
      + ' · privates Depot ' + f.eur(0) + ' von ' + f.eur(p.priv)
      + '.  Die äquivalente Monatsleistung wird verbraucht, deshalb landet jede Option punktgenau bei null.'; },
  'kap.note': function(p, f){
    return 'Kontostand im Produkt, in der Rentenphase zuzüglich der netto wieder angelegten Auszahlungen '
      + '(' + f.pct(p.wiederanl, 2) + ' nach Steuern) und abzüglich der äquivalenten Monatsleistung, die '
      + 'tatsächlich verbraucht wird. Deshalb läuft jede Option zielgenau auf null. Weil der Verbrauch nur '
      + 'aus der Wiederanlage kommt und das Produktkapital im Produkt bleibt, wo es mit voller '
      + 'Produktrendite vor Steuern weiterwächst, verlaufen die Kurven trotzdem nicht parallel. '
      + '— Die gestrichelte Linie zeigt, was Sie jederzeit frei zur Verfügung haben: die bAV ist bis zum '
      + 'Rentenbeginn komplett gebunden (§ 1b BetrAVG sichert nur die Unverfallbarkeit, nicht die '
      + 'Verfügbarkeit), beim Altersvorsorgedepot ist eine Entnahme vor 65 förderschädlich und frei nur '
      + 'der Überschuss über den Jahreshöchstbetrag, das Privatdepot dagegen ist jederzeit frei verfügbar '
      + '— ein klarer Pluspunkt für alle, die flexibel bleiben wollen. '
      + (p.verrentet ? 'Da Sie das Depot verrenten, geht auch hier das Kapital an den Anbieter — die '
          + 'Kurve fällt entsprechend, obwohl dabei nichts verloren geht. ' : '')
      + 'Und noch einmal ganz klar gesagt: die Kurven zeigen nur das Vermögen aus DIESER einen '
      + 'Entscheidung, nicht Ihr gesamtes Vermögen.'; },
  'zer.netto': 'netto',
  'zer.tax': 'Steuer',
  'zer.kv': 'KV/PV',
  'zer.pension': 'Rente',
  'zer.legend': '<span><i style="background:#808080"></i>Steuer</span><span><i style="background:#800000"></i>KV/PV</span><span><i style="background:#800080"></i>entgangene gesetzliche Rente</span><span style="margin-left:auto">farbiger Sockel = das, was Ihnen bleibt</span>',
  'zer.readout': 'Alles als konstante Monatsleistung in heutiger Kaufkraft dargestellt. Weil die Verrentung linear läuft, addieren sich die Blöcke exakt.',
  'zer.note': function(p, f){
    return 'Der Zeitraum ist für alle drei Optionen identisch, ganz fair. Eine Kapitalauszahlung wird nicht '
      + 'einfach durch zwölf geteilt, sondern mit dem Wiederanlagezins nach Steuern (' + f.pct(p.wiederanl, 2)
      + ' p.a.) auf denselben Zeitraum verrentet. Wer das Kapital lieber verkonsumiert statt anzulegen, '
      + 'steht am Ende schlechter da.'; },

  /* ---------------- So rechnen wir ---------------- */
  'det.h.bav': 'bAV',
  'det.h.av': 'AV-Depot',
  'det.h.priv': 'privat',
  'det.h.kennzahl': 'Kennzahl',
  'det.h.wert': 'Wert',
  'det.erg.netto': 'Summe eingezahlt aus dem Netto (nominal)',
  'det.erg.fremd': 'Geschenktes Geld (Zuschuss bzw. Zulagen)',
  'det.erg.kapital': 'Kapital bei Auszahlungsbeginn',
  'det.erg.brutto': 'Summe Bruttoauszahlungen',
  'det.erg.steuer': 'davon Einkommen-/Abgeltungsteuer',
  'det.erg.kvpv': 'davon Kranken- und Pflegeversicherung',
  'det.erg.rentenverlust': 'Verlust an gesetzlicher Rente (kumuliert)',
  'det.erg.nettoausz': 'Summe Netto-Auszahlungen (nominal)',
  'det.erg.bwausz': 'Barwert der Netto-Auszahlungen',
  'det.erg.bwaufw': 'Barwert des Nettoaufwands',
  'det.erg.ertrag': 'Barwert des Netto-Ertrags',
  'det.erg.verhaeltnis': 'Verhältnis Ertrag zu Aufwand',
  'det.erg.irr': 'Interne Rendite (nominal)',
  'det.erg.vorsprung': 'Ihr Vorsprung gegenüber dem Privatdepot',
  'det.mon.brutto': 'Bruttoleistung pro Monat',
  'det.mon.steuer': 'abzüglich Einkommen-/Abgeltungsteuer',
  'det.mon.kvpv': 'abzüglich Kranken- und Pflegeversicherung',
  'det.mon.ep': 'abzüglich Verlust an gesetzlicher Rente',
  'det.mon.netto': 'IHR NETTO PRO MONAT (heutige Kaufkraft)',
  'det.diag.beitrag': 'Bruttobeitrag bAV pro Monat',
  'det.diag.aufwand': 'Nettoaufwand pro Monat (erstes Jahr)',
  'det.diag.grenzsteuer': 'Grenzsteuersatz in der Ansparphase (erstes Jahr)',
  'det.diag.ersparnis': 'Ersparnisquote gesamt (Steuer + SV), erstes Jahr',
  'det.diag.svAG': 'tatsächliche SV-Ersparnis des Arbeitgebers',
  'det.diag.svAN': 'tatsächliche SV-Ersparnis des Arbeitnehmers',
  'det.diag.ngef': 'Anteil der bAV-Beiträge ohne Förderung (erstes Jahr)',
  'det.diag.aussch': 'Ausschöpfung Ihres Rechtsanspruchs (4 % BBG-RV)',
  'det.diag.agzVar': 'davon Arbeitgeberzuschuss: prozentual (erstes Jahr)',
  'det.diag.agzFix': 'davon Arbeitgeberzuschuss: fester Betrag (erstes Jahr)',
  'det.diag.agzFixUeber4': 'fester Zuschuss über dem 4-%-Topf (nicht als Beitragslast erfasst)',
  'det.diag.vbMonat': 'Versorgungsbezug pro Monat zu Auszahlungsbeginn',
  'det.diag.freibetrag': 'Freibetrag Versorgungsbezüge im selben Jahr',
  'det.diag.vbQuote': 'Verhältnis Versorgungsbezug zu Freibetrag',
  'det.diag.kapFreiKapital': 'beitragsfrei mögliches Kapital (Kapitalauszahlung)',
  'det.diag.kapFreiRente': 'beitragsfrei mögliches Kapital (lebenslange Rente)',
  'det.diag.memoRest': 'BONUS-MEMO: bAV-Rentenzahlungen nach dem Horizont',
  'det.diag.memoRestAv': 'BONUS-MEMO: Depotrente nach dem Horizont',
  'det.diag.wiederanl': 'Wiederanlagezins nach Steuern',
  'det.diag.kapstEff': 'effektive Abgeltungsteuer inkl. Soli/KiSt',
  'det.diag.bestAnteil': 'Besteuerungsanteil der gesetzlichen Rente',
  'det.warn.lead': 'Kleiner Hinweis: Sie liegen hier außerhalb des besonders begünstigten Bereichs: ',
  'det.warn.aussch': 'Über 100 % Ausschöpfung gibt es leider keinen Rechtsanspruch auf Entgeltumwandlung mehr. ',
  'det.warn.ngef': 'Ein spürbarer Teil der Beiträge bringt weder Steuer- noch SV-Vorteil — dieser Teil landet im Versicherungsmantel, ohne dass dem eine Gegenleistung außer der KV-Beitragspflicht gegenübersteht. ',
  'det.warn.vb': 'Der Versorgungsbezug übersteigt den Freibetrag hier deutlich; die Schutzwirkung des festen Freibetrags nimmt entsprechend mit 1/Kapital ab. ',
  'det.anspar.h.jahr': 'Jahr',
  'det.anspar.h.brutto': 'Brutto',
  'det.anspar.h.beitrag': 'bAV-Beitrag',
  'det.anspar.h.agzVar': 'AG-Zuschuss %',
  'det.anspar.h.agzFix': 'AG fest',
  'det.anspar.h.sv': 'SV-Erspar.',
  'det.anspar.h.st': 'Steuer-Erspar.',
  'det.anspar.h.netto': 'Nettoaufwand',
  'det.anspar.h.zul': 'Zulagen',
  'det.anspar.h.kbav': 'Kapital bAV',
  'det.anspar.h.kav': 'Kapital AV',
  'det.anspar.h.kpriv': 'Kapital privat',
  'det.row.year': function(p){ return p.jahr + ' (Alter ' + p.alter + ')'; },
  'det.ausz.h.jahr': 'Jahr',
  'det.ausz.h.bavBr': 'bAV brutto',
  'det.ausz.h.kvpv': 'KV/PV',
  'det.ausz.h.steuer': 'Steuer',
  'det.ausz.h.mind': 'Rentenminderung',
  'det.ausz.h.bavNet': 'bAV netto',
  'det.ausz.h.avBr': 'AV brutto',
  'det.ausz.h.avNet': 'AV netto',
  'det.ausz.h.privBr': 'privat brutto',
  'det.ausz.h.privNet': 'privat netto',
  'det.ann.intro': 'Die Reihenfolge hängt an Rechtsfragen, die 2026 noch nicht komplett geklärt sind. Die Zahlen in Klammern sind unsere ehrliche Einschätzung des Vertrauensgrads.',
  'det.ann.h.annahme': 'Annahme',
  'det.ann.h.vertrauen': 'Vertrauen',
  'det.ann.h.anmerkung': 'Anmerkung',
  'det.ann.r1.a': 'Rechengrößen SV 2026, § 32a-Tarif 2026',
  'det.ann.r1.c': 'SVBezGrV 2026, Steuerfortentwicklungsgesetz',
  'det.ann.r2.a': 'KV/PV-Pflicht auf Versorgungsbezüge',
  'det.ann.r2.c': '§§ 229, 250 SGB V',
  'det.ann.r3.a': 'Freibetrag § 226 Abs. 2 S. 2 SGB V (KV)',
  'det.ann.r3.c': 'unstreitig',
  'det.ann.r4.a': 'Freigrenze statt Freibetrag in der PV',
  'det.ann.r4.c': 'die häufigste Fehlerquelle in Ratgebertexten — hier machen wir es richtig',
  'det.ann.r5.a': 'Beitragsfreiheit der AV-Depot-Auszahlung',
  'det.ann.r5.c': 'keine Versorgungsbezüge',
  'det.ann.r6.a': 'halber Unterschiedsbetrag für nicht geförderte Schichten',
  'det.ann.r6.c': '§ 22 Nr. 5 S. 2 Buchst. b i.V.m. § 20 Abs. 1 Nr. 6 S. 2 EStG',
  'det.ann.r7.a': 'Zuschuss nur bis zur tatsächlichen AG-Ersparnis',
  'det.ann.r7.c': 'Gegenauffassung liest 15 % als reine Pauschale',
  'det.ann.r8.a': 'Sonderausgaben-Höchstbetrag 2.340 €',
  'det.ann.r8.c': 'MODELLANNAHME. Entscheidet, ob ein Kind den Wert des AV-Depots hebt oder senkt',
  'det.ann.r9.a': 'KVdR-Pflichtversicherung im Ruhestand unterstellt',
  'det.ann.r9.c': 'freiwillig Versicherte nicht gesondert geprüft',
  'det.ann.notmodelled': '<b>Nicht mit eingerechnet:</b> Abschläge bei vorzeitigem Rentenbezug, Wirkung der Entgeltumwandlung auf Kranken-, Arbeitslosen- und Elterngeld, Hinterbliebenenversorgung, Insolvenzsicherung (PSVaG), Portabilität bei Arbeitgeberwechsel, Kinderabschläge in der PV, Günstigerprüfung nach § 32d Abs. 6 EStG, Pfändungs- und Grundsicherungsschutz, Langlebigkeitsrisiko jenseits des Horizonts — der guten Übersicht halber.',
  'det.prinzip': '<p>Ein Vergleich der reinen <i>Bruttobeiträge</i> wäre unfair: Entgeltumwandlung kommt aus dem Brutto, privates Sparen aus dem Netto. Deshalb gleichen wir den <b>Nettoaufwand</b> an — so haben alle die gleichen Startchancen:</p>'
    + '<p style="font-family:var(--mono);font-size:.82rem;background:var(--chip);padding:9px 11px;border-radius:9px">Nettoaufwand = Bruttobeitrag − Lohnsteuerersparnis − ersparter AN-Anteil zur Sozialversicherung</p>'
    + '<p>Genau dieser Betrag wird in allen drei Optionen für Sie angelegt. Was bleibt, ist ein fairer Vergleich der <i>Förderarchitekturen</i> — nicht der Einzahlungshöhen.</p>'
    + '<p><b>Steueraufschub allein bringt übrigens gar nichts:</b> (1−t)·(1+r)ⁿ = (1+r)ⁿ·(1−t). Die Reihenfolge der Multiplikation ist egal. Was wirklich zählt, sind vier Werttreiber:</p>'
    + '<ol style="padding-left:1.2em;margin:.3em 0"><li>Tarifarbitrage t₀ − t₁</li>'
    + '<li>Geschenktes Geld — Arbeitgeberzuschuss bzw. Zulagen</li>'
    + '<li>steuerfreie Thesaurierung — keine Vorabpauschale</li>'
    + '<li>neue Abgaben, die nur eine Option treffen — KV/PV auf Versorgungsbezüge</li></ol>'
    + '<p>Punkt 4 ist der große Nachteil der bAV, Punkt 2 dafür ihr echter Trumpf. Die Rendite der bAV <b>sinkt streng mit der Beitragshöhe</b>, weil der Freibetrag ein fester Betrag ist und seine Schutzwirkung mit 1/K abnimmt — ein „optimaler" Beitrag gibt es dabei nicht, mehr ist hier nicht automatisch besser.</p>'
    + '<p>Bei vorgegebenem Nettoaufwand rechnen wir den Bruttobeitrag ganz genau zurück: N(B) wächst stetig und streng monoton (dN/dB = 1 − Grenz-SV-Satz − Grenzsteuersatz > 0), wegen der Knicke bei 4 % und 8 % der BBG-RV lässt sich das aber nicht in einer Formel lösen — deshalb verfeinern wir 34-mal in Folge, bis wir unter einem Zehntelcent Genauigkeit liegen.</p>',
  'det.t.prinzip': 'So vergleichen wir fair',
  'det.t.erg': 'Ihr Ergebnis im Detail',
  'det.s.erg': 'Alle drei Optionen kosten Sie in der Ansparphase exakt denselben Betrag aus dem Netto — ganz fair.',
  'det.t.mon': 'Monatliche Leistung, aufgeschlüsselt',
  'det.s.mon': 'Alle Optionen über denselben Zeitraum verrentet, in heutiger Kaufkraft. Weil die Verrentung linear läuft, addieren sich die Zeilen exakt.',
  'det.t.diag': 'Diagnose',
  'det.s.diag': 'Woran es liegt — und wo bei Ihnen noch Luft nach oben ist.',
  'det.t.anspar': 'Ansparphase, Jahr für Jahr',
  'det.t.ausz': 'Auszahlungsphase, Jahr für Jahr',
  'det.t.ann': 'Wie belastbar unsere Annahmen sind',

  /* ---------------- Speichern und weitergeben ---------------- */
  'msg.linkCopied': 'Link kopiert! Wer ihn öffnet, sieht genau Ihre Zahlen — läuft komplett ohne Server.',
  'msg.linkFailed': 'Kopieren hat nicht geklappt. Der Link steht jetzt in der Adresszeile für Sie bereit.',
  'msg.loaded': 'Geladen!',
  'msg.loadError': function(p){ return 'Die Datei ließ sich leider nicht lesen: ' + p.msg; },
  'msg.reset': 'Zurückgesetzt auf den Basisfall.',

  /* ---------------- PWA ---------------- */
  'pwa.offline': '<b>Auch offline für Sie da!</b> Die App liegt jetzt im Browser-Cache und läuft auch ganz ohne Verbindung. Zum Installieren: auf dem iPhone „Teilen" → „Zum Home-Bildschirm", auf Android das Menü → „App installieren".',
  'pwa.installAsk': '<b>Als App installieren?</b> Dann liegt sie mit eigenem Symbol direkt auf Ihrem Startbildschirm und läuft offline — praktisch für zwischendurch! ',
  'pwa.installBtn': 'Jetzt installieren',
  'pwa.installed': '<b>Installiert!</b> Sie finden die App jetzt bei Ihren übrigen Apps.',
  'pwa.declined': 'Alles klar — die App läuft auch so bestens, und zwar offline.',
  'pwa.file': '<b>Sie haben die Datei direkt geöffnet</b> (<kbd>file://</kbd>). Alles rechnet, alles wird gespeichert. Nur zwei Kleinigkeiten fehlen: kein Symbol auf dem Startbildschirm und kein Offline-Cache — den bräuchten Sie hier aber auch gar nicht, die Datei liegt ja schon auf Ihrem Gerät. Für das volle App-Erlebnis: den Ordner auf einen beliebigen HTTPS-Webspace legen und von dort öffnen.'
};
