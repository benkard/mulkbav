# Altersvorsorgerechner

**Vergleichsrechner für drei Gestaltungsvarianten der Altersvorsorge bei gleichem Nettoaufwand.
Rechtsstand 2026.**

Bei dem vorliegenden Bestand handelt es sich um eine Webanwendung. Sie stellt gegenüber, was
aus ein und demselben monatlichen Verzicht auf verfügbares Einkommen wird, je nachdem, ob
dieser Betrag in eine betriebliche Altersversorgung, in ein Altersvorsorgedepot oder in ein
privates ETF-Depot geleitet wird. Ein Server wird nicht betrieben; eine Übermittlung der
eingegebenen Daten findet nicht statt.

---

## § 1 Gegenstand und Zweck

(1) Verglichen werden drei Gestaltungsvarianten, und zwar durchgängig unter Zugrundelegung
**desselben** Wertpapiers:

| | Gestaltungsvariante | Wesentliches Merkmal |
|---|---|---|
| 1. | **Betriebliche Altersversorgung** durch Entgeltumwandlung (§ 1a BetrAVG) | Beitrag aus dem Bruttoentgelt; Arbeitgeberzuschuss; im Ruhestand Beiträge zur Kranken- und Pflegeversicherung auf den Versorgungsbezug (§§ 229, 250 SGB V) |
| 2. | **Altersvorsorgedepot** (Reform der geförderten privaten Altersvorsorge 2026) | Beitrag aus dem versteuerten Entgelt; Zulagen und Sonderausgabenabzug; keine Vorabpauschale; Verfügung vor Vollendung des 65. Lebensjahres förderschädlich |
| 3. | **Privates ETF-Depot** | Beitrag aus dem versteuerten Entgelt; keinerlei Förderung; jederzeitige Verfügbarkeit; Abgeltungsteuer nebst Vorabpauschale |

(2) Die Auskunft richtet sich an Personen, welchen ein Angebot zur Entgeltumwandlung
unterbreitet worden ist und welche die Vorteilhaftigkeit desselben zu beurteilen beabsichtigen.
Vorkenntnisse werden nicht vorausgesetzt; sämtliche Eingabefelder sind mit sachgerechten
Voreinstellungen versehen, und zu jedem Feld wird über die Schaltfläche `?` eine Erläuterung
nebst Rechtsgrundlage bereitgehalten.

(3) Es wird ausdrücklich darauf hingewiesen, dass es sich **nicht** um einen Produktvergleich,
**nicht** um eine Anlageempfehlung und **nicht** um einen Haushaltsplaner handelt. Verglichen
werden ausschließlich die Förderarchitekturen; die Anlageentscheidung ist in allen drei
Varianten dieselbe und wird daher nicht mitverglichen (vgl. § 4).

---

## § 2 Inbetriebnahme

(1) **Einfachster Weg.** Die Datei `app/index.html` ist mittels Doppelklicks zu öffnen. Ein
Aufbau, eine Installation oder eine Verbindung zum Internet sind hierfür nicht erforderlich;
sämtliche Berechnungen werden im Browser durchgeführt.

(2) **Mit Installierbarkeit und Offline-Betrieb.** Sofern zusätzlich das Symbol auf dem
Startbildschirm sowie die Zwischenspeicherung durch den Dienstarbeiter (*service worker*)
gewünscht wird, ist der Ordner `app/` über einen Webserver auszuliefern:

```bash
cd app && python3 -m http.server 8000    # sodann: http://localhost:8000
```

Ein Betrieb über `http://localhost` ist zulässig; die Adresse gilt als sicherer Kontext im
Sinne der einschlägigen Spezifikation und ist von dem Erfordernis einer
Transportverschlüsselung ausdrücklich ausgenommen.

(3) **Weitergabe an Dritte.** Hinsichtlich der drei hierfür vorgesehenen Wege — Versendung der
Dateien, Bereitstellung auf einem Webspeicherplatz, Übermittlung eines Verweises einschließlich
sämtlicher eingegebener Werte — wird auf [`app/README.md` § 1](app/README.md) verwiesen.

(4) **Verbleib der Daten.** Die eingegebenen Werte werden ausschließlich im Browser der
nutzenden Person vorgehalten (`localStorage`, Schlüssel `altersvorsorge.v1`). Eine Übermittlung
an einen Server, eine Erhebung von Nutzungsdaten zu Auswertungszwecken sowie ein Nachladen von
Schriftarten oder Skripten von fremden Domänen finden nicht statt und sind auch nicht
vorgesehen.

