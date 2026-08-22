# Altersvorsorge-Vergleich — Webanwendung

Progressive Webanwendung (PWA) zum Vergleich dreier Gestaltungsvarianten der Altersvorsorge.
Es handelt sich um das eigentliche Erzeugnis dieses Bestandes; hinsichtlich einer allgemeinen
Einführung wird auf das [Wurzel-README](../README.md) verwiesen. Der Rechenkern ist aus einer
zwischenzeitlich entfallenen Excel-Arbeitsmappe übernommen worden, welche ausschließlich über
die Versionsgeschichte zugänglich ist; die Ergebnisse sind dieselben, die Bedienung ist jedoch
auch denjenigen Personen eröffnet, welche eine Tabellenkalkulation nicht zu öffnen beabsichtigen.

| Datei | Zweckbestimmung |
|---|---|
| `index.html` | **Die vollständige Anwendung.** Rechenkern, Bedienoberfläche und Diagramme in einer einzigen Datei, ohne externe Abhängigkeiten mit Ausnahme der Wörterbücher. Der Aufruf erfolgt mittels Doppelklicks. |
| `i18n.de.js` | Wörterbuch Deutsch. Hauptsprache und Rückfallebene. **Vollständig.** |
| `i18n.en.js` `i18n.nl.js` `i18n.fr.js` `i18n.la.js` `i18n.ja.js` | Englisch, Niederländisch, Französisch, Latein, Japanisch. **Vollständig** (459 Schlüssel). |
| `i18n.nds.js` `i18n.bar.js` `i18n.eu.js` `i18n.eo.js` `i18n.tr.js` `i18n.uk.js` | Niederdeutsch, Bairisch, Baskisch, Esperanto, Türkisch, Ukrainisch. **Vollständig** (siehe § 3b). |
| `i18n.got.js` `i18n.goh.js` `i18n.gmh.js` `i18n.grc.js` `i18n.sa.js` | Gotisch, Althochdeutsch, Mittelhochdeutsch, Altgriechisch, Sanskrit. **Vollständig.** |
| `i18n.ine-x-proto.js` | Urindogermanisch in LIV²/Rix-Notation nebst Laryngalen und Asterisk. Ein Code nach ISO 639-3 ist nicht zu erlangen, da für Rekonstruate keine Codes vergeben werden; es wird daher der Privatuntertag `ine-x-proto` nach BCP 47 geführt. **Vollständig.** |
| `i18n.jbo.js` `i18n.tok.js` | Lojban, Toki Pona. Toki Pona wird in sitelen Lasina (ASCII) vorgehalten; das Stilblatt setzt für `lang="tok"` ligaturfähige sitelen-pona-Zeichensätze, welche die ASCII-Wörter zu Logographen binden. Ist ein solcher Zeichensatz nicht installiert, verbleibt lesbares Latein anstelle leerer Kästchen. **Vollständig.** |
| `i18n.akk-x-ob.js` | Altbabylonisch in Keilschrift (U+12000 ff.). Erzeugt aus `i18n.akk-x-ob.translit.js` mittels `node akk-keilschrift.js`; die Umschrift ist die Quelle, die Keilschrift das Erzeugnis. Die Codepunkte werden zur Bauzeit über die Unicode-Namenstabelle aufgelöst und nicht von Hand gesetzt. **Vollständig.** |
| `manifest.json` | Bewirkt die Installierbarkeit (Bezeichnung, Farben, Symbole). |
| `service-worker.js` | Offline-Zwischenspeicher, Verfahren `stale-while-revalidate`. |
| `icon-*.png` | Symbole der Anwendung, 192 / 512 / 512-maskable. |

---

## § 1 Weitergabe — drei Wege

**a) Ausschließlich die Dateien.** Es sind `index.html` nebst sämtlichen dreiundzwanzig
`i18n.*.js` zu übersenden; sie gehören zusammen und haben in demselben Ordner zu liegen. Ein
Doppelklick genügt, sämtliche Berechnungen werden durchgeführt, und die Eingaben werden im
Browser vorgehalten. Es fehlt lediglich die PWA-Hülle — mithin das Symbol auf dem
Startbildschirm sowie der Offline-Zwischenspeicher. Beides ist hier entbehrlich, da die Datei
bereits auf dem Gerät vorliegt. Die Anwendung weist hierauf von sich aus hin.

**b) Der vollständige Ordner auf einem Webspeicherplatz.** Ein beliebiges HTTPS-Hosting genügt
(GitHub Pages, Netlify, ein Unterverzeichnis der eigenen Domäne). Sodann ist die Anwendung
installierbar und offlinefähig. Ein Hintergrundsystem, eine Datenbank sowie eine Baukette
bestehen nicht.

```bash
# örtliche Erprobung einschließlich Dienstarbeiter:
cd app && python3 -m http.server 8000    # -> http://localhost:8000
```

Dienstarbeiter (*service worker*) sind auch über `http://localhost` betriebsfähig; localhost ist
als sicherer Kontext ausdrücklich ausgenommen.

**c) Als Verweis.** Die Schaltfläche *„Link mit meinen Zahlen kopieren"* kodiert den
vollständigen Eingabestand base64url in den Fragmentbezeichner. Fragmente werden vom Browser
**nicht** an den Server übermittelt (RFC 3986 § 3.5); der Verweis enthält mithin persönliche
Zahlen, überträgt diese jedoch an niemanden außer den Empfänger.

## § 2 Verbleib der Daten

Ausschließlich in `localStorage` unter dem Schlüssel `altersvorsorge.v1`, mithin im Browser der
nutzenden Person. Ein Server, eine Auswertung, Schriftarten von fremden Domänen sowie externe
Skripte bestehen nicht. Die einzigen Netzwerkzugriffe der Anwendung sind diejenigen, welche der
Dienstarbeiter zum Zwecke seiner eigenen Aktualisierung vornimmt.

## § 3 Aufbau der Datei

`index.html` ist in nummerierte Teile gegliedert:

| Teil | Inhalt |
|---|---|
| 0 | **Sprachen** — `t()`, Sprachwahl, Rückfall auf Deutsch |
| 1 | **Rechenkern** — Portierung des ursprünglichen Formelgenerators. Reine Funktionen, kein DOM |
| 2 | Felddefinitionen: 80 Eingaben nebst Bereich, Einheit und Wörterbuchschlüssel |
| 3 | Zustand, `localStorage`, Kodierung für den Weitergabeverweis |
| 4 | Formatierung und Zahleneingabe, sprachabhängig |
| 5 | Kennzahlen |
| 6 | Aufbau der Bedienoberfläche |
| 7 | Ergebniskarten nebst Δ-Anzeige |
| 7b | Klartextfazit, Hinweis auf Beispielwerte, mitlaufende Ergebnisleiste |
| 8 | Diagramme, ausschließlich Canvas |
| 9 | Rechenweg |
| 10 | Render-Schleife |
| 11 | Installation und Offline-Betrieb |
| 12 | Fensterrahmen: Titelleisten und Minimieren |
| 13 | Kachelung: eine, zwei oder drei Fensterspalten |
| 14 | Sprachumschaltung in der Bedienoberfläche |

Der Rechenkern in Teil 1 ist **die einzige Stelle, an der gerechnet wird.** Er ist zeichengenau
aus dem ursprünglichen Formelgenerator übertragen worden; Änderungen der Rechtslage sind mithin
ausschließlich dort vorzunehmen.

### Brutto- und Nettobetrag sind gekoppelt

Ein Umschalter „Vorgabe: Brutto / Netto" besteht nicht mehr. Beide Felder weisen dieselbe Größe
aus, lediglich in verschiedener Währung:

