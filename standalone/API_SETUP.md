# Konfiguracja API dla Timerly

## TheMealDB API (Darmowe - Działa od razu!)

TheMealDB to darmowe API z przepisami, które działa bez konfiguracji. Aplikacja używa go domyślnie.

**Nie wymaga klucza API!** ✅

## Google Custom Search API (Opcjonalne)

Jeśli chcesz używać Google Custom Search API do wyszukiwania przepisów:

### Krok 1: Utwórz projekt w Google Cloud Console

1. Przejdź do [Google Cloud Console](https://console.cloud.google.com/)
2. Utwórz nowy projekt lub wybierz istniejący
3. Włącz "Custom Search API"

### Krok 2: Utwórz klucz API

1. Przejdź do "APIs & Services" > "Credentials"
2. Kliknij "Create Credentials" > "API Key"
3. Skopiuj wygenerowany klucz API

### Krok 3: Utwórz Custom Search Engine

1. Przejdź do [Google Custom Search](https://programmablesearchengine.google.com/)
2. Kliknij "Add" aby utworzyć nową wyszukiwarkę
3. W "Sites to search" wpisz: `*` (aby wyszukiwać w całym internecie)
4. Skopiuj "Search engine ID"

### Krok 4: Skonfiguruj w aplikacji

1. Zaloguj się do panelu administracyjnego
2. Przewiń do sekcji "Konfiguracja API"
3. Wklej klucz API i Search Engine ID
4. Kliknij "Zapisz klucze API"

## Alternatywne API

Możesz również użyć innych API przepisów:

- **Edamam Recipe Search API** - Wymaga rejestracji
- **Spoonacular API** - Wymaga klucza API
- **Food2Fork API** - Wymaga klucza API

Aby dodać nowe API, zmodyfikuj funkcję `searchRecipesFromAPI()` w pliku `app.js`.

## Uwagi

- TheMealDB API jest całkowicie darmowe i nie wymaga konfiguracji
- Google Custom Search API ma limit 100 zapytań dziennie (darmowy plan)
- Klucze API są przechowywane lokalnie w przeglądarce (localStorage)