---

## § 3 Verzeichnis der Bestandteile

| Datei bzw. Ordner | Zweckbestimmung |
|---|---|
| `app/index.html` | **Die vollständige Anwendung.** Rechenkern, Bedienoberfläche und Diagramme in einer einzigen Datei, gegliedert in nummerierte Teile 0 bis 14 |
| `app/i18n.*.js` | Wörterbücher, je Sprachfassung eines. Deutsch ist Hauptsprache und Rückfallebene |
| `app/manifest.json` | Angaben zur Installierbarkeit (Bezeichnung, Farben, Symbole) |
| `app/service-worker.js` | Zwischenspeicherung für den Offline-Betrieb |
| `app/pruefe.js` | Entwicklungswerkzeug zur Sprachprüfung; wird nicht ausgeliefert |
| `app/akk-keilschrift*.js` | Erzeugung der Keilschriftfassung aus der Umschrift |
| [`app/README.md`](app/README.md) | **Technische Dokumentation.** Aufbau, Modellmechanik im Einzelnen, Prüfung, Gestaltungsentscheidungen |

---

## § 4 Das Vergleichsprinzip

(1) Ein Vergleich anhand der Bruttobeiträge wäre unsachgemäß: die Entgeltumwandlung wird aus
dem Bruttoentgelt geleistet, das private Sparen hingegen aus dem versteuerten Entgelt.
Gleichgesetzt wird daher der **Nettoaufwand**, mithin der Betrag, um welchen sich das
verfügbare Einkommen tatsächlich mindert:

```
Nettoaufwand = Bruttobeitrag − Lohnsteuerersparnis − ersparter Arbeitnehmeranteil zur Sozialversicherung
```

(2) Ebendieser Betrag wird in sämtlichen drei Gestaltungsvarianten angelegt. Was verbleibt, ist
mithin ein Vergleich der Förderarchitekturen und nicht ein Vergleich der Einzahlungshöhen.

(3) Brutto- und Nettobetrag sind in der Anwendung wechselseitig gekoppelt; eine Vorgabe ist in
beiden Richtungen zulässig. Da die Funktion N(B) wegen der Knickstellen bei 4 bzw. 8 vom
Hundert der Beitragsbemessungsgrenze der Rentenversicherung, an den Beitragsbemessungsgrenzen
sowie an den Tarifeckwerten nicht geschlossen umkehrbar, jedoch stetig und streng monoton
wachsend ist, wird die Umkehrung durch ein Verfahren mit 34 Intervallhalbierungen bewirkt.

### Die vier Werttreiber

Der Steueraufschub ist für sich genommen ohne Wert, da (1−t)·(1+r)ⁿ = (1+r)ⁿ·(1−t) gilt; die
Multiplikation ist kommutativ. Es verbleiben mithin ausschließlich:

1. **Tarifarbitrage** t₀ − t₁ — Grenzsteuersatz im Zeitpunkt der Einzahlung abzüglich desjenigen
   im Zeitpunkt der Auszahlung;
2. **Fremdmittel** — Zuschuss des Arbeitgebers bzw. Zulagen;
3. **Steuerfreie Thesaurierung** — betriebliche Altersversorgung und Altersvorsorgedepot kennen
   die Vorabpauschale nicht;
4. **Neu hinzutretende Abgaben, welche lediglich eine Variante betreffen** — Beiträge zur
   Kranken- und Pflegeversicherung auf Versorgungsbezüge (§ 229 SGB V).

Nummer 4 stellt den beherrschenden Nachteil der betrieblichen Altersversorgung dar; Nummer 2
ist deren einziger struktureller Vorteil.

---

## § 5 Leistungsumfang

- **Sensitivitätskurve** über denjenigen Regler, welcher zuletzt betätigt worden ist: 41
  vollständige Modellläufe nebst Kennzeichnung der Schnittpunkte gegenüber dem privaten Depot.
  Gewinnschwellen sind hierdurch ablesbar und müssen nicht errechnet werden.
- **Wasserfalldarstellung der Werttreiber**, teleskopierend zerlegt und mithin exakt aufgehend.
  Auf die Reihenfolgeabhängigkeit wird in der Anwendung ausdrücklich hingewiesen.
