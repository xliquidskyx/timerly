# Browser Testing Issues - Solutions

## Problem: Changes not showing in browser

### Symptoms:
- Changes work in Cursor's browser preview
- Changes don't appear in Chrome/Firefox/Edge
- Old version of the site keeps loading

### Cause:
**Browser caching** - Your browser saves old versions of HTML, CSS, and JavaScript files to load pages faster.

## Solutions

### ✅ Quick Fix: Hard Refresh

This forces the browser to reload everything from disk, ignoring the cache:

**Windows/Linux:**
- `Ctrl + Shift + R`
- OR `Ctrl + F5`
- OR `Shift + F5`

**Mac:**
- `Cmd + Shift + R`

**Alternative:**
- Right-click the refresh button → "Empty Cache and Hard Reload"

---

### ✅ For Development: Disable Cache

Keep this enabled while developing to always see latest changes:

1. Open **Developer Tools** (F12)
2. Go to **Network** tab
3. Check **"Disable cache"** checkbox
4. ⚠️ Keep DevTools **open** while testing

---

### ✅ Clear Browser Cache Completely

If hard refresh doesn't work:

**Chrome/Edge:**
1. Press `Ctrl + Shift + Delete`
2. Select "Cached images and files"
3. Choose "All time"
4. Click "Clear data"

**Firefox:**
1. Press `Ctrl + Shift + Delete`
2. Check "Cache"
3. Choose "Everything"
4. Click "Clear Now"

---

## Testing Checklist

When testing changes:

1. ✅ Save all files in editor
2. ✅ Hard refresh browser (`Ctrl + Shift + R`)
3. ✅ Check browser console (F12) for errors
4. ✅ If using localhost, restart server if needed
5. ✅ Try in incognito/private mode (no cache)

---

## Incognito/Private Mode Testing

Best way to test with no cache:

**Chrome/Edge:**
- `Ctrl + Shift + N` (Windows/Linux)
- `Cmd + Shift + N` (Mac)

**Firefox:**
- `Ctrl + Shift + P` (Windows/Linux)
- `Cmd + Shift + P` (Mac)

Then open your file in the private window - it will load fresh every time!

---

## Why Cursor Shows Changes but Browser Doesn't

Cursor's built-in browser:
- ✅ Doesn't cache aggressively
- ✅ Auto-refreshes when files change
- ✅ Designed for development

Regular browsers:
- ❌ Cache files for performance
- ❌ Don't auto-refresh
- ❌ Designed for normal browsing

**Solution**: Always hard refresh when testing!

---

## Quick Test

To verify caching is the issue:

1. Make a small visible change (e.g., change header text)
2. Save file
3. Regular refresh → Old version
4. Hard refresh (`Ctrl + Shift + R`) → New version ✓

If hard refresh shows changes, it was definitely caching!

---

## localStorage Note

Your app uses localStorage for data. This is **separate** from cache:

- Cache: HTML/CSS/JS files
- localStorage: Recipe data, settings

To clear localStorage:
1. Open Developer Tools (F12)
2. Go to **Application** tab (Chrome) or **Storage** tab (Firefox)
3. Expand **Local Storage**
4. Right-click → Clear

Or in console:
```javascript
localStorage.clear();
```

---

## Pro Tip: Development Server

For best development experience, use a local server:

```bash
# Install live-server (one time)
npm install -g live-server

# Run in your project folder
cd standalone
live-server
```

This will:
- Auto-refresh browser when files change
- Handle file paths correctly
- Avoid many caching issues

---

**Remember**: When in doubt, `Ctrl + Shift + R` (Hard Refresh)!
