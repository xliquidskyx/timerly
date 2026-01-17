/**
 * Step Timing Calculator Module
 * Calculates recommended cooking times based on context (ingredient, equipment, heat source)
 */

// Default timing rules database
const timingRules = {
    // Pasta timing rules
    pasta: {
        baseTime: 600, // 10 minutes in seconds
        variants: {
            spaghetti: { modifier: 1.0, time: 600 },
            penne: { modifier: 1.1, time: 660 },
            fettuccine: { modifier: 0.9, time: 540 },
            linguine: { modifier: 0.9, time: 540 },
            rigatoni: { modifier: 1.2, time: 720 },
            fusilli: { modifier: 1.1, time: 660 },
            farfalle: { modifier: 1.0, time: 600 },
            macaroni: { modifier: 0.8, time: 480 },
            lasagna: { modifier: 1.5, time: 900 }
        },
        cookware: {
            pot: { modifier: 1.0 },
            pan: { modifier: 1.1 }
        },
        heatSource: {
            gas: { modifier: 1.0 },
            induction: { modifier: 0.9 },
            electric: { modifier: 1.1 }
        }
    },
    
    // Rice timing rules
    rice: {
        baseTime: 1200, // 20 minutes in seconds
        variants: {
            'white rice': { modifier: 1.0, time: 1200 },
            'basmati': { modifier: 0.9, time: 1080 },
            'jasmine': { modifier: 0.85, time: 1020 },
            'brown rice': { modifier: 1.5, time: 1800 },
            'wild rice': { modifier: 1.75, time: 2100 },
            'arborio': { modifier: 1.1, time: 1320 }
        },
        cookware: {
            pot: { modifier: 1.0 },
            'rice cooker': { modifier: 0.95 }
        },
        heatSource: {
            gas: { modifier: 1.0 },
            induction: { modifier: 0.95 },
            electric: { modifier: 1.05 }
        }
    },
    
    // Egg timing rules (boiling)
    egg: {
        baseTime: 420, // 7 minutes in seconds (medium)
        variants: {
            'soft boiled': { modifier: 0.71, time: 300 }, // 5 min
            'medium boiled': { modifier: 1.0, time: 420 }, // 7 min
            'hard boiled': { modifier: 1.43, time: 600 } // 10 min
        },
        cookware: {
            pot: { modifier: 1.0 },
            pan: { modifier: 1.05 }
        },
        heatSource: {
            gas: { modifier: 1.0 },
            induction: { modifier: 0.95 },
            electric: { modifier: 1.05 }
        }
    },
    
    // Chicken timing rules
    chicken: {
        baseTime: 1200, // 20 minutes in seconds
        variants: {
            'chicken breast': { modifier: 1.0, time: 1200 },
            'chicken thigh': { modifier: 1.25, time: 1500 },
            'chicken drumstick': { modifier: 1.3, time: 1560 },
            'chicken wings': { modifier: 0.9, time: 1080 },
            'whole chicken': { modifier: 3.0, time: 3600 }
        },
        cookware: {
            pan: { modifier: 1.0 },
            pot: { modifier: 1.1 },
            oven: { modifier: 1.2 }
        },
        heatSource: {
            gas: { modifier: 1.0 },
            induction: { modifier: 0.95 },
            electric: { modifier: 1.05 },
            oven: { modifier: 1.15 }
        }
    },
    
    // Grains timing rules
    grains: {
        baseTime: 900, // 15 minutes in seconds
        variants: {
            quinoa: { modifier: 1.0, time: 900 },
            couscous: { modifier: 0.33, time: 300 },
            bulgur: { modifier: 0.8, time: 720 },
            barley: { modifier: 1.67, time: 1500 },
            millet: { modifier: 1.2, time: 1080 }
        },
        cookware: {
            pot: { modifier: 1.0 },
            pan: { modifier: 1.05 }
        },
        heatSource: {
            gas: { modifier: 1.0 },
            induction: { modifier: 0.95 },
            electric: { modifier: 1.05 }
        }
    },
    
    // Vegetable timing rules (steaming/boiling)
    vegetables: {
        baseTime: 300, // 5 minutes in seconds
        variants: {
            broccoli: { modifier: 1.0, time: 300 },
            carrots: { modifier: 1.33, time: 400 },
            cauliflower: { modifier: 1.2, time: 360 },
            'green beans': { modifier: 0.8, time: 240 },
            asparagus: { modifier: 0.6, time: 180 },
            spinach: { modifier: 0.4, time: 120 },
            potatoes: { modifier: 4.0, time: 1200 }
        },
        cookware: {
            pot: { modifier: 1.0 },
            steamer: { modifier: 1.1 }
        },
        heatSource: {
            gas: { modifier: 1.0 },
            induction: { modifier: 0.95 },
            electric: { modifier: 1.05 }
        }
    }
};