- **Kapital- und Liquiditätsverlauf** über die gesamte Zeitachse, einschließlich der
  Kennzeichnung des gebundenen gegenüber dem frei verfügbaren Kapital.
- **Warnhinweis bei uneinheitlicher Rangfolge.** Barwert und äquivalente Monatsleistung ranken
  unterschiedlich, sobald der Wiederanlagezins nach Steuern die Inflationsrate deutlich
  übersteigt; hierauf wird hingewiesen.
- **Sämtliche 45 Rechengrößen sind änderbar**, jeweils unter Angabe der Fundstelle. Wer eine
  Modellannahme nicht teilt, hat sie zu ändern; ein Eingriff in den Quelltext ist hierfür nicht
  erforderlich.
- **Klartextfazit** in einem Satz nebst Belastbarkeitstest über ±1 Prozentpunkt Bruttorendite.
  Die Formulierung ist beschreibend und nicht empfehlend gehalten.
- **Weitergabe des Berechnungsstandes** als Verweis; die Werte werden im Fragmentbezeichner
  geführt und mithin nicht an einen Server übermittelt (RFC 3986 § 3.5).
- **23 Sprachfassungen**, darunter zwei Registervarianten des Deutschen (`de-x-amt` und
  `de-x-sales`), welche denselben § 1a BetrAVG einmal als Verwaltungsschreiben und einmal als
  Werbetext wiedergeben. Die Normzitate verbleiben in sämtlichen Sprachfassungen in deutscher
  Sprache. Einzelheiten: [`app/README.md` § 3b](app/README.md).

Hinsichtlich der Modellmechanik im Einzelnen — Schichtenmodell, Architektur des
Arbeitgeberzuschusses, Auszahlungsphase, die beiden Zinssätze — wird auf
[`app/README.md`](app/README.md) verwiesen; eine Wiedergabe an dieser Stelle unterbliebe nicht
ohne die Gefahr des Auseinanderlaufens beider Darstellungen.

---

## § 6 Belastbarkeit der Rechtsannahmen

Sämtliche nachstehend aufgeführten Annahmen sind in der Anwendung unter „Rechenweg →
Belastbarkeit der Annahmen" einsehbar und änderbar.

| Annahme | Vertrauensgrad | Anmerkung |
|---|---|---|
| Rechengrößen der Sozialversicherung 2026, Tarif gemäß § 32a EStG 2026 | ~97 % | SVBezGrV 2026, Steuerfortentwicklungsgesetz |
| Beitragspflicht in der Kranken- und Pflegeversicherung auf Versorgungsbezüge | ~95 % | §§ 229, 250 SGB V |
| Freibetrag gemäß § 226 Abs. 2 S. 2 SGB V (KV), Freigrenze in der PV | ~95 % / ~85 % | Der die Pflegeversicherung betreffende Punkt stellt die häufigste Fehlerquelle in Ratgebertexten dar |
| Beitragsfreiheit der Auszahlung aus dem Altersvorsorgedepot | ~85 % | Es handelt sich nicht um Versorgungsbezüge |
| Halber Unterschiedsbetrag für nicht geförderte Schichten | ~80 % | § 22 Nr. 5 S. 2 Buchst. b i. V. m. § 20 Abs. 1 Nr. 6 S. 2 EStG |
| Zuschuss lediglich bis zur Höhe der tatsächlichen Ersparnis des Arbeitgebers | ~75 % | Nach der Gegenauffassung sind die 15 vom Hundert als reine Pauschale zu verstehen |
| Fester Arbeitgeberzuschuss belegt den 4-%- und den 8-%-Höchstbetrag vorrangig | ~80 % | Arbeitgeberfinanzierte Zuwendung im Sinne des § 3 Nr. 63 EStG; die eigene Entgeltumwandlung wird insoweit verdrängt |
| **Sonderausgaben-Höchstbetrag 2.340 €** | **~70 %** | **Modellannahme.** Hiervon hängt ab, ob ein Kind den Wert des Altersvorsorgedepots hebt oder senkt |
| Günstigerprüfung als Höchstwert, nicht als Summe | ~90 % | § 10a Abs. 2 EStG |
| Unterstellt wird eine Pflichtversicherung in der KVdR im Ruhestand | ~70 % | Freiwillig Versicherte sind nicht geprüft worden |

