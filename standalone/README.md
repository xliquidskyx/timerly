# Timerly - Wersja Standalone (Bez instalacji)

Ta wersja aplikacji działa całkowicie w przeglądarce - nie wymaga instalacji Node.js, npm, MySQL ani żadnego serwera!

## Jak uruchomić

1. Otwórz plik `index.html` w przeglądarce
2. To wszystko! 🎉

## Funkcjonalności

✅ Przeglądanie przepisów  
✅ Filtrowanie przepisów po produktach, czasie i metodzie  
✅ Wyszukiwanie przepisów  
✅ **Wyszukiwanie przepisów z API (TheMealDB - darmowe!)**  
✅ Szczegóły przepisu  
✅ Timer gotowania z powiadomieniami  
✅ Panel administracyjny  
✅ Wielojęzyczność (PL, EN, DE)  
✅ Wszystkie dane przechowywane w localStorage przeglądarki  
✅ **Integracja z Google Custom Search API (opcjonalnie)**  

## Domyślne dane logowania administratora

- **Nazwa użytkownika:** `admin`
- **Hasło:** `admin123`

## Wyszukiwanie przepisów z API

Aplikacja obsługuje wyszukiwanie przepisów z zewnętrznych API:

1. **TheMealDB API** - Działa od razu, bez konfiguracji! (darmowe)
2. **Google Custom Search API** - Wymaga konfiguracji klucza API (patrz `API_SETUP.md`)

Aby wyszukać przepisy:
1. Kliknij przycisk "🔍 Szukaj w API" na stronie głównej
2. Wpisz nazwę przepisu
3. Wybierz źródło API
4. Kliknij "Szukaj"
5. Kliknij "Dodaj przepis" aby zapisać przepis w lokalnej bazie

## Uwagi

- Wszystkie dane są przechowywane lokalnie w przeglądarce (localStorage)
- Dane nie są synchronizowane między urządzeniami
- Po wyczyszczeniu danych przeglądarki wszystkie dane zostaną utracone
- Aplikacja działa offline (po pierwszym załadowaniu)
- TheMealDB API jest całkowicie darmowe i nie wymaga klucza

## Struktura plików

```
standalone/
├── index.html    # Główny plik HTML
├── styles.css    # Style CSS
├── app.js        # Logika aplikacji JavaScript
└── README.md     # Ten plik
```

## Wymagania

- Nowoczesna przeglądarka (Chrome, Firefox, Edge, Safari)
- JavaScript włączony
- Brak innych wymagań!