// Action type configurations
const actionTypes = {
    boil: {
        label: 'Gotowanie',
        compatibleIngredients: ['pasta', 'rice', 'egg', 'vegetables', 'grains'],
        defaultModifier: 1.0
    },
    fry: {
        label: 'Smażenie',
        compatibleIngredients: ['chicken', 'vegetables'],
        defaultModifier: 1.2
    },
    simmer: {
        label: 'Duszenie',
        compatibleIngredients: ['chicken', 'vegetables', 'rice'],
        defaultModifier: 1.3
    },
    bake: {
        label: 'Pieczenie',
        compatibleIngredients: ['chicken', 'vegetables'],
        defaultModifier: 1.5
    },
    steam: {
        label: 'Gotowanie na parze',
        compatibleIngredients: ['vegetables', 'rice'],
        defaultModifier: 1.1
    }
};

/**
 * Calculate recommended cooking time
 * @param {Object} config - Timing configuration
 * @param {string} config.action - Action type (boil, fry, simmer, bake, steam)
 * @param {string} config.ingredientCategory - Ingredient category (pasta, rice, egg, chicken, grains, vegetables)
 * @param {string} config.ingredientVariant - Specific variant (e.g., spaghetti, basmati)
 * @param {string} config.cookware - Cookware type (pot, pan, oven, steamer, rice cooker)
 * @param {string} config.heatSource - Heat source (gas, induction, electric, oven)
 * @returns {Object} - { recommendedTimeSeconds, recommendedRangeSeconds, note }
 */
function calculateStepTime(config) {
    const {
        action = 'boil',
        ingredientCategory,
        ingredientVariant,
        cookware = 'pot',
        heatSource = 'gas'
    } = config;
    
    // Validate ingredient category
    if (!ingredientCategory || !timingRules[ingredientCategory]) {
        return {
            recommendedTimeSeconds: null,
            recommendedRangeSeconds: null,
            note: 'Brak danych dla wybranego składnika'
        };
    }
    
    const categoryRules = timingRules[ingredientCategory];
    let baseTime = categoryRules.baseTime;
    let totalModifier = 1.0;
    let note = '';
    
    // Apply variant modifier or use variant time directly
    if (ingredientVariant && categoryRules.variants && categoryRules.variants[ingredientVariant]) {
        const variantData = categoryRules.variants[ingredientVariant];
        if (variantData.time) {
            baseTime = variantData.time;
        } else if (variantData.modifier) {
            totalModifier *= variantData.modifier;
        }
    } else if (ingredientVariant) {
        note = `Wariant "${ingredientVariant}" nie jest znany, używam czasu bazowego. `;
    }
    
    // Apply cookware modifier
    if (cookware && categoryRules.cookware && categoryRules.cookware[cookware]) {
        totalModifier *= categoryRules.cookware[cookware].modifier;
    }
    
    // Apply heat source modifier
    if (heatSource && categoryRules.heatSource && categoryRules.heatSource[heatSource]) {
        totalModifier *= categoryRules.heatSource[heatSource].modifier;
    }
    
    // Apply action modifier
    if (action && actionTypes[action]) {
        totalModifier *= actionTypes[action].defaultModifier;
    }
    
    // Calculate final time
    const recommendedTimeSeconds = Math.round(baseTime * totalModifier);
    
    // Calculate range (±10%)
    const rangeMin = Math.round(recommendedTimeSeconds * 0.9);
    const rangeMax = Math.round(recommendedTimeSeconds * 1.1);
    const recommendedRangeSeconds = { min: rangeMin, max: rangeMax };
    
    // Add helpful note
    if (!note) {
        const minutes = Math.round(recommendedTimeSeconds / 60);
        note = `Zalecany czas dla ${ingredientVariant || ingredientCategory} przy użyciu ${cookware} na ${heatSource}.`;
    }
    
    return {
        recommendedTimeSeconds,
        recommendedRangeSeconds,
        note
    };
}

