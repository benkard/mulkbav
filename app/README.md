# Altersvorsorge-Vergleich — Web-App

Progressive Web-App zum Excel-Modell im übergeordneten Ordner. Derselbe Rechenkern, dieselben
Ergebnisse, aber bedienbar von Menschen, die keine Tabellenkalkulation aufmachen wollen.

| Datei | Rolle |
|---|---|
| `index.html` | **Die ganze App.** Rechenkern, Oberfläche, Diagramme, Texte — eine Datei, keine externen Abhängigkeiten. Läuft per Doppelklick. |
| `manifest.json` | Macht die App installierbar (Name, Farben, Symbole). |
| `service-worker.js` | Offline-Cache, `stale-while-revalidate`. |
| `icon-*.png` | App-Symbole, 192 / 512 / 512-maskable. |

---

## 1. Weitergeben — drei Wege

**a) Nur die Datei.** `index.html` verschicken. Sie ist vollständig autark: Doppelklick genügt,
alles rechnet, Eingaben werden im Browser gespeichert. Was fehlt, ist nur die PWA-Hülle —
kein Symbol auf dem Startbildschirm, kein Offline-Cache. Beides braucht es hier auch nicht,
die Datei liegt ja schon auf dem Gerät. Die App sagt das dem Nutzer auch selbst.

**b) Der ganze Ordner auf einem Webspace.** Irgendein HTTPS-Hosting genügt (GitHub Pages,
Netlify, ein Unterverzeichnis auf der eigenen Domain). Dann ist sie installierbar und
offlinefähig. Es gibt kein Backend, keine Datenbank, keine Build-Kette.

```bash
# lokal ausprobieren, mit Service Worker:
cd app && python3 -m http.server 8000    # -> http://localhost:8000
```

Service Worker laufen auch auf `http://localhost` — als „secure context“ ist localhost
ausdrücklich ausgenommen.

**c) Als Link.** Der Knopf *„Link mit meinen Zahlen kopieren“* kodiert den kompletten
Eingabestand base64url in den Fragment-Bezeichner. Fragmente werden vom Browser **nicht** an
den Server geschickt (RFC 3986 § 3.5) — der Link enthält also persönliche Zahlen, überträgt
sie aber an niemanden außer den Empfänger.

## 2. Wo die Daten liegen

Ausschließlich in `localStorage` unter dem Schlüssel `altersvorsorge.v1`, also im Browser des
Nutzers. Kein Server, keine Analytik, keine Schriftarten von fremden Domains, keine externen
Skripte. Die einzigen Netzwerkzugriffe der App sind die, die der Service Worker macht, um sich
selbst zu aktualisieren.

## 3. Aufbau der Datei

`index.html` ist in elf nummerierte Teile gegliedert:

| Teil | Inhalt |
|---|---|
| 1 | **Rechenkern** — Portierung von `build_bav.py`. Reine Funktionen, kein DOM |
| 2 | Felddefinitionen: 77 Eingaben mit Bereich, Einheit, Erklärung, Fundstelle |
| 3 | Zustand, `localStorage`, Kodierung für den Teilen-Link |
| 4 | Formatierung (de-DE, Komma als Dezimaltrenner in beiden Richtungen) |
| 5 | Kennzahlen |
| 6 | Aufbau der Oberfläche |
| 7 | Ergebniskarten mit Δ-Anzeige |
| 7b | Klartext-Fazit, Beispielwert-Hinweis, mitlaufende Ergebnisleiste |
| 8 | Diagramme, reines Canvas |
| 9 | Rechenweg |
| 10 | Render-Schleife |
| 11 | Installation und Offline-Betrieb |
| 12 | Fensterrahmen: Titelleisten und Minimieren |

Der Rechenkern in Teil 1 ist **die einzige Stelle, an der gerechnet wird.** Er ist zeichengenau
aus `build_bav.py` übertragen; Änderungen an der Rechtslage gehören in beide Dateien.

### Brutto und Netto sind gekoppelt

Es gibt keinen Umschalter „ich gebe vor: Brutto / Netto“ mehr. Beide Felder zeigen dieselbe
Größe, nur in verschiedener Währung:

