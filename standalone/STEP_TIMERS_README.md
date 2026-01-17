# Context-Aware Step Timers - Feature Documentation

## Overview

The app now supports **context-aware step timers** that allow users to configure individual cooking timers for each step in a recipe. The system intelligently calculates recommended cooking times based on:

- **Action type** (boil, fry, simmer, bake, steam)
- **Ingredient category** (pasta, rice, egg, chicken, grains, vegetables)
- **Ingredient variant** (e.g., spaghetti, basmati rice, soft-boiled egg)
- **Cookware type** (pot, pan, oven, steamer, rice cooker)
- **Heat source** (gas, induction, electric, oven)

## Features Implemented

### 1. Step Timer UI (Integrated into Timer Screen)

For each recipe step, users can:
- See the step description and original recipe time
- Enable a timer for that specific step
- View current timer status (time remaining, source of time)
- Control the timer with Start/Pause/Resume/Reset buttons
- Configure or adjust the timer settings

**UI Elements:**
- Timer display showing MM:SS countdown
- Progress bar indicating completion
- Badge showing time source (Recipe/Recommended/Manual)
- Action buttons for timer control
- Configuration button to adjust settings

### 2. Configuration Modal

When clicking "Konfiguruj" (Configure), users see a modal with:

**Configuration Options:**
- **Action Type Selector**: Choose from boil, fry, simmer, bake, or steam
- **Ingredient Category**: Select pasta, rice, egg, chicken, grains, or vegetables
- **Ingredient Variant**: Specific variants (e.g., spaghetti, penne for pasta)
- **Cookware Type**: pot, pan, oven, steamer, or rice cooker
- **Heat Source**: gas, induction, electric, or oven

**Time Selection:**
- Use recipe time (if available)
- Use recommended time (calculated based on context)
- Manual override (enter custom minutes and seconds)

**Features:**
- Real-time recommended time calculation
- Visual feedback with color-coded displays
- Automatic detection of action and ingredient from step text
- Remembers user preferences for future configurations

### 3. Timing Calculation Engine

**Module:** `stepTimingCalculator.js`

**Supported Ingredients:**

#### Pasta (Base: 10 minutes)
- Spaghetti, Penne, Fettuccine, Linguine
- Rigatoni, Fusilli, Farfalle, Macaroni, Lasagna

#### Rice (Base: 20 minutes)
- White rice, Basmati, Jasmine
- Brown rice, Wild rice, Arborio

#### Eggs (Base: 7 minutes)
- Soft boiled (5 min)
- Medium boiled (7 min)
- Hard boiled (10 min)

#### Chicken (Base: 20 minutes)
- Chicken breast, thigh, drumstick
- Chicken wings, whole chicken

#### Grains (Base: 15 minutes)
- Quinoa, Couscous, Bulgur
- Barley, Millet

#### Vegetables (Base: 5 minutes)
- Broccoli, Carrots, Cauliflower
- Green beans, Asparagus, Spinach, Potatoes

**Calculation Formula:**
```
finalTime = baseTime × variantModifier × cookwareModifier × heatSourceModifier × actionModifier
```

**Example:**
- Boiling spaghetti in a pot on induction
  - Base: 600s (10 min)
  - Variant: 1.0 (spaghetti)
  - Cookware: 1.0 (pot)
  - Heat: 0.9 (induction is faster)
  - Action: 1.0 (boil is standard)
  - **Result: 540s (9 min)**

### 4. Data Persistence

**Step Configuration Storage:**
Each step can have a `timerConfig` object containing:
```javascript
{
  timerEnabled: true,
  timeSource: "recommended", // or "recipe" or "manual"
  recipeTimeSeconds: 600,
  recommendedTimeSeconds: 540,
  finalTimeSeconds: 540,
  timingConfig: {
    action: "boil",
    ingredientCategory: "pasta",
    ingredientVariant: "spaghetti",
    cookware: "pot",
    heatSource: "induction"
  }
}
```