```
N(B) = B − SV-Ersparnis_AN(B) − Steuerersparnis(B)
```

`N` ist auf `[0, Bruttogehalt]` stetig und wegen `dN/dB = 1 − Grenz-SV-Satz − Grenzsteuersatz > 0`
streng monoton wachsend, mithin eine Bijektion auf `[0, N(Bruttogehalt)]`. Ein Umschalter wäre
eine Auswahl zwischen einer Funktion und ihrer Umkehrfunktion, mithin keine Auswahl.

`beitrag` verbleibt die einzige maßgebliche Größe; `netto_ziel` ist ein **abgeleitetes Feld** mit
`get` (Vorwärtsrechnung, Jahr 0 der Ansparphase) und `set` (Intervallhalbierung,
`bruttoVonNetto`). Beide werten dasselbe erste Jahr aus — Lohn- und Tarifindex betragen dort 1 —,
weshalb die Richtungen exakt invers sind. Gemessen über 12 Parameterkombinationen × 5
Stützstellen:

| Richtung | größter relativer Fehler |
|---|---|
| B → N → B | 2,3 · 10⁻⁸ |
| N → B → N | 2,1 · 10⁻⁸ |

Dies entspricht genau der Auflösung des Halbierungsverfahrens: 34 Halbierungen auf
`[0, 250.000 €]` ergeben 1,5 · 10⁻⁵ €/Jahr, mithin gut ein Millionstel Cent im Monat. Die
Monotonie ist ergänzend auf `1 … 1.500 €/Monat` in Ein-Euro-Schritten geprüft worden; die
geringste beobachtete Steigung beträgt `dN/dB = 0,545`, mithin tragen Steuer und Sozialabgaben
zusammen niemals mehr als 45,5 vom Hundert des Bruttobeitrags.

Fällt der Nettoaufwand für das erste Jahr auf null — weil zu diesem Zeitpunkt bereits ein
Ausscheiden vorliegt —, so existiert die Umkehrung nicht. Die Anwendung weist hierauf hin,
anstatt untätig zu verbleiben.

## § 3b Dreiundzwanzig Sprachfassungen

Deutsch ist die Hauptsprache; sämtliche übrigen Fassungen sind Übersetzungen derselben
Rechtslage und nicht etwa ein zweiter Rechtsstand. **Die Normzitate verbleiben in sämtlichen
Sprachfassungen in deutscher Sprache** (`§ 1a BetrAVG`, `§ 226 Abs. 2 S. 2 SGB V`, …) — es
handelt sich um die Primärquellen, für welche eine amtliche Übersetzung nicht vorliegt; eine
eigene wäre insoweit keine Hilfe, sondern eine Fehlerquelle. Gleichermaßen verbleiben zwei
Produktbezeichnungen unübersetzt, da es sich um Eigennamen handelt: `Altersvorsorgedepot` und
`Versorgungsbezüge`; im Japanischen nebst Glosse
(`Versorgungsbezüge（企業年金等の給付）`).

| | Sprachen | Schlüssel |
|---|---|---|
| **vollständig** | `de` `de-x-amt` `de-x-sales` `en` `nl` `fr` `la` `ja` `nds` `bar` `eu` `eo` `tr` `uk` `got` `goh` `gmh` `grc` `sa` `ine-x-proto` `jbo` `tok` `akk-x-ob` | 459 |
| **teilweise** | — | — |

Sämtliche dreiundzwanzig Sprachfassungen sind zwischenzeitlich vollständige Wörterbücher (459 von
459 Schlüsseln); die Tabellenzeile „teilweise" verbleibt, weil `TEILWEISE` in `index.html` als
Mechanismus fortbesteht — sie ist lediglich derzeit unbesetzt. Ursprünglich erfolgte die Auswahl
strukturell und nicht nach Zeichenzahl: zuerst übersetzt wurde dasjenige, was betätigt oder als
Überschrift gelesen wird — Feldbeschriftungen, Einheiten, Auswahlwerte, Fenstertitel,
Kennzahlen, Tabellenköpfe, Diagrammlegenden, Meldungen; die ausführlichen juristischen
Erläuterungen (die `?`-Texte an den Feldern, das Fazit, die Notizen unter den Feldern, der
gesamte Rechenweg) sind erst in einer zweiten Fassung hinzugetreten. Für die drei historischen
Sprachstufen sowie für Sanskrit und Altgriechisch ist der Vertrauensgrad in diesen
Fließtextpassagen entsprechend geringer als in den Feldbeschriftungen selbst; die genauen
Prozentsätze sowie die dort neu geprägten Fachbegriffe sind den Kopfkommentaren der jeweiligen
`i18n.*.js`-Datei zu entnehmen.

**Die drei alten germanischen Fassungen** (`got` Gotisch, `goh` Althochdeutsch,
`gmh` Mittelhochdeutsch) sind nicht als Scherz zu verstehen, sondern als Probe darauf, wie viel
Fachsprache eine Sprachstufe zu tragen vermag. Lediglich `goh` und `gmh` sind Vorstufen des
Deutschen; **das Gotische ist ostgermanisch und mithin eine Schwester, keine Ahnin** — es steht
hier, weil es das älteste umfangreich überlieferte Germanisch überhaupt darstellt. Das Ergebnis
ist ein deutliches Gefälle, welches genau der Verstädterung folgt:

- **Gotisch** verfügt mit der Wulfila-Bibel über ein Korpus von rund 3.000 Lexemen, von welchen
  praktisch keines wirtschaftlicher Natur ist. Belegt sind immerhin `faihu` (Vermögen), `gild`
  (Abgabe), `wokrs` (Zins, Lk 19,23 *miþ wokra*), `mizdo` (Lohn), `asneis` (Lohnarbeiter). Alles
  Übrige — `haubidafaihu` für Kapital, `gagaleikeins` für Vergleich — ist geprägt.
  Vertrauensgrad ≈ 30 vom Hundert.
- **Althochdeutsch** gewinnt durch Tatian und Notker: `gelt`, `zins`, `lon`, `wuohhar` sind
  belegt, und **`widarmezzon` steht im Tatian genau für lateinisch *comparare*** — der
  Fenstertitel ist mithin kein Kunstwort. Vertrauensgrad ≈ 50 vom Hundert.
- **Mittelhochdeutsch** ist die tragfähigste Stufe, da bereits eine städtische Geld- und
  Rechtssprache besteht. Drei Treffer sind keine Prägung, sondern der jeweilige Terminus:
  **`houbetguot`** ist das Kapital, **`lîpgedinge`** die lebenslange Leibrente, **`tiurunge`**
  der Preisanstieg, mithin die Inflation. Hinzu treten `gülte`, `stiure`, `wuocher`, `gewin`,
  `koste`. Vertrauensgrad ≈ 65 vom Hundert.

**Das Gotische steht in lateinischer Umschrift** (Streitberg) und nicht im Wulfila-Alphabet
(U+10330–1034F). Maßgeblich hierfür ist der Grundsatz gemäß § 2: die Anwendung lädt keine
Schriften von fremden Domänen. Für die gotische Schrift liegt auf keinem verbreiteten System
eine vorinstallierte Datei vor — 𐌰𐌻𐌻𐌰𐌹𐌼 erschiene als leere Kästchen. Die Umschrift ist
ohnehin diejenige Form, in welcher das Gotische gelesen wird. Wer die Schrift wünscht, bedarf
einer eingebetteten Schriftart und mithin einer abweichenden Grundsatzentscheidung.

### Registervarianten des Deutschen: eingerichtet

