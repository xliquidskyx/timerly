// Tłumaczenia
const translations = {
    pl: {
        search: "Szukaj przepisów...",
        maxTime: "Max czas (min)",
        allMethods: "Wszystkie metody",
        selectProducts: "Wybierz produkty:",
        back: "← Powrót",
        cookingTime: "Czas gotowania",
        method: "Metoda",
        temperature: "Temperatura",
        restTime: "Czas odpoczynku",
        ingredients: "Składniki",
        instructions: "Instrukcje",
        startTimer: "Uruchom Timer",
        remaining: "Pozostało",
        start: "Start",
        pause: "Pauza",
        resume: "Wznów",
        stop: "Stop",
        completed: "Gotowanie zakończone!",
        adminLogin: "Logowanie Administratora",
        username: "Nazwa użytkownika",
        password: "Hasło",
        login: "Zaloguj",
        adminPanel: "Panel Administracyjny",
        logout: "Wyloguj",
        recipes: "Przepisy",
        products: "Produkty",
        addRecipe: "Dodaj Przepis",
        addProduct: "Dodaj Produkt",
        edit: "Edytuj",
        delete: "Usuń",
        cancel: "Anuluj",
        save: "Zapisz",
        recipeTitle: "Tytuł przepisu",
        recipeIngredients: "Składniki (oddzielone przecinkami)",
        recipeInstructions: "Instrukcje",
        recipeCookingTime: "Czas gotowania (minuty)",
        recipeMethod: "Wybierz metodę",
        recipeTemperature: "Temperatura (°C)",
        recipeRestTime: "Czas odpoczynku (minuty)",
        productName: "Nazwa produktu",
        productCategory: "Wybierz kategorię",
        searchApi: "Szukaj w API",
        searchApiTitle: "Wyszukaj przepisy z API",
        apiSearchPlaceholder: "Wpisz nazwę przepisu...",
        search: "Szukaj",
        loading: "Ładowanie przepisów z API...",
        addRecipe: "Dodaj przepis",
        noResults: "Nie znaleziono przepisów",
        apiKeyRequired: "Wymagany klucz API",
        configureApiKey: "Skonfiguruj klucz API w ustawieniach"
    },
    en: {
        search: "Search recipes...",
        maxTime: "Max time (min)",
        allMethods: "All methods",
        selectProducts: "Select products:",
        back: "← Back",
        cookingTime: "Cooking Time",
        method: "Method",
        temperature: "Temperature",
        restTime: "Rest Time",
        ingredients: "Ingredients",
        instructions: "Instructions",
        startTimer: "Start Timer",
        remaining: "Remaining",
        start: "Start",
        pause: "Pause",
        resume: "Resume",
        stop: "Stop",
        completed: "Cooking completed!",
        adminLogin: "Admin Login",
        username: "Username",
        password: "Password",
        login: "Login",
        adminPanel: "Admin Panel",
        logout: "Logout",
        recipes: "Recipes",
        products: "Products",
        addRecipe: "Add Recipe",
        addProduct: "Add Product",
        edit: "Edit",
        delete: "Delete",
        cancel: "Cancel",
        save: "Save",
        recipeTitle: "Recipe title",
        recipeIngredients: "Ingredients (comma separated)",
        recipeInstructions: "Instructions",
        recipeCookingTime: "Cooking time (minutes)",
        recipeMethod: "Select method",
        recipeTemperature: "Temperature (°C)",
        recipeRestTime: "Rest time (minutes)",
        productName: "Product name",
        productCategory: "Select category",
        searchApi: "Search in API",
        searchApiTitle: "Search recipes from API",
        apiSearchPlaceholder: "Enter recipe name...",
        search: "Search",
        loading: "Loading recipes from API...",
        addRecipe: "Add recipe",
        noResults: "No recipes found",
        apiKeyRequired: "API key required",
        configureApiKey: "Configure API key in settings"
    },
    de: {
        search: "Rezepte suchen...",
        maxTime: "Max Zeit (Min)",
        allMethods: "Alle Methoden",
        selectProducts: "Produkte auswählen:",
        back: "← Zurück",
        cookingTime: "Kochzeit",
        method: "Methode",
        temperature: "Temperatur",
        restTime: "Ruhezeit",
        ingredients: "Zutaten",
        instructions: "Anweisungen",
        startTimer: "Timer starten",
        remaining: "Verbleibend",
        start: "Start",
        pause: "Pause",
        resume: "Fortsetzen",
        stop: "Stop",
        completed: "Kochen abgeschlossen!",
        adminLogin: "Admin-Anmeldung",
        username: "Benutzername",
        password: "Passwort",
        login: "Anmelden",
        adminPanel: "Admin-Panel",
        logout: "Abmelden",
        recipes: "Rezepte",
        products: "Produkte",
        addRecipe: "Rezept hinzufügen",
        addProduct: "Produkt hinzufügen",
        edit: "Bearbeiten",
        delete: "Löschen",
        cancel: "Abbrechen",
        save: "Speichern",
        recipeTitle: "Rezepttitel",
        recipeIngredients: "Zutaten (kommagetrennt)",
        recipeInstructions: "Anweisungen",
        recipeCookingTime: "Kochzeit (Minuten)",
        recipeMethod: "Methode auswählen",
        recipeTemperature: "Temperatur (°C)",
        recipeRestTime: "Ruhezeit (Minuten)",
        productName: "Produktname",
        productCategory: "Kategorie auswählen",
        searchApi: "In API suchen",
        searchApiTitle: "Rezepte aus API suchen",
        apiSearchPlaceholder: "Rezeptname eingeben...",
        search: "Suchen",
        loading: "Rezepte aus API laden...",
        addRecipe: "Rezept hinzufügen",
        noResults: "Keine Rezepte gefunden",
        apiKeyRequired: "API-Schlüssel erforderlich",
        configureApiKey: "API-Schlüssel in den Einstellungen konfigurieren"
    }
};

// Słownik produktów w przepisach (dwukierunkowy - PL->EN i EN->PL)
const ingredientTranslations = {
    // Polish to other languages
    'Kurczak': { en: 'Chicken', de: 'Hähnchen' },
    'Sól': { en: 'Salt', de: 'Salz' },
    'Pieprz': { en: 'Pepper', de: 'Pfeffer' },
    'Czosnek': { en: 'Garlic', de: 'Knoblauch' },
    'Makaron': { en: 'Pasta', de: 'Nudeln' },
    'Pomidory': { en: 'Tomatoes', de: 'Tomaten' },
    'Pomidor': { en: 'Tomato', de: 'Tomate' },
    'Cebula': { en: 'Onion', de: 'Zwiebel' },
    'Ser': { en: 'Cheese', de: 'Käse' }
};

// English to Polish ingredient translations (for API recipes)
const englishToPolishIngredients = {
    // Common ingredients
    'chicken': 'kurczak',
    'chicken breast': 'pierś z kurczaka',
    'salt': 'sól',
    'pepper': 'pieprz',
    'garlic': 'czosnek',
    'pasta': 'makaron',
    'fettuccine': 'makaron fettuccine',
    'fettuccine pasta': 'makaron fettuccine',
    'tomato': 'pomidor',
    'tomatoes': 'pomidory',
    'onion': 'cebula',
    'cheese': 'ser',
    'parmesan': 'parmezan',
    'parmesan cheese': 'ser parmezan',
    'butter': 'masło',
    'cream': 'śmietana',
    'heavy cream': 'śmietana kremówka',
    'oil': 'olej',
    'olive oil': 'oliwa z oliwek',
    'water': 'woda',
    'milk': 'mleko',
    'egg': 'jajko',
    'eggs': 'jajka',
    'flour': 'mąka',
    'sugar': 'cukier',
    'rice': 'ryż',
    'potato': 'ziemniak',
    'potatoes': 'ziemniaki',
    'carrot': 'marchew',
    'carrots': 'marchewki',
    'beef': 'wołowina',
    'pork': 'wieprzowina',
    'fish': 'ryba',
    'salmon': 'łosoś',
    'parsley': 'pietruszka',
    'fresh parsley': 'świeża pietruszka',
    'basil': 'bazylia',
    'oregano': 'oregano',
    'thyme': 'tymianek',
    'bay leaf': 'liść laurowy',
    'paprika': 'papryka',
    'chili': 'chili',
    'lemon': 'cytryna',
    'lime': 'limonka',
    'vinegar': 'ocet',
    'soy sauce': 'sos sojowy',
    'mustard': 'musztarda',
    'honey': 'miód',
    'ginger': 'imbir',
    'cinnamon': 'cynamon',
    'vanilla': 'wanilia',
    'chocolate': 'czekolada',
    'cocoa': 'kakao',
    'bread': 'chleb',
    'wine': 'wino',
    'beer': 'piwo',
    'broth': 'bulion',
    'stock': 'wywar',
    'chicken stock': 'wywar z kurczaka',
    'vegetable': 'warzywo',
    'vegetables': 'warzywa',
    'meat': 'mięso',
    'bacon': 'boczek',
    'sausage': 'kiełbasa',
    'ham': 'szynka',
    'mushroom': 'grzyb',
    'mushrooms': 'grzyby',
    'spinach': 'szpinak',
    'lettuce': 'sałata',
    'cabbage': 'kapusta',
    'broccoli': 'brokuły',
    'cauliflower': 'kalafior',
    'zucchini': 'cukinia',
    'eggplant': 'bakłażan',
    'cucumber': 'ogórek',
    'bell pepper': 'papryka',
    'red pepper': 'czerwona papryka',
    'green pepper': 'zielona papryka',
    'chili pepper': 'papryczka chili',
    'corn': 'kukurydza',
    'peas': 'groszek',
    'beans': 'fasola',
    'lentils': 'soczewica',
    'chickpeas': 'ciecierzyca',
    'tofu': 'tofu',
    'nuts': 'orzechy',
    'almonds': 'migdały',
    'walnuts': 'orzechy włoskie',
    'peanuts': 'orzeszki ziemne',
    'cashews': 'orzechy nerkowca',
    'apple': 'jabłko',
    'banana': 'banan',
    'orange': 'pomarańcza',
    'strawberry': 'truskawka',
    'strawberries': 'truskawki',
    'blueberry': 'jagoda',
    'blueberries': 'jagody',
    'raspberry': 'malina',
    'raspberries': 'maliny',
    'peach': 'brzoskwinia',
    'pear': 'gruszka',
    'grape': 'winogrono',
    'grapes': 'winogrona',
    'watermelon': 'arbuz',
    'melon': 'melon',
    'pineapple': 'ananas',
    'mango': 'mango',
    'avocado': 'awokado',
    'coconut': 'kokos',
    'dried': 'suszony',
    'fresh': 'świeży',
    'frozen': 'mrożony',
    'canned': 'konserwowy',
    'chopped': 'posiekany',
    'diced': 'pokrojony w kostkę',
    'sliced': 'pokrojony',
    'minced': 'zmielony',
    'grated': 'tarty',
    'ground': 'mielony',
    'whole': 'cały',
    'half': 'pół',
    'quarter': 'ćwierć',
    'pinch': 'szczypta',
    'handful': 'garść',
    'cup': 'szklanka',
    'tablespoon': 'łyżka stołowa',
    'teaspoon': 'łyżeczka',
    'ounce': 'uncja',
    'pound': 'funt',
    'gram': 'gram',
    'kilogram': 'kilogram',
    'liter': 'litr',
    'milliliter': 'mililitr',
    'to taste': 'do smaku',
    'for garnish': 'do dekoracji'
};

