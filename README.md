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

- Sorge dafür, dass der Server login/register nicht mehr mit einem x-auth header funktioniert, sondern über cookies
- Implementiere den `submit` callback in der frontend-komponente Register.jsx
- Implementiere den `submit` callback in der frontend-komponente Login.jsx


## Bonus

Füge einen "logout" button in der Komponente UserDetail.jsx hinzu. wenn der button geklickt wird, dann soll der user auf dem server ausgeloggt werden. Überlege dir einen passenden weg dafür