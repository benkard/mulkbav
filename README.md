# bAV (DYNO) vs. Altersvorsorgedepot vs. privates ETF-Depot

Vergleichsmodell für drei Wege der Altersvorsorge mit **demselben ETF**, Rechtsstand 2026.
Vollständig formelbasierte Excel-Arbeitsmappe (6.359 Formeln), erzeugt aus einem Python-Skript.

| Datei | Rolle |
|---|---|
| `bAV-DYNO_vs_Altersvorsorgedepot_vs_ETF.xlsx` | Das Modell. Nur die gelben Zellen im Blatt `Eingaben` ändern. |
| `build_bav.py` | Generator. Erzeugt die Mappe vollständig neu. **Einzige Quelle der Wahrheit** — Änderungen gehören hierhin, nicht in die xlsx. |
| `app/` | **Web-App zum Weitergeben.** Derselbe Rechenkern in JavaScript, mobilfreundlich, offlinefähig, mit Sensitivitätskurven. Siehe `app/README.md`. |
| `tests/` (in den Sitzungsausgaben) | Regressionslauf gegen einen frischen LibreOffice-Recalc dieser Mappe. |
| `README.md` | Diese Datei. |

> **Zwei Quellen der Wahrheit.** Der Rechenkern liegt zweimal vor: als Formelgenerator in
> `build_bav.py` und als JavaScript in Teil 1 von `app/index.html`. Sie stimmen auf 1,3·10⁻¹⁴
> relativ überein — **sechs** Testfälle, jeweils rund 20 Aggregate, gegen einen frischen
> LibreOffice-Recalc dieser Mappe. Bei jeder Rechtsänderung **beide** anfassen und danach den
> Abgleich wiederholen; er ist der einzige Schutz davor, dass sie auseinanderlaufen.

---

## 1. Das Vergleichsprinzip

Ein Vergleich von Bruttobeiträgen wäre unfair: Entgeltumwandlung kommt aus dem Brutto,
privates Sparen aus dem Netto. Deshalb wird der **Nettoaufwand** gleichgesetzt:

```
Nettoaufwand = Bruttobeitrag − Lohnsteuerersparnis − ersparter AN-Anteil zur Sozialversicherung
```

Genau dieser Betrag wird in allen drei Optionen investiert. Was übrig bleibt, ist ein
Vergleich der Förderarchitekturen, nicht der Einzahlungshöhen.

Über Zelle `C22` lässt sich die Richtung umkehren: Vorgabe des Nettoaufwands, Rückrechnung
des Bruttobeitrags. Da N(B) wegen der Knicke bei 4 % und 8 % der BBG-RV, an den
Beitragsbemessungsgrenzen und an den Tarifeckwerten nicht geschlossen invertierbar,
aber stetig und streng monoton wachsend ist, geschieht das per Bisektion (34 Schritte,
Blatt `Umrechnung`).

### Die vier Werttreiber

Steueraufschub ist für sich genommen wertlos: (1−t)·(1+r)ⁿ = (1+r)ⁿ·(1−t). Multiplikation
kommutiert. Es bleiben nur:

1. **Tarifarbitrage** t₀ − t₁ (Grenzsteuersatz beim Einzahlen minus beim Auszahlen)
2. **Fremdgeld** — AG-Zuschuss bzw. Zulagen
3. **Steuerfreie Thesaurierung** — bAV und Altersvorsorgedepot kennen keine Vorabpauschale
4. **Neue Abgaben, die nur eine Option treffen** — KV/PV auf Versorgungsbezüge (§ 229 SGB V)

Punkt 4 ist der dominante Nachteil der bAV; Punkt 2 ihr einziger struktureller Vorteil.

---

## 2. Blattstruktur

