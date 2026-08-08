/* =====================================================================
   Dictionary English. Same key set as i18n.de.js; anything missing here
   falls back to the German entry at runtime.
   Statutory citations keep their German designations on purpose — they
   are the primary sources and have no official English equivalent.
   ===================================================================== */
window.I18N_EN = {
  'f.I:gehalt.label': 'Gross annual salary today',
  'f.I:gehalt.hint': 'Excluding one-off payments, including a pro-rated 13th month if applicable. Determines your marginal tax rate and whether you are above the social-security contribution ceilings.',
  'f.I:beitrag.label': 'Monthly bAV contribution, gross',
  'f.I:beitrag.hint': 'Gross salary sacrifice under § 1a BetrAVG. You have a statutory entitlement only up to 4 % of the pension-insurance contribution ceiling (BBG-RV); above that your employer has to agree.',
  'f.I:netto_ziel.label': 'Monthly net outlay',
  'f.I:netto_ziel.hint': 'The amount by which your disposable income falls in the first year — the consumption actually given up, and therefore the economically correct decision variable. Exactly this amount is invested in all three options; that is the condition for a fair comparison. It is in one-to-one correspondence with the gross contribution above: N(B) = B − social-security saving − tax saving is strictly increasing, hence invertible. It has no closed-form inverse because of the kinks at the contribution ceilings and the tariff break points, so 34 bisections are used — accuracy below a tenth of a cent.',
  'f.I:agzus.label': 'Employer top-up',
  'f.I:agzus.hint': 'Statutory minimum 15 % (§ 1a Abs. 1a BetrAVG); many employers pay more. Break-even against the private account is roughly where (1+z)·(1−0.211) ≈ 1, i.e. z ≈ 26.7 % — check it on the sensitivity curve. In top-up mode „actual saving“ this value is often unreachable because the top-up saturates first.',
  'f.I:agz_fix.label': 'Additional flat top-up',
  'f.I:agz_fix.hint': 'A flat employer contribution independent of your own — customary at Deutsche Bahn and under many collective agreements, there on top of the 15 % under § 1a Abs. 1a BetrAVG. It is an employer-financed contribution under § 3 Nr. 63 EStG and takes PRIORITY in the 8 % tax-free allowance and the 4 % social-security exemption (§ 1 Abs. 1 S. 1 Nr. 9 SvEV): your own salary sacrifice is crowded out to that extent and becomes more expensive. Economically it is a floor, not a lever: it does not change the marginal return on your next euro of contribution (∂²return/∂agz_fix ∂contribution ≤ 0 — through crowding out it can even lower it), but it raises the average a lot. On the sensitivity curve it is therefore approximately affine — until the 4 % or 8 % allowance is exhausted, where it kinks.',
  'f.I:agz_fix_dyn.label': 'Index the flat top-up',
  'f.I:agz_fix_dyn.hint': 'Flat amounts are usually written in nominal terms into collective agreements and raised only in bargaining rounds — hence the default „nominal, constant“. Over 27 years at 2 % inflation a factor of 1.02⁻²⁷ ≈ 0.59 remains; if you find that too pessimistic, switch to „with salary“ and you get a real top-up growing at rate gsteig − infl.',
  'f.I:agz_fix_dyn.o0': 'nominal, constant',
  'f.I:agz_fix_dyn.o1': 'with salary',
  'f.I:agzus_sv.label': 'Top-up mode',
  'f.I:agzus_sv.hint': '„Actual saving“ is the wording of the statute: § 1a Abs. 1a BetrAVG owes the top-up only INSOFAR AS the employer actually saves social-security contributions. If your pay is above both contribution ceilings, the employer saves nothing and owes nothing. That is why the slider saturates around 21 % in the base case. „Full contribution“ is a voluntary or collectively agreed promise, „exempt part only“ the widespread flat-rate practice. Confidence in the strict reading roughly 75 %.',
  'f.I:agzus_sv.o0': 'full contribution',
  'f.I:agzus_sv.o1': 'exempt part only',
  'f.I:agzus_sv.o2': 'actual saving',
  'f.I:dyn.label': 'Index the contribution',
  'f.I:dyn.hint': 'If the contribution rises with your salary, the use of the 8 % allowance stays roughly constant over the years. If it stays nominally constant, its real value falls with inflation — and so does the net outlay that the other two options get for comparison.',
  'f.I:dyn.o1': 'with salary',
  'f.I:dyn.o0': 'nominal, constant',
  'f.I:rendite.label': 'Gross ETF return p.a.',
  'f.I:rendite.hint': 'Before costs, before taxes. The same ETF in all three options — only then are you comparing subsidy architectures rather than investment decisions.',
  'f.I:alter.label': 'Age today',
  'f.I:alter.hint': 'Start of the accumulation phase. Calendar year 0 = 2026.',
  'f.I:alter.unit': 'years',
  'f.I:rentbeg.label': 'Start of payout',
  'f.I:rentbeg.hint': 'Start of the payout phase for all three options. The Altersvorsorgedepot cannot pay out before age 65 (2026 reform).',
  'f.I:rentbeg.unit': 'years',
  'f.I:kv_ruhe.label': 'Health insurance in retirement',
  'f.I:kv_ruhe.hint': 'The decisive lever. Under statutory health insurance (GKV), occupational pensions count as Versorgungsbezüge and carry the full contribution rate (§§ 229, 250 SGB V); private provision does not. This setting alone flips the result.',
  'f.I:kv_ruhe.o1': 'statutory',
  'f.I:kv_ruhe.o2': 'private',
  'f.I:auszform.label': 'bAV payout',
  'f.I:auszform.hint': 'Lump sum: fully taxable in the year of receipt, health-insurance contributions spread over 120 months (§ 229 Abs. 1 S. 3 SGB V). An annuity stretches the benefit over the remaining lifetime and therefore shelters a multiple of the capital under the same allowance. The model knows only all or nothing; a partial lump sum from the bAV is not modelled.',
  'f.I:auszform.o1': 'lump sum',
  'f.I:auszform.o2': 'lifelong annuity',
  'f.I:teilkap.label': 'Altersvorsorgedepot: lump sum at the start',
  'f.I:teilkap.hint': 'Up to 30 % of the accumulated capital can be taken as a lump sum at the start of the payout phase — in both payout forms. It costs you twice: full progression in the year of receipt, and afterwards only the rate net of withholding tax. The excess over the annual maximum (the „sleeve“) is annuitised without a lump sum; that is a model convention, not a rule of law.',
  'f.I:av_auszform.label': 'Altersvorsorgedepot: remainder',
  'f.I:av_auszform.hint': 'What happens to the capital beyond the lump sum — independent of the bAV decision above. Payout plan: the money stays invested and is drawn down with interest; the non-subsidised layer is taxed on half the difference amount. Lifelong annuity: the capital goes to the provider, in return the non-subsidised layer is taxed only on the income share (§ 22 Nr. 5 S. 2 Buchst. a EStG, 17 % from age 67 instead of roughly 26 % here). The subsidised layer is fully taxable on a deferred basis either way; that does not change.',
  'f.I:av_auszform.o1': 'payout plan',
  'f.I:av_auszform.o2': 'lifelong annuity',
  'f.I:agz_fix_min.label': 'Minimum own contribution for the flat top-up',
  'f.I:agz_fix_min.hint': 'Matching schemes tie the flat amount to a minimum own contribution („sacrifice at least X and you get Y“). 0 means unconditional — then the top-up flows in every active year, even with a zero contribution. Mind the model semantics: a genuinely unconditional top-up would not be a differential effect of the salary-sacrifice decision and would flatter the bAV in this comparison, although it would flow anyway. Only enter what actually depends on participating.',
  'f.I:rentfak_av.label': 'Annuity factor, Altersvorsorgedepot',
  'f.I:rentfak_av.hint': 'Only if the account is annuitised. Preset as for the bAV; an account contract does without an insurance wrapper and can therefore be cheaper — enter the value from the actual offer. At 0 there is no annuity.',
  'f.I:rentfak_av.unit': '€ per 10,000 €',
  'f.I:rentdyn_av.label': 'Escalation of the account annuity p.a.',
  'f.I:rentdyn_av.hint': 'Profit participation or fund performance during the payout phase of the account contract.',
  'f.I:rentfak.label': 'Annuity factor, bAV',
  'f.I:rentfak.hint': 'Only for payout form „annuity“. 26 € monthly pension per 10,000 € corresponds to a withdrawal rate of about 3.1 %. It is stated in the product information sheet.',
  'f.I:rentfak.unit': '€ per 10,000 €',
  'f.I:rentdyn.label': 'Escalation of the bAV annuity p.a.',
  'f.I:rentdyn.hint': 'Profit participation or fund performance during the payout phase.',
  'f.I:fuenftel.label': 'Test the one-fifth rule',
  'f.I:fuenftel.hint': '§ 34 EStG applies to a scheduled lump sum from § 3 Nr. 63 contracts only exceptionally, per BFH X R 23/15. Conservative: no.',
  'f.I:fuenftel.o0': 'no (conservative)',
  'f.I:fuenftel.o1': 'yes',
  'f.I:planende.label': 'Comparison horizon to age',
  'f.I:planende.hint': 'Payout plans run until here. Lifelong annuities are compared over the same horizon; whatever flows afterwards is shown as a memo item under „Diagnostics“. Living long pays off there.',
  'f.I:planende.unit': 'years',
  'f.I:ausscheid.label': 'Leaving the job',
  'f.I:ausscheid.hint': 'No salary and no contributions from here on. The capital keeps compounding until the start of payout.',
  'f.I:ausscheid.unit': 'years',
  'f.I:tzalter.label': 'Part-time from age',
  'f.I:tzalter.hint': 'Any value at or after the start of payout means: no part-time. The default is therefore 67.',
  'f.I:tzalter.unit': 'years',
  'f.I:tzfaktor.label': 'Part-time factor',
  'f.I:tzfaktor.hint': 'Share of the full-time salary. 60 % = a 60 % position.',
  'f.I:gsteig.label': 'Salary and wage growth p.a.',
  'f.I:gsteig.hint': 'Also rolls forward the contribution ceilings, the reference figure (Bezugsgröße), average earnings and the pension value.',
  'f.I:stkl.label': 'Assessment',
  'f.I:stkl.hint': 'What matters is the ASSESSMENT TYPE, not the wage-tax class: the class only controls the withholding during the year, the annual assessment applies income splitting under § 32a Abs. 5 EStG anyway. With „joint“, be sure to enter the partner’s taxable income.',
  'f.I:stkl.o1': 'single',
  'f.I:stkl.o3': 'joint (splitting)',
  'f.I:partner.label': 'Partner’s taxable income',
  'f.I:partner.hint': 'Only for joint assessment. The model computes 2·ESt((zvE + zvE_partner)/2).',
  'f.I:kist.label': 'Church tax rate',
  'f.I:kist.hint': '8 % in Bavaria and Baden-Württemberg, otherwise 9 %, 0 if you have left the church. It also affects withholding tax: 0.25/(1+0.25k)·(1+0.055+k).',
  'f.I:tarifanp.label': 'Indexation of the tariff break points p.a.',
  'f.I:tarifanp.hint': 'The whole tariff is stretched by the factor λ = (1+x)^t: ESt = s·λ·T(zvE/s/λ). This is exactly equivalent to shifting all break points proportionally. 0 % shows full bracket creep.',
  'f.I:kinder.label': 'Number of children',
  'f.I:kinder.hint': 'Child allowance in the Altersvorsorgedepot: 1 € per € paid in, up to 300 € per child.',
  'f.I:kind_jahre.label': 'Years with child allowance',
  'f.I:kind_jahre.hint': 'The child allowance is tied to the child-benefit entitlement (§ 85 EStG) and therefore does not run over the whole accumulation phase.',
  'f.I:kind_jahre.unit': 'years',
  'f.I:kinderlos.label': 'Childless (long-term care surcharge)',
  'f.I:kinderlos.hint': '0.6 percentage points on top of the long-term care contribution, borne by the employee alone (§ 55 Abs. 3 SGB XI).',
  'f.I:kinderlos.o0': 'no',
  'f.I:kinderlos.o1': 'yes',
  'f.I:k_bav.label': 'Cost of the bAV product p.a.',
  'f.I:k_bav.hint': 'Insurance wrapper plus TER. The effective costs are in the product information sheet — look them up, do not guess.',
  'f.I:k_av.label': 'Cost of the Altersvorsorgedepot p.a.',
  'f.I:k_av.hint': 'For the standard account the effective costs are capped by law at 1.0 % p.a.',
  'f.I:k_priv.label': 'Cost of the private ETF account p.a.',
  'f.I:k_priv.hint': 'Plain TER of a broad world ETF.',
  'f.I:infl.label': 'Inflation p.a.',
  'f.I:infl.hint': 'Discount rate for everything stated „in today’s purchasing power“. It barely changes the ranking, but it changes every level.',
  'f.I:sonst_zve.label': 'Other taxable income in retirement',
  'f.I:sonst_zve.hint': 'Above all the taxable part of the statutory pension, excluding the products compared here. It determines the marginal tax rate in the payout phase — and hence the tariff arbitrage t₀ − t₁.',
  'f.I:rente_br.label': 'Gross statutory pension p.a.',
  'f.I:rente_br.hint': 'Only for the health-insurance cap: the statutory pension and Versorgungsbezüge share ONE contribution ceiling (§ 223 Abs. 3 SGB V).',
  'f.P:bbg_rv.label': 'Contribution ceiling, pension insurance (annual)',
  'f.P:bbg_rv.hint': 'SVBezGrV 2026 (BGBl. 2025 I Nr. 116), uniform nationwide.',
  'f.P:bbg_kv.label': 'Contribution ceiling, health and care insurance',
  'f.P:bbg_kv.hint': 'SVBezGrV 2026; 5,812.50 € per month.',
  'f.P:bezug.label': 'Reference figure (monthly)',
  'f.P:bezug.hint': 'SVBezGrV 2026, 47,460 € per year. One twentieth of it is the health-insurance allowance for Versorgungsbezüge (§ 226 Abs. 2 S. 2 SGB V).',
  'f.P:de_rv.label': 'Average earnings, pension insurance',
  'f.P:de_rv.hint': 'Anlage 1 to SGB VI, 2026 value — the denominator for earnings points.',
  'f.P:rw.label': 'Current pension value',
  'f.P:rw.hint': 'Rentenwertbestimmungsverordnung 2026, from 1 July 2026: 42.52 € (+4.24 %).',
  'f.P:rw.unit': '€',
  'f.P:rv_an.label': 'Pension insurance, employee share',
  'f.P:rv_an.hint': '18.6 % split in half.',
  'f.P:av_an.label': 'Unemployment insurance, employee share',
  'f.P:av_an.hint': '2.6 % split in half.',
  'f.P:kv_allg.label': 'Health insurance, general rate',
  'f.P:kv_allg.hint': '§ 241 SGB V.',
  'f.P:kv_zus.label': 'Health insurance, average supplementary rate',
  'f.P:kv_zus.hint': 'Announced by the Federal Ministry of Health; differs by fund — enter your own fund’s rate.',
  'f.P:pv_ges.label': 'Long-term care, total rate',
  'f.P:pv_ges.hint': '§ 55 SGB XI. Reductions from the second child onwards are not modelled.',
  'f.P:pv_an.label': 'Long-term care, employee share',
  'f.P:pv_an.hint': 'Different in Saxony (2.3 %).',
  'f.P:pv_kl.label': 'Long-term care surcharge for the childless',
  'f.P:pv_kl.hint': '§ 55 Abs. 3 SGB XI, borne by the employee alone.',
  'f.P:gfb.label': 'Basic allowance (end of zone 1)',
  'f.P:gfb.hint': '§ 32a Abs. 1 EStG as amended by the Steuerfortentwicklungsgesetz.',
  'f.P:e2.label': 'End of zone 2',
  'f.P:e2.hint': 'Marginal rate rises from 14 % to 23.97 %.',
  'f.P:e3.label': 'End of zone 3',
  'f.P:e3.hint': 'Marginal rate rises from 23.97 % to 42 %.',
  'f.P:e4.label': 'Start of zone 5 (top rate)',
  'f.P:e4.hint': 'From 277,826 € the rate is 45 %.',
  'f.P:a2.label': 'Coefficient a₂',
  'f.P:a2.hint': 'ESt = (a₂·y + b₂)·y with y = (zvE − basic allowance)/10,000.',
  'f.P:b2.label': 'Coefficient b₂',
  'f.P:a3.label': 'Coefficient a₃',
  'f.P:a3.hint': 'ESt = (a₃·z + b₃)·z + c₃ with z = (zvE − 17,799)/10,000.',
  'f.P:b3.label': 'Coefficient b₃',
  'f.P:c3.label': 'Constant c₃',
  'f.P:c4.label': 'Constant c₄',
  'f.P:c4.hint': 'ESt = 0.42·zvE − c₄.',
  'f.P:c5.label': 'Constant c₅',
  'f.P:c5.hint': 'ESt = 0.45·zvE − c₅.',
  'f.P:soli.label': 'Solidarity surcharge',
  'f.P:soli.hint': 'SolzG 1995.',
  'f.P:soli_fg.label': 'Solidarity surcharge exemption limit',
  'f.P:soli_fg.hint': '2026, basic tariff, applied to the assessed income tax; doubled under splitting. Plus a phase-in zone.',
  'f.P:soli_mz.label': 'Phase-in zone, marginal rate',
  'f.P:soli_mz.hint': '§ 3 Abs. 2a SolzG.',
  'f.P:an_pausch.label': 'Employee lump-sum deduction',
  'f.P:an_pausch.hint': '§ 9a S. 1 Nr. 1a EStG.',
  'f.P:sa_pausch.label': 'Special-expenses lump sum',
  'f.P:sa_pausch.hint': '§ 10c EStG.',
  'f.P:kapst.label': 'Withholding tax rate',
  'f.P:kapst.hint': '§ 32d Abs. 1 EStG.',
  'f.P:tfs.label': 'Partial exemption, equity funds',
  'f.P:tfs.hint': '§ 20 Abs. 1 Nr. 3 in conjunction with § 20 InvStG, equity share above 50 %.',
  'f.P:sparerpb.label': 'Saver’s allowance',
  'f.P:sparerpb.hint': '§ 20 Abs. 9 EStG; doubled under splitting. It absorbs a large part of the advance lump sum (Vorabpauschale) — see the waterfall.',
  'f.P:basiszins.label': 'Base rate for the advance lump sum',
  'f.P:basiszins.hint': 'BMF letter of 13 January 2026, § 18 Abs. 4 InvStG (2025: 2.53 %). Setting it to 0 means: no advance lump sum.',
  'f.P:vp_faktor.label': 'Factor for the base yield',
  'f.P:vp_faktor.hint': '§ 18 Abs. 1 S. 1 InvStG.',
  'f.P:st_frei_q.label': 'Tax-free under § 3 Nr. 63 (share of BBG-RV)',
  'f.P:st_frei_q.hint': '8 % of the BBG-RV = 8,112 € in 2026.',
  'f.P:sv_frei_q.label': 'Free of social-security contributions (share of BBG-RV)',
  'f.P:sv_frei_q.hint': '§ 1 Abs. 1 S. 1 Nr. 9 SvEV; 4 % = 4,056 € in 2026. At the same time the limit of the statutory entitlement under § 1a BetrAVG.',
  'f.P:zul_g1.label': 'Allowance, tier 1 (per € of own contribution)',
  'f.P:zul_g1.hint': 'Altersvorsorgereformgesetz, in force since May 2026, applicable from 1 January 2027.',
  'f.P:zul_s1.label': 'Limit of tier 1',
  'f.P:zul_s1.hint': 'Up to 360 € of own contribution: 50 cents per €.',
  'f.P:zul_g2.label': 'Allowance, tier 2 (per € of own contribution)',
  'f.P:zul_g2.hint': 'From 361 to 1,800 €: 25 cents per €.',
  'f.P:zul_s2.label': 'Limit of tier 2',
  'f.P:zul_s2.hint': 'Maximum subsidised own contribution; yields a maximum basic allowance of 540 €.',
  'f.P:kind_zul.label': 'Child allowance per child',
  'f.P:kind_zul.hint': '1 € per € paid in, up to 300 € per child.',
  'f.P:av_max.label': 'Maximum annual contribution',
  'f.P:av_max.hint': 'BMF FAQ on the reform of subsidised private provision, as of 5 May 2026. Anything above runs into a side track taxed like a private account.',
  'f.P:av_sa_max.label': 'Maximum special-expenses deduction, § 10a',
  'f.P:av_sa_max.hint': 'MODEL ASSUMPTION, confidence roughly 70 %. Own contribution up to 1,800 € plus allowances. This single number decides whether a child raises or lowers the value of the AV account.',
  'f.P:ertragsq.label': 'Income share (age 67)',
  'f.P:ertragsq.hint': '§ 22 Nr. 1 S. 3 Buchst. a Doppelbuchst. bb EStG, for non-subsidised annuity components.',
  'f.P:halb.label': 'Taxable share of the difference amount',
  'f.P:halb.hint': '§ 20 Abs. 1 Nr. 6 S. 2 EStG by analogy (contract over 12 years, payout after 62): half the difference amount. Confidence roughly 80 %.',

  /* ---------------- Frame, window titles, header and footer ---------------- */
  'app.title': 'Retirement provision comparison',
  'app.meta': 'Compare occupational pension (bAV), Altersvorsorgedepot and a private ETF account at the same net outlay. Law as of 2026.',
  'hdr.title': 'Retirement provision comparison',
  'hdr.sub': 'Occupational pension, Altersvorsorgedepot and a private ETF account &mdash; at the <b>same net outlay</b> and with the same ETF. German law as of 2026.',
  'win.header': 'Retirement provision comparison',
  'win.result': 'Result',
  'win.input': 'Your figures',
  'win.chart': 'Charts',
  'win.extra': 'More settings',
  'win.calc': 'How it is calculated',
  'win.share': 'Save and share',
  'win.min': 'Minimise',
  'win.restore': 'Restore',
  'win.n': function(p){ return 'Window ' + p.n; },
  'input.sub': 'The figures recalculate on every change. Every field explains itself via <span class="qm" style="cursor:default">?</span>.',
  'extra.sub': 'Everything here has sensible defaults. Touch it only if it applies to you.',
  'calc.sub': 'For anyone who wants to follow the arithmetic.',
  'share.sub': 'Your entries stay in this browser only (<kbd>localStorage</kbd>). Nothing is transmitted, there is no server and there are no trackers.',
  'ui.share': 'Copy link with my figures',
  'ui.export': 'Save to file',
  'ui.import': 'Load file',
  'ui.reset': 'Reset everything',
  'ui.pin.set': 'Pin as reference',
  'ui.pin.clear': 'Unpin reference',
  'ui.lang': 'Language',
  'ui.lang.de': 'German',
  'ui.lang.en': 'English',
  'ui.lang.la': 'Latin',
  'ui.lang.ja': 'Japanese',
  'ui.lang.aria': 'Choose language',
  'sb.up': 'Back up to the result',
  'footer.1': '<b>Not tax or investment advice.</b> A model is not a contract. The 2026 legal position on reformed private retirement provision is not settled in several respects; the assumptions with the lowest confidence are listed under „How it is calculated → Robustness of the assumptions“ and can be changed there.',
  'footer.2': 'Calculation core ported one-to-one from the Excel model <span class="pill">bAV-DYNO_vs_Altersvorsorgedepot_vs_ETF.xlsx</span> and checked against three test cases to machine precision (largest relative deviation 1.3·10<sup>&minus;14</sup>).',

  /* ---------------- The three options ---------------- */
  'opt.bav.name': 'Occupational pension (bAV, salary sacrifice)',
  'opt.bav.short': 'bAV',
  'opt.bav.nom': 'the occupational pension',
  'opt.bav.satz': 'The occupational pension',
  'opt.bav.gen': 'the occupational pension',
  'opt.av.name': 'Altersvorsorgedepot',
  'opt.av.short': 'AV account',
  'opt.av.nom': 'the Altersvorsorgedepot',
  'opt.av.satz': 'The Altersvorsorgedepot',
  'opt.av.gen': 'the Altersvorsorgedepot',
  'opt.priv.name': 'private ETF account',
  'opt.priv.short': 'private',
  'opt.priv.nom': 'the private ETF account',
  'opt.priv.satz': 'The private ETF account',
  'opt.priv.gen': 'the private ETF account',

  /* ---------------- Metrics ---------------- */
  'metric.monat.label': 'Monthly benefit',
  'metric.monat.unit': '€/month',
  'metric.monat.desc': 'A constant monthly payment of the same amount over the entire payout phase, in today’s purchasing power. The only figure directly comparable with your net income today.',
  'metric.ertrag.label': 'Net return (present value)',
  'metric.ertrag.unit': '€',
  'metric.ertrag.desc': 'What the option yields in today’s purchasing power beyond your own stake: present value of all net benefits minus present value of the net outlay.',
  'metric.irr.label': 'Internal rate of return',
  'metric.irr.unit': '% p.a.',
  'metric.irr.desc': 'Return on the net amount actually committed, in nominal terms. Directly comparable with the gross ETF return you set — the difference is exactly what subsidies and levies cost or yield in total.',
  'metric.kapital.label': 'Capital at start of payout',
  'metric.kapital.unit': '€',
  'metric.kapital.desc': 'Before tax and before social-security contributions, nominal. Deliberately NOT the decision variable: the bAV often leads here but loses in the payout phase.',
  'metric.pa': ' p.a.',
  'metric.pp': ' pp',
  'metric.short.monat': 'month',
  'metric.short.ertrag': 'return',
  'metric.short.irr': 'IRR',
  'metric.short.kapital': 'capital',

  /* ---------------- Input fields, framework ---------------- */
  'unit.pct': '%',
  'unit.eur': '€',
  'unit.eurm': '€/month',
  'ui.hintFor': function(p){ return 'Explanation of: ' + p.label; },
  'ui.couple': '<span>⇅</span> Two views of the same quantity. Change one and the other follows.',
  'ui.cnt.legal': function(p){ return p.n + ' statutory figures'; },
  'ui.cnt.fields': function(p){ return p.n + ' fields'; },
  'ui.legalNote': 'Statutory figures with their sources. Change them only if the law has changed or your insurer differs.',
  'group.bav': 'Top-up and payout forms in detail',
  'group.person': 'Timeline, leaving work, part-time',
  'group.steuer': 'Tax, assessment, children',
  'group.markt': 'Costs and inflation',
  'group.ruhe': 'Retirement',
  'group.p_sv': 'Statutory figures: social security 2026',
  'group.p_est': 'Statutory figures: income tax tariff 2026 (§ 32a EStG)',
  'group.p_kap': 'Statutory figures: capital gains and investment tax',
  'group.p_bav': 'Statutory figures: occupational and subsidised private provision',

  /* ---------------- Live notes on the fields ---------------- */
  'n.beitrag.ueber8': function(p, f){
    return 'Above 8 % of the pension-insurance contribution ceiling (' + f.eur(p.v8) + ' per year). The part '
      + 'above is neither tax- nor contribution-privileged — it goes into the insurance wrapper and picks up '
      + 'nothing there but liability to health-insurance contributions.'; },
  'n.beitrag.ueber4': function(p, f){
    return 'Above 4 % of the pension-insurance contribution ceiling (' + f.eur(p.v4) + ' per year). Up to here '
      + 'you have a statutory entitlement under § 1a BetrAVG; beyond it your employer has to agree.'; },
  'n.agzus.gedeckelt': function(p, f){
    return 'Capped at ' + f.pct(p.quote, 1) + '. The employer actually saves only ' + f.eur2(p.ersparnis)
      + ' per year — higher values change nothing here as long as the top-up mode stays „actual saving“.'; },
  'n.agz_fix.fliesstNicht': function(p, f){
    return 'Does not flow: your monthly contribution of ' + f.eur2(p.beitrag) + ' is below the minimum '
      + 'threshold of ' + f.eur2(p.schwelle) + ' (field under „More settings“).'; },
  'n.agz_fix.ueber4': function(p, f){
    return 'The flat top-up alone exceeds the 4 % allowance (' + f.eur(p.topf) + ' per year) by '
      + f.eur(p.ueber) + '. In your case that part would be pay subject to social-security contributions — '
      + 'the model does NOT net out the additional contribution burden and overstates the bAV to that extent.'; },
  'n.agz_fix.verdraengung': function(p, f){
    return 'It takes priority in the 4 % allowance: only ' + f.eur(p.rest) + ' of your own contribution stays '
      + 'free of social-security contributions. Your net outlay rises accordingly — the top-up is still free '
      + 'money, it merely shifts the boundary of your own subsidised amount.'; },
  'n.agz_fix.ueber8': 'Together with your own contribution above 8 % of the BBG-RV — the excess is neither tax- nor contribution-privileged.',
  'n.agz_fix_min.knapp': function(p, f){
    return 'You are only ' + f.eur2(p.d) + ' above the threshold. Below it the flat top-up disappears entirely: '
      + 'the marginal return on the last euro of contribution is infinite at that point, and the gross ↔ net '
      + 'coupling is discontinuous there.'; },
  'n.agz_fix_min.verfehlt': function(p, f){
    return 'Threshold not met — ' + f.eur2(p.fehlt) + ' more per month triggers ' + f.eur2(p.zuschuss)
      + ' of top-up. That is almost always the most profitable euro in the whole model.'; },
  'n.teilkap.kosten': function(p, f){
    return 'It costs ' + (p.gewinn ? 'nothing, on the contrary: ' + p.dtxt : p.dtxt + ' ' + p.unit)
      + ' compared with pure annuitisation. Reason: the lump sum is fully taxable in the year of receipt '
      + '(marginal burden there ' + f.pct(p.grenz, 1) + ') and afterwards compounds only at the rate net of '
      + 'withholding tax instead of at the product return.'; },
  'n.av_auszform.horizont': function(p, f){
    return 'Beyond the comparison horizon this annuity still pays ' + f.eur(p.rest) + ', which is NOT counted '
      + 'here. A fixed horizon systematically understates every lifelong annuity — living long pays off here.'; },

  /* ---------------- Result cards ---------------- */
  'card.lead': 'ahead',
  'card.unchanged': 'unchanged',
  'base.pinned': 'Δ against the pinned state',
  'base.delta': function(p){ return 'Δ ' + p.desc; },
  'base.none': 'Move a slider — the change appears here as Δ.',
  'base.desc.prev': 'previous state',
  'base.desc.pinned': 'pinned state',
  'base.desc.change': function(p){ return 'before changing „' + p.label + '“'; },
  'rank.swap': function(p, f){
    return '<b>The metrics disagree.</b> By monthly benefit ' + p.a + ' is ahead of ' + p.b
      + ', by present value of the net return it is the other way round. Reason: the present value discounts '
      + 'at inflation (' + f.pct(p.infl, 2) + '), the monthly benefit annuitises at the reinvestment rate net '
      + 'of tax (' + f.pct(p.wiederanl, 2) + '). The wider those two are apart, the better an early lump sum '
      + 'looks. Which metric applies depends on whether you would invest or spend the money — for „spend“, set '
      + 'the field „Cost of the private ETF account“ so that the reinvestment rate goes to zero.'; },
  'warn.unreachable': 'This net outlay is unreachable — it exceeds your salary. The highest possible value has been set instead.',
  'warn.inactive': 'By your own figures you are no longer employed in the first year — there is no salary sacrifice, hence no net outlay from which a gross contribution could be back-solved. Check „Leaving the job“ and „Age today“.',

  /* ---------------- Plain-language verdict ---------------- */
  'verdict.lead': function(p){
    return '<b>' + p.satz + '</b> is ahead with ' + p.wert + ' — ' + p.d2 + ' more than ' + p.nom2
      + (p.nom3 ? ' and ' + p.d3 + ' more than ' + p.nom3 : '') + '.'; },
  'verdict.pp': function(p){ return p.v + ' percentage points'; },
  'verdict.top': function(p, f){
    return ' The single largest item in the gap between ' + p.gen + ' and the private ETF account is '
      + '„' + p.label + '“ — ' + (p.pro ? 'in favour of ' : 'to the detriment of ') + p.gen
      + ', worth ' + f.eur(Math.abs(p.wert)) + ' in present value. The full decomposition is under '
      + '„Value drivers“.'; },
  'verdict.band': function(p, f){
    return '<span class="band">How robust is that? At a gross return of ' + f.pct(p.lo, 1) + ' instead of '
      + f.pct(p.mid, 1) + ' it would be ' + p.vlo + ', at ' + f.pct(p.hi, 1) + ' it would be ' + p.vhi
      + ' — the ranking '
      + (p.stabil ? 'stays the same across that range.'
                  : '<b>reverses within that range</b>, so the result does not carry here.')
      + '</span>'; },
  'demo.text': '<b>These are still example figures</b> — 40 years old, 75,000 € gross per year, 300 € of salary sacrifice per month, statutory health insurance. Enter your own under „Your figures“; this notice then disappears by itself.',

  /* ---------------- Floating bar ---------------- */
  'sb.cap': function(p){ return p.label + ' · ' + p.unit + (p.kaufkraft ? ', today’s purchasing power' : ''); },
  'sb.aria': function(p){ return 'Result: ' + p.label; },

  /* ---------------- Charts ---------------- */
  'tab.sens': 'Sensitivity',
  'tab.wf': 'Value drivers',
  'tab.kap': 'Capital path',
  'tab.zer': 'Monthly breakdown',
  'chart.error': function(p){ return 'Chart cannot be drawn: ' + p.msg; },
  'sens.readout': 'Dashed: your current value. Rings: intersections with the private account. Hover or tap over the curve for values.',
  'sens.legendY': function(p){ return 'y: ' + p.label + ' (' + p.unit + ')'; },
  'sens.note': function(p){
    return 'The slider you moved last is computed across its whole range — ' + p.n
      + ' complete model runs. Currently: „' + p.label + '“. Move another slider and the curve follows.'; },
  'sens.noteNetto': function(p, f){
    return ' Careful: this slider also changes the net outlay (here ' + f.eur2(p.lo) + ' to ' + f.eur2(p.hi)
      + ' per month) and hence the amount invested in all three options. The three curves are therefore fairly '
      + 'comparable at any single x, but the level between different x values is not. The kinks sit at the '
      + 'contribution ceilings (' + f.eur(p.bbgkv) + ' for health and care, ' + f.eur(p.bbgrv) + ' for pension '
      + 'and unemployment insurance) and at the tariff break points.'; },
  'wf.up': 'raises the return',
  'wf.down': 'lowers the return',
  'wf.legend': 'present value of the net return, today’s purchasing power',
  'wf.check': function(p, f){
    return 'Check: ' + f.eur(p.start) + ' + ' + f.eur(p.summe) + ' = ' + f.eur(p.start + p.summe)
      + ' (target ' + f.eur(p.ende) + ', deviation ' + f.nf2(p.start + p.summe - p.ende) + ' €).'; },
  'wf.note': 'A telescoping decomposition, which is why it adds up exactly — but it is <b>order-dependent</b>: the effects are not additively separable, each bar measures its contribution <i>given</i> the ones above it. Tap a bar for the derivation.',
  'wf.barinfo': function(p){ return p.label + ': ' + p.note; },
  'wfb.vp.label': 'No advance lump sum (Vorabpauschale)',
  'wfb.vp.note': 'Neither the bAV nor the Altersvorsorgedepot is subject to the advance lump sum (§ 18 InvStG). Measured as the private account without the advance lump sum minus with it. The bar can be negative: the advance lump sum largely runs into the saver’s allowance while raising the cost basis in full — in that case it is a net advantage for the private account.',
  'wfb.zul.label': 'Allowances and special-expenses deduction',
  'wfb.zul.note': 'Free money under the new allowance model plus the deduction under § 10a EStG. Measured by switching off both subsidy channels.',
  'wfb.arch.label': 'Taxation architecture (remainder)',
  'wfb.arch.note': 'Tariff arbitrage t₀ − t₁ and everything else. Determined as a residual so that the chain adds up exactly.',
  'wfb.agz.label': 'Employer top-up',
  'wfb.agz.note': 'Free money — the only structural advantage of the bAV that does not come from tax law. Measured by switching the top-up off.',
  'wfb.tarif.label': 'Tariff arbitrage and remainder',
  'wfb.tarif.note': 'Marginal tax rate when paying in minus when paying out, plus everything else. Determined as a residual so that the chain adds up exactly. Tax deferral alone is worthless: (1−t)(1+r)ⁿ = (1+r)ⁿ(1−t), multiplication commutes.',
  'wfb.kvpv.label': 'Health and care contributions on Versorgungsbezüge',
  'wfb.kvpv.note': '§§ 229, 250 SGB V: the pensioner bears the full contribution rate alone. Measured as the difference to the setting „private health insurance in retirement“.',
  'wfb.ep.label': 'Loss of statutory pension entitlement',
  'wfb.ep.note': 'Salary sacrifice reduces the pay subject to contributions and hence the statutory pension. Netted out here.',
  'kap.rentbeg': 'start of payout',
  'kap.swap': 'capital → annuity claim',
  'kap.legend': 'solid: total &nbsp;·&nbsp; dashed: freely available',
  'kap.readout': function(p, f){
    return 'Locked in at the start of payout: bAV ' + f.eur(p.bavGeb) + ' of ' + f.eur(p.bav)
      + ' · AV account ' + f.eur(p.avGeb) + ' of ' + f.eur(p.av)
      + ' · private account ' + f.eur(0) + ' of ' + f.eur(p.priv)
      + '.  The equivalent monthly benefit is consumed, which is why every option ends at zero.'; },
  'kap.note': function(p, f){
    return 'Balance inside the product, plus — during the payout phase — the payouts reinvested net of tax ('
      + f.pct(p.wiederanl, 2) + ' after tax) and minus the equivalent monthly benefit that is actually '
      + 'consumed. That is why every option runs down to exactly zero. Because consumption comes only out of '
      + 'the reinvested part while the product capital stays in the product, where it grows at the pre-tax '
      + 'product return, the curves are nevertheless not proportional. — The dashed line is the freely '
      + 'available part: the bAV is fully locked until the start of payout (§ 1b BetrAVG grants vesting, not '
      + 'availability); with the Altersvorsorgedepot a withdrawal before 65 forfeits the subsidy and only the '
      + 'excess over the annual maximum is free; the private account is free at any time. This is the only '
      + 'axis on which a lump sum looks good. '
      + (p.verrentet ? 'Because you annuitise the account, the capital goes to the provider there as well — '
          + 'the curve drops accordingly, although nothing is lost. ' : '')
      + 'And once more, explicitly: the curves show the wealth arising from THIS one decision, not your total '
      + 'wealth.'; },
  'zer.netto': 'net',
  'zer.tax': 'tax',
  'zer.kv': 'health/care',
  'zer.pension': 'pension',
  'zer.legend': '<span><i style="background:#808080"></i>tax</span><span><i style="background:#800000"></i>health/care</span><span><i style="background:#800080"></i>forgone statutory pension</span><span style="margin-left:auto">coloured base = what is left</span>',
  'zer.readout': 'Everything as a constant monthly benefit in today’s purchasing power. Because annuitisation is linear, the blocks add up exactly.',
  'zer.note': function(p, f){
    return 'The reference period is identical for all three options. A lump sum is not divided by twelve but '
      + 'annuitised over the same period at the reinvestment rate net of tax (' + f.pct(p.wiederanl, 2)
      + ' p.a.). Anyone who consumes the capital instead of investing it ends up worse off.'; },

  /* ---------------- How it is calculated ---------------- */
  'det.h.bav': 'bAV',
  'det.h.av': 'AV account',
  'det.h.priv': 'private',
  'det.h.kennzahl': 'Figure',
  'det.h.wert': 'Value',
  'det.erg.netto': 'Total paid in out of net income (nominal)',
  'det.erg.fremd': 'Free money (top-up or allowances)',
  'det.erg.kapital': 'Capital at the start of payout',
  'det.erg.brutto': 'Total gross payouts',
  'det.erg.steuer': 'of which income and withholding tax',
  'det.erg.kvpv': 'of which health and care insurance',
  'det.erg.rentenverlust': 'Loss of statutory pension (cumulative)',
  'det.erg.nettoausz': 'Total net payouts (nominal)',
  'det.erg.bwausz': 'Present value of the net payouts',
  'det.erg.bwaufw': 'Present value of the net outlay',
  'det.erg.ertrag': 'Present value of the net return',
  'det.erg.verhaeltnis': 'Ratio of payout to outlay',
  'det.erg.irr': 'Internal rate of return (nominal)',
  'det.erg.vorsprung': 'Lead over the private account',
  'det.mon.brutto': 'Gross benefit per month',
  'det.mon.steuer': 'less income and withholding tax',
  'det.mon.kvpv': 'less health and care insurance',
  'det.mon.ep': 'less loss of statutory pension',
  'det.mon.netto': 'NET PER MONTH (today’s purchasing power)',
  'det.diag.beitrag': 'Gross bAV contribution per month',
  'det.diag.aufwand': 'Net outlay per month (first year)',
  'det.diag.grenzsteuer': 'Marginal tax rate during accumulation (first year)',
  'det.diag.ersparnis': 'Total saving rate (tax + social security), first year',
  'det.diag.svAG': 'Actual social-security saving of the employer',
  'det.diag.svAN': 'Actual social-security saving of the employee',
  'det.diag.ngef': 'Share of bAV contributions without subsidy (first year)',
  'det.diag.aussch': 'Use of the statutory entitlement (4 % of BBG-RV)',
  'det.diag.agzVar': 'of which employer top-up: percentage (first year)',
  'det.diag.agzFix': 'of which employer top-up: flat amount (first year)',
  'det.diag.agzFixUeber4': 'flat top-up above the 4 % allowance (contribution burden not captured)',
  'det.diag.vbMonat': 'Versorgungsbezug per month at the start of payout',
  'det.diag.freibetrag': 'Allowance for Versorgungsbezüge in the same year',
  'det.diag.vbQuote': 'Ratio of Versorgungsbezug to allowance',
  'det.diag.kapFreiKapital': 'Capital possible free of contributions (lump sum)',
  'det.diag.kapFreiRente': 'Capital possible free of contributions (lifelong annuity)',
  'det.diag.memoRest': 'MEMO: bAV annuity payments beyond the horizon',
  'det.diag.memoRestAv': 'MEMO: account annuity beyond the horizon',
  'det.diag.wiederanl': 'Reinvestment rate net of tax',
  'det.diag.kapstEff': 'Effective withholding tax incl. solidarity and church tax',
  'det.diag.bestAnteil': 'Taxable share of the statutory pension',
  'det.warn.lead': 'You are outside the privileged corridor: ',
  'det.warn.aussch': 'Above 100 % usage there is no longer a statutory entitlement to salary sacrifice. ',
  'det.warn.ngef': 'A noticeable part of the contributions is neither tax- nor contribution-privileged — that layer goes into an insurance wrapper and gets nothing for it except liability to health-insurance contributions. ',
  'det.warn.vb': 'The Versorgungsbezug clearly exceeds the allowance; the protective effect of an absolute allowance falls like 1/capital. ',
  'det.anspar.h.jahr': 'Year',
  'det.anspar.h.brutto': 'Gross',
  'det.anspar.h.beitrag': 'bAV contribution',
  'det.anspar.h.agzVar': 'Top-up %',
  'det.anspar.h.agzFix': 'Top-up flat',
  'det.anspar.h.sv': 'Soc. sec. saving',
  'det.anspar.h.st': 'Tax saving',
  'det.anspar.h.netto': 'Net outlay',
  'det.anspar.h.zul': 'Allowances',
  'det.anspar.h.kbav': 'Capital bAV',
  'det.anspar.h.kav': 'Capital AV',
  'det.anspar.h.kpriv': 'Capital private',
  'det.row.year': function(p){ return p.jahr + ' (age ' + p.alter + ')'; },
  'det.ausz.h.jahr': 'Year',
  'det.ausz.h.bavBr': 'bAV gross',
  'det.ausz.h.kvpv': 'health/care',
  'det.ausz.h.steuer': 'Tax',
  'det.ausz.h.mind': 'Pension reduction',
  'det.ausz.h.bavNet': 'bAV net',
  'det.ausz.h.avBr': 'AV gross',
  'det.ausz.h.avNet': 'AV net',
  'det.ausz.h.privBr': 'private gross',
  'det.ausz.h.privNet': 'private net',
  'det.ann.intro': 'The ranking depends on legal questions that are not all settled in 2026. The figures in the column are subjective confidence levels.',
  'det.ann.h.annahme': 'Assumption',
  'det.ann.h.vertrauen': 'Confidence',
  'det.ann.h.anmerkung': 'Note',
  'det.ann.r1.a': 'Social-security figures 2026, § 32a tariff 2026',
  'det.ann.r1.c': 'SVBezGrV 2026, Steuerfortentwicklungsgesetz',
  'det.ann.r2.a': 'Health and care contributions on Versorgungsbezüge',
  'det.ann.r2.c': '§§ 229, 250 SGB V',
  'det.ann.r3.a': 'Allowance under § 226 Abs. 2 S. 2 SGB V (health insurance)',
  'det.ann.r3.c': 'undisputed',
  'det.ann.r4.a': 'Exemption limit rather than allowance in care insurance',
  'det.ann.r4.c': 'the most common error in guidebook texts',
  'det.ann.r5.a': 'AV account payout free of social-security contributions',
  'det.ann.r5.c': 'not Versorgungsbezüge',
  'det.ann.r6.a': 'Half the difference amount for non-subsidised layers',
  'det.ann.r6.c': '§ 22 Nr. 5 S. 2 Buchst. b in conjunction with § 20 Abs. 1 Nr. 6 S. 2 EStG',
  'det.ann.r7.a': 'Top-up only up to the employer’s actual saving',
  'det.ann.r7.c': 'the opposing view reads the 15 % as a pure flat rate',
  'det.ann.r8.a': 'Special-expenses maximum of 2,340 €',
  'det.ann.r8.c': 'MODEL ASSUMPTION. Decides whether a child raises or lowers the value of the AV account',
  'det.ann.r9.a': 'Compulsory KVdR insurance assumed in retirement',
  'det.ann.r9.c': 'voluntarily insured persons not examined',
  'det.ann.notmodelled': '<b>Not modelled:</b> deductions for early retirement, the effect of salary sacrifice on sickness, unemployment and parental benefits, survivors’ benefits, insolvency protection (PSVaG), portability when changing employer, care-insurance reductions for children, the comparison test under § 32d Abs. 6 EStG, protection against attachment and in basic income support, longevity risk beyond the horizon.',
  'det.prinzip': '<p>Comparing <i>gross contributions</i> would be unfair: salary sacrifice comes out of gross pay, private saving out of net pay. The <b>net outlay</b> is therefore held equal:</p>'
    + '<p style="font-family:var(--mono);font-size:.82rem;background:var(--chip);padding:9px 11px;border-radius:9px">net outlay = gross contribution − wage-tax saving − employee social-security contributions saved</p>'
    + '<p>Exactly this amount is invested in all three options. What remains is a comparison of <i>subsidy architectures</i>, not of contribution levels.</p>'
    + '<p><b>Tax deferral in itself is worthless:</b> (1−t)·(1+r)ⁿ = (1+r)ⁿ·(1−t). Multiplication commutes. Only four value drivers remain:</p>'
    + '<ol style="padding-left:1.2em;margin:.3em 0"><li>tariff arbitrage t₀ − t₁</li>'
    + '<li>free money — employer top-up or allowances</li>'
    + '<li>tax-free accumulation — no advance lump sum</li>'
    + '<li>new levies that hit only one option — health and care contributions on Versorgungsbezüge</li></ol>'
    + '<p>Point 4 is the dominant disadvantage of the bAV, point 2 its only structural advantage. The return on the bAV <b>falls strictly monotonically in the contribution level</b>, because the allowance is an absolute amount and its protective effect decays like 1/K — there is no interior optimum.</p>'
    + '<p>If the net outlay is given, the gross contribution is back-solved by bisection: N(B) is continuous and strictly increasing (dN/dB = 1 − marginal social-security rate − marginal tax rate > 0), but has no closed-form inverse because of the kinks at 4 % and 8 % of the BBG-RV, at the contribution ceilings and at the tariff break points. 34 bisections get below a tenth of a cent.</p>',
  'det.t.prinzip': 'The comparison principle',
  'det.t.erg': 'Result in detail',
  'det.s.erg': 'All three options cost exactly the same amount out of net income during accumulation.',
  'det.t.mon': 'Monthly benefit, decomposed',
  'det.s.mon': 'All options annuitised over the same period, in today’s purchasing power. Because annuitisation is linear, the rows add up exactly.',
  'det.t.diag': 'Diagnostics',
  'det.s.diag': 'Where it comes from — and where you stand outside the privileged corridor.',
  'det.t.anspar': 'Accumulation phase, year by year',
  'det.t.ausz': 'Payout phase, year by year',
  'det.t.ann': 'Robustness of the assumptions',

  /* ---------------- Save and share ---------------- */
  'msg.linkCopied': 'Link copied. Whoever opens it sees exactly these figures — none of it goes through a server.',
  'msg.linkFailed': 'Copying failed. The link is now in the address bar.',
  'msg.loaded': 'Loaded.',
  'msg.loadError': function(p){ return 'The file could not be read: ' + p.msg; },
  'msg.reset': 'Reset to the base case.',

  /* ---------------- PWA ---------------- */
  'pwa.offline': '<b>Works offline.</b> The app is now in the browser cache and runs without a connection. To install: on iPhone „Share“ → „Add to Home Screen“, on Android the menu → „Install app“.',
  'pwa.installAsk': '<b>Install as an app?</b> Then it sits on your home screen with its own icon and runs offline. ',
  'pwa.installBtn': 'Install',
  'pwa.installed': '<b>Installed.</b> You will find the app among your other apps now.',
  'pwa.declined': 'Fine — the app runs like this too, and offline at that.',
  'pwa.file': '<b>You opened the file directly</b> (<kbd>file://</kbd>). Everything computes, everything is saved. Only the two PWA properties are missing: no icon on the home screen and no offline cache — which you would not need here anyway, since the file is already on the device. For the full app experience, put the folder on any HTTPS web space and open it from there.'
};