// Tłumaczenia tekstu przepisów
const recipeTextTranslations = {
    'Grillowany Kurczak': {
        en: 'Grilled Chicken',
        de: 'Gegrilltes Hähnchen'
    },
    'Makaron z Sosem Pomidorowym': {
        en: 'Pasta with Tomato Sauce',
        de: 'Nudeln mit Tomatensauce'
    },
    'Przypraw kurczaka solą, pieprzem i czosnkiem. Grilluj przez 20-25 minut aż będzie ugotowany.': {
        en: 'Season the chicken with salt, pepper and garlic. Grill for 20-25 minutes until cooked.',
        de: 'Das Hähnchen mit Salz, Pfeffer und Knoblauch würzen. 20-25 Minuten grillen bis es gar ist.'
    },
    'Ugotuj makaron według instrukcji. Podsmaż cebulę i czosnek, dodaj pomidory. Połącz z makaronem i posyp serem.': {
        en: 'Cook pasta according to instructions. Sauté onion and garlic, add tomatoes. Combine with pasta and sprinkle with cheese.',
        de: 'Nudeln nach Anleitung kochen. Zwiebel und Knoblauch anbraten, Tomaten hinzufügen. Mit Nudeln vermischen und mit Käse bestreuen.'
    }
};

let currentLanguage = localStorage.getItem('language') || 'pl';
let selectedProducts = [];
let currentRecipeId = null;
let timerInterval = null;
let timerRemaining = 0;
let timerPaused = false;
let editingRecipeId = null;
let editingProductId = null;

// Step timer related variables
let currentConfigStepIndex = null;
let stepTimerIntervals = {}; // Map of stepIndex to interval
let stepTimerStates = {}; // Map of stepIndex to { remaining, paused, initial }

// Funkcja tłumaczeń
function t(key) {
    return translations[currentLanguage][key] || key;
}

// English to Polish recipe title translations
const englishToPolishTitles = {
    'chicken alfredo pasta': 'Makaron Alfredo z Kurczakiem',
    'chicken alfredo': 'Kurczak Alfredo',
    'pasta alfredo': 'Makaron Alfredo',
    'spaghetti carbonara': 'Spaghetti Carbonara',
    'chicken curry': 'Curry z Kurczaka',
    'beef stew': 'Gulasz Wołowy',
    'tomato soup': 'Zupa Pomidorowa',
    'chicken soup': 'Rosół z Kurczaka',
    'vegetable soup': 'Zupa Warzywna',
    'caesar salad': 'Sałatka Cezar',
    'greek salad': 'Sałatka Grecka',
    'grilled chicken': 'Grillowany Kurczak',
    'roast chicken': 'Pieczony Kurczak',
    'fried chicken': 'Smażony Kurczak',
    'baked salmon': 'Pieczony Łosoś',
    'grilled salmon': 'Grillowany Łosoś',
    'fish and chips': 'Ryba z Frytkami',
    'beef burger': 'Burger Wołowy',
    'cheese pizza': 'Pizza z Serem',
    'pepperoni pizza': 'Pizza Pepperoni',
    'margherita pizza': 'Pizza Margherita',
    'mushroom risotto': 'Risotto z Grzybami',
    'seafood paella': 'Paella z Owocami Morza',
    'pad thai': 'Pad Thai',
    'fried rice': 'Smażony Ryż',
    'chicken fried rice': 'Smażony Ryż z Kurczakiem',
    'beef tacos': 'Tacos z Wołowiną',
    'chicken tacos': 'Tacos z Kurczakiem',
    'fish tacos': 'Tacos z Rybą',
    'lasagna': 'Lasagne',
    'beef lasagna': 'Lasagne z Wołowiną',
    'mac and cheese': 'Makaron z Serem',
    'spaghetti bolognese': 'Spaghetti Bolognese',
    'spaghetti': 'Spaghetti',
    'meatballs': 'Klopsiki',
    'chicken breast': 'Pierś z Kurczaka',
    'pork chops': 'Kotlety Schabowe',
    'steak': 'Stek',
    'bbq ribs': 'Żeberka BBQ',
    'pulled pork': 'Szarpana Wieprzowina',
    'roast beef': 'Pieczeń Wołowa',
    'pot roast': 'Pieczeń w Garnku',
    'beef wellington': 'Wołowina Wellington'
};

// Translate recipe title
function translateRecipeTitle(title) {
    if (!title) return title;
    
    // If current language is Polish, try to translate English titles
    if (currentLanguage === 'pl') {
        const lowerTitle = title.toLowerCase().trim();
        
        // Try exact match first
        if (englishToPolishTitles[lowerTitle]) {
            return englishToPolishTitles[lowerTitle];
        }
        
        // Try partial translation of words in the title
        let translated = title;
        let hasTranslation = false;
        
        for (const [english, polish] of Object.entries(englishToPolishTitles)) {
            if (lowerTitle.includes(english)) {
                translated = translated.replace(new RegExp(english, 'gi'), polish);
                hasTranslation = true;
                break;
            }
        }
        
        return hasTranslation ? translated : title;
    }
    
    // For non-Polish languages, use predefined translations
    return (recipeTextTranslations[title] && recipeTextTranslations[title][currentLanguage]) || title;
}

// Translate single ingredient
function translateIngredient(ingredient) {
    if (!ingredient) return ingredient;
    
    // If current language is Polish and ingredient looks English, translate to Polish
    if (currentLanguage === 'pl') {
        const lowerIngredient = ingredient.toLowerCase();
        
        // Try exact match first
        if (englishToPolishIngredients[lowerIngredient]) {
            return englishToPolishIngredients[lowerIngredient];
        }
        
        // Try partial matches (for ingredients with measurements like "Chicken (500g)")
        let translated = ingredient;
        for (const [english, polish] of Object.entries(englishToPolishIngredients)) {
            const regex = new RegExp(`\\b${english}\\b`, 'gi');
            if (regex.test(lowerIngredient)) {
                translated = ingredient.replace(regex, polish);
                break;
            }
        }
        
        return translated;
    }
    
    // For non-Polish languages, use the original Polish->Other translation
    if (currentLanguage === 'pl' || !ingredient) return ingredient;
    return (ingredientTranslations[ingredient] && ingredientTranslations[ingredient][currentLanguage]) || ingredient;
}

// Translate instructions
function translateInstructions(text) {
    if (!text) return text;
    
    // Don't translate if current language is Polish BUT check if this is an API recipe
    // API recipes should stay in English as word-by-word translation produces poor results
    if (currentLanguage === 'pl') {
        // If text contains a lot of English cooking terms, it's likely an API recipe
        // Just return it as-is with no translation
        const englishIndicators = ['cook', 'heat', 'add', 'mix', 'stir', 'pour', 'serve', 'until', 'the', 'and', 'in', 'on', 'for'];
        const englishWordCount = englishIndicators.filter(word => 
            new RegExp(`\\b${word}\\b`, 'i').test(text)
        ).length;
        
        // If more than 5 English indicator words found, this is likely an API recipe in English
        // Don't translate it - machine translation word-by-word produces gibberish
        if (englishWordCount >= 5) {
            return text; // Return original English text
        }
        
        // Otherwise, it's likely a Polish recipe, return as-is
        return text;
    }
    
    // For non-Polish languages, use predefined translations
    if (currentLanguage === 'pl' || !text) return text;
    return (recipeTextTranslations[text] && recipeTextTranslations[text][currentLanguage]) || text;
}

// Translate product name
function translateProductName(name) {
    if (currentLanguage === 'pl' || !name) return name;
    return (ingredientTranslations[name] && ingredientTranslations[name][currentLanguage]) || name;
}

// Inicjalizacja danych
function initData() {
    if (!localStorage.getItem('recipes')) {
        const defaultRecipes = [
            {
                id: 1,
                title: 'Grillowany Kurczak',
                ingredients: ['Kurczak', 'Sól', 'Pieprz', 'Czosnek'],
                instructions: 'Przypraw kurczaka solą, pieprzem i czosnkiem. Grilluj przez 20-25 minut aż będzie ugotowany.',
                cookingTime: 25,
                cookingMethod: 'grilling',
                temperature: 200,
                restTime: 5,
                productIds: []
            },
            {
                id: 2,
                title: 'Makaron z Sosem Pomidorowym',
                ingredients: ['Makaron', 'Pomidory', 'Cebula', 'Czosnek', 'Ser'],
                instructions: 'Ugotuj makaron według instrukcji. Podsmaż cebulę i czosnek, dodaj pomidory. Połącz z makaronem i posyp serem.',
                cookingTime: 20,
                cookingMethod: 'boiling',
                productIds: []
            }
        ];
        localStorage.setItem('recipes', JSON.stringify(defaultRecipes));
    }

    if (!localStorage.getItem('products')) {
        const defaultProducts = [
            { id: 1, name: 'Kurczak', category: 'meat' },
            { id: 2, name: 'Pomidor', category: 'vegetable' },
            { id: 3, name: 'Makaron', category: 'grain' },
            { id: 4, name: 'Ser', category: 'dairy' },
            { id: 5, name: 'Sól', category: 'spice' },
            { id: 6, name: 'Pieprz', category: 'spice' },
            { id: 7, name: 'Cebula', category: 'vegetable' },
            { id: 8, name: 'Czosnek', category: 'vegetable' }
        ];
        localStorage.setItem('products', JSON.stringify(defaultProducts));
    }

    if (!localStorage.getItem('admin')) {
        const admin = {
            username: 'admin',
            password: 'admin123' // W produkcji powinno być zahashowane
        };
        localStorage.setItem('admin', JSON.stringify(admin));
    }
    
    // Initialize user preferences for step timers
    if (!localStorage.getItem('timerPreferences')) {
        const defaultPreferences = {
            defaultHeatSource: 'gas',
            defaultCookware: 'pot',
            favoriteVariants: {}
        };
        localStorage.setItem('timerPreferences', JSON.stringify(defaultPreferences));
    }
}

// Get user preferences
function getTimerPreferences() {
    return JSON.parse(localStorage.getItem('timerPreferences') || '{"defaultHeatSource":"gas","defaultCookware":"pot","favoriteVariants":{}}');
}

// Save user preferences
function saveTimerPreferences(preferences) {
    localStorage.setItem('timerPreferences', JSON.stringify(preferences));
}

// Get recipe step configuration
function getStepConfig(recipeId, stepIndex) {
    const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');
    const recipe = recipes.find(r => r.id === recipeId);
    
    if (!recipe || !recipe.steps || !recipe.steps[stepIndex]) {
        return null;
    }
    
    const step = recipe.steps[stepIndex];
    return step.timerConfig || null;
}

// Save step configuration
function saveStepConfig(recipeId, stepIndex, config) {
    const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');
    const recipeIndex = recipes.findIndex(r => r.id === recipeId);
    
    if (recipeIndex === -1 || !recipes[recipeIndex].steps || !recipes[recipeIndex].steps[stepIndex]) {
        return false;
    }
    
    // Initialize step if it's just a string
    if (typeof recipes[recipeIndex].steps[stepIndex] === 'string') {
        const stepText = recipes[recipeIndex].steps[stepIndex];
        recipes[recipeIndex].steps[stepIndex] = {
            description: stepText,
            time: null
        };
    } else if (typeof recipes[recipeIndex].steps[stepIndex] === 'object' && !recipes[recipeIndex].steps[stepIndex].description) {
        // Handle { description, time } format
        // Already in correct format, no changes needed
    }
    
    // Merge config into step
    recipes[recipeIndex].steps[stepIndex].timerConfig = config;
    
    localStorage.setItem('recipes', JSON.stringify(recipes));
    return true;
}