| Blatt | Inhalt |
|---|---|
| `Anleitung` | Aufbau, Modellannahmen, Quellen |
| `Begriffe` | 43 Fachbegriffe mit Fundstelle bzw. Kennzeichnung als Modellkonvention |
| `Eingaben` | **Die einzigen Zellen, die man ändert.** Ergebnisblock am Fuß |
| `Parameter` | Rechengrößen 2026 mit Fundstelle, abgeleitete Größen |
| `Umrechnung` | Bisektion Nettoaufwand → Bruttobeitrag |
| `Ansparphase` | 62 Spalten × 50 Jahre (Zeilen 8–57) |
| `Auszahlung` | 58 Spalten × 34 Jahre (Zeilen 8–41) |
| `Cashflow` | Zahlungsströme für IRR und Barwerte (Zeilen 5–69) |
| `Vergleich` | Ergebnis, Diagnose, monatliche Leistung, Diagramm |

### Feste Adressen im Blatt `Vergleich`

Diese werden von anderen Blättern referenziert — beim Einfügen von Zeilen **mitziehen**:

| Zeile | Inhalt |
|---|---|
| 5–19 | Haupttabelle (13 = Barwert Netto-Auszahlungen, 15 = Barwert Netto-Ertrag, 17 = IRR) |
| 22–37 | Diagnose (31–35 = Freibetragsanalyse, 36/37 = Memo-Zeilen für Rentenzahlungen nach dem Horizont) |
| 40–48 | Monatliche Leistung (47 = äquivalente Monatsleistung real) |
| 50–52 | Diagrammdaten |
| 55 | Diagramm |

`Eingaben` verweist auf `Vergleich` **13, 15, 47**.

---

## 3. Modellmechanik

### Ansparphase (jahresweise)

- Gehalt, BBG, Bezugsgröße, Durchschnittsentgelt und Rentenwert wachsen mit `C13`
- Steuertarif: `ESt = s · λ · T(zvE / s / λ)` mit s = Splittingfaktor, λ = Tarifindex.
  Das ist exakt äquivalent zu einer proportionalen Verschiebung aller Eckwerte;
  λ = 1 zeigt volle kalte Progression
- zvE-Näherung: Brutto − AN-Pauschbetrag − SA-Pauschbetrag − abziehbare Vorsorgeaufwendungen
  (RV voll, KV zu 96 %, PV voll). Genauigkeit ca. 1 %
- Beiträge unterjährig: Verzinsung mit (1+r)^0,5 im Einzahlungsjahr

### Schichtenmodell

Beide geförderten Produkte werden in **zwei Schichten** geführt, weil sonst derselbe Euro
zweimal besteuert würde:

| | gefördert | nicht gefördert |
|---|---|---|
| **bAV** | bis 8 % BBG-RV (§ 3 Nr. 63 EStG) → 100 % nachgelagert steuerpflichtig | Rest, aus versteuertem Entgelt → halber Unterschiedsbetrag (Kapital) bzw. Ertragsanteil (Rente) |
| **AV-Depot** | Eigenbeitrag bis 1.800 € + Zulagen → 100 % nachgelagert | Beiträge darüber + reinvestierte Erstattung → halber Unterschiedsbetrag (Plan bzw. Einmalbetrag) oder Ertragsanteil (Rente) |