**„Beamtendeutsch" und „Vertrieb"** sind keine Sprachen, sondern Stilebenen derselben Sprache;
sie werden daher nach BCP 47 § 2.2.7 unter `de` mit privatem Untertag geführt: `de-x-amt` und
`de-x-sales`, in `i18n.de-x-amt.js` und `i18n.de-x-sales.js`. Abweichend von den übrigen
Sprachfassungen genügt hier keine Teilfassung: der Witz liegt gerade im Fließtext, welchen eine
Teilübersetzung fortließe. Derselbe § 1a BetrAVG lautet im Amtsdeutsch „Ein Rechtsanspruch
besteht ausschließlich bis zur Höhe von 4 vom Hundert der Beitragsbemessungsgrenze der
Rentenversicherung" und im Vertriebsdeutsch „Bis zu 4 % on top — geschenkt vom Gesetzgeber!" —
beide Fassungen beschreiben exakt dieselbe Rechtslage, und der Vergleich ist der Punkt. Die
Zahlen ändern sich auch dort nicht; `pruefe.js` prüft dies wie bei jeder anderen Sprache ohne
Sonderfall.

Technisch waren hierfür drei Änderungen erforderlich: `pickLang()` erkennt seither zusätzlich
zur Grundsprache beliebig viele `-x-[a-z0-9]{1,8}`-Untertags; `LANGS` und `DICT` haben Einträge
mit Bindestrich erhalten; `LOCALES` und `GRUPPEN` bedurften hingegen **keiner** neuen Einträge,
da deren bestehende `||`-Rückfälle (`'de-DE'` bzw. `'.'`) für beide Varianten bereits das
Zutreffende liefern. Die Sprachschaltfläche weist nicht den vollständigen Code aus (`DE-X-AMT`
wäre für die zweizeilige Schaltfläche zu lang), sondern lediglich den Teil nach dem letzten
Bindestrich (`AMT`, `SALES`); `lang="…"` sowie das Autonym im `title` tragen weiterhin den
vollständigen Code bzw. die vollständige Bezeichnung.

### Vorgemerkt, noch nicht eingerichtet

**Rechtsläufige Sprachen (`he`, `fa`, `ar`).** Die Übersetzung stellt den geringeren Aufwand
dar. Aufwendig ist Dreierlei: `applyStatic()` hat neben `lang` auch `dir` zu setzen; im Stilblatt
sind `margin-left`/`-right` durch die logischen Eigenschaften zu ersetzen, da andernfalls die
Kachelung kippt; und Teil 8 zeichnet auf Canvas, wo **ein Bidi-Algorithmus nicht besteht** —
Achsen, Legenden und der Wasserfall wären mithin von Hand zu spiegeln. Hinzu treten
`fa-u-nu-latn` und `ar-u-nu-latn` in `LOCALES`, da ICU andernfalls ostarabische Ziffern (۱۲۳۴)
neben einem `€` liefert. Die Einzelheiten sind als Kommentarblock in `index.html` unmittelbar
bei `TEILWEISE` niedergelegt.

**Codes.** ISO 639-1, soweit ein solcher besteht, im Übrigen 639-3. Dreibuchstabig sind `grc`
(**nicht** `el` — dies wäre Neugriechisch), `nds` und `bar`; für keine der drei Sprachen besteht
ein zweibuchstabiger Code. `pickLang()` erkennt daher `[a-z]{2,3}` als Grundcode, fakultativ
gefolgt von den vorgenannten `-x-…`-Untertags.

**Wahl der Sprache**, in nachstehender Reihenfolge:

1. `?lang=…` in der Adresse — weitergabefähig, überschreibt alles Übrige,
2. die vorgehaltene Wahl in `localStorage` unter `altersvorsorge.lang`,
3. `navigator.language`, nach BCP-47-Teilkette (`xx` oder `xx-…`).
   **Latein, Altgriechisch, Sanskrit und Esperanto werden niemals selbsttätig gewählt** — ein
   Browser, welcher `la` meldet, meint dies mit an Sicherheit grenzender Wahrscheinlichkeit
   nicht als Anzeigesprache.

Die Schaltflächen tragen das Kürzel, der `title` hingegen das **Autonym** (`Українська`,
`Plattdüütsch`, `संस्कृतम्`) und nicht die übersetzte Bezeichnung. Wer Ukrainisch sucht, erkennt
`Українська` auch dann, wenn die Oberfläche gegenwärtig auf Baskisch eingestellt ist; nebenbei
werden hierdurch 14 × 14 Wörterbucheinträge eingespart.

**Zahlenformat.** `LOCALES` bildet jeden Code auf ein ICU-Tag ab, `GRUPPEN` auf das
Tausenderzeichen, welches `parseNum()` beim mehrdeutigen `1,234` heranzieht. Sprachen ohne
eigene ICU-Daten (`nds`, `bar`, `eo`, `la`, `grc`, `sa`) erhalten `de-DE`: Devanāgarī-Ziffern
neben einem `€` wären eine Schikane und keine Genauigkeit, griechische Buchstabenzahlen erst
recht. `fr` gruppiert mit U+202F, `uk` mit U+00A0 — beides so, wie ICU es tatsächlich setzt,
nachgeprüft gegen `formatToParts`.

**Zu Latein und Japanisch.** Das Latein ist pragmatisches Neulatein: klassische Syntax, jedoch
gebildete Neuprägungen für die Moderne (`pensio operativa`, `impensa pura`, `valor praesens`,
`usura interna`). Römische Ziffern wären ein Witz zu Lasten der Lesbarkeit — und die
Trennzeichenkonvention ist ohnehin jünger als jede lateinische Quelle. Das Japanische folgt
demjenigen, was für Software dieser Art dort üblich ist: Erläuterungstexte in です・ます,
Feldbeschriftungen als Nominalphrasen im 体言止め. Für die Schrift ist der `--ui`-Stapel um
MS PGothic, Hiragino, Yu Gothic und Meiryo erweitert worden — eine Rasterschrift mit harten
Kanten ist dem Gegenstand angemessen.

Der japanische Satzbau erzwingt dasjenige, wozu die Funktionsform der Einträge bestimmt ist. Das
Fazit lautet im Deutschen „X liegt vorn mit W — D mehr als Y", im Japanischen hingegen
`Xが首位です（W）。YをD上回ります。` — das Verb am Ende, die Vergleichsgröße mit を anstelle von
„als". Als Verkettung fester Bausteine ließe sich dies nicht herstellen.

Der Umschalter oben im Kopffenster schreibt beides fort, mithin Speicher und Adresse. Der
Weitergabeverweis führt die Suchzeichenfolge mit, der Zustand verbleibt im Fragment; beides
stört sich nicht.

**Aufbau der Wörterbücher.** Ein Eintrag ist entweder eine Zeichenkette oder eine Funktion
`(p, f) → string`. Die Funktionsform ist keine Bequemlichkeit, sondern zwingend erforderlich: ein
Satz ist nicht die Verkettung seiner Teile. Stellung, Numerus und Rektion hängen an der Sprache,
und `'mehr als ' + nom` ist lediglich so lange tragfähig, wie beide Sprachen denselben Satzbau
aufweisen. Den Funktionen werden daher **Rohwerte** übergeben — Zahlen und keine fertigen
Textstücke —, und die Formatierung erfolgt selbsttätig über `f` (`f.eur`, `f.pct`, `f.nf2`, …).
Sichtbar wird der Unterschied etwa im Fazit: das Deutsche bedarf dort eines Genitivs (`der bAV`),
das Englische einer Präposition.

