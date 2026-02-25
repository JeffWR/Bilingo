# Small Children Learning to Speak (SCLS)

A web art project built with SvelteKit. A language-learning platform where the language is *you* — exploring emotional expression and self-talk through an interactive, Duolingo-inspired format.

---

## Setup

```sh
npm install
npm run dev          # start dev server
npm run build        # production build
npm run preview      # preview production build
npx svelte-check     # type-check all files
```

---

## Project Structure

```
src/
├── app.html                          # Root HTML shell (fonts loaded here)
├── lib/
│   ├── api/
│   │   └── conversation.ts           # API layer (mock now, swap for real later)
│   ├── components/
│   │   ├── Button.svelte             # Reusable button (4 variants)
│   │   ├── ChoiceChip.svelte         # Answer selection chip (4 states)
│   │   ├── Footer.svelte             # "About This Project" footer
│   │   └── InteractionCard.svelte    # Scenario display card
│   ├── data/
│   │   ├── conversation.ts           # Legacy single-flow placeholder data (unused by active routes)
│   │   └── conversations.ts          # Catalog of conversation topics (used by hub page)
│   ├── styles/
│   │   └── theme.css                 # ← Single source of truth for all design tokens
│   └── types/
│       └── schema.ts                 # TypeScript types for API responses
└── routes/
    ├── +layout.svelte                # App shell: fixed nav, logo, page wrapper
    ├── +page.svelte                  # Home / hero page
    └── conversation/
        ├── +page.svelte              # Conversation hub (topic selection grid)
        └── [id]/
            └── +page.svelte          # Dynamic experience page (fires two API calls)
```

---

## How to Change the Theme

**One file controls all visual design: `src/lib/styles/theme.css`**

Every color, size, radius, shadow, and spacing value is defined as a CSS custom property there. No other file needs to be touched to retheme the entire site.

### Color Groups

```css
/* Dark page surfaces — adjust these to change the overall darkness level */
--bg-nav:         #0e0c0a;   /* top navigation bar */
--bg-page:        #16120e;   /* main page background */
--bg-card:        #231b17;   /* card / chip surfaces */
--bg-footer:      #0a0807;   /* footer background */
--bg-hero-start/mid/end      /* home page gradient (3 stops) */

/* Cream — used for text and UI elements on dark surfaces */
--cream:          #fdebd0;   /* full opacity */
--cream-75 … --cream-06      /* opacity steps (75% down to 6%) */

/* Body text — adapts to the current background */
--text:           #fdebd0;   /* primary text (cream on dark) */
--text-secondary              /* 60% cream */
--text-muted                  /* 38% cream */
--text-dim                    /* 22% cream */
--text-on-cream:  #2d2422;   /* dark text used ON cream/light elements (e.g. hero button) */

/* Accent — the green used for progress, CTAs, and correct states */
--accent:         #58cc02;
--accent-dark:    #3f9b02;   /* button shadow / pressed state */

/* Status colors */
--correct / --correct-bg / --correct-text
--incorrect / --incorrect-dark / --incorrect-bg / --incorrect-text
--info / --info-bg / --info-light / --info-text

/* Borders */
--border:         rgba(cream, 0.10)   /* card borders */
--border-ph:      rgba(cream, 0.08)   /* chip / progress track borders */

/* Shadows */
--shadow-card:        /* resting card shadow */
--shadow-card-hover:  /* lifted / hover card shadow */

/* Spacing */
--page-padding-x:  24px   /* horizontal padding on all main content */
--page-padding-y:  40px   /* vertical padding on all main content */

/* Layout */
--nav-height:      68px   /* height of the fixed top bar */

/* Radius */
--radius-card: 16px  |  --radius-btn: 12px  |  --radius-chip: 12px
--radius-sm: 6px     |  --radius-pill: 999px
```

### Switching to a Light Theme

Replace the background and text variables in `theme.css`:

```css
--bg-page:        #faf7f2;
--bg-card:        #ffffff;
--bg-nav:         #1e1614;   /* nav stays dark */
--text:           #2d2422;
--text-secondary: #8b7d72;
--text-muted:     #b8aba5;
--text-dim:       #c4b8b2;
--border:         #ede3d8;
--border-ph:      #e0d8d0;
--correct-bg:     #f0fce7;  --correct-text:   #2d7a00;
--incorrect-bg:   #fff0f0;  --incorrect-text: #b20000;
--info-bg:        #e8f6fe;  --info-light:     #f0f9ff;  --info-text: #0a7abf;
--shadow-card:      0 2px 8px rgba(45, 36, 34, 0.06);
--shadow-card-hover: 0 8px 24px rgba(45, 36, 34, 0.08);
```

### Changing the Font

1. Swap the `<link>` tags in `src/app.html` for your new Google Font (or self-hosted font)
2. Update `--font` in `theme.css`:
   ```css
   --font: 'Your Font Name', sans-serif;
   ```

### Changing the Accent Color

Update two variables in `theme.css`:
```css
--accent:      #your-color;
--accent-dark: #darker-shade;   /* ~20% darker, used for button shadows */
```
This propagates to: progress bar, primary buttons, correct state, card CTAs, and all `var(--accent)` usages automatically.

---

## Components

### `Button.svelte`

```svelte
<Button variant="primary" onclick={fn}>Label</Button>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'danger' \| 'ghost'` | `'primary'` | Visual style |
| `disabled` | `boolean` | `false` | Disables interaction |
| `onclick` | `() => void` | — | Click handler |
| `children` | `Snippet` | required | Button label content |

