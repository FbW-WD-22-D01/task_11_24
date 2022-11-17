# Frontend-Login

Installiere und starte das Backend:
- `cd backend`
- `npm install`
- `npm start`

Installiere und starte das Frontend:
- `cd frontend`
- `npm install`
- `npm run dev`

## Info

Für diejenigen, welche gerne aufgaben über das Wochenende haben: Lösche das File `backend/controllers/userController.js` und `backend/models/User.js`. Fahre dann ganz normal mit den Tasks fort

## Tasks

- Implementiere den `submit` callback in der frontend-komponente Register.jsx. Sorge dafür, dass die Validierungs-Fehler angezeigt werden, wenn der User falsche Angaben macht. Gib einen allgemeinen Fehler aus, wenn ein status-code kommt, den wir nicht kennen (z.b 500)
- Implementiere den `submit` callback in der frontend-komponente Login.jsx. Sorge dafür, dass die Validierungs-Fehler angezeigt werden, wenn der User falsche Angaben macht. Gib einen allgemeinen Fehler aus, wenn ein status-code kommt, den wir nicht kennen (z.b 500)
- Sorge dafür, dass sich der login-status "gemerkt" wird. speichere den token bei register/login im localStorage und gib gleich den User-Details screen aus, wenn der User schon einen token hat.


## Bonus

Füge einen "logout" button in der Komponente UserDetail.jsx hinzu. wenn der button geklickt wird, dann soll der user auf dem server ausgeloggt werden. Überlege dir einen passenden weg dafür