```
t('n.beitrag.ueber8', { v8: v8 })
  de: 'Über 8 % der Beitragsbemessungsgrenze RV (' + f.eur(p.v8) + ' im Jahr). …'
  en: 'Above 8 % of the pension-insurance contribution ceiling (' + f.eur(p.v8) + ' per year). …'
```

**Schlüsselschema.** Eingabefelder liegen unter `f.<src>:<key>.label|hint|unit|o<wert>`, die
Optionen mithin unter ihrem *Wert* und nicht unter ihrem Index; sodann verbleibt die Zuordnung
zutreffend, wenn eine Option hinzutritt. `FIELDS`, `OPTS` und `METRICS` führen ihre Texte nicht
mehr als Feld, sondern als `Object.defineProperty`-Zugriffsfunktion: `f.label` steht unverändert
an jeder Aufrufstelle und liefert nach einem Sprachwechsel von selbst den neuen Wert.

**Fehlt ein Eintrag**, so greift Deutsch; fehlt auch dieser, so erscheint der Schlüssel selbst im
Klartext. Ein stiller Leerstring wäre die schlechtere Wahl, da er unbemerkt verschwände.

**Zahlen.** Umgeschaltet wird ausschließlich die Zifferngruppierung — `de` und `la` → `de-DE`,
`en` → `en-GB`, `ja` → `ja-JP`; die Währung verbleibt durchgängig der nachgestellte Euro:
`75.000,00 €` bzw. `75,000.00 €`. Die Eingabe nimmt **beide** Schreibweisen an, damit ein
Sprachwechsel eine eingegebene Zahl nicht entwertet. Die Regel in `parseNum` lautet: stehen beide
Zeichen im Text, so ist das rechte das Dezimalzeichen; steht lediglich eines und folgen ihm genau
drei Ziffern, so handelt es sich um die Tausendergruppe der gegenwärtigen Sprache (`GRUPPEN`:
`.` für de und la, `,` für en und ja). Damit verbleibt allein `1,234` mehrdeutig — und genau dort
entscheidet die Sprache.

**Was ein Sprachwechsel nicht anfasst:** die Eingaben, den Referenzstand und die Ergebnisse.
`setLang` baut lediglich diejenigen Teile neu auf, deren Beschriftungen beim Aufbau
festgeschrieben werden (Kennzahlenleiste, Registerkarten, Felder, Fenstertitel); alles Übrige
zeichnet `refresh()` ohnehin bei jedem Durchgang. Der Referenzstand hält daher den
*Feldschlüssel* vor und nicht den fertigen Satz; andernfalls stünde nach dem Wechsel „vor der
Änderung von …" noch in der vormaligen Sprache da.

**Prüfung.** `pruefe.js` (Entwicklungswerkzeug, wird vom Dienstarbeiter nicht ausgeliefert) lädt
die Seite kopflos in jsdom, schaltet sämtliche dreiundzwanzig Sprachfassungen durch, klappt jeden
Abschnitt auf, erzwingt über fünf Szenarien die bedingten Texte und prüft: kein unaufgelöster
Schlüssel, keine deutschen Reste im englischen Modus außer den zugelassenen Fachbegriffen, kein
sichtbar verbliebener Schlüssel, und — die eigentliche Invariante — **identische
Rechenergebnisse in sämtlichen dreiundzwanzig Sprachfassungen**.

Die Liste der Wörterbücher liest das Skript aus `index.html` aus, anstatt sie zu pflegen: eine
neue Sprache soll den Test nicht stillschweigend an einem leeren Objekt vorbeilaufen lassen. Das
Regex für die `<script src="i18n….js">`-Tags lässt dabei auch Bindestriche im Dateinamen zu
(`i18n.de-x-amt.js`) und nicht nur zwei- bis dreibuchstabige Codes. Für Teilsprachen — sobald
solche wieder bestehen — wird ergänzend der Rückfall selbst nachgewiesen: jeder nicht übersetzte
Schlüssel hat den *deutschen Text* zu liefern, niemals einen Leerstring und niemals den
Schlüssel; kein eigener Eintrag darf den Typ wechseln (Zeichenkette ↔ Funktion); der Hinweis
unter dem Umschalter hat genau bei den Teilsprachen und sonst nirgends zu stehen. Umgekehrt wird
für jede Vollsprache — mithin gegenwärtig für sämtliche dreiundzwanzig — nachgewiesen, dass ihr
Wörterbuch tatsächlich 459 von 459 Schlüsseln trägt und der Teilhinweis NICHT erscheint. Für die
beiden Registervarianten des Deutschen wird ergänzend geprüft, dass der Bindestrich-Untertag die
Adresszeile sowie den Rückweg durch `pickLang()` übersteht. Bricht das Hauptskript beim Parsen —
der wahrscheinlichste Fall ist ein Blockkommentar, welchen ein Regex-Literal vorzeitig schließt
—, so bricht das Skript mit einer eindeutigen Meldung ab, anstatt an einem `undefined` zu
straucheln. 154 Prüfungen.

## § 4 Prüfung

Der Kern ist gegen das ursprüngliche Excel-Modell geprüft worden, sechs unabhängige Fälle zu je
rund 20 Aggregaten:

| Testfall | größte relative Abweichung |
|---|---|
| Regelfall (40 J., 75.000 €, 300 €/Monat, GKV, Kapital, Ausscheiden mit 63) | 3,6 · 10⁻¹⁵ |
| Splitting, KiSt 9 %, kinderlos, PKV, Rente, Fünftelregelung, Modus 2, Teilkapital | 1,3 · 10⁻¹⁴ |
| GKV nebst lebenslanger Rente, Zuschussmodus 0, KiSt 8 %, Teilkapital 30 % | 6,2 · 10⁻¹⁵ |
| **AVD verrentet** | 5,2 · 10⁻¹⁵ |
| **AVD verrentet nebst 30 % Einmalbetrag** | 3,6 · 10⁻¹⁵ |
| **beide Produkte verrentet, Splitting, PKV, abweichende Zeitachse, 2 Kinder** | 4,4 · 10⁻¹⁵ |
| **fester AG-Zuschuss 100 €/Monat** | exakt (< 10⁻⁹ auf sämtlichen Jahreswerten) |
| **fester Zuschuss 400 €/Monat, 4-%-Höchstbetrag erschöpft** | exakt |
| **fester Zuschuss nebst Mindestschwelle, ober- und unterhalb derselben** | exakt |
| **Mindestschwelle nebst Modus 2 (Halbierungsverfahren über die Sprungstelle)** | exakt |

> Der Prüfanker ist **erhalten geblieben**: der ursprüngliche Formelgenerator ist für die
> Depotverrentung mitgezogen worden (neue Eingaben, drei neue Spalten im Blatt `Auszahlung`,
> zweite Memo-Zeile im Blatt `Vergleich`), die Mappe ist neu erzeugt und mit LibreOffice
> durchgerechnet worden — 0 Formelfehler, und der Regelfall ist auf den Cent unverändert
> geblieben. Der JavaScript-Kern wird gegen dieses Ergebnis geprüft und nicht gegen sich selbst.

Es handelt sich um wenige Dutzend Einheiten der letzten Stelle, mithin um akkumulierten
Gleitkommafehler und nicht um eine systematische Abweichung. Die Referenzwerte stammen aus einem
LibreOffice-Durchlauf der Mappe unter denselben Eingaben.

> Die **Voreinstellungen** der Anwendung weichen bewusst vom Excel-Regelfall ab: „Ausscheiden aus
> dem Job" und „Teilzeit ab Alter" stehen beide auf 67, mithin auf „durchgehend bis zur Rente".
> Die Testfälle setzen daher `ausscheid: 63, tzalter: 55` ausdrücklich; andernfalls würde ein
> abweichendes Szenario geprüft, ohne dass dies bemerkt würde.