```
N(B) = B − SV-Ersparnis_AN(B) − Steuerersparnis(B)
```

`N` ist auf `[0, Bruttogehalt]` stetig und wegen `dN/dB = 1 − Grenz-SV-Satz − Grenzsteuersatz > 0`
streng monoton wachsend, also eine Bijektion auf `[0, N(Bruttogehalt)]`. Ein Umschalter wäre
eine Auswahl zwischen einer Funktion und ihrer Umkehrfunktion — also keine.

`beitrag` bleibt die einzige Quelle der Wahrheit; `netto_ziel` ist ein **abgeleitetes Feld** mit
`get` (Vorwärtsrechnung, Jahr 0 der Ansparphase) und `set` (Bisektion, `bruttoVonNetto`).
Beide werten dasselbe erste Jahr aus — Lohn- und Tarifindex sind dort 1 —, weshalb die
Richtungen exakt invers sind. Gemessen über 12 Parameterkombinationen × 5 Stützstellen:

| Richtung | größter relativer Fehler |
|---|---|
| B → N → B | 2,3 · 10⁻⁸ |
| N → B → N | 2,1 · 10⁻⁸ |

Das ist genau die Auflösung der Bisektion: 34 Halbierungen auf `[0, 250.000 €]` sind
1,5 · 10⁻⁵ €/Jahr, also gut ein Millionstel Cent im Monat. Die Monotonie ist zusätzlich auf
`1 … 1.500 €/Monat` in Ein-Euro-Schritten geprüft; die kleinste beobachtete Steigung ist
`dN/dB = 0,545`, d. h. Steuer und Sozialabgaben tragen zusammen nie mehr als 45,5 % des
Bruttobeitrags.

Fällt der Nettoaufwand für das erste Jahr auf null — weil man dann bereits ausgeschieden ist —,
existiert die Umkehrung nicht. Die App sagt das statt still nichts zu tun.

## 4. Prüfung

Der Kern ist gegen die Excel-Mappe geprüft, drei unabhängige Fälle, jeweils 22 Aggregate:

| Testfall | größte relative Abweichung |
|---|---|
| Basisfall (40 J., 75.000 €, 300 €/Monat, GKV, Kapital, Ausscheiden mit 63) | 3,6 · 10⁻¹⁵ |
| Splitting, KiSt 9 %, kinderlos, PKV, Rente, Fünftelregelung, Modus 2, Teilkapital | 1,3 · 10⁻¹⁴ |
| GKV + lebenslange Rente, Zuschussmodus 0, KiSt 8 %, Teilkapital 30 % | 6,2 · 10⁻¹⁵ |

Das sind wenige Dutzend ULP — akkumulierter Gleitkommafehler, nichts Systematisches.
Die Referenzwerte stammen aus einem LibreOffice-Recalc der Mappe mit denselben Eingaben.

> Die **Voreinstellungen** der App weichen bewusst vom Excel-Basisfall ab: „Ausscheiden aus dem
> Job“ und „Teilzeit ab Alter“ stehen beide auf 67, also auf „durchgehend bis zur Rente“. Die
> Testfälle setzen `ausscheid: 63, tzalter: 55` deshalb ausdrücklich — sonst prüfte man ein
> anderes Szenario und merkte es nicht.

Damit die beiden Kopien des Kerns nicht auseinanderlaufen, schneidet `extract.js` Teil 1 aus
`index.html` heraus und erzeugt daraus das `model.js`, gegen das getestet wird. Der Testkern
*kann* also gar nicht vom ausgelieferten abweichen.

Die Testskripte liegen unter `outputs/tests/`, `./tests/alle.sh` fährt alles durch:

- **Stilblatt-Test:** vergleicht die im Dokument benutzten Klassen mit denen im Stilblatt,
  in beide Richtungen. Benutzt-ohne-Regel heißt: ein Element steht unformatiert da.
  Regel-ohne-Nutzung heißt: tote Zeilen, meist eine vergessene Umbenennung. Der Test hat
  nach dem Stilwechsel zwei echte Fehler gefunden — den unformatierten Wasserfall-Umschalter
  und sechs verwaiste Hilfsklassen. Zusätzlich: jede per `var()` referenzierte Farbvariable
  muss definiert sein.