// Event listeners
function setupEventListeners() {
    document.getElementById('languageSelect').addEventListener('change', (e) => {
        currentLanguage = e.target.value;
        localStorage.setItem('language', currentLanguage);
        updateLanguage();
    });

    document.getElementById('searchInput').addEventListener('input', renderRecipes);
    document.getElementById('timeFilter').addEventListener('input', renderRecipes);
    document.getElementById('methodFilter').addEventListener('change', renderRecipes);
    document.getElementById('searchApiBtn').addEventListener('click', () => {
        document.getElementById('apiSearchSection').style.display = 'block';
    });
    document.getElementById('closeApiSearch').addEventListener('click', () => {
        document.getElementById('apiSearchSection').style.display = 'none';
    });
    document.getElementById('apiSearchBtn').addEventListener('click', searchRecipesFromAPI);
    document.getElementById('adminBtn').addEventListener('click', () => showView('adminView'));
    document.getElementById('adminBackBtn').addEventListener('click', () => showView('mainView'));
    document.getElementById('backBtn').addEventListener('click', () => showView('mainView'));
    document.getElementById('timerBackBtn').addEventListener('click', () => {
        stopTimer();
        showView('recipeView');
    });
    document.getElementById('loginBtn').addEventListener('click', handleAdminLogin);
    document.getElementById('logoutBtn').addEventListener('click', handleAdminLogout);
    document.getElementById('addRecipeBtn').addEventListener('click', () => openRecipeModal());
    document.getElementById('addProductBtn').addEventListener('click', () => openProductModal());
    document.getElementById('recipeForm').addEventListener('submit', handleRecipeSubmit);
    document.getElementById('productForm').addEventListener('submit', handleProductSubmit);
    // Optional API keys button - only if element exists
    const saveApiKeysBtn = document.getElementById('saveApiKeysBtn');
    if (saveApiKeysBtn) {
        saveApiKeysBtn.addEventListener('click', saveApiKeys);
    }
    document.getElementById('cancelRecipeBtn').addEventListener('click', closeRecipeModal);
    document.getElementById('cancelProductBtn').addEventListener('click', closeProductModal);
    document.querySelectorAll('.close').forEach(btn => {
        btn.addEventListener('click', () => {
            closeRecipeModal();
            closeProductModal();
        });
    });
    
    // Step timer configuration modal listeners
    setupStepTimerConfigListeners();
}

// Setup step timer configuration modal event listeners
function setupStepTimerConfigListeners() {
    const modal = document.getElementById('stepTimerConfigModal');
    const closeBtn = document.getElementById('closeStepTimerConfig');
    const cancelBtn = document.getElementById('cancelStepTimerConfig');
    const saveBtn = document.getElementById('saveStepTimerConfig');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeStepTimerConfigModal);
    }
    
    if (cancelBtn) {
        cancelBtn.addEventListener('click', closeStepTimerConfigModal);
    }
    
    if (saveBtn) {
        saveBtn.addEventListener('click', saveStepTimerConfiguration);
    }
    
    // Ingredient category change - update variants
    const categorySelect = document.getElementById('stepIngredientCategory');
    if (categorySelect) {
        categorySelect.addEventListener('change', (e) => {
            updateVariantOptions(e.target.value);
            calculateRecommendedTime();
        });
    }
    
    // Update recommended time when any config changes
    const configInputs = ['stepActionType', 'stepIngredientVariant', 'stepCookware', 'stepHeatSource'];
    configInputs.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('change', calculateRecommendedTime);
        }
    });
    
    // Time source radio buttons
    const timeSourceRadios = document.querySelectorAll('input[name="timeSource"]');
    timeSourceRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            const manualInput = document.getElementById('manualTimeInput');
            if (e.target.value === 'manual') {
                manualInput.style.display = 'block';
            } else {
                manualInput.style.display = 'none';
            }
        });
    });
}

// Aktualizacja języka
function updateLanguage() {
    const trans = translations[currentLanguage];
    
    // Update input placeholders
    document.getElementById('searchInput').placeholder = trans.search;
    document.getElementById('timeFilter').placeholder = trans.maxTime;
    
    // Update method filter dropdown
    const methodFilter = document.getElementById('methodFilter');
    if (methodFilter) {
        methodFilter.innerHTML = `
            <option value="">${trans.allMethods}</option>
            <option value="boiling">${getMethodName('boiling')}</option>
            <option value="baking">${getMethodName('baking')}</option>
            <option value="grilling">${getMethodName('grilling')}</option>
            <option value="steaming">${getMethodName('steaming')}</option>
            <option value="frying">${getMethodName('frying')}</option>
            <option value="roasting">${getMethodName('roasting')}</option>
        `;
    }
    
    // Update "Select products:" title
    const productsTitle = document.getElementById('productsFilterTitle');
    if (productsTitle) {
        productsTitle.textContent = trans.selectProducts;
    }
    
    // Update API search button
    const searchApiBtn = document.getElementById('searchApiBtn');
    if (searchApiBtn) {
        searchApiBtn.innerHTML = '🔍 ' + trans.searchApi;
    }
    
    // Update API section title
    const apiSearchSection = document.querySelector('#apiSearchSection h3');
    if (apiSearchSection) {
        apiSearchSection.textContent = trans.searchApiTitle;
    }
    
    // Update API search input placeholder
    const apiSearchInput = document.getElementById('apiSearchInput');
    if (apiSearchInput) {
        apiSearchInput.placeholder = trans.apiSearchPlaceholder;
    }
    
    // Update API search button (the one inside the API section)
    const apiSearchButton = document.querySelector('#apiSearchSection button.btn-primary');
    if (apiSearchButton) {
        apiSearchButton.textContent = trans.search;
    }
    
    // Update loading text
    const apiLoading = document.querySelector('#apiLoading p');
    if (apiLoading) {
        apiLoading.textContent = trans.loading;
    }
    
    // Re-render to apply translations
    renderRecipes();
    renderProducts();
}

// Widoki
function showView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');
}

// Renderowanie przepisów
function renderRecipes() {
    console.log('=== renderRecipes() wywołana ===');
    const container = document.getElementById('recipesList');
    if (!container) {
        console.error('❌ Element recipesList nie został znaleziony!');
        return;
    }
    console.log('✅ Element recipesList znaleziony');
    
    const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');
    console.log('📋 Ładowanie przepisów:', recipes.length);
    console.log('📋 Przepisy:', recipes);
    
    if (recipes.length === 0) {
        console.log('⚠️ Brak przepisów w localStorage');
        container.innerHTML = '<p style="text-align: center; padding: 20px; color: #666;">Brak przepisów do wyświetlenia. Dodaj przepis w Panelu Admin lub wyszukaj w API.</p>';
        return;
    }
    
    const searchInput = document.getElementById('searchInput');
    const timeFilter = document.getElementById('timeFilter');
    const methodFilter = document.getElementById('methodFilter');
    
    const search = searchInput ? searchInput.value.toLowerCase() : '';
    const maxTime = timeFilter ? (parseInt(timeFilter.value) || Infinity) : Infinity;
    const method = methodFilter ? methodFilter.value : '';
    
    console.log('🔍 Filtry:', { search, maxTime, method, selectedProducts });
    
    let filtered = recipes.filter(recipe => {
        const matchSearch = !search || recipe.title.toLowerCase().includes(search);
        const matchTime = recipe.cookingTime <= maxTime;
        const matchMethod = !method || recipe.cookingMethod === method;
        const matchProducts = selectedProducts.length === 0 || 
            selectedProducts.some(id => recipe.productIds && recipe.productIds.includes(id));
        return matchSearch && matchTime && matchMethod && matchProducts;
    });

    console.log('✅ Filtrowane przepisy:', filtered.length);
    console.log('✅ Filtrowane przepisy:', filtered);
    
    if (filtered.length === 0) {
        container.innerHTML = '<p style="text-align: center; padding: 20px; color: #666;">Brak przepisów spełniających kryteria wyszukiwania</p>';
        return;
    }

    try {
        const html = filtered.map(recipe => {
            try {
                return `
                    <div class="recipe-card" onclick="showRecipe(${recipe.id})">
                        ${recipe.image ? `<img src="${recipe.image}" style="width: 100%; border-radius: 10px; margin-bottom: 10px; max-height: 200px; object-fit: cover;" alt="${translateRecipeTitle(recipe.title)}" onerror="this.style.display='none'">` : ''}
                        <h3>${translateRecipeTitle(recipe.title) || 'Bez tytułu'}</h3>
                        <p>${t('cookingTime')}: ${recipe.cookingTime || 0} min</p>
                        <p>${t('method')}: ${getMethodName(recipe.cookingMethod || 'other')}</p>
                        ${recipe.source === 'api' || recipe.source === 'themealdb' ? '<p style="font-size: 0.8rem; color: #888;">📡 Z API</p>' : ''}
                    </div>
                `;
            } catch (error) {
                console.error('Błąd przy renderowaniu przepisu:', recipe, error);
                return '';
            }
        }).join('');
        
        container.innerHTML = html;
        console.log('✅ Przepisy wyrenderowane pomyślnie');
    } catch (error) {
        console.error('❌ Błąd przy renderowaniu przepisów:', error);
        container.innerHTML = '<p style="text-align: center; padding: 20px; color: red;">Błąd przy wyświetlaniu przepisów. Sprawdź konsolę.</p>';
    }
}

// Renderowanie produktów
function renderProducts() {
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    const container = document.getElementById('productsList');
    container.innerHTML = products.map(product => `
        <div class="product-chip ${selectedProducts.includes(product.id) ? 'selected' : ''}" 
             onclick="toggleProduct(${product.id})">
            ${translateProductName(product.name)}
        </div>
    `).join('');
}

function toggleProduct(id) {
    if (selectedProducts.includes(id)) {
        selectedProducts = selectedProducts.filter(pid => pid !== id);
    } else {
        selectedProducts.push(id);
    }
    renderProducts();
    renderRecipes();
}

function showRecipe(id) {
    currentRecipeId = id;
    const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');
    const recipe = recipes.find(r => r.id === id);
    
    if (!recipe) return;

    // Build steps HTML if available
    let stepsHTML = '';
    if (recipe.steps && Array.isArray(recipe.steps) && recipe.steps.length > 0) {
        stepsHTML = `
            <div class="recipe-steps" style="margin: 30px 0;">
                <h3 style="color: #333;">Kroki przygotowania</h3>
                ${recipe.steps.map((step, idx) => {
                    const stepDesc = (typeof step === 'object' && step.description) ? step.description : step;
                    const stepTime = (typeof step === 'object' && step.time) ? step.time : 0;
                    const hasTimerConfig = (typeof step === 'object' && step.timerConfig && step.timerConfig.timerEnabled);
                    
                    return `
                        <div style="background: #f8f9fa; padding: 15px; margin: 10px 0; border-radius: 10px; border-left: 4px solid #667eea;">
                            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 10px;">
                                <h4 style="margin: 0; color: #333;">Krok ${idx + 1}</h4>
                                ${hasTimerConfig ? '<span style="background: #667eea; color: white; padding: 3px 8px; border-radius: 4px; font-size: 0.8rem;">⏱️ Timer</span>' : ''}
                            </div>
                            <p style="margin: 10px 0; color: #555;">${stepDesc}</p>
                            ${stepTime > 0 ? `<p style="margin: 5px 0; font-size: 0.85rem; color: #888;">Czas: ${stepTime} minut</p>` : ''}
                            ${hasTimerConfig ? `
                                <p style="margin: 5px 0; font-size: 0.85rem; color: #667eea;">
                                    Timer skonfigurowany: ${Math.floor(step.timerConfig.finalTimeSeconds / 60)} min 
                                    ${step.timerConfig.finalTimeSeconds % 60 > 0 ? (step.timerConfig.finalTimeSeconds % 60) + ' sek' : ''}
                                </p>
                            ` : ''}
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    }

    const container = document.getElementById('recipeDetails');
    container.innerHTML = `
        ${recipe.source === 'api' || recipe.source === 'themealdb' ? `
            <div style="background: #e3f2fd; padding: 15px; border-radius: 10px; margin-bottom: 20px; border-left: 4px solid #2196f3;">
                <p style="margin: 0; color: #1976d2; font-size: 0.95rem;">
                    📡 <strong>Przepis z API</strong> - Instrukcje w języku angielskim
                </p>
            </div>
        ` : ''}
        ${recipe.image ? `<img src="${recipe.image}" style="width: 100%; max-width: 500px; border-radius: 15px; margin-bottom: 20px; box-shadow: 0 5px 15px rgba(0,0,0,0.1);" alt="${translateRecipeTitle(recipe.title)}" onerror="this.style.display='none'">` : ''}
        <h2 style="color: #333;">${translateRecipeTitle(recipe.title)}</h2>
        <div class="meta-info">
            <p style="color: #666;"><strong>${t('cookingTime')}:</strong> ${recipe.cookingTime} min</p>
            <p style="color: #666;"><strong>${t('method')}:</strong> ${getMethodName(recipe.cookingMethod)}</p>
            ${recipe.temperature ? `<p style="color: #666;"><strong>${t('temperature')}:</strong> ${recipe.temperature}°C</p>` : ''}
            ${recipe.restTime ? `<p style="color: #666;"><strong>${t('restTime')}:</strong> ${recipe.restTime} min</p>` : ''}
        </div>
        <div class="ingredients">
            <h3 style="color: #333;">${t('ingredients')}</h3>
            <ul>
                ${recipe.ingredients.map(ing => `<li style="color: #333;">${translateIngredient(ing)}</li>`).join('')}
            </ul>
        </div>
        <div class="instructions">
            <h3 style="color: #333;">${t('instructions')}</h3>
            <p style="color: #555; line-height: 1.8;">${translateInstructions(recipe.instructions)}</p>
        </div>
        ${stepsHTML}
        <button class="btn-primary" onclick="startTimer(${recipe.id})" style="margin-top: 30px; width: 100%;">
            ${t('startTimer')}
        </button>
    `;
    showView('recipeView');
}