Damit die beiden Kopien des Kerns nicht auseinanderlaufen, schneidet `extract.js` Teil 1 aus
`index.html` heraus und erzeugt hieraus dasjenige `model.js`, gegen welches geprüft wird. Der
Prüfkern *kann* mithin vom ausgelieferten Kern gar nicht abweichen.

Die Prüfskripte werden als Sitzungsausgaben unter `outputs/tests/` geführt und liegen nicht im
Arbeitsbaum vor; `./tests/alle.sh` fährt sämtliche Prüfungen durch:

- **Stilblatt-Test:** vergleicht die im Dokument verwendeten Klassen mit denjenigen im Stilblatt,
  und zwar in beiden Richtungen. Verwendet-ohne-Regel bedeutet: ein Element steht unformatiert
  da. Regel-ohne-Verwendung bedeutet: tote Zeilen, im Regelfall eine unterbliebene Umbenennung.
  Der Test hat nach dem Stilwechsel zwei tatsächliche Fehler aufgefunden — den unformatierten
  Wasserfall-Umschalter sowie sechs verwaiste Hilfsklassen. Ergänzend gilt: jede per `var()`
  referenzierte Farbvariable hat definiert zu sein.
- **Excel-Abgleich der Depotverrentung** (`7-avrente.js`): die drei neuen Fälle gegen einen
  frischen LibreOffice-Durchlauf, einschließlich der Memo-Zeile für Zahlungen nach dem Horizont.
- **DOM-Test:** 57 Zusicherungen über jsdom — Karten, Sichtbarkeitsregeln, Regler,
  Segmentumschalter, Brutto-Netto-Kopplung in beiden Richtungen, Fazittexte, mitlaufende Leiste,
  Rundung, Registerkarten, Kennzahlwechsel, Referenz merken, Zurücksetzen, `localStorage`.
  Die beiden seltenen Zweige des Fazits — „zulasten" und „die Reihenfolge kehrt sich um" — sind
  eigens durch Parametersuche im Modell aufgespürt und sodann im DOM nachgestellt worden;
  ungeprüfte Textzweige sind andernfalls genau diejenigen, welche beim Nutzer unzutreffend
  dastehen.
- **Canvas-Test, Stufe 1** (Endlichkeit): 120 Kombinationen aus 2 Breiten × 15 Randfällen ×
  4 Diagrammen. Jeder Zeichenaufruf wird auf endliche Koordinaten, gesetzte Farben sowie
  Beschriftungen ohne `NaN` geprüft. Aufgefunden wurden drei tatsächliche Fehler: Division durch
  null bei Beitrag 0, entarteter Zeitraum bei Horizont = Rentenbeginn, und — der bemerkenswerteste
  — nicht ganzzahlige Zwischenwerte in der Sensitivitätskurve über das Feld *Alter*, wodurch
  `Z[6,2]` indiziert wurde.
- **Canvas-Test, Stufe 2** (Sichtbarkeit): 400 Kombinationen aus 5 Breiten-/DPR-Paaren ×
  20 Szenarien × 4 Diagrammen. Geprüft wird ergänzend, dass jede Koordinate **innerhalb der
  Bitmap** liegt. Diese Stufe ist eingerichtet worden, nachdem Stufe 1 einen sichtbaren Fehler
  durchgelassen hatte: `prep()` skalierte die Zeichenmatrix mit `devicePixelRatio`, setzte
  `canvas.height` jedoch in logischen Pixeln — alles unterhalb von `h/dpr` wurde mithin aus der
  Bitmap herausgezeichnet. Sämtliche Koordinaten waren dabei endlich und nach Stufe 1 mithin
  fehlerfrei. Erkenntnis: bei Canvas genügt „endlich" nicht, es ist „im Bild" zu prüfen.

## § 5 Was die Anwendung über die Tabellenkalkulation hinaus leistet

- **Sensitivitätskurve** über denjenigen Regler, welcher zuletzt bewegt worden ist: 41
  vollständige Modellläufe (~0,5 ms je Lauf) nebst gekennzeichneten Schnittpunkten gegenüber dem
  privaten Depot. Gewinnschwellen sind hierdurch ablesbar und nicht zu errechnen.
- **Wasserfall der Werttreiber**, teleskopierend zerlegt und mithin exakt aufgehend. Die
  Darstellung ist reihenfolgeabhängig, da die Effekte nicht additiv separierbar sind; die
  Anwendung weist hierauf hin.
- **Warnhinweis bei uneinheitlicher Rangfolge.** Barwert und äquivalente Monatsleistung ranken
  unterschiedlich, sobald der Wiederanlagezins nach Steuern die Inflationsrate deutlich
  übersteigt (im Regelfall 5,54 gegenüber 2,00 vom Hundert). Hieran hängt genau die Aussage
  „private Krankenversicherung im Ruhestand kehrt das Ergebnis um": nach Monatsleistung ja, nach
  Barwert nicht.
- **Sämtliche 45 Rechengrößen sind änderbar**, jeweils unter Angabe der Fundstelle. Wer die
  Modellannahme „Sonderausgaben-Höchstbetrag 2.340 €" (Vertrauensgrad ~70 vom Hundert) nicht
  teilt, hat sie zu ändern.
- **Fortlaufende Notizen an den Reglern.** Der Arbeitgeberzuschuss meldet, ab welchem
  Prozentsatz er sättigt; der Monatsbeitrag meldet das Überschreiten der 4-%- und der
  8-%-Grenze der Beitragsbemessungsgrenze der Rentenversicherung. Es handelt sich in beiden
  Fällen um Schwellen, an welchen der Regler seine Wirkung verliert oder die Rechtslage wechselt;
  ohne Hinweis würde ratlos weitergedreht.