- **DOM-Test:** 34 Zusicherungen über jsdom — Karten, Sichtbarkeitsregeln, Regler, Segment-
  umschalter, Brutto-Netto-Kopplung in beide Richtungen, Fazittexte, mitlaufende Leiste,
  Rundung, Tabs, Kennzahlwechsel, Referenz merken, Zurücksetzen, `localStorage`.
  Die beiden seltenen Zweige des Fazits — „zulasten“ und „die Reihenfolge kehrt sich um“ —
  sind eigens durch Parametersuche im Modell aufgespürt und dann im DOM nachgestellt worden;
  ungetestete Textzweige sind sonst genau die, die beim Nutzer falsch dastehen.
- **Canvas-Test, Stufe 1** (Endlichkeit): 120 Kombinationen aus 2 Breiten × 15 Randfällen ×
  4 Diagrammen. Jeder Zeichenaufruf wird auf endliche Koordinaten, gesetzte Farben und
  Beschriftungen ohne `NaN` geprüft. Fand drei echte Fehler: Division durch null bei
  Beitrag 0, entarteter Zeitraum bei Horizont = Rentenbeginn, und — der interessanteste —
  nicht ganzzahlige Zwischenwerte in der Sensitivitätskurve über das Feld *Alter*, wodurch
  `Z[6,2]` indiziert wurde.
- **Canvas-Test, Stufe 2** (Sichtbarkeit): 400 Kombinationen aus 5 Breiten-/DPR-Paaren ×
  20 Szenarien × 4 Diagrammen. Prüft zusätzlich, dass jede Koordinate **innerhalb der Bitmap**
  liegt. Diese Stufe entstand, nachdem Stufe 1 einen sichtbaren Fehler durchgelassen hatte:
  `prep()` skalierte die Zeichenmatrix mit `devicePixelRatio`, setzte `canvas.height` aber in
  logischen Pixeln — alles unterhalb von `h/dpr` wurde aus der Bitmap herausgezeichnet.
  Sämtliche Koordinaten waren dabei endlich, also fehlerfrei nach Stufe 1. Lehre: bei Canvas
  reicht „endlich“ nicht, es muss „im Bild“ geprüft werden.

## 5. Was die App über das Excel hinaus kann

- **Sensitivitätskurve** über den zuletzt bewegten Regler: 41 vollständige Modellläufe
  (~0,5 ms je Lauf), mit markierten Schnittpunkten gegen das Privatdepot. Damit sind
  Break-evens ablesbar statt ausgerechnet.
- **Wasserfall der Werttreiber**, teleskopierend zerlegt, also exakt aufgehend. Reihenfolge-
  abhängig, weil die Effekte nicht additiv separierbar sind — die App sagt das dazu.
- **Warnung bei uneiniger Rangfolge.** Barwert und äquivalente Monatsleistung ranken
  unterschiedlich, sobald der Wiederanlagezins nach Steuern deutlich über der Inflation liegt
  (im Basisfall 5,54 % gegen 2,00 %). Genau daran hängt die Aussage
  „PKV im Ruhestand dreht das Ergebnis“: nach Monatsleistung ja, nach Barwert nicht.
- **Alle 45 Rechengrößen editierbar**, mit Fundstelle. Wer die Modellannahme
  „Sonderausgaben-Höchstbetrag 2.340 €“ (Vertrauensgrad ~70 %) nicht teilt, ändert sie.
- **Live-Notizen an den Reglern.** Der Arbeitgeberzuschuss meldet, ab welchem Prozentsatz er
  sättigt; der Monatsbeitrag meldet das Überschreiten der 4-%- und der 8-%-Grenze der
  Beitragsbemessungsgrenze RV. Beides sind Schwellen, an denen der Regler seine Wirkung
  verliert oder die Rechtslage wechselt — ohne Hinweis dreht man ratlos weiter.
