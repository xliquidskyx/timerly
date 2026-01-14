# Timerly - Cooking Assistant Application

Aplikacja wspomagająca gotowanie z timerami i przepisami, zgodna z dokumentacją wymagań.

## Funkcjonalności

### Dla użytkowników:
- Przeglądanie przepisów
- Filtrowanie przepisów po produktach, czasie gotowania i metodzie
- Wyszukiwanie przepisów
- Szczegóły przepisu z pełnymi instrukcjami
- Timer gotowania z powiadomieniami
- Dodawanie przepisów do ulubionych
- Wielojęzyczność (angielski, polski, niemiecki)

### Dla administratorów:
- Panel administracyjny z autentykacją
- Zarządzanie przepisami (dodawanie, edycja, usuwanie)
- Zarządzanie produktami (dodawanie, edycja, usuwanie)
- Statystyki systemu

## Wymagania

- Node.js 14+
- MySQL 8.0+
- npm lub yarn

## Instalacja

### Backend

```bash
cd backend
npm install
```

Skonfiguruj bazę danych w `backend/config/config.json`:

```json
{
  "development": {
    "username": "root",
    "password": "your_password",
    "database": "timerly_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

Utwórz plik `.env` w katalogu `backend`:

```
PORT=5000
NODE_ENV=development
JWT_SECRET=your-secret-key
GOOGLE_RECIPES_API_KEY=your-api-key-if-available
```

Utwórz pierwszego administratora:

```bash
npm run create-admin [username] [password]
```

Dodaj przykładowe dane (opcjonalnie):

```bash
npm run seed
```

Uruchom serwer:

```bash
npm start
```

**Uwaga dla użytkowników PowerShell (Windows):**
W PowerShell użyj `;` zamiast `&&` lub uruchamiaj komendy osobno:
```powershell
cd backend; npm install
cd ..; npm install
```

### Frontend

W głównym katalogu projektu:

```bash
npm install
```

Utwórz plik `.env` w głównym katalogu:

```
REACT_APP_API_URL=http://localhost:5000/api
```

Uruchom aplikację:

```bash
npm start
```

Aplikacja będzie dostępna pod adresem `http://localhost:3000`

## Struktura projektu

```
timerly-main/
├── backend/
│   ├── config/          # Konfiguracja bazy danych
│   ├── models/           # Modele Sequelize
│   ├── routes/           # Endpointy API
│   ├── middleware/       # Middleware (autentykacja)
│   └── server.js         # Główny plik serwera
├── src/
│   ├── components/       # Komponenty React
│   ├── services/         # Serwisy API
│   ├── i18n/             # Pliki tłumaczeń
│   └── App.js            # Główny komponent
└── public/               # Pliki statyczne
```

## API Endpoints

### Przepisy
- `GET /api/recipes` - Lista przepisów (z filtrowaniem)
- `GET /api/recipes/:id` - Szczegóły przepisu
- `GET /api/recipes/search/api` - Wyszukiwanie w API

### Produkty
- `GET /api/products` - Lista produktów
- `GET /api/products/:id` - Szczegóły produktu

### Timery
- `POST /api/timers` - Utworzenie timera
- `GET /api/timers` - Lista timerów
- `GET /api/timers/:id` - Szczegóły timera
- `PATCH /api/timers/:id` - Aktualizacja statusu timera

### Użytkownicy
- `POST /api/users` - Utworzenie użytkownika
- `GET /api/users/:id` - Szczegóły użytkownika
- `PATCH /api/users/:id/preferences` - Aktualizacja preferencji
- `POST /api/users/:id/favorites` - Dodanie do ulubionych
- `DELETE /api/users/:id/favorites/:recipeId` - Usunięcie z ulubionych

### Admin
- `POST /api/admin/login` - Logowanie
- `POST /api/admin/recipes` - Dodanie przepisu
- `PUT /api/admin/recipes/:id` - Aktualizacja przepisu
- `DELETE /api/admin/recipes/:id` - Usunięcie przepisu
- `POST /api/admin/products` - Dodanie produktu
- `PUT /api/admin/products/:id` - Aktualizacja produktu
- `DELETE /api/admin/products/:id` - Usunięcie produktu
- `GET /api/admin/stats` - Statystyki systemu

## Uwagi

- Aplikacja używa Sequelize ORM do zarządzania bazą danych
- Baza danych jest automatycznie synchronizowana w trybie development
- Hasła administratorów są hashowane przy użyciu bcrypt
- Powiadomienia przeglądarki wymagają pozwolenia użytkownika
- Aplikacja jest responsywna i działa na urządzeniach mobilnych (min. 600px szerokości)

## Licencja

ISC