**Styling each variant** — edit `Button.svelte`:
- `primary` → uses `--accent` + `--accent-dark` shadow
- `secondary` → uses `--bg-card` + `--info` text + `--border-ph`
- `danger` → uses `--incorrect` + `--incorrect-dark` shadow
- `ghost` → transparent + `--text-secondary` + `--border-ph`

---

### `ChoiceChip.svelte`

```svelte
<ChoiceChip text="Option A" state="default" onclick={fn} />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | required | Label text |
| `state` | `'default' \| 'selected' \| 'correct' \| 'incorrect'` | `'default'` | Visual state |
| `disabled` | `boolean` | `false` | Disables interaction |
| `onclick` | `() => void` | — | Click handler |

**Styling each state** — controlled entirely by status variables in `theme.css`:
- `default` → `--bg-card` + `--border-ph`
- hover → `--info-light` + `--info` border
- `selected` → `--info-bg` + `--info-text`
- `correct` → `--correct-bg` + `--correct-text`
- `incorrect` → `--incorrect-bg` + `--incorrect-text`

---

### `InteractionCard.svelte`

```svelte
<InteractionCard icon="🪞" scenario="Scene description here." />
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `icon` | `string` | yes | Emoji or character shown large at top |
| `scenario` | `string` | yes | Scenario / scene-setting text |
| `children` | `Snippet` | no | Optional content rendered below the text |

Styling: `--bg-card`, `--border`, `--text`, `--shadow-card`, `--radius-card`

---

### `Footer.svelte`

No props — static content. Edit the text directly in `src/lib/components/Footer.svelte`.
Placed only in `src/routes/+page.svelte` (home page only).
Styling: `--bg-footer`, `--cream`, `--cream-65`

---

## Data Files

### `src/lib/data/conversations.ts` — Topic catalog

Defines the cards shown on the `/conversation` hub page.

```typescript
export const conversations: ConversationItem[] = [
  {
    id: 'self-talk',          // must match a key in the API registry
    title: 'Self-Talk',
    description: 'Shown on the selection card.',
    tag: 'Inner World · 3 steps'
  },
  // ...
]
```

To add a new topic: add an entry here, then add matching entries in the API file below.

---

### `src/lib/api/conversation.ts` — Mock API

Two registries that simulate API responses with ~400–600ms delay:

**`formatRegistry`** — maps `id` → layout schema (how many steps, which components)
**`dataRegistry`** — maps `id` → content (icons, questions, descriptions, choices)

To add content for a new conversation `id`:
1. Add it to `formatRegistry` with step count and component list
2. Add it to `dataRegistry` with the actual placeholder/real text
3. Add it to `conversations.ts` so it appears on the hub

To connect a real API later, replace the `delay()` + registry lookup in `fetchFormat()` and `fetchData()` with actual `fetch()` calls. The rest of the codebase is unchanged.

---

### `src/lib/types/schema.ts` — API types

Defines the shape of both API responses:

```typescript
FormatSchema   // what fetchFormat() returns — layout structure
ConversationData  // what fetchData() returns — content
```

Extend these when adding new layout types (e.g. `'dialogue'`, `'fill-blank'`).

---

## Logic Flow

```
User lands on /
│
├─ Sees hero section (home page)
│   └─ Clicks "Begin →"
│
▼
/conversation  (hub page)
│
├─ Renders conversation catalog from conversations.ts
├─ Shows cards: title, description, tag, "Begin →" link
│
└─ User clicks a card → navigates to /conversation/[id]

▼
/conversation/[id]  (experience page)
│
├─ $effect fires on mount (and on id change)
│   ├─ fetchFormat(id)  ──┐
│   └─ fetchData(id)    ──┴── Promise.all → both run in parallel
│
├─ While loading → spinner shown
├─ On error → error message + back link
│
└─ On success → step-flow renders
    │
    ├─ Top bar: progress bar + step counter
    │
    ├─ For each step (driven by data.steps[currentStep]):
    │   ├─ InteractionCard  ← icon + description from data
    │   ├─ ChoiceChips      ← choices from data (count from format)
    │   └─ Continue button  ← appears only after a chip is selected
    │
    ├─ Selecting a chip → selectedId set → button appears
    ├─ Clicking Continue → currentStep += 1, selectedId reset
    ├─ Last step + Continue → done = true
    │
    └─ Done screen → Restart (resets state) or All Conversations (back to hub)
```

---

## Adding a New Route / Page

1. Create `src/routes/your-route/+page.svelte`
2. Add a nav link in `src/routes/+layout.svelte`
3. If the page uses the step-flow pattern, import from `$lib/api/conversation` and `$lib/components/`
4. All theme variables are available automatically (imported once in `+layout.svelte`)

---

## Adding a New Layout Type

The `FormatSchema.layout` field is currently `'step-flow'` only. To add a new type:

1. Extend the union in `src/lib/types/schema.ts`:
   ```typescript
   layout: 'step-flow' | 'dialogue' | 'fill-blank';
   ```
2. Add a handler branch in `/conversation/[id]/+page.svelte`:
   ```svelte
   {:else if load.format.layout === 'dialogue'}
     <!-- render DialogueComponent here -->
   ```
3. Create any new components in `src/lib/components/`