**Nicht abgebildet:** Abschläge bei vorzeitigem Rentenbezug; Auswirkungen der Entgeltumwandlung
auf Kranken-, Arbeitslosen- und Elterngeld; Hinterbliebenenversorgung; Insolvenzsicherung
(PSVaG); Portabilität bei einem Wechsel des Arbeitgebers; Kinderabschläge in der
Pflegeversicherung; Günstigerprüfung gemäß § 32d Abs. 6 EStG; Pfändungs- und
Grundsicherungsschutz. Ferner wird die Teilkapitalisierung der betrieblichen Altersversorgung
nicht abgebildet; insoweit kennt das Modell ausschließlich die vollständige oder die
unterbliebene Kapitalisierung.

---

## § 7 Ergebnisse des Regelfalls

Zugrunde gelegt werden 40 Jahre Ansparphase, 75.000 € Jahresbruttoentgelt, 300 € Monatsbeitrag,
gesetzliche Krankenversicherung, spitz berechneter Zuschuss von 15 vom Hundert sowie eine
Bruttorendite von 7 vom Hundert:

| in heutiger Kaufkraft | bAV | AV-Depot | privat |
|---|---|---|---|
| Barwert des Nettoertrags | 27.737 € | 88.414 € | 73.740 € |
| Äquivalente Monatsleistung | 587,67 € | 768,45 € | 689,48 € |
| Interner Zinsfuß | 5,37 % | 6,61 % | 6,14 % |

Die betriebliche Altersversorgung obsiegt ausschließlich über zwei Hebel, welche beide
außerhalb der Steuerarchitektur liegen:

- **Private Krankenversicherung im Ruhestand** — bereits diese Einstellung allein bewirkt eine
  Umkehr des Ergebnisses;
- **Zuschuss ab etwa 30 vom Hundert** — die Gewinnschwelle folgt näherungsweise aus
  (1+z)·(1−0,211) ≈ 1, mithin z ≈ 26,7 vom Hundert.

> **Klarstellung.** Die vorstehenden Aussagen gelten für die *äquivalente Monatsleistung*, nicht
> hingegen für den *Barwert des Nettoertrags*. Bei privater Krankenversicherung steigt die
> betriebliche Altersversorgung auf 725,49 €/Monat gegenüber 689,48 € beim privaten Depot und
> obsiegt mithin; im Barwert verbleibt sie mit 49.653 € gegenüber 73.740 € deutlich zurück. Die
> Kennzahlen ranken deshalb unterschiedlich, weil der Barwert mit der Inflationsrate
> (2,00 vom Hundert) abgezinst, die Monatsleistung hingegen mit dem Wiederanlagezins nach
> Steuern (5,54 vom Hundert) verrentet wird; eine frühe Kapitalauszahlung wird hierdurch
> systematisch günstiger bewertet. Welche Kennzahl maßgeblich ist, hängt davon ab, ob das
> Kapital angelegt oder verbraucht wird.
>
> Die Gewinnschwelle von 26,7 vom Hundert ist überdies im spitz berechneten Zuschussmodus
> **nicht erreichbar**: dort begrenzt § 1a Abs. 1a BetrAVG den Zuschuss auf die tatsächliche
> Ersparnis des Arbeitgebers an Sozialversicherungsbeiträgen, im Regelfall rund 21 vom Hundert
> des umgewandelten Betrags. Eine weitere Erhöhung des Reglers bleibt sodann wirkungslos.

Die Rendite der betrieblichen Altersversorgung **fällt streng monoton** mit der Beitragshöhe,
da der Freibetrag ein absoluter ist und seine Schutzwirkung mit 1/K abnimmt. Ein inneres Optimum
besteht mithin nicht. Der einzige beitragsfreie Bereich (Kapital ≤ 120 × Freibetrag ≈ 46.000 €,
entsprechend rund 42 €/Monat) ist zu gering bemessen, um als Vorsorgestrategie in Betracht zu
kommen; er hängt überdies vollständig an einer politisch gesetzten Zahl.

---

## § 8 Prüfung

(1) Der Rechenkern ist gegen ein unabhängig geführtes Zweitmodell auf Maschinengenauigkeit
abgeglichen worden: sechs unabhängige Testfälle zu je rund 20 Aggregaten, größte festgestellte
relative Abweichung 1,3·10⁻¹⁴, nebst vier weiteren Fällen zum festen Arbeitgeberzuschuss, welche
exakt übereinstimmen. Es handelt sich hierbei um wenige Dutzend Einheiten der letzten Stelle,
mithin um akkumulierten Gleitkommafehler und nicht um eine systematische Abweichung.

