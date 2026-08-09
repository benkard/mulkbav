/* =====================================================================
   Woordenboek Nederlands. Dezelfde sleutelverzameling als i18n.de.js; wat
   hier ontbreekt, valt terug op het Duitse woordenboek.
   De wetsverwijzingen blijven met opzet Duits: dat zijn de primaire bronnen
   en er bestaat geen officiële Nederlandse vertaling van. „bAV“ staat voor
   Entgeltumwandlung — pensioenopbouw uit brutoloon via de werkgever; het
   Nederlandse stelsel kent geen exacte tegenhanger, dus is de afkorting
   behouden en wordt zij bij eerste gebruik uitgelegd.
   ===================================================================== */
window.I18N_NL = {
  'f.I:gehalt.label': 'Brutojaarsalaris nu',
  'f.I:gehalt.hint': 'Zonder eenmalige uitkeringen, eventueel inclusief een naar rato berekende dertiende maand. Bepaalt uw marginale belastingtarief en of u boven de premiegrenzen van de sociale verzekeringen uitkomt.',
  'f.I:beitrag.label': 'Maandelijkse bAV-inleg bruto',
  'f.I:beitrag.hint': 'Uitruil van brutoloon volgens § 1a BetrAVG. U hebt slechts een wettelijk recht tot 4 % van de premiegrens van de pensioenverzekering (BBG-RV); daarboven is instemming van de werkgever nodig.',
  'f.I:netto_ziel.label': 'Maandelijkse netto-inspanning',
  'f.I:netto_ziel.hint': 'Het bedrag waarmee uw besteedbaar inkomen in het eerste jaar daalt — de werkelijk opgegeven consumptie en daarmee de economisch juiste beslisvariabele. Precies dit bedrag wordt in alle drie de opties belegd; dat is de voorwaarde voor een eerlijke vergelijking. Het hangt één-op-één samen met de bruto-inleg hierboven: N(B) = B − premiebesparing − belastingbesparing is strikt stijgend, dus inverteerbaar. Een gesloten vorm bestaat niet vanwege de knikken bij de premiegrenzen en de tariefschijfgrenzen; daarom 34 halveringen — nauwkeurigheid onder een tiende cent.',
  'f.I:agzus.label': 'Werkgeversbijdrage',
  'f.I:agzus.hint': 'Wettelijk minimum 15 % (§ 1a Abs. 1a BetrAVG); veel werkgevers betalen meer. Het omslagpunt ten opzichte van de privérekening ligt ruwweg waar (1+z)·(1−0,211) ≈ 1, dus z ≈ 26,7 % — na te gaan op de gevoeligheidskromme. In de modus „precies berekend“ is die waarde vaak onbereikbaar, omdat de bijdrage eerder verzadigt.',
  'f.I:agz_fix.label': 'Vaste bijdrage daarbovenop',
  'f.I:agz_fix.hint': 'Een vast bedrag onafhankelijk van uw eigen inleg, uit cao of ondernemingsovereenkomst — bij Deutsche Bahn en in veel cao’s gebruikelijk, daar bovenop de 15 % volgens § 1a Abs. 1a BetrAVG. Het is een door de werkgever gefinancierde toezegging volgens § 3 Nr. 63 EStG en vult de 8 %-ruimte en de 4 %-premievrijstelling (§ 1 Abs. 1 S. 1 Nr. 9 SvEV) MET VOORRANG: uw eigen uitruil wordt in zoverre verdrongen en duurder. Economisch is het een sokkel, geen hefboom: het marginale rendement van uw volgende ingelegde euro verandert er niet door (∂²opbrengst/∂agz_fix ∂inleg ≤ 0, via de verdringing kan het dat zelfs verlagen), maar het gemiddelde stijgt er sterk door. Op de gevoeligheidskromme verloopt het daarom bij benadering affien — totdat de 4 %- of 8 %-ruimte is uitgeput, waar de kromme knikt.',
  'f.I:agz_fix_dyn.label': 'Vaste bijdrage indexeren',
  'f.I:agz_fix_dyn.hint': 'Vaste bedragen staan meestal nominaal in de cao en worden alleen bij cao-rondes verhoogd — vandaar de standaardinstelling „nominaal constant“. Over 27 jaar bij 2 % inflatie blijft daarvan de factor 1,02⁻²⁷ ≈ 0,59 over; wie dat te pessimistisch vindt, schakelt over op „met het salaris“ en krijgt een reële bijdrage met groeivoet gsteig − infl.',
  'f.I:agz_fix_dyn.o0': 'nominaal constant',
  'f.I:agz_fix_dyn.o1': 'met het salaris',
  'f.I:agzus_sv.label': 'Bijdragemodus',
  'f.I:agzus_sv.hint': '„Precies“ is de wettekst: § 1a Abs. 1a BetrAVG verschuldigt de bijdrage alleen VOOR ZOVER de werkgever daadwerkelijk sociale premies bespaart. Ligt uw loon boven beide premiegrenzen, dan bespaart hij niets en is hij niets verschuldigd. Daarom verzadigt de schuifregelaar hierboven in het basisgeval rond 21 %. „Volledige inleg“ is een vrijwillige of cao-toezegging, „premievrije deel“ de wijdverbreide forfaitaire praktijk. Vertrouwen in de strikte lezing ca. 75 %.',
  'f.I:agzus_sv.o0': 'volledige inleg',
  'f.I:agzus_sv.o1': 'premievrije deel',
  'f.I:agzus_sv.o2': 'precies berekend',
  'f.I:dyn.label': 'Inleg indexeren',
  'f.I:dyn.hint': 'Stijgt de inleg mee met het salaris, dan blijft het gebruik van de 8 %-ruimte over de jaren ongeveer constant. Blijft hij nominaal constant, dan daalt zijn reële waarde met de inflatie — en daarmee ook de netto-inspanning die de twee andere opties ter vergelijking krijgen.',
  'f.I:dyn.o1': 'met het salaris',
  'f.I:dyn.o0': 'nominaal constant',
  'f.I:rendite.label': 'Brutorendement ETF p.j.',
  'f.I:rendite.hint': 'Vóór kosten, vóór belasting. In alle drie de opties dezelfde ETF — alleen zo vergelijkt u subsidiearchitecturen in plaats van beleggingsbeslissingen.',
  'f.I:alter.label': 'Leeftijd nu',
  'f.I:alter.hint': 'Startpunt van de opbouwfase. Kalenderjaar 0 = 2026.',
  'f.I:alter.unit': 'jaar',
  'f.I:rentbeg.label': 'Start van de uitkering',
  'f.I:rentbeg.hint': 'Start van de uitkeringsfase van alle drie de opties. De Altersvorsorgedepot-rekening keert op zijn vroegst vanaf 65 uit (hervorming 2026).',
  'f.I:rentbeg.unit': 'jaar',
  'f.I:kv_ruhe.label': 'Ziektekostenverzekering na pensionering',
  'f.I:kv_ruhe.hint': 'De doorslaggevende hefboom. In de wettelijke ziektekostenverzekering (GKV) gelden bedrijfspensioenen als Versorgungsbezüge en dragen zij het volle premietarief (§§ 229, 250 SGB V); privépensioen niet. Deze instelling alleen al draait de uitkomst om.',
  'f.I:kv_ruhe.o1': 'wettelijk',
  'f.I:kv_ruhe.o2': 'particulier',
  'f.I:auszform.label': 'bAV-uitkering',
  'f.I:auszform.hint': 'Kapitaal: volledig belast in het jaar van ontvangst, ziektekostenpremies gespreid over 120 maanden (§ 229 Abs. 1 S. 3 SGB V). Een lijfrente rekt de uitkering over de resterende levensduur en schermt daarom een veelvoud aan kapitaal af onder dezelfde vrijstelling. Het model kent alleen alles of niets; gedeeltelijke afkoop van de bAV is niet gemodelleerd.',
  'f.I:auszform.o1': 'kapitaal',
  'f.I:auszform.o2': 'levenslange lijfrente',
  'f.I:teilkap.label': 'Altersvorsorgedepot: bedrag ineens bij aanvang',
  'f.I:teilkap.hint': 'Tot 30 % van het opgebouwde kapitaal kan bij aanvang van de uitkeringsfase ineens worden opgenomen — in beide uitkeringsvormen. Dat kost u tweemaal: volle progressie in het jaar van ontvangst, en daarna alleen nog het rendement na bronbelasting. Het meerdere boven het jaarmaximum (de „sleeve“) wordt zonder bedrag ineens omgezet in lijfrente; dat is een modelconventie, geen rechtsregel.',
  'f.I:av_auszform.label': 'Altersvorsorgedepot: rest',
  'f.I:av_auszform.hint': 'Wat er gebeurt met het kapitaal boven het bedrag ineens — onafhankelijk van de bAV-keuze hierboven. Opnameplan: het geld blijft belegd en wordt met rendement onttrokken; de niet-gesubsidieerde laag wordt belast over het halve verschilbedrag. Levenslange lijfrente: het kapitaal gaat naar de aanbieder, in ruil daarvoor wordt de niet-gesubsidieerde laag alleen over het rentebestanddeel belast (§ 22 Nr. 5 S. 2 Buchst. a EStG, 17 % vanaf leeftijd 67 in plaats van hier circa 26 %). De gesubsidieerde laag is in beide gevallen volledig uitgesteld belast; daar verandert niets aan.',
  'f.I:av_auszform.o1': 'opnameplan',
  'f.I:av_auszform.o2': 'levenslange lijfrente',
  'f.I:agz_fix_min.label': 'Minimale eigen inleg voor de vaste bijdrage',
  'f.I:agz_fix_min.hint': 'Matching-regelingen koppelen het vaste bedrag aan een minimale eigen prestatie („wie ten minste X uitruilt, krijgt Y“). 0 betekent onvoorwaardelijk — dan vloeit de bijdrage in elk actief jaar, ook bij inleg nul. Let op de modelsemantiek: een werkelijk onvoorwaardelijke bijdrage zou geen differentieel effect van de uitruilbeslissing zijn en zou de bAV in deze vergelijking flatteren, hoewel zij ook zonder uitruil zou vloeien. Vul alleen in wat werkelijk van deelname afhangt.',
  'f.I:rentfak_av.label': 'Lijfrentefactor Altersvorsorgedepot',
  'f.I:rentfak_av.hint': 'Alleen bij omzetting van de rekening in lijfrente. Standaard gelijk aan die van de bAV; een rekeningcontract heeft geen verzekeringsmantel nodig en kan daarom goedkoper zijn — vul de waarde uit de concrete offerte in. Bij 0 is er geen lijfrente.',
  'f.I:rentfak_av.unit': '€ per 10.000 €',
  'f.I:rentdyn_av.label': 'Indexatie van de rekeninglijfrente p.j.',
  'f.I:rentdyn_av.hint': 'Winstdeling respectievelijk fondsontwikkeling in de uitkeringsfase van het rekeningcontract.',
  'f.I:rentfak.label': 'Lijfrentefactor bAV',
  'f.I:rentfak.hint': 'Alleen bij uitkeringsvorm „lijfrente“. 26 € maanduitkering per 10.000 € komt overeen met circa 3,1 % onttrekkingsvoet. Staat op het productinformatieblad.',
  'f.I:rentfak.unit': '€ per 10.000 €',
  'f.I:rentdyn.label': 'Indexatie van de bAV-lijfrente p.j.',
  'f.I:rentdyn.hint': 'Winstdeling respectievelijk fondsontwikkeling in de uitkeringsfase.',
  'f.I:fuenftel.label': 'Vijfdenregeling toetsen',
  'f.I:fuenftel.hint': '§ 34 EStG is bij een planmatige afkoopsom uit § 3 Nr. 63-contracten volgens BFH X R 23/15 slechts bij uitzondering van toepassing. Conservatief: nee.',
  'f.I:fuenftel.o0': 'nee (conservatief)',
  'f.I:fuenftel.o1': 'ja',
  'f.I:planende.label': 'Vergelijkingshorizon tot leeftijd',
  'f.I:planende.hint': 'Opnameplannen lopen tot hier. Levenslange lijfrentes worden over dezelfde horizon vergeleken; wat daarna nog vloeit staat als memo onder „Diagnose“. Wie oud wordt, wint daar.',
  'f.I:planende.unit': 'jaar',
  'f.I:ausscheid.label': 'Uitdiensttreding',
  'f.I:ausscheid.hint': 'Vanaf hier geen salaris en geen inleg meer. Het kapitaal rendeert door tot de start van de uitkering.',
  'f.I:ausscheid.unit': 'jaar',
  'f.I:tzalter.label': 'Deeltijd vanaf leeftijd',
  'f.I:tzalter.hint': 'Elke waarde vanaf de start van de uitkering betekent: geen deeltijd. Standaard staat er daarom 67.',
  'f.I:tzalter.unit': 'jaar',
  'f.I:tzfaktor.label': 'Deeltijdfactor',
  'f.I:tzfaktor.hint': 'Aandeel van het voltijdsalaris. 60 % = 60 %-aanstelling.',
  'f.I:gsteig.label': 'Salaris- en loonstijging p.j.',
  'f.I:gsteig.hint': 'Actualiseert ook de premiegrenzen, de Bezugsgröße, het gemiddelde loon en de rentewaarde.',
  'f.I:stkl.label': 'Aanslagvorm',
  'f.I:stkl.hint': 'Bepalend is de AANSLAGVORM, niet de loonbelastingklasse: de klasse stuurt alleen de inhouding gedurende het jaar, de jaaraanslag rekent hoe dan ook met splitsing volgens § 32a Abs. 5 EStG. Bij „samen“ beslist het belastbaar inkomen van de partner invullen.',
  'f.I:stkl.o1': 'afzonderlijk',
  'f.I:stkl.o3': 'samen (splitsing)',
  'f.I:partner.label': 'belastbaar inkomen partner',
  'f.I:partner.hint': 'Alleen bij gezamenlijke aanslag. Berekend wordt 2·IB((bi + bi_partner)/2).',
  'f.I:kist.label': 'Kerkbelastingtarief',
  'f.I:kist.hint': '8 % in Beieren en Baden-Württemberg, elders 9 %, 0 bij uittreding uit de kerk. Werkt ook door in de bronbelasting: 0,25/(1+0,25k)·(1+0,055+k).',
  'f.I:tarifanp.label': 'Aanpassing van de tariefschijven p.j.',
  'f.I:tarifanp.hint': 'Het hele tarief wordt met de factor λ = (1+x)^t opgerekt: IB = s·λ·T(bi/s/λ). Dat is exact gelijkwaardig aan een proportionele verschuiving van alle schijfgrenzen. 0 % toont volledige koude progressie.',
  'f.I:kinder.label': 'Aantal kinderen',
  'f.I:kinder.hint': 'Kindtoeslag in het Altersvorsorgedepot: 1 € per ingelegde € tot 300 € per kind.',
  'f.I:kind_jahre.label': 'Jaren met kindtoeslag',
  'f.I:kind_jahre.hint': 'De kindtoeslag hangt aan het recht op kinderbijslag (§ 85 EStG) en loopt dus niet over de hele opbouwfase.',
  'f.I:kind_jahre.unit': 'jaar',
  'f.I:kinderlos.label': 'Kinderloos (PV-toeslag)',
  'f.I:kinderlos.hint': '0,6 procentpunt toeslag op de langdurigezorgverzekering, uitsluitend door de werknemer te dragen (§ 55 Abs. 3 SGB XI).',
  'f.I:kinderlos.o0': 'nee',
  'f.I:kinderlos.o1': 'ja',
  'f.I:k_bav.label': 'Kosten bAV-product p.j.',
  'f.I:k_bav.hint': 'Verzekeringsmantel plus TER. De effectieve kosten staan op het productinformatieblad — daar opzoeken, niet schatten.',
  'f.I:k_av.label': 'Kosten Altersvorsorgedepot p.j.',
  'f.I:k_av.hint': 'Bij de standaardrekening zijn de effectieve kosten wettelijk gemaximeerd op 1,0 % p.j.',
  'f.I:k_priv.label': 'Kosten privé-ETF-rekening p.j.',
  'f.I:k_priv.hint': 'Zuivere TER van een brede wereld-ETF.',
  'f.I:infl.label': 'Inflatie p.j.',
  'f.I:infl.hint': 'Disconteringsvoet voor alle bedragen „in koopkracht van vandaag“. Verandert de rangorde nauwelijks, maar wel alle niveaus.',
  'f.I:sonst_zve.label': 'overig belastbaar inkomen na pensionering',
  'f.I:sonst_zve.hint': 'Vooral het belaste deel van het wettelijk pensioen, zonder de hier vergeleken producten. Bepaalt het marginale tarief in de uitkeringsfase — en daarmee de tariefarbitrage t₀ − t₁.',
  'f.I:rente_br.label': 'wettelijk brutopensioen p.j.',
  'f.I:rente_br.hint': 'Alleen voor het plafond in de ziektekostenverzekering: wettelijk pensioen en Versorgungsbezüge delen ÉÉN premiegrens (§ 223 Abs. 3 SGB V).',
  'f.P:bbg_rv.label': 'Premiegrens pensioenverzekering (jaarlijks)',
  'f.P:bbg_rv.hint': 'SVBezGrV 2026 (BGBl. 2025 I Nr. 116), landelijk uniform.',
  'f.P:bbg_kv.label': 'Premiegrens ziektekosten-/langdurigezorgverzekering',
  'f.P:bbg_kv.hint': 'SVBezGrV 2026; 5.812,50 € per maand.',
  'f.P:bezug.label': 'Bezugsgröße (maandelijks)',
  'f.P:bezug.hint': 'SVBezGrV 2026, 47.460 € per jaar. Een twintigste daarvan is de vrijstelling voor Versorgungsbezüge in de ziektekostenverzekering (§ 226 Abs. 2 S. 2 SGB V).',
  'f.P:de_rv.label': 'Gemiddeld loon RV',
  'f.P:de_rv.hint': 'Bijlage 1 bij SGB VI, waarde 2026 — noemer voor de pensioenpunten.',
  'f.P:rw.label': 'Actuele rentewaarde',
  'f.P:rw.hint': 'Rentenwertbestimmungsverordnung 2026, vanaf 1-7-2026: 42,52 € (+4,24 %).',
  'f.P:rw.unit': '€',
  'f.P:rv_an.label': 'RV-premie werknemersdeel',
  'f.P:rv_an.hint': '18,6 % ieder de helft.',
  'f.P:av_an.label': 'WW-premie werknemersdeel',
  'f.P:av_an.hint': '2,6 % ieder de helft.',
  'f.P:kv_allg.label': 'KV algemeen premietarief',
  'f.P:kv_allg.hint': '§ 241 SGB V.',
  'f.P:kv_zus.label': 'KV gemiddelde aanvullende premie',
  'f.P:kv_zus.hint': 'Bekendmaking van het BMG; per fonds afwijkend — het tarief van uw eigen fonds invullen.',
  'f.P:pv_ges.label': 'PV totaal premietarief',
  'f.P:pv_ges.hint': '§ 55 SGB XI. Kortingen vanaf het tweede kind zijn niet gemodelleerd.',
  'f.P:pv_an.label': 'PV werknemersdeel',
  'f.P:pv_an.hint': 'In Saksen afwijkend (2,3 %).',
  'f.P:pv_kl.label': 'PV toeslag voor kinderlozen',
  'f.P:pv_kl.hint': '§ 55 Abs. 3 SGB XI, uitsluitend door de werknemer.',
  'f.P:gfb.label': 'Belastingvrije voet (einde zone 1)',
  'f.P:gfb.hint': '§ 32a Abs. 1 EStG in de versie van het Steuerfortentwicklungsgesetz.',
  'f.P:e2.label': 'Einde zone 2',
  'f.P:e2.hint': 'Marginaal tarief stijgt van 14 % naar 23,97 %.',
  'f.P:e3.label': 'Einde zone 3',
  'f.P:e3.hint': 'Marginaal tarief stijgt van 23,97 % naar 42 %.',
  'f.P:e4.label': 'Begin zone 5 (toptarief)',
  'f.P:e4.hint': 'Vanaf 277.826 € geldt 45 %.',
  'f.P:a2.label': 'Coëfficiënt a₂',
  'f.P:a2.hint': 'IB = (a₂·y + b₂)·y met y = (bi − belastingvrije voet)/10.000.',
  'f.P:b2.label': 'Coëfficiënt b₂',
  'f.P:a3.label': 'Coëfficiënt a₃',
  'f.P:a3.hint': 'IB = (a₃·z + b₃)·z + c₃ met z = (bi − 17.799)/10.000.',
  'f.P:b3.label': 'Coëfficiënt b₃',
  'f.P:c3.label': 'Constante c₃',
  'f.P:c4.label': 'Constante c₄',
  'f.P:c4.hint': 'IB = 0,42·bi − c₄.',
  'f.P:c5.label': 'Constante c₅',
  'f.P:c5.hint': 'IB = 0,45·bi − c₅.',
  'f.P:soli.label': 'Solidariteitstoeslag',
  'f.P:soli.hint': 'SolzG 1995.',
  'f.P:soli_fg.label': 'Vrijstellingsgrens soli',
  'f.P:soli_fg.hint': '2026, basistarief, betrokken op de vastgestelde inkomstenbelasting; bij splitsing dubbel. Daarnaast een afbouwzone.',
  'f.P:soli_mz.label': 'Afbouwzone marginale druk',
  'f.P:soli_mz.hint': '§ 3 Abs. 2a SolzG.',
  'f.P:an_pausch.label': 'Forfait werknemerskosten',
  'f.P:an_pausch.hint': '§ 9a S. 1 Nr. 1a EStG.',
  'f.P:sa_pausch.label': 'Forfait bijzondere uitgaven',
  'f.P:sa_pausch.hint': '§ 10c EStG.',
  'f.P:kapst.label': 'Bronbelastingtarief',
  'f.P:kapst.hint': '§ 32d Abs. 1 EStG.',
  'f.P:tfs.label': 'Gedeeltelijke vrijstelling aandelenfondsen',
  'f.P:tfs.hint': '§ 20 Abs. 1 Nr. 3 juncto § 20 InvStG, aandelenaandeel boven 50 %.',
  'f.P:sparerpb.label': 'Spaarforfait',
  'f.P:sparerpb.hint': '§ 20 Abs. 9 EStG; bij splitsing verdubbeld. Absorbeert een groot deel van de Vorabpauschale — zie waterval.',
  'f.P:basiszins.label': 'Basisrente Vorabpauschale',
  'f.P:basiszins.hint': 'BMF-brief van 13-01-2026, § 18 Abs. 4 InvStG (2025: 2,53 %). Op 0 zetten betekent: geen Vorabpauschale.',
  'f.P:vp_faktor.label': 'Factor voor de basisopbrengst',
  'f.P:vp_faktor.hint': '§ 18 Abs. 1 S. 1 InvStG.',
  'f.P:st_frei_q.label': 'belastingvrij § 3 Nr. 63 (aandeel BBG-RV)',
  'f.P:st_frei_q.hint': '8 % van de BBG-RV = 8.112 € in 2026.',
  'f.P:sv_frei_q.label': 'premievrij (aandeel BBG-RV)',
  'f.P:sv_frei_q.hint': '§ 1 Abs. 1 S. 1 Nr. 9 SvEV; 4 % = 4.056 € in 2026. Tevens de grens van het wettelijk recht volgens § 1a BetrAVG.',
  'f.P:zul_g1.label': 'Toeslag trap 1 (per € eigen inleg)',
  'f.P:zul_g1.hint': 'Altersvorsorgereformgesetz, in werking sinds mei 2026, toepassing vanaf 1-1-2027.',
  'f.P:zul_s1.label': 'Grens trap 1',
  'f.P:zul_s1.hint': 'Tot 360 € eigen inleg: 50 cent per €.',
  'f.P:zul_g2.label': 'Toeslag trap 2 (per € eigen inleg)',
  'f.P:zul_g2.hint': 'Van 361 tot 1.800 €: 25 cent per €.',
  'f.P:zul_s2.label': 'Grens trap 2',
  'f.P:zul_s2.hint': 'Maximum gesubsidieerde eigen inleg; levert een maximale basistoeslag van 540 € op.',
  'f.P:kind_zul.label': 'Kindtoeslag per kind',
  'f.P:kind_zul.hint': '1 € per ingelegde € tot 300 € per kind.',
  'f.P:av_max.label': 'Maximale inleg p.j.',
  'f.P:av_max.hint': 'BMF-FAQ over de hervorming van het gesubsidieerde privépensioen, stand 05-05-2026. Wat daarboven ligt, loopt in een nevenspoor dat als een privérekening wordt belast.',
  'f.P:av_sa_max.label': 'Maximum aftrek bijzondere uitgaven § 10a',
  'f.P:av_sa_max.hint': 'MODELAANNAME, vertrouwen ca. 70 %. Eigen inleg tot 1.800 € plus toeslagen. Deze ene waarde beslist of een kind de waarde van het AV-depot verhoogt of verlaagt.',
  'f.P:ertragsq.label': 'Rentebestanddeel (leeftijd 67)',
  'f.P:ertragsq.hint': '§ 22 Nr. 1 S. 3 Buchst. a Doppelbuchst. bb EStG, voor niet-gesubsidieerde lijfrentedelen.',
  'f.P:halb.label': 'belast aandeel van het verschilbedrag',
  'f.P:halb.hint': '§ 20 Abs. 1 Nr. 6 S. 2 EStG naar analogie (contract langer dan 12 jaar, uitkering na 62): half verschilbedrag. Vertrouwen ca. 80 %.',

  /* ---------------- Kader, venstertitels, kop en voet ---------------- */
  'app.title': 'Pensioenvergelijking',
  'app.meta': 'Bedrijfspensioen via salarisuitruil, Altersvorsorgedepot en privé-ETF-rekening vergelijken bij gelijke netto-inspanning. Rechtstoestand 2026.',
  'hdr.title': 'Pensioen&#8209;vergelijking',
  'hdr.sub': 'Bedrijfspensioen via salarisuitruil, Altersvorsorgedepot en privé&#8209;ETF&#8209;rekening &mdash; bij <b>gelijke netto-inspanning</b> en met dezelfde ETF. Rechtstoestand 2026.',
  'win.header': 'Pensioenvergelijking',
  'win.result': 'Uitkomst',
  'win.input': 'Uw gegevens',
  'win.chart': 'Grafieken',
  'win.extra': 'Meer gegevens',
  'win.calc': 'Berekening',
  'win.share': 'Opslaan en delen',
  'win.min': 'Minimaliseren',
  'win.restore': 'Herstellen',
  'win.n': function(p){ return 'Venster ' + p.n; },
  'input.sub': 'De cijfers rekenen zich bij elke wijziging meteen opnieuw uit. Met <span class="qm" style="cursor:default">?</span> legt elk veld zichzelf uit.',
  'extra.sub': 'Alles hier heeft zinnige standaardwaarden. Alleen aankomen als het op u van toepassing is.',
  'calc.sub': 'Voor wie het wil narekenen.',
  'share.sub': 'Uw invoer staat uitsluitend in deze browser (<kbd>localStorage</kbd>). Er wordt niets verzonden, er is geen server en er zijn geen trackers.',
  'ui.share': 'Link met mijn cijfers kopiëren',
  'ui.export': 'Als bestand opslaan',
  'ui.import': 'Bestand laden',
  'ui.reset': 'Alles terugzetten',
  'ui.pin.set': 'Als referentie onthouden',
  'ui.pin.clear': 'Referentie loslaten',
  'ui.lang': 'Taal',
  'ui.lang.aria': 'Taal kiezen',
  'ui.lang.partial': 'slechts gedeeltelijk vertaald',
  'ui.lang.partialNote': 'Deze taal is <b>gedeeltelijk vertaald</b>: interface, veldnamen, tabelkoppen en grafieklegenda’s zijn er. De lange juridische toelichtingen — de <span class="qm" style="cursor:default">?</span>-teksten bij de velden, de conclusie en de berekening — verschijnen in het Duits. De wetsverwijzingen (BetrAVG, EStG, SGB V) zijn in elke taal Duits: officieel bestaan ze niet anders.',
  'sb.up': 'Omhoog naar de uitkomst',
  'footer.1': '<b>Geen fiscaal of beleggingsadvies.</b> Een model is geen contract. De rechtstoestand 2026 rond het hervormde privépensioen is op meerdere punten nog niet definitief opgehelderd; de aannames met het laagste vertrouwen staan onder „Berekening → Houdbaarheid van de aannames“ en zijn daar ook aan te passen.',
  'footer.2': 'Rekenkern één op één overgezet uit het Excel-model <span class="pill">bAV-DYNO_vs_Altersvorsorgedepot_vs_ETF.xlsx</span> en tegen drie testgevallen op machineprecisie getoetst (grootste relatieve afwijking 1,3·10<sup>&minus;14</sup>).',

  /* ---------------- De drie opties ---------------- */
  'opt.bav.name': 'bAV (salarisuitruil)',
  'opt.bav.short': 'bAV',
  'opt.bav.nom': 'het bedrijfspensioen',
  'opt.bav.satz': 'Het bedrijfspensioen',
  'opt.bav.gen': 'van de bAV',
  'opt.av.name': 'Altersvorsorgedepot',
  'opt.av.short': 'AV-depot',
  'opt.av.nom': 'het Altersvorsorgedepot',
  'opt.av.satz': 'Het Altersvorsorgedepot',
  'opt.av.gen': 'van het Altersvorsorgedepot',
  'opt.priv.name': 'privé-ETF-rekening',
  'opt.priv.short': 'privé',
  'opt.priv.nom': 'de privé-ETF-rekening',
  'opt.priv.satz': 'De privé-ETF-rekening',
  'opt.priv.gen': 'van de privé-ETF-rekening',

  /* ---------------- Kengetallen ---------------- */
  'metric.monat.label': 'Maanduitkering',
  'metric.monat.unit': '€/maand',
  'metric.monat.desc': 'Constante maandbetaling over de hele uitkeringsfase met dezelfde waarde, in koopkracht van vandaag. Het enige getal dat zich rechtstreeks met uw huidige netto-inkomen laat vergelijken.',
  'metric.ertrag.label': 'Netto-opbrengst (contante waarde)',
  'metric.ertrag.unit': '€',
  'metric.ertrag.desc': 'Wat de optie in koopkracht van vandaag boven de eigen inzet oplevert: contante waarde van alle netto-uitkeringen minus contante waarde van de netto-inspanning.',
  'metric.irr.label': 'Interne rentevoet',
  'metric.irr.unit': '% p.j.',
  'metric.irr.desc': 'Rendement op het werkelijk ingezette nettobedrag, nominaal. Rechtstreeks vergelijkbaar met het ingestelde brutorendement van de ETF — het verschil is precies wat subsidie en heffingen samen kosten of opleveren.',
  'metric.kapital.label': 'Kapitaal bij pensioeningang',
  'metric.kapital.unit': '€',
  'metric.kapital.desc': 'Vóór belasting en vóór sociale premies, nominaal. Bewust NIET de beslisgrootheid: de bAV leidt hier vaak, maar verliest in de uitkering.',
  'metric.pa': ' p.j.',
  'metric.pp': ' pp.',
  'metric.short.monat': 'Maand',
  'metric.short.ertrag': 'Opbrengst',
  'metric.short.irr': 'IRR',
  'metric.short.kapital': 'Kapitaal',

  /* ---------------- Invoervelden, kader ---------------- */
  'unit.pct': '%',
  'unit.eur': '€',
  'unit.eurm': '€/maand',
  'ui.hintFor': function(p){ return 'Toelichting bij: ' + p.label; },
  'ui.couple': '<span>⇅</span> Twee blikken op dezelfde grootheid. Wijzigt u de ene, dan volgt de andere.',
  'ui.cnt.legal': function(p){ return p.n + ' rekengrootheden'; },
  'ui.cnt.fields': function(p){ return p.n + ' velden'; },
  'ui.legalNote': 'Wettelijke grootheden met vindplaats. Alleen wijzigen als het recht is veranderd of uw fonds afwijkt.',
  'group.bav': 'Werkgeversbijdrage en uitkeringsvormen in detail',
  'group.person': 'Tijdlijn, uitdiensttreding, deeltijd',
  'group.steuer': 'Belasting, aanslag, kinderen',
  'group.markt': 'Kosten en inflatie',
  'group.ruhe': 'Pensionering',
  'group.p_sv': 'Rekengrootheden: sociale verzekeringen 2026',
  'group.p_est': 'Rekengrootheden: inkomstenbelastingtarief 2026 (§ 32a EStG)',
  'group.p_kap': 'Rekengrootheden: vermogensrendements- en beleggingsfondsbelasting',
  'group.p_bav': 'Rekengrootheden: bedrijfs- en gesubsidieerd privépensioen',

  /* ---------------- Meelopende notities bij de velden ---------------- */
  'n.beitrag.ueber8': function(p, f){
    return 'Boven 8 % van de premiegrens RV (' + f.eur(p.v8) + ' per jaar). Het deel daarboven is '
      + 'noch fiscaal noch sociaalrechtelijk begunstigd — het verdwijnt in de verzekeringsmantel en '
      + 'haalt daar alleen de premieplicht in de ziektekostenverzekering op.'; },
  'n.beitrag.ueber4': function(p, f){
    return 'Boven 4 % van de premiegrens RV (' + f.eur(p.v4) + ' per jaar). Tot hier hebt u '
      + 'een wettelijk recht volgens § 1a BetrAVG, daarboven is instemming van de werkgever nodig.'; },
  'n.agzus.gedeckelt': function(p, f){
    return 'Afgetopt op ' + f.pct(p.quote, 1) + '. De werkgever bespaart in werkelijkheid maar '
      + f.eur2(p.ersparnis) + ' per jaar — hogere waarden veranderen hier niets zolang de bijdragemodus '
      + '„precies berekend“ blijft.'; },
  'n.agz_fix.fliesstNicht': function(p, f){
    return 'Vloeit niet: uw maandinleg van ' + f.eur2(p.beitrag) + ' ligt onder de '
      + 'minimumdrempel van ' + f.eur2(p.schwelle) + ' (veld onder „Meer gegevens“).'; },
  'n.agz_fix.ueber4': function(p, f){
    return 'De vaste bijdrage alleen al overschrijdt de 4 %-ruimte (' + f.eur(p.topf)
      + ' per jaar) met ' + f.eur(p.ueber) + '. Dat deel zou bij u premieplichtig '
      + 'loon zijn — het model verrekent de extra premielast NIET en '
      + 'overschat de bAV in zoverre.'; },
  'n.agz_fix.verdraengung': function(p, f){
    return 'Vult de 4 %-ruimte met voorrang: van uw eigen inleg blijft nog maar '
      + f.eur(p.rest) + ' premievrij. Uw netto-inspanning stijgt daardoor — de bijdrage '
      + 'is toch geschonken geld, zij verschuift alleen de grens van de eigen subsidie.'; },
  'n.agz_fix.ueber8': 'Samen met de eigen inleg boven 8 % van de BBG-RV — het meerdere is noch fiscaal noch premietechnisch begunstigd.',
  'n.agz_fix_min.knapp': function(p, f){
    return 'U zit maar ' + f.eur2(p.d) + ' boven de drempel. Daaronder valt de vaste bijdrage '
      + 'volledig weg: het marginale rendement van de laatste ingelegde euro is op dat punt oneindig, '
      + 'de koppeling bruto ↔ netto daar discontinu.'; },
  'n.agz_fix_min.verfehlt': function(p, f){
    return 'Drempel niet gehaald — ' + f.eur2(p.fehlt) + ' meer per maand maakt ' + f.eur2(p.zuschuss)
      + ' bijdrage los. Dat is bijna altijd de lonendste euro in het hele model.'; },
  'n.teilkap.kosten': function(p, f){
    return 'Kost ' + (p.gewinn ? 'niets, integendeel: ' + p.dtxt : p.dtxt + ' ' + p.unit)
      + ' ten opzichte van volledige omzetting in lijfrente. Reden: het bedrag ineens is in het jaar van ontvangst volledig '
      + 'belast (marginale druk daar ' + f.pct(p.grenz, 1) + ') en rendeert daarna alleen '
      + 'nog tegen het tarief na bronbelasting in plaats van tegen het productrendement.'; },
  'n.av_auszform.horizont': function(p, f){
    return 'Voorbij de vergelijkingshorizon betaalt deze lijfrente nog ' + f.eur(p.rest)
      + ' uit, die hier NIET zijn meegeteld. Een vaste horizon onderschat elke levenslange '
      + 'lijfrente systematisch — wie oud wordt, wint hier.'; },

  /* ---------------- Uitkomstkaarten ---------------- */
  'card.lead': 'voorop',
  'card.unchanged': 'ongewijzigd',
  'base.pinned': 'Δ ten opzichte van de onthouden stand',
  'base.delta': function(p){ return 'Δ ' + p.desc; },
  'base.none': 'Beweeg een schuifregelaar — de verandering verschijnt hier als Δ.',
  'base.desc.prev': 'vorige stand',
  'base.desc.pinned': 'onthouden stand',
  'base.desc.change': function(p){ return 'vóór de wijziging van „' + p.label + '“'; },
  'rank.swap': function(p, f){
    return '<b>De kengetallen zijn het oneens.</b> Naar maanduitkering ligt '
      + p.a + ' vóór ' + p.b + ', naar contante waarde van de netto-opbrengst is het omgekeerd. '
      + 'Reden: de contante waarde disconteert met de inflatie (' + f.pct(p.infl, 2) + '), de maanduitkering '
      + 'annuïteert met de herbeleggingsrente na belasting (' + f.pct(p.wiederanl, 2) + '). Hoe verder die twee '
      + 'uiteenlopen, hoe beter een vroege kapitaaluitkering eruitziet. Welk kengetal geldt, hangt ervan '
      + 'af of u het geld zou beleggen of uitgeven — bij „uitgeven“ de waarde in het veld '
      + '„Kosten privé-ETF-rekening“ zo zetten dat de herbeleggingsrente naar nul gaat.'; },
  'warn.unreachable': 'Deze netto-inspanning is onbereikbaar — zij overtreft uw salaris. Ingesteld is de hoogst mogelijke waarde.',
  'warn.inactive': 'In het eerste jaar bent u volgens uw gegevens niet meer werkzaam — er is geen salarisuitruil, dus ook geen netto-inspanning waaruit een bruto-inleg terug te rekenen valt. Controleer „Uitdiensttreding“ en „Leeftijd nu“.',

  /* ---------------- Conclusie in gewone taal ---------------- */
  'verdict.lead': function(p){
    return '<b>' + p.satz + '</b> ligt voorop met ' + p.wert + ' — ' + p.d2 + ' meer dan ' + p.nom2
      + (p.nom3 ? ' en ' + p.d3 + ' meer dan ' + p.nom3 : '') + '.'; },
  'verdict.pp': function(p){ return p.v + ' procentpunten'; },
  'verdict.top': function(p, f){
    return ' De grootste afzonderlijke post in het verschil ' + p.gen + ' met de privé-ETF-rekening is '
      + '„' + p.label + '“ — en wel ' + (p.pro ? 'ten gunste' : 'ten laste') + ' ' + p.gen
      + ', met ' + f.eur(Math.abs(p.wert)) + ' contante waarde. De volledige ontleding staat onder „Waardedrijvers“.'; },
  'verdict.band': function(p, f){
    return '<span class="band">Hoe houdbaar is dat? Bij een brutorendement van ' + f.pct(p.lo, 1)
      + ' in plaats van ' + f.pct(p.mid, 1) + ' zou het ' + p.vlo + ' zijn, bij ' + f.pct(p.hi, 1) + ' zou het '
      + p.vhi + ' zijn — de volgorde '
      + (p.stabil ? 'blijft binnen die marge dezelfde.'
                  : '<b>keert binnen die marge om</b>, de uitkomst draagt hier dus niet.')
      + '</span>'; },
  'demo.text': '<b>Dit zijn nog voorbeeldwaarden</b> — 40 jaar oud, 75.000 € brutojaarsalaris, 300 € salarisuitruil per maand, wettelijk ziektekostenverzekerd. Vul onder „Uw gegevens“ uw eigen cijfers in; deze melding verdwijnt dan vanzelf.',

  /* ---------------- Meelopende balk ---------------- */
  'sb.cap': function(p){ return p.label + ' · ' + p.unit + (p.kaufkraft ? ', koopkracht van vandaag' : ''); },
  'sb.aria': function(p){ return 'Uitkomst: ' + p.label; },

  /* ---------------- Grafieken ---------------- */
  'tab.sens': 'Gevoeligheid',
  'tab.wf': 'Waardedrijvers',
  'tab.kap': 'Kapitaalverloop',
  'tab.zer': 'Maandontleding',
  'chart.error': function(p){ return 'Grafiek niet weer te geven: ' + p.msg; },
  'sens.readout': 'Gestippeld: uw huidige waarde. Ringen: snijpunten met de privérekening. Over de kromme bewegen of tikken voor waarden.',
  'sens.legendY': function(p){ return 'y: ' + p.label + ' (' + p.unit + ')'; },
  'sens.note': function(p){
    return 'De laatst bewogen schuifregelaar wordt over zijn hele bereik doorgerekend — ' + p.n
      + ' volledige modelruns. Nu: „' + p.label + '“. '
      + 'Beweegt u een andere schuifregelaar, dan wisselt de kromme mee.'; },
  'sens.noteNetto': function(p, f){
    return ' Let op: deze schuifregelaar verandert ook de netto-inspanning (hier ' + f.eur2(p.lo) + ' tot '
      + f.eur2(p.hi) + ' per maand) en daarmee het bedrag dat in alle drie de opties wordt belegd. '
      + 'Daarom zijn de drie krommen bij elke afzonderlijke x eerlijk vergelijkbaar, maar het niveau tussen '
      + 'verschillende x niet. De knikken zitten bij de premiegrenzen ('
      + f.eur(p.bbgkv) + ' voor KV/PV, ' + f.eur(p.bbgrv) + ' voor RV/AV) en bij de tariefschijfgrenzen.'; },
  'wf.up': 'verhoogt de opbrengst',
  'wf.down': 'verlaagt de opbrengst',
  'wf.legend': 'Contante waarde van de netto-opbrengst, koopkracht van vandaag',
  'wf.check': function(p, f){
    return 'Controle: ' + f.eur(p.start) + ' + ' + f.eur(p.summe) + ' = ' + f.eur(p.start + p.summe)
      + ' (soll ' + f.eur(p.ende) + ', afwijking ' + f.nf2(p.start + p.summe - p.ende) + ' €).'; },
  'wf.note': 'Telescoperende ontleding, daarom klopt zij exact — maar zij is <b>volgordeafhankelijk</b>: de effecten zijn niet additief scheidbaar, elke staaf meet de bijdrage <i>gegeven</i> de staven daarboven. Tik een staaf aan voor de afleiding.',
  'wf.barinfo': function(p){ return p.label + ': ' + p.note; },
  'wfb.vp.label': 'Wegvallen van de Vorabpauschale',
  'wfb.vp.note': 'Noch de bAV noch het Altersvorsorgedepot kent de Vorabpauschale (§ 18 InvStG). Gemeten als privérekening zonder Vorabpauschale minus met. De staaf kan negatief zijn: de Vorabpauschale loopt grotendeels in het spaarforfait, maar verhoogt wel de volle kostprijsbasis — dan is zij voor de privérekening netto een voordeel.',
  'wfb.zul.label': 'Toeslagen en aftrek bijzondere uitgaven',
  'wfb.zul.note': 'Geld van derden volgens het nieuwe toeslagmodel plus de aftrek volgens § 10a EStG. Gemeten door beide subsidiewegen uit te zetten.',
  'wfb.arch.label': 'Belastingarchitectuur (rest)',
  'wfb.arch.note': 'Tariefarbitrage t₀ − t₁ en al het overige. Als residu bepaald, zodat de keten exact sluit.',
  'wfb.agz.label': 'Werkgeversbijdrage',
  'wfb.agz.note': 'Geld van derden — het enige structurele voordeel van de bAV dat niet uit het belastingrecht komt. Gemeten door de bijdrage uit te zetten.',
  'wfb.tarif.label': 'Tariefarbitrage en rest',
  'wfb.tarif.note': 'Marginaal tarief bij inleggen minus bij uitkeren, plus al het overige. Als residu bepaald, zodat de keten exact sluit. Belastinguitstel alleen is waardeloos: (1−t)(1+r)ⁿ = (1+r)ⁿ(1−t), vermenigvuldiging commuteert.',
  'wfb.kvpv.label': 'KV/PV op Versorgungsbezüge',
  'wfb.kvpv.note': '§§ 229, 250 SGB V: het volle premietarief draagt de gepensioneerde alleen. Gemeten als verschil met de instelling „particulier verzekerd na pensionering“.',
  'wfb.ep.label': 'Verlies aan pensioenpunten',
  'wfb.ep.note': 'Salarisuitruil verlaagt het premieplichtig loon en daarmee het wettelijk pensioen. Netto tegengerekend.',
  'kap.rentbeg': 'Pensioeningang',
  'kap.swap': 'Kapitaal → lijfrenteaanspraak',
  'kap.legend': 'doorgetrokken: totaal &nbsp;·&nbsp; gestippeld: vrij beschikbaar',
  'kap.readout': function(p, f){
    return 'Bij pensioeningang vastgezet: bAV ' + f.eur(p.bavGeb) + ' van ' + f.eur(p.bav)
      + ' · AV-depot ' + f.eur(p.avGeb) + ' van ' + f.eur(p.av)
      + ' · privérekening ' + f.eur(0) + ' van ' + f.eur(p.priv)
      + '.  De equivalente maanduitkering wordt verbruikt, daarom eindigt elke optie op nul.'; },
  'kap.note': function(p, f){
    return 'Saldo binnen het product, in de uitkeringsfase vermeerderd met de netto herbelegde '
      + 'uitkeringen (' + f.pct(p.wiederanl, 2) + ' na belasting) en verminderd met de equivalente '
      + 'maanduitkering, die werkelijk wordt verbruikt. Daarom loopt elke optie exact op nul uit. '
      + 'Omdat het verbruik alleen uit de herbelegging gaat en het productkapitaal in het product blijft, waar het '
      + 'met het productrendement vóór belasting groeit, verlopen de krommen toch niet proportioneel. '
      + '— De gestippelde lijn is het vrij beschikbare deel: de bAV is tot de pensioeningang '
      + 'volledig vastgezet (§ 1b BetrAVG kent onvervreemdbaarheid, geen beschikbaarheid), bij het '
      + 'Altersvorsorgedepot is een opname vóór 65 schadelijk voor de subsidie en vrij is alleen het meerdere boven het '
      + 'jaarmaximum, de privérekening is altijd vrij. Dat is de enige as waarop een '
      + 'kapitaaluitkering er goed uitziet. '
      + (p.verrentet ? 'Omdat u de rekening in lijfrente omzet, gaat ook daar het kapitaal naar de aanbieder — de '
          + 'kromme daalt dienovereenkomstig, hoewel er niets verloren is. ' : '')
      + 'En nog eens uitdrukkelijk: de krommen tonen het vermogen uit DEZE ene beslissing, '
      + 'niet uw totale vermogen.'; },
  'zer.netto': 'netto',
  'zer.tax': 'belasting',
  'zer.kv': 'KV/PV',
  'zer.pension': 'pensioen',
  'zer.legend': '<span><i style="background:#808080"></i>belasting</span><span><i style="background:#800000"></i>KV/PV</span><span><i style="background:#800080"></i>gederfd wettelijk pensioen</span><span style="margin-left:auto">gekleurde sokkel = wat er overblijft</span>',
  'zer.readout': 'Alles als constante maanduitkering in koopkracht van vandaag. Omdat annuïtering lineair is, tellen de blokken exact op.',
  'zer.note': function(p, f){
    return 'De uitkeringsperiode is voor alle drie de opties identiek. Een kapitaaluitkering wordt niet '
      + 'door twaalf gedeeld, maar met de herbeleggingsrente na belasting (' + f.pct(p.wiederanl, 2)
      + ' p.j.) over dezelfde periode geannuïteerd. Wie het kapitaal opmaakt in plaats van belegt, staat '
      + 'slechter.'; },

  /* ---------------- Berekening ---------------- */
  'det.h.bav': 'bAV',
  'det.h.av': 'AV-depot',
  'det.h.priv': 'privé',
  'det.h.kennzahl': 'Kengetal',
  'det.h.wert': 'Waarde',
  'det.erg.netto': 'Totaal ingelegd uit het netto (nominaal)',
  'det.erg.fremd': 'Geld van derden (bijdrage resp. toeslagen)',
  'det.erg.kapital': 'Kapitaal bij start van de uitkering',
  'det.erg.brutto': 'Totaal bruto-uitkeringen',
  'det.erg.steuer': 'waarvan inkomsten-/bronbelasting',
  'det.erg.kvpv': 'waarvan ziektekosten- en langdurigezorgverzekering',
  'det.erg.rentenverlust': 'Verlies aan wettelijk pensioen (cumulatief)',
  'det.erg.nettoausz': 'Totaal netto-uitkeringen (nominaal)',
  'det.erg.bwausz': 'Contante waarde van de netto-uitkeringen',
  'det.erg.bwaufw': 'Contante waarde van de netto-inspanning',
  'det.erg.ertrag': 'Contante waarde van de netto-opbrengst',
  'det.erg.verhaeltnis': 'Verhouding opbrengst tot inspanning',
  'det.erg.irr': 'Interne rentevoet (nominaal)',
  'det.erg.vorsprung': 'Voorsprong op de privérekening',
  'det.mon.brutto': 'Bruto-uitkering per maand',
  'det.mon.steuer': 'minus inkomsten-/bronbelasting',
  'det.mon.kvpv': 'minus ziektekosten- en langdurigezorgverzekering',
  'det.mon.ep': 'minus verlies aan wettelijk pensioen',
  'det.mon.netto': 'NETTO PER MAAND (koopkracht van vandaag)',
  'det.diag.beitrag': 'Bruto-inleg bAV per maand',
  'det.diag.aufwand': 'Netto-inspanning per maand (eerste jaar)',
  'det.diag.grenzsteuer': 'Marginaal belastingtarief in de opbouwfase (eerste jaar)',
  'det.diag.ersparnis': 'Totale besparingsquote (belasting + premies), eerste jaar',
  'det.diag.svAG': 'werkelijke premiebesparing van de werkgever',
  'det.diag.svAN': 'werkelijke premiebesparing van de werknemer',
  'det.diag.ngef': 'Aandeel van de bAV-inleg zonder subsidie (eerste jaar)',
  'det.diag.aussch': 'Benutting van het wettelijk recht (4 % BBG-RV)',
  'det.diag.agzVar': 'waarvan werkgeversbijdrage: procentueel (eerste jaar)',
  'det.diag.agzFix': 'waarvan werkgeversbijdrage: vast bedrag (eerste jaar)',
  'det.diag.agzFixUeber4': 'vaste bijdrage boven de 4 %-ruimte (niet als premielast geboekt)',
  'det.diag.vbMonat': 'Versorgungsbezug per maand bij start van de uitkering',
  'det.diag.freibetrag': 'Vrijstelling Versorgungsbezüge in hetzelfde jaar',
  'det.diag.vbQuote': 'Verhouding Versorgungsbezug tot vrijstelling',
  'det.diag.kapFreiKapital': 'premievrij mogelijk kapitaal (kapitaaluitkering)',
  'det.diag.kapFreiRente': 'premievrij mogelijk kapitaal (levenslange lijfrente)',
  'det.diag.memoRest': 'MEMO: bAV-lijfrentebetalingen na de horizon',
  'det.diag.memoRestAv': 'MEMO: rekeninglijfrente na de horizon',
  'det.diag.wiederanl': 'Herbeleggingsrente na belasting',
  'det.diag.kapstEff': 'effectieve bronbelasting incl. soli/kerkbelasting',
  'det.diag.bestAnteil': 'Belast aandeel van het wettelijk pensioen',
  'det.warn.lead': 'U staat buiten de begunstigde corridor: ',
  'det.warn.aussch': 'Boven 100 % benutting bestaat geen wettelijk recht op salarisuitruil meer. ',
  'det.warn.ngef': 'Een merkbaar deel van de inleg is noch fiscaal noch premietechnisch begunstigd — die laag verdwijnt in een verzekeringsmantel zonder daarvoor iets terug te krijgen behalve de premieplicht in de KV. ',
  'det.warn.vb': 'De Versorgungsbezug overschrijdt de vrijstelling duidelijk; de beschermende werking van de absolute vrijstelling valt af als 1/kapitaal. ',
  'det.anspar.h.jahr': 'Jaar',
  'det.anspar.h.brutto': 'Bruto',
  'det.anspar.h.beitrag': 'bAV-inleg',
  'det.anspar.h.agzVar': 'WG-bijdr. %',
  'det.anspar.h.agzFix': 'WG vast',
  'det.anspar.h.sv': 'Premiebesp.',
  'det.anspar.h.st': 'Belastingbesp.',
  'det.anspar.h.netto': 'Netto-inspanning',
  'det.anspar.h.zul': 'Toeslagen',
  'det.anspar.h.kbav': 'Kapitaal bAV',
  'det.anspar.h.kav': 'Kapitaal AV',
  'det.anspar.h.kpriv': 'Kapitaal privé',
  'det.row.year': function(p){ return p.jahr + ' (leeftijd ' + p.alter + ')'; },
  'det.ausz.h.jahr': 'Jaar',
  'det.ausz.h.bavBr': 'bAV bruto',
  'det.ausz.h.kvpv': 'KV/PV',
  'det.ausz.h.steuer': 'Belasting',
  'det.ausz.h.mind': 'Pensioenkorting',
  'det.ausz.h.bavNet': 'bAV netto',
  'det.ausz.h.avBr': 'AV bruto',
  'det.ausz.h.avNet': 'AV netto',
  'det.ausz.h.privBr': 'privé bruto',
  'det.ausz.h.privNet': 'privé netto',
  'det.ann.intro': 'De rangorde hangt af van rechtsvragen die in 2026 nog niet alle zijn opgehelderd. De getallen tussen haakjes zijn subjectieve vertrouwensgraden.',
  'det.ann.h.annahme': 'Aanname',
  'det.ann.h.vertrauen': 'Vertrouwen',
  'det.ann.h.anmerkung': 'Opmerking',
  'det.ann.r1.a': 'Rekengrootheden SV 2026, § 32a-tarief 2026',
  'det.ann.r1.c': 'SVBezGrV 2026, Steuerfortentwicklungsgesetz',
  'det.ann.r2.a': 'KV/PV-plicht op Versorgungsbezüge',
  'det.ann.r2.c': '§§ 229, 250 SGB V',
  'det.ann.r3.a': 'Vrijstelling § 226 Abs. 2 S. 2 SGB V (KV)',
  'det.ann.r3.c': 'onbetwist',
  'det.ann.r4.a': 'Drempelbedrag in plaats van vrijstelling in de PV',
  'det.ann.r4.c': 'de meest voorkomende fout in adviesteksten',
  'det.ann.r5.a': 'Premievrijdom van de AV-depot-uitkering',
  'det.ann.r5.c': 'geen Versorgungsbezüge',
  'det.ann.r6.a': 'Half verschilbedrag voor niet-gesubsidieerde lagen',
  'det.ann.r6.c': '§ 22 Nr. 5 S. 2 Buchst. b juncto § 20 Abs. 1 Nr. 6 S. 2 EStG',
  'det.ann.r7.a': 'Bijdrage slechts tot de werkelijke besparing van de werkgever',
  'det.ann.r7.c': 'de tegenopvatting leest 15 % als zuiver forfait',
  'det.ann.r8.a': 'Maximum bijzondere uitgaven 2.340 €',
  'det.ann.r8.c': 'MODELAANNAME. Beslist of een kind de waarde van het AV-depot verhoogt of verlaagt',
  'det.ann.r9.a': 'KVdR-verplichte verzekering na pensionering verondersteld',
  'det.ann.r9.c': 'vrijwillig verzekerden niet getoetst',
  'det.ann.notmodelled': '<b>Niet gemodelleerd:</b> kortingen bij vervroegde pensionering, doorwerking van salarisuitruil op ziekte-, werkloosheids- en ouderschapsuitkering, nabestaandenvoorziening, insolventiedekking (PSVaG), overdraagbaarheid bij wisseling van werkgever, kortingen voor kinderen in de PV, de gunstigheidstoets volgens § 32d Abs. 6 EStG, beslag- en bijstandsbescherming, langlevenrisico voorbij de horizon.',
  'det.prinzip': '<p>Een vergelijking van <i>bruto-inleg</i> zou oneerlijk zijn: salarisuitruil komt uit het bruto, privésparen uit het netto. Daarom wordt de <b>netto-inspanning</b> gelijkgesteld:</p>'
    + '<p style="font-family:var(--mono);font-size:.82rem;background:var(--chip);padding:9px 11px;border-radius:9px">netto-inspanning = bruto-inleg − loonbelastingbesparing − bespaard werknemersdeel sociale premies</p>'
    + '<p>Precies dit bedrag wordt in alle drie de opties belegd. Wat overblijft is een vergelijking van <i>subsidiearchitecturen</i>, niet van inlegbedragen.</p>'
    + '<p><b>Belastinguitstel is op zichzelf waardeloos:</b> (1−t)·(1+r)ⁿ = (1+r)ⁿ·(1−t). Vermenigvuldiging commuteert. Er blijven maar vier waardedrijvers over:</p>'
    + '<ol style="padding-left:1.2em;margin:.3em 0"><li>tariefarbitrage t₀ − t₁</li>'
    + '<li>geld van derden — werkgeversbijdrage respectievelijk toeslagen</li>'
    + '<li>belastingvrije herbelegging — geen Vorabpauschale</li>'
    + '<li>nieuwe heffingen die maar één optie treffen — KV/PV op Versorgungsbezüge</li></ol>'
    + '<p>Punt 4 is het dominante nadeel van de bAV, punt 2 haar enige structurele voordeel. Het rendement van de bAV <b>daalt strikt monotoon in de inleghoogte</b>, omdat de vrijstelling absoluut is en haar beschermende werking als 1/K afneemt — er is geen inwendig optimum.</p>'
    + '<p>Bij een gegeven netto-inspanning wordt de bruto-inleg per bisectie teruggerekend: N(B) is continu en strikt stijgend (dN/dB = 1 − marginaal premietarief − marginaal belastingtarief > 0), maar wegens de knikken bij 4 % en 8 % van de BBG-RV, bij de premiegrenzen en bij de tariefschijfgrenzen niet in gesloten vorm inverteerbaar. 34 halveringen leveren minder dan een tiende cent op.</p>',
  'det.t.prinzip': 'Het vergelijkingsprincipe',
  'det.t.erg': 'Uitkomst in detail',
  'det.s.erg': 'Alle drie de opties kosten in de opbouwfase precies hetzelfde bedrag uit het netto.',
  'det.t.mon': 'Maanduitkering, ontleed',
  'det.s.mon': 'Alle opties over dezelfde periode geannuïteerd, in koopkracht van vandaag. Omdat annuïtering lineair is, tellen de regels exact op.',
  'det.t.diag': 'Diagnose',
  'det.s.diag': 'Waar het aan ligt — en waar u buiten de begunstigde corridor staat.',
  'det.t.anspar': 'Opbouwfase, jaar voor jaar',
  'det.t.ausz': 'Uitkeringsfase, jaar voor jaar',
  'det.t.ann': 'Houdbaarheid van de aannames',

  /* ---------------- Opslaan en delen ---------------- */
  'msg.linkCopied': 'Link gekopieerd. Wie hem opent, ziet precies deze cijfers — niets daarvan loopt via een server.',
  'msg.linkFailed': 'Kopiëren lukte niet. De link staat nu in de adresbalk.',
  'msg.loaded': 'Geladen.',
  'msg.loadError': function(p){ return 'Het bestand kon niet worden gelezen: ' + p.msg; },
  'msg.reset': 'Teruggezet op het basisgeval.',

  /* ---------------- PWA ---------------- */
  'pwa.offline': '<b>Werkt offline.</b> De app staat nu in de browsercache en draait ook zonder verbinding. Installeren: op de iPhone „Deel“ → „Zet op beginscherm“, op Android het menu → „App installeren“.',
  'pwa.installAsk': '<b>Als app installeren?</b> Dan staat zij met een eigen pictogram op het beginscherm en draait offline. ',
  'pwa.installBtn': 'Installeren',
  'pwa.installed': '<b>Geïnstalleerd.</b> U vindt de app nu bij uw overige apps.',
  'pwa.declined': 'Prima — de app draait ook zo, en offline bovendien.',
  'pwa.file': '<b>U hebt het bestand rechtstreeks geopend</b> (<kbd>file://</kbd>). Alles rekent, alles wordt opgeslagen. Alleen de twee PWA-eigenschappen ontbreken: geen pictogram op het beginscherm en geen offlinecache — die zou u hier ook niet nodig hebben, het bestand staat immers al op het apparaat. Voor de volledige app-ervaring de map op een willekeurige HTTPS-webruimte zetten en van daaruit openen.'
};
