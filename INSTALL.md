# Instrukcja instalacji Timerly

## Krok po kroku

### 1. Instalacja zależności

**Windows PowerShell:**
```powershell
cd backend
npm install
cd ..
npm install
```

**Linux/Mac (Bash):**
```bash
cd backend && npm install
cd .. && npm install
```

### 2. Konfiguracja bazy danych

Edytuj plik `backend/config/config.json`:

```json
{
  "development": {
    "username": "root",
    "password": "twoje_haslo",
    "database": "timerly_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "twoje_haslo",
    "database": "timerly_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": "twoje_haslo",
    "database": "timerly_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

**Ważne:** Upewnij się, że MySQL jest uruchomiony i baza danych istnieje (lub zostanie utworzona automatycznie przez Sequelize).

### 3. Konfiguracja zmiennych środowiskowych

Utwórz plik `.env` w katalogu `backend`:

```
PORT=5000
NODE_ENV=development
JWT_SECRET=twoj-tajny-klucz-zmien-w-produkcji
GOOGLE_RECIPES_API_KEY=opcjonalny-klucz-api
```

Utwórz plik `.env` w głównym katalogu projektu:

```
REACT_APP_API_URL=http://localhost:5000/api
```

### 4. Utworzenie administratora

**Windows PowerShell:**
```powershell
cd backend
npm run create-admin admin admin123
```

**Linux/Mac:**
```bash
cd backend && npm run create-admin admin admin123
```

Możesz podać własną nazwę użytkownika i hasło:
```bash
npm run create-admin moja_nazwa moje_haslo
```

### 5. (Opcjonalnie) Dodanie przykładowych danych

**Windows PowerShell:**
```powershell
cd backend
npm run seed
```

**Linux/Mac:**
```bash
cd backend && npm run seed
```

### 6. Uruchomienie aplikacji

**Terminal 1 - Backend:**
```powershell
cd backend
npm start
```

**Terminal 2 - Frontend:**
```powershell
npm start
```

Aplikacja będzie dostępna pod adresem:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## Rozwiązywanie problemów

### Błąd połączenia z bazą danych
- Sprawdź, czy MySQL jest uruchomiony
- Zweryfikuj dane logowania w `config.json`
- Upewnij się, że baza danych istnieje lub Sequelize może ją utworzyć

### Błąd portu już w użyciu
- Zmień PORT w pliku `.env` backendu
- Zaktualizuj REACT_APP_API_URL w frontendzie

### Błędy instalacji zależności
- Upewnij się, że masz zainstalowany Node.js 14+
- Spróbuj usunąć `node_modules` i `package-lock.json`, a następnie uruchom `npm install` ponownie