- **Klartext-Fazit** in einem Satz: wer vorn liegt, um wie viel, und welcher Posten des
  Wasserfalls den Abstand hauptsächlich trägt. Beschreibend formuliert, nicht empfehlend.
  Angehängt ein Belastbarkeitstest über ±1 Prozentpunkt Bruttorendite, der ausdrücklich sagt,
  wenn die Reihenfolge in dieser Spanne kippt — was sie überraschend oft tut.

## 6. Bedienung auf dem Telefon

Die Regler standen ursprünglich rund 1.000 px unter den Ergebniskarten. Wer auf einem 390-px-
Gerät einen Regler schob, sah von der Wirkung **nichts** — genau das Gegenteil der Anforderung.
Zwei Änderungen:

1. **Reihenfolge:** Ergebnis → *Ihre Angaben* → Diagramme → Weitere Angaben → Rechenweg.
   Die Diagramme sind Vertiefung, die Eingaben sind der Arbeitsplatz.
2. **Mitlaufende Ergebnisleiste**, eingeblendet per `IntersectionObserver`, sobald die
   Ergebniskarten den oberen Rand verlassen. Sie zeigt alle drei Werte, das Δ zum
   Referenzstand, die Bezeichnung der Kennzahl und einen Sprung zurück nach oben.

Dazu: `:focus-visible` ist jetzt definiert (vorher gab es gar keine sichtbare Tastaturführung
auf den Segment-Umschaltern), und `prefers-reduced-motion` schaltet Übergänge ab.

Der Rechenweg baut 98 Tabellenzeilen. Solange kein Abschnitt aufgeklappt ist, wird der
Neuaufbau jetzt bis 300 ms nach der letzten Eingabe verschoben und beim Aufklappen nachgeholt.

## 7. Eine Lesefalle in der Sensitivitätskurve

Reglern wie *Jahresbrutto* oder *Monatsbeitrag* verändern nicht nur die Förderarchitektur,
sondern auch den **Nettoaufwand** — und damit den Betrag, der in allen drei Optionen investiert
wird. Die drei Kurven sind deshalb bei jedem einzelnen x fair vergleichbar, das Niveau zwischen
verschiedenen x aber nicht. Die auffälligen Sprünge sind echt und sitzen an den
Beitragsbemessungsgrenzen: oberhalb von 69.750 € spart die Entgeltumwandlung keine
KV/PV-Beiträge mehr, oberhalb von 101.400 € auch keine RV/AV-Beiträge. Der Nettoaufwand
springt dort um bis zu 15 %, die investierte Summe mit ihm. Die App blendet einen Hinweis mit
der tatsächlichen Spanne ein, sobald der Effekt 2 % übersteigt.

## 8. Zwei Befunde, die beim Portieren aufgefallen sind

**Die Vorabpauschale ist im Basisfall ein Vorteil für das Privatdepot.** Über 35 Jahre fallen
121.774 € Vorabpauschale an, davon werden aber nur 11.942 € tatsächlich versteuert — der Rest
läuft in den Sparer-Pauschbetrag. Die *volle* Summe erhöht dagegen die Kostenbasis und spart
bei der Entnahme rund 22.000 € Abgeltungsteuer. Setzt man den Sparer-Pauschbetrag auf null,
dreht das Vorzeichen. Der Balken „Wegfall der Vorabpauschale“ im Wasserfall ist deshalb
negativ; das ist kein Vorzeichenfehler.

**Der Arbeitgeberzuschuss sättigt — und zwar früher, als man denkt.** Im Zuschussmodus „spitz“
(§ 1a Abs. 1a BetrAVG wörtlich) wächst der Zuschuss nur bis zur tatsächlichen SV-Ersparnis des
Arbeitgebers. Bei 75.000 € Gehalt und 300 €/Monat liegt das Entgelt bereits **über** der
KV-Beitragsbemessungsgrenze von 69.750 €: der Arbeitgeber spart dort überhaupt keine
KV/PV-Beiträge, sondern nur RV/AV auf 3.600 €, also 381,60 € im Jahr — das sind 10,6 % des
umgewandelten Betrags. Der gesetzliche Mindestzuschuss von 15 % ist damit schon der gedeckelte
Wert; **jede Erhöhung des Reglers ist wirkungslos.** Die App zeigt das jetzt direkt am Regler an.

