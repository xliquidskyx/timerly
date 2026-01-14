# Struktura projektu Timerly

## Co jest potrzebne?

### Dla wersji STANDALONE (bez instalacji) - tylko te pliki:
```
standalone/
├── index.html      ✅ POTRZEBNE
├── app.js          ✅ POTRZEBNE
├── styles.css      ✅ POTRZEBNE
├── README.md       📄 Dokumentacja
└── API_SETUP.md    📄 Dokumentacja API
```

**Możesz usunąć wszystko inne jeśli używasz tylko standalone!**

### Dla wersji REACT + BACKEND (z instalacją):
```
src/                ✅ POTRZEBNE (komponenty React)
public/             ✅ POTRZEBNE (pliki statyczne)
backend/            ✅ POTRZEBNE (serwer API)
package.json        ✅ POTRZEBNE (zależności React)
backend/package.json ✅ POTRZEBNE (zależności backend)
```

## Pliki do usunięcia (jeśli używasz tylko standalone):

- ❌ `src/` - cały folder (wersja React)
- ❌ `public/` - cały folder (używane tylko przez React)
- ❌ `backend/` - cały folder (serwer API - niepotrzebny dla standalone)
- ❌ `package.json` w głównym katalogu (dla React)
- ❌ `package-lock.json` w głównym katalogu (dla React)
- ❌ `INSTALL.md` - instrukcje instalacji (niepotrzebne dla standalone)
- ❌ `README.md` - można zostawić lub zastąpić README.md z standalone

## Co zostawić (standalone):

- ✅ `standalone/` - cały folder
- ✅ `standalone/README.md` - dokumentacja standalone
