# Quick Start Guide: Context-Aware Step Timers

## For Users

### How to Use Step Timers

#### 1. **View a Recipe**
- Browse recipes from the main screen
- Click on any recipe to view details
- Look for recipes with steps listed

#### 2. **Enable a Step Timer**
When viewing the timer screen:
- Each step shows an "Włącz Timer dla tego kroku" button
- Click it to configure a timer for that step

#### 3. **Configure the Timer**
A configuration modal will appear:

**Quick Setup (Auto-Detection):**
- The app tries to detect the cooking action and ingredient automatically
- Review the pre-filled values
- Adjust if needed
- Click "Zapisz" (Save)

**Manual Setup:**
1. **Rodzaj akcji** (Action): Choose boil, fry, simmer, bake, or steam
2. **Kategoria składnika** (Ingredient): Choose pasta, rice, egg, chicken, etc.
3. **Wariant** (Variant): Select specific type (e.g., spaghetti, basmati)
4. **Naczynia** (Cookware): pot, pan, oven, etc.
5. **Źródło ciepła** (Heat source): gas, induction, electric, oven

**Choose Time Source:**
- ⭐ **Recommended**: Uses calculated time based on your configuration
- 📖 **Recipe time**: Uses the time from the recipe (if available)
- ✏️ **Manual**: Enter your own time

#### 4. **Use the Timer**
Once configured:
- Click **Start** to begin countdown
- Click **Pauza** to pause
- Click **Wznów** to resume
- Click **Reset** to start over
- Click **Konfiguruj** to change settings

#### 5. **Monitor Progress**
- Watch the time display count down (MM:SS format)
- Progress bar shows completion percentage
- Visual indicators show which steps are completed/active

---

## For Developers

### Quick Integration

#### Add Step Timers to Existing Recipe

```javascript
const recipe = {
    id: 1,
    title: "My Recipe",
    steps: [
        {
            description: "Gotuj makaron",
            time: 10,
            timerConfig: {
                timerEnabled: true,
                timeSource: "recommended",
                finalTimeSeconds: 600,
                timingConfig: {
                    action: "boil",
                    ingredientCategory: "pasta",
                    ingredientVariant: "spaghetti",
                    cookware: "pot",
                    heatSource: "gas"
                }
            }
        }
    ]
};
```

#### Calculate Time Programmatically

```javascript
const config = {
    action: 'boil',
    ingredientCategory: 'rice',
    ingredientVariant: 'basmati',
    cookware: 'pot',
    heatSource: 'induction'
};

const result = calculateStepTime(config);
console.log(`Recommended time: ${result.recommendedTimeSeconds} seconds`);
```

#### Auto-Detect from Text

```javascript
const stepText = "Gotuj makaron spaghetti przez 10 minut";

const action = detectActionFromText(stepText); // "boil"
const ingredient = detectIngredientFromText(stepText); // "pasta"
```

---

## Examples

### Example 1: Perfect Pasta
**Scenario**: Cooking spaghetti on induction stove

**Configuration:**
- Action: Gotowanie (Boil)
- Ingredient: Makaron (Pasta)
- Variant: Spaghetti
- Cookware: Garnek (Pot)
- Heat: Indukcja (Induction)

**Result**: 9 minutes (10 min base × 0.9 for induction)

### Example 2: Soft-Boiled Eggs
**Scenario**: Making soft-boiled eggs on gas stove

**Configuration:**
- Action: Gotowanie (Boil)
- Ingredient: Jajko (Egg)
- Variant: Soft boiled
- Cookware: Garnek (Pot)
- Heat: Gaz (Gas)

**Result**: 5 minutes

### Example 3: Chicken Breast
**Scenario**: Pan-frying chicken breast on electric stove

**Configuration:**
- Action: Smażenie (Fry)
- Ingredient: Kurczak (Chicken)
- Variant: Chicken breast
- Cookware: Patelnia (Pan)
- Heat: Elektryczna (Electric)

**Result**: 25 minutes (20 min × 1.2 fry × 1.05 electric)

---

## Tips & Tricks

### For Best Results:

1. **Let the app detect**: The auto-detection works well for Polish recipe text
2. **Use recommended times first**: They're based on standard cooking times
3. **Adjust as needed**: You can always override with manual time
4. **Save preferences**: Your heat source and cookware choices are remembered
5. **Independent timers**: Each step timer runs independently

### Common Patterns:

- **Pasta**: Always select the specific type (penne cooks longer than spaghetti)
- **Rice**: Variant makes a big difference (brown rice takes 50% longer)
- **Eggs**: Be precise - 2 minutes difference between soft and hard boiled
- **Vegetables**: Small items (spinach) cook much faster than large (potatoes)

### Troubleshooting:

**Problem**: Timer doesn't start
- **Solution**: Make sure you've configured the timer first (click "Konfiguruj")

**Problem**: Wrong time calculated
- **Solution**: Check that you selected the correct variant and heat source

**Problem**: Can't find my ingredient
- **Solution**: Use the closest category, then manual time override

**Problem**: Configuration not saved
- **Solution**: Check browser console for errors, ensure localStorage is enabled

---

## Advanced Usage

### Custom Timing Rules

Developers can extend the timing rules in `stepTimingCalculator.js`:

```javascript
// Add new ingredient
timingRules.beef = {
    baseTime: 1800, // 30 minutes
    variants: {
        'ground beef': { modifier: 0.5, time: 900 },
        'steak': { modifier: 0.67, time: 1200 },
        'roast': { modifier: 2.0, time: 3600 }
    },
    cookware: {
        pan: { modifier: 1.0 },
        oven: { modifier: 1.2 }
    },
    heatSource: {
        gas: { modifier: 1.0 },
        oven: { modifier: 1.1 }
    }
};
```

### Multiple Timers at Once

You can run multiple step timers simultaneously:

1. Configure timer for step 1 (e.g., boiling pasta)
2. Start it
3. Configure timer for step 2 (e.g., making sauce)
4. Start it while step 1 is still running
5. Both timers run independently

This is perfect for recipes where you do multiple things in parallel!

---

## Keyboard Shortcuts

Currently, the feature is mouse/touch-driven. Keyboard shortcuts could be added in future versions.

---

## Support & Feedback

- Check the full documentation: `STEP_TIMERS_README.md`
- Run tests: Load `test-step-timers.js` in browser console
- Report issues: Check browser console for error messages

**Version**: 1.0  
**Last Updated**: January 2026