Der im README des Modells genannte Break-even von ~26,7 % ist folglich im spitzen Modus gar
nicht erreichbar, sondern nur in den Modi „voller Beitrag“ bzw. „sv-freier Anteil“.
Die Sensitivitätskurve zeigt die Sättigung als waagerechten Ast.

---

## 9. Das Aussehen: Windows 3.1 / NT 3.5

Silber `#C0C0C0` auf Petrol `#008080`, Navy-Titelleisten, harte Ein-Pixel-Kanten, alles aus der
16-Farben-VGA-Palette. **Es gibt nur ein Farbschema** — `prefers-color-scheme` ist entfernt,
eine Dunkelvariante gäbe es hier nicht zu skinnen.

Drei Kantenformen tragen die ganze Oberfläche:

| Form | Aufbau | Wo |
|---|---|---|
| erhaben (3.1) | `1px solid #000` + `inset 1px 1px 0 #FFF` + `inset -1px -1px 0 #808080` | Schaltflächen |
| erhaben (95) | zusätzlich `border-color:#DFDFDF #000 #000 #DFDFDF` | Fenster, Kacheln |
| versenkt | `border-color:#808080 #FFF #FFF #808080` + `inset 1px 1px 0 #000` | Felder, Zeichenfläche |

Gedrückte Umschalter bekommen zusätzlich das Rastermuster der eingerasteten Werkzeugleiste
(`repeating-conic-gradient` mit 2 px Kachel). Das Fokusrechteck ist das originale gepunktete —
zugleich das barrierefreiste, was Windows je hatte.

### Was bewusst aus Windows 95 / NT 4 kommt

Windows 3.1 kannte diese Steuerelemente schlicht nicht, und ohne sie wäre die App schlechter:

- **Trackbar** — der Schieberegler ist ein Win95-Common-Control. Unter 3.1 hätte man Zahlen
  eintippen müssen; die unmittelbare Rückkopplung wäre dahin.
- **Registerkarten** — 3.1 löste Mehrseitigkeit über eigene Dialoge. Vier Diagramme in vier
  Fenstern wären hier klar schlechter.
- **Versenkter Rahmen** (`WS_EX_CLIENTEDGE`) statt 3.1s einfachem schwarzen Rahmen um
  Eingabefelder — liest sich deutlich besser.

### Was 3.1 besser konnte

Die Segmentschalter sind zu **echten Optionsfeldgruppen** geworden. Das ist die authentische
Entsprechung für eine Auswahl unter wenigen Alternativen, es ist das semantisch richtige
Element, und die Pfeiltastennavigation der Radiogruppe gibt es geschenkt.

### Fenster, die wirklich Fenster sind

Jeder Abschnitt hat eine Titelleiste mit Systemmenü-Kasten und Minimieren-Knopf. Der Knopf ist
kein Zierrat: er klappt den Inhalt tatsächlich ein, Doppelklick auf die Titelleiste ebenso, und
der Zustand wird gespeichert. Auf dem Telefon ist das nützlich — man klappt „Ihre Angaben“ zu
und hat das Diagramm ganzseitig.

Grau ist unter Windows die Farbe des *Deaktivierten*. Lesbarer Text bleibt deshalb durchgehend
schwarz und wird über Größe und Kursivstellung abgestuft, nicht über Aufhellung. Das ist
zugleich authentisch und der bessere Kontrast: Schwarz auf `#C0C0C0` sind 9,9 : 1.

## 10. Bewusst nicht gebaut

- **Onboarding-Assistent.** Elf Kernfelder tragen keinen Wizard; er verstellte nur den Blick
  auf die Kopplung der Größen.
- **Animierte Zahlenübergänge.** Sie lenken von genau dem ab, was man vergleichen soll.
- **Aufgeräumte Rechengrößen.** Die 45 gesetzlichen Werte stehen bewusst hinten und bewusst
  vollständig. Wer die Modellannahme mit 70 % Vertrauensgrad nicht teilt, soll sie ändern
  können, ohne den Quelltext anzufassen.

---

*Keine Steuer- oder Anlageberatung. Ein Modell ist kein Vertrag.*