**User Preferences Storage:**
```javascript
{
  defaultHeatSource: "gas",
  defaultCookware: "pot",
  favoriteVariants: {
    "pasta": "spaghetti",
    "rice": "basmati"
  }
}
```

All data is stored in `localStorage` and persists across sessions.

### 5. Backward Compatibility

✅ **Fully backward compatible!**

- Existing recipes without steps continue to work
- Existing recipes with steps but no timer config display normally
- The main recipe timer remains unchanged
- No migration required - new fields are added additively
- Old recipe data structure remains valid

**Data Structure Evolution:**
```javascript
// Old format (still supported)
{
  id: 1,
  title: "Recipe",
  steps: [
    "Step 1",
    "Step 2"
  ]
}

// New format with timer config (optional)
{
  id: 1,
  title: "Recipe",
  steps: [
    {
      description: "Step 1",
      time: 10,
      timerConfig: { /* config object */ }
    },
    {
      description: "Step 2",
      time: 5
      // No timerConfig - displays normally
    }
  ]
}
```

## User Workflows

### Workflow 1: Quick Enable (Auto-Detection)

1. User views recipe with steps
2. Clicks "Włącz Timer dla tego kroku" button
3. System auto-detects action (e.g., "gotuj makaron" → boil pasta)
4. User reviews/adjusts configuration
5. Selects time source (recommended is pre-selected)
6. Clicks "Zapisz"
7. Timer is ready to use

### Workflow 2: Manual Configuration

1. User views recipe timer screen
2. Clicks "Konfiguruj" on any step
3. Manually selects:
   - Action: Fry
   - Ingredient: Chicken breast
   - Cookware: Pan
   - Heat: Gas
4. System calculates: 20 min (chicken) × 1.2 (fry) = 24 min
5. User chooses "Use recommended time"
6. Clicks "Zapisz"
7. Timer shows 24:00 and is ready to start

### Workflow 3: Custom Time Override

1. User configures a step
2. Selects "Ręcznie wprowadź czas" (Manual time)
3. Enters: 15 minutes, 30 seconds
4. System uses exactly 15:30 for this step
5. Configuration is saved and persists

## UI Components

### Recipe Detail View
- Shows all steps with visual indicators
- Steps with timers have a "⏱️ Timer" badge
- Configured timer duration is displayed

### Timer Screen
- Each step has its own timer section
- Visual progress indicators (circles) show overall progress
- Active step is highlighted
- Completed steps are marked with ✓
- Independent timer controls per step
- Overall recipe timer still available at bottom

### Configuration Modal
- Clean, form-based UI
- Real-time calculation feedback
- Color-coded recommended time display
- Smart variant dropdown (shows only relevant variants)
- Auto-saves user preferences

## Technical Details

### File Structure
```
standalone/
├── index.html                  # Updated with config modal
├── app.js                      # Core app logic + step timer features
├── stepTimingCalculator.js    # NEW: Timing calculation engine
├── styles.css                  # Updated with step timer styles
└── STEP_TIMERS_README.md      # This file
```

### Key Functions

**Configuration:**
- `openStepTimerConfigModal(recipeId, stepIndex)` - Opens config modal
- `calculateRecommendedTime()` - Real-time calculation
- `saveStepTimerConfiguration()` - Saves config to recipe

**Timer Control:**
- `startStepTimer(recipeId, stepIndex)` - Starts countdown
- `pauseStepTimer(stepIndex)` - Pauses timer
- `resumeStepTimer(stepIndex)` - Resumes timer
- `resetStepTimer(recipeId, stepIndex)` - Resets to initial time

**Data Management:**
- `getStepConfig(recipeId, stepIndex)` - Retrieves step config
- `saveStepConfig(recipeId, stepIndex, config)` - Saves step config
- `getTimerPreferences()` - Gets user preferences
- `saveTimerPreferences(preferences)` - Saves user preferences

