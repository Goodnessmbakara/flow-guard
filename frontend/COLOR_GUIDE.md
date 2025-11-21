# FlowGuard Color System Guide

## Central Color Control

All colors are controlled in **ONE FILE**: `/frontend/src/index.css`

## Color Variables Reference

### Brand Colors (Don't change these - FlowGuard brand identity)
```css
--color-primary: #b2ac88      /* Sage gold - buttons, highlights */
--color-secondary: #898989    /* Medium gray - secondary elements */
--color-accent: #4b6e48       /* Forest green - success, accents */
--color-background: #f2f0ef   /* Off-white - page background */
```

### Light Mode (Modify these for better visibility in light mode)
Located in `:root` section:

```css
/* Backgrounds */
--color-surface: #ffffff           /* Cards, boxes, elevated surfaces */
--color-surface-alt: #fafaf9       /* Alternative surfaces */

/* Text Colors - Adjust these for better visibility */
--color-text-primary: #0f0f0f      /* Main text (headings, body) */
--color-text-secondary: #525252    /* Secondary text */
--color-text-muted: #737373        /* Muted/helper text */
```

### Dark Mode (Modify these for better visibility in dark mode)
Located in `.dark` section:

```css
/* Backgrounds */
--color-background: #0a0a0a        /* Page background */
--color-surface: #171717           /* Cards, boxes, elevated surfaces */
--color-surface-alt: #262626       /* Alternative surfaces */

/* Text Colors - Adjust these for better visibility */
--color-text-primary: #fafafa      /* Main text (headings, body) */
--color-text-secondary: #d4d4d4    /* Secondary text */
--color-text-muted: #a3a3a3        /* Muted/helper text */
```

## Quick Fixes for Common Issues

### Issue: Text not visible enough in light mode
**Solution**: Make text darker in `/frontend/src/index.css`:
```css
:root {
  --color-text-primary: #000000;    /* Pure black for maximum contrast */
  --color-text-secondary: #333333;  /* Darker secondary text */
}
```

### Issue: Text not visible enough in dark mode
**Solution**: Make text lighter in `/frontend/src/index.css`:
```css
.dark {
  --color-text-primary: #ffffff;    /* Pure white for maximum contrast */
  --color-text-secondary: #e5e5e5;  /* Lighter secondary text */
}
```

### Issue: Cards blend with background
**Solution**: Increase contrast between surface and background:

**Light Mode:**
```css
:root {
  --color-background: #f2f0ef;      /* Keep background light */
  --color-surface: #ffffff;         /* Pure white cards */
}
```

**Dark Mode:**
```css
.dark {
  --color-background: #000000;      /* Pure black background */
  --color-surface: #1f1f1f;         /* Lighter cards */
}
```

## How to Use These Variables in Components

Instead of hardcoding colors, use CSS variables:

```tsx
// ❌ Bad - hardcoded
<div className="bg-white dark:bg-[#2d2d2d]">

// ✅ Good - uses CSS variable
<div className="bg-[var(--color-surface)]">
```

```tsx
// ❌ Bad - hardcoded text color
<p className="text-gray-900 dark:text-white">

// ✅ Good - uses CSS variable
<p className="text-[var(--color-text-primary)]">
```

## Testing Your Changes

1. Edit `/frontend/src/index.css`
2. Save the file
3. The dev server will hot-reload automatically
4. Toggle dark mode with the theme button in the header
5. Check both modes for visibility

## Recommended Visibility Settings

### Maximum Contrast (Best for accessibility)

**Light Mode:**
```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8f8f8;
  --color-text-primary: #000000;
  --color-text-secondary: #333333;
  --color-text-muted: #666666;
}
```

**Dark Mode:**
```css
.dark {
  --color-background: #000000;
  --color-surface: #1a1a1a;
  --color-text-primary: #ffffff;
  --color-text-secondary: #e0e0e0;
  --color-text-muted: #a0a0a0;
}
```