(2) Ferner bestehen ein Stilblatt-Test, ein Test der Bedienoberfläche mit 57 Zusicherungen sowie
ein zweistufiger Test der Diagramme mit insgesamt 520 Kombinationen. Die Sprachprüfung
`app/pruefe.js` schaltet sämtliche 23 Sprachfassungen durch und weist unter anderem nach, dass
die Rechenergebnisse in allen Sprachfassungen identisch sind; sie umfasst 154 Prüfungen und
setzt `jsdom` voraus.

(3) Einzelheiten nebst der Fehlerklassen, welche die vorgenannten Prüfungen nachweislich
*nicht* auffinden, sind [`app/README.md` § 4](app/README.md) zu entnehmen.

---

## § 9 Herkunft

Die vorliegende Anwendung ist aus einer vollständig formelbasierten Excel-Arbeitsmappe (6.359
Formeln) hervorgegangen, welche ihrerseits durch ein Python-Skript erzeugt worden ist. Beide
Bestandteile sind zwischenzeitlich entfallen, da die Webanwendung an ihre Stelle getreten ist;
sie sind ausschließlich über die Versionsgeschichte zugänglich. Der Rechenkern in Teil 1 von
`app/index.html` ist zeichengenau aus dem ursprünglichen Formelgenerator übertragen worden und
stellt nunmehr **die einzige Stelle dar, an der gerechnet wird.**

---

## § 10 Offene Punkte

- [ ] Das Anwendungsschreiben zur Reform der geförderten privaten Altersvorsorge ist abzuwarten;
      sodann sind der Sonderausgaben-Höchstbetrag sowie die Besteuerung der nicht geförderten
      Schicht zu bestätigen.
- [ ] Es ist zu klären, ob der Zuschuss auch oberhalb der Beitragsbemessungsgrenzen geleistet
      wird; hiervon hängen 116 Basispunkte ab.
- [ ] Es ist zu prüfen, ob bereits weitere Versorgungsbezüge bestehen; der Freibetrag gilt je
      Person und nicht je Vertrag.
- [ ] Die Teilkapitalisierung der **betrieblichen Altersversorgung** (0 bis 30 vom Hundert
      einmalig, im Übrigen verrentet) ist noch abzubilden. Beim Altersvorsorgedepot ist dies
      bereits möglich; es handelt sich um die einzig verbliebene Asymmetrie zwischen den beiden
      geförderten Produkten.
- [ ] Fakultativ: jahresweise Umkehrung des Nettoaufwands anstelle der Umkehrung allein im
      ersten Jahr.
- [x] ~~Verrentung des Altersvorsorgedepots~~ — eingerichtet: eigene Eingabe `av_auszform`,
      unabhängig von der Auszahlungsform der betrieblichen Altersversorgung, mit eigenem
      Rentenfaktor und eigener Dynamik.

---

## § 11 Quellen

- [SVBezGrV 2026](https://www.gesetze-im-internet.de/svbezgrv_2026/BJNR1160A0025.html)
- [§ 32a EStG](https://www.gesetze-im-internet.de/estg/__32a.html)
- [BMF, FAQ zur Reform der geförderten privaten Altersvorsorge (05.05.2026)](https://www.bundesfinanzministerium.de/Content/DE/FAQ/reform-der-privaten-altersvorsorge.html)
- [Bundesregierung, Private Altersvorsorge wird attraktiver (01.06.2026)](https://www.bundesregierung.de/breg-de/aktuelles/reform-private-altersvorsorge-2400072)
- [BMF-Schreiben vom 13.01.2026, Basiszins zur Vorabpauschale gemäß § 18 Abs. 4 InvStG](https://www.bundesfinanzministerium.de/Content/DE/Downloads/BMF_Schreiben/Steuerarten/Investmentsteuer/2026-01-13-basiszins-berechnung-vorabpauschale.html)
- [GKV-Spitzenverband, Rechengrößen 2026](https://www.gkv-spitzenverband.de/media/dokumente/presse/zahlen_und_grafiken/20260101_Faktenblatt_Rechengroessen_Beitragsrecht.pdf)

---

*Es wird abschließend darauf hingewiesen, dass mit der vorliegenden Anwendung weder eine
Steuer- noch eine Anlageberatung erbracht wird. Ein Modell ist kein Vertrag; die Prüfung des
jeweils konkreten Vertragswerks wird hierdurch nicht ersetzt.*