**Detection:**
- `detectActionFromText(stepText)` - Auto-detects cooking action
- `detectIngredientFromText(stepText)` - Auto-detects ingredient

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Edge, Safari)
- Requires ES6 support
- Uses localStorage (95%+ browser support)
- Uses Notifications API (optional, graceful degradation)

## Extensibility

### Adding New Ingredients

Edit `stepTimingCalculator.js`:

```javascript
timingRules.newIngredient = {
    baseTime: 900, // 15 minutes
    variants: {
        'variant1': { modifier: 1.0, time: 900 },
        'variant2': { modifier: 1.2, time: 1080 }
    },
    cookware: {
        pot: { modifier: 1.0 },
        pan: { modifier: 1.1 }
    },
    heatSource: {
        gas: { modifier: 1.0 },
        induction: { modifier: 0.95 }
    }
};
```

### Adding New Actions

```javascript
actionTypes.newAction = {
    label: 'New Action Name',
    compatibleIngredients: ['pasta', 'rice'],
    defaultModifier: 1.3
};
```

Update the modal select in `index.html`:
```html
<option value="newAction">New Action Name</option>
```

### Adding Detection Keywords

In `detectActionFromText()` or `detectIngredientFromText()`:

```javascript
const keywords = {
    newAction: ['keyword1', 'keyword2', 'keyword3']
};
```

## Testing Checklist

✅ **Completed Tests:**

1. **Backward Compatibility**
   - ✓ Old recipes without steps load correctly
   - ✓ Old recipes with steps (string format) display properly
   - ✓ Main recipe timer works unchanged
   - ✓ No console errors with old data

2. **Configuration**
   - ✓ Modal opens and closes properly
   - ✓ All dropdowns populate correctly
   - ✓ Variants update when category changes
   - ✓ Recommended time calculates correctly
   - ✓ Manual time input works
   - ✓ Configuration saves to localStorage
   - ✓ User preferences persist

3. **Timer Functionality**
   - ✓ Start/Pause/Resume/Reset buttons work
   - ✓ Countdown accuracy (1 second intervals)
   - ✓ Progress bar updates smoothly
   - ✓ Multiple step timers can run independently
   - ✓ Timer completion notification works
   - ✓ Timers survive page refresh (state resets)

4. **UI/UX**
   - ✓ Responsive design works on mobile
   - ✓ Visual indicators are clear
   - ✓ Buttons are properly labeled
   - ✓ Color coding is consistent
   - ✓ Polish language throughout

5. **Edge Cases**
   - ✓ Step without recipe time
   - ✓ Step without configuration
   - ✓ Invalid manual time input
   - ✓ Empty ingredient category
   - ✓ Unknown ingredient variant

## Known Limitations

1. **Timer State Persistence**: Step timer countdown states don't persist across page refreshes (by design - configuration persists, but active timers reset)

2. **Language Support**: Currently Polish only for the new feature (translatable if needed)

3. **Timing Accuracy**: Browser timers can drift slightly over long periods (acceptable for cooking)

4. **Offline-Only**: Uses localStorage, no cloud sync (matches app design)

## Future Enhancements (Not Implemented)

- Voice notifications for step completion
- Custom notification sounds per step
- Import/export of timing rules
- Machine learning to adjust times based on user feedback
- Integration with smart kitchen devices
- Multi-language support for timing calculator
- Recipe sharing with step timer configs

## Acceptance Criteria Status

✅ **All criteria met:**

1. ✓ User can enable a timer for a step, configure context, and start countdown
2. ✓ Changing config updates recommended time and final time if "Use recommended" selected
3. ✓ Manual override always wins if selected
4. ✓ Existing recipe timer feature remains unchanged
5. ✓ Persisted step timers survive refresh/reopen (config persists, active timers reset)
6. ✓ Default preferences are auto-preselected in config UI

## Support

For questions or issues:
1. Check this documentation
2. Review code comments in `stepTimingCalculator.js` and `app.js`
3. Inspect browser console for debug logs
4. Check localStorage for data structure

---

**Implementation Date:** January 2026  
**Version:** 1.0  
**Status:** ✅ Complete and Ready for Use
