/* =====================================================================
   Dictionnaire français. Même jeu de clés que i18n.de.js ; ce qui manque
   ici retombe sur l’entrée allemande.
   Les références légales restent en allemand à dessein : ce sont les
   sources primaires et elles n’ont pas de traduction officielle. « bAV »
   désigne l’Entgeltumwandlung — la retraite d’entreprise alimentée par
   abandon de salaire brut ; le régime français n’a pas d’équivalent exact,
   l’abréviation est donc conservée.
   Typographie : espace fine insécable devant « % » et les deux-points,
   guillemets français. Le séparateur de milliers de fr-FR est U+202F ;
   parseNum() accepte de toute façon les deux écritures.
   ===================================================================== */
window.I18N_FR = {
  'f.I:gehalt.label': 'Salaire annuel brut actuel',
  'f.I:gehalt.hint': 'Hors versements exceptionnels, le cas échéant treizième mois au prorata inclus. Détermine votre taux marginal d’imposition et si vous dépassez les plafonds de cotisations sociales.',
  'f.I:beitrag.label': 'Cotisation mensuelle bAV, brute',
  'f.I:beitrag.hint': 'Abandon de salaire brut au sens du § 1a BetrAVG. Vous n’avez un droit légal que jusqu’à 4 % du plafond de cotisation de l’assurance vieillesse (BBG-RV) ; au-delà, l’accord de l’employeur est requis.',
  'f.I:netto_ziel.label': 'Effort net mensuel',
  'f.I:netto_ziel.hint': 'Le montant dont votre revenu disponible baisse la première année — la consommation réellement abandonnée, donc la variable de décision économiquement correcte. C’est exactement ce montant qui est investi dans les trois options ; c’est la condition d’une comparaison honnête. Il est en correspondance biunivoque avec la cotisation brute ci-dessus : N(B) = B − économie de cotisations − économie d’impôt est strictement croissante, donc inversible. Elle n’a pas d’inverse en forme close à cause des points anguleux aux plafonds de cotisation et aux bornes du barème ; d’où 34 dichotomies — précision inférieure au dixième de centime.',
  'f.I:agzus.label': 'Abondement de l’employeur',
  'f.I:agzus.hint': 'Minimum légal 15 % (§ 1a Abs. 1a BetrAVG) ; beaucoup d’employeurs versent davantage. Le point mort face au compte-titres privé se situe grosso modo là où (1+z)·(1−0,211) ≈ 1, soit z ≈ 26,7 % — vérifiable sur la courbe de sensibilité. En mode « au plus juste », cette valeur est souvent hors d’atteinte, l’abondement saturant avant.',
  'f.I:agz_fix.label': 'Abondement forfaitaire supplémentaire',
  'f.I:agz_fix.hint': 'Forfait indépendant de votre propre cotisation, issu d’une convention collective ou d’un accord d’entreprise — usuel à la Deutsche Bahn et dans de nombreuses conventions, s’ajoutant aux 15 % du § 1a Abs. 1a BetrAVG. C’est une contribution financée par l’employeur au sens du § 3 Nr. 63 EStG ; elle occupe EN PRIORITÉ l’enveloppe de 8 % et l’exonération de cotisations de 4 % (§ 1 Abs. 1 S. 1 Nr. 9 SvEV) : votre propre abandon de salaire s’en trouve évincé d’autant et renchérit. Économiquement, c’est un socle, pas un levier : il ne change pas le rendement marginal de votre euro de cotisation suivant (∂²rendement/∂agz_fix ∂cotisation ≤ 0 — par éviction, il peut même l’abaisser), mais il élève fortement la moyenne. Sur la courbe de sensibilité, il est donc approximativement affine — jusqu’à épuisement de l’enveloppe de 4 % ou de 8 %, où la courbe s’infléchit.',
  'f.I:agz_fix_dyn.label': 'Indexer l’abondement forfaitaire',
  'f.I:agz_fix_dyn.hint': 'Les forfaits sont le plus souvent inscrits en valeur nominale dans la convention collective et relevés seulement lors des négociations — d’où le réglage par défaut « nominal, constant ». Sur 27 ans à 2 % d’inflation, il en reste le facteur 1,02⁻²⁷ ≈ 0,59 ; qui juge cela trop pessimiste bascule sur « avec le salaire » et obtient un abondement réel croissant au taux gsteig − infl.',
  'f.I:agz_fix_dyn.o0': 'nominal, constant',
  'f.I:agz_fix_dyn.o1': 'avec le salaire',
  'f.I:agzus_sv.label': 'Mode d’abondement',
  'f.I:agzus_sv.hint': '« Au plus juste » est la lettre de la loi : le § 1a Abs. 1a BetrAVG ne doit l’abondement que DANS LA MESURE où l’employeur économise effectivement des cotisations sociales. Si votre rémunération dépasse les deux plafonds, il n’économise rien et ne doit rien. C’est pourquoi le curseur ci-dessus sature autour de 21 % dans le cas de base. « Cotisation entière » est un engagement volontaire ou conventionnel, « part exonérée seule » la pratique forfaitaire répandue. Confiance dans la lecture stricte : environ 75 %.',
  'f.I:agzus_sv.o0': 'cotisation entière',
  'f.I:agzus_sv.o1': 'part exonérée seule',
  'f.I:agzus_sv.o2': 'au plus juste',
  'f.I:dyn.label': 'Indexer la cotisation',
  'f.I:dyn.hint': 'Si la cotisation suit la hausse du salaire, l’utilisation de l’enveloppe de 8 % reste à peu près constante au fil des ans. Si elle reste nominalement constante, sa valeur réelle baisse avec l’inflation — et avec elle l’effort net dont bénéficient les deux autres options pour la comparaison.',
  'f.I:dyn.o1': 'avec le salaire',
  'f.I:dyn.o0': 'nominal, constant',
  'f.I:rendite.label': 'Rendement brut de l’ETF p.a.',
  'f.I:rendite.hint': 'Avant frais, avant impôts. Le même ETF dans les trois options — c’est la seule manière de comparer des architectures d’incitation plutôt que des décisions de placement.',
  'f.I:alter.label': 'Âge actuel',
  'f.I:alter.hint': 'Début de la phase d’accumulation. Année civile 0 = 2026.',
  'f.I:alter.unit': 'ans',
  'f.I:rentbeg.label': 'Début du versement',
  'f.I:rentbeg.hint': 'Début de la phase de versement pour les trois options. Le compte Altersvorsorgedepot n’est liquidable qu’à partir de 65 ans (réforme 2026).',
  'f.I:rentbeg.unit': 'ans',
  'f.I:kv_ruhe.label': 'Assurance maladie à la retraite',
  'f.I:kv_ruhe.hint': 'Le levier décisif. Dans le régime légal (GKV), les rentes d’entreprise sont des Versorgungsbezüge et supportent le taux de cotisation plein (§§ 229, 250 SGB V) ; l’épargne privée non. Ce seul réglage renverse le résultat.',
  'f.I:kv_ruhe.o1': 'régime légal',
  'f.I:kv_ruhe.o2': 'régime privé',
  'f.I:auszform.label': 'Liquidation de la bAV',
  'f.I:auszform.hint': 'Capital : intégralement imposable l’année de perception, cotisations maladie réparties sur 120 mois (§ 229 Abs. 1 S. 3 SGB V). La rente étale la prestation sur l’espérance de vie résiduelle et met donc à l’abri un multiple du capital sous le même abattement. Le modèle ne connaît que le tout ou rien ; une sortie partielle en capital de la bAV n’est pas modélisée.',
  'f.I:auszform.o1': 'capital',
  'f.I:auszform.o2': 'rente viagère',
  'f.I:teilkap.label': 'Altersvorsorgedepot : capital initial',
  'f.I:teilkap.hint': 'Jusqu’à 30 % du capital accumulé peuvent être perçus en une fois au début de la phase de versement — dans les deux formes de liquidation. Cela coûte deux fois : progressivité pleine l’année de perception, puis rendement seulement net du prélèvement forfaitaire. L’excédent au-delà du plafond annuel (la « manche ») est rentifié sans capital initial ; c’est une convention du modèle, non une règle de droit.',
  'f.I:av_auszform.label': 'Altersvorsorgedepot : le reste',
  'f.I:av_auszform.hint': 'Ce qu’il advient du capital au-delà du versement initial — indépendamment du choix bAV ci-dessus. Plan de retrait : l’argent reste investi et est retiré avec intérêts ; la couche non subventionnée est imposée sur la moitié du montant différentiel. Rente viagère : le capital va à l’assureur, en contrepartie la couche non subventionnée n’est imposée que sur la part de rendement (§ 22 Nr. 5 S. 2 Buchst. a EStG, 17 % à partir de 67 ans au lieu d’environ 26 % ici). La couche subventionnée est dans les deux cas pleinement imposable en aval ; cela ne change pas.',
  'f.I:av_auszform.o1': 'plan de retrait',
  'f.I:av_auszform.o2': 'rente viagère',
  'f.I:agz_fix_min.label': 'Cotisation propre minimale ouvrant droit au forfait',
  'f.I:agz_fix_min.hint': 'Les dispositifs de matching lient le forfait à un effort propre minimal (« qui convertit au moins X reçoit Y »). 0 signifie sans condition — l’abondement coule alors chaque année d’activité, même à cotisation nulle. Attention à la sémantique du modèle : un abondement réellement inconditionnel ne serait pas un effet différentiel de la décision de conversion et flatterait la bAV dans cette comparaison, alors qu’il coulerait de toute façon. N’inscrivez que ce qui dépend effectivement de la participation.',
  'f.I:rentfak_av.label': 'Coefficient de rente, Altersvorsorgedepot',
  'f.I:rentfak_av.hint': 'Seulement en cas de rentification du compte. Prérempli comme pour la bAV ; un contrat de compte se passe d’enveloppe assurantielle et peut donc coûter moins cher — saisissez la valeur de l’offre concrète. À 0, il n’y a pas de rente.',
  'f.I:rentfak_av.unit': '€ pour 10 000 €',
  'f.I:rentdyn_av.label': 'Revalorisation de la rente du compte p.a.',
  'f.I:rentdyn_av.hint': 'Participation aux bénéfices ou performance des fonds pendant la phase de versement du contrat de compte.',
  'f.I:rentfak.label': 'Coefficient de rente, bAV',
  'f.I:rentfak.hint': 'Seulement pour la forme « rente ». 26 € de rente mensuelle pour 10 000 € correspondent à un taux de retrait d’environ 3,1 %. Figure sur la fiche d’information produit.',
  'f.I:rentfak.unit': '€ pour 10 000 €',
  'f.I:rentdyn.label': 'Revalorisation de la rente bAV p.a.',
  'f.I:rentdyn.hint': 'Participation aux bénéfices ou performance des fonds pendant la phase de versement.',
  'f.I:fuenftel.label': 'Examiner la règle du cinquième',
  'f.I:fuenftel.hint': 'Le § 34 EStG n’est applicable qu’à titre exceptionnel à un versement en capital prévu au contrat au sens du § 3 Nr. 63, selon BFH X R 23/15. Prudence : non.',
  'f.I:fuenftel.o0': 'non (prudent)',
  'f.I:fuenftel.o1': 'oui',
  'f.I:planende.label': 'Horizon de comparaison jusqu’à l’âge de',
  'f.I:planende.hint': 'Les plans de retrait courent jusque-là. Les rentes viagères sont comparées sur le même horizon ; ce qui coule ensuite figure en mémo sous « Diagnostic ». Qui vit vieux y gagne.',
  'f.I:planende.unit': 'ans',
  'f.I:ausscheid.label': 'Départ de l’entreprise',
  'f.I:ausscheid.hint': 'À partir de là, plus de salaire ni de cotisations. Le capital continue de fructifier jusqu’au début du versement.',
  'f.I:ausscheid.unit': 'ans',
  'f.I:tzalter.label': 'Temps partiel à partir de l’âge de',
  'f.I:tzalter.hint': 'Toute valeur à partir du début du versement signifie : pas de temps partiel. Le défaut est donc 67.',
  'f.I:tzalter.unit': 'ans',
  'f.I:tzfaktor.label': 'Quotité de temps partiel',
  'f.I:tzfaktor.hint': 'Part du salaire à temps plein. 60 % = poste à 60 %.',
  'f.I:gsteig.label': 'Progression des salaires p.a.',
  'f.I:gsteig.hint': 'Actualise également les plafonds de cotisation, la Bezugsgröße, le salaire moyen et la valeur du point de retraite.',
  'f.I:stkl.label': 'Mode d’imposition',
  'f.I:stkl.hint': 'Ce qui compte est le MODE D’IMPOSITION, non la classe de retenue à la source : la classe ne pilote que le prélèvement en cours d’année, l’avis annuel applique de toute façon le quotient conjugal du § 32a Abs. 5 EStG. En cas de « commune », saisissez impérativement le revenu imposable du conjoint.',
  'f.I:stkl.o1': 'séparée',
  'f.I:stkl.o3': 'commune (quotient)',
  'f.I:partner.label': 'revenu imposable du conjoint',
  'f.I:partner.hint': 'Seulement en imposition commune. Le calcul est 2·IR((ri + ri_conjoint)/2).',
  'f.I:kist.label': 'Taux de l’impôt cultuel',
  'f.I:kist.hint': '8 % en Bavière et dans le Bade-Wurtemberg, 9 % ailleurs, 0 en cas de sortie de l’Église. Agit aussi sur le prélèvement forfaitaire : 0,25/(1+0,25k)·(1+0,055+k).',
  'f.I:tarifanp.label': 'Ajustement des bornes du barème p.a.',
  'f.I:tarifanp.hint': 'Le barème entier est dilaté du facteur λ = (1+x)^t : IR = s·λ·T(ri/s/λ). C’est exactement équivalent à un décalage proportionnel de toutes les bornes. 0 % montre la progressivité à froid intégrale.',
  'f.I:kinder.label': 'Nombre d’enfants',
  'f.I:kinder.hint': 'Prime pour enfant dans l’Altersvorsorgedepot : 1 € par € versé, jusqu’à 300 € par enfant.',
  'f.I:kind_jahre.label': 'Années avec prime pour enfant',
  'f.I:kind_jahre.hint': 'La prime pour enfant est liée au droit aux allocations familiales (§ 85 EStG) et ne court donc pas sur toute la phase d’accumulation.',
  'f.I:kind_jahre.unit': 'ans',
  'f.I:kinderlos.label': 'Sans enfant (majoration dépendance)',
  'f.I:kinderlos.hint': '0,6 point de pourcentage de majoration à l’assurance dépendance, à la charge du seul salarié (§ 55 Abs. 3 SGB XI).',
  'f.I:kinderlos.o0': 'non',
  'f.I:kinderlos.o1': 'oui',
  'f.I:k_bav.label': 'Frais du produit bAV p.a.',
  'f.I:k_bav.hint': 'Enveloppe assurantielle plus TER. Les frais effectifs figurent sur la fiche d’information produit — à y lire, non à estimer.',
  'f.I:k_av.label': 'Frais de l’Altersvorsorgedepot p.a.',
  'f.I:k_av.hint': 'Pour le compte standard, les frais effectifs sont légalement plafonnés à 1,0 % p.a.',
  'f.I:k_priv.label': 'Frais du compte-titres ETF privé p.a.',
  'f.I:k_priv.hint': 'TER pure d’un ETF monde large.',
  'f.I:infl.label': 'Inflation p.a.',
  'f.I:infl.hint': 'Taux d’actualisation de toutes les valeurs « en pouvoir d’achat actuel ». Ne change guère le classement, mais tous les niveaux.',
  'f.I:sonst_zve.label': 'autre revenu imposable à la retraite',
  'f.I:sonst_zve.hint': 'Surtout la fraction imposable de la retraite légale, hors les produits comparés ici. Détermine le taux marginal en phase de versement — et donc l’arbitrage de barème t₀ − t₁.',
  'f.I:rente_br.label': 'retraite légale brute p.a.',
  'f.I:rente_br.hint': 'Uniquement pour le plafond en assurance maladie : retraite légale et Versorgungsbezüge partagent UN SEUL plafond de cotisation (§ 223 Abs. 3 SGB V).',
  'f.P:bbg_rv.label': 'Plafond assurance vieillesse (annuel)',
  'f.P:bbg_rv.hint': 'SVBezGrV 2026 (BGBl. 2025 I Nr. 116), uniforme sur tout le territoire.',
  'f.P:bbg_kv.label': 'Plafond assurance maladie / dépendance',
  'f.P:bbg_kv.hint': 'SVBezGrV 2026 ; 5 812,50 € par mois.',
  'f.P:bezug.label': 'Bezugsgröße (mensuelle)',
  'f.P:bezug.hint': 'SVBezGrV 2026, 47 460 € par an. Le vingtième de ce montant constitue l’abattement pour Versorgungsbezüge en assurance maladie (§ 226 Abs. 2 S. 2 SGB V).',
  'f.P:de_rv.label': 'Salaire moyen RV',
  'f.P:de_rv.hint': 'Annexe 1 au SGB VI, valeur 2026 — dénominateur des points de retraite.',
  'f.P:rw.label': 'Valeur actuelle du point',
  'f.P:rw.hint': 'Rentenwertbestimmungsverordnung 2026, à partir du 1.7.2026 : 42,52 € (+4,24 %).',
  'f.P:rw.unit': '€',
  'f.P:rv_an.label': 'Cotisation vieillesse, part salariale',
  'f.P:rv_an.hint': '18,6 % pour moitié.',
  'f.P:av_an.label': 'Cotisation chômage, part salariale',
  'f.P:av_an.hint': '2,6 % pour moitié.',
  'f.P:kv_allg.label': 'Taux général assurance maladie',
  'f.P:kv_allg.hint': '§ 241 SGB V.',
  'f.P:kv_zus.label': 'Cotisation additionnelle moyenne maladie',
  'f.P:kv_zus.hint': 'Avis du BMG ; variable selon la caisse — saisissez le taux de la vôtre.',
  'f.P:pv_ges.label': 'Taux total assurance dépendance',
  'f.P:pv_ges.hint': '§ 55 SGB XI. Les réductions à partir du deuxième enfant ne sont pas modélisées.',
  'f.P:pv_an.label': 'Dépendance, part salariale',
  'f.P:pv_an.hint': 'Différent en Saxe (2,3 %).',
  'f.P:pv_kl.label': 'Majoration dépendance pour personnes sans enfant',
  'f.P:pv_kl.hint': '§ 55 Abs. 3 SGB XI, à la charge du seul salarié.',
  'f.P:gfb.label': 'Abattement de base (fin de la zone 1)',
  'f.P:gfb.hint': '§ 32a Abs. 1 EStG dans sa version issue du Steuerfortentwicklungsgesetz.',
  'f.P:e2.label': 'Fin de la zone 2',
  'f.P:e2.hint': 'Le taux marginal passe de 14 % à 23,97 %.',
  'f.P:e3.label': 'Fin de la zone 3',
  'f.P:e3.hint': 'Le taux marginal passe de 23,97 % à 42 %.',
  'f.P:e4.label': 'Début de la zone 5 (taux des hauts revenus)',
  'f.P:e4.hint': 'À partir de 277 826 €, 45 % s’appliquent.',
  'f.P:a2.label': 'Coefficient a₂',
  'f.P:a2.hint': 'IR = (a₂·y + b₂)·y avec y = (ri − abattement de base)/10 000.',
  'f.P:b2.label': 'Coefficient b₂',
  'f.P:a3.label': 'Coefficient a₃',
  'f.P:a3.hint': 'IR = (a₃·z + b₃)·z + c₃ avec z = (ri − 17 799)/10 000.',
  'f.P:b3.label': 'Coefficient b₃',
  'f.P:c3.label': 'Constante c₃',
  'f.P:c4.label': 'Constante c₄',
  'f.P:c4.hint': 'IR = 0,42·ri − c₄.',
  'f.P:c5.label': 'Constante c₅',
  'f.P:c5.hint': 'IR = 0,45·ri − c₅.',
  'f.P:soli.label': 'Contribution de solidarité',
  'f.P:soli.hint': 'SolzG 1995.',
  'f.P:soli_fg.label': 'Seuil d’exonération de la contribution',
  'f.P:soli_fg.hint': '2026, barème simple, rapporté à l’impôt établi ; doublé en imposition commune. À quoi s’ajoute une zone d’atténuation.',
  'f.P:soli_mz.label': 'Zone d’atténuation, charge marginale',
  'f.P:soli_mz.hint': '§ 3 Abs. 2a SolzG.',
  'f.P:an_pausch.label': 'Déduction forfaitaire des salariés',
  'f.P:an_pausch.hint': '§ 9a S. 1 Nr. 1a EStG.',
  'f.P:sa_pausch.label': 'Forfait pour charges déductibles',
  'f.P:sa_pausch.hint': '§ 10c EStG.',
  'f.P:kapst.label': 'Taux du prélèvement forfaitaire',
  'f.P:kapst.hint': '§ 32d Abs. 1 EStG.',
  'f.P:tfs.label': 'Exonération partielle des fonds actions',
  'f.P:tfs.hint': '§ 20 Abs. 1 Nr. 3 combiné au § 20 InvStG, part actions supérieure à 50 %.',
  'f.P:sparerpb.label': 'Abattement épargnant',
  'f.P:sparerpb.hint': '§ 20 Abs. 9 EStG ; doublé en imposition commune. Absorbe une large part de la Vorabpauschale — voir la cascade.',
  'f.P:basiszins.label': 'Taux de base de la Vorabpauschale',
  'f.P:basiszins.hint': 'Circulaire du BMF du 13.01.2026, § 18 Abs. 4 InvStG (2025 : 2,53 %). Mettre 0 signifie : pas de Vorabpauschale.',
  'f.P:vp_faktor.label': 'Facteur du rendement de base',
  'f.P:vp_faktor.hint': '§ 18 Abs. 1 S. 1 InvStG.',
  'f.P:st_frei_q.label': 'exonéré § 3 Nr. 63 (part du BBG-RV)',
  'f.P:st_frei_q.hint': '8 % du BBG-RV = 8 112 € en 2026.',
  'f.P:sv_frei_q.label': 'exonéré de cotisations (part du BBG-RV)',
  'f.P:sv_frei_q.hint': '§ 1 Abs. 1 S. 1 Nr. 9 SvEV ; 4 % = 4 056 € en 2026. C’est aussi la limite du droit légal du § 1a BetrAVG.',
  'f.P:zul_g1.label': 'Prime, tranche 1 (par € de cotisation propre)',
  'f.P:zul_g1.hint': 'Altersvorsorgereformgesetz, en vigueur depuis mai 2026, applicable à partir du 1.1.2027.',
  'f.P:zul_s1.label': 'Limite de la tranche 1',
  'f.P:zul_s1.hint': 'Jusqu’à 360 € de cotisation propre : 50 centimes par €.',
  'f.P:zul_g2.label': 'Prime, tranche 2 (par € de cotisation propre)',
  'f.P:zul_g2.hint': 'De 361 à 1 800 € : 25 centimes par €.',
  'f.P:zul_s2.label': 'Limite de la tranche 2',
  'f.P:zul_s2.hint': 'Montant maximal de cotisation propre subventionnée ; donne une prime de base maximale de 540 €.',
  'f.P:kind_zul.label': 'Prime par enfant',
  'f.P:kind_zul.hint': '1 € par € versé, jusqu’à 300 € par enfant.',
  'f.P:av_max.label': 'Versement annuel maximal',
  'f.P:av_max.hint': 'FAQ du BMF sur la réforme de l’épargne retraite privée subventionnée, état au 05.05.2026. Ce qui dépasse part sur une voie annexe imposée comme un compte-titres privé.',
  'f.P:av_sa_max.label': 'Plafond de déduction § 10a',
  'f.P:av_sa_max.hint': 'HYPOTHÈSE DE MODÈLE, confiance environ 70 %. Cotisation propre jusqu’à 1 800 € plus les primes. Ce seul chiffre décide si un enfant relève ou abaisse la valeur du compte AV.',
  'f.P:ertragsq.label': 'Part de rendement (âge 67)',
  'f.P:ertragsq.hint': '§ 22 Nr. 1 S. 3 Buchst. a Doppelbuchst. bb EStG, pour les fractions de rente non subventionnées.',
  'f.P:halb.label': 'part imposable du montant différentiel',
  'f.P:halb.hint': '§ 20 Abs. 1 Nr. 6 S. 2 EStG par analogie (contrat de plus de 12 ans, versement après 62 ans) : moitié du montant différentiel. Confiance environ 80 %.',

  /* ---------------- Cadre, titres de fenêtres, en-tête et pied ---------------- */
  'app.title': 'Comparateur de retraite',
  'app.meta': 'Comparer la retraite d’entreprise, l’Altersvorsorgedepot et un compte-titres ETF privé à effort net égal. État du droit 2026.',
  'hdr.title': 'Comparateur de retraite',
  'hdr.sub': 'Retraite d’entreprise, Altersvorsorgedepot et compte&#8209;titres ETF privé &mdash; à <b>effort net égal</b> et avec le même ETF. État du droit 2026.',
  'win.header': 'Comparateur de retraite',
  'win.result': 'Résultat',
  'win.input': 'Vos données',
  'win.chart': 'Graphiques',
  'win.extra': 'Données complémentaires',
  'win.calc': 'Détail du calcul',
  'win.share': 'Enregistrer et partager',
  'win.min': 'Réduire',
  'win.restore': 'Restaurer',
  'win.n': function(p){ return 'Fenêtre ' + p.n; },
  'input.sub': 'Les chiffres se recalculent immédiatement à chaque modification. Avec <span class="qm" style="cursor:default">?</span>, chaque champ s’explique lui-même.',
  'extra.sub': 'Tout ici a des valeurs par défaut sensées. N’y touchez que si cela vous concerne.',
  'calc.sub': 'Pour qui veut refaire le calcul.',
  'share.sub': 'Vos saisies restent exclusivement dans ce navigateur (<kbd>localStorage</kbd>). Rien n’est transmis, il n’y a ni serveur ni traceur.',
  'ui.share': 'Copier un lien avec mes chiffres',
  'ui.export': 'Enregistrer dans un fichier',
  'ui.import': 'Charger un fichier',
  'ui.reset': 'Tout réinitialiser',
  'ui.pin.set': 'Mémoriser comme référence',
  'ui.pin.clear': 'Effacer la référence',
  'ui.lang': 'Langue',
  'ui.lang.aria': 'Choisir la langue',
  'ui.lang.partial': 'traduite en partie seulement',
  'ui.lang.partialNote': 'Cette langue est <b>traduite en partie</b> : interface, noms de champs, en-têtes de tableaux et légendes de graphiques sont là. Les longues explications juridiques — les textes <span class="qm" style="cursor:default">?</span> des champs, la conclusion et le détail du calcul — s’affichent en allemand. Les références légales (BetrAVG, EStG, SGB V) restent allemandes dans toutes les langues : officiellement, elles n’existent pas autrement.',
  'sb.up': 'Remonter au résultat',
  'footer.1': '<b>Ni conseil fiscal ni conseil en placement.</b> Un modèle n’est pas un contrat. L’état du droit 2026 sur l’épargne retraite privée réformée n’est pas définitivement fixé sur plusieurs points ; les hypothèses les moins sûres figurent sous « Détail du calcul → Robustesse des hypothèses » et y sont modifiables.',
  'footer.2': 'Moteur de calcul porté à l’identique depuis le modèle Excel d’origine et vérifié à la précision machine sur trois cas de test (écart relatif maximal 1,3·10<sup>&minus;14</sup>).',

  /* ---------------- Les trois options ---------------- */
  'opt.bav.name': 'bAV (abandon de salaire)',
  'opt.bav.short': 'bAV',
  'opt.bav.nom': 'la retraite d’entreprise',
  'opt.bav.satz': 'La retraite d’entreprise',
  'opt.bav.gen': 'de la bAV',
  'opt.av.name': 'Altersvorsorgedepot',
  'opt.av.short': 'compte AV',
  'opt.av.nom': 'l’Altersvorsorgedepot',
  'opt.av.satz': 'L’Altersvorsorgedepot',
  'opt.av.gen': 'de l’Altersvorsorgedepot',
  'opt.priv.name': 'compte-titres ETF privé',
  'opt.priv.short': 'privé',
  'opt.priv.nom': 'le compte-titres ETF privé',
  'opt.priv.satz': 'Le compte-titres ETF privé',
  'opt.priv.gen': 'du compte-titres ETF privé',

  /* ---------------- Indicateurs ---------------- */
  'metric.monat.label': 'Prestation mensuelle',
  'metric.monat.unit': '€/mois',
  'metric.monat.desc': 'Versement mensuel constant sur toute la phase de liquidation, à valeur égale, en pouvoir d’achat actuel. Le seul chiffre directement comparable à votre revenu net d’aujourd’hui.',
  'metric.ertrag.label': 'Gain net (valeur actuelle)',
  'metric.ertrag.unit': '€',
  'metric.ertrag.desc': 'Ce que l’option rapporte, en pouvoir d’achat actuel, au-delà de la mise personnelle : valeur actuelle de toutes les prestations nettes moins valeur actuelle de l’effort net.',
  'metric.irr.label': 'Taux de rendement interne',
  'metric.irr.unit': '% p.a.',
  'metric.irr.desc': 'Rendement du montant net réellement engagé, en nominal. Directement comparable au rendement brut de l’ETF paramétré — l’écart est exactement ce que coûtent ou rapportent, ensemble, les incitations et les prélèvements.',
  'metric.kapital.label': 'Capital au départ en retraite',
  'metric.kapital.unit': '€',
  'metric.kapital.desc': 'Avant impôts et avant cotisations sociales, en nominal. Délibérément PAS la grandeur de décision : la bAV mène souvent ici, mais perd à la liquidation.',
  'metric.pa': ' p.a.',
  'metric.pp': ' pts',
  'metric.short.monat': 'Mois',
  'metric.short.ertrag': 'Gain',
  'metric.short.irr': 'TRI',
  'metric.short.kapital': 'Capital',

  /* ---------------- Champs de saisie, cadre ---------------- */
  'unit.pct': '%',
  'unit.eur': '€',
  'unit.eurm': '€/mois',
  'ui.hintFor': function(p){ return 'Explication de : ' + p.label; },
  'ui.couple': '<span>⇅</span> Deux vues sur la même grandeur. Modifiez l’une, l’autre suit.',
  'ui.cnt.legal': function(p){ return p.n + ' paramètres légaux'; },
  'ui.cnt.fields': function(p){ return p.n + ' champs'; },
  'ui.legalNote': 'Grandeurs légales avec référence. À ne modifier que si le droit a changé ou si votre caisse s’écarte de la moyenne.',
  'group.bav': 'Abondement et formes de liquidation en détail',
  'group.person': 'Chronologie, départ, temps partiel',
  'group.steuer': 'Impôt, imposition, enfants',
  'group.markt': 'Frais et inflation',
  'group.ruhe': 'Retraite',
  'group.p_sv': 'Paramètres : sécurité sociale 2026',
  'group.p_est': 'Paramètres : barème de l’impôt sur le revenu 2026 (§ 32a EStG)',
  'group.p_kap': 'Paramètres : imposition des revenus du capital et des fonds',
  'group.p_bav': 'Paramètres : retraite d’entreprise et épargne privée subventionnée',

  /* ---------------- Notes dynamiques sous les champs ---------------- */
  'n.beitrag.ueber8': function(p, f){
    return 'Au-delà de 8 % du plafond de cotisation vieillesse (' + f.eur(p.v8) + ' par an). La part excédentaire n’est '
      + 'privilégiée ni fiscalement ni socialement — elle passe dans l’enveloppe assurantielle et n’y récolte '
      + 'que l’assujettissement aux cotisations d’assurance maladie.'; },
  'n.beitrag.ueber4': function(p, f){
    return 'Au-delà de 4 % du plafond de cotisation vieillesse (' + f.eur(p.v4) + ' par an). Jusque-là vous disposez '
      + 'd’un droit légal au titre du § 1a BetrAVG ; au-delà, l’accord de l’employeur est requis.'; },
  'n.agzus.gedeckelt': function(p, f){
    return 'Plafonné à ' + f.pct(p.quote, 1) + '. L’employeur n’économise en réalité que '
      + f.eur2(p.ersparnis) + ' par an — des valeurs plus élevées ne changent rien tant que le mode d’abondement '
      + 'reste « au plus juste ».'; },
  'n.agz_fix.fliesstNicht': function(p, f){
    return 'Ne coule pas : votre cotisation mensuelle de ' + f.eur2(p.beitrag) + ' est inférieure au '
      + 'seuil minimal de ' + f.eur2(p.schwelle) + ' (champ sous « Données complémentaires »).'; },
  'n.agz_fix.ueber4': function(p, f){
    return 'Le forfait à lui seul dépasse l’enveloppe de 4 % (' + f.eur(p.topf)
      + ' par an) de ' + f.eur(p.ueber) + '. Cette part serait chez vous du salaire '
      + 'soumis à cotisations — le modèle ne décompte PAS la charge de cotisations supplémentaire et '
      + 'surestime d’autant la bAV.'; },
  'n.agz_fix.verdraengung': function(p, f){
    return 'Occupe l’enveloppe de 4 % en priorité : de votre propre cotisation, il ne reste plus que '
      + f.eur(p.rest) + ' exonérés de cotisations. Votre effort net augmente d’autant — l’abondement '
      + 'reste néanmoins de l’argent offert, il ne fait que déplacer la limite de l’incitation personnelle.'; },
  'n.agz_fix.ueber8': 'Avec votre propre cotisation, au-delà de 8 % du BBG-RV — l’excédent n’est privilégié ni fiscalement ni socialement.',
  'n.agz_fix_min.knapp': function(p, f){
    return 'Vous n’êtes que ' + f.eur2(p.d) + ' au-dessus du seuil. En dessous, le forfait '
      + 'disparaît entièrement : le rendement marginal du dernier euro cotisé est infini en ce point, '
      + 'et le couplage brut ↔ net y est discontinu.'; },
  'n.agz_fix_min.verfehlt': function(p, f){
    return 'Seuil non atteint — ' + f.eur2(p.fehlt) + ' de plus par mois déclenchent ' + f.eur2(p.zuschuss)
      + ' d’abondement. C’est presque toujours l’euro le plus rentable de tout le modèle.'; },
  'n.teilkap.kosten': function(p, f){
    return 'Coûte ' + (p.gewinn ? 'rien, au contraire : ' + p.dtxt : p.dtxt + ' ' + p.unit)
      + ' par rapport à une rentification intégrale. Raison : le capital initial est intégralement imposable '
      + 'l’année de perception (charge marginale à cet endroit ' + f.pct(p.grenz, 1) + ') et ne fructifie ensuite '
      + 'plus qu’au taux net du prélèvement forfaitaire au lieu du rendement du produit.'; },
  'n.av_auszform.horizont': function(p, f){
    return 'Au-delà de l’horizon de comparaison, cette rente verse encore ' + f.eur(p.rest)
      + ', qui ne sont PAS comptés ici. Un horizon fixe sous-estime systématiquement toute rente '
      + 'viagère — qui vit vieux y gagne.'; },

  /* ---------------- Cartes de résultat ---------------- */
  'card.lead': 'en tête',
  'card.unchanged': 'inchangé',
  'base.pinned': 'Δ par rapport à l’état mémorisé',
  'base.delta': function(p){ return 'Δ ' + p.desc; },
  'base.none': 'Déplacez un curseur — la variation apparaîtra ici sous forme de Δ.',
  'base.desc.prev': 'état précédent',
  'base.desc.pinned': 'état mémorisé',
  'base.desc.change': function(p){ return 'avant la modification de « ' + p.label + ' »'; },
  'rank.swap': function(p, f){
    return '<b>Les indicateurs ne sont pas d’accord.</b> Selon la prestation mensuelle, '
      + p.a + ' devance ' + p.b + ' ; selon la valeur actuelle du gain net, c’est l’inverse. '
      + 'Raison : la valeur actuelle actualise à l’inflation (' + f.pct(p.infl, 2) + '), la prestation mensuelle '
      + 'rentifie au taux de réinvestissement net d’impôt (' + f.pct(p.wiederanl, 2) + '). Plus les deux '
      + 's’écartent, mieux se présente une sortie précoce en capital. Quel indicateur retenir dépend de '
      + 'ce que vous feriez de l’argent, le placer ou le dépenser — pour « dépenser », réglez le champ '
      + '« Frais du compte-titres ETF privé » de sorte que le taux de réinvestissement tende vers zéro.'; },
  'warn.unreachable': 'Cet effort net est hors d’atteinte — il dépasse votre salaire. La plus haute valeur possible a été retenue.',
  'warn.inactive': 'La première année, d’après vos données, vous n’exercez plus d’activité — il n’y a pas d’abandon de salaire, donc pas d’effort net à partir duquel remonter à une cotisation brute. Vérifiez « Départ de l’entreprise » et « Âge actuel ».',

  /* ---------------- Conclusion en clair ---------------- */
  'verdict.lead': function(p){
    return '<b>' + p.satz + '</b> arrive en tête avec ' + p.wert + ' — ' + p.d2 + ' de plus que ' + p.nom2
      + (p.nom3 ? ' et ' + p.d3 + ' de plus que ' + p.nom3 : '') + '.'; },
  'verdict.pp': function(p){ return p.v + ' points de pourcentage'; },
  'verdict.top': function(p, f){
    return ' Le poste le plus important dans l’écart ' + p.gen + ' avec le compte-titres ETF privé est '
      + '« ' + p.label + ' » — et ce ' + (p.pro ? 'en faveur ' : 'au détriment ') + p.gen
      + ', pour ' + f.eur(Math.abs(p.wert)) + ' en valeur actuelle. La décomposition complète figure sous « Facteurs de valeur ».'; },
  'verdict.band': function(p, f){
    return '<span class="band">Quelle robustesse ? Avec un rendement brut de ' + f.pct(p.lo, 1)
      + ' au lieu de ' + f.pct(p.mid, 1) + ', ce serait ' + p.vlo + ' ; à ' + f.pct(p.hi, 1) + ', ce serait '
      + p.vhi + ' — le classement '
      + (p.stabil ? 'reste le même sur cette plage.'
                  : '<b>s’inverse sur cette plage</b> ; le résultat ne porte donc pas ici.')
      + '</span>'; },
  'demo.text': '<b>Ce sont encore des valeurs d’exemple</b> — 40 ans, 75 000 € de salaire annuel brut, 300 € d’abandon de salaire par mois, affiliation au régime légal d’assurance maladie. Saisissez les vôtres sous « Vos données » ; cet avis disparaîtra de lui-même.',

  /* ---------------- Bandeau flottant ---------------- */
  'sb.cap': function(p){ return p.label + ' · ' + p.unit + (p.kaufkraft ? ', pouvoir d’achat actuel' : ''); },
  'sb.aria': function(p){ return 'Résultat : ' + p.label; },

  /* ---------------- Graphiques ---------------- */
  'tab.sens': 'Sensibilité',
  'tab.wf': 'Facteurs de valeur',
  'tab.kap': 'Évolution du capital',
  'tab.zer': 'Décomposition mensuelle',
  'chart.error': function(p){ return 'Graphique non affichable : ' + p.msg; },
  'sens.readout': 'Pointillés : votre valeur actuelle. Anneaux : intersections avec le compte-titres privé. Survolez la courbe ou touchez-la pour lire les valeurs.',
  'sens.legendY': function(p){ return 'y : ' + p.label + ' (' + p.unit + ')'; },
  'sens.note': function(p){
    return 'Le dernier curseur déplacé est recalculé sur toute son étendue — ' + p.n
      + ' passages complets du modèle. Actuellement : « ' + p.label + ' ». '
      + 'Déplacez un autre curseur et la courbe change avec lui.'; },
  'sens.noteNetto': function(p, f){
    return ' Attention : ce curseur modifie aussi l’effort net (ici ' + f.eur2(p.lo) + ' à '
      + f.eur2(p.hi) + ' par mois) et donc le montant investi dans les trois options. '
      + 'Les trois courbes sont donc comparables loyalement pour chaque x pris isolément, mais le niveau '
      + 'entre différents x ne l’est pas. Les points anguleux se situent aux plafonds de cotisation ('
      + f.eur(p.bbgkv) + ' pour maladie/dépendance, ' + f.eur(p.bbgrv) + ' pour vieillesse/chômage) et aux bornes du barème.'; },
  'wf.up': 'accroît le gain',
  'wf.down': 'réduit le gain',
  'wf.legend': 'Valeur actuelle du gain net, pouvoir d’achat actuel',
  'wf.check': function(p, f){
    return 'Vérification : ' + f.eur(p.start) + ' + ' + f.eur(p.summe) + ' = ' + f.eur(p.start + p.summe)
      + ' (attendu ' + f.eur(p.ende) + ', écart ' + f.nf2(p.start + p.summe - p.ende) + ' €).'; },
  'wf.note': 'Décomposition télescopique, elle tombe donc juste exactement — mais elle <b>dépend de l’ordre</b> : les effets ne sont pas séparables additivement, chaque barre mesure la contribution <i>sachant</i> celles qui la précèdent. Touchez une barre pour la dérivation.',
  'wf.barinfo': function(p){ return p.label + ' : ' + p.note; },
  'wfb.vp.label': 'Disparition de la Vorabpauschale',
  'wfb.vp.note': 'Ni la bAV ni l’Altersvorsorgedepot ne connaissent la Vorabpauschale (§ 18 InvStG). Mesuré comme compte-titres privé sans Vorabpauschale moins avec. La barre peut être négative : la Vorabpauschale s’absorbe en grande partie dans l’abattement épargnant, mais relève le prix de revient pour son montant entier — elle devient alors, en net, un avantage pour le compte privé.',
  'wfb.zul.label': 'Primes et déduction pour charges',
  'wfb.zul.note': 'Argent de tiers selon le nouveau modèle de primes, plus la déduction du § 10a EStG. Mesuré en désactivant les deux voies d’incitation.',
  'wfb.arch.label': 'Architecture d’imposition (reste)',
  'wfb.arch.note': 'Arbitrage de barème t₀ − t₁ et tout le reste. Déterminé par résidu, pour que la chaîne se referme exactement.',
  'wfb.agz.label': 'Abondement de l’employeur',
  'wfb.agz.note': 'Argent de tiers — le seul avantage structurel de la bAV qui ne vienne pas du droit fiscal. Mesuré en désactivant l’abondement.',
  'wfb.tarif.label': 'Arbitrage de barème et reste',
  'wfb.tarif.note': 'Taux marginal à l’entrée moins taux marginal à la sortie, plus tout le reste. Déterminé par résidu, pour que la chaîne se referme exactement. Le report d’imposition seul est sans valeur : (1−t)(1+r)ⁿ = (1+r)ⁿ(1−t), la multiplication commute.',
  'wfb.kvpv.label': 'Maladie/dépendance sur les Versorgungsbezüge',
  'wfb.kvpv.note': '§§ 229, 250 SGB V : le retraité supporte seul le taux plein. Mesuré comme écart au réglage « assurance privée à la retraite ».',
  'wfb.ep.label': 'Perte de points de retraite',
  'wfb.ep.note': 'L’abandon de salaire réduit la rémunération soumise à cotisations et donc la retraite légale. Décompté en net.',
  'kap.rentbeg': 'Départ en retraite',
  'kap.swap': 'Capital → droit à rente',
  'kap.legend': 'trait plein : total &nbsp;·&nbsp; pointillés : librement disponible',
  'kap.readout': function(p, f){
    return 'Bloqué au départ en retraite : bAV ' + f.eur(p.bavGeb) + ' sur ' + f.eur(p.bav)
      + ' · compte AV ' + f.eur(p.avGeb) + ' sur ' + f.eur(p.av)
      + ' · compte privé ' + f.eur(0) + ' sur ' + f.eur(p.priv)
      + '.  La prestation mensuelle équivalente est consommée, c’est pourquoi chaque option finit à zéro.'; },
  'kap.note': function(p, f){
    return 'Solde dans le produit, augmenté en phase de liquidation des versements nets '
      + 'réinvestis (' + f.pct(p.wiederanl, 2) + ' après impôts) et diminué de la prestation '
      + 'mensuelle équivalente, effectivement consommée. C’est pourquoi chaque option atterrit exactement à zéro. '
      + 'Comme la consommation ne se prélève que sur le réinvestissement et que le capital du produit reste dans le produit, où il '
      + 'croît au rendement du produit avant impôts, les courbes n’évoluent pourtant pas proportionnellement. '
      + '— La ligne pointillée est la part librement disponible : la bAV est jusqu’au départ en retraite '
      + 'entièrement bloquée (le § 1b BetrAVG connaît l’acquisition définitive, non la disponibilité) ; pour '
      + 'l’Altersvorsorgedepot, un retrait avant 65 ans fait perdre l’avantage fiscal et seul l’excédent au-delà du '
      + 'plafond annuel est libre ; le compte-titres privé est libre à tout moment. C’est le seul axe sur lequel une '
      + 'sortie en capital fait bonne figure. '
      + (p.verrentet ? 'Comme vous rentifiez le compte, le capital y va lui aussi à l’assureur — la '
          + 'courbe baisse en conséquence, bien que rien ne soit perdu. ' : '')
      + 'Et encore une fois, explicitement : les courbes montrent le patrimoine issu de CETTE seule décision, '
      + 'non votre patrimoine total.'; },
  'zer.netto': 'net',
  'zer.tax': 'impôt',
  'zer.kv': 'maladie/dép.',
  'zer.pension': 'retraite',
  'zer.legend': '<span><i style="background:#808080"></i>impôt</span><span><i style="background:#800000"></i>maladie/dép.</span><span><i style="background:#800080"></i>retraite légale perdue</span><span style="margin-left:auto">socle coloré = ce qui reste</span>',
  'zer.readout': 'Tout en prestation mensuelle constante, en pouvoir d’achat actuel. L’annuitisation étant linéaire, les blocs s’additionnent exactement.',
  'zer.note': function(p, f){
    return 'La période de perception est identique pour les trois options. Une sortie en capital n’est pas '
      + 'divisée par douze, mais rentifiée sur la même période au taux de réinvestissement net d’impôt ('
      + f.pct(p.wiederanl, 2) + ' p.a.). Qui consomme le capital au lieu de le placer se retrouve '
      + 'plus mal loti.'; },

  /* ---------------- Détail du calcul ---------------- */
  'det.h.bav': 'bAV',
  'det.h.av': 'compte AV',
  'det.h.priv': 'privé',
  'det.h.kennzahl': 'Indicateur',
  'det.h.wert': 'Valeur',
  'det.erg.netto': 'Total versé sur le net (nominal)',
  'det.erg.fremd': 'Argent de tiers (abondement ou primes)',
  'det.erg.kapital': 'Capital au début du versement',
  'det.erg.brutto': 'Total des versements bruts',
  'det.erg.steuer': 'dont impôt sur le revenu / prélèvement forfaitaire',
  'det.erg.kvpv': 'dont assurance maladie et dépendance',
  'det.erg.rentenverlust': 'Perte de retraite légale (cumulée)',
  'det.erg.nettoausz': 'Total des versements nets (nominal)',
  'det.erg.bwausz': 'Valeur actuelle des versements nets',
  'det.erg.bwaufw': 'Valeur actuelle de l’effort net',
  'det.erg.ertrag': 'Valeur actuelle du gain net',
  'det.erg.verhaeltnis': 'Rapport gain / effort',
  'det.erg.irr': 'Taux de rendement interne (nominal)',
  'det.erg.vorsprung': 'Avance sur le compte-titres privé',
  'det.mon.brutto': 'Prestation brute par mois',
  'det.mon.steuer': 'moins impôt sur le revenu / prélèvement forfaitaire',
  'det.mon.kvpv': 'moins assurance maladie et dépendance',
  'det.mon.ep': 'moins perte de retraite légale',
  'det.mon.netto': 'NET PAR MOIS (pouvoir d’achat actuel)',
  'det.diag.beitrag': 'Cotisation brute bAV par mois',
  'det.diag.aufwand': 'Effort net par mois (première année)',
  'det.diag.grenzsteuer': 'Taux marginal en phase d’accumulation (première année)',
  'det.diag.ersparnis': 'Taux d’économie total (impôt + cotisations), première année',
  'det.diag.svAG': 'économie de cotisations effective de l’employeur',
  'det.diag.svAN': 'économie de cotisations effective du salarié',
  'det.diag.ngef': 'Part des cotisations bAV sans avantage (première année)',
  'det.diag.aussch': 'Utilisation du droit légal (4 % du BBG-RV)',
  'det.diag.agzVar': 'dont abondement employeur : en pourcentage (première année)',
  'det.diag.agzFix': 'dont abondement employeur : montant forfaitaire (première année)',
  'det.diag.agzFixUeber4': 'forfait au-delà de l’enveloppe de 4 % (non compté comme charge de cotisations)',
  'det.diag.vbMonat': 'Versorgungsbezug mensuel au début du versement',
  'det.diag.freibetrag': 'Abattement Versorgungsbezüge la même année',
  'det.diag.vbQuote': 'Rapport Versorgungsbezug / abattement',
  'det.diag.kapFreiKapital': 'capital possible sans cotisations (sortie en capital)',
  'det.diag.kapFreiRente': 'capital possible sans cotisations (rente viagère)',
  'det.diag.memoRest': 'MÉMO : versements de rente bAV au-delà de l’horizon',
  'det.diag.memoRestAv': 'MÉMO : rente du compte au-delà de l’horizon',
  'det.diag.wiederanl': 'Taux de réinvestissement net d’impôt',
  'det.diag.kapstEff': 'prélèvement forfaitaire effectif, contribution de solidarité et impôt cultuel inclus',
  'det.diag.bestAnteil': 'Fraction imposable de la retraite légale',
  'det.warn.lead': 'Vous vous situez hors du couloir privilégié : ',
  'det.warn.aussch': 'Au-delà de 100 % d’utilisation, il n’existe plus de droit légal à l’abandon de salaire. ',
  'det.warn.ngef': 'Une part sensible des cotisations n’est privilégiée ni fiscalement ni socialement — cette couche passe dans une enveloppe assurantielle sans rien obtenir en échange, hormis l’assujettissement aux cotisations maladie. ',
  'det.warn.vb': 'Le Versorgungsbezug dépasse nettement l’abattement ; l’effet protecteur d’un abattement absolu décroît comme 1/capital. ',
  'det.anspar.h.jahr': 'Année',
  'det.anspar.h.brutto': 'Brut',
  'det.anspar.h.beitrag': 'Cotisation bAV',
  'det.anspar.h.agzVar': 'Abond. %',
  'det.anspar.h.agzFix': 'Abond. fixe',
  'det.anspar.h.sv': 'Écon. cotis.',
  'det.anspar.h.st': 'Écon. impôt',
  'det.anspar.h.netto': 'Effort net',
  'det.anspar.h.zul': 'Primes',
  'det.anspar.h.kbav': 'Capital bAV',
  'det.anspar.h.kav': 'Capital AV',
  'det.anspar.h.kpriv': 'Capital privé',
  'det.row.year': function(p){ return p.jahr + ' (âge ' + p.alter + ')'; },
  'det.ausz.h.jahr': 'Année',
  'det.ausz.h.bavBr': 'bAV brut',
  'det.ausz.h.kvpv': 'maladie/dép.',
  'det.ausz.h.steuer': 'Impôt',
  'det.ausz.h.mind': 'Réduction retraite',
  'det.ausz.h.bavNet': 'bAV net',
  'det.ausz.h.avBr': 'AV brut',
  'det.ausz.h.avNet': 'AV net',
  'det.ausz.h.privBr': 'privé brut',
  'det.ausz.h.privNet': 'privé net',
  'det.ann.intro': 'Le classement dépend de questions de droit qui, en 2026, ne sont pas toutes tranchées. Les nombres entre parenthèses sont des degrés de confiance subjectifs.',
  'det.ann.h.annahme': 'Hypothèse',
  'det.ann.h.vertrauen': 'Confiance',
  'det.ann.h.anmerkung': 'Remarque',
  'det.ann.r1.a': 'Paramètres de sécurité sociale 2026, barème § 32a 2026',
  'det.ann.r1.c': 'SVBezGrV 2026, Steuerfortentwicklungsgesetz',
  'det.ann.r2.a': 'Assujettissement maladie/dépendance des Versorgungsbezüge',
  'det.ann.r2.c': '§§ 229, 250 SGB V',
  'det.ann.r3.a': 'Abattement § 226 Abs. 2 S. 2 SGB V (maladie)',
  'det.ann.r3.c': 'incontesté',
  'det.ann.r4.a': 'Seuil et non abattement en assurance dépendance',
  'det.ann.r4.c': 'l’erreur la plus fréquente dans la littérature de conseil',
  'det.ann.r5.a': 'Exonération de cotisations du versement du compte AV',
  'det.ann.r5.c': 'ce ne sont pas des Versorgungsbezüge',
  'det.ann.r6.a': 'Moitié du montant différentiel pour les couches non subventionnées',
  'det.ann.r6.c': '§ 22 Nr. 5 S. 2 Buchst. b combiné au § 20 Abs. 1 Nr. 6 S. 2 EStG',
  'det.ann.r7.a': 'Abondement limité à l’économie effective de l’employeur',
  'det.ann.r7.c': 'la thèse contraire lit les 15 % comme un pur forfait',
  'det.ann.r8.a': 'Plafond de déduction 2 340 €',
  'det.ann.r8.c': 'HYPOTHÈSE DE MODÈLE. Décide si un enfant relève ou abaisse la valeur du compte AV',
  'det.ann.r9.a': 'Affiliation obligatoire KVdR à la retraite supposée',
  'det.ann.r9.c': 'les affiliés volontaires n’ont pas été examinés',
  'det.ann.notmodelled': '<b>Non modélisé :</b> décotes en cas de départ anticipé, effet de l’abandon de salaire sur les indemnités maladie, chômage et parentales, réversion, garantie en cas d’insolvabilité (PSVaG), portabilité en cas de changement d’employeur, réductions pour enfants en assurance dépendance, comparaison plus favorable du § 32d Abs. 6 EStG, protection contre la saisie et au titre du minimum vital, risque de longévité au-delà de l’horizon.',
  'det.prinzip': '<p>Comparer des <i>cotisations brutes</i> serait déloyal : l’abandon de salaire vient du brut, l’épargne privée du net. C’est pourquoi on égalise l’<b>effort net</b> :</p>'
    + '<p style="font-family:var(--mono);font-size:.82rem;background:var(--chip);padding:9px 11px;border-radius:9px">effort net = cotisation brute − économie d’impôt sur salaire − part salariale de cotisations épargnée</p>'
    + '<p>C’est exactement ce montant qui est investi dans les trois options. Ce qui reste est une comparaison d’<i>architectures d’incitation</i>, non de montants versés.</p>'
    + '<p><b>Le report d’imposition est en soi sans valeur :</b> (1−t)·(1+r)ⁿ = (1+r)ⁿ·(1−t). La multiplication commute. Il ne reste que quatre facteurs de valeur :</p>'
    + '<ol style="padding-left:1.2em;margin:.3em 0"><li>l’arbitrage de barème t₀ − t₁</li>'
    + '<li>l’argent de tiers — abondement de l’employeur ou primes</li>'
    + '<li>la capitalisation en franchise d’impôt — pas de Vorabpauschale</li>'
    + '<li>les prélèvements nouveaux qui ne frappent qu’une option — maladie/dépendance sur les Versorgungsbezüge</li></ol>'
    + '<p>Le point 4 est le désavantage dominant de la bAV, le point 2 son unique avantage structurel. Le rendement de la bAV <b>décroît strictement avec le montant cotisé</b>, parce que l’abattement est absolu et que son effet protecteur décroît comme 1/K — il n’existe pas d’optimum intérieur.</p>'
    + '<p>Lorsque l’effort net est donné, la cotisation brute est retrouvée par dichotomie : N(B) est continue et strictement croissante (dN/dB = 1 − taux marginal de cotisations − taux marginal d’imposition > 0), mais elle n’est pas inversible en forme close à cause des points anguleux à 4 % et 8 % du BBG-RV, aux plafonds de cotisation et aux bornes du barème. 34 dichotomies donnent moins d’un dixième de centime.</p>',
  'det.t.prinzip': 'Le principe de comparaison',
  'det.t.erg': 'Résultat en détail',
  'det.s.erg': 'Les trois options coûtent en phase d’accumulation exactement le même montant net.',
  'det.t.mon': 'Prestation mensuelle, décomposée',
  'det.s.mon': 'Toutes les options rentifiées sur la même période, en pouvoir d’achat actuel. L’annuitisation étant linéaire, les lignes s’additionnent exactement.',
  'det.t.diag': 'Diagnostic',
  'det.s.diag': 'D’où cela vient — et où vous vous situez hors du couloir privilégié.',
  'det.t.anspar': 'Phase d’accumulation, année par année',
  'det.t.ausz': 'Phase de versement, année par année',
  'det.t.ann': 'Robustesse des hypothèses',

  /* ---------------- Enregistrer et partager ---------------- */
  'msg.linkCopied': 'Lien copié. Qui l’ouvre voit exactement ces chiffres — rien de tout cela ne passe par un serveur.',
  'msg.linkFailed': 'La copie a échoué. Le lien se trouve maintenant dans la barre d’adresse.',
  'msg.loaded': 'Chargé.',
  'msg.loadError': function(p){ return 'Le fichier n’a pas pu être lu : ' + p.msg; },
  'msg.reset': 'Réinitialisé au cas de base.',

  /* ---------------- PWA ---------------- */
  'pwa.offline': '<b>Fonctionne hors ligne.</b> L’application est désormais dans le cache du navigateur et tourne sans connexion. Pour l’installer : sur iPhone « Partager » → « Sur l’écran d’accueil », sur Android le menu → « Installer l’application ».',
  'pwa.installAsk': '<b>Installer comme application ?</b> Elle se placera alors sur l’écran d’accueil avec sa propre icône et fonctionnera hors ligne. ',
  'pwa.installBtn': 'Installer',
  'pwa.installed': '<b>Installée.</b> Vous trouverez l’application parmi vos autres applications.',
  'pwa.declined': 'Très bien — l’application fonctionne aussi ainsi, et hors ligne de surcroît.',
  'pwa.file': '<b>Vous avez ouvert le fichier directement</b> (<kbd>file://</kbd>). Tout se calcule, tout est enregistré. Seules manquent les deux propriétés PWA : pas d’icône sur l’écran d’accueil et pas de cache hors ligne — dont vous n’auriez de toute façon pas besoin ici, le fichier étant déjà sur l’appareil. Pour l’expérience complète, déposez le dossier sur n’importe quel hébergement HTTPS et ouvrez-le de là.'
};
