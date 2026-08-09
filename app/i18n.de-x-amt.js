/* =====================================================================
   Wörterbuch Deutsch, Register „Amtsdeutsch" (BCP 47 § 2.2.7,
   privater Untertag de-x-amt) — VOLLSTÄNDIG (459 Schlüssel).

   Keine Übersetzung, sondern eine Stilvariante derselben Sprache: exakt
   dieselben Zahlen, Formeln und Paragraphen wie im Wörterbuch Deutsch
   (i18n.de.js), aber in der Diktion eines Verwaltungsschreibens —
   Passiv, Nominalstil, „es wird gebeten", „gemäß", „im Sinne von",
   „vorbehaltlich", Amtsabkürzungen (bzw., ggf., i.d.R., vgl.), keine
   Ausrufezeichen, keine Anrede in der zweiten Person Singular. Der Witz
   liegt im Fließtext: „Der Rechtsanspruch ist bis zur Höhe von vier vom
   Hundert der Beitragsbemessungsgrenze gegeben" statt umgangssprachlich
   verkürzt — dieselbe Rechtslage, andere Prosa. Siehe zum Vergleich
   i18n.de-x-sales.js (Register „Vertrieb"), das denselben § 1a BetrAVG
   als Werbetext rendert.

   Vertrauensgrad: Es handelt sich um muttersprachliche Stiltransformation,
   nicht um Übersetzung — die Fehlerquelle „falsches Wort" entfällt. Das
   einzige Risiko ist Stilbruch (ein zu saloppes Wort in sonst amtlichem
   Ton); Vertrauensgrad in die Registertreue ca. 90 %.
   ===================================================================== */
