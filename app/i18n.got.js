/* =====================================================================
   GUTISKA RAZDA — Gotisch, VOLLSTÄNDIG (459 Schlüssel).
   Seit der zweiten Fassung auch die langen Erläuterungstexte, Fließtext-
   Hinweise und Verdikt-Sätze übersetzt statt über tRaw() auf Deutsch
   zurückzufallen. Für Fließtext gilt zwangsläufig ein niedrigerer
   Vertrauensgrad als für die Feldnamen der ersten Fassung: Wulfilas
   Corpus bietet keine Vorbilder für mehrgliedrige Konditionalsätze über
   Freibeträge oder für Verweise auf Paragraphen, also folgen die neuen
   Sätze überwiegend Haupt-Satz-Ketten mit „jah“ (und) und „akei“ (aber)
   statt geschachtelter Unterordnung — Vertrauensgrad in die Syntax der
   Fließtextpassagen etwa 20–25 %, in die wiederverwendeten Fachwörter
   weiterhin die unten dokumentierten 30 %. Mathematische Formeln (N(B) =
   …, (1−t)(1+r)ⁿ) bleiben als Symbole stehen, wie im Original.

   Neu geprägt für die Fließtexte, nach denselben Ableitungsregeln:
     witodis waldufni   Rechtsanspruch (witoþ „Gesetz“ + waldufni „Macht“)
     marka gibandins    Beitragsbemessungsgrenze (marka „Grenze“ + gibands)
     freihals            Freibetrag/Freigrenze (belegt: „Freiheit“)
     gadails             Ehe-/Lebenspartner (belegt: „Teilhaber“)
     wilja                Zustimmung (belegt: „Wille“, vgl. Vaterunser)
     gamainduþs kara     gesetzliche Sozialversicherung (belegt gamainduþs
                          „Gemeinschaft“ + kara)
   Diese sechs sind wie die 2026er-Kernliste unten Konstruktionen ohne
   direkten Beleg, aber aus belegten Bausteinen — gleicher Vertrauensgrad.

   ZUR SCHRIFT. Lateinische Umschrift nach Streitberg, nicht das gotische
   Alphabet (U+10330–1034F). Der Grund ist nicht Bequemlichkeit: die App
   lädt grundsätzlich keine Schriften von fremden Domains (siehe README
   § 2), und für Wulfila-Gotisch gibt es auf keinem verbreiteten System
   eine vorinstallierte Schrift. 𐌰𐌻𐌻𐌰𐌹𐌼 wären leere Kästchen. Die Umschrift
   ist ohnehin die Form, in der das Gotische seit Streitberg gelesen wird.
   þ = th, ƕ = hw, ai/au nach der Handschrift, nicht nach der Aussprache.

   ZUR WORTWAHL. Das Korpus ist im Wesentlichen Wulfilas Bibel: rund 3.000
   Lexeme, davon so gut wie keines aus dem Versicherungswesen. Was belegt
   ist, wird benutzt:
     faihu       Vermögen, Geld            (belegt, Mk 10,23 faihu)
     skatts      Münze, Geldstück          (belegt, Mt 25,15)
     gild        Abgabe, Steuer            (belegt, Lk 20,22 kaisaragild)
     wokrs       Zins                      (belegt, Lk 19,23 miþ wokra)
     mizdo       Lohn                      (belegt, Lk 10,7)
     laun        Entgelt, Belohnung        (belegt, Mt 6,1)
     asneis      Lohnarbeiter              (belegt, Mk 1,20; Lk 15,17)
     jer, menoþs Jahr, Monat               (belegt)
     alds        Lebenszeit, Alter         (belegt, Lk 8,14)
     hails       gesund                    (belegt) → siukei Krankheit
     razda       Sprache                   (belegt, 1Kor 14)
     dails       Teil, Anteil              (belegt)
     rathjo      Rechnung, Zahl            (belegt, Lk 16,2 rathjon)
     kara        Sorge, Fürsorge           (belegt, Joh 12,6)
   Geprägt auf gotischen Stämmen, mit gotischen Ableitungssuffixen, aber
   ohne Beleg — Vertrauensgrad in die Idiomatik etwa 30 %:
     gagaleikeins   Vergleich   (gagaleikon „gleichmachen“ + -eins wie
                                 laiseins, daupeins)
     mizdogibands   Arbeitgeber (mizdo + gibands, Part. Präs. von giban)
     haubidafaihu   Kapital, Hauptsumme (nach lat. caput/capitale)
     faihufrikei    Inflation? NEIN — das heißt belegt „Habgier“, deshalb
                    hier stattdessen wairþis wahstus „Preiswachstum“
     siukeikara     Krankenversicherung (siukei + kara)
     aldiskara      Altersvorsorge
   ETF bleibt als lateinische Fremdabkürzung stehen; ein gotisches Wort
   dafür zu erfinden wäre Kostümierung, keine Übersetzung.
   Die Gesetzesfundstellen bleiben deutsch: es gibt sie amtlich nur so.
   ===================================================================== */