Der Überschuss über den Jahreshöchstbetrag von 6.840 € läuft in eine eigene Schiene
(„Sleeve"), die wie das Privatdepot besteuert wird — so bleibt der Nettoaufwand identisch.

### Auszahlungsphase

- **Auszahlungsform je Produkt getrennt**: `auszform` für die bAV (Kapital oder Rente),
  `av_auszform` für das Depot (Auszahlungsplan oder Rente), dazu `teilkap` für den Einmalbetrag
  von bis zu 30 % beim Depot, der in beiden Formen wirkt. Bei Verrentung geht das Restkapital an
  den Anbieter, ein Depotkonto gibt es danach nicht mehr
- **KV/PV nur bei der bAV**: voller Satz allein vom Rentner (§ 250 SGB V), Freibetrag
  1/20 Bezugsgröße für KV, Freigrenze für PV, Kapitalleistung auf 120 Monate verteilt,
  gemeinsame BBG mit der gesetzlichen Rente (§ 223 Abs. 3 SGB V)
- **Verlust an Entgeltpunkten** wird der bAV netto gegengerechnet
- Alle Kennzahlen auf **Äquivalenzbasis**: jeder Zahlungsstrom wird mit dem
  Wiederanlagezins nach Steuern auf den Rentenbeginn bezogen und dann als konstante
  Monatszahlung über denselben Zeitraum ausgedrückt. Weil Annuitisierung linear ist,
  addieren sich die Komponenten exakt (geprüft auf 10⁻¹²)

---

## 4. Neu bauen

```bash
python3 build_bav.py
python3 <skills>/xlsx/scripts/recalc.py bAV-DYNO_vs_Altersvorsorgedepot_vs_ETF.xlsx 32
```

`recalc.py` schreibt die von openpyxl erzeugten Formeln mit LibreOffice durch und legt die
Werte im Cache ab — vorher liest jedes Werkzeug `None`.

### Vier Fallstricke, die Zeit gekostet haben

1. **`IRR()` ohne Startwert lässt LibreOffice hängen.** Immer `IRR(bereich; 0,05)` schreiben.
2. **Recalc auf dem gemounteten Ordner hängt.** Nach `/tmp` kopieren, dort rechnen,
   zurückkopieren.
3. **Notiztexte dürfen nicht mit `=` beginnen** — openpyxl schreibt sie sonst als Formel.
4. **Hilfszellen kollidieren mit Datenspalten.** Die Auszahlung reicht inzwischen bis Spalte
   **BF** (58 Spalten), die Hilfszellen liegen bei CE/CG **unterhalb** von Zeile 8. Das
   funktioniert, ist aber fragil: beim Hinzufügen von Spalten jedes Mal nachrechnen. Die
   Erweiterung um die Depotverrentung hat drei Spalten gekostet.

---

## 5. Verifikation

Vier Ebenen, alle bestanden:

1. **Recalc**: 0 Formelfehler
2. **Strukturaudit**: alle blattinternen Hartbezüge gegen Ziel-Labels geprüft, keine toten
   Eingaben, alle Aggregatbereiche auf der korrekten Spannweite
3. **Unabhängige Zweitimplementierung in Python**, aus der Spezifikation geschrieben, nicht
   aus den Excel-Formeln abgeleitet — 14 Aggregate, Abweichung **0,000000 %**
4. **Zweiter Testfall**, der die im Basisfall unberührten Zweige aktiviert (Splitting,
   Kirchensteuer, Soli mit Milderungszone, Gehalt über BBG-RV, nicht geförderte Schicht,
   Sleeve) — Abweichung **0,00000000 %**

### Fehlerklassen, die der Recalc *nicht* findet

Beide in diesem Projekt tatsächlich aufgetreten:

- **Falsche Zeilenkonstanten** in handgeschriebenen Bezügen (`B26/B27` statt `B31/B32`).
  Fiel nur auf, weil die Größenordnung nicht stimmte — die Zahlenwerte lagen zufällig 1 %
  auseinander.
- **Spaltenkollision**: eine neue Datenspalte landete auf einer Hilfszelle; deren Text
  wurde von SUMPRODUCT als 0 gewertet, wodurch ausgerechnet das erste Auszahlungsjahr
  entfiel. Fiel nur am Vorzeichen auf.

**Konsequenz für Weiterarbeit:** Nach jeder Änderung nicht nur den Recalc laufen lassen,
sondern eine Größenordnung prüfen. Die Zweitimplementierung aus Abschnitt 5.3 ist das
schärfste Werkzeug dafür.

---

## 6. Rechtliche Annahmen und ihre Belastbarkeit

Alle im Blatt `Parameter` änderbar.

| Annahme | Vertrauen | Anmerkung |
|---|---|---|
| Rechengrößen SV 2026, § 32a-Tarif 2026 | ~97 % | SVBezGrV 2026, Steuerfortentwicklungsgesetz |
| KV/PV-Pflicht auf Versorgungsbezüge | ~95 % | §§ 229, 250 SGB V |
| Freibetrag § 226 Abs. 2 S. 2 SGB V (KV), Freigrenze in der PV | ~95 % / ~85 % | Der PV-Punkt ist die häufigste Fehlerquelle in Ratgebertexten |
| Beitragsfreiheit der Altersvorsorgedepot-Auszahlung | ~85 % | Keine Versorgungsbezüge |
| Halber Unterschiedsbetrag für nicht geförderte Schichten | ~80 % | § 22 Nr. 5 S. 2 Buchst. b i.V.m. § 20 Abs. 1 Nr. 6 S. 2 EStG |
| Zuschuss nur bis zur tatsächlichen AG-Ersparnis (Modus 2) | ~75 % | Gegenauffassung liest 15 % als reine Pauschale = Modus 1 |
| **Sonderausgaben-Höchstbetrag 2.340 €** | **~70 %** | **Modellannahme.** Bestimmt, ob ein Kind den Wert des AV-Depots hebt oder senkt |
| Günstigerprüfung als Maximum, nicht Summe | ~90 % | § 10a Abs. 2 EStG |
| Modell unterstellt KVdR-Pflichtversicherung im Ruhestand | ~70 % | Freiwillig Versicherte nicht geprüft |

**Nicht modelliert:** Abschläge bei vorzeitigem Rentenbezug, Wirkung der Entgeltumwandlung
auf Kranken-, Arbeitslosen- und Elterngeld, Hinterbliebenenversorgung, Insolvenzsicherung
(PSVaG), Portabilität bei Arbeitgeberwechsel, Kinderabschläge in der PV, Günstigerprüfung
nach § 32d Abs. 6 EStG, Pfändungs- und Grundsicherungsschutz.

---

## 7. Wichtigste Befunde des Basisfalls

40 Jahre, 75.000 € Brutto, 300 €/Monat, GKV, Zuschuss 15 % spitz, 7 % Bruttorendite:

| in heutiger Kaufkraft | bAV | AV-Depot | privat |
|---|---|---|---|
| Barwert Netto-Ertrag | 27.737 € | 88.414 € | 73.740 € |
| Äquivalente Monatsleistung | 587,67 € | 768,45 € | 689,48 € |
| Interner Zinsfuß | 5,37 % | 6,61 % | 6,14 % |

Die bAV gewinnt nur über zwei Hebel, beide außerhalb der Steuerarchitektur:

- **PKV im Ruhestand** (`C39` = 2) — allein das dreht das Ergebnis
- **Zuschuss ≳ 30 %** — Break-even folgt näherungsweise aus (1+z)·(1−0,211) ≈ 1 ⟹ z ≈ 26,7 %

> **Präzisierung, beim Portieren aufgefallen.** Beide Aussagen gelten für die *äquivalente
> Monatsleistung*, nicht für den *Barwert des Netto-Ertrags*. Mit PKV steigt die bAV auf
> 725,49 €/Monat gegen 689,48 € beim Privatdepot — gewinnt also. Im Barwert bleibt sie mit
> 49.653 € gegen 73.740 € klar hinten. Die Kennzahlen ranken unterschiedlich, weil der Barwert
> mit der Inflation (2,00 %) abzinst, die Monatsleistung aber mit dem Wiederanlagezins nach
> Steuern (5,54 %) verrentet: eine frühe Kapitalauszahlung wird dadurch systematisch besser
> bewertet. Welche Zahl gilt, hängt daran, ob das Kapital angelegt oder verkonsumiert wird.
>
> Der Break-even von 26,7 % ist außerdem **im Zuschussmodus 2 („spitz“) unerreichbar**: dort
> deckelt § 1a Abs. 1a BetrAVG den Zuschuss auf die tatsächliche SV-Ersparnis des Arbeitgebers,
> im Basisfall rund 21 % des umgewandelten Betrags. Ab da ändert der Zuschussregler nichts mehr.
> In Modus 0 liegt der Break-even (Monatsleistung) bei knapp über 30 %.

Die Rendite der bAV **fällt streng monoton** in der Beitragshöhe, weil der Freibetrag
absolut ist und seine Schutzwirkung wie 1/K abnimmt. Es gibt kein inneres Optimum.
Der einzige beitragsfreie Bereich (Kapital ≤ 120 × Freibetrag ≈ 46.000 €, entspricht
~42 €/Monat) ist zu klein, um als Vorsorgestrategie zu taugen — und hängt vollständig
an einer politisch gesetzten Zahl.

---

## 8. Offene Punkte

- [ ] Anwendungsschreiben zur pAV-Reform abwarten → Sonderausgaben-Höchstbetrag und
      Besteuerung der nicht geförderten Schicht bestätigen
- [ ] Tatsächliche DYNO-Vertragsdaten einsetzen: Durchführungsweg, Effektivkosten aus dem
      Produktinformationsblatt, zugesagter Zuschuss laut Versorgungsordnung
- [ ] Klären, ob der Zuschuss auch oberhalb der Beitragsbemessungsgrenzen gezahlt wird
      (entscheidet 116 Basispunkte)
- [ ] Prüfen, ob bereits andere Versorgungsbezüge bestehen — der Freibetrag gilt pro
      Person, nicht pro Vertrag
- [x] ~~Verrentung des Altersvorsorgedepots~~ — eingebaut: eigene Eingabe `av_auszform`,
      unabhängig von der bAV-Auszahlungsform, mit eigenem Rentenfaktor und eigener Dynamik.
      Nicht geförderte Schicht dann mit dem Ertragsanteil statt dem halben Unterschiedsbetrag,
      zweite Memo-Zeile für Zahlungen nach dem Vergleichshorizont.
- [ ] Teilkapitalisierung der **bAV** (0–30 % einmalig, Rest verrentet). Beim Depot ist das seit
      der Erweiterung möglich, bei der bAV noch nicht — das Modell kennt dort nur ganz oder gar
      nicht. Die einzige verbliebene Asymmetrie zwischen den beiden geförderten Produkten.
- [ ] Optional: jahresweise Inversion des Nettoaufwands statt nur im ersten Jahr
- [ ] Optional: Sensitivitätstabelle über Rendite × Option (Excel-Datentabellen werden von
      openpyxl nicht geschrieben; Alternative wäre eine vorgerechnete Matrix)

---

## 9. Quellen

- [SVBezGrV 2026](https://www.gesetze-im-internet.de/svbezgrv_2026/BJNR1160A0025.html)
- [§ 32a EStG](https://www.gesetze-im-internet.de/estg/__32a.html)
- [BMF, FAQ Reform der geförderten privaten Altersvorsorge (05.05.2026)](https://www.bundesfinanzministerium.de/Content/DE/FAQ/reform-der-privaten-altersvorsorge.html)
- [Bundesregierung, Private Altersvorsorge wird attraktiver (01.06.2026)](https://www.bundesregierung.de/breg-de/aktuelles/reform-private-altersvorsorge-2400072)
- [BMF-Schreiben 13.01.2026, Basiszins Vorabpauschale § 18 Abs. 4 InvStG](https://www.bundesfinanzministerium.de/Content/DE/Downloads/BMF_Schreiben/Steuerarten/Investmentsteuer/2026-01-13-basiszins-berechnung-vorabpauschale.html)
- [GKV-Spitzenverband, Rechengrößen 2026](https://www.gkv-spitzenverband.de/media/dokumente/presse/zahlen_und_grafiken/20260101_Faktenblatt_Rechengroessen_Beitragsrecht.pdf)
- [DYNO](https://heydyno.de)

---

*Keine Steuer- oder Anlageberatung. Das Modell ersetzt keine Prüfung des konkreten Vertrags.*