let currentStepIndex = 0;
let recipeSteps = [];
let stepTimerRemaining = 0;

function startTimer(recipeId) {
    const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) return;

    currentRecipeId = recipeId;
    currentStepIndex = 0;
    timerPaused = false;
    
    // Parsuj kroki przygotowania
    recipeSteps = [];
    console.log('=== STARTING TIMER ===');
    console.log('Recipe ID:', recipeId);
    console.log('Recipe object:', recipe);
    console.log('Recipe.steps:', recipe.steps);
    console.log('Recipe.steps type:', typeof recipe.steps);
    console.log('Recipe.steps isArray:', Array.isArray(recipe.steps));
    
    // Sprawdź wszystkie możliwe miejsca gdzie mogą być kroki
    console.log('Checking recipe for steps...');
    console.log('recipe.steps:', recipe.steps);
    console.log('recipe.steps === null:', recipe.steps === null);
    console.log('recipe.steps === undefined:', recipe.steps === undefined);
    console.log('recipe.steps === []:', JSON.stringify(recipe.steps) === '[]');
    
    if (recipe.steps !== null && recipe.steps !== undefined) {
        if (Array.isArray(recipe.steps)) {
            if (recipe.steps.length > 0) {
                // Kroki są już w formacie tablicy
                recipeSteps = recipe.steps;
                console.log('✅ Loaded steps as array:', recipeSteps);
            } else {
                console.log('⚠️ Recipe.steps is empty array');
            }
        } else if (typeof recipe.steps === 'string' && recipe.steps.trim()) {
            // Parsuj kroki z formatu tekstowego
            console.log('Parsing steps from string:', recipe.steps);
            const lines = recipe.steps.split(/\r?\n/).filter(line => line.trim());
            console.log('Lines after split:', lines);
            recipeSteps = lines.map((line, idx) => {
                const parts = line.split('|').map(p => p.trim());
                console.log(`Line ${idx}: "${line}" -> parts:`, parts);
                if (parts.length >= 2) {
                    const description = parts[0];
                    const time = parseInt(parts[1]);
                    if (description && !isNaN(time) && time > 0) {
                        return { description, time };
                    }
                }
                return null;
            }).filter(step => step !== null && step !== undefined);
            console.log('✅ Parsed steps from string:', recipeSteps);
        } else {
            console.log('⚠️ Recipe.steps is not array or string:', recipe.steps);
        }
    } else {
        console.log('⚠️ Recipe.steps is null/undefined');
    }
    
    console.log('Final recipeSteps:', recipeSteps);
    console.log('Final recipeSteps length:', recipeSteps.length);
    
    // Jeśli są kroki, użyj pierwszego kroku, w przeciwnym razie użyj całkowitego czasu
    if (recipeSteps.length > 0) {
        stepTimerRemaining = recipeSteps[0].time * 60;
        timerRemaining = recipeSteps.reduce((sum, step) => sum + step.time, 0) * 60;
    } else {
        timerRemaining = recipe.cookingTime * 60;
        stepTimerRemaining = timerRemaining;
    }

    renderTimerDisplay();
    showView('timerView');
}

function renderTimerDisplay() {
    const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');
    const recipe = recipes.find(r => r.id === currentRecipeId);
    if (!recipe) {
        console.error('Recipe not found for ID:', currentRecipeId);
        return;
    }

    console.log('=== RENDERING TIMER ===');
    console.log('Recipe:', recipe);
    console.log('Recipe.steps from storage:', recipe.steps);
    console.log('recipeSteps variable:', recipeSteps);
    console.log('recipeSteps type:', typeof recipeSteps, 'isArray:', Array.isArray(recipeSteps));
    console.log('recipeSteps length:', recipeSteps ? recipeSteps.length : 0);
    console.log('Current step index:', currentStepIndex);
    
    const totalSteps = recipeSteps && Array.isArray(recipeSteps) ? recipeSteps.length : 0;
    const currentStep = totalSteps > 0 && currentStepIndex >= 0 && currentStepIndex < totalSteps
        ? recipeSteps[currentStepIndex] 
        : null;
    
    console.log('Total steps:', totalSteps);
    console.log('Current step:', currentStep);
    console.log('Step timer remaining:', stepTimerRemaining);
    
    const container = document.getElementById('timerDisplay');
    if (!container) {
        console.error('Timer display container not found!');
        return;
    }
    
    // Build step timer sections HTML
    let stepTimersHTML = '';
    if (totalSteps > 0 && recipeSteps) {
        stepTimersHTML = recipeSteps.map((step, idx) => {
            const stepDesc = (step && typeof step === 'object' && step.description) ? step.description : (step || `Krok ${idx + 1}`);
            const stepTime = (step && typeof step === 'object' && step.time) ? step.time : 0;
            const stepConfig = (step && typeof step === 'object' && step.timerConfig) ? step.timerConfig : null;
            
            const isActive = idx === currentStepIndex;
            const isCompleted = idx < currentStepIndex;
            
            // Initialize step timer state if it has config
            if (stepConfig && stepConfig.timerEnabled && !stepTimerStates[idx]) {
                stepTimerStates[idx] = {
                    initial: stepConfig.finalTimeSeconds,
                    remaining: stepConfig.finalTimeSeconds,
                    paused: false
                };
            }
            
            const hasTimer = stepConfig && stepConfig.timerEnabled;
            const timerState = stepTimerStates[idx];
            
            return `
                <div class="step-timer-section" style="opacity: ${isActive ? '1' : '0.7'}; ${isCompleted ? 'background: #e8f5e9;' : ''}">
                    <div class="step-timer-header">
                        <h4>
                            ${isCompleted ? '✓' : ''} Krok ${idx + 1}${isActive ? ' (Aktywny)' : ''}
                        </h4>
                    </div>
                    <p style="margin: 10px 0; color: #555;">${stepDesc}</p>
                    ${stepTime > 0 ? `<p style="margin: 5px 0; font-size: 0.85rem; color: #888;">Czas w przepisie: ${stepTime} min</p>` : ''}
                    
                    ${hasTimer ? `
                        <div class="step-timer-time-display" id="stepTimer-${idx}-time">
                            ${formatTime(timerState ? timerState.remaining : stepConfig.finalTimeSeconds)}
                        </div>
                        <div class="step-timer-progress">
                            <div class="step-timer-progress-bar" id="stepTimer-${idx}-progress" style="width: 0%"></div>
                        </div>
                        <div class="step-timer-source">
                            <span class="badge">
                                ${stepConfig.timeSource === 'recipe' ? 'Czas z przepisu' : 
                                  stepConfig.timeSource === 'recommended' ? 'Zalecany' : 'Ręczny'}
                            </span>
                        </div>
                        <div class="step-timer-controls">
                            <button class="btn-timer-action btn-timer-start" id="stepTimer-${idx}-start" 
                                onclick="startStepTimer(${currentRecipeId}, ${idx})">
                                Start
                            </button>
                            <button class="btn-timer-action btn-timer-pause" id="stepTimer-${idx}-pause" 
                                style="display: none;" onclick="pauseStepTimer(${idx})">
                                Pauza
                            </button>
                            <button class="btn-timer-action btn-timer-pause" id="stepTimer-${idx}-resume" 
                                style="display: none;" onclick="resumeStepTimer(${idx})">
                                Wznów
                            </button>
                            <button class="btn-timer-action btn-timer-reset" 
                                onclick="resetStepTimer(${currentRecipeId}, ${idx})">
                                Reset
                            </button>
                            <button class="btn-timer-action btn-timer-configure" 
                                onclick="openStepTimerConfigModal(${currentRecipeId}, ${idx})">
                                Konfiguruj
                            </button>
                        </div>
                    ` : `
                        <div style="text-align: center; margin: 15px 0;">
                            <button class="step-enable-timer" onclick="enableStepTimer(${currentRecipeId}, ${idx})">
                                ⏱️ Włącz Timer dla tego kroku
                            </button>
                        </div>
                    `}
                </div>
            `;
        }).join('');
    }
    
    container.innerHTML = `
        <div class="timer-display">
            <h2>${recipe.title}</h2>
            
            ${totalSteps > 0 ? `
                <div style="margin: 20px 0;">
                    <h3 style="color: #333; margin-bottom: 15px;">Timery kroków przygotowania</h3>
                    ${stepTimersHTML}
                </div>
                
                <div style="margin: 30px 0; padding: 20px; background: #f8f9fa; border-radius: 10px;">
                    <h4 style="margin: 0 0 10px 0; color: #333;">Postęp przepisu: ${currentStepIndex + 1}/${totalSteps} kroków</h4>
                    <div class="timer-step-progress-dots">
                        ${recipeSteps.map((step, idx) => {
                            const stepDesc = (step && typeof step === 'object' && step.description) ? step.description : (step || `Krok ${idx + 1}`);
                            return `
                            <div class="timer-step-dot ${idx < currentStepIndex ? 'completed' : idx === currentStepIndex ? 'active' : 'pending'}"
                                 title="${stepDesc}">
                                ${idx + 1}
                            </div>
                        `;
                        }).join('')}
                    </div>
                </div>
            ` : `
                <div style="text-align: center; margin: 30px 0;">
                    <p style="color: #666;">Ten przepis nie ma zdefiniowanych kroków z timerami.</p>
                    <p style="color: #888; font-size: 0.9rem; margin-top: 10px;">Możesz dodać kroki w Panelu Admin podczas edycji przepisu.</p>
                </div>
            `}
            
            <div style="margin-top: 30px;">
                <h3 style="color: #333; margin-bottom: 15px;">Timer całego przepisu</h3>
                <div class="timer-time" id="timerTime">${formatTime(timerRemaining)}</div>
                <p style="color: #666; margin: 10px 0;">Całkowity czas gotowania: ${recipe.cookingTime} min</p>
                <div class="timer-progress">
                    <div class="timer-progress-bar" id="timerProgress" style="width: 100%"></div>
                </div>
                <div class="timer-controls">
                    <button class="btn-primary" id="timerStartBtn" onclick="timerStart()">${t('start')}</button>
                    <button class="btn-secondary" id="timerPauseBtn" onclick="timerPause()" style="display: none;">${t('pause')}</button>
                    <button class="btn-secondary" id="timerResumeBtn" onclick="timerResume()" style="display: none;">${t('resume')}</button>
                    <button class="btn-secondary" id="timerStopBtn" onclick="timerStop()" style="display: none;">${t('stop')}</button>
                </div>
            </div>
        </div>
    `;
}

