/* =====================================================================
   Wörterbuch Deutsch — Hauptsprache und zugleich Rückfallebene.
   Werte sind entweder Zeichenketten oder Funktionen (p, f):
     p  Parameterobjekt der Aufrufstelle (Rohwerte, keine fertigen Texte)
     f  Formatierer der aktuellen Sprache: eur, eur2, pct, num, nf0, nf2
   Schlüssel der Eingabefelder: 'f.<src>:<key>.label|hint|unit|o<wert>'.
   ===================================================================== */
window.I18N_DE = {
  'f.I:gehalt.label': 'Jahresbrutto heute',
  'f.I:gehalt.hint': 'Ohne Einmalzahlungen, gegebenenfalls einschließlich anteiligem 13. Gehalt. Bestimmt Ihren Grenzsteuersatz und ob Sie über den Beitragsbemessungsgrenzen liegen.',
  'f.I:beitrag.label': 'Monatsbeitrag bAV brutto',
  'f.I:beitrag.hint': 'Bruttoentgeltumwandlung nach § 1a BetrAVG. Ein Rechtsanspruch besteht nur bis 4 % der Beitragsbemessungsgrenze RV, darüber braucht es die Zustimmung des Arbeitgebers.',
  'f.I:netto_ziel.label': 'Monatlicher Nettoaufwand',
  'f.I:netto_ziel.hint': 'Der Betrag, um den Ihr verfügbares Einkommen im ersten Jahr sinkt — der tatsächlich aufgegebene Konsum und damit die ökonomisch richtige Entscheidungsvariable. Genau dieser Betrag wird in allen drei Optionen investiert; das ist die Bedingung für einen fairen Vergleich. Er hängt eineindeutig am Bruttobeitrag darüber: N(B) = B − SV-Ersparnis − Steuerersparnis ist streng monoton wachsend, also umkehrbar. Geschlossen geht das wegen der Knicke an den Beitragsbemessungsgrenzen und den Tarifeckwerten nicht, deshalb 34 Halbierungen — Genauigkeit unter einem Zehntelcent.',
  'f.I:agzus.label': 'Arbeitgeberzuschuss',
  'f.I:agzus.hint': 'Gesetzliches Minimum 15 % (§ 1a Abs. 1a BetrAVG); viele Arbeitgeber zahlen mehr. Break-even gegenüber dem Privatdepot grob dort, wo (1+z)·(1−0,211) ≈ 1, also z ≈ 26,7 % — nachprüfbar mit der Sensitivitätskurve. Im Zuschussmodus „spitz“ ist dieser Wert oft gar nicht erreichbar, weil der Zuschuss vorher sättigt.',
  'f.I:agz_fix.label': 'Fester Zuschuss zusätzlich',
  'f.I:agz_fix.hint': 'Betragsunabhängiger Festzuschuss aus Tarifvertrag oder Betriebsvereinbarung — bei der Deutschen Bahn und in vielen Tarifwerken üblich, dort zusätzlich zu den 15 % nach § 1a Abs. 1a BetrAVG. Er ist arbeitgeberfinanzierte Zuwendung nach § 3 Nr. 63 EStG und belegt den 8-%-Topf sowie die 4-%-Beitragsfreiheit (§ 1 Abs. 1 S. 1 Nr. 9 SvEV) VORRANGIG: Ihre eigene Umwandlung wird insoweit verdrängt und teurer. Ökonomisch ist er ein Sockel, kein Hebel: die Grenzrendite Ihres nächsten Beitragseuros ändert er nicht (∂²Ertrag/∂agz_fix ∂beitrag ≤ 0, er kann sie über die Verdrängung sogar senken), den Durchschnitt hebt er stark. In der Sensitivitätskurve ist er deshalb näherungsweise affin — bis der 4-%- bzw. 8-%-Topf erschöpft ist, dann knickt sie.',
  'f.I:agz_fix_dyn.label': 'Festen Zuschuss dynamisieren',
  'f.I:agz_fix_dyn.hint': 'Festbeträge stehen meist nominal im Tarifvertrag und werden nur bei Tarifrunden angehoben — Voreinstellung deshalb „nominal konstant“. Über 27 Jahre bei 2 % Inflation bleibt davon der Faktor 1,02⁻²⁷ ≈ 0,59 übrig; wer das für zu pessimistisch hält, schaltet auf „mit dem Gehalt“ und bekommt einen realen Zuschuss mit Wachstumsrate gsteig − infl.',
  'f.I:agz_fix_dyn.o0': 'nominal konstant',
  'f.I:agz_fix_dyn.o1': 'mit dem Gehalt',
  'f.I:agzus_sv.label': 'Zuschussmodus',
  'f.I:agzus_sv.hint': '„Spitz“ ist der Gesetzeswortlaut: § 1a Abs. 1a BetrAVG schuldet den Zuschuss nur, SOWEIT der Arbeitgeber tatsächlich Sozialabgaben spart. Liegt Ihr Entgelt über beiden Beitragsbemessungsgrenzen, spart er nichts und schuldet nichts. Deshalb sättigt der Regler darüber im Basisfall bei rund 21 %. „Voller Beitrag“ ist eine freiwillige oder tarifvertragliche Zusage, „sv-freier Anteil“ die verbreitete pauschale Praxis. Vertrauensgrad der spitzen Lesart ca. 75 %.',
  'f.I:agzus_sv.o0': 'voller Beitrag',
  'f.I:agzus_sv.o1': 'sv-freier Anteil',
  'f.I:agzus_sv.o2': 'spitz gerechnet',
  'f.I:dyn.label': 'Beitrag dynamisieren',
  'f.I:dyn.hint': 'Steigt der Beitrag mit der Gehaltssteigerung, bleibt die Ausschöpfung des 8-%-Topfes über die Jahre ungefähr konstant. Bleibt er nominal konstant, sinkt sein realer Wert mit der Inflation — und der Nettoaufwand, den die beiden anderen Optionen zum Vergleich bekommen, sinkt mit.',
  'f.I:dyn.o1': 'mit dem Gehalt',
  'f.I:dyn.o0': 'nominal konstant',
  'f.I:rendite.label': 'Bruttorendite ETF p.a.',
  'f.I:rendite.hint': 'Vor Kosten, vor Steuern. In allen drei Optionen derselbe ETF — nur so vergleicht man Förderarchitekturen statt Anlageentscheidungen.',
  'f.I:alter.label': 'Alter heute',
  'f.I:alter.hint': 'Startpunkt der Ansparphase. Kalenderjahr 0 = 2026.',
  'f.I:alter.unit': 'Jahre',
  'f.I:rentbeg.label': 'Auszahlungsbeginn',
  'f.I:rentbeg.hint': 'Beginn der Auszahlungsphase aller drei Optionen. Das Altersvorsorgedepot ist frühestens ab 65 auszahlbar (Reform 2026).',
  'f.I:rentbeg.unit': 'Jahre',
  'f.I:kv_ruhe.label': 'Krankenversicherung im Ruhestand',
  'f.I:kv_ruhe.hint': 'Der entscheidende Hebel. In der GKV sind Betriebsrenten Versorgungsbezüge und tragen den vollen Beitragssatz (§§ 229, 250 SGB V); private Altersvorsorge nicht. Allein diese Einstellung dreht das Ergebnis.',
  'f.I:kv_ruhe.o1': 'gesetzlich',
  'f.I:kv_ruhe.o2': 'privat',
  'f.I:auszform.label': 'bAV-Auszahlung',
  'f.I:auszform.hint': 'Kapital: im Zuflussjahr voll steuerpflichtig, Beiträge zur KV auf 120 Monate verteilt (§ 229 Abs. 1 S. 3 SGB V). Die Rente streckt den Bezug auf die Restlebenszeit und schirmt deshalb ein Vielfaches an Kapital unter demselben Freibetrag ab. Das Modell kennt nur ganz oder gar nicht; eine Teilkapitalisierung der bAV ist nicht abgebildet.',
  'f.I:auszform.o1': 'Kapital',
  'f.I:auszform.o2': 'lebenslange Rente',
  'f.I:teilkap.label': 'Altersvorsorgedepot: Einmalbetrag zu Beginn',
  'f.I:teilkap.hint': 'Bis 30 % des angesparten Kapitals sind zu Beginn der Auszahlungsphase als Einmalbetrag möglich — in beiden Auszahlungsformen. Er kostet aus zwei Gründen: volle Progression im Zuflussjahr und danach nur noch der Zinssatz nach Abgeltungsteuer. Der Überschuss über den Jahreshöchstbetrag („Sleeve“) wird ohne Einmalbetrag verrentet; das ist eine Modellkonvention, kein Rechtssatz.',
  'f.I:av_auszform.label': 'Altersvorsorgedepot: Rest',
  'f.I:av_auszform.hint': 'Was mit dem Kapital jenseits des Einmalbetrags geschieht — unabhängig von der bAV-Entscheidung darüber. Auszahlungsplan: das Geld bleibt investiert und wird verzinst entnommen; die nicht geförderte Schicht wird mit dem halben Unterschiedsbetrag besteuert. Lebenslange Rente: das Kapital geht an den Anbieter, dafür wird die nicht geförderte Schicht nur mit dem Ertragsanteil besteuert (§ 22 Nr. 5 S. 2 Buchst. a EStG, 17 % ab Alter 67 statt hier rund 26 %). Die geförderte Schicht ist in beiden Fällen voll nachgelagert steuerpflichtig, das ändert sich nicht.',
  'f.I:av_auszform.o1': 'Auszahlungsplan',
  'f.I:av_auszform.o2': 'lebenslange Rente',
  'f.I:agz_fix_min.label': 'Mindest-Eigenbeitrag für den festen Zuschuss',
  'f.I:agz_fix_min.hint': 'Matching-Modelle knüpfen den Festbetrag an eine Mindest-Eigenleistung („wer mindestens X umwandelt, bekommt Y“). 0 heißt bedingungslos — dann fließt der Zuschuss in jedem aktiven Jahr, auch bei Beitrag null. Achtung auf die Modellsemantik: ein wirklich bedingungsloser Zuschuss wäre kein Differenzeffekt der Umwandlungsentscheidung und schlüge dem Vergleich zugunsten der bAV zu Buche, obwohl er auch ohne Umwandlung flösse. Nur eintragen, was tatsächlich an der Teilnahme hängt.',
  'f.I:rentfak_av.label': 'Rentenfaktor Altersvorsorgedepot',
  'f.I:rentfak_av.hint': 'Nur bei Verrentung des Depots. Voreingestellt wie bei der bAV; ein Depotvertrag kommt ohne Versicherungsmantel aus und kann deshalb günstiger sein — den Wert aus dem konkreten Angebot eintragen. Bei 0 gibt es keine Rente.',
  'f.I:rentfak_av.unit': '€ je 10.000 €',
  'f.I:rentdyn_av.label': 'Dynamik der Depotrente p.a.',
  'f.I:rentdyn_av.hint': 'Überschussbeteiligung bzw. Fondsentwicklung in der Rentenphase des Depotvertrags.',
  'f.I:rentfak.label': 'Rentenfaktor bAV',
  'f.I:rentfak.hint': 'Nur bei Auszahlungsform „Rente“. 26 € Monatsrente je 10.000 € entspricht etwa 3,1 % Entnahmequote. Steht im Produktinformationsblatt.',
  'f.I:rentfak.unit': '€ je 10.000 €',
  'f.I:rentdyn.label': 'Dynamik der bAV-Rente p.a.',
  'f.I:rentdyn.hint': 'Überschussbeteiligung bzw. Fondsentwicklung in der Rentenphase.',
  'f.I:fuenftel.label': 'Fünftelregelung prüfen',
  'f.I:fuenftel.hint': '§ 34 EStG ist bei planmäßiger Kapitalabfindung aus § 3 Nr. 63-Verträgen nach BFH X R 23/15 nur ausnahmsweise anwendbar. Konservativ: nein.',
  'f.I:fuenftel.o0': 'nein (konservativ)',
  'f.I:fuenftel.o1': 'ja',
  'f.I:planende.label': 'Vergleichshorizont bis Alter',
  'f.I:planende.hint': 'Auszahlungspläne laufen bis hierhin. Lebenslange Renten werden über denselben Horizont verglichen; was danach noch fließt, steht als Memo unter „Diagnose“. Wer alt wird, gewinnt dort.',
  'f.I:planende.unit': 'Jahre',
  'f.I:ausscheid.label': 'Ausscheiden aus dem Job',
  'f.I:ausscheid.hint': 'Ab hier kein Gehalt und keine Beiträge mehr. Das Kapital verzinst sich weiter bis zum Auszahlungsbeginn.',
  'f.I:ausscheid.unit': 'Jahre',
  'f.I:tzalter.label': 'Teilzeit ab Alter',
  'f.I:tzalter.hint': 'Jeder Wert ab dem Auszahlungsbeginn bedeutet: keine Teilzeit. Voreingestellt ist deshalb 67.',
  'f.I:tzalter.unit': 'Jahre',
  'f.I:tzfaktor.label': 'Teilzeitfaktor',
  'f.I:tzfaktor.hint': 'Anteil des Vollzeitgehalts. 60 % = 60-%-Stelle.',
  'f.I:gsteig.label': 'Gehalts- und Lohnsteigerung p.a.',
  'f.I:gsteig.hint': 'Schreibt auch Beitragsbemessungsgrenzen, Bezugsgröße, Durchschnittsentgelt und Rentenwert fort.',
  'f.I:stkl.label': 'Veranlagung',
  'f.I:stkl.hint': 'Maßgeblich ist die VERANLAGUNGSART, nicht die Lohnsteuerklasse: die Klasse steuert nur den unterjährigen Abzug, der Jahresbescheid rechnet ohnehin mit Splitting nach § 32a Abs. 5 EStG. Bei „zusammen“ unbedingt das zvE des Partners eintragen.',
  'f.I:stkl.o1': 'einzeln',
  'f.I:stkl.o3': 'zusammen (Splitting)',
  'f.I:partner.label': 'zvE des Partners',
  'f.I:partner.hint': 'Nur bei Zusammenveranlagung. Gerechnet wird 2·ESt((zvE + zvE_Partner)/2).',
  'f.I:kist.label': 'Kirchensteuersatz',
  'f.I:kist.hint': '8 % in Bayern und Baden-Württemberg, sonst 9 %, 0 bei Kirchenaustritt. Wirkt auch auf die Abgeltungsteuer: 0,25/(1+0,25k)·(1+0,055+k).',
  'f.I:tarifanp.label': 'Anpassung der Tarifeckwerte p.a.',
  'f.I:tarifanp.hint': 'Der ganze Tarif wird um den Faktor λ = (1+x)^t gestreckt: ESt = s·λ·T(zvE/s/λ). Das ist exakt äquivalent zu einer proportionalen Verschiebung aller Eckwerte. 0 % zeigt volle kalte Progression.',
  'f.I:kinder.label': 'Anzahl Kinder',
  'f.I:kinder.hint': 'Kinderzulage im Altersvorsorgedepot: 1 € je eingezahltem € bis 300 € je Kind.',
  'f.I:kind_jahre.label': 'Jahre mit Kinderzulage',
  'f.I:kind_jahre.hint': 'Die Kinderzulage hängt am Kindergeldanspruch (§ 85 EStG), läuft also nicht über die ganze Ansparphase.',
  'f.I:kind_jahre.unit': 'Jahre',
  'f.I:kinderlos.label': 'Kinderlos (PV-Zuschlag)',
  'f.I:kinderlos.hint': '0,6 Prozentpunkte Zuschlag zur Pflegeversicherung, allein vom Arbeitnehmer zu tragen (§ 55 Abs. 3 SGB XI).',
  'f.I:kinderlos.o0': 'nein',
  'f.I:kinderlos.o1': 'ja',
  'f.I:k_bav.label': 'Kosten bAV-Produkt p.a.',
  'f.I:k_bav.hint': 'Versicherungsmantel plus TER. Die Effektivkosten stehen im Produktinformationsblatt — dort nachsehen, nicht schätzen.',
  'f.I:k_av.label': 'Kosten Altersvorsorgedepot p.a.',
  'f.I:k_av.hint': 'Beim Standarddepot sind die Effektivkosten gesetzlich auf 1,0 % p.a. gedeckelt.',
  'f.I:k_priv.label': 'Kosten privates ETF-Depot p.a.',
  'f.I:k_priv.hint': 'Reine TER eines breiten Welt-ETF.',
  'f.I:infl.label': 'Inflation p.a.',
  'f.I:infl.hint': 'Diskontierungssatz für alle Angaben „in heutiger Kaufkraft“. Ändert die Rangfolge kaum, aber alle Niveaus.',
  'f.I:sonst_zve.label': 'sonstiges zvE im Ruhestand',
  'f.I:sonst_zve.hint': 'Vor allem der steuerpflichtige Teil der gesetzlichen Rente, ohne die hier verglichenen Produkte. Bestimmt den Grenzsteuersatz in der Auszahlungsphase — und damit die Tarifarbitrage t₀ − t₁.',
  'f.I:rente_br.label': 'gesetzliche Bruttorente p.a.',
  'f.I:rente_br.hint': 'Nur für den Deckel in der Krankenversicherung: gesetzliche Rente und Versorgungsbezüge teilen sich EINE Beitragsbemessungsgrenze (§ 223 Abs. 3 SGB V).',
  'f.P:bbg_rv.label': 'BBG Rentenversicherung (jährlich)',
  'f.P:bbg_rv.hint': 'SVBezGrV 2026 (BGBl. 2025 I Nr. 116), bundeseinheitlich.',
  'f.P:bbg_kv.label': 'BBG Kranken-/Pflegeversicherung',
  'f.P:bbg_kv.hint': 'SVBezGrV 2026; 5.812,50 € monatlich.',
  'f.P:bezug.label': 'Bezugsgröße (monatlich)',
  'f.P:bezug.hint': 'SVBezGrV 2026, 47.460 € jährlich. Ein Zwanzigstel davon ist der Freibetrag für Versorgungsbezüge in der KV (§ 226 Abs. 2 S. 2 SGB V).',
  'f.P:de_rv.label': 'Durchschnittsentgelt RV',
  'f.P:de_rv.hint': 'Anlage 1 zu SGB VI, Wert 2026 — Nenner für die Entgeltpunkte.',
  'f.P:rw.label': 'Aktueller Rentenwert',
  'f.P:rw.hint': 'Rentenwertbestimmungsverordnung 2026, ab 1.7.2026: 42,52 € (+4,24 %).',
  'f.P:rw.unit': '€',
  'f.P:rv_an.label': 'RV-Beitrag Arbeitnehmeranteil',
  'f.P:rv_an.hint': '18,6 % hälftig.',
  'f.P:av_an.label': 'AV-Beitrag Arbeitnehmeranteil',
  'f.P:av_an.hint': '2,6 % hälftig.',
  'f.P:kv_allg.label': 'KV allgemeiner Beitragssatz',
  'f.P:kv_allg.hint': '§ 241 SGB V.',
  'f.P:kv_zus.label': 'KV durchschnittlicher Zusatzbeitrag',
  'f.P:kv_zus.hint': 'Bekanntmachung des BMG; kassenindividuell abweichend — den Satz Ihrer Kasse eintragen.',
  'f.P:pv_ges.label': 'PV Gesamtbeitragssatz',
  'f.P:pv_ges.hint': '§ 55 SGB XI. Kinderabschläge ab dem zweiten Kind sind nicht modelliert.',
  'f.P:pv_an.label': 'PV Arbeitnehmeranteil',
  'f.P:pv_an.hint': 'In Sachsen abweichend (2,3 %).',
  'f.P:pv_kl.label': 'PV Zuschlag für Kinderlose',
  'f.P:pv_kl.hint': '§ 55 Abs. 3 SGB XI, allein vom Arbeitnehmer.',
  'f.P:gfb.label': 'Grundfreibetrag (Ende Zone 1)',
  'f.P:gfb.hint': '§ 32a Abs. 1 EStG i.d.F. des Steuerfortentwicklungsgesetzes.',
  'f.P:e2.label': 'Ende Zone 2',
  'f.P:e2.hint': 'Grenzsteuersatz steigt von 14 % auf 23,97 %.',
  'f.P:e3.label': 'Ende Zone 3',
  'f.P:e3.hint': 'Grenzsteuersatz steigt von 23,97 % auf 42 %.',
  'f.P:e4.label': 'Beginn Zone 5 (Reichensteuer)',
  'f.P:e4.hint': 'Ab 277.826 € gilt 45 %.',
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
  'f.P:soli_fg.hint': '2026, Grundtarif, bezogen auf die festgesetzte ESt; im Splitting doppelt. Daneben eine Milderungszone.',
  'f.P:soli_mz.label': 'Milderungszone Grenzbelastung',
  'f.P:soli_mz.hint': '§ 3 Abs. 2a SolzG.',
  'f.P:an_pausch.label': 'Arbeitnehmer-Pauschbetrag',
  'f.P:an_pausch.hint': '§ 9a S. 1 Nr. 1a EStG.',
  'f.P:sa_pausch.label': 'Sonderausgaben-Pauschbetrag',
  'f.P:sa_pausch.hint': '§ 10c EStG.',
  'f.P:kapst.label': 'Abgeltungsteuersatz',
  'f.P:kapst.hint': '§ 32d Abs. 1 EStG.',
  'f.P:tfs.label': 'Teilfreistellung Aktienfonds',
  'f.P:tfs.hint': '§ 20 Abs. 1 Nr. 3 i.V.m. § 20 InvStG, Aktienfondsanteil über 50 %.',
  'f.P:sparerpb.label': 'Sparer-Pauschbetrag',
  'f.P:sparerpb.hint': '§ 20 Abs. 9 EStG; im Splitting verdoppelt. Absorbiert einen großen Teil der Vorabpauschale — siehe Wasserfall.',
  'f.P:basiszins.label': 'Basiszins Vorabpauschale',
  'f.P:basiszins.hint': 'BMF-Schreiben vom 13.01.2026, § 18 Abs. 4 InvStG (2025: 2,53 %). Auf 0 setzen heißt: keine Vorabpauschale.',
  'f.P:vp_faktor.label': 'Faktor für den Basisertrag',
  'f.P:vp_faktor.hint': '§ 18 Abs. 1 S. 1 InvStG.',
  'f.P:st_frei_q.label': 'steuerfrei § 3 Nr. 63 (Anteil BBG-RV)',
  'f.P:st_frei_q.hint': '8 % der BBG-RV = 8.112 € in 2026.',
  'f.P:sv_frei_q.label': 'sozialabgabenfrei (Anteil BBG-RV)',
  'f.P:sv_frei_q.hint': '§ 1 Abs. 1 S. 1 Nr. 9 SvEV; 4 % = 4.056 € in 2026. Zugleich die Grenze des Rechtsanspruchs nach § 1a BetrAVG.',
  'f.P:zul_g1.label': 'Zulage Stufe 1 (je € Eigenbeitrag)',
  'f.P:zul_g1.hint': 'Altersvorsorgereformgesetz, in Kraft seit Mai 2026, Anwendung ab 1.1.2027.',
  'f.P:zul_s1.label': 'Grenze Stufe 1',
  'f.P:zul_s1.hint': 'Bis 360 € Eigenbeitrag: 50 Cent je €.',
  'f.P:zul_g2.label': 'Zulage Stufe 2 (je € Eigenbeitrag)',
  'f.P:zul_g2.hint': 'Von 361 bis 1.800 €: 25 Cent je €.',
  'f.P:zul_s2.label': 'Grenze Stufe 2',
  'f.P:zul_s2.hint': 'Höchstbetrag geförderter Eigenbeitrag; ergibt eine maximale Grundzulage von 540 €.',
  'f.P:kind_zul.label': 'Kinderzulage je Kind',
  'f.P:kind_zul.hint': '1 € je eingezahltem € bis 300 € je Kind.',
  'f.P:av_max.label': 'Höchstbetrag Einzahlung p.a.',
  'f.P:av_max.hint': 'BMF-FAQ zur Reform der geförderten privaten Altersvorsorge, Stand 05.05.2026. Was darüber liegt, läuft in eine Nebenschiene, die wie ein Privatdepot besteuert wird.',
  'f.P:av_sa_max.label': 'Höchstbetrag Sonderausgabenabzug § 10a',
  'f.P:av_sa_max.hint': 'MODELLANNAHME, Vertrauensgrad ca. 70 %. Eigenbeitrag bis 1.800 € zuzüglich Zulagen. Diese eine Zahl entscheidet, ob ein Kind den Wert des AV-Depots hebt oder senkt.',
  'f.P:ertragsq.label': 'Ertragsanteil (Alter 67)',
  'f.P:ertragsq.hint': '§ 22 Nr. 1 S. 3 Buchst. a Doppelbuchst. bb EStG, für nicht geförderte Rententeile.',
  'f.P:halb.label': 'steuerpflichtiger Anteil des Unterschiedsbetrags',
  'f.P:halb.hint': '§ 20 Abs. 1 Nr. 6 S. 2 EStG analog (Vertrag über 12 Jahre, Auszahlung nach 62): halber Unterschiedsbetrag. Vertrauensgrad ca. 80 %.',

  /* ---------------- Rahmen, Fenstertitel, Kopf und Fuß ---------------- */
  'app.title': 'Altersvorsorge-Vergleich',
  'app.meta': 'Betriebliche Altersvorsorge, Altersvorsorgedepot und privates ETF-Depot bei gleichem Nettoaufwand vergleichen. Rechtsstand 2026.',
  'hdr.title': 'Altersvorsorge‑Vergleich',
  'hdr.sub': 'Betriebliche Altersvorsorge, Altersvorsorgedepot und privates ETF‑Depot &mdash; bei <b>gleichem Nettoaufwand</b> und mit demselben ETF. Rechtsstand 2026.',
  'win.header': 'Altersvorsorge-Vergleich',
  'win.result': 'Ergebnis',
  'win.input': 'Ihre Angaben',
  'win.chart': 'Diagramme',
  'win.extra': 'Weitere Angaben',
  'win.calc': 'Rechenweg',
  'win.share': 'Speichern und weitergeben',
  'win.min': 'Minimieren',
  'win.restore': 'Wiederherstellen',
  'win.n': function(p){ return 'Fenster ' + p.n; },
  'input.sub': 'Die Zahlen rechnen sich bei jeder Änderung sofort neu. Mit <span class="qm" style="cursor:default">?</span> erklärt sich jedes Feld selbst.',
  'extra.sub': 'Alles hier hat sinnvolle Voreinstellungen. Nur anfassen, wenn es auf Sie zutrifft.',
  'calc.sub': 'Für alle, die es nachvollziehen wollen.',
  'share.sub': 'Ihre Eingaben liegen ausschließlich in diesem Browser (<kbd>localStorage</kbd>). Nichts wird übertragen, es gibt keinen Server und keine Tracker.',
  'ui.share': 'Link mit meinen Zahlen kopieren',
  'ui.export': 'Als Datei sichern',
  'ui.import': 'Datei laden',
  'ui.reset': 'Alles zurücksetzen',
  'ui.pin.set': 'Als Referenz merken',
  'ui.pin.clear': 'Referenz lösen',
  'ui.lang': 'Sprache',
  'ui.lang.de': 'Deutsch',
  'ui.lang.en': 'Englisch',
  'ui.lang.la': 'Latein',
  'ui.lang.ja': 'Japanisch',
  'ui.lang.aria': 'Sprache wählen',
  'sb.up': 'Nach oben zum Ergebnis',
  'footer.1': '<b>Keine Steuer- oder Anlageberatung.</b> Ein Modell ist kein Vertrag. Die Rechtslage 2026 zur reformierten privaten Altersvorsorge ist an mehreren Stellen noch nicht abschließend geklärt; die Annahmen mit dem geringsten Vertrauensgrad stehen unter „Rechenweg → Belastbarkeit der Annahmen“ und sind dort auch änderbar.',
  'footer.2': 'Rechenkern eins zu eins portiert aus dem Excel-Modell <span class="pill">bAV-DYNO_vs_Altersvorsorgedepot_vs_ETF.xlsx</span> und gegen drei Testfälle auf Maschinengenauigkeit geprüft (größte relative Abweichung 1,3·10<sup>&minus;14</sup>).',

  /* ---------------- Die drei Optionen ---------------- */
  'opt.bav.name': 'bAV (Entgeltumwandlung)',
  'opt.bav.short': 'bAV',
  'opt.bav.nom': 'die betriebliche Altersvorsorge',
  'opt.bav.satz': 'Die betriebliche Altersvorsorge',
  'opt.bav.gen': 'der bAV',
  'opt.av.name': 'Altersvorsorgedepot',
  'opt.av.short': 'AV-Depot',
  'opt.av.nom': 'das Altersvorsorgedepot',
  'opt.av.satz': 'Das Altersvorsorgedepot',
  'opt.av.gen': 'des Altersvorsorgedepots',
  'opt.priv.name': 'privates ETF-Depot',
  'opt.priv.short': 'privat',
  'opt.priv.nom': 'das private ETF-Depot',
  'opt.priv.satz': 'Das private ETF-Depot',
  'opt.priv.gen': 'des privaten ETF-Depots',

  /* ---------------- Kennzahlen ---------------- */
  'metric.monat.label': 'Monatsleistung',
  'metric.monat.unit': '€/Monat',
  'metric.monat.desc': 'Konstante Monatszahlung über die gesamte Auszahlungsphase mit demselben Wert, in heutiger Kaufkraft. Die einzige Zahl, die sich unmittelbar mit Ihrem heutigen Nettoeinkommen vergleichen lässt.',
  'metric.ertrag.label': 'Netto-Ertrag (Barwert)',
  'metric.ertrag.unit': '€',
  'metric.ertrag.desc': 'Was die Option in heutiger Kaufkraft über den eigenen Einsatz hinaus abwirft: Barwert aller Netto-Leistungen minus Barwert des Nettoaufwands.',
  'metric.irr.label': 'Interner Zinsfuß',
  'metric.irr.unit': '% p.a.',
  'metric.irr.desc': 'Rendite auf den tatsächlich eingesetzten Nettobetrag, nominal. Direkt mit der eingestellten Bruttorendite des ETF vergleichbar — die Differenz ist genau das, was Förderung und Abgaben zusammen kosten oder bringen.',
  'metric.kapital.label': 'Kapital bei Rentenbeginn',
  'metric.kapital.unit': '€',
  'metric.kapital.desc': 'Vor Steuern und vor Sozialabgaben, nominal. Bewusst NICHT die Entscheidungsgröße: die bAV führt hier oft, verliert aber in der Auszahlung.',
  'metric.pa': ' p.a.',
  'metric.pp': ' Pp.',
  'metric.short.monat': 'Monat',
  'metric.short.ertrag': 'Ertrag',
  'metric.short.irr': 'IRR',
  'metric.short.kapital': 'Kapital',

  /* ---------------- Eingabefelder, Rahmenwerk ---------------- */
  'unit.pct': '%',
  'unit.eur': '€',
  'unit.eurm': '€/Monat',
  'ui.hintFor': function(p){ return 'Erklärung zu: ' + p.label; },
  'ui.couple': '<span>⇅</span> Zwei Sichten auf dieselbe Größe. Ändern Sie eine, folgt die andere.',
  'ui.cnt.legal': function(p){ return p.n + ' Rechengrößen'; },
  'ui.cnt.fields': function(p){ return p.n + ' Felder'; },
  'ui.legalNote': 'Gesetzliche Größen mit Fundstelle. Nur ändern, wenn sich das Recht geändert hat oder Ihre Kasse abweicht.',
  'group.bav': 'Zuschuss und Auszahlungsformen im Detail',
  'group.person': 'Zeitachse, Ausscheiden, Teilzeit',
  'group.steuer': 'Steuer, Veranlagung, Kinder',
  'group.markt': 'Kosten und Inflation',
  'group.ruhe': 'Ruhestand',
  'group.p_sv': 'Rechengrößen: Sozialversicherung 2026',
  'group.p_est': 'Rechengrößen: Einkommensteuertarif 2026 (§ 32a EStG)',
  'group.p_kap': 'Rechengrößen: Kapitalertrag- und Investmentsteuer',
  'group.p_bav': 'Rechengrößen: betriebliche und geförderte private Vorsorge',

  /* ---------------- Live-Notizen an den Feldern ---------------- */
  'n.beitrag.ueber8': function(p, f){
    return 'Über 8 % der Beitragsbemessungsgrenze RV (' + f.eur(p.v8) + ' im Jahr). Der Teil darüber ist '
      + 'weder steuer- noch sozialabgabenbegünstigt — er wandert in den Versicherungsmantel und holt '
      + 'sich dort nur die Beitragspflicht in der Krankenversicherung ab.'; },
  'n.beitrag.ueber4': function(p, f){
    return 'Über 4 % der Beitragsbemessungsgrenze RV (' + f.eur(p.v4) + ' im Jahr). Bis hierhin haben Sie '
      + 'einen Rechtsanspruch nach § 1a BetrAVG, darüber braucht es die Zustimmung des Arbeitgebers.'; },
  'n.agzus.gedeckelt': function(p, f){
    return 'Gedeckelt bei ' + f.pct(p.quote, 1) + '. Der Arbeitgeber spart tatsächlich nur '
      + f.eur2(p.ersparnis) + ' im Jahr — höhere Werte ändern hier nichts, solange der Zuschussmodus '
      + '„spitz gerechnet“ bleibt.'; },
  'n.agz_fix.fliesstNicht': function(p, f){
    return 'Fließt nicht: Ihr Monatsbeitrag von ' + f.eur2(p.beitrag) + ' liegt unter der '
      + 'Mindestschwelle von ' + f.eur2(p.schwelle) + ' (Feld unter „Weitere Angaben“).'; },
  'n.agz_fix.ueber4': function(p, f){
    return 'Der feste Zuschuss allein überschreitet den 4-%-Topf (' + f.eur(p.topf)
      + ' im Jahr) um ' + f.eur(p.ueber) + '. Dieser Teil wäre bei Ihnen beitragspflichtiges '
      + 'Arbeitsentgelt — das Modell rechnet die zusätzliche Beitragslast NICHT gegen und '
      + 'überschätzt die bAV insoweit.'; },
  'n.agz_fix.verdraengung': function(p, f){
    return 'Belegt den 4-%-Topf vorrangig: von Ihrem eigenen Beitrag bleiben nur noch '
      + f.eur(p.rest) + ' sozialabgabenfrei. Ihr Nettoaufwand steigt dadurch — der Zuschuss '
      + 'ist trotzdem geschenktes Geld, er verschiebt nur die Grenze der Eigenförderung.'; },
  'n.agz_fix.ueber8': 'Zusammen mit dem Eigenbeitrag über 8 % der BBG-RV — der Überhang ist weder steuer- noch beitragsbegünstigt.',
  'n.agz_fix_min.knapp': function(p, f){
    return 'Sie liegen nur ' + f.eur2(p.d) + ' über der Schwelle. Darunter fällt der feste Zuschuss '
      + 'komplett weg: die Grenzrendite des letzten Beitragseuros ist an dieser Stelle unendlich, '
      + 'die Kopplung Brutto ↔ Netto dort unstetig.'; },
  'n.agz_fix_min.verfehlt': function(p, f){
    return 'Schwelle nicht erreicht — ' + f.eur2(p.fehlt) + ' mehr im Monat lösen ' + f.eur2(p.zuschuss)
      + ' Zuschuss aus. Das ist fast immer der lohnendste Euro im ganzen Modell.'; },
  'n.teilkap.kosten': function(p, f){
    return 'Kostet ' + (p.gewinn ? 'nichts, im Gegenteil: ' + p.dtxt : p.dtxt + ' ' + p.unit)
      + ' gegenüber reiner Verrentung. Grund: der Einmalbetrag ist im Zuflussjahr voll '
      + 'steuerpflichtig (Grenzbelastung dort ' + f.pct(p.grenz, 1) + ') und verzinst sich danach nur '
      + 'noch mit dem Satz nach Abgeltungsteuer statt mit der Produktrendite.'; },
  'n.av_auszform.horizont': function(p, f){
    return 'Über den Vergleichshorizont hinaus zahlt diese Rente noch ' + f.eur(p.rest)
      + ', die hier NICHT mitgezählt werden. Ein fester Horizont unterschätzt jede lebenslange '
      + 'Rente systematisch — wer alt wird, gewinnt hier.'; },

  /* ---------------- Ergebniskarten ---------------- */
  'card.lead': 'vorn',
  'card.unchanged': 'unverändert',
  'base.pinned': 'Δ gegenüber dem gemerkten Stand',
  'base.delta': function(p){ return 'Δ ' + p.desc; },
  'base.none': 'Bewegen Sie einen Regler — die Änderung erscheint hier als Δ.',
  'base.desc.prev': 'vorheriger Stand',
  'base.desc.pinned': 'gemerkter Stand',
  'base.desc.change': function(p){ return 'vor der Änderung von „' + p.label + '“'; },
  'rank.swap': function(p, f){
    return '<b>Die Kennzahlen sind sich uneinig.</b> Nach Monatsleistung liegt '
      + p.a + ' vor ' + p.b + ', nach Barwert des Netto-Ertrags ist es umgekehrt. '
      + 'Grund: der Barwert zinst mit der Inflation ab (' + f.pct(p.infl, 2) + '), die Monatsleistung '
      + 'verrentet mit dem Wiederanlagezins nach Steuern (' + f.pct(p.wiederanl, 2) + '). Je weiter beide '
      + 'auseinanderliegen, desto besser steht eine frühe Kapitalauszahlung da. Welche Kennzahl gilt, hängt '
      + 'davon ab, ob Sie das Geld anlegen oder ausgeben würden — bei „ausgeben“ den Wert im Feld '
      + '„Kosten privates ETF-Depot“ so setzen, dass der Wiederanlagezins gegen null geht.'; },
  'warn.unreachable': 'Dieser Nettoaufwand ist nicht erreichbar — er übersteigt Ihr Gehalt. Eingestellt wurde der höchste mögliche Wert.',
  'warn.inactive': 'Im ersten Jahr sind Sie nach Ihren Angaben nicht mehr erwerbstätig — es gibt keine Entgeltumwandlung, also auch keinen Nettoaufwand, zu dem sich ein Bruttobeitrag zurückrechnen ließe. Prüfen Sie „Ausscheiden aus dem Job“ und „Alter heute“.',

  /* ---------------- Klartext-Fazit ---------------- */
  'verdict.lead': function(p){
    return '<b>' + p.satz + '</b> liegt vorn mit ' + p.wert + ' — ' + p.d2 + ' mehr als ' + p.nom2
      + (p.nom3 ? ' und ' + p.d3 + ' mehr als ' + p.nom3 : '') + '.'; },
  'verdict.pp': function(p){ return p.v + ' Prozentpunkte'; },
  'verdict.top': function(p, f){
    return ' Den größten Einzelposten im Abstand ' + p.gen + ' zum privaten ETF-Depot bildet '
      + '„' + p.label + '“ — und zwar ' + (p.pro ? 'zugunsten' : 'zulasten') + ' ' + p.gen
      + ', mit ' + f.eur(p.wert) + ' Barwert. Die vollständige Zerlegung steht unter „Werttreiber“.'; },
  'verdict.band': function(p, f){
    return '<span class="band">Wie belastbar ist das? Bei einer Bruttorendite von ' + f.pct(p.lo, 1)
      + ' statt ' + f.pct(p.mid, 1) + ' wären es ' + p.vlo + ', bei ' + f.pct(p.hi, 1) + ' wären es '
      + p.vhi + ' — die Reihenfolge '
      + (p.stabil ? 'bleibt in dieser Spanne dieselbe.'
                  : '<b>kehrt sich in dieser Spanne um</b>, das Ergebnis trägt hier also nicht.')
      + '</span>'; },
  'demo.text': '<b>Das sind noch Beispielwerte</b> — 40 Jahre alt, 75.000 € Jahresbrutto, 300 € Entgeltumwandlung im Monat, gesetzlich krankenversichert. Tragen Sie unter „Ihre Angaben“ Ihre eigenen ein; dieser Hinweis verschwindet dann von selbst.',

  /* ---------------- Mitlaufende Leiste ---------------- */
  'sb.cap': function(p){ return p.label + ' · ' + p.unit + (p.kaufkraft ? ', heutige Kaufkraft' : ''); },
  'sb.aria': function(p){ return 'Ergebnis: ' + p.label; },

  /* ---------------- Diagramme ---------------- */
  'tab.sens': 'Sensitivität',
  'tab.wf': 'Werttreiber',
  'tab.kap': 'Kapitalverlauf',
  'tab.zer': 'Monatszerlegung',
  'chart.error': function(p){ return 'Diagramm nicht darstellbar: ' + p.msg; },
  'sens.readout': 'Gestrichelt: Ihr aktueller Wert. Ringe: Schnittpunkte mit dem Privatdepot. Über der Kurve fahren oder tippen für Werte.',
  'sens.legendY': function(p){ return 'y: ' + p.label + ' (' + p.unit + ')'; },
  'sens.note': function(p){
    return 'Der zuletzt bewegte Regler wird über seine ganze Spanne durchgerechnet — ' + p.n
      + ' vollständige Modellläufe. Aktuell: „' + p.label + '“. '
      + 'Bewegen Sie einen anderen Regler, wechselt die Kurve mit.'; },
  'sens.noteNetto': function(p, f){
    return ' Achtung: dieser Regler verändert auch den Nettoaufwand (hier ' + f.eur2(p.lo) + ' bis '
      + f.eur2(p.hi) + ' im Monat) und damit den Betrag, der in allen drei Optionen investiert wird. '
      + 'Deshalb sind die drei Kurven bei jedem einzelnen x fair vergleichbar, das Niveau zwischen '
      + 'verschiedenen x aber nicht. Die Knicke sitzen an den Beitragsbemessungsgrenzen ('
      + f.eur(p.bbgkv) + ' für KV/PV, ' + f.eur(p.bbgrv) + ' für RV/AV) und an den Tarifeckwerten.'; },
  'wf.up': 'hebt den Ertrag',
  'wf.down': 'senkt den Ertrag',
  'wf.legend': 'Barwert des Netto-Ertrags, heutige Kaufkraft',
  'wf.check': function(p, f){
    return 'Probe: ' + f.eur(p.start) + ' + ' + f.eur(p.summe) + ' = ' + f.eur(p.start + p.summe)
      + ' (Soll ' + f.eur(p.ende) + ', Abweichung ' + f.nf2(p.start + p.summe - p.ende) + ' €).'; },
  'wf.note': 'Teleskopierende Zerlegung, deshalb geht sie exakt auf — aber sie ist <b>reihenfolgeabhängig</b>: die Effekte sind nicht additiv separierbar, jeder Balken misst den Beitrag <i>gegeben</i> die darüberliegenden. Tippen Sie einen Balken an für die Herleitung.',
  'wf.barinfo': function(p){ return p.label + ': ' + p.note; },
  'wfb.vp.label': 'Wegfall der Vorabpauschale',
  'wfb.vp.note': 'Weder bAV noch Altersvorsorgedepot kennen die Vorabpauschale (§ 18 InvStG). Gemessen als Privatdepot ohne Vorabpauschale minus mit. Der Balken kann negativ sein: die Vorabpauschale läuft zu großen Teilen in den Sparer-Pauschbetrag, erhöht aber in voller Höhe die Kostenbasis — dann ist sie für das Privatdepot netto ein Vorteil.',
  'wfb.zul.label': 'Zulagen und Sonderausgabenabzug',
  'wfb.zul.note': 'Fremdgeld nach dem neuen Zulagenmodell plus der Abzug nach § 10a EStG. Gemessen durch Abschalten beider Förderwege.',
  'wfb.arch.label': 'Besteuerungsarchitektur (Rest)',
  'wfb.arch.note': 'Tarifarbitrage t₀ − t₁ und alles Übrige. Residual bestimmt, damit die Kette exakt aufgeht.',
  'wfb.agz.label': 'Arbeitgeberzuschuss',
  'wfb.agz.note': 'Fremdgeld — der einzige strukturelle Vorteil der bAV, der nicht aus dem Steuerrecht kommt. Gemessen durch Abschalten des Zuschusses.',
  'wfb.tarif.label': 'Tarifarbitrage und Rest',
  'wfb.tarif.note': 'Grenzsteuersatz beim Einzahlen minus beim Auszahlen, plus alles Übrige. Residual bestimmt, damit die Kette exakt aufgeht. Steueraufschub allein ist wertlos: (1−t)(1+r)ⁿ = (1+r)ⁿ(1−t), Multiplikation kommutiert.',
  'wfb.kvpv.label': 'KV/PV auf Versorgungsbezüge',
  'wfb.kvpv.note': '§§ 229, 250 SGB V: den vollen Beitragssatz trägt der Rentner allein. Gemessen als Differenz zur Einstellung „PKV im Ruhestand“.',
  'wfb.ep.label': 'Verlust an Entgeltpunkten',
  'wfb.ep.note': 'Entgeltumwandlung mindert das beitragspflichtige Entgelt und damit die gesetzliche Rente. Netto gegengerechnet.',
  'kap.rentbeg': 'Rentenbeginn',
  'kap.swap': 'Kapital → Rentenanspruch',
  'kap.legend': 'durchgezogen: gesamt &nbsp;·&nbsp; gestrichelt: frei verfügbar',
  'kap.readout': function(p, f){
    return 'Am Rentenbeginn gebunden: bAV ' + f.eur(p.bavGeb) + ' von ' + f.eur(p.bav)
      + ' · AV-Depot ' + f.eur(p.avGeb) + ' von ' + f.eur(p.av)
      + ' · privates Depot ' + f.eur(0) + ' von ' + f.eur(p.priv)
      + '.  Die äquivalente Monatsleistung wird verbraucht, deshalb endet jede Option bei null.'; },
  'kap.note': function(p, f){
    return 'Kontostand im Produkt, in der Auszahlungsphase zuzüglich der netto wieder angelegten '
      + 'Auszahlungen (' + f.pct(p.wiederanl, 2) + ' nach Steuern) und abzüglich der äquivalenten '
      + 'Monatsleistung, die tatsächlich verbraucht wird. Deshalb läuft jede Option punktgenau auf null. '
      + 'Weil der Verbrauch nur aus der Wiederanlage abgeht und das Produktkapital im Produkt bleibt, wo es '
      + 'mit der Produktrendite vor Steuern wächst, verlaufen die Kurven trotzdem nicht proportional. '
      + '— Die gestrichelte Linie ist der frei verfügbare Teil: die bAV ist bis zum Rentenbeginn '
      + 'vollständig gebunden (§ 1b BetrAVG kennt Unverfallbarkeit, nicht Verfügbarkeit), beim '
      + 'Altersvorsorgedepot ist eine Entnahme vor 65 förderschädlich und frei nur der Überschuss über den '
      + 'Jahreshöchstbetrag, das Privatdepot ist jederzeit frei. Das ist die einzige Achse, auf der eine '
      + 'Kapitalauszahlung gut aussieht. '
      + (p.verrentet ? 'Weil Sie das Depot verrenten, geht auch dort das Kapital an den Anbieter — die '
          + 'Kurve fällt entsprechend, obwohl nichts verloren ist. ' : '')
      + 'Und noch einmal ausdrücklich: die Kurven zeigen das Vermögen aus DIESER einen Entscheidung, '
      + 'nicht Ihr Gesamtvermögen.'; },
  'zer.netto': 'netto',
  'zer.tax': 'Steuer',
  'zer.kv': 'KV/PV',
  'zer.pension': 'Rente',
  'zer.legend': '<span><i style="background:#808080"></i>Steuer</span><span><i style="background:#800000"></i>KV/PV</span><span><i style="background:#800080"></i>entgangene gesetzliche Rente</span><span style="margin-left:auto">farbiger Sockel = das, was übrig bleibt</span>',
  'zer.readout': 'Alles als konstante Monatsleistung in heutiger Kaufkraft. Weil Annuitisierung linear ist, addieren sich die Blöcke exakt.',
  'zer.note': function(p, f){
    return 'Der Bezugszeitraum ist für alle drei Optionen identisch. Eine Kapitalauszahlung wird nicht '
      + 'durch zwölf geteilt, sondern mit dem Wiederanlagezins nach Steuern (' + f.pct(p.wiederanl, 2)
      + ' p.a.) auf denselben Zeitraum verrentet. Wer das Kapital verkonsumiert statt anzulegen, steht '
      + 'schlechter.'; },

  /* ---------------- Rechenweg ---------------- */
  'det.h.bav': 'bAV',
  'det.h.av': 'AV-Depot',
  'det.h.priv': 'privat',
  'det.h.kennzahl': 'Kennzahl',
  'det.h.wert': 'Wert',
  'det.erg.netto': 'Summe eingezahlt aus dem Netto (nominal)',
  'det.erg.fremd': 'Fremdgeld (Zuschuss bzw. Zulagen)',
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
  'det.erg.irr': 'Interner Zinsfuß (nominal)',
  'det.erg.vorsprung': 'Vorsprung gegenüber dem Privatdepot',
  'det.mon.brutto': 'Bruttoleistung pro Monat',
  'det.mon.steuer': 'abzüglich Einkommen-/Abgeltungsteuer',
  'det.mon.kvpv': 'abzüglich Kranken- und Pflegeversicherung',
  'det.mon.ep': 'abzüglich Verlust an gesetzlicher Rente',
  'det.mon.netto': 'NETTO PRO MONAT (heutige Kaufkraft)',
  'det.diag.beitrag': 'Bruttobeitrag bAV pro Monat',
  'det.diag.aufwand': 'Nettoaufwand pro Monat (erstes Jahr)',
  'det.diag.grenzsteuer': 'Grenzsteuersatz in der Ansparphase (erstes Jahr)',
  'det.diag.ersparnis': 'Ersparnisquote gesamt (Steuer + SV), erstes Jahr',
  'det.diag.svAG': 'tatsächliche SV-Ersparnis des Arbeitgebers',
  'det.diag.svAN': 'tatsächliche SV-Ersparnis des Arbeitnehmers',
  'det.diag.ngef': 'Anteil der bAV-Beiträge ohne Förderung (erstes Jahr)',
  'det.diag.aussch': 'Ausschöpfung des Rechtsanspruchs (4 % BBG-RV)',
  'det.diag.agzVar': 'davon Arbeitgeberzuschuss: prozentual (erstes Jahr)',
  'det.diag.agzFix': 'davon Arbeitgeberzuschuss: fester Betrag (erstes Jahr)',
  'det.diag.agzFixUeber4': 'fester Zuschuss über dem 4-%-Topf (nicht als Beitragslast erfasst)',
  'det.diag.vbMonat': 'Versorgungsbezug pro Monat zu Auszahlungsbeginn',
  'det.diag.freibetrag': 'Freibetrag Versorgungsbezüge im selben Jahr',
  'det.diag.vbQuote': 'Verhältnis Versorgungsbezug zu Freibetrag',
  'det.diag.kapFreiKapital': 'beitragsfrei mögliches Kapital (Kapitalauszahlung)',
  'det.diag.kapFreiRente': 'beitragsfrei mögliches Kapital (lebenslange Rente)',
  'det.diag.memoRest': 'MEMO: bAV-Rentenzahlungen nach dem Horizont',
  'det.diag.memoRestAv': 'MEMO: Depotrente nach dem Horizont',
  'det.diag.wiederanl': 'Wiederanlagezins nach Steuern',
  'det.diag.kapstEff': 'effektive Abgeltungsteuer inkl. Soli/KiSt',
  'det.diag.bestAnteil': 'Besteuerungsanteil der gesetzlichen Rente',
  'det.warn.lead': 'Sie liegen außerhalb des begünstigten Korridors: ',
  'det.warn.aussch': 'Über 100 % Ausschöpfung besteht kein Rechtsanspruch auf Entgeltumwandlung mehr. ',
  'det.warn.ngef': 'Ein spürbarer Teil der Beiträge ist weder steuer- noch sozialabgabenbegünstigt — diese Schicht wandert in einen Versicherungsmantel, ohne dafür etwas zu bekommen außer der Beitragspflicht in der KV. ',
  'det.warn.vb': 'Der Versorgungsbezug übersteigt den Freibetrag deutlich; die Schutzwirkung des absoluten Freibetrags fällt wie 1/Kapital. ',
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
  'det.ann.intro': 'Die Rangfolge hängt an Rechtsfragen, die 2026 noch nicht alle geklärt sind. Die Zahlen in Klammern sind subjektive Vertrauensgrade.',
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
  'det.ann.r4.c': 'die häufigste Fehlerquelle in Ratgebertexten',
  'det.ann.r5.a': 'Beitragsfreiheit der AV-Depot-Auszahlung',
  'det.ann.r5.c': 'keine Versorgungsbezüge',
  'det.ann.r6.a': 'halber Unterschiedsbetrag für nicht geförderte Schichten',
  'det.ann.r6.c': '§ 22 Nr. 5 S. 2 Buchst. b i.V.m. § 20 Abs. 1 Nr. 6 S. 2 EStG',
  'det.ann.r7.a': 'Zuschuss nur bis zur tatsächlichen AG-Ersparnis',
  'det.ann.r7.c': 'Gegenauffassung liest 15 % als reine Pauschale',
  'det.ann.r8.a': 'Sonderausgaben-Höchstbetrag 2.340 €',
  'det.ann.r8.c': 'MODELLANNAHME. Entscheidet, ob ein Kind den Wert des AV-Depots hebt oder senkt',
  'det.ann.r9.a': 'KVdR-Pflichtversicherung im Ruhestand unterstellt',
  'det.ann.r9.c': 'freiwillig Versicherte nicht geprüft',
  'det.ann.notmodelled': '<b>Nicht modelliert:</b> Abschläge bei vorzeitigem Rentenbezug, Wirkung der Entgeltumwandlung auf Kranken-, Arbeitslosen- und Elterngeld, Hinterbliebenenversorgung, Insolvenzsicherung (PSVaG), Portabilität bei Arbeitgeberwechsel, Kinderabschläge in der PV, Günstigerprüfung nach § 32d Abs. 6 EStG, Pfändungs- und Grundsicherungsschutz, Langlebigkeitsrisiko jenseits des Horizonts.',
  'det.prinzip': '<p>Ein Vergleich von <i>Bruttobeiträgen</i> wäre unfair: Entgeltumwandlung kommt aus dem Brutto, privates Sparen aus dem Netto. Deshalb wird der <b>Nettoaufwand</b> gleichgesetzt:</p>'
    + '<p style="font-family:var(--mono);font-size:.82rem;background:var(--chip);padding:9px 11px;border-radius:9px">Nettoaufwand = Bruttobeitrag − Lohnsteuerersparnis − ersparter AN-Anteil zur Sozialversicherung</p>'
    + '<p>Genau dieser Betrag wird in allen drei Optionen investiert. Was übrig bleibt, ist ein Vergleich der <i>Förderarchitekturen</i>, nicht der Einzahlungshöhen.</p>'
    + '<p><b>Steueraufschub ist für sich genommen wertlos:</b> (1−t)·(1+r)ⁿ = (1+r)ⁿ·(1−t). Multiplikation kommutiert. Es bleiben nur vier Werttreiber:</p>'
    + '<ol style="padding-left:1.2em;margin:.3em 0"><li>Tarifarbitrage t₀ − t₁</li>'
    + '<li>Fremdgeld — Arbeitgeberzuschuss bzw. Zulagen</li>'
    + '<li>steuerfreie Thesaurierung — keine Vorabpauschale</li>'
    + '<li>neue Abgaben, die nur eine Option treffen — KV/PV auf Versorgungsbezüge</li></ol>'
    + '<p>Punkt 4 ist der dominante Nachteil der bAV, Punkt 2 ihr einziger struktureller Vorteil. Die Rendite der bAV <b>fällt streng monoton in der Beitragshöhe</b>, weil der Freibetrag absolut ist und seine Schutzwirkung wie 1/K abnimmt — es gibt kein inneres Optimum.</p>'
    + '<p>Bei Vorgabe des Nettoaufwands wird der Bruttobeitrag per Bisektion zurückgerechnet: N(B) ist stetig und streng monoton wachsend (dN/dB = 1 − Grenz-SV-Satz − Grenzsteuersatz > 0), wegen der Knicke bei 4 % und 8 % der BBG-RV, an den Beitragsbemessungsgrenzen und an den Tarifeckwerten aber nicht geschlossen invertierbar. 34 Halbierungen liefern unter einem Zehntelcent.</p>',
  'det.t.prinzip': 'Das Vergleichsprinzip',
  'det.t.erg': 'Ergebnis im Detail',
  'det.s.erg': 'Alle drei Optionen kosten in der Ansparphase exakt denselben Betrag aus dem Netto.',
  'det.t.mon': 'Monatliche Leistung, zerlegt',
  'det.s.mon': 'Alle Optionen über denselben Zeitraum verrentet, in heutiger Kaufkraft. Weil Annuitisierung linear ist, addieren sich die Zeilen exakt.',
  'det.t.diag': 'Diagnose',
  'det.s.diag': 'Woran es liegt — und wo Sie außerhalb des begünstigten Korridors stehen.',
  'det.t.anspar': 'Ansparphase, Jahr für Jahr',
  'det.t.ausz': 'Auszahlungsphase, Jahr für Jahr',
  'det.t.ann': 'Belastbarkeit der Annahmen',

  /* ---------------- Speichern und weitergeben ---------------- */
  'msg.linkCopied': 'Link kopiert. Wer ihn öffnet, sieht genau diese Zahlen — nichts davon läuft über einen Server.',
  'msg.linkFailed': 'Kopieren ging nicht. Der Link steht jetzt in der Adresszeile.',
  'msg.loaded': 'Geladen.',
  'msg.loadError': function(p){ return 'Die Datei ließ sich nicht lesen: ' + p.msg; },
  'msg.reset': 'Zurückgesetzt auf den Basisfall.',

  /* ---------------- PWA ---------------- */
  'pwa.offline': '<b>Offlinefähig.</b> Die App liegt jetzt im Browser-Cache und läuft auch ohne Verbindung. Zum Installieren: auf dem iPhone „Teilen“ → „Zum Home-Bildschirm“, auf Android das Menü → „App installieren“.',
  'pwa.installAsk': '<b>Als App installieren?</b> Dann liegt sie mit eigenem Symbol auf dem Startbildschirm und läuft offline. ',
  'pwa.installBtn': 'Installieren',
  'pwa.installed': '<b>Installiert.</b> Sie finden die App jetzt unter Ihren übrigen Apps.',
  'pwa.declined': 'Alles klar — die App läuft auch so, und zwar offline.',
  'pwa.file': '<b>Sie haben die Datei direkt geöffnet</b> (<kbd>file://</kbd>). Alles rechnet, alles wird gespeichert. Nur die beiden PWA-Eigenschaften fehlen: kein Symbol auf dem Startbildschirm und kein Offline-Cache — den bräuchte es hier auch nicht, die Datei liegt ja bereits auf dem Gerät. Für die volle App-Erfahrung den Ordner auf einen beliebigen HTTPS-Webspace legen und von dort öffnen.'
};