window.I18N_DE_X_AMT = {
  'f.I:gehalt.label': 'Jahresbruttoeinkommen (laufendes Kalenderjahr)',
  'f.I:gehalt.hint': 'Einmalzahlungen bleiben unberücksichtigt; ein anteiliges 13. Monatsgehalt ist gegebenenfalls einzurechnen. Der eingetragene Wert ist maßgeblich für die Feststellung des Grenzsteuersatzes sowie für die Feststellung, ob die Beitragsbemessungsgrenzen überschritten werden.',
  'f.I:beitrag.label': 'Monatsbeitrag zur bAV, brutto',
  'f.I:beitrag.hint': 'Bruttoentgeltumwandlung gemäß § 1a BetrAVG. Ein Rechtsanspruch besteht ausschließlich bis zur Höhe von 4 vom Hundert der Beitragsbemessungsgrenze der Rentenversicherung; für den darüber hinausgehenden Betrag ist die Zustimmung des Arbeitgebers erforderlich.',
  'f.I:netto_ziel.label': 'Monatlicher Nettoaufwand (Belastung des verfügbaren Einkommens)',
  'f.I:netto_ziel.hint': 'Es handelt sich um den Betrag, um welchen sich das verfügbare Einkommen im ersten Jahr mindert — mithin um den tatsächlich aufgegebenen Konsum und damit um die maßgebliche Entscheidungsgröße im Sinne dieses Vergleichs. Der genannte Betrag wird in sämtlichen drei Gestaltungsvarianten angelegt; dies ist Voraussetzung für die Vergleichbarkeit. Er steht in eindeutigem Zusammenhang mit dem vorstehend genannten Bruttobeitrag: N(B) = B − Ersparnis Sozialversicherung − Steuerersparnis ist streng monoton wachsend und mithin umkehrbar. Eine geschlossene Umkehrung ist wegen der Knickstellen an den Beitragsbemessungsgrenzen und den Tarifeckwerten nicht möglich; es wird daher ein Verfahren mit 34 Intervallhalbierungen angewandt, das eine Genauigkeit unterhalb eines Zehntelcents gewährleistet.',
  'f.I:agzus.label': 'Zuschuss des Arbeitgebers, prozentual',
  'f.I:agzus.hint': 'Das gesetzliche Mindestmaß beträgt 15 vom Hundert (§ 1a Abs. 1a BetrAVG); von zahlreichen Arbeitgebern wird ein höherer Betrag geleistet. Die Gewinnschwelle gegenüber dem privaten Depot liegt näherungsweise dort, wo (1+z)·(1−0,211) ≈ 1 gilt, mithin bei z ≈ 26,7 vom Hundert; dies ist anhand der Sensitivitätskurve nachprüfbar. Im Berechnungsmodus „spitz" ist dieser Wert vielfach nicht erreichbar, da der Zuschuss zuvor die Sättigungsgrenze erreicht.',
  'f.I:agz_fix.label': 'Fester Zuschuss, zusätzlich',
  'f.I:agz_fix.hint': 'Betragsunabhängiger Festzuschuss aufgrund Tarifvertrags oder Betriebsvereinbarung — etwa bei der Deutschen Bahn sowie in zahlreichen weiteren Tarifwerken vorgesehen, dort zusätzlich zu den 15 vom Hundert gemäß § 1a Abs. 1a BetrAVG. Es handelt sich um eine arbeitgeberfinanzierte Zuwendung im Sinne des § 3 Nr. 63 EStG, welche den 8-%-Höchstbetrag sowie die 4-%-Beitragsfreiheit (§ 1 Abs. 1 S. 1 Nr. 9 SvEV) VORRANGIG belegt: die eigene Entgeltumwandlung wird insoweit verdrängt und verteuert sich entsprechend. Es handelt sich ökonomisch um einen Sockelbetrag, nicht um einen Hebel: die Grenzrendite des jeweils nächsten Beitragseuros wird hierdurch nicht verändert (∂²Ertrag/∂agz_fix ∂beitrag ≤ 0; eine Absenkung ist über den Verdrängungseffekt möglich), der Durchschnittswert wird hingegen erheblich angehoben. In der Sensitivitätskurve stellt sich dies näherungsweise als affiner Verlauf dar — bis zur Erschöpfung des 4-%- bzw. 8-%-Höchstbetrags, danach ist ein Knick zu verzeichnen.',
  'f.I:agz_fix_dyn.label': 'Dynamisierung des festen Zuschusses',
  'f.I:agz_fix_dyn.hint': 'Festbeträge sind üblicherweise nominal im Tarifvertrag ausgewiesen und werden lediglich im Rahmen von Tarifverhandlungen angepasst — die Voreinstellung lautet daher „nominal unverändert". Über einen Zeitraum von 27 Jahren verbleibt bei einer Inflationsrate von 2 vom Hundert hiervon der Faktor 1,02⁻²⁷ ≈ 0,59; sofern dies als zu ungünstig erachtet wird, ist auf „mit dem Gehalt" umzustellen, woraus sich ein realer Zuschuss mit der Wachstumsrate gsteig − infl ergibt.',
  'f.I:agz_fix_dyn.o0': 'nominal unverändert',
  'f.I:agz_fix_dyn.o1': 'entsprechend der Entgeltentwicklung',
  'f.I:agzus_sv.label': 'Berechnungsmodus des Zuschusses',
  'f.I:agzus_sv.hint': '„Spitz" entspricht dem Gesetzeswortlaut: Gemäß § 1a Abs. 1a BetrAVG wird der Zuschuss ausschließlich in dem Umfang geschuldet, in welchem der Arbeitgeber tatsächlich Sozialversicherungsbeiträge einspart. Liegt das Entgelt oberhalb beider Beitragsbemessungsgrenzen, wird nichts eingespart und mithin nichts geschuldet. Der Regler erreicht daher im Regelfall bei rund 21 vom Hundert seine Sättigung. „Voller Beitrag" beruht auf einer freiwilligen oder tarifvertraglichen Zusage, „sv-freier Anteil" entspricht der verbreiteten pauschalen Praxis. Vertrauensgrad der spitzen Berechnungsweise ca. 75 vom Hundert.',
  'f.I:agzus_sv.o0': 'auf den Gesamtbeitrag',
  'f.I:agzus_sv.o1': 'auf den beitragsfreien Anteil',
  'f.I:agzus_sv.o2': 'spitz berechnet',
  'f.I:dyn.label': 'Dynamisierung des Beitrags',
  'f.I:dyn.hint': 'Erfolgt eine Anpassung des Beitrags entsprechend der Gehaltssteigerung, verbleibt die Ausschöpfung des 8-%-Höchstbetrags über die Jahre annähernd konstant. Bei nominal unverändertem Beitrag mindert sich dessen realer Wert entsprechend der Inflationsrate — gleichermaßen mindert sich der Nettoaufwand, welcher den beiden übrigen Gestaltungsvarianten zum Vergleich zugrunde gelegt wird.',
  'f.I:dyn.o1': 'entsprechend der Entgeltentwicklung',
  'f.I:dyn.o0': 'nominal unverändert',
  'f.I:rendite.label': 'Bruttorendite ETF, jährlich',
  'f.I:rendite.hint': 'Vor Berücksichtigung von Kosten und Steuern. In sämtlichen drei Gestaltungsvarianten wird derselbe ETF zugrunde gelegt — hierdurch wird sichergestellt, dass ein Vergleich der Förderarchitekturen und nicht der Anlageentscheidungen erfolgt.',
  'f.I:alter.label': 'Lebensalter, gegenwärtig',
  'f.I:alter.hint': 'Ausgangspunkt der Ansparphase. Kalenderjahr 0 entspricht dem Jahr 2026.',
  'f.I:alter.unit': 'vollendete Lebensjahre',
  'f.I:rentbeg.label': 'Beginn der Auszahlungsphase',
  'f.I:rentbeg.hint': 'Beginn der Auszahlungsphase sämtlicher drei Gestaltungsvarianten. Eine Auszahlung aus dem Altersvorsorgedepot ist frühestens ab Vollendung des 65. Lebensjahres zulässig (Reform 2026).',
  'f.I:rentbeg.unit': 'vollendete Lebensjahre',
  'f.I:kv_ruhe.label': 'Krankenversicherungsverhältnis im Ruhestand',
  'f.I:kv_ruhe.hint': 'Die maßgebliche Einflussgröße. Im Rahmen der gesetzlichen Krankenversicherung gelten Betriebsrenten als Versorgungsbezüge und unterliegen dem vollen Beitragssatz (§§ 229, 250 SGB V); für die private Altersvorsorge gilt dies nicht. Diese Einstellung allein bewirkt eine Umkehr des Ergebnisses.',
  'f.I:kv_ruhe.o1': 'gesetzlich versichert',
  'f.I:kv_ruhe.o2': 'privat versichert',
  'f.I:auszform.label': 'Auszahlungsform bAV',
  'f.I:auszform.hint': 'Kapitalauszahlung: im Zuflussjahr in voller Höhe steuerpflichtig, Beiträge zur Krankenversicherung werden auf 120 Monate verteilt erhoben (§ 229 Abs. 1 S. 3 SGB V). Bei der Rentenzahlung wird der Bezug auf die verbleibende Lebenszeit gestreckt und ein Vielfaches des Kapitals unter demselben Freibetrag abgeschirmt. Im Modell ist ausschließlich die vollständige oder keine Kapitalisierung vorgesehen; eine Teilkapitalisierung der bAV wird nicht abgebildet.',
  'f.I:auszform.o1': 'Kapitalauszahlung',
  'f.I:auszform.o2': 'lebenslange Rentenzahlung',
  'f.I:teilkap.label': 'Altersvorsorgedepot: Einmalbetrag zu Beginn der Auszahlungsphase',
  'f.I:teilkap.hint': 'Bis zu 30 vom Hundert des angesparten Kapitals können zu Beginn der Auszahlungsphase als Einmalbetrag entnommen werden — in beiden Auszahlungsformen. Dies ist aus zweierlei Gründen mit Kosten verbunden: voller Progressionssatz im Zuflussjahr sowie im Anschluss lediglich Verzinsung nach dem Satz der Abgeltungsteuer. Der über den Jahreshöchstbetrag hinausgehende Betrag (nachfolgend „Sleeve" genannt) wird ohne Einmalbetrag verrentet; hierbei handelt es sich um eine Modellkonvention, nicht um eine Rechtsvorschrift.',
  'f.I:av_auszform.label': 'Altersvorsorgedepot: verbleibender Betrag',
  'f.I:av_auszform.hint': 'Regelung des Umgangs mit dem über den Einmalbetrag hinausgehenden Kapital — unabhängig von der vorstehend getroffenen Entscheidung zur bAV. Auszahlungsplan: das Kapital verbleibt angelegt und wird verzinst entnommen; die nicht geförderte Schicht wird mit dem hälftigen Unterschiedsbetrag der Besteuerung unterworfen. Lebenslange Rentenzahlung: das Kapital geht an den Anbieter über, im Gegenzug wird die nicht geförderte Schicht lediglich mit dem Ertragsanteil besteuert (§ 22 Nr. 5 S. 2 Buchst. a EStG, 17 vom Hundert ab Vollendung des 67. Lebensjahres, im vorliegenden Fall rund 26 vom Hundert). Die geförderte Schicht unterliegt in beiden Fällen der vollen nachgelagerten Besteuerung; hieran ändert sich nichts.',
  'f.I:av_auszform.o1': 'Auszahlungsplan (planmäßige Entnahme)',
  'f.I:av_auszform.o2': 'lebenslange Rentenzahlung',
  'f.I:agz_fix_min.label': 'Mindesteigenbeitrag als Voraussetzung des Festzuschusses',
  'f.I:agz_fix_min.hint': 'Bei sogenannten Matching-Modellen wird der Festbetrag an eine Mindest-Eigenleistung geknüpft („wer mindestens den Betrag X umwandelt, erhält den Betrag Y"). Der Wert 0 ist als bedingungslos zu verstehen — in diesem Fall wird der Zuschuss in jedem aktiven Jahr geleistet, auch bei einem Beitrag von null. Es wird auf Folgendes hingewiesen: Ein tatsächlich bedingungsloser Zuschuss stellte keinen Differenzeffekt der Umwandlungsentscheidung dar und würde sich zugunsten der bAV auswirken, obwohl er auch ohne Umwandlung geleistet würde. Es ist ausschließlich der Betrag einzutragen, welcher tatsächlich an die Teilnahme gebunden ist.',
  'f.I:rentfak_av.label': 'Rentenfaktor des Altersvorsorgedepots',
  'f.I:rentfak_av.hint': 'Ausschließlich bei Verrentung des Depots von Bedeutung. Voreingestellt entsprechend der bAV; ein Depotvertrag kommt ohne Versicherungsmantel aus und kann daher günstiger ausfallen — der aus dem konkreten Angebot ersichtliche Wert ist einzutragen. Bei einem Wert von 0 erfolgt keine Rentenzahlung.',
  'f.I:rentfak_av.unit': 'EUR je 10.000 EUR Kapital',
  'f.I:rentdyn_av.label': 'Dynamik der Depotrente, jährlich',
  'f.I:rentdyn_av.hint': 'Überschussbeteiligung beziehungsweise Fondsentwicklung während der Rentenphase des Depotvertrags.',
  'f.I:rentfak.label': 'Rentenfaktor der betrieblichen Altersversorgung',
  'f.I:rentfak.hint': 'Ausschließlich bei der Auszahlungsform „Rente" von Bedeutung. Eine Monatsrente von 26 € je 10.000 € entspricht einer Entnahmequote von etwa 3,1 vom Hundert. Der Wert ist dem Produktinformationsblatt zu entnehmen.',
  'f.I:rentfak.unit': 'EUR je 10.000 EUR Kapital',
  'f.I:rentdyn.label': 'Dynamik der bAV-Rente, jährlich',
  'f.I:rentdyn.hint': 'Überschussbeteiligung beziehungsweise Fondsentwicklung während der Rentenphase.',
  'f.I:fuenftel.label': 'Prüfung der Fünftelregelung',
  'f.I:fuenftel.hint': 'Die Anwendung des § 34 EStG ist bei planmäßiger Kapitalabfindung aus Verträgen im Sinne des § 3 Nr. 63 EStG gemäß BFH-Urteil X R 23/15 lediglich ausnahmsweise gegeben. Es wird von einer konservativen Betrachtung ausgegangen: nicht anwendbar.',
  'f.I:fuenftel.o0': 'nein (konservative Annahme)',
  'f.I:fuenftel.o1': 'zutreffend',
  'f.I:planende.label': 'Vergleichshorizont bis zum Lebensalter',
  'f.I:planende.hint': 'Auszahlungspläne laufen bis zu dem hier genannten Zeitpunkt. Lebenslange Rentenzahlungen werden über denselben Zeithorizont verglichen; darüber hinausgehende Zahlungen werden als Hinweis unter „Diagnose" ausgewiesen. Wer ein höheres Lebensalter erreicht, ist insoweit im Vorteil.',
  'f.I:planende.unit': 'vollendete Lebensjahre',
  'f.I:ausscheid.label': 'Ausscheiden aus dem Beschäftigungsverhältnis',
  'f.I:ausscheid.hint': 'Ab dem genannten Zeitpunkt entfallen Gehalt und Beiträge. Das Kapital wird bis zum Beginn der Auszahlungsphase weiter verzinst.',
  'f.I:ausscheid.unit': 'vollendete Lebensjahre',
  'f.I:tzalter.label': 'Teilzeitbeschäftigung ab Lebensalter',
  'f.I:tzalter.hint': 'Jeder Wert ab dem Beginn der Auszahlungsphase bedeutet: keine Teilzeitbeschäftigung. Voreingestellt ist der Wert 67.',
  'f.I:tzalter.unit': 'vollendete Lebensjahre',
  'f.I:tzfaktor.label': 'Beschäftigungsumfang (Teilzeitfaktor)',
  'f.I:tzfaktor.hint': 'Anteil am Vollzeitgehalt. Ein Wert von 60 vom Hundert entspricht einer 60-%-Stelle.',
  'f.I:gsteig.label': 'Gehalts- und Lohnsteigerung, jährlich',
  'f.I:gsteig.hint': 'Bewirkt zugleich die Fortschreibung von Beitragsbemessungsgrenzen, Bezugsgröße, Durchschnittsentgelt und aktuellem Rentenwert.',
  'f.I:stkl.label': 'Veranlagungsart',
  'f.I:stkl.hint': 'Maßgeblich ist die VERANLAGUNGSART, nicht die Lohnsteuerklasse: Die Lohnsteuerklasse steuert lediglich den unterjährigen Abzug, im Rahmen des Einkommensteuerbescheids erfolgt die Berechnung ohnehin unter Anwendung des Splittingverfahrens gemäß § 32a Abs. 5 EStG. Bei Wahl von „Zusammenveranlagung" ist zwingend das zu versteuernde Einkommen des Ehe- bzw. Lebenspartners einzutragen.',
  'f.I:stkl.o1': 'Einzelveranlagung',
  'f.I:stkl.o3': 'Zusammenveranlagung (Splitting)',
  'f.I:partner.label': 'Zu versteuerndes Einkommen des Ehe- bzw. Lebenspartners',
  'f.I:partner.hint': 'Ausschließlich bei Zusammenveranlagung von Bedeutung. Die Berechnung erfolgt nach der Formel 2·ESt((zvE + zvE_Partner)/2).',
  'f.I:kist.label': 'Hebesatz der Kirchensteuer',
  'f.I:kist.hint': '8 vom Hundert in den Bundesländern Bayern und Baden-Württemberg, im Übrigen 9 vom Hundert, bei Austritt aus der Religionsgemeinschaft 0. Wirkt sich zudem auf die Abgeltungsteuer aus: 0,25/(1+0,25k)·(1+0,055+k).',
  'f.I:tarifanp.label': 'Anpassung der Tarifeckwerte, jährlich',
  'f.I:tarifanp.hint': 'Der gesamte Einkommensteuertarif wird um den Faktor λ = (1+x)^t gestreckt: ESt = s·λ·T(zvE/s/λ). Dies entspricht in der Wirkung exakt einer proportionalen Verschiebung sämtlicher Eckwerte. Ein Wert von 0 vom Hundert zeigt die volle kalte Progression an.',
  'f.I:kinder.label': 'Anzahl der Kinder',
  'f.I:kinder.hint': 'Kinderzulage im Altersvorsorgedepot: 1 € je eingezahltem €, bis zu einem Höchstbetrag von 300 € je Kind.',
  'f.I:kind_jahre.label': 'Anzahl der Jahre mit Kinderzulage',
  'f.I:kind_jahre.hint': 'Die Kinderzulage ist an den Anspruch auf Kindergeld gebunden (§ 85 EStG) und erstreckt sich mithin nicht auf die gesamte Ansparphase.',
  'f.I:kind_jahre.unit': 'Kalenderjahre',
  'f.I:kinderlos.label': 'Kinderlosigkeit (Zuschlag zur Pflegeversicherung)',
  'f.I:kinderlos.hint': 'Zuschlag von 0,6 Prozentpunkten zur Pflegeversicherung, welcher ausschließlich vom Arbeitnehmer zu tragen ist (§ 55 Abs. 3 SGB XI).',
  'f.I:kinderlos.o0': 'nicht zutreffend',
  'f.I:kinderlos.o1': 'zutreffend',
  'f.I:k_bav.label': 'Kosten des bAV-Produkts, jährlich',
  'f.I:k_bav.hint': 'Versicherungsmantel zuzüglich Gesamtkostenquote (TER). Die Effektivkosten sind dem Produktinformationsblatt zu entnehmen — eine Schätzung ist zu vermeiden.',
  'f.I:k_av.label': 'Kosten des Altersvorsorgedepots, jährlich',
  'f.I:k_av.hint': 'Beim Standarddepot sind die Effektivkosten gesetzlich auf 1,0 vom Hundert jährlich begrenzt.',
  'f.I:k_priv.label': 'Kosten des privaten ETF-Depots, jährlich',
  'f.I:k_priv.hint': 'Reine Gesamtkostenquote (TER) eines breit gestreuten Welt-ETF.',
  'f.I:infl.label': 'Inflationsrate, jährlich',
  'f.I:infl.hint': 'Abzinsungssatz für sämtliche Angaben „in heutiger Kaufkraft". Die Rangfolge wird hierdurch kaum verändert, wohl aber sämtliche Beträge in ihrer Höhe.',
  'f.I:sonst_zve.label': 'Sonstiges zu versteuerndes Einkommen im Ruhestand',
  'f.I:sonst_zve.hint': 'Insbesondere der steuerpflichtige Teil der gesetzlichen Rente, ohne die hier verglichenen Produkte. Maßgeblich für die Feststellung des Grenzsteuersatzes in der Auszahlungsphase — und damit für die Tarifarbitrage t₀ − t₁.',
  'f.I:rente_br.label': 'Gesetzliche Bruttorente, jährlich',
  'f.I:rente_br.hint': 'Ausschließlich für die Feststellung der Beitragsbemessungsgrenze in der Krankenversicherung von Bedeutung: gesetzliche Rente und Versorgungsbezüge unterliegen gemeinsam EINER Beitragsbemessungsgrenze (§ 223 Abs. 3 SGB V).',
  'f.P:bbg_rv.label': 'Beitragsbemessungsgrenze Rentenversicherung (jährlich)',
  'f.P:bbg_rv.hint': 'SVBezGrV 2026 (BGBl. 2025 I Nr. 116), bundeseinheitlich geltend.',
  'f.P:bbg_kv.label': 'Beitragsbemessungsgrenze Kranken-/Pflegeversicherung',
  'f.P:bbg_kv.hint': 'Sozialversicherungsrechengrößenverordnung 2026; monatlich 5.812,50 EUR.',
  'f.P:bezug.label': 'Bezugsgröße im Sinne des § 18 Abs. 1 SGB IV (monatlich)',
  'f.P:bezug.hint': 'SVBezGrV 2026, 47.460 € jährlich. Ein Zwanzigstel dieses Betrags entspricht dem Freibetrag für Versorgungsbezüge in der Krankenversicherung (§ 226 Abs. 2 S. 2 SGB V).',
  'f.P:de_rv.label': 'Durchschnittsentgelt in der Rentenversicherung',
  'f.P:de_rv.hint': 'Anlage 1 zu SGB VI, Wert 2026 — Nenner für die Berechnung der Entgeltpunkte.',
  'f.P:rw.label': 'Aktueller Rentenwert (§ 68 SGB VI)',
  'f.P:rw.hint': 'Rentenwertbestimmungsverordnung 2026, geltend ab dem 1.7.2026: 42,52 € (+4,24 vom Hundert).',
  'f.P:rw.unit': 'EUR',
  'f.P:rv_an.label': 'Beitrag zur Rentenversicherung, Arbeitnehmeranteil',
  'f.P:rv_an.hint': '18,6 vom Hundert, je zur Hälfte.',
  'f.P:av_an.label': 'Beitrag zur Arbeitslosenversicherung, Arbeitnehmeranteil',
  'f.P:av_an.hint': '2,6 vom Hundert, je zur Hälfte.',
  'f.P:kv_allg.label': 'Allgemeiner Beitragssatz zur Krankenversicherung',
  'f.P:kv_allg.hint': 'Rechtsgrundlage: § 241 des Fünften Buches Sozialgesetzbuch (SGB V).',
  'f.P:kv_zus.label': 'Durchschnittlicher Zusatzbeitrag zur Krankenversicherung',
  'f.P:kv_zus.hint': 'Bekanntmachung des Bundesministeriums für Gesundheit; kassenindividuell abweichend — es ist der Satz der jeweils zuständigen Krankenkasse einzutragen.',
  'f.P:pv_ges.label': 'Gesamtbeitragssatz Pflegeversicherung',
  'f.P:pv_ges.hint': '§ 55 SGB XI. Abschläge ab dem zweiten Kind sind nicht Gegenstand der Modellierung.',
  'f.P:pv_an.label': 'Beitrag zur Pflegeversicherung, Arbeitnehmeranteil',
  'f.P:pv_an.hint': 'Im Freistaat Sachsen abweichend geregelt (2,3 vom Hundert).',
  'f.P:pv_kl.label': 'Zuschlag zur Pflegeversicherung für Kinderlose',
  'f.P:pv_kl.hint': '§ 55 Abs. 3 SGB XI, ausschließlich vom Arbeitnehmer zu tragen.',
  'f.P:gfb.label': 'Grundfreibetrag (Ende der Zone 1)',
  'f.P:gfb.hint': '§ 32a Abs. 1 EStG in der Fassung des Steuerfortentwicklungsgesetzes.',
  'f.P:e2.label': 'Ende der Zone 2',
  'f.P:e2.hint': 'Der Grenzsteuersatz steigt von 14 auf 23,97 vom Hundert.',
  'f.P:e3.label': 'Ende der Zone 3',
  'f.P:e3.hint': 'Der Grenzsteuersatz steigt von 23,97 auf 42 vom Hundert.',
  'f.P:e4.label': 'Beginn der Zone 5 (sogenannte Reichensteuer)',
  'f.P:e4.hint': 'Ab einem Betrag von 277.826 € gilt ein Satz von 45 vom Hundert.',
  'f.P:a2.label': 'Tarifkoeffizient a₂ (zweite Tarifzone)',
  'f.P:a2.hint': 'ESt = (a₂·y + b₂)·y, wobei y = (zvE − Grundfreibetrag)/10.000.',
  'f.P:b2.label': 'Tarifkoeffizient b₂ (zweite Tarifzone)',
  'f.P:a3.label': 'Tarifkoeffizient a₃ (dritte Tarifzone)',
  'f.P:a3.hint': 'ESt = (a₃·z + b₃)·z + c₃, wobei z = (zvE − 17.799)/10.000.',
  'f.P:b3.label': 'Tarifkoeffizient b₃ (dritte Tarifzone)',
  'f.P:c3.label': 'Tarifkonstante c₃ (dritte Tarifzone)',
  'f.P:c4.label': 'Tarifkonstante c₄ (vierte Tarifzone)',
  'f.P:c4.hint': 'Es gilt: festzusetzende Einkommensteuer = 0,42 · zu versteuerndes Einkommen − c₄.',
  'f.P:c5.label': 'Tarifkonstante c₅ (fünfte Tarifzone)',
  'f.P:c5.hint': 'Es gilt: festzusetzende Einkommensteuer = 0,45 · zu versteuerndes Einkommen − c₅.',
  'f.P:soli.label': 'Zuschlagsatz des Solidaritätszuschlags',
  'f.P:soli.hint': 'Rechtsgrundlage: Solidaritätszuschlaggesetz 1995 (SolzG 1995) in der jeweils geltenden Fassung.',
  'f.P:soli_fg.label': 'Freigrenze des Solidaritätszuschlags',
  'f.P:soli_fg.hint': '2026, Grundtarif, bezogen auf die festgesetzte Einkommensteuer; im Rahmen der Zusammenveranlagung verdoppelt. Ergänzend besteht eine Milderungszone.',
  'f.P:soli_mz.label': 'Milderungszone, Grenzbelastung',
  'f.P:soli_mz.hint': 'Rechtsgrundlage: § 3 Abs. 2a des Solidaritätszuschlaggesetzes 1995.',
  'f.P:an_pausch.label': 'Arbeitnehmer-Pauschbetrag (Werbungskosten)',
  'f.P:an_pausch.hint': 'Rechtsgrundlage: § 9a Satz 1 Nr. 1 Buchst. a des Einkommensteuergesetzes (EStG).',
  'f.P:sa_pausch.label': 'Pauschbetrag für Sonderausgaben',
  'f.P:sa_pausch.hint': 'Rechtsgrundlage: § 10c des Einkommensteuergesetzes (EStG).',
  'f.P:kapst.label': 'Steuersatz der Abgeltungsteuer',
  'f.P:kapst.hint': 'Rechtsgrundlage: § 32d Abs. 1 des Einkommensteuergesetzes (EStG).',
  'f.P:tfs.label': 'Teilfreistellung für Aktienfonds',
  'f.P:tfs.hint': '§ 20 Abs. 1 Nr. 3 in Verbindung mit § 20 InvStG, bei einem Aktienfondsanteil von über 50 vom Hundert.',
  'f.P:sparerpb.label': 'Sparer-Pauschbetrag (§ 20 Abs. 9 EStG)',
  'f.P:sparerpb.hint': '§ 20 Abs. 9 EStG; im Rahmen der Zusammenveranlagung verdoppelt. Absorbiert einen erheblichen Teil der Vorabpauschale — siehe hierzu die Wasserfalldarstellung.',
  'f.P:basiszins.label': 'Basiszins für die Vorabpauschale',
  'f.P:basiszins.hint': 'Schreiben des Bundesministeriums der Finanzen vom 13.01.2026, § 18 Abs. 4 InvStG (2025: 2,53 vom Hundert). Eine Festsetzung auf 0 bedeutet: keine Vorabpauschale.',
  'f.P:vp_faktor.label': 'Faktor zur Ermittlung des Basisertrags',
  'f.P:vp_faktor.hint': 'Rechtsgrundlage: § 18 Abs. 1 Satz 1 des Investmentsteuergesetzes (InvStG).',
  'f.P:st_frei_q.label': 'Steuerfrei gemäß § 3 Nr. 63 EStG (Anteil BBG-RV)',
  'f.P:st_frei_q.hint': '8 vom Hundert der Beitragsbemessungsgrenze Rentenversicherung entsprechen 8.112 € im Jahr 2026.',
  'f.P:sv_frei_q.label': 'Sozialversicherungsfrei (Anteil BBG-RV)',
  'f.P:sv_frei_q.hint': '§ 1 Abs. 1 S. 1 Nr. 9 SvEV; 4 vom Hundert entsprechen 4.056 € im Jahr 2026. Zugleich Grenze des Rechtsanspruchs gemäß § 1a BetrAVG.',
  'f.P:zul_g1.label': 'Zulage, Stufe 1 (je € Eigenbeitrag)',
  'f.P:zul_g1.hint': 'Altersvorsorgereformgesetz, in Kraft getreten im Mai 2026, Anwendung ab dem 1.1.2027.',
  'f.P:zul_s1.label': 'Grenzbetrag der Stufe 1',
  'f.P:zul_s1.hint': 'Bis zu einem Eigenbeitrag von 360 €: 50 Cent je €.',
  'f.P:zul_g2.label': 'Zulage, Stufe 2 (je € Eigenbeitrag)',
  'f.P:zul_g2.hint': 'Für den Betragsteil von 361 EUR bis 1.800 EUR werden 25 Cent je Euro gewährt.',
  'f.P:zul_s2.label': 'Grenzbetrag der Stufe 2',
  'f.P:zul_s2.hint': 'Höchstbetrag des geförderten Eigenbeitrags; hieraus ergibt sich eine maximale Grundzulage von 540 €.',
  'f.P:kind_zul.label': 'Kinderzulage je berücksichtigungsfähigem Kind',
  'f.P:kind_zul.hint': '1 € je eingezahltem €, bis zu einem Höchstbetrag von 300 € je Kind.',
  'f.P:av_max.label': 'Höchstbetrag der Einzahlung, jährlich',
  'f.P:av_max.hint': 'FAQ des Bundesministeriums der Finanzen zur Reform der geförderten privaten Altersvorsorge, Stand 05.05.2026. Der über den genannten Betrag hinausgehende Anteil wird einer Nebenschiene zugeführt, welche der Besteuerung eines privaten Depots unterliegt.',
  'f.P:av_sa_max.label': 'Höchstbetrag des Sonderausgabenabzugs gemäß § 10a EStG',
  'f.P:av_sa_max.hint': 'MODELLANNAHME, Vertrauensgrad ca. 70 vom Hundert. Eigenbeitrag bis zu 1.800 € zuzüglich Zulagen. Von diesem Wert hängt maßgeblich ab, ob ein Kind den Wert des Altersvorsorgedepots erhöht oder mindert.',
  'f.P:ertragsq.label': 'Ertragsanteil (Lebensalter 67)',
  'f.P:ertragsq.hint': '§ 22 Nr. 1 S. 3 Buchst. a Doppelbuchst. bb EStG, für nicht geförderte Rentenanteile.',
  'f.P:halb.label': 'Steuerpflichtiger Anteil des Unterschiedsbetrags',
  'f.P:halb.hint': '§ 20 Abs. 1 Nr. 6 S. 2 EStG entsprechend anzuwenden (Vertragslaufzeit über 12 Jahre, Auszahlung nach Vollendung des 62. Lebensjahres): hälftiger Unterschiedsbetrag. Vertrauensgrad ca. 80 vom Hundert.',

  /* ---------------- Rahmen, Fenstertitel, Kopf- und Fußbereich ---------------- */
  'app.title': 'Vergleichsrechnung Altersvorsorge',
  'app.meta': 'Vergleichende Gegenüberstellung der Vorsorgeformen betriebliche Altersvorsorge, Altersvorsorgedepot und privates ETF-Depot unter Zugrundelegung eines übereinstimmenden monatlichen Nettoaufwands im Sinne der nachstehenden Begriffsbestimmungen. Maßgeblicher Rechtsstand: 2026, vorbehaltlich zwischenzeitlich eingetretener, hier noch nicht berücksichtigter Rechtsänderungen.',
  'hdr.title': 'Vergleichsrechnung Altersvorsorge',
  'hdr.sub': 'Gegenüberstellung der betrieblichen Altersvorsorge, des Altersvorsorgedepots sowie des privaten ETF‑Depots &mdash; jeweils unter Zugrundelegung eines <b>übereinstimmenden monatlichen Nettoaufwands</b> sowie desselben Zielinvestments, sodass Abweichungen im Ergebnis ausschließlich auf die unterschiedliche steuerliche und beitragsrechtliche Behandlung zurückzuführen sind. Maßgeblicher Rechtsstand: 2026.',
  'win.header': 'Vergleichsrechnung Altersvorsorge',
  'win.result': 'Darstellung des Berechnungsergebnisses',
  'win.input': 'Von der Nutzerin bzw. dem Nutzer beizubringende Angaben',
  'win.chart': 'Grafische Aufbereitung der Berechnungsergebnisse',
  'win.extra': 'Ergänzende, nicht zwingend beizubringende Angaben',
  'win.calc': 'Darstellung des Rechenwegs nebst Rechtsgrundlagen',
  'win.share': 'Speicherung, Ausfuhr und Weitergabe der Eingabedaten',
  'win.min': 'Fenster verkleinern',
  'win.restore': 'Ursprüngliche Ansicht wiederherstellen',
  'win.n': function(p){ return 'Berechnungsfall Nr. ' + p.n; },
  'input.sub': 'Es wird darauf hingewiesen, dass die Berechnung nach Maßgabe der jeweils zuletzt vorgenommenen Eingabe unverzüglich, mithin ohne gesonderte Auslösung durch die Nutzerin bzw. den Nutzer, erneut durchgeführt wird. Zu jedem Eingabefeld wird über die Schaltfläche <span class="qm" style="cursor:default">?</span> eine Erläuterung bereitgehalten; auf deren Kenntnisnahme wird ausdrücklich hingewiesen.',
  'extra.sub': 'Für sämtliche nachfolgend aufgeführten Angaben sind sachgerechte, am Regelfall ausgerichtete Voreinstellungen hinterlegt worden. Von einer Änderung ist abzusehen, es sei denn, die individuellen Verhältnisse weichen von den vorgenannten Annahmen ab; in diesem Fall ist eine Anpassung vorzunehmen, wobei die Verantwortung für die Sachgerechtigkeit der geänderten Werte bei der Nutzerin bzw. dem Nutzer verbleibt.',
  'calc.sub': 'Die nachstehenden Ausführungen richten sich an diejenigen Nutzerinnen und Nutzer, welche die Herleitung der ausgewiesenen Beträge im Einzelnen nachzuvollziehen beabsichtigen; eine Kenntnisnahme ist zur Nutzung der Anwendung nicht erforderlich.',
  'share.sub': 'Es wird klarstellend darauf hingewiesen, dass die eingegebenen Daten ausschließlich in dem zur Nutzung eingesetzten Browser (<kbd>localStorage</kbd>) vorgehalten werden. Eine Übermittlung an einen Server, eine Verarbeitung durch Dritte sowie eine Erhebung von Nutzungsdaten zu Auswertungszwecken finden nicht statt und sind auch nicht vorgesehen.',
  'ui.share': 'Einheitlichen Ressourcenzeiger einschließlich der eingegebenen Werte in die Zwischenablage übernehmen',
  'ui.export': 'Eingegebene Werte in einer Datei niederlegen',
  'ui.import': 'Zuvor niedergelegte Werte aus einer Datei einlesen',
  'ui.reset': 'Sämtliche Angaben auf den Ausgangszustand zurückversetzen',
  'ui.pin.set': 'Gegenwärtigen Berechnungsstand als Referenzwert hinterlegen',
  'ui.pin.clear': 'Hinterlegten Referenzwert wieder aufheben',
  'ui.lang': 'Sprachfassung',
  'ui.lang.aria': 'Sprachauswahl',
  'ui.lang.partial': 'lediglich teilweise übersetzt',
  'ui.lang.partialNote': 'Diese Sprachfassung ist <b>teilweise übersetzt</b>: Oberfläche, Feldbezeichnungen, Tabellenüberschriften sowie Diagrammlegenden liegen in übersetzter Form vor. Die ausführlichen rechtlichen Erläuterungen — die Texte hinter dem Zeichen <span class="qm" style="cursor:default">?</span> an den Eingabefeldern, das abschließende Ergebnis sowie die Darstellung des Rechenwegs — erscheinen in deutscher Sprache. Die Rechtsgrundlagen (BetrAVG, EStG, SGB V) liegen unabhängig von der gewählten Sprachfassung ausschließlich in deutscher Sprache vor.',
  'sb.up': 'Zurück zum Ergebnis (Seitenanfang)',
  'footer.1': '<b>Es wird ausdrücklich darauf hingewiesen, dass mit der vorliegenden Anwendung weder eine steuerliche noch eine anlagebezogene Beratung im Sinne der einschlägigen berufsrechtlichen Vorschriften erbracht wird.</b> Ein Berechnungsmodell vermag eine auf den Einzelfall bezogene Beratung nicht zu ersetzen; ein Rechtsanspruch auf Richtigkeit der ausgewiesenen Beträge wird nicht begründet. Es wird ferner darauf hingewiesen, dass die Rechtslage 2026 betreffend die reformierte private Altersvorsorge in mehreren Punkten noch nicht abschließend geklärt ist. Diejenigen Annahmen, denen der geringste Vertrauensgrad beizumessen ist, sind unter „Rechenweg → Belastbarkeit der Annahmen" gesondert ausgewiesen und können dort im Einzelnen angepasst werden.',
  'footer.2': 'Der Rechenkern ist unverändert und ohne inhaltliche Abweichung aus dem Berechnungsmodell <span class="pill">bAV-DYNO_vs_Altersvorsorgedepot_vs_ETF.xlsx</span> übernommen worden. Eine Überprüfung anhand dreier Testfälle hat ergeben, dass Übereinstimmung bis zur Maschinengenauigkeit besteht; die größte festgestellte relative Abweichung beträgt 1,3·10<sup>&minus;14</sup> und ist mithin als vernachlässigbar einzustufen.',

  /* ---------------- Die drei Gestaltungsvarianten ---------------- */
  'opt.bav.name': 'Betriebliche Altersversorgung im Wege der Entgeltumwandlung',
  'opt.bav.short': 'bAV',
  'opt.bav.nom': 'die betriebliche Altersversorgung',
  'opt.bav.satz': 'Die betriebliche Altersversorgung',
  'opt.bav.gen': 'der betrieblichen Altersvorsorge',
  'opt.av.name': 'Altersvorsorgedepot nach dem Altersvorsorgedepotgesetz',
  'opt.av.short': 'AV-Depot',
  'opt.av.nom': 'das Altersvorsorgedepot im Sinne des Altersvorsorgedepotgesetzes',
  'opt.av.satz': 'Das Altersvorsorgedepot im Sinne des Altersvorsorgedepotgesetzes',
  'opt.av.gen': 'des Altersvorsorgedepots im Sinne des Altersvorsorgedepotgesetzes',
  'opt.priv.name': 'Privates Wertpapierdepot (Indexfonds)',
  'opt.priv.short': 'Privatdepot',
  'opt.priv.nom': 'das private Wertpapierdepot',
  'opt.priv.satz': 'Das private Wertpapierdepot',
  'opt.priv.gen': 'des privaten Wertpapierdepots',

  /* ---------------- Kennzahlen ---------------- */
  'metric.monat.label': 'Monatliche Leistung',
  'metric.monat.unit': 'EUR mtl.',
  'metric.monat.desc': 'Gleichbleibende monatliche Zahlung über die gesamte Auszahlungsphase mit demselben Wert, in heutiger Kaufkraft. Der Wert, welcher unmittelbar mit dem gegenwärtigen Nettoeinkommen verglichen werden kann.',
  'metric.ertrag.label': 'Netto-Ertrag, Barwert',
  'metric.ertrag.unit': 'EUR',
  'metric.ertrag.desc': 'Der Betrag, welcher über den eigenen Einsatz hinaus in heutiger Kaufkraft erwirtschaftet wird: Barwert sämtlicher Netto-Leistungen abzüglich Barwert des Nettoaufwands.',
  'metric.irr.label': 'Interner Zinsfuß der Zahlungsreihe',
  'metric.irr.unit': 'v.H. p.a.',
  'metric.irr.desc': 'Rendite bezogen auf den tatsächlich eingesetzten Nettobetrag, nominal. Unmittelbar mit der eingestellten Bruttorendite des ETF vergleichbar — die Differenz entspricht genau dem, was Förderung und Abgaben zusammengenommen kosten oder erbringen.',
  'metric.kapital.label': 'Kapital zu Beginn der Rentenzahlung',
  'metric.kapital.unit': 'EUR',
  'metric.kapital.desc': 'Vor Berücksichtigung von Steuern und Sozialabgaben, nominal. Ausdrücklich NICHT die maßgebliche Entscheidungsgröße: die bAV weist hier häufig einen Vorsprung auf, welcher sich im Rahmen der Auszahlung jedoch nicht bestätigt.',
  'metric.pa': ' jährlich',
  'metric.pp': ' Prozentpunkte',
  'metric.short.monat': 'mtl. Leistung',
  'metric.short.ertrag': 'Ertrag',
  'metric.short.irr': 'Zinsfuß',
  'metric.short.kapital': 'Kapitalstand',

  /* ---------------- Eingabefelder, Rahmenwerk ---------------- */
  'unit.pct': 'v.H.',
  'unit.eur': 'EUR',
  'unit.eurm': 'EUR mtl.',
  'ui.hintFor': function(p){ return 'Erläuterung zu: ' + p.label; },
  'ui.couple': '<span>⇅</span> Es handelt sich um zwei Darstellungsweisen ein und derselben Rechengröße. Wird eine der beiden Angaben geändert, so wird die jeweils andere von Amts wegen entsprechend nachgeführt; einer gesonderten Anpassung durch die Nutzerin bzw. den Nutzer bedarf es insoweit nicht.',
  'ui.cnt.legal': function(p){ return p.n + ' gesetzlich vorgegebene Rechengrößen'; },
  'ui.cnt.fields': function(p){ return p.n + ' Eingabefelder'; },
  'ui.legalNote': 'Bei den nachfolgend aufgeführten Größen handelt es sich um gesetzlich vorgegebene Rechengrößen; die jeweils einschlägige Rechtsgrundlage ist ausgewiesen. Von einer Änderung ist grundsätzlich abzusehen; sie kommt ausschließlich in Betracht, sofern die zugrunde liegende Rechtslage zwischenzeitlich geändert worden ist oder die im Einzelfall zuständige Krankenkasse abweichende Werte zugrunde legt.',
  'group.bav': 'Zuschuss und Auszahlungsformen im Einzelnen',
  'group.person': 'Zeitachse, Ausscheiden aus dem Beschäftigungsverhältnis, Teilzeit',
  'group.steuer': 'Steuer, Veranlagungsart, Kinder',
  'group.markt': 'Kosten und Geldentwertung',
  'group.ruhe': 'Auszahlungsphase (Ruhestand)',
  'group.p_sv': 'Rechengrößen der Sozialversicherung für das Kalenderjahr 2026',
  'group.p_est': 'Rechengrößen des Einkommensteuertarifs 2026 (§ 32a EStG)',
  'group.p_kap': 'Rechengrößen der Kapitalertrag- und Investmentbesteuerung',
  'group.p_bav': 'Rechengrößen: betriebliche und geförderte private Altersvorsorge',

  /* ---------------- Hinweise an den Eingabefeldern ---------------- */
  'n.beitrag.ueber8': function(p, f){
    return 'Der eingetragene Betrag überschreitet 8 vom Hundert der Beitragsbemessungsgrenze Rentenversicherung ('
      + f.eur(p.v8) + ' jährlich). Der übersteigende Anteil ist weder steuer- noch sozialversicherungsrechtlich '
      + 'begünstigt — er wird dem Versicherungsmantel zugeführt und unterliegt dort ausschließlich der '
      + 'Beitragspflicht in der Krankenversicherung.'; },
  'n.beitrag.ueber4': function(p, f){
    return 'Der eingetragene Betrag überschreitet 4 vom Hundert der Beitragsbemessungsgrenze Rentenversicherung ('
      + f.eur(p.v4) + ' jährlich). Bis zu diesem Betrag besteht ein Rechtsanspruch gemäß § 1a BetrAVG, für den '
      + 'darüber hinausgehenden Betrag ist die Zustimmung des Arbeitgebers erforderlich.'; },
  'n.agzus.gedeckelt': function(p, f){
    return 'Begrenzt auf ' + f.pct(p.quote, 1) + '. Die tatsächliche Ersparnis des Arbeitgebers beläuft sich '
      + 'auf ' + f.eur2(p.ersparnis) + ' jährlich — höhere Werte bewirken keine Änderung, solange der '
      + 'Berechnungsmodus „spitz berechnet" beibehalten wird.'; },
  'n.agz_fix.fliesstNicht': function(p, f){
    return 'Kein Zufluss: Der Monatsbeitrag in Höhe von ' + f.eur2(p.beitrag) + ' liegt unterhalb der '
      + 'Mindestschwelle von ' + f.eur2(p.schwelle) + ' (Eingabefeld unter „Ergänzende Angaben").'; },
  'n.agz_fix.ueber4': function(p, f){
    return 'Der feste Zuschuss überschreitet für sich genommen den 4-%-Höchstbetrag (' + f.eur(p.topf)
      + ' jährlich) um ' + f.eur(p.ueber) + '. Dieser Anteil wäre im vorliegenden Fall beitragspflichtiges '
      + 'Arbeitsentgelt — die hieraus resultierende zusätzliche Beitragslast wird im Berechnungsmodell NICHT '
      + 'gegengerechnet, wodurch die bAV insoweit begünstigt dargestellt wird.'; },
  'n.agz_fix.verdraengung': function(p, f){
    return 'Belegt vorrangig den 4-%-Höchstbetrag: Vom eigenen Beitrag verbleiben lediglich '
      + f.eur(p.rest) + ' sozialversicherungsfrei. Der Nettoaufwand erhöht sich hierdurch — der Zuschuss '
      + 'stellt gleichwohl eine unentgeltliche Zuwendung dar, es verschiebt sich lediglich die Grenze der '
      + 'Eigenförderung.'; },
  'n.agz_fix.ueber8': 'Gemeinsam mit dem Eigenbeitrag wird die Grenze von 8 vom Hundert der Beitragsbemessungsgrenze Rentenversicherung überschritten — der übersteigende Betrag ist weder steuer- noch beitragsrechtlich begünstigt.',
  'n.agz_fix_min.knapp': function(p, f){
    return 'Der eingetragene Wert liegt lediglich ' + f.eur2(p.d) + ' oberhalb der maßgeblichen Schwelle. Bei '
      + 'Unterschreitung entfällt der feste Zuschuss vollständig: die Grenzrendite des letzten '
      + 'Beitragseuros ist an dieser Stelle unendlich, die Kopplung zwischen Brutto- und Nettobetrag ist '
      + 'dort unstetig.'; },
  'n.agz_fix_min.verfehlt': function(p, f){
    return 'Die Schwelle wird nicht erreicht — ein um ' + f.eur2(p.fehlt) + ' höherer Monatsbetrag würde einen '
      + 'Zuschuss in Höhe von ' + f.eur2(p.zuschuss) + ' auslösen. Es handelt sich hierbei nahezu durchgängig '
      + 'um den ertragreichsten Euro innerhalb des gesamten Berechnungsmodells.'; },
  'n.teilkap.kosten': function(p, f){
    return 'Es entstehen ' + (p.gewinn ? 'keine Kosten, vielmehr: ' + p.dtxt : 'Kosten in Höhe von ' + p.dtxt + ' ' + p.unit)
      + ' im Vergleich zur ausschließlichen Verrentung. Grund hierfür: der Einmalbetrag unterliegt im '
      + 'Zuflussjahr der vollen Steuerpflicht (Grenzbelastung in diesem Zeitpunkt ' + f.pct(p.grenz, 1)
      + ') und wird im Anschluss lediglich zum Satz der Abgeltungsteuer statt zur Produktrendite verzinst.'; },
  'n.av_auszform.horizont': function(p, f){
    return 'Über den Vergleichshorizont hinaus wird aus dieser Rentenzahlung ein weiterer Betrag von ' + f.eur(p.rest)
      + ' geleistet, welcher an dieser Stelle NICHT berücksichtigt wird. Ein fest gewählter Zeithorizont führt '
      + 'systematisch zu einer Unterschätzung jeder lebenslangen Rentenzahlung — bei höherem erreichtem '
      + 'Lebensalter ergibt sich insoweit ein Vorteil.'; },

  /* ---------------- Ergebnisdarstellung ---------------- */
  'card.lead': 'an erster Stelle stehend',
  'card.unchanged': 'ohne Veränderung',
  'base.pinned': 'Δ gegenüber dem hinterlegten Referenzwert',
  'base.delta': function(p){ return 'Abweichung ggü. ' + p.desc; },
  'base.none': 'Es wird um Betätigung eines der vorstehend aufgeführten Regler gebeten. Die hieraus resultierende Änderung des Berechnungsergebnisses wird sodann an dieser Stelle als Differenzbetrag (Δ) ausgewiesen.',
  'base.desc.prev': 'dem vorhergehenden Sachstand',
  'base.desc.pinned': 'hinterlegter Referenzwert',
  'base.desc.change': function(p){ return 'vor Änderung des Wertes „' + p.label + '"'; },
  'rank.swap': function(p, f){
    return '<b>Die Kennzahlen führen zu einem unterschiedlichen Ergebnis.</b> Bezogen auf die monatliche Leistung liegt '
      + p.a + ' vor ' + p.b + ', bezogen auf den Barwert des Netto-Ertrags verhält es sich umgekehrt. '
      + 'Grund hierfür: der Barwert wird mit der Inflationsrate abgezinst (' + f.pct(p.infl, 2) + '), die '
      + 'monatliche Leistung hingegen mit dem Wiederanlagezins nach Steuern verrentet (' + f.pct(p.wiederanl, 2) + '). '
      + 'Je größer die Differenz zwischen beiden Werten ausfällt, desto vorteilhafter stellt sich eine frühzeitige '
      + 'Kapitalauszahlung dar. Welche Kennzahl maßgeblich ist, hängt davon ab, ob eine Anlage oder ein Verbrauch '
      + 'des Betrags beabsichtigt ist — im letzteren Fall ist der Wert im Feld „Kosten des privaten ETF-Depots" '
      + 'derart zu setzen, dass sich der Wiederanlagezins dem Wert null annähert.'; },
  'warn.unreachable': 'Der eingegebene monatliche Nettoaufwand ist nach Maßgabe der übrigen Angaben nicht erreichbar, da er das eingegebene Jahresbruttoeinkommen übersteigt. Der Berechnung ist daher von Amts wegen der höchstmögliche zulässige Wert zugrunde gelegt worden; einer gesonderten Bestätigung durch die Nutzerin bzw. den Nutzer bedurfte es hierfür nicht.',
  'warn.inactive': 'Nach den vorliegenden Angaben besteht im ersten Berechnungsjahr kein Beschäftigungsverhältnis mehr. Mangels Beschäftigungsverhältnisses findet eine Entgeltumwandlung im Sinne des § 1a BetrAVG nicht statt, sodass auch kein monatlicher Nettoaufwand vorliegt, aus welchem im Wege der Rückrechnung ein Bruttobeitrag ermittelt werden könnte. Es wird daher um Überprüfung der unter „Ausscheiden aus dem Beschäftigungsverhältnis" sowie unter „Lebensalter, gegenwärtig" getätigten Angaben gebeten.',

  /* ---------------- Ergebnisfeststellung ---------------- */
  'verdict.lead': function(p){
    return '<b>' + p.satz + '</b> weist mit ' + p.wert + ' den höchsten Wert auf — ' + p.d2 + ' mehr als ' + p.nom2
      + (p.nom3 ? ' sowie ' + p.d3 + ' mehr als ' + p.nom3 : '') + '.'; },
  'verdict.pp': function(p){ return p.v + ' Punkte v.H.'; },
  'verdict.top': function(p, f){
    return ' Den größten Einzelposten im Abstand ' + p.gen + ' gegenüber dem privaten ETF-Depot bildet der Punkt '
      + '„' + p.label + '" — und zwar ' + (p.pro ? 'zugunsten' : 'zulasten') + ' ' + p.gen
      + ', in Höhe von ' + f.eur(p.wert) + ' Barwert. Die vollständige Aufgliederung ist unter „Werttreiber" ausgewiesen.'; },
  'verdict.band': function(p, f){
    return '<span class="band">Zur Belastbarkeit dieses Ergebnisses: Bei einer Bruttorendite von ' + f.pct(p.lo, 1)
      + ' anstelle von ' + f.pct(p.mid, 1) + ' ergäbe sich der Wert ' + p.vlo + ', bei ' + f.pct(p.hi, 1) + ' der Wert '
      + p.vhi + ' — die Rangfolge '
      + (p.stabil ? 'bleibt innerhalb dieser Bandbreite unverändert.'
                  : '<b>kehrt sich innerhalb dieser Bandbreite um</b>, das vorstehende Ergebnis ist insoweit nicht belastbar.')
      + '</span>'; },
  'demo.text': '<b>Es wird darauf hingewiesen, dass es sich bei den gegenwärtig angezeigten Angaben ausschließlich um Beispielwerte handelt, welchen keinerlei Aussagekraft für den Einzelfall beizumessen ist.</b> Der Berechnung sind derzeit zugrunde gelegt: ein Lebensalter von 40 Jahren, ein Jahresbruttoeinkommen in Höhe von 75.000 €, eine monatliche Entgeltumwandlung in Höhe von 300 € sowie das Bestehen einer gesetzlichen Krankenversicherung. Es wird um Eintragung der individuellen Angaben unter „Von der Nutzerin bzw. dem Nutzer beizubringende Angaben" gebeten; der vorliegende Hinweis entfällt sodann selbsttätig, ohne dass es einer gesonderten Handlung bedürfte.',

  /* ---------------- Mitlaufende Leiste ---------------- */
  'sb.cap': function(p){ return p.label + ' (' + p.unit + ')' + (p.kaufkraft ? ', bezogen auf die Kaufkraft des laufenden Jahres' : ''); },
  'sb.aria': function(p){ return 'Berechnungsergebnis zu: ' + p.label; },

  /* ---------------- Grafische Darstellungen ---------------- */
  'tab.sens': 'Empfindlichkeit',
  'tab.wf': 'Bestimmungsgrößen',
  'tab.kap': 'Kapitalentwicklung',
  'tab.zer': 'Monatliche Aufgliederung',
  'chart.error': function(p){ return 'Die grafische Darstellung kann nicht erfolgen: ' + p.msg; },
  'sens.readout': 'Die gestrichelt dargestellte Linie kennzeichnet den gegenwärtig eingegebenen Wert. Die kreisförmigen Markierungen kennzeichnen diejenigen Stellen, an welchen die Kurve die Vergleichskurve des privaten Depots schneidet. Zur Anzeige der Einzelwerte ist mit dem Zeigegerät über der Kurve zu verweilen bzw. diese, sofern ein berührungsempfindliches Anzeigegerät verwendet wird, anzutippen.',
  'sens.legendY': function(p){ return 'Ordinate: ' + p.label + ' in ' + p.unit; },
  'sens.note': function(p){
    return 'Der zuletzt betätigte Regler wird über seine gesamte Bandbreite durchgerechnet — dies entspricht ' + p.n
      + ' vollständigen Modellrechnungen. Gegenwärtig ausgewählt: „' + p.label + '". '
      + 'Bei Betätigung eines anderen Reglers wird die dargestellte Kurve entsprechend angepasst.'; },
  'sens.noteNetto': function(p, f){
    return ' Hinweis: Der vorliegende Regler bewirkt zugleich eine Änderung des Nettoaufwands (im vorliegenden '
      + 'Fall zwischen ' + f.eur2(p.lo) + ' und ' + f.eur2(p.hi) + ' monatlich) und mithin des Betrags, welcher '
      + 'in sämtlichen drei Gestaltungsvarianten angelegt wird. Die drei Kurven sind daher bei jedem einzelnen '
      + 'x-Wert untereinander vergleichbar, das Niveau zwischen unterschiedlichen x-Werten hingegen nicht. Die '
      + 'Knickstellen befinden sich an den Beitragsbemessungsgrenzen (' + f.eur(p.bbgkv) + ' für Kranken-/'
      + 'Pflegeversicherung, ' + f.eur(p.bbgrv) + ' für Renten-/Arbeitslosenversicherung) sowie an den '
      + 'Tarifeckwerten.'; },
  'wf.up': 'erhöht den Ertrag',
  'wf.down': 'mindert den Ertrag',
  'wf.legend': 'Barwert des Netto-Ertrags, bezogen auf die Kaufkraft des laufenden Jahres',
  'wf.check': function(p, f){
    return 'Kontrollrechnung: ' + f.eur(p.start) + ' + ' + f.eur(p.summe) + ' = ' + f.eur(p.start + p.summe)
      + ' (Sollwert ' + f.eur(p.ende) + ', Abweichung ' + f.nf2(p.start + p.summe - p.ende) + ' €).'; },
  'wf.note': 'Die vorliegende Aufgliederung ist teleskopierend, sie geht daher rechnerisch exakt auf — sie ist jedoch <b>von der gewählten Reihenfolge abhängig</b>: die einzelnen Effekte sind nicht additiv trennbar, jeder Balken misst den jeweiligen Beitrag <i>unter Zugrundelegung</i> der vorangehenden. Zur Herleitung ist der jeweilige Balken anzutippen.',
  'wf.barinfo': function(p){ return 'Zu ' + p.label + ': ' + p.note; },
  'wfb.vp.label': 'Wegfall der Vorabpauschale (§ 18 InvStG)',
  'wfb.vp.note': 'Weder die bAV noch das Altersvorsorgedepot unterliegen der Vorabpauschale (§ 18 InvStG). Gemessen als Differenz zwischen privatem Depot ohne und mit Vorabpauschale. Der ausgewiesene Wert kann negativ sein: die Vorabpauschale wird zu erheblichen Teilen vom Sparer-Pauschbetrag erfasst, erhöht jedoch in voller Höhe die Kostenbasis — in diesem Fall ergibt sich für das private Depot per saldo ein Vorteil.',
  'wfb.zul.label': 'Zulagen sowie Abzug als Sonderausgaben (§ 10a EStG)',
  'wfb.zul.note': 'Fremdmittel gemäß dem neuen Zulagenmodell zuzüglich des Abzugs nach § 10a EStG. Gemessen durch Deaktivierung beider Förderwege.',
  'wfb.arch.label': 'Besteuerungsarchitektur (Restgröße)',
  'wfb.arch.note': 'Tarifarbitrage t₀ − t₁ sowie sämtliche verbleibenden Effekte. Als Residualgröße bestimmt, damit die Gesamtrechnung rechnerisch exakt aufgeht.',
  'wfb.agz.label': 'Zuschuss des Arbeitgebers',
  'wfb.agz.note': 'Fremdmittel — der einzige strukturelle Vorteil der bAV, welcher nicht aus dem Steuerrecht resultiert. Gemessen durch Deaktivierung des Zuschusses.',
  'wfb.tarif.label': 'Tarifarbitrage und Restgröße',
  'wfb.tarif.note': 'Grenzsteuersatz bei Einzahlung abzüglich Grenzsteuersatz bei Auszahlung, zuzüglich sämtlicher verbleibender Effekte. Als Residualgröße bestimmt, damit die Gesamtrechnung rechnerisch exakt aufgeht. Der Steueraufschub für sich genommen ist ohne wirtschaftlichen Wert: (1−t)(1+r)ⁿ = (1+r)ⁿ(1−t), die Multiplikation ist kommutativ.',
  'wfb.kvpv.label': 'Kranken-/Pflegeversicherung auf Versorgungsbezüge',
  'wfb.kvpv.note': '§§ 229, 250 SGB V: den vollen Beitragssatz trägt die Rentnerin bzw. der Rentner allein. Gemessen als Differenz zur Einstellung „privat krankenversichert im Ruhestand".',
  'wfb.ep.label': 'Minderung der Entgeltpunkte (§ 63 SGB VI)',
  'wfb.ep.note': 'Die Entgeltumwandlung mindert das beitragspflichtige Entgelt und mithin die gesetzliche Rente. Die Auswirkung wird netto berücksichtigt.',
  'kap.rentbeg': 'Beginn der Rentenzahlung',
  'kap.swap': 'Darstellung wechseln: Kapital / Rentenanspruch',
  'kap.legend': 'durchgezogene Linie: Gesamtbetrag &nbsp;·&nbsp; gestrichelte Linie: frei verfügbarer Betrag',
  'kap.readout': function(p, f){
    return 'Zu Beginn der Rentenzahlung gebunden: bAV ' + f.eur(p.bavGeb) + ' von ' + f.eur(p.bav)
      + ' · AV-Depot ' + f.eur(p.avGeb) + ' von ' + f.eur(p.av)
      + ' · privates Depot ' + f.eur(0) + ' von ' + f.eur(p.priv)
      + '.  Die äquivalente monatliche Leistung wird verbraucht, sodass jede Gestaltungsvariante zum Wert null führt.'; },
  'kap.note': function(p, f){
    return 'Kontostand im jeweiligen Produkt, in der Auszahlungsphase zuzüglich der netto wieder angelegten '
      + 'Auszahlungen (' + f.pct(p.wiederanl, 2) + ' nach Steuern) und abzüglich der äquivalenten monatlichen '
      + 'Leistung, welche tatsächlich verbraucht wird. Aus diesem Grund erreicht jede Gestaltungsvariante '
      + 'punktgenau den Wert null. Da der Verbrauch ausschließlich von der Wiederanlage abgeht und das '
      + 'Produktkapital im jeweiligen Produkt verbleibt, wo es mit der Produktrendite vor Steuern anwächst, '
      + 'verlaufen die Kurven gleichwohl nicht proportional zueinander. '
      + '— Die gestrichelte Linie zeigt den frei verfügbaren Anteil: die bAV ist bis zum Beginn der '
      + 'Rentenzahlung vollständig gebunden (§ 1b BetrAVG regelt die Unverfallbarkeit, nicht die Verfügbarkeit), '
      + 'beim Altersvorsorgedepot ist eine Entnahme vor Vollendung des 65. Lebensjahres förderschädlich, frei '
      + 'verfügbar ist ausschließlich der über den Jahreshöchstbetrag hinausgehende Anteil; das private Depot '
      + 'steht demgegenüber jederzeit zur freien Verfügung. Dies ist der einzige Gesichtspunkt, unter welchem '
      + 'eine Kapitalauszahlung vorteilhaft erscheint. '
      + (p.verrentet ? 'Da im vorliegenden Fall eine Verrentung des Depots erfolgt, geht auch dort das Kapital '
          + 'an den Anbieter über — die Kurve fällt entsprechend, ohne dass hierdurch ein Vermögensverlust '
          + 'eintritt. ' : '')
      + 'Es wird ausdrücklich darauf hingewiesen, dass die dargestellten Kurven ausschließlich das aus DIESER '
      + 'einen Entscheidung resultierende Vermögen abbilden, nicht das Gesamtvermögen der Nutzerin bzw. des '
      + 'Nutzers.'; },
  'zer.netto': 'Nettobetrag',
  'zer.tax': 'Steuern',
  'zer.kv': 'Kranken-/Pflegeversicherung',
  'zer.pension': 'Rentenleistung',
  'zer.legend': '<span><i style="background:#808080"></i>Steuer</span><span><i style="background:#800000"></i>Kranken-/Pflegeversicherung</span><span><i style="background:#800080"></i>entgangene gesetzliche Rente</span><span style="margin-left:auto">farbig hinterlegter Sockel = verbleibender Betrag</span>',
  'zer.readout': 'Sämtliche Beträge als gleichbleibende monatliche Leistung, in heutiger Kaufkraft. Da die Verrentung linear erfolgt, addieren sich die einzelnen Blöcke rechnerisch exakt.',
  'zer.note': function(p, f){
    return 'Der zugrunde gelegte Zeitraum ist für sämtliche drei Gestaltungsvarianten identisch. Eine '
      + 'Kapitalauszahlung wird nicht durch zwölf geteilt, sondern mit dem Wiederanlagezins nach Steuern ('
      + f.pct(p.wiederanl, 2) + ' jährlich) auf denselben Zeitraum verrentet. Wer den Kapitalbetrag verbraucht '
      + 'anstatt ihn anzulegen, ist insoweit im Nachteil.'; },

  /* ---------------- Darstellung des Rechenwegs ---------------- */
  'det.h.bav': 'bAV',
  'det.h.av': 'AV-Depot',
  'det.h.priv': 'Privatdepot',
  'det.h.kennzahl': 'Bezeichnung der Kennzahl',
  'det.h.wert': 'Festgestellter Wert',
  'det.erg.netto': 'Summe der Einzahlungen aus dem Nettoeinkommen (nominal)',
  'det.erg.fremd': 'Fremdmittel (Zuschuss bzw. Zulagen)',
  'det.erg.kapital': 'Kapital zu Beginn der Auszahlungsphase',
  'det.erg.brutto': 'Summe der Bruttoauszahlungen',
  'det.erg.steuer': 'davon Einkommen- bzw. Abgeltungsteuer',
  'det.erg.kvpv': 'hiervon Beiträge zur Kranken- und Pflegeversicherung',
  'det.erg.rentenverlust': 'Minderung der gesetzlichen Rente, kumuliert',
  'det.erg.nettoausz': 'Summe der Netto-Auszahlungen (nominal)',
  'det.erg.bwausz': 'Barwert der Netto-Auszahlungen (Auszahlungsphase insgesamt)',
  'det.erg.bwaufw': 'Barwert des Nettoaufwands (Ansparphase insgesamt)',
  'det.erg.ertrag': 'Barwert des Netto-Ertrags (Saldo)',
  'det.erg.verhaeltnis': 'Verhältnis von Ertrag zu Aufwand',
  'det.erg.irr': 'Interner Zinsfuß, nominal',
  'det.erg.vorsprung': 'Vorsprung gegenüber dem privaten Depot',
  'det.mon.brutto': 'Bruttoleistung je Monat',
  'det.mon.steuer': 'abzüglich Einkommen- bzw. Abgeltungsteuer',
  'det.mon.kvpv': 'abzüglich der Beiträge zur Kranken- und Pflegeversicherung',
  'det.mon.ep': 'abzüglich der Minderung der gesetzlichen Rente',
  'det.mon.netto': 'NETTO JE MONAT (heutige Kaufkraft)',
  'det.diag.beitrag': 'Bruttobeitrag zur bAV je Monat',
  'det.diag.aufwand': 'Nettoaufwand je Monat (erstes Jahr)',
  'det.diag.grenzsteuer': 'Grenzsteuersatz in der Ansparphase (erstes Kalenderjahr)',
  'det.diag.ersparnis': 'Ersparnisquote insgesamt (Steuer und Sozialversicherung), erstes Jahr',
  'det.diag.svAG': 'Tatsächliche Ersparnis des Arbeitgebers bei den Sozialversicherungsbeiträgen',
  'det.diag.svAN': 'Tatsächliche Ersparnis des Arbeitnehmers bei den Sozialversicherungsbeiträgen',
  'det.diag.ngef': 'Anteil der nicht begünstigten bAV-Beiträge (erstes Kalenderjahr)',
  'det.diag.aussch': 'Ausschöpfung des Rechtsanspruchs (4 vom Hundert der BBG-RV)',
  'det.diag.agzVar': 'hiervon Zuschuss des Arbeitgebers, prozentual (erstes Kalenderjahr)',
  'det.diag.agzFix': 'hiervon Zuschuss des Arbeitgebers, fester Betrag (erstes Kalenderjahr)',
  'det.diag.agzFixUeber4': 'fester Zuschuss oberhalb des 4-%-Höchstbetrags (nicht als Beitragslast erfasst)',
  'det.diag.vbMonat': 'Versorgungsbezug je Monat zu Beginn der Auszahlungsphase',
  'det.diag.freibetrag': 'Freibetrag für Versorgungsbezüge im selben Jahr',
  'det.diag.vbQuote': 'Verhältnis des Versorgungsbezugs zum Freibetrag',
  'det.diag.kapFreiKapital': 'beitragsfrei zulässiges Kapital im Fall der Kapitalauszahlung',
  'det.diag.kapFreiRente': 'beitragsfrei mögliches Kapital (lebenslange Rentenzahlung)',
  'det.diag.memoRest': 'HINWEIS: bAV-Rentenzahlungen nach Ablauf des Vergleichshorizonts',
  'det.diag.memoRestAv': 'HINWEIS: Depotrente nach Ablauf des Vergleichshorizonts',
  'det.diag.wiederanl': 'Wiederanlagezins nach Abzug der Steuern',
  'det.diag.kapstEff': 'Effektive Abgeltungsteuer einschließlich Solidaritätszuschlag/Kirchensteuer',
  'det.diag.bestAnteil': 'Besteuerungsanteil der gesetzlichen Rente (§ 22 Nr. 1 S. 3 EStG)',
  'det.anspar.h.jahr': 'Kalenderjahr',
  'det.anspar.h.brutto': 'Bruttoentgelt',
  'det.anspar.h.beitrag': 'Beitrag bAV',
  'det.anspar.h.agzVar': 'AG-Zuschuss v.H.',
  'det.anspar.h.agzFix': 'AG-Zuschuss fest',
  'det.anspar.h.sv': 'SV-Ersparnis',
  'det.anspar.h.st': 'Steuerersparnis',
  'det.anspar.h.netto': 'Nettoaufwand mtl.',
  'det.anspar.h.zul': 'Zulagen p.a.',
  'det.anspar.h.kbav': 'Kapitalstand bAV',
  'det.anspar.h.kav': 'Kapital AV-Depot',
  'det.anspar.h.kpriv': 'Kapital Privatdepot',
  'det.row.year': function(p){ return p.jahr + ' (Lebensalter ' + p.alter + ')'; },
  'det.ausz.h.jahr': 'Kalenderjahr',
  'det.ausz.h.bavBr': 'bAV, brutto',
  'det.ausz.h.kvpv': 'KV/PV',
  'det.ausz.h.steuer': 'Steuern',
  'det.ausz.h.mind': 'Minderung gesetzl. Rente',
  'det.ausz.h.bavNet': 'bAV, netto',
  'det.ausz.h.avBr': 'AV-Depot brutto',
  'det.ausz.h.avNet': 'AV-Depot netto',
  'det.ausz.h.privBr': 'Privatdepot brutto',
  'det.ausz.h.privNet': 'Privatdepot netto',
  'det.warn.lead': 'Die eingegebenen Werte liegen außerhalb des begünstigten Bereichs: ',
  'det.warn.aussch': 'Bei einer Ausschöpfung von über 100 vom Hundert besteht kein Rechtsanspruch auf Entgeltumwandlung mehr. ',
  'det.warn.ngef': 'Ein erheblicher Anteil der Beiträge ist weder steuer- noch sozialversicherungsrechtlich begünstigt — dieser Anteil wird dem Versicherungsmantel zugeführt, ohne dass dem eine Gegenleistung außer der Beitragspflicht in der Krankenversicherung gegenübersteht. ',
  'det.warn.vb': 'Der Versorgungsbezug übersteigt den Freibetrag erheblich; die Schutzwirkung des absoluten Freibetrags nimmt entsprechend 1/Kapital ab. ',
  'det.ann.intro': 'Die Rangfolge hängt von Rechtsfragen ab, welche im Jahr 2026 noch nicht sämtlich abschließend geklärt sind. Die in Klammern angegebenen Werte stellen subjektive Vertrauensgrade dar.',
  'det.ann.h.annahme': 'Zugrunde gelegte Annahme',
  'det.ann.h.vertrauen': 'Vertrauensgrad',
  'det.ann.h.anmerkung': 'Anmerkung bzw. Fundstelle',
  'det.ann.r1.a': 'Rechengrößen Sozialversicherung 2026, Tarif gemäß § 32a EStG 2026',
  'det.ann.r1.c': 'Sozialversicherungsrechengrößenverordnung 2026; Steuerfortentwicklungsgesetz',
  'det.ann.r2.a': 'Beitragspflicht zur Kranken-/Pflegeversicherung auf Versorgungsbezüge',
  'det.ann.r2.c': '§§ 229, 250 des Fünften Buches Sozialgesetzbuch',
  'det.ann.r3.a': 'Freibetrag gemäß § 226 Abs. 2 S. 2 SGB V (Krankenversicherung)',
  'det.ann.r3.c': 'insoweit unstreitig',
  'det.ann.r4.a': 'Freigrenze anstelle eines Freibetrags in der Pflegeversicherung',
  'det.ann.r4.c': 'häufigste Fehlerquelle in Ratgebertexten',
  'det.ann.r5.a': 'Beitragsfreiheit der Auszahlung aus dem Altersvorsorgedepot',
  'det.ann.r5.c': 'keine Versorgungsbezüge im Sinne des Gesetzes',
  'det.ann.r6.a': 'Hälftiger Unterschiedsbetrag für nicht geförderte Schichten',
  'det.ann.r6.c': '§ 22 Nr. 5 Satz 2 Buchst. b in Verbindung mit § 20 Abs. 1 Nr. 6 Satz 2 EStG',
  'det.ann.r7.a': 'Zuschuss ausschließlich bis zur tatsächlichen Ersparnis des Arbeitgebers',
  'det.ann.r7.c': 'nach abweichender Auffassung sind die 15 vom Hundert als reine Pauschale zu lesen',
  'det.ann.r8.a': 'Höchstbetrag für Sonderausgaben in Höhe von 2.340 EUR',
  'det.ann.r8.c': 'MODELLANNAHME. Entscheidend dafür, ob ein Kind den Wert des Altersvorsorgedepots erhöht oder mindert',
  'det.ann.r9.a': 'Pflichtversicherung in der Krankenversicherung der Rentner (KVdR) im Ruhestand unterstellt',
  'det.ann.r9.c': 'freiwillig Versicherte wurden nicht gesondert geprüft',
  'det.ann.notmodelled': '<b>Nicht Gegenstand der Modellierung:</b> Abschläge bei vorzeitigem Rentenbezug, Auswirkung der Entgeltumwandlung auf Kranken-, Arbeitslosen- und Elterngeld, Hinterbliebenenversorgung, Insolvenzsicherung (PSVaG), Portabilität bei Arbeitgeberwechsel, Kinderabschläge in der Pflegeversicherung, Günstigerprüfung gemäß § 32d Abs. 6 EStG, Pfändungs- und Grundsicherungsschutz, Langlebigkeitsrisiko über den Vergleichshorizont hinaus.',
  'det.prinzip': '<p>Ein Vergleich der jeweiligen <i>Bruttobeiträge</i> wäre unangemessen: Die Entgeltumwandlung erfolgt aus dem Bruttoeinkommen, das private Sparen hingegen aus dem Nettoeinkommen. Aus diesem Grund wird der <b>Nettoaufwand</b> gleichgesetzt:</p>'
    + '<p style="font-family:var(--mono);font-size:.82rem;background:var(--chip);padding:9px 11px;border-radius:9px">Nettoaufwand = Bruttobeitrag − Lohnsteuerersparnis − ersparter Arbeitnehmeranteil zur Sozialversicherung</p>'
    + '<p>Der genannte Betrag wird in sämtlichen drei Gestaltungsvarianten angelegt. Das verbleibende Ergebnis stellt einen Vergleich der jeweiligen <i>Förderarchitekturen</i> dar, nicht der Einzahlungshöhen.</p>'
    + '<p><b>Ein Steueraufschub ist für sich genommen ohne wirtschaftlichen Wert:</b> (1−t)·(1+r)ⁿ = (1+r)ⁿ·(1−t). Die Multiplikation ist kommutativ. Es verbleiben lediglich vier maßgebliche Werttreiber:</p>'
    + '<ol style="padding-left:1.2em;margin:.3em 0"><li>Tarifarbitrage t₀ − t₁</li>'
    + '<li>Fremdmittel — Arbeitgeberzuschuss bzw. Zulagen</li>'
    + '<li>steuerfreie Thesaurierung — keine Vorabpauschale</li>'
    + '<li>zusätzliche Abgaben, welche ausschließlich eine Gestaltungsvariante betreffen — Kranken-/Pflegeversicherung auf Versorgungsbezüge</li></ol>'
    + '<p>Der unter Punkt 4 genannte Aspekt stellt den maßgeblichen Nachteil der bAV dar, der unter Punkt 2 genannte Aspekt ihren einzigen strukturellen Vorteil. Die Rendite der bAV <b>fällt streng monoton mit steigender Beitragshöhe</b>, da der Freibetrag einen absoluten Betrag darstellt und dessen Schutzwirkung entsprechend 1/K abnimmt — ein inneres Optimum existiert nicht.</p>'
    + '<p>Bei Vorgabe des Nettoaufwands wird der Bruttobeitrag mittels Bisektionsverfahren zurückgerechnet: N(B) ist stetig und streng monoton wachsend (dN/dB = 1 − Grenzbeitragssatz zur Sozialversicherung − Grenzsteuersatz > 0); aufgrund der Knickstellen bei 4 und 8 vom Hundert der Beitragsbemessungsgrenze Rentenversicherung sowie an den Beitragsbemessungsgrenzen und Tarifeckwerten ist eine geschlossene Umkehrung jedoch nicht möglich. Das angewandte Verfahren mit 34 Intervallhalbierungen liefert eine Genauigkeit unterhalb eines Zehntelcents.</p>',
  'det.t.prinzip': 'Grundsatz des Vergleichs',
  'det.t.erg': 'Ergebnis im Einzelnen',
  'det.s.erg': 'Sämtliche drei Gestaltungsvarianten verursachen in der Ansparphase exakt denselben Betrag aus dem Nettoeinkommen.',
  'det.t.mon': 'Monatliche Leistung, aufgegliedert',
  'det.s.mon': 'Sämtliche Gestaltungsvarianten über denselben Zeitraum verrentet, in heutiger Kaufkraft. Da die Verrentung linear erfolgt, addieren sich die einzelnen Zeilen rechnerisch exakt.',
  'det.t.diag': 'Diagnostische Feststellungen',
  'det.s.diag': 'Ursache des Ergebnisses — sowie Angabe, an welcher Stelle die eingegebenen Werte außerhalb des begünstigten Bereichs liegen.',
  'det.t.anspar': 'Ansparphase, jahresweise Darstellung',
  'det.t.ausz': 'Auszahlungsphase, jahresweise Darstellung',
  'det.t.ann': 'Belastbarkeit der zugrunde gelegten Annahmen',

  /* ---------------- Speicherung und Weitergabe ---------------- */
  'msg.linkCopied': 'Der Verweis wurde kopiert. Personen, welche diesen aufrufen, erhalten Einsicht in exakt die vorliegenden Werte — eine Übertragung über einen Server erfolgt nicht.',
  'msg.linkFailed': 'Das Kopieren war nicht erfolgreich. Der Verweis steht nunmehr in der Adresszeile zur Verfügung.',
  'msg.loaded': 'Die Datei wurde eingelesen.',
  'msg.loadError': function(p){ return 'Die Datei konnte nicht eingelesen werden: ' + p.msg; },
  'msg.reset': 'Die Angaben wurden auf den Ausgangsfall zurückgesetzt.',

  /* ---------------- Anwendung als Progressive Web App ---------------- */
  'pwa.offline': '<b>Offlinefähigkeit gegeben.</b> Die Anwendung liegt nunmehr im Zwischenspeicher des Browsers vor und ist auch ohne bestehende Verbindung nutzbar. Zur Installation: bei Verwendung eines iPhone über „Teilen" → „Zum Home-Bildschirm", bei Verwendung von Android über das Menü → „App installieren".',
  'pwa.installAsk': '<b>Installation der Anwendung?</b> Im Fall einer Installation steht diese mit eigenem Symbol auf dem Startbildschirm zur Verfügung und ist offline nutzbar. ',
  'pwa.installBtn': 'Installation veranlassen',
  'pwa.installed': '<b>Die Installation wurde durchgeführt.</b> Die Anwendung ist nunmehr unter den übrigen installierten Anwendungen auffindbar.',
  'pwa.declined': 'Zur Kenntnis genommen — die Anwendung ist auch ohne Installation nutzbar, und zwar ebenfalls offline.',
  'pwa.file': '<b>Die Datei wurde unmittelbar geöffnet</b> (<kbd>file://</kbd>). Sämtliche Berechnungen werden durchgeführt, sämtliche Eingaben werden gespeichert. Es fehlen lediglich zwei Eigenschaften der Progressive Web App: ein Symbol auf dem Startbildschirm sowie ein Offline-Zwischenspeicher — Letzterer wäre im vorliegenden Fall ohnehin entbehrlich, da die Datei bereits auf dem Gerät vorliegt. Für die vollständige Funktionalität einer Progressive Web App wird empfohlen, den betreffenden Ordner auf einen HTTPS-fähigen Webspace zu übertragen und von dort aus zu öffnen.'
};