/**
 * Get available variants for an ingredient category
 * @param {string} ingredientCategory - Ingredient category
 * @returns {Array} - Array of variant names
 */
function getAvailableVariants(ingredientCategory) {
    if (!ingredientCategory || !timingRules[ingredientCategory]) {
        return [];
    }
    
    const categoryRules = timingRules[ingredientCategory];
    if (categoryRules.variants) {
        return Object.keys(categoryRules.variants);
    }
    
    return [];
}

/**
 * Get available cookware for an ingredient category
 * @param {string} ingredientCategory - Ingredient category
 * @returns {Array} - Array of cookware types
 */
function getAvailableCookware(ingredientCategory) {
    if (!ingredientCategory || !timingRules[ingredientCategory]) {
        return ['pot', 'pan'];
    }
    
    const categoryRules = timingRules[ingredientCategory];
    if (categoryRules.cookware) {
        return Object.keys(categoryRules.cookware);
    }
    
    return ['pot', 'pan'];
}

/**
 * Get all available ingredient categories
 * @returns {Array} - Array of ingredient category names
 */
function getAvailableIngredientCategories() {
    return Object.keys(timingRules);
}

/**
 * Get all available action types
 * @returns {Array} - Array of action type objects
 */
function getAvailableActionTypes() {
    return Object.keys(actionTypes).map(key => ({
        id: key,
        label: actionTypes[key].label,
        compatibleIngredients: actionTypes[key].compatibleIngredients
    }));
}

/**
 * Detect cooking action from step text
 * @param {string} stepText - Step description text
 * @returns {string|null} - Detected action type or null
 */
function detectActionFromText(stepText) {
    if (!stepText) return null;
    
    const text = stepText.toLowerCase();
    
    // Polish keywords for detection
    const keywords = {
        boil: ['gotuj', 'ugotuj', 'zagotuj', 'wrzuć do wrzątku', 'gotowanie'],
        fry: ['smaż', 'usmaż', 'posmaż', 'smażenie', 'na patelni'],
        simmer: ['dusz', 'udusz', 'duszenie', 'na wolnym ogniu'],
        bake: ['piecz', 'upiecz', 'w piekarniku', 'pieczenie'],
        steam: ['gotuj na parze', 'gotowanie na parze', 'na parze']
    };
    
    for (const [action, words] of Object.entries(keywords)) {
        for (const word of words) {
            if (text.includes(word)) {
                return action;
            }
        }
    }
    
    return null;
}

/**
 * Detect ingredient category from step text
 * @param {string} stepText - Step description text
 * @returns {string|null} - Detected ingredient category or null
 */
function detectIngredientFromText(stepText) {
    if (!stepText) return null;
    
    const text = stepText.toLowerCase();
    
    // Polish keywords for detection
    const keywords = {
        pasta: ['makaron', 'spaghetti', 'penne', 'fettuccine'],
        rice: ['ryż', 'basmati', 'jasmine'],
        egg: ['jajko', 'jajka', 'jajek'],
        chicken: ['kurczak', 'kurczaka', 'pierś z kurczaka', 'udka'],
        grains: ['kasza', 'quinoa', 'couscous', 'bulgur'],
        vegetables: ['warzywa', 'brokuły', 'marchew', 'kalafior']
    };
    
    for (const [category, words] of Object.entries(keywords)) {
        for (const word of words) {
            if (text.includes(word)) {
                return category;
            }
        }
    }
    
    return null;
}

// Export functions (compatible with both browser and Node.js)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        calculateStepTime,
        getAvailableVariants,
        getAvailableCookware,
        getAvailableIngredientCategories,
        getAvailableActionTypes,
        detectActionFromText,
        detectIngredientFromText
    };
}