window.I18N_GOT = {
  'f.I:gehalt.label': 'Mizdo alljis jeris, alla, himma daga',
  'f.I:beitrag.label': 'Menoþis gibands du bAV, alls',
  'f.I:netto_ziel.label': 'Menoþis wilwands, hrains',
  'f.I:agzus.label': 'Anaaukans þis mizdogibandins',
  'f.I:agz_fix.label': 'Anaaukans gasatiþs, ana þamma',
  'f.I:agz_fix_dyn.label': 'Þana gasatidan anaaukan wahsjan',
  'f.I:agz_fix_dyn.o0': 'bi namin, unwandiþs',
  'f.I:agz_fix_dyn.o1': 'miþ þamma mizdon',
  'f.I:agzus_sv.label': 'Haidus þis anaaukanis',
  'f.I:agzus_sv.o0': 'alls gibands',
  'f.I:agzus_sv.o1': 'þata freihals dail ainata',
  'f.I:agzus_sv.o2': 'bi sunjai rathiþ',
  'f.I:dyn.label': 'Þana gibandan wahsjan',
  'f.I:dyn.o1': 'miþ þamma mizdon',
  'f.I:dyn.o0': 'bi namin, unwandiþs',
  'f.I:rendite.label': 'Alls akrans þis ETF bi jera',
  'f.I:alter.label': 'Alds himma daga',
  'f.I:alter.unit': 'jera',
  'f.I:rentbeg.label': 'Anastodeins þizos gibos',
  'f.I:rentbeg.unit': 'jera',
  'f.I:kv_ruhe.label': 'Siukeikara in aldin',
  'f.I:kv_ruhe.o1': 'bi witoda',
  'f.I:kv_ruhe.o2': 'seina',
  'f.I:auszform.label': 'Giba þizos bAV',
  'f.I:auszform.o1': 'haubidafaihu',
  'f.I:auszform.o2': 'gild all ald',
  'f.I:teilkap.label': 'Altersvorsorgedepot: ains gibans at anastodeinai',
  'f.I:av_auszform.label': 'Altersvorsorgedepot: þata anþar',
  'f.I:av_auszform.o1': 'garaideins gibos',
  'f.I:av_auszform.o2': 'gild all ald',
  'f.I:agz_fix_min.label': 'Minnists seins gibands du þamma gasatidin anaaukan',
  'f.I:rentfak_av.label': 'Gildis rathjo þis Altersvorsorgedepot',
  'f.I:rentfak_av.unit': '€ bi 10.000 €',
  'f.I:rentdyn_av.label': 'Wahstus þis faihugildis bi jera',
  'f.I:rentfak.label': 'Gildis rathjo þizos bAV',
  'f.I:rentfak.unit': '€ bi 10.000 €',
  'f.I:rentdyn.label': 'Wahstus þis bAV-gildis bi jera',
  'f.I:fuenftel.label': 'Þo fimftons witoþ sokjan',
  'f.I:fuenftel.o0': 'ne (arniba)',
  'f.I:fuenftel.o1': 'ja',
  'f.I:planende.label': 'Marka þizos gagaleikeinais und aldai',
  'f.I:planende.unit': 'jera',
  'f.I:ausscheid.label': 'Afleiþan af þamma waurstwa',
  'f.I:ausscheid.unit': 'jera',
  'f.I:tzalter.label': 'Halb waurstw fram aldai',
  'f.I:tzalter.unit': 'jera',
  'f.I:tzfaktor.label': 'Rathjo þis halbins waurstwis',
  'f.I:gsteig.label': 'Wahstus þis mizdons bi jera',
  'f.I:stkl.label': 'Haidus þis gildis',
  'f.I:stkl.o1': 'sundro',
  'f.I:stkl.o3': 'samana (bi halbam)',
  'f.I:partner.label': 'gildis waírþ þis gadailans',
  'f.I:kist.label': 'Rathjo þis aíkklesjons gildis',
  'f.I:tarifanp.label': 'Wandeins þizo gildis marko bi jera',
  'f.I:kinder.label': 'Rathjo barne',
  'f.I:kind_jahre.label': 'Jera miþ barne giban',
  'f.I:kind_jahre.unit': 'jera',
  'f.I:kinderlos.label': 'Unbarnahs (anaaukans kararis)',
  'f.I:kinderlos.o0': 'ne',
  'f.I:kinderlos.o1': 'ja',
  'f.I:k_bav.label': 'Wilwa þis bAV-waurstwis bi jera',
  'f.I:k_av.label': 'Wilwa þis Altersvorsorgedepot bi jera',
  'f.I:k_priv.label': 'Wilwa þis seinis ETF-faihu bi jera',
  'f.I:infl.label': 'Wairþis wahstus bi jera',
  'f.I:sonst_zve.label': 'anþar gildis waírþ in aldin',
  'f.I:rente_br.label': 'gild bi witoda, all, bi jera',
  'f.P:bbg_rv.label': 'Marka gibandins þizos aldis kara (bi jera)',
  'f.P:bbg_kv.label': 'Marka gibandins siukeins jah kararis',
  'f.P:bezug.label': 'Bezugsgröße (menoþis)',
  'f.P:de_rv.label': 'Mizdo bi midjai (RV)',
  'f.P:rw.label': 'Waírþ þis gildis stikis nu',
  'f.P:rw.unit': '€',
  'f.P:rv_an.label': 'Aldis gibands, dails þis asneis',
  'f.P:av_an.label': 'Unwaurstwis gibands, dails þis asneis',
  'f.P:kv_allg.label': 'Allamma rathjo þizos siukeikara',
  'f.P:kv_zus.label': 'Anaaukans gibands siukeins bi midjai',
  'f.P:pv_ges.label': 'Alla rathjo þis kararis',
  'f.P:pv_an.label': 'Kara, dails þis asneis',
  'f.P:pv_kl.label': 'Kara, anaaukans unbarnahaize',
  'f.P:gfb.label': 'Grunduns freihals (andeis razdos 1)',
  'f.P:e2.label': 'Andeis razdos 2',
  'f.P:e3.label': 'Andeis razdos 3',
  'f.P:e4.label': 'Anastodeins razdos 5 (gabigaize gild)',
  'f.P:a2.label': 'Faihugawaurki a₂',
  'f.P:b2.label': 'Faihugawaurki b₂',
  'f.P:a3.label': 'Faihugawaurki a₃',
  'f.P:b3.label': 'Faihugawaurki b₃',
  'f.P:c3.label': 'Unwandiþ c₃',
  'f.P:c4.label': 'Unwandiþ c₄',
  'f.P:c5.label': 'Unwandiþ c₅',
  'f.P:soli.label': 'Gamainduþs anaaukans',
  'f.P:soli_fg.label': 'Freihals marka þis anaaukanis',
  'f.P:soli_mz.label': 'Qairrei marka, marko kaurei',
  'f.P:an_pausch.label': 'Asnje afmaitans, gasatiþs',
  'f.P:sa_pausch.label': 'Sundro wilwe afmaitans, gasatiþs',
  'f.P:kapst.label': 'Rathjo þis faihu gildis',
  'f.P:tfs.label': 'Halbs freihals dailefaihu',
  'f.P:sparerpb.label': 'Bairgandins afmaitans, gasatiþs',
  'f.P:basiszins.label': 'Grunduns wokrs þizos Vorabpauschale',
  'f.P:vp_faktor.label': 'Faihugawaurki þis grunduns akranis',
  'f.P:st_frei_q.label': 'gildis freis § 3 Nr. 63 (dails BBG-RV)',
  'f.P:sv_frei_q.label': 'gibandins freis (dails BBG-RV)',
  'f.P:zul_g1.label': 'Giba, staþs 1 (bi ƕarjamme € seinis gibandins)',
  'f.P:zul_s1.label': 'Marka staþis 1',
  'f.P:zul_g2.label': 'Giba, staþs 2 (bi ƕarjamme € seinis gibandins)',
  'f.P:zul_s2.label': 'Marka staþis 2',
  'f.P:kind_zul.label': 'Giba bi ƕarjamme barna',
  'f.P:av_max.label': 'Maists gibands bi jera',
  'f.P:av_sa_max.label': 'Maists afmaitans § 10a',
  'f.P:ertragsq.label': 'Dails þis akranis (alds 67)',
  'f.P:halb.label': 'gildis skula dails þis missadailis',

  /* ---------------- Waddjus, augadauro-namna ---------------- */
  'app.title': 'Aldiskaros gagaleikeins',
  'hdr.title': 'Aldiskaros gagaleikeins',
  'win.header': 'Aldiskaros gagaleikeins',
  'win.result': 'Urruns',
  'win.input': 'Þeina waurda',
  'win.chart': 'Melja',
  'win.extra': 'Anþara waurda',
  'win.calc': 'Wigs þizos rathjons',
  'win.share': 'Bairgan jah gadailjan',
  'win.min': 'Gamaurgjan',
  'win.restore': 'Aftra gasatjan',
  'win.n': function(p){ return 'Augadauro ' + p.n; },
  'ui.share': 'Gabinda miþ meinaim rathjom afmeljan',
  'ui.export': 'Swe boka bairgan',
  'ui.import': 'Boka usniman',
  'ui.reset': 'All aftra gasatjan',
  'ui.pin.set': 'Swe garaideins gamunan',
  'ui.pin.clear': 'Þo garaidein andbindan',
  'ui.lang': 'Razda',
  'ui.lang.aria': 'Razda waljan',
  'ui.lang.partial': 'dailamma ainamma gaskeiriþ',
  'ui.lang.partialNote': 'So razda ist <b>dailamma gaskeiriþa</b>: þata andwairþi, þo namna þize staþe, þo haubida þizo bokó jah þos meljo taikneis sind her. Þo langona witodis gaskeireinos — þo waurda undar <span class="qm" style="cursor:default">?</span> at þaim staþam, so staua jah sa wigs þizos rathjons — Þiudiskai razdai ataugjand. Þo witodis gameleina (BetrAVG, EStG, SGB V) in allaim razdom Þiudiska wisand: bi þiudangardjai ni sind anþaraleikos.',
  'sb.up': 'Iup du þamma urrunsa',

  /* ---------------- Þos þrins wiljos ---------------- */
  'opt.bav.name': 'bAV (mizdons inmaideins)',
  'opt.bav.short': 'bAV',
  'opt.bav.nom': 'so waurstwis aldiskara',
  'opt.bav.satz': 'So waurstwis aldiskara',
  'opt.bav.gen': 'þizos bAV',
  'opt.av.name': 'Altersvorsorgedepot',
  'opt.av.short': 'AV-faihu',
  'opt.av.nom': 'þata Altersvorsorgedepot',
  'opt.av.satz': 'Þata Altersvorsorgedepot',
  'opt.av.gen': 'þis Altersvorsorgedepot',
  'opt.priv.name': 'sein ETF-faihu',
  'opt.priv.short': 'sein',
  'opt.priv.nom': 'þata sein ETF-faihu',
  'opt.priv.satz': 'Þata sein ETF-faihu',
  'opt.priv.gen': 'þis seinis ETF-faihus',

  /* ---------------- Taikneis ---------------- */
  'metric.monat.label': 'Menoþis giba',
  'metric.monat.unit': '€/menoþ',
  'metric.ertrag.label': 'Hrains gawaurki (waírþ nu)',
  'metric.ertrag.unit': '€',
  'metric.irr.label': 'Inna wokrs',
  'metric.irr.unit': '% bi jera',
  'metric.kapital.label': 'Haubidafaihu at gildis anastodeinai',
  'metric.kapital.unit': '€',
  'metric.pa': ' bi jera',
  'metric.pp': ' dailos hunda',
  'metric.short.monat': 'Menoþs',
  'metric.short.ertrag': 'Gawaurki',
  'metric.short.irr': 'IRR',
  'metric.short.kapital': 'Faihu',

  /* ---------------- Staþeis waurde ---------------- */
  'unit.pct': '%',
  'unit.eur': '€',
  'unit.eurm': '€/menoþ',
  'ui.hintFor': function(p){ return 'Gaskeireins bi: ' + p.label; },
  'ui.cnt.legal': function(p){ return p.n + ' rathjons mikilein'; },
  'ui.cnt.fields': function(p){ return p.n + ' staþeis'; },
  'group.bav': 'Anaaukans jah gibos haidjus bi ainƕarjammeh',
  'group.person': 'Mel, afleiþan, halb waurstw',
  'group.steuer': 'Gild, gildis haidus, barna',
  'group.markt': 'Wilwa jah wairþis wahstus',
  'group.ruhe': 'Alds',
  'group.p_sv': 'Rathjons mikilein: gamainduþs kara 2026',
  'group.p_est': 'Rathjons mikilein: gild waírþis 2026 (§ 32a EStG)',
  'group.p_kap': 'Rathjons mikilein: faihu- jah dailefaihu gild',
  'group.p_bav': 'Rathjons mikilein: waurstwis jah gibanoda seina kara',

  /* ---------------- Urrunsis bokos ---------------- */
  'card.lead': 'faurþis',
  'card.unchanged': 'unwandiþ',
  'base.pinned': 'Δ wiþra þata gamunana',
  'base.delta': function(p){ return 'Δ ' + p.desc; },
  'base.none': 'Wagei ƕana raidjan — so inmaideins her swe Δ atgaggiþ.',
  'base.desc.prev': 'þata faurþis',
  'base.desc.pinned': 'þata gamunano',
  'base.desc.change': function(p){ return 'faur þo inmaidein þis „' + p.label + '“'; },
  'verdict.pp': function(p){ return p.v + ' dailos hunda'; },

  /* ---------------- Miþgaggando bandi ---------------- */
  'sb.cap': function(p){ return p.label + ' · ' + p.unit + (p.kaufkraft ? ', bi himma daga waírþa' : ''); },
  'sb.aria': function(p){ return 'Urruns: ' + p.label; },

  /* ---------------- Melja ---------------- */
  'tab.sens': 'Gafeheins',
  'tab.wf': 'Waírþis urrunsa',
  'tab.kap': 'Faihus wigs',
  'tab.zer': 'Menoþis gadailjan',
  'chart.error': function(p){ return 'Meljan ni mag: ' + p.msg; },
  'sens.legendY': function(p){ return 'y: ' + p.label + ' (' + p.unit + ')'; },
  'wf.up': 'ushafjiþ þata gawaurki',
  'wf.down': 'gadrausjiþ þata gawaurki',
  'wf.legend': 'Waírþ nu þis hrainis gawaurkis, bi himma daga waírþa',
  'wf.barinfo': function(p){ return p.label + ': ' + p.note; },
  'wfb.vp.label': 'Aflageins þizos Vorabpauschale',
  'wfb.zul.label': 'Gibos jah sundro wilwe afmaitans',
  'wfb.arch.label': 'Gildis gatimreins (þata anþar)',
  'wfb.agz.label': 'Anaaukans þis mizdogibandins',
  'wfb.tarif.label': 'Gildis missadails jah þata anþar',
  'wfb.kvpv.label': 'Siukei jah kara ana Versorgungsbezüge',
  'wfb.ep.label': 'Fralust gildis stike',
  'kap.rentbeg': 'Gildis anastodeins',
  'kap.swap': 'Faihu → gildis waldufni',
  'kap.legend': 'ganoh: all &nbsp;·&nbsp; gamaitan: freis',
  'zer.netto': 'hrains',
  'zer.tax': 'gild',
  'zer.kv': 'siukei/kara',
  'zer.pension': 'gild bi witoda',
  'zer.legend': '<span><i style="background:#808080"></i>gild</span><span><i style="background:#800000"></i>siukei/kara</span><span><i style="background:#800080"></i>fralusan gild bi witoda</span><span style="margin-left:auto">faihs grunduns = þata aflifnando</span>',

  /* ---------------- Wigs þizos rathjons ---------------- */
  'det.h.bav': 'bAV',
  'det.h.av': 'AV-faihu',
  'det.h.priv': 'sein',
  'det.h.kennzahl': 'Taikns',
  'det.h.wert': 'Waírþ',
  'det.erg.netto': 'All us þamma hrainin gibans (bi namin)',
  'det.erg.fremd': 'Framaþi faihu (anaaukans aiþþau gibos)',
  'det.erg.kapital': 'Faihu at anastodeinai þizos gibos',
  'det.erg.brutto': 'All þizo allaizo gibo',
  'det.erg.steuer': 'þizei waírþis- jah faihugild',
  'det.erg.kvpv': 'þizei siukeikara jah kara',
  'det.erg.rentenverlust': 'Fralust þis gildis bi witoda (gamanwiþ)',
  'det.erg.nettoausz': 'All þizo hrainjaizo gibo (bi namin)',
  'det.erg.bwausz': 'Waírþ nu þizo hrainjaizo gibo',
  'det.erg.bwaufw': 'Waírþ nu þis hrainis wilwis',
  'det.erg.ertrag': 'Waírþ nu þis hrainis gawaurkis',
  'det.erg.verhaeltnis': 'Rathjo gawaurkis du wilwa',
  'det.erg.irr': 'Inna wokrs (bi namin)',
  'det.erg.vorsprung': 'Faurþis wiþra þata sein faihu',
  'det.mon.brutto': 'Alla giba bi menoþ',
  'det.mon.steuer': 'inuh waírþis- jah faihugild',
  'det.mon.kvpv': 'inuh siukeikara jah kara',
  'det.mon.ep': 'inuh fralust þis gildis bi witoda',
  'det.mon.netto': 'HRAINS BI MENOÞ (bi himma daga waírþa)',
  'det.diag.beitrag': 'Alls gibands bAV bi menoþ',
  'det.diag.aufwand': 'Hrains wilwa bi menoþ (frumist jer)',
  'det.diag.grenzsteuer': 'Marko gildis rathjo in bairgandein (frumist jer)',
  'det.diag.ersparnis': 'Alla bairgandeins rathjo (gild jah gibandeis), frumist jer',
  'det.diag.svAG': 'sunjeina bairgandeins þis mizdogibandins',
  'det.diag.svAN': 'sunjeina bairgandeins þis asneis',
  'det.diag.ngef': 'Dails þize bAV-gibande inuh giba (frumist jer)',
  'det.diag.aussch': 'Brukeins þis witodis waldufnjis (4 % BBG-RV)',
  'det.diag.agzVar': 'þizei anaaukans: bi hunda (frumist jer)',
  'det.diag.agzFix': 'þizei anaaukans: gasatiþ waírþ (frumist jer)',
  'det.diag.agzFixUeber4': 'gasatiþs anaaukans ufar þamma 4-%-kasa (ni rathiþs swe kaurei)',
  'det.diag.vbMonat': 'Versorgungsbezug bi menoþ at anastodeinai',
  'det.diag.freibetrag': 'Freihals Versorgungsbezüge in þamma samin jera',
  'det.diag.vbQuote': 'Rathjo Versorgungsbezug du þamma freihalsa',
  'det.diag.kapFreiKapital': 'gibandins freis mahteigs faihu (faihus giba)',
  'det.diag.kapFreiRente': 'gibandins freis mahteigs faihu (gild all ald)',
  'det.diag.memoRest': 'GAMUNAN: bAV-gildis gibos afar þizai markai',
  'det.diag.memoRestAv': 'GAMUNAN: faihugild afar þizai markai',
  'det.diag.wiederanl': 'Aftra lagjandins wokrs afar gilda',
  'det.diag.kapstEff': 'sunjeins faihugild miþ anaaukana jah aíkklesjons gilda',
  'det.diag.bestAnteil': 'Gildis skula dails þis gildis bi witoda',
  'det.anspar.h.jahr': 'Jer',
  'det.anspar.h.brutto': 'All',
  'det.anspar.h.beitrag': 'bAV-gibands',
  'det.anspar.h.agzVar': 'Anaauk. %',
  'det.anspar.h.agzFix': 'Anaauk. gasat.',
  'det.anspar.h.sv': 'Gib.-bairg.',
  'det.anspar.h.st': 'Gildis bairg.',
  'det.anspar.h.netto': 'Hrains wilwa',
  'det.anspar.h.zul': 'Gibos',
  'det.anspar.h.kbav': 'Faihu bAV',
  'det.anspar.h.kav': 'Faihu AV',
  'det.anspar.h.kpriv': 'Faihu sein',
  'det.row.year': function(p){ return p.jahr + ' (alds ' + p.alter + ')'; },
  'det.ausz.h.jahr': 'Jer',
  'det.ausz.h.bavBr': 'bAV all',
  'det.ausz.h.kvpv': 'siukei/kara',
  'det.ausz.h.steuer': 'Gild',
  'det.ausz.h.mind': 'Gildis minneins',
  'det.ausz.h.bavNet': 'bAV hrains',
  'det.ausz.h.avBr': 'AV all',
  'det.ausz.h.avNet': 'AV hrains',
  'det.ausz.h.privBr': 'sein all',
  'det.ausz.h.privNet': 'sein hrains',
  'det.ann.h.annahme': 'Anahaha',
  'det.ann.h.vertrauen': 'Trauains',
  'det.ann.h.anmerkung': 'Gameleins',
  'det.ann.r1.a': 'Rathjons mikilein 2026, § 32a-gild 2026',
  'det.ann.r1.c': 'SVBezGrV 2026, Steuerfortentwicklungsgesetz',
  'det.ann.r2.a': 'Skula siukeins jah kararis ana Versorgungsbezüge',
  'det.ann.r2.c': '§§ 229, 250 SGB V',
  'det.ann.r3.a': 'Freihals § 226 Abs. 2 S. 2 SGB V (siukei)',
  'det.ann.r3.c': 'unsakans',
  'det.ann.r4.a': 'Marka in staþ freihalsis in þamma kararja',
  'det.ann.r4.c': 'so managista missataujands in raginon',
  'det.ann.r5.a': 'Gibandins freihals þizos AV-faihus gibos',
  'det.ann.r5.c': 'ni sind Versorgungsbezüge',
  'det.ann.r6.a': 'Halbs missadails du unigibanaim dailam',
  'det.ann.r6.c': '§ 22 Nr. 5 S. 2 Buchst. b i.V.m. § 20 Abs. 1 Nr. 6 S. 2 EStG',
  'det.ann.r7.a': 'Anaaukans und þo sunjeinon bairgandein ainata',
  'det.ann.r7.c': 'so anþara ragin þo 15 % swe bloþa gasateins liusiþ',
  'det.ann.r8.a': 'Sundro wilwe maists 2.340 €',
  'det.ann.r8.c': 'ANAHAHA ÞIS FRISAHTIS. Stojiþ, jabai barn þata waírþ þis AV-faihus ushafjiþ aiþþau gadrausjiþ',
  'det.ann.r9.a': 'KVdR-skula kara in aldin anahahana',
  'det.ann.r9.c': 'wiljandans gakarodai ni gasokidai',
  'det.t.prinzip': 'So anastodeins þizos gagaleikeinais',
  'det.t.erg': 'Urruns bi ainƕarjammeh',
  'det.t.mon': 'Menoþis giba, gadailiþa',
  'det.t.diag': 'Gasakeins',
  'det.t.anspar': 'Bairgandeins, jer bi jera',
  'det.t.ausz': 'Gibos mel, jer bi jera',
  'det.t.ann': 'Swinþei þizo anahahano',

  /* ---------------- Bairgan jah gadailjan ---------------- */
  'msg.loaded': 'Usnumana.',
  'msg.loadError': function(p){ return 'So boka ussiggwan ni mahta: ' + p.msg; },
  'msg.reset': 'Aftra gasatiþ du þamma grunduna.',

  /* ---------------- PWA ---------------- */
  'pwa.installBtn': 'Gasatjan',
  'pwa.installed': '<b>Gasatiþ.</b> Nu bigitis þata waurstw miþ þaim anþaraim.',

  /* ---------------- Gaskeireinos at þaim staþam (?) — niujaims frisahtim, laggizo taikneins ---------------- */
  'f.I:gehalt.hint': 'Inuh ainmeljam gibom. Markeiþ þeinana gildis marka jah þamma markin gibandins.',
  'f.I:beitrag.hint': 'Alls gibands bi witoda § 1a BetrAVG. Witodis waldufni ist ains und 4 dailos hunda þizos markos gibandins RV; ufaro þarf wiljan þis mizdogibandins.',
  'f.I:netto_ziel.hint': 'Þata waírþ, þatei þeinata faihu minneiþ in frumistin jera — sa sunjeino afletands brukeins. Þata samo waírþ in allaim þrim wiljom lagjada; þata ist du garaihtai gagaleikeinai. Bi þamma allin gibandin marka wahseiþ sinteino, jah mag aftra rathjan.',
  'f.I:agzus.hint': 'Witodis minnists 15 dailos hunda (§ 1a Abs. 1a BetrAVG); managai mizdogibandans maizo giband. Faur galeikan wiþra þata sein faihu jainar, þarei anaaukans jah sein faihu galeika sind, bi rathjons kurvai gakannjan mag.',
  'f.I:agz_fix.hint': 'Gasatiþs anaaukans us gildis triggwai aiþþau waurstwis gaqissai — bi Deutsche Bahn jah managaim anþaraim triggwom, þarei anaaukan du 15 dailom hunda § 1a Abs. 1a BetrAVG. Sa ist gibands þis mizdogibandins bi § 3 Nr. 63 EStG jah gafulleiþ frumist þana 8-%- jah 4-%-kas (§ 1 Abs. 1 S. 1 Nr. 9 SvEV): þeina eigin inmaideins þau minnizo jah diurizo wairþiþ.',
  'f.I:agz_fix_dyn.hint': 'Gasatiþa waírþa standand bi namin in triggwai jah wahsjand ains at niujaim triggwom — þata frumo bi namin unwandiþ. Bi 27 jerarm jah 2 dailom hunda wairþis wahstaus aflifniþ 1,02⁻²⁷ ≈ 0,59; sa izei þata filu unweniggo domeiþ, waljai „miþ þamma mizdon“.',
  'f.I:agzus_sv.hint': '„Bi sunjai rathiþ“ ist witodis waurd: § 1a Abs. 1a BetrAVG skula ist anaaukan swa filu, swa filu sunjeino sa mizdogibands gibandeins ganohjiþ. Jabai þeina mizdo ufar bajoþum markom ist, ni waihts ganohjiþ jah ni waihts skula ist. Bi þamma raidjan in frumistin faihau bi 21 dailom hunda ustauhans wairþiþ. Trauains þis rathidins hugis wisiþ bi 75 dailom hunda.',
  'f.I:dyn.hint': 'Jabai sa gibands wahseiþ miþ mizdons wahstau, brukeins þis 8-%-kasis jerarm samalaus stands. Jabai bi namin unwandiþs standiþ, waírþ is gadrauseiþ miþ wairþis wahstau — jah so hraina wilwa, þoei þo anþaro twa wilja gakannjan skulun, samalaus gadrauseiþ.',
  'f.I:rendite.hint': 'Faur wilwa, faur gild. In allaim þrim wiljom sama ETF — swa aina galeikan mag gibandane gatimreins, ni faihufrijans domos.',
  'f.I:alter.hint': 'Anastodeins þizos bairgandeins. Jer 0 = 2026.',
  'f.I:rentbeg.hint': 'Anastodeins þizos gibos allaim þrim wiljom. Þata Altersvorsorgedepot mag frumist fram 65 jeram gibada (niujoþ 2026).',
  'f.I:kv_ruhe.hint': 'Sa mahteiga skalks. In witodis siukeikarai waurstwis gild sind Versorgungsbezüge jah bairand alla gibandeins rathjo (§§ 229, 250 SGB V); seina aldiskara ni bairiþ. Aina þata gasateins urruns wandeiþ.',
  'f.I:auszform.hint': 'Haubidafaihu: in jera niman gildis skula all, siukeins gibandeis ana 120 menoþum gadailidai (§ 229 Abs. 1 S. 3 SGB V). Þata gild all ald þana niman ufar alla libains ufþanjiþ jah swa managizo faihu undar þamma samin freihalsa gaskeirmeiþ. Sa frisahts kann ains all aiþþau ni waiht; halba haubidafaihu bAV ni ist frisahtida.',
  'f.I:teilkap.hint': 'Und 30 dailos hunda þis bairgadins faihaus mag at anastodeinai þizos gibos swe ains gibans niman — in bajoþum haidum. Sa kostuli ist twaim fairinom: alla wahsteins in jera niman jah afar þamma ains wokrs afar faihugilda. Þata ufarist ufar jeris maistin waírþa (,,sleeve") inuh ainana gibans gildada; þata ist frisahtis biuhti, ni witodis waihts.',
  'f.I:av_auszform.hint': 'Þata þatei miþ þamma faihau afar þamma ainamma gibanin gataujada — sundro af þamma bAV-anahaha. Garaideins gibos: þata faihu bairgada jah miþ wokra niman wairþiþ; so unigibana dails miþ halbamma missadailis gildada. Gild all ald: haubidafaihu du þamma gibandin galeiþiþ, akei so unigibana dails ains miþ akranis dailai gildada (§ 22 Nr. 5 S. 2 Buchst. a EStG, 17 dailos hunda fram 67 jeram, her 26 dailos hunda). So gibana dails in bajoþum haidum all afargildan wisiþ, þata ni wandeiþ.',
  'f.I:agz_fix_min.hint': 'Galeikonda frisahta gabindand gasatiþ waírþ du minnistin eiginamma gibandin. 0 qiþiþ inuh haha — þan þata anaaukan in ƕarjammeh jera waurstwis rinniþ, jah miþ ni waihtai gibandin. Saíƕ du frisahtis hugja: sunjeins inuh haha anaaukans ni wesi missadails þis inmaideinais anahaha jah galagidedi wiþra bAV, þauhjabai jah inuh inmaidein rinnaidi. Ana-melei ains þata izei bi sunjai at gadaila hangeiþ.',
  'f.I:rentfak_av.hint': 'Ains at þamma faihau gild waírþandin. Faurgasatiþ swaswe at bAV; faihus triggwa inuh siukeinai gawi wisan mag jah swa batizo wisan. At 0 nist gild.',
  'f.I:rentdyn_av.hint': 'Ufarwaurstw dails aiþþau gawi wahstus in gildis melam þis faihus triggwons.',
  'f.I:rentfak.hint': 'Ains at gibos haidau „gild“. 26 € menoþis gild bi 10.000 € ist swe 3,1 dailos hunda niman. Standiþ in bokom þis waurstwis kunþeis.',
  'f.I:rentdyn.hint': 'Ufarwaurstw dails aiþþau gawi wahstus in gildis melam.',
  'f.I:fuenftel.hint': '§ 34 EStG at garaidamma haubidafaihaus giban us § 3 Nr. 63-triggwom bi BFH X R 23/15 ains suman brukjada. Arniba: ne.',
  'f.I:planende.hint': 'Garaideins gibos rinnand und her. Gild all ald bi samin markai galeikada; þata þatei afar rinniþ, standiþ swe gamunan undar „Gasakeinai“. Sa izei alds wairþiþ, jainar gawinniþ.',
  'f.I:ausscheid.hint': 'Fram her ni mizdo ni gibands. Þata faihu wokreiþ und anastodein þizos gibos.',
  'f.I:tzalter.hint': 'Ƕarjatoh waírþ fram gibos anastodeinai qiþiþ: ni halb waurstw. Faurgasatiþ þaruh ist 67.',
  'f.I:tzfaktor.hint': 'Dails þizos fulla waurstwis mizdons. 60 dailos hunda = 60-hunda staþs.',
  'f.I:gsteig.hint': 'Jah bairiþ faurþis markos gibandins, Bezugsgröße, midjaizos mizdons jah gildis waírþis.',
  'f.I:stkl.hint': 'Mahteigata ist sa GILDIS HAIDUS, ni sa mizdons gildis flokks: sa flokks stiuriþ ains in jera afmaitans, jera bokos rathjand swa-þeh miþ halbam bi § 32a Abs. 5 EStG. At „samana“ nauþaba ana-mel þata gildis waírþ þis gadailans.',
  'f.I:partner.hint': 'Ains at samana gilda. Rathjada 2·ESt((zvE + zvE_gadails)/2).',
  'f.I:kist.hint': '8 dailos hunda in Bayern jah Baden-Württemberg, aljaþro 9, 0 uslaisjandin us aíkklesjon. Jah faihugild gateihiþ: 0,25/(1+0,25k)·(1+0,055+k).',
  'f.I:tarifanp.hint': 'All gild wraidjada bi faihugawaurkja λ = (1+x)^t: ESt = s·λ·T(zvE/s/λ). Þata samalaus ist swaswe allaize marko galeika wraist. 0 dailos hunda ataugeiþ all kalda wahstu.',
  'f.I:kinder.hint': 'Barne giba in Altersvorsorgedepot: 1 € bi ƕarjamme € gibanamma, und 300 € bi barna.',
  'f.I:kind_jahre.hint': 'So barne giba hangeiþ at waldufnja barne mizdons (§ 85 EStG), þaruh ni rinniþ all þairh bairgandein.',
  'f.I:kinderlos.hint': '0,6 dailos hunda anaaukans du kararis gibandein, ains us asneis (§ 55 Abs. 3 SGB XI).',
  'f.I:k_bav.hint': 'Siukeinai gawi jah TER. Sunjeina wilwa standand in bokom kunþeis — jainar saíƕ, ni domei.',
  'f.I:k_av.hint': 'At garaidamma faihau sunjeina wilwa bi witoda markida sind du 1,0 daila hunda bi jera.',
  'f.I:k_priv.hint': 'Hlutrs TER breidis fairƕaus ETF.',
  'f.I:infl.hint': 'Gadraus rathjo allaim waírþam „bi himma daga waírþa“. Lytil wandeiþ þo raihtein, akei alla hauheins.',
  'f.I:sonst_zve.hint': 'Frumist so gildis skula dails þis gildis bi witoda, inuh þo her galeikanona faihu. Markeiþ marko gildis rathjo in gibos melam — jah swa gildis missadails t₀ − t₁.',
  'f.I:rente_br.hint': 'Ains du markai in siukeikarai: gild bi witoda jah Versorgungsbezüge aina marka gibandins gadailand (§ 223 Abs. 3 SGB V).',
  'f.P:bbg_rv.hint': 'SVBezGrV 2026 (BGBl. 2025 I Nr. 116), samalaus and alla þiudangardja.',
  'f.P:bbg_kv.hint': 'SVBezGrV 2026; 5.812,50 € bi menoþ.',
  'f.P:bezug.hint': 'SVBezGrV 2026, 47.460 € bi jera. Ains tigjus dails þis ist sa freihals Versorgungsbezüge in siukeikarai (§ 226 Abs. 2 S. 2 SGB V).',
  'f.P:de_rv.hint': 'Anahangs 1 du SGB VI, waírþ 2026 — talzeins þize gildis stike.',
  'f.P:rw.hint': 'Rentenwertbestimmungsverordnung 2026, fram 1.7.2026: 42,52 € (+4,24 dailos hunda).',
  'f.P:rv_an.hint': '18,6 dailos hunda, halba jah halba.',
  'f.P:av_an.hint': '2,6 dailos hunda, halba jah halba.',
  'f.P:kv_allg.hint': '§ 241 SGB V.',
  'f.P:kv_zus.hint': 'Kunþi þis BMG; ƕarjoh kara anþarleiko — ana-melei þeinaizos karos rathjo.',
  'f.P:pv_ges.hint': '§ 55 SGB XI. Barne gaminnein fram anþaramma barna ni frisahtida ist.',
  'f.P:pv_an.hint': 'In Sachsen anþarleiko (2,3 dailos hunda).',
  'f.P:pv_kl.hint': '§ 55 Abs. 3 SGB XI, ains us asneis.',
  'f.P:gfb.hint': '§ 32a Abs. 1 EStG bi Steuerfortentwicklungsgesetz.',
  'f.P:e2.hint': 'Marko gildis rathjo wahseiþ fram 14 du 23,97 dailom hunda.',
  'f.P:e3.hint': 'Marko gildis rathjo wahseiþ fram 23,97 du 42 dailom hunda.',
  'f.P:e4.hint': 'Fram 277.826 € galeikaiþ 45 dailos hunda.',
  'f.P:a2.hint': 'ESt = (a₂·y + b₂)·y, y = (zvE − grunduns freihals)/10.000.',
  'f.P:a3.hint': 'ESt = (a₃·z + b₃)·z + c₃, z = (zvE − 17.799)/10.000.',
  'f.P:c4.hint': 'ESt = 0,42·zvE − c₄.',
  'f.P:c5.hint': 'ESt = 0,45·zvE − c₅.',
  'f.P:soli.hint': 'SolzG 1995.',
  'f.P:soli_fg.hint': '2026, grunduns gild, bi þamma garaihtin ESt; at halbam twaifalþs. Jah qairrei marka.',
  'f.P:soli_mz.hint': '§ 3 Abs. 2a SolzG.',
  'f.P:an_pausch.hint': '§ 9a S. 1 Nr. 1a EStG.',
  'f.P:sa_pausch.hint': '§ 10c EStG.',
  'f.P:kapst.hint': '§ 32d Abs. 1 EStG.',
  'f.P:tfs.hint': '§ 20 Abs. 1 Nr. 3 miþ § 20 InvStG, dails aktjono ufar 50 dailom hunda.',
  'f.P:sparerpb.hint': '§ 20 Abs. 9 EStG; at halbam twaifalþs. Frajiuhiþ mikila dail þizos Vorabpauschale — saíƕ waírþis urrunsa.',
  'f.P:basiszins.hint': 'BMF-boka fram 13.01.2026, § 18 Abs. 4 InvStG (2025: 2,53 dailos hunda). Gasatjan du 0 qiþiþ: ni waihts Vorabpauschale.',
  'f.P:vp_faktor.hint': '§ 18 Abs. 1 S. 1 InvStG.',
  'f.P:st_frei_q.hint': '8 dailos hunda BBG-RV = 8.112 € in 2026.',
  'f.P:sv_frei_q.hint': '§ 1 Abs. 1 S. 1 Nr. 9 SvEV; 4 dailos hunda = 4.056 € in 2026. Samana so marka þis witodis waldufnjis bi § 1a BetrAVG.',
  'f.P:zul_g1.hint': 'Altersvorsorgereformgesetz, waldands fram Maja 2026, brukjan fram 1.1.2027.',
  'f.P:zul_s1.hint': 'Und 360 € eigin gibands: 50 skatte bi €.',
  'f.P:zul_g2.hint': 'Fram 361 und 1.800 €: 25 skatte bi €.',
  'f.P:zul_s2.hint': 'Maists gibans eiginis gibandis; gataujiþ maist grunduns giba 540 €.',
  'f.P:kind_zul.hint': '1 € bi ƕarjamme € gibanamma, und 300 € bi barna.',
  'f.P:av_max.hint': 'BMF-fraihn bi niujein þizos gibanodons seinons kararis, 05.05.2026. Þata ufaro rinniþ in anþaramma wiga, sa ist gildiþs swaswe sein faihu.',
  'f.P:av_sa_max.hint': 'ANAHAHA ÞIS FRISAHTIS, trauains hugs 70 dailos hunda. Eigin gibands und 1.800 € jah gibos. Þata aina rathjo stojiþ, jabai barn þata waírþ þis AV-faihus ushafjiþ aiþþau gadrausjiþ.',
  'f.P:ertragsq.hint': '§ 22 Nr. 1 S. 3 Buchst. a Doppelbuchst. bb EStG, du unigibanaim gildis dailam.',
  'f.P:halb.hint': '§ 20 Abs. 1 Nr. 6 S. 2 EStG galeiko (triggwa ufar 12 jera, giba afar 62): halbs missadails. Trauains hugs 80 dailos hunda.',

  /* ---------------- Alla waurda, fotus, taikneis ---------------- */
  'app.meta': 'Waurstwis aldiskara, Altersvorsorgedepot jah sein ETF-faihu galeikan bi samin hrainjamma wilwa. Witodis stojan 2026.',
  'hdr.sub': 'Waurstwis aldiskara, Altersvorsorgedepot jah sein ETF-faihu &mdash; bi <b>samin hrainjamma wilwa</b> jah samin ETF. Witodis stojan 2026.',
  'input.sub': 'Þos rathjons sunsaiw niujaizos wairþand at ƕarjammeh inmaidein. Miþ <span class="qm" style="cursor:default">?</span> ƕarjizuh staþs sik silban gaskeireiþ.',
  'extra.sub': 'All her habaiþ goda faurgasateina. Ni tekan, niba þuk gadob.',
  'calc.sub': 'Allaim izei wiljand þamma wiga afargaggan.',
  'share.sub': 'Þeina waurda sind ains in þamma waurstwa (<kbd>localStorage</kbd>). Ni waiht wairþiþ sandiþ, nist waldufni ni spaikulatjands.',
  'footer.1': '<b>Ni ist gildis aiþþau faihu ragineins.</b> Frisahts nist triggwa. Witodis stojan 2026 bi niujein seina kararis in managam staþam ni ist andjis skeirjada; þo anahahona miþ minnistin trauainshugja standand undar „Wiga þizos rathjons → Swinþein þizo anahahano“ jah mahtjand jainar wandjan.',
  'footer.2': 'Sa rathjons kern ains du ainamma ustauhans us þamma frumistin Excel-frisahtja jah wiþra þrins fraisteinins bi asanjis raihtein gakannids (maists galeiks missaleikeins 1,3·10<sup>&minus;14</sup>).',
  'metric.monat.desc': 'Samaleiks menoþis giba all gibos mel miþ þamma samin waírþa, bi himma daga waírþa. Þata aina rathjo, þatei mag galeikan miþ þeinamma hrainjamma faihau nu.',
  'metric.ertrag.desc': 'Þatei sa wilja bi himma daga waírþa ufar eiginana anafilh gataujiþ: waírþ nu allaizo hrainjaizo gibo inuh waírþ nu þis hrainis wilwis.',
  'metric.irr.desc': 'Wokrs ana þamma sunjeino galagidin hrainjamma faihau, bi namin. Galeiks miþ þamma gasatidin allamma wokra þis ETF — so missaleikeins ist bi sunjai þatei giba jah gibandeis samana kostjand aiþþau giband.',
  'metric.kapital.desc': 'Faur gild jah faur gibandeis, bi namin. Ana willja NI ist so anahaha rathjo: bAV managizo her faurþis ist, akei fraliusiþ in gibai.',
  'ui.couple': '<span>⇅</span> Twa saíƕa ana þata samo mikilein. Wandei aina, so anþara laisteiþ.',
  'ui.legalNote': 'Witodis mikileins miþ bokos staþa. Ains wandei, jabai witoþ wandiþ ist aiþþau þeina kara anþarleiko ist.',

  /* ---------------- Bi haha gameleinos at þaim raidjam ---------------- */
  'n.beitrag.ueber8': function(p, f){
    return 'Ufar 8 dailom hunda þizos markos gibandins RV (' + f.eur(p.v8) + ' bi jera). So dails '
      + 'ufaro ni gildis ni gibandeis batizei ist — galeiþiþ in siukeinai gawi jah jainar niman '
      + 'skula siukeikarai ains.'; },
  'n.beitrag.ueber4': function(p, f){
    return 'Ufar 4 dailom hunda þizos markos gibandins RV (' + f.eur(p.v4) + ' bi jera). Und her '
      + 'habais witodis waldufni bi § 1a BetrAVG, ufaro þarft wiljan þis mizdogibandins.'; },
  'n.agzus.gedeckelt': function(p, f){
    return 'Markiþ at ' + f.pct(p.quote, 1) + '. Sa mizdogibands sunjeino ganohjiþ ains '
      + f.eur2(p.ersparnis) + ' bi jera — hauhizo waírþa her ni waihts wandjand, und þatei sa '
      + 'haidus „bi sunjai rathiþ“ standiþ.'; },
  'n.agz_fix.fliesstNicht': function(p, f){
    return 'Ni rinniþ: þeins menoþis gibands ' + f.eur2(p.beitrag) + ' undaro þizai minnistin '
      + 'markai ' + f.eur2(p.schwelle) + ' ist (staþs undar „Anþaraim waurdam“).'; },
  'n.agz_fix.ueber4': function(p, f){
    return 'Sa gasatiþa anaaukans ains ufariddja þana 4-%-kas (' + f.eur(p.topf)
      + ' bi jera) bi ' + f.eur(p.ueber) + '. So dails at þus wesi gibandeins mizdo — sa frisahts '
      + 'ni rathjiþ þo anaaukanon kaurein jah þau bAV þiuþeigo domeiþ.'; },
  'n.agz_fix.verdraengung': function(p, f){
    return 'Gafulleiþ frumist þana 4-%-kas: fram þeinamma eiginamma gibandin aflifniþ ains '
      + f.eur(p.rest) + ' gibandeis freis. Þeina hraina wilwa þau wahseiþ — sa anaaukans swe-þeh '
      + 'gibans faihu ist, ains wandeiþ marka þeinaizos eiginons.'; },
  'n.agz_fix.ueber8': 'Samana miþ þamma eiginin gibandin ufar 8 dailom hunda BBG-RV — þata ufarist ni gildis ni gibandeis batizei ist.',
  'n.agz_fix_min.knapp': function(p, f){
    return 'Þu ist ains ' + f.eur2(p.d) + ' ufar markai. Undaro fraliusiþ sa gasatiþa anaaukans '
      + 'allata: wokrs þis spedistins gibandins € ist her unandeis, gabundi all ↔ hrains jainar '
      + 'unstands.'; },
  'n.agz_fix_min.verfehlt': function(p, f){
    return 'Marka ni gataihana — ' + f.eur2(p.fehlt) + ' maizo bi menoþ irsjand ' + f.eur2(p.zuschuss)
      + ' anaaukan. Þata ist filaus sinteino sa batista € in allamma frisahtja.'; },
  'n.teilkap.kosten': function(p, f){
    return 'Kostuli ' + (p.gewinn ? 'ni waiht, ak: ' + p.dtxt : p.dtxt + ' ' + p.unit)
      + ' wiþra hlutr gildis gawaírþeins. Fairina: sa ains gibands in jera niman all gildis skula '
      + 'ist (marko kaurei jainar ' + f.pct(p.grenz, 1) + ') jah afar þamma wokreiþ ains bi þamma '
      + 'faihugildis rathjon, ni bi frisahtis akrana.'; },
  'n.av_auszform.horizont': function(p, f){
    return 'Ufar þo gagaleikeinais marka gildiþ þata gild nauh ' + f.eur(p.rest)
      + ', þoei her NI rathidos wairþand. Gasatiþa marka sinteino minneiþ ƕarjatoh gild all ald — '
      + 'sa izei alds wairþiþ, jainar gawinniþ.'; },
  'rank.swap': function(p, f){
    return '<b>Þos taikneis sik ni gaqiþand.</b> Bi menoþis gibai '
      + p.a + ' faurþis ist wiþra ' + p.b + ', bi waírþa nu þis hrainis gawaurkis ist anþaraleiko. '
      + 'Fairina: waírþ nu gadrauseiþ miþ wairþis wahstau (' + f.pct(p.infl, 2) + '), so menoþis '
      + 'giba gildiþ miþ þamma aftra lagjandin wokra afar gilda (' + f.pct(p.wiederanl, 2) + '). '
      + 'Swa filu þo twa distandand, swa batizo faur giban haubidafaihu standiþ. Ƕarja taikns '
      + 'galeikaiþ, hangeiþ at þamma jabai þu wildeis lagjan aiþþau frawardjan — at „frawardjan“ '
      + 'gasatei waírþ in staþa „Wilwa seinis ETF-faihaus“ swa þatei sa aftra lagjands wokrs du ni '
      + 'waihtai galeiþiþ.'; },
  'warn.unreachable': 'So hraina wilwa ni mag gataihana wairþan — ufariddja þeina mizdon. Gasatiþ ist sa hauhista mahteiga waírþ.',
  'warn.inactive': 'In frumistin jera bi þeinaim waurdam ni þu leikis ïn waurstwa — nist mizdons inmaideins, þaruh ni hraina wilwa, du þizaiei alls gibands aftra rathiþs wairþan mahtedi. Saíƕ „Afleiþan af waurstwa“ jah „Alds himma daga“.',
  'verdict.lead': function(p){
    return '<b>' + p.satz + '</b> faurþis ist miþ ' + p.wert + ' — ' + p.d2 + ' maizo þau ' + p.nom2
      + (p.nom3 ? ' jah ' + p.d3 + ' maizo þau ' + p.nom3 : '') + '.'; },
  'verdict.top': function(p, f){
    return ' Sa maista ains staþs in þamma mita ' + p.gen + ' wiþra sein ETF-faihu ist „' + p.label
      + '“ — jah ' + (p.pro ? 'du batin' : 'du skaþa') + ' ' + p.gen
      + ', miþ ' + f.eur(p.wert) + ' waírþa nu. Alla gadaila standiþ undar „Waírþis urrunsa“.'; },
  'verdict.band': function(p, f){
    return '<span class="band">Ƕan swinþ ist þata? At allamma wokra ' + f.pct(p.lo, 1)
      + ' und staþ ' + f.pct(p.mid, 1) + ' wesi þata ' + p.vlo + ', at ' + f.pct(p.hi, 1) + ' wesi '
      + p.vhi + ' — sa urruns '
      + (p.stabil ? 'in þamma miton samalaus standiþ.'
                  : '<b>in þamma miton anþaraleiko wandeiþ</b>, þata urruns her ni bairiþ.')
      + '</span>'; },
  'demo.text': '<b>Þata nauh frisahtis waírþa sind</b> — 40 jera alds, 75.000 € jeris all mizdo, 300 € mizdons inmaideins bi menoþ, bi witoda siukeins. Ana-melei undar „Þeinaim waurdam“ þo þeina eigina; þata gamunan þau silbo galeiþiþ.',
  'sens.readout': 'Gamaitan: þeins nu waírþ. Hringa: mitands staþeis miþ þamma seinamma faihau. Ufar þamma wiga fara aiþþau tekan du waírþam.',
  'sens.note': function(p){
    return 'Sa spedists wagida raidjan rathiþs wairþiþ all þairh sein mit — ' + p.n
      + ' fulla frisahtis rinneina. Nu: „' + p.label + '“. '
      + 'Wagei anþarana raidjan, jah sa wigs wandeiþ miþ.'; },
  'sens.noteNetto': function(p, f){
    return ' Saíƕ: sa raidja jah þo hrainjon wilwa wandeiþ (her ' + f.eur2(p.lo) + ' und '
      + f.eur2(p.hi) + ' bi menoþ) jah swa þata waírþ, þatei in allaim þrim wiljom lagjada. Þaruh '
      + 'þos þrijos kurvos at ƕarjammeh x garaihto galeikan magun, akei so hauheins miþ anþaraim x '
      + 'ni. Þos wraikwitha sind at markom gibandins (' + f.eur(p.bbgkv) + ' du KV/PV, '
      + f.eur(p.bbgrv) + ' du RV/AV) jah at gildis markom.'; },
  'wf.check': function(p, f){
    return 'Fraisteins: ' + f.eur(p.start) + ' + ' + f.eur(p.summe) + ' = ' + f.eur(p.start + p.summe)
      + ' (skuldedi ' + f.eur(p.ende) + ' wisan, missaleikeins ' + f.nf2(p.start + p.summe - p.ende) + ' €).'; },
  'wf.note': 'Gadails all fram andjin, þaruh garaihto ustauhana — akei ist <b>gataujis raihtjis</b>: þos maht ni magun distekan wairþan, ƕarjatoh stikls mitiþ dail <i>gadob</i> þaim ufaro standandam. Tek stikl du gaskeireinai.',
  'wfb.vp.note': 'Nih bAV nih Altersvorsorgedepot Vorabpauschale (§ 18 InvStG) kunnun. Mitiþ swe sein faihu inuh Vorabpauschale inuh miþ. Sa stikls mag gadraus wisan: so Vorabpauschale filu galeiþiþ in bairgandins afmaitan, akei ushaufiþ all þana kostuli grundu — jah þau ist sa seinamma faihau hlutr batizei.',
  'wfb.zul.note': 'Framaþi faihu bi niujamma gibos frisahtja jah afmaitans bi § 10a EStG. Mitiþ miþ afwandjan bajoþe wige.',
  'wfb.arch.note': 'Gildis missadails t₀ − t₁ jah all anþar. Þata aflifnando garaihtiþ, þatei so keþja garaihto gaggai.',
  'wfb.agz.note': 'Framaþi faihu — sa ainata gatimreinis batizei þizos bAV, saei ni us gildis witoda qimiþ. Mitiþ miþ afwandjan þana anaaukan.',
  'wfb.tarif.note': 'Marko gildis rathjo at gibandin inuh at niman, jah all anþar. Þata aflifnando garaihtiþ, þatei so keþja garaihto gaggai. Gildis gaaukeins ains ni waiht ist: (1−t)(1+r)ⁿ = (1+r)ⁿ(1−t), managfaldeins wandeiþ ni þata waírþ.',
  'wfb.kvpv.note': '§§ 229, 250 SGB V: alla gibandeins rathjo sa gildis niutands ains bairiþ. Mitiþ swe missaleikeins wiþra gasateins „seina siukei in aldin“.',
  'wfb.ep.note': 'Mizdons inmaideins minneiþ þata gibandeins mizdo jah swa gild bi witoda. Hrains rathiþs.',
  'kap.readout': function(p, f){
    return 'At gildis anastodeinai gabundans: bAV ' + f.eur(p.bavGeb) + ' us ' + f.eur(p.bav)
      + ' · AV-faihu ' + f.eur(p.avGeb) + ' us ' + f.eur(p.av)
      + ' · sein faihu ' + f.eur(0) + ' us ' + f.eur(p.priv)
      + '.  So galeika menoþis giba niman wairþiþ, þaruh ƕarjatoh wilja at ni waihtai andjiþ.'; },
  'kap.note': function(p, f){
    return 'Faihus standa in frisahtja, in gibos melam anaaukan miþ hrainjaba aftra lagidaim '
      + 'gibom (' + f.pct(p.wiederanl, 2) + ' afar gilda) jah inuh so galeika menoþis giba, '
      + 'sunjeino niman. Þaruh ƕarjatoh wilja garaihto at ni waihtai rinniþ. Unte þata niman ains '
      + 'us aftra lagjan galeiþiþ jah þata frisahtis haubidafaihu in frisahtja aflifniþ, þarei miþ '
      + 'frisahtis akrana faur gild wahseiþ, þos kurvos swe-þeh ni galeiko rinnand. '
      + '— So gamaitana raihta ist so freis brukjanda dails: bAV und gildis anastodein all '
      + 'gabundana ist (§ 1b BetrAVG kann unfralusan waldufni, ni freihals), at Altersvorsorgedepot '
      + 'niman faur 65 jera skaþuli ist jah freis ains þata ufarist ufar jeris maistin waírþa, sein '
      + 'faihu ist sinteino freis. Þata ist sa ainata wigs, þarei haubidafaihaus giba goda '
      + 'ïnsaihiþ. '
      + (p.verrentet ? 'Unte þu þata faihu gildis, jainar jah þata haubidafaihu du þamma gibandin '
          + 'galeiþiþ — so kurva bi þamma gadrauseiþ, þauhjabai ni waiht fralusans ist. ' : '')
      + 'Jah aftra swikunþaba: þos kurvos ataugjand þata aigin us ÞAMMA AINAMMA anahaha, ni all '
      + 'þeinata aigin.'; },
  'zer.readout': 'All swe samaleiks menoþis giba bi himma daga waírþa. Unte gildan raihts ist, þos dailos garaihto samaþ rathjand.',
  'zer.note': function(p, f){
    return 'Sa mel ist samalaus in allaim þrim wiljom. Ains gibands haubidafaihaus ni gadailiþs '
      + 'wairþiþ in twalibim, ak miþ þamma aftra lagjandin wokra afar gilda (' + f.pct(p.wiederanl, 2)
      + ' bi jera) in þamma samin mela gildiþs. Saei þata faihu frawardeiþ ïn staþ lagjan, standiþ '
      + 'wairsizo.'; },
  'det.warn.lead': 'Þu standis utana þis gibanodins wigis: ',
  'det.warn.aussch': 'Ufar 100 dailom hunda brukeinais nist witodis waldufni du mizdons inmaideinai. ',
  'det.warn.ngef': 'Mikila dails þize gibande ni gildis ni gibandeis batizei ist — so dails galeiþiþ in siukeinai gawi, inuh ni waiht niman utan siukeikarai ains. ',
  'det.warn.vb': 'Þata Versorgungsbezug ufariddja þana freihals swikunþaba; so gaskeirmeins þis alla freihalsis gadrauseiþ swe 1/haubidafaihu. ',
  'det.ann.intro': 'Sa urruns hangeiþ at witodis fraihnam, þoei 2026 nauh ni allos andilausidos sind. Þos rathjons in klammom sind eigin trauainshugjos.',
  'det.ann.notmodelled': '<b>Ni frisahtida:</b> minneins at faura-aldis gilda, waihts mizdons inmaideinais ana siukeins-, arbaidalausis- jah barne-mizdon, afar-libandane kara, unmahteins gatrauains (PSVaG), gaggan miþ anþaramma mizdogibandin, barne gaminnein in kararja, þiuþeigo fraisteins bi § 32d Abs. 6 EStG, andanahtjis jah grunduns gatrauainis gaskeirmeins, laggis libainis sleiþei ufar marka.',
  'det.prinzip': '<p>Galeikan <i>allaize gibande</i> ni wesi garaiht: mizdons inmaideins us þamma allin qimiþ, sein bairgan us þamma hrainjin. Þaruh so <b>hraina wilwa</b> galeikaida wairþiþ:</p>'
    + '<p style="font-family:var(--mono);font-size:.82rem;background:var(--chip);padding:9px 11px;border-radius:9px">Hraina wilwa = Alls gibands − mizdons gildis sparein − asneis dails gibandins</p>'
    + '<p>Þata samo waírþ in allaim þrim wiljom lagjada. Þata aflifnando ist galeikeins gibandane gatimreine, ni gibandis hauheine.</p>'
    + '<p><b>Gildis ufarsateins ains ni waiht ist:</b> (1−t)·(1+r)ⁿ = (1+r)ⁿ·(1−t). Managfaldeins wandeiþ. Aflifnand ains fidwor waírþis urrunsa:</p>'
    + '<ol style="padding-left:1.2em;margin:.3em 0"><li>Gildis missadails t₀ − t₁</li>'
    + '<li>Framaþi faihu — anaaukans þis mizdogibandins aiþþau gibos</li>'
    + '<li>gildis freis gahaldeins — ni waihts Vorabpauschale</li>'
    + '<li>niuja gibandeis, þoei ainana wiljan tekand — siukei/kara ana Versorgungsbezüge</li></ol>'
    + '<p>Staþs 4 ist sa mahteiga skaþa þizos bAV, staþs 2 ains gatimreinis batizei. Sa wokrs þizos bAV <b>garaihto sinteino gadrauseiþ miþ gibandins hauhein</b>, unte sa freihals all ist jah so gaskeirmeins gadrauseiþ swe 1/K — nist innana batisto.</p>'
    + '<p>At faurgasatidai hrainjai wilwai wairþiþ sa alls gibands miþ garaihtein aftra rathiþs: N(B) ist sinteino jah garaihto wahseiþ (dN/dB = 1 − marko gibandeis rathjo − marko gildis rathjo > 0), akei bi wraikwiþam at 4 jah 8 dailom hunda BBG-RV, at markom gibandins jah gildis markom ni mag andjis aftra rathiþs wairþan. 34 garaihteinos giband minniz þau tainja dails skattis.</p>',
  'det.s.erg': 'Allai þrijai wiljans in bairgandein garaihto samon waírþ us þamma hrainjin kostuljand.',
  'det.s.mon': 'Allai wiljans bi samin mela gildidai, bi himma daga waírþa. Unte gildan raihts ist, þos raihtjos garaihto samaþ rathjand.',
  'det.s.diag': 'Ƕi þata ist — jah ƕar þu standis utana þis gibanodins wigis.',
  'msg.linkCopied': 'Gabinda afmeljada. Saei þo uslukiþ, saíƕiþ garaihto þos rathjons — ni waiht þairh waldufni gaggiþ.',
  'msg.linkFailed': 'Afmeljan ni mahta. So gabinda nu in bokos staþa standiþ.',
  'pwa.offline': '<b>Freis wisan mag inuh gabindan.</b> Þata waurstw nu in waldufnjis gahaldein ligiþ jah rinniþ jah inuh gatekan. Du gasatjan: at iPhone „Gadailjan“ → „Du frumistin skildu“, at Android þata anahaha → „Waurstw gasatjan“.',
  'pwa.installAsk': '<b>Swe waurstw gasatjan?</b> Þan ligiþ miþ eiginamma taikna ana frumistin skildau jah rinniþ inuh gatekan. ',
  'pwa.declined': 'Waila — þata waurstw rinniþ jah swa, jah inuh gatekan.',
  'pwa.file': '<b>Þu þo boka silba uslukt</b> (<kbd>file://</kbd>). All rathjada, all gahaldada. Ains twa waurstwis kunþeis aljand: ni taikn ana frumistin skildau jah ni gahaldein inuh gatekan — þatuh her ni þaurfts wesi, so boka ju ligiþ ana þamma kasa. Du fullamma waurstwis frisahtja lagei þana gafaurds ana ƕoh HTTPS-stad jah þaþro uslukei.'
};
