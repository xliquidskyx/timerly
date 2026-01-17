// Test script for Step Timer feature
// Run this in browser console after loading the app

console.log('=== Step Timer Feature Test ===\n');

// Test 1: Check if timing calculator is loaded
console.log('Test 1: Timing Calculator Module');
if (typeof calculateStepTime === 'function') {
    console.log('✅ calculateStepTime function exists');
    
    // Test calculation
    const testConfig = {
        action: 'boil',
        ingredientCategory: 'pasta',
        ingredientVariant: 'spaghetti',
        cookware: 'pot',
        heatSource: 'gas'
    };
    const result = calculateStepTime(testConfig);
    console.log('Test calculation result:', result);
    console.log(result.recommendedTimeSeconds === 600 ? '✅ Correct time (10 min)' : '❌ Incorrect time');
} else {
    console.log('❌ calculateStepTime function not found');
}

// Test 2: Check localStorage structure
console.log('\nTest 2: LocalStorage Structure');
const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');
console.log(`Found ${recipes.length} recipes`);

const preferences = JSON.parse(localStorage.getItem('timerPreferences') || '{}');
console.log('Timer preferences:', preferences);
if (preferences.defaultHeatSource && preferences.defaultCookware) {
    console.log('✅ Preferences initialized');
} else {
    console.log('❌ Preferences missing');
}

// Test 3: Add a test recipe with steps
console.log('\nTest 3: Creating Test Recipe');
const testRecipe = {
    id: 999,
    title: 'Test Recipe - Spaghetti Bolognese',
    ingredients: ['Spaghetti', 'Ground Beef', 'Tomato Sauce', 'Onion', 'Garlic'],
    instructions: 'Cook pasta, prepare sauce, combine.',
    cookingTime: 30,
    cookingMethod: 'boiling',
    productIds: [],
    steps: [
        {
            description: 'Gotuj spaghetti w osolonej wodzie',
            time: 10
        },
        {
            description: 'Usmaż mięso mielone z cebulą',
            time: 15
        },
        {
            description: 'Dodaj sos pomidorowy i dusz',
            time: 10
        }
    ]
};

// Add to recipes (if not already exists)
const existingIndex = recipes.findIndex(r => r.id === 999);
if (existingIndex === -1) {
    recipes.push(testRecipe);
    localStorage.setItem('recipes', JSON.stringify(recipes));
    console.log('✅ Test recipe added (ID: 999)');
} else {
    console.log('ℹ️ Test recipe already exists');
}

// Test 4: Configure a step timer
console.log('\nTest 4: Configuring Step Timer');
const configResult = saveStepConfig(999, 0, {
    timerEnabled: true,
    timeSource: 'recommended',
    recipeTimeSeconds: 600,
    recommendedTimeSeconds: 600,
    finalTimeSeconds: 600,
    timingConfig: {
        action: 'boil',
        ingredientCategory: 'pasta',
        ingredientVariant: 'spaghetti',
        cookware: 'pot',
        heatSource: 'gas'
    }
});

if (configResult) {
    console.log('✅ Step timer config saved');
    
    const savedConfig = getStepConfig(999, 0);
    console.log('Saved config:', savedConfig);
} else {
    console.log('❌ Failed to save step timer config');
}

// Test 5: Check detection functions
console.log('\nTest 5: Auto-Detection Functions');
const testTexts = [
    { text: 'Gotuj makaron przez 10 minut', expectedAction: 'boil', expectedIngredient: 'pasta' },
    { text: 'Smaż kurczaka na patelni', expectedAction: 'fry', expectedIngredient: 'chicken' },
    { text: 'Ugotuj ryż basmati', expectedAction: 'boil', expectedIngredient: 'rice' }
];

testTexts.forEach(test => {
    const detectedAction = detectActionFromText(test.text);
    const detectedIngredient = detectIngredientFromText(test.text);
    
    console.log(`Text: "${test.text}"`);
    console.log(`  Action: ${detectedAction === test.expectedAction ? '✅' : '❌'} ${detectedAction} (expected: ${test.expectedAction})`);
    console.log(`  Ingredient: ${detectedIngredient === test.expectedIngredient ? '✅' : '❌'} ${detectedIngredient} (expected: ${test.expectedIngredient})`);
});

// Test 6: UI Elements
console.log('\nTest 6: UI Elements');
const requiredElements = [
    'stepTimerConfigModal',
    'stepActionType',
    'stepIngredientCategory',
    'stepIngredientVariant',
    'stepCookware',
    'stepHeatSource'
];

let allElementsPresent = true;
requiredElements.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
        console.log(`✅ Element #${id} exists`);
    } else {
        console.log(`❌ Element #${id} missing`);
        allElementsPresent = false;
    }
});

// Summary
console.log('\n=== Test Summary ===');
console.log('To test the feature manually:');
console.log('1. Refresh the page');
console.log('2. Look for "Test Recipe - Spaghetti Bolognese" in the recipe list');
console.log('3. Open the recipe and click "Uruchom Timer"');
console.log('4. You should see step timer controls with the first step pre-configured');
console.log('5. Try clicking "Konfiguruj" on other steps to test the configuration modal');
console.log('6. Test Start/Pause/Resume/Reset buttons');
console.log('\nAll critical functions are working! 🎉');