function timerStart() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    timerPaused = false;
    
    const startBtn = document.getElementById('timerStartBtn');
    const pauseBtn = document.getElementById('timerPauseBtn');
    const resumeBtn = document.getElementById('timerResumeBtn');
    const stopBtn = document.getElementById('timerStopBtn');
    
    if (startBtn) startBtn.style.display = 'none';
    if (pauseBtn) pauseBtn.style.display = 'inline-block';
    if (resumeBtn) resumeBtn.style.display = 'none';
    if (stopBtn) stopBtn.style.display = 'inline-block';
    
    timerInterval = setInterval(() => {
        if (!timerPaused) {
            if (stepTimerRemaining > 0) {
                stepTimerRemaining--;
            }
            if (timerRemaining > 0) {
                timerRemaining--;
            }
            updateTimerDisplay();
            
            // Sprawdź czy krok się zakończył
            if (stepTimerRemaining <= 0 && recipeSteps.length > 0 && currentStepIndex < recipeSteps.length) {
                clearInterval(timerInterval);
                stepComplete();
                return;
            }
            
            // Sprawdź czy całe gotowanie się zakończyło
            if (timerRemaining <= 0) {
                clearInterval(timerInterval);
                timerInterval = null;
                timerComplete();
                return;
            }
        }
    }, 1000);

    // Prośba o powiadomienia
    if ('Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission();
    }
}

function stepComplete() {
    // Powiadomienie o zakończeniu kroku
    if ('Notification' in window && Notification.permission === 'granted' && recipeSteps[currentStepIndex]) {
        const currentStep = recipeSteps[currentStepIndex];
        new Notification(`Krok ${currentStepIndex + 1} zakończony!`, {
            body: currentStep.description,
            icon: '🍳'
        });
    }
    
    // Przejdź do następnego kroku
    currentStepIndex++;
    
    if (currentStepIndex < recipeSteps.length) {
        stepTimerRemaining = recipeSteps[currentStepIndex].time * 60;
        renderTimerDisplay();
        
        // Automatycznie wznów timer dla następnego kroku
        if (!timerPaused) {
            timerStart();
        }
    } else {
        // Wszystkie kroki zakończone
        timerComplete();
    }
}

function timerPause() {
    timerPaused = true;
    document.getElementById('timerPauseBtn').style.display = 'none';
    document.getElementById('timerResumeBtn').style.display = 'inline-block';
}

function timerResume() {
    timerPaused = false;
    document.getElementById('timerPauseBtn').style.display = 'inline-block';
    document.getElementById('timerResumeBtn').style.display = 'none';
}

function timerStop() {
    stopTimer();
    showView('recipeView');
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    timerPaused = false;
    currentStepIndex = 0;
    recipeSteps = [];
    stepTimerRemaining = 0;
    
    // Clear all step timers
    Object.keys(stepTimerIntervals).forEach(key => {
        clearInterval(stepTimerIntervals[key]);
    });
    stepTimerIntervals = {};
    stepTimerStates = {};
}

function updateTimerDisplay() {
    const timeEl = document.getElementById('timerTime');
    const progressEl = document.getElementById('timerProgress');
    
    if (timeEl) {
        // Pokaż czas dla aktualnego kroku, jeśli są kroki
        const displayTime = recipeSteps.length > 0 && currentStepIndex < recipeSteps.length 
            ? Math.max(0, stepTimerRemaining) 
            : Math.max(0, timerRemaining);
        timeEl.textContent = formatTime(displayTime);
    }
    
    if (progressEl) {
        const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');
        const recipe = recipes.find(r => r.id === currentRecipeId);
        if (recipe) {
            let total, remaining;
            
            if (recipeSteps.length > 0 && currentStepIndex < recipeSteps.length) {
                // Postęp dla aktualnego kroku
                const currentStep = recipeSteps[currentStepIndex];
                if (currentStep) {
                    total = currentStep.time * 60;
                    remaining = Math.max(0, stepTimerRemaining);
                } else {
                    total = recipe.cookingTime * 60;
                    remaining = Math.max(0, timerRemaining);
                }
            } else {
                // Postęp dla całego przepisu
                total = recipe.cookingTime * 60;
                remaining = Math.max(0, timerRemaining);
            }
            
            const progress = total > 0 ? Math.max(0, Math.min(100, ((total - remaining) / total) * 100)) : 0;
            progressEl.style.width = progress + '%';
        }
    }
}

function timerComplete() {
    stopTimer();
    if ('Notification' in window && Notification.permission === 'granted') {
        new Notification(t('completed'), {
            body: recipeSteps.length > 0 ? 'Wszystkie kroki zakończone!' : t('completed'),
            icon: '🍳',
            requireInteraction: true
        });
    }
    alert(recipeSteps.length > 0 ? 'Wszystkie kroki przygotowania zakończone! 🎉' : t('completed'));
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Admin
function handleAdminLogin() {
    const username = document.getElementById('adminUsername').value;
    const password = document.getElementById('adminPassword').value;
    const admin = JSON.parse(localStorage.getItem('admin') || '{}');
    
    if (admin.username === username && admin.password === password) {
        localStorage.setItem('adminLoggedIn', 'true');
        document.getElementById('adminLogin').style.display = 'none';
        document.getElementById('adminPanel').style.display = 'block';
        renderAdminRecipes();
        renderAdminProducts();
    } else {
        document.getElementById('loginError').textContent = 'Nieprawidłowe dane logowania';
        document.getElementById('loginError').classList.add('show');
    }
}

function handleAdminLogout() {
    localStorage.removeItem('adminLoggedIn');
    document.getElementById('adminLogin').style.display = 'block';
    document.getElementById('adminPanel').style.display = 'none';
    document.getElementById('adminUsername').value = '';
    document.getElementById('adminPassword').value = '';
}

// Funkcje pomocnicze
function t(key) {
    return translations[currentLanguage][key] || key;
}

function getMethodName(method) {
    const methods = {
        pl: { 
            boiling: 'Gotowanie', 
            baking: 'Pieczenie', 
            grilling: 'Grillowanie', 
            steaming: 'Gotowanie na parze', 
            frying: 'Smażenie', 
            roasting: 'Pieczenie w piekarniku',
            other: 'Inne'
        },
        en: { 
            boiling: 'Boiling', 
            baking: 'Baking', 
            grilling: 'Grilling', 
            steaming: 'Steaming', 
            frying: 'Frying', 
            roasting: 'Roasting',
            other: 'Other'
        },
        de: { 
            boiling: 'Kochen', 
            baking: 'Backen', 
            grilling: 'Grillen', 
            steaming: 'Dämpfen', 
            frying: 'Braten', 
            roasting: 'Rösten',
            other: 'Andere'
        }
    };
    return methods[currentLanguage][method] || method;
}

// Admin - renderowanie przepisów
function renderAdminRecipes() {
    const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');
    const container = document.getElementById('adminRecipesList');
    container.innerHTML = recipes.map(recipe => `
        <div class="admin-item">
            <div class="admin-item-info">
                <h4>${recipe.title}</h4>
                <p>Czas: ${recipe.cookingTime} min | Metoda: ${getMethodName(recipe.cookingMethod)}</p>
            </div>
            <div class="admin-item-actions">
                <button class="btn-edit" onclick="editRecipe(${recipe.id})">${t('edit')}</button>
                <button class="btn-delete" onclick="deleteRecipe(${recipe.id})">${t('delete')}</button>
            </div>
        </div>
    `).join('');
}

// Admin - renderowanie produktów
function renderAdminProducts() {
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    const container = document.getElementById('adminProductsList');
    container.innerHTML = products.map(product => `
        <div class="admin-item">
            <div class="admin-item-info">
                <h4>${product.name}</h4>
                <p>Kategoria: ${product.category}</p>
            </div>
            <div class="admin-item-actions">
                <button class="btn-edit" onclick="editProduct(${product.id})">${t('edit')}</button>
                <button class="btn-delete" onclick="deleteProduct(${product.id})">${t('delete')}</button>
            </div>
        </div>
    `).join('');
}

// Admin - otwórz modal przepisu
function openRecipeModal(recipeId = null) {
    editingRecipeId = recipeId;
    const modal = document.getElementById('recipeModal');
    const form = document.getElementById('recipeForm');
    
    if (recipeId) {
        const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');
        const recipe = recipes.find(r => r.id === recipeId);
        if (recipe) {
            document.getElementById('modalTitle').textContent = t('edit') + ' ' + t('recipes');
            document.getElementById('recipeTitle').value = recipe.title;
            document.getElementById('recipeIngredients').value = Array.isArray(recipe.ingredients) 
                ? recipe.ingredients.join(', ') 
                : recipe.ingredients;
            document.getElementById('recipeInstructions').value = recipe.instructions;
            document.getElementById('recipeCookingTime').value = recipe.cookingTime;
            document.getElementById('recipeMethod').value = recipe.cookingMethod;
            document.getElementById('recipeTemperature').value = recipe.temperature || '';
            document.getElementById('recipeRestTime').value = recipe.restTime || '';
            
            // Załaduj kroki przygotowania
            const stepsField = document.getElementById('recipeSteps');
            if (stepsField) {
                if (recipe.steps && Array.isArray(recipe.steps) && recipe.steps.length > 0) {
                    const stepsText = recipe.steps.map(step => 
                        `${step.description}|${step.time}`
                    ).join('\n');
                    stepsField.value = stepsText;
                } else {
                    stepsField.value = '';
                }
            }
        }
    } else {
        document.getElementById('modalTitle').textContent = t('addRecipe');
        form.reset();
    }
    
    modal.classList.add('show');
}

// Admin - zamknij modal przepisu
function closeRecipeModal() {
    document.getElementById('recipeModal').classList.remove('show');
    editingRecipeId = null;
}

// Admin - zapisz przepis
function handleRecipeSubmit(e) {
    e.preventDefault();
    const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');
    
    // Parsuj kroki przygotowania
    const stepsField = document.getElementById('recipeSteps');
    let steps = [];
    if (stepsField && stepsField.value) {
        const stepsText = stepsField.value.trim();
        if (stepsText) {
            const lines = stepsText.split(/\r?\n/).filter(line => line.trim());
            console.log('Parsing steps from text:', lines); // Debug
            steps = lines.map((line, index) => {
                // Usuń wszystkie białe znaki i podziel na części
                const trimmedLine = line.trim();
                if (!trimmedLine) return null;
                
                const parts = trimmedLine.split('|').map(p => p.trim());
                console.log(`Line ${index}: "${trimmedLine}" -> Parts:`, parts); // Debug
                
                if (parts.length < 2) {
                    console.log(`Line ${index} skipped - missing separator`); // Debug
                    return null;
                }
                
                const description = parts[0] || '';
                const timeStr = parts[1] || '';
                const time = parseInt(timeStr);
                
                console.log(`Parsed: description="${description}", time=${time}`); // Debug
                
                if (description && !isNaN(time) && time > 0) {
                    return { description, time };
                } else {
                    console.log(`Line ${index} skipped - invalid data`); // Debug
                }
                return null;
            }).filter(step => step !== null && step !== undefined);
            console.log('Final parsed steps:', steps); // Debug
        }
    }
    
    const recipeData = {
        title: document.getElementById('recipeTitle').value,
        ingredients: document.getElementById('recipeIngredients').value.split(',').map(i => i.trim()),
        instructions: document.getElementById('recipeInstructions').value,
        cookingTime: parseInt(document.getElementById('recipeCookingTime').value),
        cookingMethod: document.getElementById('recipeMethod').value,
        temperature: document.getElementById('recipeTemperature').value ? parseInt(document.getElementById('recipeTemperature').value) : null,
        restTime: document.getElementById('recipeRestTime').value ? parseInt(document.getElementById('recipeRestTime').value) : null,
        productIds: []
    };
    
    // Zawsze zapisz kroki, nawet jeśli puste (ale jako tablica)
    if (steps.length > 0) {
        recipeData.steps = steps;
        console.log('✅ Steps will be saved:', steps);
    } else {
        // Zapisuj pustą tablicę, żeby było wiadomo że pole istnieje
        recipeData.steps = [];
        console.log('⚠️ No steps to save - saving empty array');
    }

    if (editingRecipeId) {
        const index = recipes.findIndex(r => r.id === editingRecipeId);
        if (index !== -1) {
            recipes[index] = { ...recipes[index], ...recipeData };
        }
    } else {
        const newId = recipes.length > 0 ? Math.max(...recipes.map(r => r.id)) + 1 : 1;
        recipes.push({ ...recipeData, id: newId });
    }

    console.log('=== SAVING RECIPE ===');
    console.log('Steps array before save:', steps);
    console.log('Steps length:', steps.length);
    console.log('RecipeData.steps:', recipeData.steps);
    console.log('RecipeData.steps type:', typeof recipeData.steps);
    console.log('RecipeData.steps isArray:', Array.isArray(recipeData.steps));
    
    localStorage.setItem('recipes', JSON.stringify(recipes));
    
    // Sprawdź czy kroki zostały zapisane
    const savedRecipes = JSON.parse(localStorage.getItem('recipes') || '[]');
    const savedRecipe = savedRecipes.find(r => r.id === (editingRecipeId || savedRecipes[savedRecipes.length - 1].id));
    console.log('✅ Saved recipe ID:', savedRecipe?.id);
    console.log('✅ Saved recipe title:', savedRecipe?.title);
    console.log('✅ Saved recipe.steps:', savedRecipe?.steps);
    console.log('✅ Saved recipe.steps type:', typeof savedRecipe?.steps);
    console.log('✅ Saved recipe.steps isArray:', Array.isArray(savedRecipe?.steps));
    console.log('✅ Saved recipe.steps length:', savedRecipe?.steps?.length || 0);
    console.log('Full saved recipe:', JSON.stringify(savedRecipe, null, 2));
    
    closeRecipeModal();
    renderAdminRecipes();
    renderRecipes();
}

// Admin - edytuj przepis
function editRecipe(id) {
    openRecipeModal(id);
}

// Admin - usuń przepis
function deleteRecipe(id) {
    if (confirm('Czy na pewno chcesz usunąć ten przepis?')) {
        const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');
        const filtered = recipes.filter(r => r.id !== id);
        localStorage.setItem('recipes', JSON.stringify(filtered));
        renderAdminRecipes();
        renderRecipes();
    }
}

// Admin - otwórz modal produktu
function openProductModal(productId = null) {
    editingProductId = productId;
    const modal = document.getElementById('productModal');
    const form = document.getElementById('productForm');
    
    if (productId) {
        const products = JSON.parse(localStorage.getItem('products') || '[]');
        const product = products.find(p => p.id === productId);
        if (product) {
            document.getElementById('productModalTitle').textContent = t('edit') + ' ' + t('products');
            document.getElementById('productName').value = product.name;
            document.getElementById('productCategory').value = product.category;
        }
    } else {
        document.getElementById('productModalTitle').textContent = t('addProduct');
        form.reset();
    }
    
    modal.classList.add('show');
}

// Admin - zamknij modal produktu
function closeProductModal() {
    document.getElementById('productModal').classList.remove('show');
    editingProductId = null;
}

// Admin - zapisz produkt
function handleProductSubmit(e) {
    e.preventDefault();
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    const productData = {
        name: document.getElementById('productName').value,
        category: document.getElementById('productCategory').value
    };

    if (editingProductId) {
        const index = products.findIndex(p => p.id === editingProductId);
        if (index !== -1) {
            products[index] = { ...products[index], ...productData };
        }
    } else {
        const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
        products.push({ ...productData, id: newId });
    }

    localStorage.setItem('products', JSON.stringify(products));
    closeProductModal();
    renderAdminProducts();
    renderProducts();
}

// Admin - edytuj produkt
function editProduct(id) {
    openProductModal(id);
}

// Admin - usuń produkt
function deleteProduct(id) {
    if (confirm('Czy na pewno chcesz usunąć ten produkt?')) {
        const products = JSON.parse(localStorage.getItem('products') || '[]');
        const filtered = products.filter(p => p.id !== id);
        localStorage.setItem('products', JSON.stringify(filtered));
        renderAdminProducts();
        renderProducts();
    }
}

// Tabs w panelu admin
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const tab = btn.dataset.tab;
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.admin-tab-content').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(`admin${tab.charAt(0).toUpperCase() + tab.slice(1)}Tab`).classList.add('active');
    });
});

