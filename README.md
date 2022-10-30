# Übung zu Mongoose und Search Queries

## Idee
Baut ein Backend mit Datenbank, welches verschiedene Routen zur Verfügung stellt um 
a) Daten aus der Datenbank zu erhalten
b) Daten in der Datenbank aktualisiert

## Aufgaben
### Server Setup
- Erstellt ein Backend Template mit der üblichen Ordnerstruktur
- erstellt eine server.js und bindet den PORT über die .env Datei ein und ermöglicht das Lesen von JSON Daten mittels express.json() 
- erstellt ein GET ROUTE die mit dem Controller verbunden ist und nur einen String 'Hallo Welt' ausgibt

### Datenbank Setup
- Erstellt ein Schema und  Model für Produkte (`Products`)
- das Schema sollte sich an diesem Beispiel orientieren:
```
const myProduct = {
    productName: 'Waschmaschine',
    price: 390,
    inStock: 30,
    available: true,
    categories: ['Haushalt', 'Elektro', 'Reinigung']
    details: {
        description: 'blablabla',
        payment: ['Mastercard', 'Visa']
    }
}
```
- Tipps für das Schema:
    - `price` & `inStock` sollten Zahlen sein
    - `price`, `inStock` und `productName` sollten Pflichtangaben sein
    - `available` sollte einen default Wert true haben, da wir davon ausgehen, dass neue Produkte erstmal vorhanden sind.  
    - im Categories Array befinden sich Strings
- erstellt euch ein Seed Skript mit faker was euch 100 Musterprodukte erstellt. Tipps:
    - In der faker Kategorie `commerce`, gibt es `productName()`, was euch genügend Produktnamen auswirft und andere hilfreiche Funktionen
    - was ihr in den Category Array reinschreibt ist egel, das kann sich bei den Produken auch wiederholen, so könnt ihr das auch ohne faker machen
    - sowieso immer, wenn ihr euch nicht sicher seid, wie ihr das mit Faker machen könnt: schreibt es fest hin, dann ist es zwar überall gleich Nur benutzt kein `unique`...

### DB und Backend zusammen
- erstellt euch folgende `GET` Routen:
    - Ausgabe aller Produkte 
    - Ausgabe eines Produkts durch die id (`/:id`)
    - Ausgabe alle Produkte zu einer bestimmten Kategorie (`/:category`)
    - Ausgabe aller Produkete teurer/billiger als xx € (`/:min`) oder (`/:max`)
    - Ausgabe aller Produkte zwischen xx€ und xx€ (etwas schwerer!), versucht einen query String (z.B. `/range?min=5&max=10`) zu benutzen

**Bonus**
- erstellt eine `POST` Route mit der ihr ein neues Produkt hinzufügen könnt
- erstellt euch eine `DELETE` Route bei der ihr ein Produkt löschen könnt (mittels der id) 
- erstellt euch `PUT` Routen für updates (werden wir noch behandeln, funktioniert aber wie in der mongodb shell):
    - Route, bei der ihr den Preis verändern könnt
    - eine neue Category hinzufügen könnt
    - eine Category löschen könnt
    - eine Route die den amount reduziert

