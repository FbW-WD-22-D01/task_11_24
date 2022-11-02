# Übung zu Filter & Query-Params

## Setup

installiere alles mit `npm install`
befülle die datenbank mit `node seed.js`



## Aufgaben

- implementiere alle controller-middlewares in `/controllers/recordsController`
- der endpunkt `GET /records` soll die möglichkeit haben dass wir paginieren können. Durch die Query-Params `start` und `end` soll nur ein Teil der Gesamt-Liste ausgegeben werden. z.b `GET /records?start=5&end=10` soll die ersten 5 Records überspringen und nur 5 Records ausgeben
- der endpunkt `GET /records` soll die möglichkeit haben nach genre zu filtern. so soll der Request `GET /records?genre=Rock` nur Records ausgeben welche Rock als Genre haben
- wir wollen nack Preis filtern können. so soll `GET /records?maxPrice=10` nur Records ausgeben, welche maximal 10€ kosten. der Request `GET /records?minPrice=10` soll nur records ausgeben welche mindestens 10€ kosten

## Bonus

- Überlege dir wie man eine Paginierung verwirklichen könnte. Jede Page soll 5 Records beinhalten. wenn ich also `GET /records?page=2` aufrufe, dann sollen nur die Produkte 5-9 ausgegeben werden. wenn ich `GET /records` aufrufe, dann nur Records 0-4