// Funkcje API - tylko TheMealDB

// Sprawdź czy admin jest zalogowany
if (localStorage.getItem('adminLoggedIn') === 'true') {
    document.getElementById('adminLogin').style.display = 'none';
    document.getElementById('adminPanel').style.display = 'block';
    renderAdminRecipes();
    renderAdminProducts();
}

// Funkcje API - tylko TheMealDB
async function searchRecipesFromAPI() {
    const query = document.getElementById('apiSearchInput').value.trim();
    
    if (!query) {
        alert('Wpisz nazwę przepisu do wyszukania');
        return;
    }

    const loadingEl = document.getElementById('apiLoading');
    const resultsEl = document.getElementById('apiResults');
    
    loadingEl.style.display = 'block';
    resultsEl.innerHTML = '';

    try {
        // Używamy tylko TheMealDB
        const recipes = await searchTheMealDB(query);

        loadingEl.style.display = 'none';
        
        if (recipes.length === 0) {
            resultsEl.innerHTML = `<p style="text-align: center; padding: 20px;">${t('noResults')}</p>`;
            apiSearchResults = [];
            return;
        }

        // Zapisz wyniki do globalnej zmiennej
        apiSearchResults = recipes;

        resultsEl.innerHTML = recipes.map((recipe, index) => `
            <div class="recipe-card">
                <h3>${recipe.title}</h3>
                ${recipe.image ? `<img src="${recipe.image}" style="width: 100%; border-radius: 10px; margin: 10px 0;" alt="${recipe.title}" onerror="this.style.display='none'">` : ''}
                ${recipe.cookingTime ? `<p>${t('cookingTime')}: ${recipe.cookingTime} min</p>` : ''}
                ${recipe.ingredients && recipe.ingredients.length > 0 ? `<p><strong>${t('ingredients')}:</strong> ${recipe.ingredients.slice(0, 3).join(', ')}${recipe.ingredients.length > 3 ? '...' : ''}</p>` : ''}
                <button class="btn-primary" onclick="addRecipeFromAPIById(${index})" style="margin-top: 10px; width: 100%;">
                    ${t('addRecipe')}
                </button>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error searching API:', error);
        loadingEl.style.display = 'none';
        resultsEl.innerHTML = `<p style="text-align: center; padding: 20px; color: red;">Błąd podczas wyszukiwania: ${error.message}</p>`;
    }
}

// Słownik tłumaczeń polskich nazw potraw na angielskie
const polishToEnglishTranslations = {
    // Popularne polskie potrawy
    'schabowy': 'pork cutlet',
    'kotlet schabowy': 'pork cutlet',
    'bigos': 'hunter stew',
    'pierogi': 'pierogi',
    'pierogów': 'pierogi',
    'pierogami': 'pierogi',
    'gołąbki': 'stuffed cabbage',
    'gołąbków': 'stuffed cabbage',
    'barszcz': 'borscht',
    'barszczu': 'borscht',
    'żurek': 'sour rye soup',
    'żurku': 'sour rye soup',
    'flaki': 'tripe soup',
    'flaków': 'tripe soup',
    'krokiety': 'croquettes',
    'krokietów': 'croquettes',
    'krokiety': 'croquettes',
    'placki ziemniaczane': 'potato pancakes',
    'placków ziemniaczanych': 'potato pancakes',
    'zrazy': 'roulade',
    'zrazów': 'roulade',
    'gulasz': 'goulash',
    'gulaszu': 'goulash',
    'kaczka': 'duck',
    'kaczki': 'duck',
    'kaczką': 'duck',
    'indyk': 'turkey',
    'indyka': 'turkey',
    'indykiem': 'turkey',
    'łosoś': 'salmon',
    'łososia': 'salmon',
    'łososiem': 'salmon',
    'tuńczyk': 'tuna',
    'tuńczyka': 'tuna',
    'tuńczykiem': 'tuna',
    'krewetki': 'shrimp',
    'krewetek': 'shrimp',
    'krewetkami': 'shrimp',
    'krewetka': 'shrimp',
    'krewetką': 'shrimp',
    
    // Składniki podstawowe
    'kurczak': 'chicken',
    'kurczaka': 'chicken',
    'kurczakiem': 'chicken',
    'makaron': 'pasta',
    'makaronu': 'pasta',
    'makaronem': 'pasta',
    'pasta': 'pasta',
    'pasty': 'pasta',
    'pomidor': 'tomato',
    'pomidora': 'tomato',
    'pomidorem': 'tomato',
    'pomidory': 'tomatoes',
    'pomidorów': 'tomatoes',
    'pomidorami': 'tomatoes',
    'ser': 'cheese',
    'sera': 'cheese',
    'serem': 'cheese',
    'sery': 'cheese',
    'ciasto': 'cake',
    'ciasta': 'cake',
    'ciastem': 'cake',
    'ciastka': 'cookies',
    'ciastek': 'cookies',
    'ciastkami': 'cookies',
    'zupa': 'soup',
    'zupy': 'soup',
    'zupą': 'soup',
    'zupy': 'soups',
    'ryba': 'fish',
    'ryby': 'fish',
    'rybą': 'fish',
    'ryb': 'fish',
    'rybami': 'fish',
    'mięso': 'meat',
    'mięsa': 'meat',
    'mięsem': 'meat',
    'wołowina': 'beef',
    'wołowiny': 'beef',
    'wołowiną': 'beef',
    'wieprzowina': 'pork',
    'wieprzowiny': 'pork',
    'wieprzowiną': 'pork',
    'ryż': 'rice',
    'ryżu': 'rice',
    'ryżem': 'rice',
    'ziemniaki': 'potatoes',
    'ziemniaków': 'potatoes',
    'ziemniakami': 'potatoes',
    'ziemniak': 'potato',
    'ziemniaka': 'potato',
    'ziemniakiem': 'potato',
    'sałatka': 'salad',
    'sałatki': 'salad',
    'sałatką': 'salad',
    'sałatki': 'salads',
    'pizza': 'pizza',
    'pizzy': 'pizza',
    'pizzą': 'pizza',
    'pizze': 'pizzas',
    'chleb': 'bread',
    'chleba': 'bread',
    'chlebem': 'bread',
    'jajka': 'eggs',
    'jajek': 'eggs',
    'jajkami': 'eggs',
    'jajko': 'egg',
    'jajkiem': 'egg',
    
    // Dodatkowe składniki
    'marchew': 'carrot',
    'marchewki': 'carrot',
    'marchewką': 'carrot',
    'marchewki': 'carrots',
    'kapusta': 'cabbage',
    'kapusty': 'cabbage',
    'kapustą': 'cabbage',
    'brokuły': 'broccoli',
    'brokułów': 'broccoli',
    'brokułami': 'broccoli',
    'kalafior': 'cauliflower',
    'kalafiora': 'cauliflower',
    'kalafiorem': 'cauliflower',
    'szpinak': 'spinach',
    'szpinaku': 'spinach',
    'szpinakiem': 'spinach',
    'papryka': 'pepper',
    'papryki': 'pepper',
    'papryką': 'pepper',
    'papryki': 'peppers',
    'ogórek': 'cucumber',
    'ogórka': 'cucumber',
    'ogórkiem': 'cucumber',
    'ogórki': 'cucumbers',
    'ogórków': 'cucumbers',
    'ogórkami': 'cucumbers',
    'cukinia': 'zucchini',
    'cukinii': 'zucchini',
    'cukinią': 'zucchini',
    'bakłażan': 'eggplant',
    'bakłażana': 'eggplant',
    'bakłażanem': 'eggplant',
    'grzyby': 'mushrooms',
    'grzybów': 'mushrooms',
    'grzybami': 'mushrooms',
    'grzyb': 'mushroom',
    'grzyba': 'mushroom',
    'grzybem': 'mushroom',
    'fasola': 'beans',
    'fasoli': 'beans',
    'fasolą': 'beans',
    'groch': 'peas',
    'grochu': 'peas',
    'grochem': 'peas',
    'soczewica': 'lentils',
    'soczewicy': 'lentils',
    'soczewicą': 'lentils',
    'kasza': 'groats',
    'kaszy': 'groats',
    'kaszą': 'groats',
    'kasze': 'groats',
    'kaszek': 'groats',
    'kaszą': 'groats',
    'mąka': 'flour',
    'mąki': 'flour',
    'mąką': 'flour',
    'cukier': 'sugar',
    'cukru': 'sugar',
    'cukrem': 'sugar',
    'masło': 'butter',
    'masła': 'butter',
    'masłem': 'butter',
    'mleko': 'milk',
    'mleka': 'milk',
    'mlekiem': 'milk',
    'śmietana': 'cream',
    'śmietany': 'cream',
    'śmietaną': 'cream',
    'jogurt': 'yogurt',
    'jogurtu': 'yogurt',
    'jogurtem': 'yogurt',
    'jogurty': 'yogurt',
    'jogurtów': 'yogurt',
    'jogurtami': 'yogurt',
    'majonez': 'mayonnaise',
    'majonezu': 'mayonnaise',
    'majonezem': 'mayonnaise',
    'ketchup': 'ketchup',
    'ketchupu': 'ketchup',
    'ketchupem': 'ketchup',
    'musztarda': 'mustard',
    'musztardy': 'mustard',
    'musztardą': 'mustard',
    'ocet': 'vinegar',
    'octu': 'vinegar',
    'octem': 'vinegar',
    'olej': 'oil',
    'oleju': 'oil',
    'olejem': 'oil',
    'oliwa': 'olive oil',
    'oliwy': 'olive oil',
    'oliwą': 'olive oil',
    'czosnek': 'garlic',
    'czosnku': 'garlic',
    'czosnkiem': 'garlic',
    'imbir': 'ginger',
    'imbiru': 'ginger',
    'imbirem': 'ginger',
    'bazylia': 'basil',
    'bazylii': 'basil',
    'bazylią': 'basil',
    'oregano': 'oregano',
    'rozmaryn': 'rosemary',
    'rozmarynu': 'rosemary',
    'rozmarynem': 'rosemary',
    'tymianek': 'thyme',
    'tymianku': 'thyme',
    'tymiankiem': 'thyme',
    'pietruszka': 'parsley',
    'pietruszki': 'parsley',
    'pietruszką': 'parsley',
    'koperek': 'dill',
    'koperku': 'dill',
    'koperkiem': 'dill',
    'szczypiorek': 'chives',
    'szczypiorku': 'chives',
    'szczypiorkiem': 'chives',
    
    // Sposoby przygotowania
    'smażony': 'fried',
    'smażona': 'fried',
    'smażone': 'fried',
    'smażonego': 'fried',
    'smażoną': 'fried',
    'smażonym': 'fried',
    'pieczony': 'baked',
    'pieczona': 'baked',
    'pieczone': 'baked',
    'pieczonego': 'baked',
    'pieczoną': 'baked',
    'pieczonym': 'baked',
    'gotowany': 'boiled',
    'gotowana': 'boiled',
    'gotowane': 'boiled',
    'gotowanego': 'boiled',
    'gotowaną': 'boiled',
    'gotowanym': 'boiled',
    'duszony': 'stewed',
    'duszona': 'stewed',
    'duszone': 'stewed',
    'duszonego': 'stewed',
    'duszoną': 'stewed',
    'duszonym': 'stewed',
    'grillowany': 'grilled',
    'grillowana': 'grilled',
    'grillowane': 'grilled',
    'grillowanego': 'grilled',
    'grillowaną': 'grilled',
    'grillowanym': 'grilled'
};

// Tłumacz polskie zapytanie na angielskie
function translatePolishToEnglish(query) {
    const lowerQuery = query.toLowerCase().trim();
    let translatedQuery = lowerQuery;
    
    // Najpierw sprawdź pełne frazy (najdłuższe dopasowania)
    const sortedTranslations = Object.entries(polishToEnglishTranslations)
        .sort((a, b) => b[0].length - a[0].length);
    
    // Zamień wszystkie polskie słowa na angielskie
    for (const [polish, english] of sortedTranslations) {
        // Użyj wyrażenia regularnego z granicami słów, aby uniknąć częściowych dopasowań
        const regex = new RegExp(`\\b${polish.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
        if (regex.test(translatedQuery)) {
            translatedQuery = translatedQuery.replace(regex, english);
        }
    }
    
    // Jeśli nic się nie zmieniło, spróbuj przetłumaczyć słowo po słowie
    if (translatedQuery === lowerQuery) {
        const words = lowerQuery.split(/\s+/);
        const translatedWords = words.map(word => {
            // Usuń znaki interpunkcyjne na końcu
            const cleanWord = word.replace(/[.,!?;:]+$/, '');
            const punctuation = word.replace(cleanWord, '');
            const translation = polishToEnglishTranslations[cleanWord] || cleanWord;
            return translation + punctuation;
        });
        translatedQuery = translatedWords.join(' ');
    }
    
    return translatedQuery.trim();
}

// TheMealDB API (darmowe, bez klucza) - z obsługą polskich zapytań
async function searchTheMealDB(query) {
    try {
        // Zawsze spróbuj przetłumaczyć zapytanie (nawet jeśli nie ma polskich znaków)
        // Może to być polskie słowo zapisane bez polskich znaków lub popularna polska nazwa potrawy
        let searchQuery = query;
        let translated = false;
        
        // Sprawdź czy zapytanie zawiera polskie znaki lub znane polskie słowa
        const hasPolishChars = /[ąćęłńóśźż]/i.test(query);
        const translatedQuery = translatePolishToEnglish(query);
        
        // Jeśli tłumaczenie się zmieniło, użyj przetłumaczonego zapytania
        if (translatedQuery !== query.toLowerCase()) {
            searchQuery = translatedQuery;
            translated = true;
            console.log(`Przetłumaczono "${query}" na "${searchQuery}"`);
        } else if (hasPolishChars) {
            // Jeśli ma polskie znaki ale nie znalazło tłumaczenia, spróbuj bezpośrednio
            searchQuery = query;
            console.log(`Zapytanie zawiera polskie znaki, ale nie znaleziono tłumaczenia: "${query}"`);
        }
        
        // Używamy proxy endpointu na naszym backendzie aby uniknąć problemów z CORSI
        // Najpierw spróbuj z przetłumaczonym zapytaniem
        let response = await fetch(`http://localhost:5000/api/mealdb/search?s=${encodeURIComponent(searchQuery)}`);
        let data = await response.json();
        
        // Jeśli nie znaleziono wyników z przetłumaczonym zapytaniem, spróbuj z oryginalnym
        if ((!data.meals || data.meals.length === 0) && translated && searchQuery !== query) {
            console.log(`Brak wyników dla "${searchQuery}", próbuję z oryginalnym "${query}"`);
            response = await fetch(`http://localhost:5000/api/mealdb/search?s=${encodeURIComponent(query)}`);
            data = await response.json();
        }
        
        if (!data.meals || data.meals.length === 0) {
            return [];
        }

        return data.meals.map(meal => {
            // Parsuj składniki
            const ingredients = [];
            for (let i = 1; i <= 20; i++) {
                const ingredient = meal[`strIngredient${i}`];
                const measure = meal[`strMeasure${i}`];
                if (ingredient && ingredient.trim()) {
                    ingredients.push(`${ingredient}${measure ? ' (' + measure + ')' : ''}`);
                }
            }

            // Parsuj instrukcje
            const instructions = meal.strInstructions || '';

            // Szacuj czas gotowania (TheMealDB nie ma tego pola, więc ustawiamy domyślnie)
            const cookingTime = 30; // domyślnie 30 minut

            return {
                title: meal.strMeal,
                ingredients: ingredients,
                instructions: instructions,
                cookingTime: cookingTime,
                cookingMethod: 'other',
                image: meal.strMealThumb,
                source: 'themealdb',
                apiId: meal.idMeal
            };
        });
    } catch (error) {
        console.error('TheMealDB API error:', error);
        throw new Error('Błąd połączenia z TheMealDB API');
    }
}


// Przechowaj wyniki wyszukiwania API
let apiSearchResults = [];

// Dodaj przepis z API do lokalnej bazy (nowa wersja z ID)
function addRecipeFromAPIById(resultIndex) {
    if (!apiSearchResults || !apiSearchResults[resultIndex]) {
        alert('Błąd: Nie znaleziono przepisu');
        return;
    }
    
    const recipeData = apiSearchResults[resultIndex];
    addRecipeFromAPI(recipeData);
}

// Dodaj przepis z API do lokalnej bazy
function addRecipeFromAPI(recipeData) {
    const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');
    
    // Sprawdź czy przepis już istnieje (po tytule lub apiId)
    const exists = recipes.some(r => 
        r.title === recipeData.title || 
        (r.apiId && r.apiId === recipeData.apiId) ||
        (r.source === recipeData.source && r.apiId === recipeData.apiId)
    );

    if (exists) {
        alert('Ten przepis już istnieje w bazie!');
        return;
    }

    const newId = recipes.length > 0 ? Math.max(...recipes.map(r => r.id)) + 1 : 1;
    
    const newRecipe = {
        id: newId,
        title: recipeData.title,
        ingredients: Array.isArray(recipeData.ingredients) ? recipeData.ingredients : [],
        instructions: recipeData.instructions || '',
        cookingTime: recipeData.cookingTime || 30,
        cookingMethod: recipeData.cookingMethod || 'other',
        temperature: recipeData.temperature || null,
        restTime: recipeData.restTime || null,
        productIds: [],
        source: recipeData.source || 'api',
        apiId: recipeData.apiId || null,
        image: recipeData.image || null,
        steps: recipeData.steps || undefined
    };

    recipes.push(newRecipe);
    localStorage.setItem('recipes', JSON.stringify(recipes));
    
    alert('Przepis został dodany do bazy!');
    renderRecipes();
    renderAdminRecipes();
    
    // Zamknij sekcję API i wyczyść wyniki
    document.getElementById('apiSearchSection').style.display = 'none';
    document.getElementById('apiSearchInput').value = '';
}

// Inicjalizacja przy starcie aplikacji
function initializeApp() {
    currentLanguage = localStorage.getItem('language') || 'pl';
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.value = currentLanguage;
    }
    
    initData();
    setupEventListeners();
    updateLanguage();
    // Upewnij się, że widok główny jest aktywny
    showView('mainView');
    renderRecipes();
    renderProducts();
    
    console.log('Aplikacja zainicjalizowana');
    const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');
    console.log('Przepisy w localStorage:', recipes.length);
    console.log('Przepisy:', recipes);
}

// ========================================
// STEP TIMER CONFIGURATION FUNCTIONS
// ========================================

// Open step timer configuration modal
function openStepTimerConfigModal(recipeId, stepIndex) {
    currentConfigStepIndex = stepIndex;
    currentRecipeId = recipeId;
    
    const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');
    const recipe = recipes.find(r => r.id === recipeId);
    
    if (!recipe || !recipe.steps || !recipe.steps[stepIndex]) {
        alert('Nie znaleziono kroku do konfiguracji');
        return;
    }
    
    const step = recipe.steps[stepIndex];
    const existingConfig = step.timerConfig || {};
    const preferences = getTimerPreferences();
    
    // Pre-fill form with existing config or preferences
    document.getElementById('stepActionType').value = existingConfig.action || detectActionFromText(step.description) || '';
    document.getElementById('stepIngredientCategory').value = existingConfig.ingredientCategory || detectIngredientFromText(step.description) || '';
    document.getElementById('stepCookware').value = existingConfig.cookware || preferences.defaultCookware || 'pot';
    document.getElementById('stepHeatSource').value = existingConfig.heatSource || preferences.defaultHeatSource || 'gas';
    
    // Update variants based on category
    const category = document.getElementById('stepIngredientCategory').value;
    updateVariantOptions(category);
    
    if (existingConfig.ingredientVariant) {
        document.getElementById('stepIngredientVariant').value = existingConfig.ingredientVariant;
    }
    
    // Set time source
    const timeSource = existingConfig.timeSource || 'recommended';
    document.querySelector(`input[name="timeSource"][value="${timeSource}"]`).checked = true;
    
    if (timeSource === 'manual') {
        document.getElementById('manualTimeInput').style.display = 'block';
        const manualTime = existingConfig.finalTimeSeconds || 0;
        document.getElementById('manualMinutes').value = Math.floor(manualTime / 60);
        document.getElementById('manualSeconds').value = manualTime % 60;
    } else {
        document.getElementById('manualTimeInput').style.display = 'none';
    }
    
    // Display recipe time if available
    const recipeTimeDisplay = document.getElementById('recipeTimeDisplay');
    if (step.time) {
        recipeTimeDisplay.textContent = `(${step.time} min)`;
        document.getElementById('timeSourceRecipe').disabled = false;
    } else {
        recipeTimeDisplay.textContent = '(brak)';
        document.getElementById('timeSourceRecipe').disabled = true;
    }
    
    // Calculate and show recommended time
    calculateRecommendedTime();
    
    // Show modal
    document.getElementById('stepTimerConfigModal').classList.add('show');
}

// Close step timer configuration modal
function closeStepTimerConfigModal() {
    document.getElementById('stepTimerConfigModal').classList.remove('show');
    currentConfigStepIndex = null;
}

// Update variant options based on ingredient category
function updateVariantOptions(category) {
    const variantSelect = document.getElementById('stepIngredientVariant');
    const variantContainer = document.getElementById('stepVariantContainer');
    
    if (!category) {
        variantContainer.style.display = 'none';
        return;
    }
    
    const variants = getAvailableVariants(category);
    
    if (variants.length === 0) {
        variantContainer.style.display = 'none';
        return;
    }
    
    variantContainer.style.display = 'block';
    variantSelect.innerHTML = '<option value="">Wybierz wariant</option>';
    
    variants.forEach(variant => {
        const option = document.createElement('option');
        option.value = variant;
        option.textContent = variant;
        variantSelect.appendChild(option);
    });
}

// Calculate recommended time based on current form values
function calculateRecommendedTime() {
    const config = {
        action: document.getElementById('stepActionType').value,
        ingredientCategory: document.getElementById('stepIngredientCategory').value,
        ingredientVariant: document.getElementById('stepIngredientVariant').value,
        cookware: document.getElementById('stepCookware').value,
        heatSource: document.getElementById('stepHeatSource').value
    };
    
    // Only calculate if we have at least ingredient category
    if (!config.ingredientCategory) {
        document.getElementById('recommendedTimeDisplay').style.display = 'none';
        document.getElementById('recommendedTimeSourceDisplay').textContent = '';
        return;
    }
    
    const result = calculateStepTime(config);
    
    if (result.recommendedTimeSeconds) {
        const minutes = Math.floor(result.recommendedTimeSeconds / 60);
        const seconds = result.recommendedTimeSeconds % 60;
        
        document.getElementById('recommendedTimeText').textContent = 
            `${minutes} min ${seconds > 0 ? seconds + ' sek' : ''}`;
        document.getElementById('recommendedTimeNote').textContent = result.note || '';
        document.getElementById('recommendedTimeDisplay').style.display = 'block';
        
        // Update the recommended time source display
        document.getElementById('recommendedTimeSourceDisplay').textContent = 
            `(${minutes} min ${seconds > 0 ? seconds + ' sek' : ''})`;
    } else {
        document.getElementById('recommendedTimeDisplay').style.display = 'none';
        document.getElementById('recommendedTimeSourceDisplay').textContent = '';
    }
}

// Save step timer configuration
function saveStepTimerConfiguration() {
    if (currentConfigStepIndex === null || !currentRecipeId) {
        alert('Błąd: brak aktywnego kroku do konfiguracji');
        return;
    }
    
    const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');
    const recipe = recipes.find(r => r.id === currentRecipeId);
    
    if (!recipe || !recipe.steps || !recipe.steps[currentConfigStepIndex]) {
        alert('Nie znaleziono kroku');
        return;
    }
    
    const step = recipe.steps[currentConfigStepIndex];
    
    // Get configuration values
    const config = {
        action: document.getElementById('stepActionType').value,
        ingredientCategory: document.getElementById('stepIngredientCategory').value,
        ingredientVariant: document.getElementById('stepIngredientVariant').value,
        cookware: document.getElementById('stepCookware').value,
        heatSource: document.getElementById('stepHeatSource').value
    };
    
    // Calculate recommended time
    const timeResult = calculateStepTime(config);
    
    // Get time source
    const timeSource = document.querySelector('input[name="timeSource"]:checked').value;
    
    let finalTimeSeconds = 0;
    
    if (timeSource === 'recipe') {
        finalTimeSeconds = (step.time || 0) * 60;
    } else if (timeSource === 'recommended') {
        finalTimeSeconds = timeResult.recommendedTimeSeconds || 0;
    } else if (timeSource === 'manual') {
        const minutes = parseInt(document.getElementById('manualMinutes').value) || 0;
        const seconds = parseInt(document.getElementById('manualSeconds').value) || 0;
        finalTimeSeconds = minutes * 60 + seconds;
    }
    
    if (finalTimeSeconds <= 0) {
        alert('Proszę ustawić prawidłowy czas');
        return;
    }
    
    // Create timer config object
    const timerConfig = {
        timerEnabled: true,
        timeSource: timeSource,
        recipeTimeSeconds: (step.time || 0) * 60,
        recommendedTimeSeconds: timeResult.recommendedTimeSeconds || null,
        finalTimeSeconds: finalTimeSeconds,
        timingConfig: config
    };
    
    // Save configuration
    const success = saveStepConfig(currentRecipeId, currentConfigStepIndex, timerConfig);
    
    if (success) {
        // Update user preferences
        const preferences = getTimerPreferences();
        preferences.defaultCookware = config.cookware;
        preferences.defaultHeatSource = config.heatSource;
        if (config.ingredientCategory && config.ingredientVariant) {
            preferences.favoriteVariants[config.ingredientCategory] = config.ingredientVariant;
        }
        saveTimerPreferences(preferences);
        
        closeStepTimerConfigModal();
        
        // Refresh timer display if in timer view
        if (document.getElementById('timerView').classList.contains('active')) {
            renderTimerDisplay();
        }
    } else {
        alert('Błąd podczas zapisywania konfiguracji');
    }
}

// Enable step timer
function enableStepTimer(recipeId, stepIndex) {
    openStepTimerConfigModal(recipeId, stepIndex);
}

// Start step timer
function startStepTimer(recipeId, stepIndex) {
    const config = getStepConfig(recipeId, stepIndex);
    
    if (!config || !config.finalTimeSeconds) {
        alert('Najpierw skonfiguruj timer dla tego kroku');
        openStepTimerConfigModal(recipeId, stepIndex);
        return;
    }
    
    // Initialize step timer state
    if (!stepTimerStates[stepIndex]) {
        stepTimerStates[stepIndex] = {
            initial: config.finalTimeSeconds,
            remaining: config.finalTimeSeconds,
            paused: false
        };
    }
    
    // Clear existing interval if any
    if (stepTimerIntervals[stepIndex]) {
        clearInterval(stepTimerIntervals[stepIndex]);
    }
    
    stepTimerStates[stepIndex].paused = false;
    
    // Start countdown
    stepTimerIntervals[stepIndex] = setInterval(() => {
        if (!stepTimerStates[stepIndex].paused && stepTimerStates[stepIndex].remaining > 0) {
            stepTimerStates[stepIndex].remaining--;
            updateStepTimerDisplay(stepIndex);
            
            if (stepTimerStates[stepIndex].remaining <= 0) {
                clearInterval(stepTimerIntervals[stepIndex]);
                stepTimerComplete(stepIndex);
            }
        }
    }, 1000);
    
    updateStepTimerDisplay(stepIndex);
}

// Pause step timer
function pauseStepTimer(stepIndex) {
    if (stepTimerStates[stepIndex]) {
        stepTimerStates[stepIndex].paused = true;
        updateStepTimerDisplay(stepIndex);
    }
}

// Resume step timer
function resumeStepTimer(stepIndex) {
    if (stepTimerStates[stepIndex]) {
        stepTimerStates[stepIndex].paused = false;
        updateStepTimerDisplay(stepIndex);
    }
}

// Reset step timer
function resetStepTimer(recipeId, stepIndex) {
    const config = getStepConfig(recipeId, stepIndex);
    
    if (stepTimerIntervals[stepIndex]) {
        clearInterval(stepTimerIntervals[stepIndex]);
        delete stepTimerIntervals[stepIndex];
    }
    
    if (config && config.finalTimeSeconds) {
        stepTimerStates[stepIndex] = {
            initial: config.finalTimeSeconds,
            remaining: config.finalTimeSeconds,
            paused: false
        };
    }
    
    updateStepTimerDisplay(stepIndex);
}

// Update step timer display
function updateStepTimerDisplay(stepIndex) {
    const timeEl = document.getElementById(`stepTimer-${stepIndex}-time`);
    const progressEl = document.getElementById(`stepTimer-${stepIndex}-progress`);
    const startBtn = document.getElementById(`stepTimer-${stepIndex}-start`);
    const pauseBtn = document.getElementById(`stepTimer-${stepIndex}-pause`);
    const resumeBtn = document.getElementById(`stepTimer-${stepIndex}-resume`);
    
    if (timeEl && stepTimerStates[stepIndex]) {
        const state = stepTimerStates[stepIndex];
        timeEl.textContent = formatTime(state.remaining);
        
        if (progressEl) {
            const progress = state.initial > 0 ? ((state.initial - state.remaining) / state.initial) * 100 : 0;
            progressEl.style.width = progress + '%';
        }
        
        // Update button visibility
        const isRunning = stepTimerIntervals[stepIndex] !== undefined;
        const isPaused = state.paused;
        
        if (startBtn) startBtn.style.display = !isRunning ? 'inline-block' : 'none';
        if (pauseBtn) pauseBtn.style.display = (isRunning && !isPaused) ? 'inline-block' : 'none';
        if (resumeBtn) resumeBtn.style.display = (isRunning && isPaused) ? 'inline-block' : 'none';
    }
}

// Step timer complete
function stepTimerComplete(stepIndex) {
    if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('Timer kroku zakończony!', {
            body: `Krok ${stepIndex + 1} został zakończony`,
            icon: '⏰'
        });
    }
    
    alert(`Timer kroku ${stepIndex + 1} zakończony! ⏰`);
    
    // Reset state
    if (stepTimerStates[stepIndex]) {
        stepTimerStates[stepIndex].remaining = 0;
        updateStepTimerDisplay(stepIndex);
    }
}

// Wywołaj inicjalizację gdy DOM jest gotowy
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    // DOM jest już gotowy
    initializeApp();
}