- **Fester Arbeitgeberzuschuss** (Regler „Fester Zuschuss zusätzlich", darunter der Schalter zur
  Dynamisierung, unter „Weitere Angaben" die Mindest-Eigenleistung). Tarifvertragliche
  Festbeträge — bei der Deutschen Bahn sowie in zahlreichen weiteren Tarifwerken vorgesehen —
  hängen nicht am Umwandlungsbetrag und treten neben die 15 vom Hundert des § 1a Abs. 1a
  BetrAVG. Der Regler meldet, wenn der Festbetrag den 4-%-Höchstbetrag des § 1 Abs. 1 S. 1 Nr. 9
  SvEV vorrangig belegt und hierdurch die eigene Umwandlung verdrängt, und warnt oberhalb von
  4 vom Hundert der Beitragsbemessungsgrenze der Rentenversicherung (2026: 338 €/Monat), wo das
  Modell die sodann anfallende Beitragspflicht des Überhangs bewusst nicht gegenrechnet.
- **Klartextfazit** in einem Satz: wer vorn liegt, um welchen Betrag, und welcher Posten des
  Wasserfalls den Abstand hauptsächlich trägt. Die Formulierung ist beschreibend und nicht
  empfehlend gehalten. Angefügt ist ein Belastbarkeitstest über ±1 Prozentpunkt Bruttorendite,
  welcher ausdrücklich mitteilt, wenn die Reihenfolge innerhalb dieser Spanne kippt — was
  überraschend häufig der Fall ist.

## § 6 Bedienung auf dem Telefon

Die Regler standen ursprünglich rund 1.000 px unterhalb der Ergebniskarten. Wer auf einem
390-px-Gerät einen Regler verschob, sah von der Wirkung **nichts** — mithin genau das Gegenteil
der Anforderung. Zwei Änderungen wurden vorgenommen:

1. **Reihenfolge:** Ergebnis → *Ihre Angaben* → Diagramme → Weitere Angaben → Rechenweg.
   Die Diagramme dienen der Vertiefung, die Eingaben sind der Arbeitsplatz.
2. **Mitlaufende Ergebnisleiste**, eingeblendet per `IntersectionObserver`, sobald die
   Ergebniskarten den oberen Rand verlassen. Sie weist sämtliche drei Werte, das Δ zum
   Referenzstand, die Bezeichnung der Kennzahl sowie einen Rücksprung nach oben aus.

Ergänzend gilt: `:focus-visible` ist nunmehr definiert (vormals bestand auf den
Segmentumschaltern überhaupt keine sichtbare Tastaturführung), und `prefers-reduced-motion`
schaltet Übergänge ab.

> **Berichtigung.** Der `IntersectionObserver` beobachtete `#result`. Ein solches Element besteht
> nicht; der Abschnitt trägt die Bezeichnung `#w-result`. `observe(null)` wirft nach WebIDL einen
> `TypeError` (`observe(Element target)`), und die Ausnahme riss alles mit sich, was im Skript
> nachfolgte: die Leiste selbst, die Registrierung des Dienstarbeiters sowie den
> Installationshinweis. Der Mangel ist behoben; die drei Vorgänge sind erstmals betriebsfähig.

## § 6b Bedienung auf breiten Bildschirmen

Ein Fenster wird nicht breiter als rund 570 px. Darüber hinaus wird keine Zeile lesbarer — die
Typografie verträgt 45 bis 75 Zeichen —, weshalb der gewonnene Platz in eine weitere Spalte und
nicht in längere Zeilen wandert:

| Breite | Spalten | Aufteilung |
|---|---|---|
| < 1080 px | 1 | Quelltextreihenfolge, unverändert |
| ≥ 1080 px | 2 | Eingaben ‖ Ausgaben |
| ≥ 1560 px | 3 | Eingaben ‖ Ergebnis nebst Diagramm ‖ Herleitung |

Die Aufteilung folgt der Wirkungsrichtung: was betätigt wird, steht links; was hieraus folgt,
rechts daneben und mithin **gleichzeitig im Bild**. Hierin liegt der eigentliche Gewinn — Ursache
und Wirkung ohne Scrollen, wofür auf dem Telefon die mitlaufende Leiste einspringt.

Drei Entwurfsentscheidungen, jede nebst ihrer Begründung:

1. **Die Fenster werden tatsächlich umgehängt** (`LAY.apply`) und nicht lediglich per CSS
   umsortiert. Der Quelltext verbleibt einspaltig und mithin in der für schmale Geräte
   zutreffenden Reihenfolge. `display:contents` auf vorgebauten Spalten hätte genau diese
   Reihenfolge zerstört, und eine reine Grid-Zuweisung (`grid-column`/`grid-row`) hätte in jeder
   Zeile eine Lücke in Höhe des jeweils höchsten Fensters hinterlassen. Echte Blockcontainer
   packen dicht.
2. **`position:sticky` bedarf eines Blockcontainers.** Der Grid-Bereich eines Elements ist genau
   eine Zeile hoch; ein darin klebendes Element hätte keine Möglichkeit, sich irgendwohin zu
   kleben. Hierfür besteht `.col` als Zwischenebene — und aus demselben Grund verbleibt das
   Ergebnisfenster in seiner Spalte oben stehen, während links die Regler wandern. Die
   mitlaufende Leiste blendet sich dabei von selbst aus, und zwar ohne Sonderfall im Code: ihr
   Beobachter sieht das angeheftete Fenster unverwandt im Bild.
3. **Die Enge hängt nicht mehr am Bildschirm, sondern am Fenster.** Ein 560 px breites Fenster
   auf einem 1600-px-Bildschirm bedarf derselben Regeln wie ein Telefon. Es handelt sich um
   denjenigen Fall, für welchen `@container` besteht; die vormaligen
   `@media (max-width:640px)`-Regeln verbleiben als Rückfallebene.

Ein angeheftetes Fenster nimmt dauerhaft Platz in Anspruch. Bei über 60 vom Hundert der
Bildschirmhöhe wäre dies ein ungünstiger Tausch, und ein Fenster, welches höher als der Bildschirm
ist, ließe sein unteres Ende überhaupt nicht mehr erreichen. In diesem Fall (`body.nosticky`,
gesetzt nach Messung in `LAY.fit`) scrollt es regulär mit, und die mitlaufende Leiste übernimmt
wieder — wofür sie eingerichtet worden ist.

Der Rechenweg baut 98 Tabellenzeilen auf. Solange kein Abschnitt aufgeklappt ist, wird der
Neuaufbau nunmehr bis 300 ms nach der letzten Eingabe verschoben und beim Aufklappen nachgeholt.

## § 7 Zwei Zinssätze und der Kapitalverlauf

In der Auszahlungsphase wirken **zwei verschiedene Zinssätze**; hierbei handelt es sich nicht um
ein Versehen:

| Geld … | verzinst sich mit | versteuert |
|---|---|---|
| … im Produkt (AV-Depot) | `rnet_av` = 6,50 % | erst bei Entnahme |
| … im Produkt (Privatdepot) | `rnet_priv` = 6,80 % | erst bei Entnahme |
| … ausgezahlt, noch nicht verbraucht | `wiederanl` = **5,54 %** | bereits versteuert |

In welchem Umfang dies zum Tragen kommt, entscheidet die **Auszahlungsform**. Beide geförderten
Produkte verfügen über eine solche, und sie sind **unabhängig voneinander** einstellbar: wer die
betriebliche Altersversorgung als Kapital nimmt, kann das Depot gleichwohl verrenten:

| | Einmalbetrag | Rest |
|---|---|---|
| bAV | 0 % oder 100 % (`auszform`) | lebenslange Rente |
| Altersvorsorgedepot | 0 – 30 % (`teilkap`) | Auszahlungsplan **oder** lebenslange Rente (`av_auszform`) |

### Die Verrentung des Altersvorsorgedepots

Beim Depot hängen an der Auszahlungsform **drei** Wirkungen — und nicht vier wie bei der
betrieblichen Altersversorgung, da Beiträge zur Kranken- und Pflegeversicherung entfallen (keine
Versorgungsbezüge):

1. **Ertragsanteil anstelle des halben Unterschiedsbetrags** für die nicht geförderte Schicht, im
   Regelfall 30,7 vom Hundert des Kapitals. Steuerpflichtig sind sodann 17,0 vom Hundert der
   Rente anstelle von 26,2 vom Hundert der Planentnahme (§ 22 Nr. 5 S. 2 Buchst. a EStG). Es
   handelt sich um einen tatsächlichen Vorteil der Verrentung.
2. **Rentenfaktor anstelle der Marktrendite** auf das Restkapital — hierfür besteht ein eigenes
   Eingabefeld `rentfak_av`, da ein Depotvertrag ohne Versicherungsmantel auskommt und mithin
   günstiger sein kann.
3. **Zahlungen nach dem Horizont**, welche der Vergleich nicht mitzählt. Hierfür bestehen eine
   eigene Memo-Zeile in der Diagnose sowie eine fortlaufende Notiz am Schalter; im Regelfall
   145.618 €.

Die geförderte Schicht ist in beiden Formen in vollem Umfang nachgelagert steuerpflichtig (§ 22
Nr. 5 S. 1 EStG); hieran ändert die Auszahlungsform nichts. Der Einmalbetrag wirkt in beiden
Formen und wird als Kapital besteuert, auch wenn der Rest verrentet wird.

Beim Altersvorsorgedepot verursacht der Einmalbetrag aus denselben zwei Gründen Kosten wie bei
der betrieblichen Altersversorgung: volle Progression im Zuflussjahr und sodann lediglich noch
der Satz nach Abgeltungsteuer. Im Regelfall:

| Einmalbetrag | steuerpflichtig Jahr 0 | Grenzbelastung | Monatsleistung |
|---|---|---|---|
| 0 % | 17.292 € | 27,2 % | 850,83 € |
| 15 % | 42.543 € | 29,7 % | 840,09 € |
| 30 % | 67.793 € | 32,3 % | 823,37 € |

Zwei Kontrollen sind hierzu vorgenommen worden: das Restkapital am Horizont beträgt über
sämtliche geprüften Renditen, Horizonte und Einmalbeträge **exakt 0,00 €** — der
Annuitätenfaktor passt mithin zur Rekursion, und es wird nichts stillschweigend einbehalten.
Ferner wird der Überschuss über den Jahreshöchstbetrag („Sleeve") ohne Einmalbetrag verrentet;
hierbei handelt es sich um eine Modellkonvention und nicht um einen Rechtssatz.

**Verbleibende Modelllücke, ausdrücklich:** die betriebliche Altersversorgung kennt weiterhin
lediglich die vollständige oder die unterbliebene Kapitalisierung. Eine Teilkapitalisierung der
Betriebsrente, welche in der Praxis vorkommt, ist nicht abgebildet — abweichend vom Depot, wo
Einmalbetrag und Verrentung seit dieser Fassung kombinierbar sind.

### Der Kapitalverlauf

Eine Größe über die gesamte Zeitachse, nebst Verbrauch und nebst Liquiditätszerlegung.

```
Wiederanlage(0)   = 0
Wiederanlage(t+1) = (Wiederanlage(t) + netto(t))·(1+w) − M      M = V(0)·ANNW
Vermögen(t)       = Produktkonto(t) + Wiederanlage(t)
```

Die äquivalente Monatsleistung wird mithin **tatsächlich verbraucht**. Da `ANNW` der
nachschüssige Annuitätenfaktor ist und der Konsum am Jahresende abgeht, gilt
`Wiederanlage(n) = 0` exakt.

Vier geprüfte Identitäten:

| | |
|---|---|
| `Vermögen(0) = Produktkapital` | 0,00 € — die Wiederanlage beträgt am Rentenbeginn null, die Kurve verläuft **knickfrei** |
| `Vermögen(n) = 0` | 7,4 · 10⁻¹⁰ € — jede Variante ist am Horizont punktgenau aufgebraucht |
| `M = V(0)·ANNW`, `M/12` diskontiert `=` Monatsleistung | 0,00 € — der Verbrauch entspricht genau der vorstehenden Kennzahl |
| Pfade **nicht** proportional | AV/privat wandert von 1,3152 auf 1,2497 |

> **Weshalb dies nicht proportional ist — die naheliegende Variante hingegen schon.**
> Wird *alles* auf den Wiederanlagezins gesetzt und hieraus konsumiert
> (`G(t+1) = G(t)(1+w) − M`), so kürzt sich der Unterschied heraus: `G_x/G_y = M_x/M_y` für alle
> t, geprüft auf 4 · 10⁻¹⁴. Maßgeblich ist mithin, **wo** der Konsum abgeht. Wird er
> ausschließlich der Wiederanlage entnommen und verbleibt das Produktkapital im Produkt, wo es
> mit der Produktrendite **vor** Steuern wächst, so verbleibt genau derjenige Unterschied, um
> welchen es geht.

### Liquidität

Durchgezogen dargestellt ist das Vermögen insgesamt, gestrichelt in derselben Farbe der **frei
verfügbare** Teil. Der Abstand ist gebundenes Kapital.

| | Bindung | im Regelfall bei Rentenbeginn |
|---|---|---|
| bAV | vollständig bis zum Rentenbeginn — § 1b BetrAVG kennt die Unverfallbarkeit, nicht die Verfügbarkeit; danach besteht kein Konto mehr | **0 € von 357.076 € frei** |
| Altersvorsorgedepot | eine Entnahme vor Vollendung des 65. Lebensjahres ist förderschädlich; frei ist ausschließlich der „Sleeve" oberhalb des Jahreshöchstbetrags | 0 € von 240.001 € frei |
| privates ETF-Depot | jederzeit | **182.489 € von 182.489 € frei** |

Es handelt sich um die einzige Achse, auf welcher eine Kapitalauszahlung der betrieblichen
Altersversorgung günstig erscheint: mit 68 springt sie von 0 auf 100 vom Hundert Verfügbarkeit.
Und es ist diejenige Achse, welche in Beratungsgesprächen am häufigsten fehlt.

### Weshalb kein Konsummodell

Naheliegend wäre, die Lebenshaltungskosten als eigene Eingabe zu führen. Dies ist geprüft und
verworfen worden — es trägt **nachweislich keine vergleichende Information**. Da der
Nettoaufwand in sämtlichen drei Varianten identisch ist, unterscheiden sich die Zahlungsströme
ausschließlich in der Auszahlungsphase; ein für alle drei gleicher Konsumstrom `C` stellt mithin
eine gemeinsame additive Verschiebung dar:

| Konsum | AV − privat bei t = 5 | bei t = 15 | bAV − privat bei t = 15 |
|---|---|---|---|
| 0 €/Jahr | 55.049,182535 € | 56.681,527808 € | −62.016,690135 € |
| 12.000 €/Jahr | 55.049,182535 € | 56.681,527808 € | −62.016,690135 € |
| 60.000 €/Jahr | 55.049,182535 € | 56.681,527808 € | −62.016,690135 € |

Auf sechs Nachkommastellen identisch. Hinzu träte: ein sachgerechtes Konsummodell bedürfte in der
Ansparphase auch des Gehalts, da die Kurve andernfalls unverzüglich ins Minus liefe — dies wäre
ein Haushaltsplaner und kein Vergleich der Förderarchitekturen. Ferner würde die Angabe „leer mit
87" als Aussage über die Altersvorsorge insgesamt gelesen, obgleich das Modell ausschließlich
diese eine Entscheidung kennt.

Der Verbrauch der **äquivalenten** Monatsleistung ist demgegenüber etwas anderes: er ist je
Variante verschieden, aus dem Modell abgeleitet und bedarf keiner Fremdannahme. Er ist daher
enthalten.

### Vier verworfene Fassungen

Der Weg dorthin verdient die Notiz, da jede Zwischenstufe an einem anderen Denkfehler scheiterte:

1. **Ausschließlich das Produktkonto.** Die betriebliche Altersversorgung fällt bei Kapitalwahl
   auf null und schweigt über den Rest. Verschweigt mithin, dass die Kennzahl sehr wohl eine
   Wiederanlage unterstellt.
2. **Die prospektive Reserve `V(t)`.** Mathematisch tadellos und exakt diejenige Größe hinter der
   Monatsleistung — nach einer Kapitalauszahlung jedoch **negativ** (−54.555 € ab Alter 68), da
   sodann lediglich noch Lasten ausstehen. Zutreffend, bedeutsam, und als Kurve unlesbar.
3. **Der reine Entsparpfad** `G(t+1) = G(t)(1+w) − M`. Läuft sauber auf null, doch sind die Pfade
   sodann zwangsläufig proportional: wer den Verbrauch fixiert *und* alles zu demselben Zins
   führt, hat das Vermögen determiniert.
4. **Der beitragsfreie Wert** in der Ansparphase, um den Einheitenwechsel am Rentenbeginn zu
   vermeiden. Stetig und sauber, doch verblieb es bei einer Nettogröße, welche für das
   Privatdepot eine Bewegung suggeriert, wo eine solche nicht besteht.

## § 8 Eine Lesefalle in der Sensitivitätskurve

Regler wie *Jahresbrutto* oder *Monatsbeitrag* verändern nicht allein die Förderarchitektur,
sondern auch den **Nettoaufwand** — und mithin denjenigen Betrag, welcher in sämtlichen drei
Varianten angelegt wird. Die drei Kurven sind daher bei jedem einzelnen x sachgerecht
vergleichbar, das Niveau zwischen verschiedenen x hingegen nicht. Die auffälligen Sprünge sind
zutreffend und sitzen an den Beitragsbemessungsgrenzen: oberhalb von 69.750 € erspart die
Entgeltumwandlung keine Beiträge zur Kranken- und Pflegeversicherung mehr, oberhalb von
101.400 € auch keine Beiträge zur Renten- und Arbeitslosenversicherung. Der Nettoaufwand springt
dort um bis zu 15 vom Hundert, die angelegte Summe mit ihm. Die Anwendung blendet einen Hinweis
nebst der tatsächlichen Spanne ein, sobald der Effekt 2 vom Hundert übersteigt.

## § 9 Zwei Befunde, welche bei der Portierung aufgefallen sind

**Die Vorabpauschale stellt im Regelfall einen Vorteil für das Privatdepot dar.** Über 35 Jahre
fallen 121.774 € Vorabpauschale an, wovon jedoch lediglich 11.942 € tatsächlich versteuert werden
— der Rest läuft in den Sparer-Pauschbetrag. Die *vollständige* Summe erhöht demgegenüber die
Kostenbasis und erspart bei der Entnahme rund 22.000 € Abgeltungsteuer. Wird der
Sparer-Pauschbetrag auf null gesetzt, so dreht das Vorzeichen. Der Balken „Wegfall der
Vorabpauschale" im Wasserfall ist daher negativ; es handelt sich nicht um einen Vorzeichenfehler.

**Der Arbeitgeberzuschuss sättigt — und zwar früher als angenommen.** Im spitz berechneten
Zuschussmodus (§ 1a Abs. 1a BetrAVG dem Wortlaut nach) wächst der Zuschuss lediglich bis zur
tatsächlichen Ersparnis des Arbeitgebers an Sozialversicherungsbeiträgen. Bei 75.000 € Gehalt
und 300 €/Monat liegt das Entgelt bereits **oberhalb** der Beitragsbemessungsgrenze der
Krankenversicherung von 69.750 €: der Arbeitgeber erspart dort überhaupt keine Beiträge zur
Kranken- und Pflegeversicherung, sondern lediglich zur Renten- und Arbeitslosenversicherung auf
3.600 €, mithin 381,60 € im Jahr — dies entspricht 10,6 vom Hundert des umgewandelten Betrags.
Der gesetzliche Mindestzuschuss von 15 vom Hundert ist damit bereits der gedeckelte Wert; **jede
Erhöhung des Reglers bleibt wirkungslos.** Die Anwendung weist dies nunmehr unmittelbar am
Regler aus.

Die im übergeordneten README genannte Gewinnschwelle von ~26,7 vom Hundert ist folglich im
spitzen Modus nicht erreichbar, sondern ausschließlich in den Modi „voller Beitrag" bzw.
„sv-freier Anteil". Die Sensitivitätskurve weist die Sättigung als waagerechten Ast aus.

---

## § 10 Das Erscheinungsbild: Windows 3.1 / NT 3.5

Silber `#C0C0C0` auf Petrol `#008080`, Titelleisten in Navy, harte Ein-Pixel-Kanten, alles aus
der 16-Farben-VGA-Palette. **Es besteht ausschließlich ein Farbschema** — `prefers-color-scheme`
ist entfernt worden; eine Dunkelvariante wäre hier nicht zu gestalten.

Drei Kantenformen tragen die gesamte Bedienoberfläche:

| Form | Aufbau | Verwendung |
|---|---|---|
| erhaben (3.1) | `1px solid #000` + `inset 1px 1px 0 #FFF` + `inset -1px -1px 0 #808080` | Schaltflächen |
| erhaben (95) | zusätzlich `border-color:#DFDFDF #000 #000 #DFDFDF` | Fenster, Kacheln |
| versenkt | `border-color:#808080 #FFF #FFF #808080` + `inset 1px 1px 0 #000` | Felder, Zeichenfläche |

Gedrückte Umschalter erhalten ergänzend das Rastermuster der eingerasteten Werkzeugleiste
(`repeating-conic-gradient` mit 2 px Kachel). Das Fokusrechteck ist das originale gepunktete —
zugleich dasjenige, welches Windows je an Barrierefreiheit aufzuweisen hatte.

### Was bewusst aus Windows 95 / NT 4 übernommen worden ist

Windows 3.1 kannte diese Steuerelemente schlicht nicht, und ohne sie wäre die Anwendung
schlechter:

- **Trackbar** — der Schieberegler ist ein Win95-Common-Control. Unter 3.1 wären Zahlen
  einzutippen gewesen; die unmittelbare Rückkopplung wäre mithin entfallen.
- **Registerkarten** — 3.1 löste die Mehrseitigkeit über eigene Dialoge. Vier Diagramme in vier
  Fenstern wären hier eindeutig schlechter.
- **Versenkter Rahmen** (`WS_EX_CLIENTEDGE`) anstelle des einfachen schwarzen Rahmens von 3.1 um
  Eingabefelder — liest sich deutlich besser.

### Was 3.1 besser konnte

Die Segmentschalter sind zu **echten Optionsfeldgruppen** geworden. Dies ist die authentische
Entsprechung für eine Auswahl unter wenigen Alternativen, es ist das semantisch zutreffende
Element, und die Pfeiltastennavigation der Radiogruppe tritt ohne weiteres Zutun hinzu.

### Fenster, welche tatsächlich Fenster sind

Jeder Abschnitt verfügt über eine Titelleiste nebst Systemmenü-Kasten und Minimieren-Schaltfläche.
Die Schaltfläche ist kein Zierrat: sie klappt den Inhalt tatsächlich ein, ein Doppelklick auf die
Titelleiste gleichermaßen, und der Zustand wird vorgehalten. Auf dem Telefon ist dies von Nutzen
— „Ihre Angaben" wird zugeklappt, und das Diagramm steht ganzseitig zur Verfügung.

Grau ist unter Windows die Farbe des *Deaktivierten*. Lesbarer Text verbleibt daher durchgängig
schwarz und wird über Größe und Kursivstellung abgestuft, nicht über Aufhellung. Dies ist
zugleich authentisch und der bessere Kontrast: Schwarz auf `#C0C0C0` ergibt 9,9 : 1.

## § 11 Bewusst nicht eingerichtet

- **Einführungsassistent.** Elf Kernfelder tragen keinen Assistenten; er verstellte lediglich den
  Blick auf die Kopplung der Größen.
- **Animierte Zahlenübergänge.** Sie lenken von genau demjenigen ab, was verglichen werden soll.
- **Aufgeräumte Rechengrößen.** Die 45 gesetzlichen Werte stehen bewusst hinten und bewusst
  vollständig. Wer die Modellannahme mit 70 vom Hundert Vertrauensgrad nicht teilt, soll sie
  ändern können, ohne den Quelltext anfassen zu müssen.

---

*Es wird abschließend darauf hingewiesen, dass weder eine Steuer- noch eine Anlageberatung
erbracht wird. Ein Modell ist kein Vertrag.*
