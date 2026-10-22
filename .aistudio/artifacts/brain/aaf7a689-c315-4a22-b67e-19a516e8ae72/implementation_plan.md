# Dynamic SEO Management (React Helmet) & Warm Alabaster White Theme Transformation

Transform Riad Fez into an elegant warm alabaster white aesthetic with sun-bleached terracotta and deep bronze architectural accents, and integrate a route-aware `react-helmet-async` SEO engine managing bilingual titles, descriptions, canonical links, OpenGraph social cards, and structured schema.

## User Review & Critical Decisions

> [!IMPORTANT]
> The following directions have been confirmed and will guide the implementation:

- **Confirmed Theme Aesthetic**: Warm alabaster white (`#FAF8F5` background, `#FFFFFF` crisp card surfaces) paired with warm sun-bleached terracotta (`#D97757` / `#C86242`), deep bronze espresso typography (`#241B16`), and saffron gold (`#C89B2B`) highlights.
- **Confirmed SEO Scope**: Comprehensive route-level SEO for all pages (`/`, `/about`, `/services`, `/gallery`, `/contact`, `/reserve`) featuring bilingual meta tags (EN/FR synchronization with active language toggle), dynamic `<title>`, meta `<description>`, canonical URLs, OpenGraph properties (`og:title`, `og:description`, `og:image`, `og:type`), and Twitter summary cards.
- **Library Selection**: `react-helmet-async` with `<HelmetProvider>` at application root to guarantee full React 19 compatibility without deprecated lifecycle warnings.

---

## 1. Overview & Core Concept

- **What It Does**:
  - Dynamically updates the browser tab title, search engine meta descriptions, OpenGraph sharing tags, and HTML `lang` attributes as users navigate between Riad Fez's routes and toggle between English and French.
  - Transforms the visual environment from the dark night-courtyard palette into a luminous, daylight Moroccan riad bathed in gentle Mediterranean sun—featuring warm plaster tones, terracotta stone textures, and bronze detailing.
- **Target Audience / Persona**: International luxury travelers and cultural tourists seeking an authentic Moroccan riad experience with effortless readability, accessible contrast, and instant search visibility.
- **Key Value**: Delivers professional search engine indexing and social link sharing previews while providing a soothing, high-contrast daylight reading experience.

---

## 2. User Experience & Visual Design

### Key User Flows
1. **Route Navigation & Metadata Synchronization**:
   - As the visitor browses between Home, About, Services, Gallery, Contact, and Reservation, `SEOHead` updates the document title (e.g., `Luxury Stay & Rooms | Riad Fez` / `Séjour & Chambres de Luxe | Riad Fès`), canonical link, and OpenGraph snippet.
2. **Language Toggle Impact**:
   - Switching between EN and FR in the navigation bar instantaneously updates the dynamic SEO tags, document `<html lang="...">`, and page copy without full-page reloading.
3. **Warm Alabaster Light Experience**:
   - The top navigation transitions into a frosted alabaster glass bar (`rgba(250, 248, 245, 0.85)` with hairline bronze borders).
   - Content cards adopt pristine porcelain/alabaster surfaces with subtle natural shadows (`shadow-sm`, `border border-bronze/10`) and deep bronze typography for WCAG AAA contrast.

### Visual Identity & Theme
- **Dominant Neutral Canvas (60%)**: `#FAF8F5` (Warm Alabaster plaster) with crisp `#FFFFFF` interior courtyard cards.
- **Structural Surfaces & Type (30%)**: Deep bronze-espresso text (`#241B16`) and muted warm stone typography (`#63554D`).
- **Warm Tactile Accents (10%)**: Sun-bleached terracotta (`#D97757` / `#C86242`), emerald-patina mint (`#2B8A78` for conscious contrast against light backgrounds), and saffron gold (`#C89B2B`).
- **Typography**:
  - *Display / Headings*: Cormorant Garamond (refined luxury serif, high optical contrast).
  - *Body Prose*: Montserrat (clean geometric clarity, balanced tracking).
- **Anti-Slop Discipline**:
  - Zero pill badges on metadata; clean typography with `·` separators.
  - No decorative status dots or fake telemetry.
  - Strict Top Bar Contract with one-line brand wordmark, 5 clean navigation links, and a single primary "Book Now" CTA.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: `react-helmet-async` vs. traditional `react-helmet`**:
  - *Chosen Approach*: `react-helmet-async` with a root `<HelmetProvider>`.
  - *Why*: React 19 deprecates legacy `UNSAFE_componentWillMount` methods utilized by unmaintained `react-helmet`. `react-helmet-async` is thread-safe and natively supports concurrent mode.
- **Decision 2: Centralized Metadata Registry (`src/config/seo.ts`)**:
  - *Chosen Approach*: Create a declarative SEO configuration table containing titles, descriptions, keywords, and OpenGraph descriptors for both English and French per route.
  - *Why*: Eliminates boilerplate duplication across individual page components; ensures metadata updates automatically whenever the user switches languages.
- **Decision 3: Color Contrast Calibration for Light Mode**:
  - *Chosen Approach*: Calibrate primary emerald (`#73D8C3` on dark becomes `#2B8A78` on light) and terracotta so that all button labels, links, and body copy achieve $\ge 4.5:1$ contrast against alabaster surfaces.

---

## 4. Technical Architecture & Data Strategy

```
┌─────────────────────────────────────────────────────────────┐
│                       main.tsx                              │
│                (HelmetProvider Root)                        │
└──────────────────────────────┬──────────────────────────────┘
                               │
┌──────────────────────────────▼──────────────────────────────┐
│                       App.tsx                               │
│            LanguageProvider + BrowserRouter                 │
│  ┌───────────────────────────────────────────────────────┐  │
│  │                    Navbar.tsx                         │  │
│  │  (Brand · 5 Nav Links · Language Toggle · Book CTA)   │  │
│  └───────────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────────┐  │
│  │               AnimatedRoutes / Switch                 │  │
│  │   Each route mounts a standardized <SEOHead />:       │  │
│  │   - Home (/): "Riad Fez - Luxury Boutique Hotel"      │  │
│  │   - About (/about): "Our Heritage & Craft"            │  │
│  │   - Services (/services): "Curated Experiences"       │  │
│  │   - Gallery (/gallery): "Sanctuary Visual Gallery"    │  │
│  │   - Contact (/contact): "Visit & Inquiries"           │  │
│  │   - Reserve (/reserve): "Book Your Stay"              │  │
│  └───────────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────────┐  │
│  │                    Footer.tsx                         │  │
│  │  (Wordmark · Quick Links · Social Media · Copyright)  │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

### Metadata & SEO Specification Table

| Route | English Title (`<title>`) | French Title (`<title>`) | Description Snippet (120–160 chars) |
| :--- | :--- | :--- | :--- |
| `/` | `Riad Fez | Luxury Boutique Hotel & Sanctuary in Fez Medina` | `Riad Fès | Hôtel Boutique de Luxe & Sanctuaire dans la Médina` | Discover an ethereal sanctuary in the heart of Fez Medina. Handcrafted architecture, tranquil courtyards, and warm hospitality. |
| `/about` | `Our Story & Heritage | Riad Fez Morocco` | `Notre Histoire & Patrimoine | Riad Fès Maroc` | Explore the 17th-century heritage of Riad Fez, our dedicated artisan craftspeople, authentic cooking workshops, and guest reviews. |
| `/services` | `Services & Experiences | Riad Fez` | `Services & Expériences | Riad Fès` | Indulge in complimentary patio tea, gourmet buffet breakfast, traditional welcome amenities, and private excursions across Fez. |
| `/gallery` | `Visual Gallery | Moments of Light at Riad Fez` | `Galerie Photos | Moments de Lumière au Riad Fès` | Explore high-resolution photos of our sculpted courtyard, handcrafted suites, panoramic rooftop terrace, and Moroccan cuisine. |
| `/contact` | `Contact & Location | Riad Fez Medina` | `Contact & Localisation | Riad Fès Médina` | Reach our concierge in the ancient Medina of Fez. Interactive location map, direct telephone, and inquiry message form. |
| `/reserve` | `Book Your Stay | Riad Fez Reservations` | `Réservez Votre Séjour | Réservations Riad Fès` | Reserve your luxury retreat in Fez. Direct booking with best rate guarantee, customized suites, and personalized hospitality. |

### Implementation Steps
1. **Package Installation**: Install `react-helmet-async` via `install_applet_package`.
2. **SEO Head Component**: Create `src/components/SEOHead.tsx` powered by `react-helmet-async` with OpenGraph, Twitter, canonical, and alternate language tags.
3. **SEO Configuration**: Create `src/config/seo.ts` with comprehensive EN/FR definitions.
4. **Theme Refresh (`src/index.css` & components)**:
   - Update CSS variables for light theme:
     - `--color-background: #FAF8F5`
     - `--color-surface: #FFFFFF`
     - `--color-foreground: #241B16`
     - `--color-primary: #2B8A78` (accessible deep emerald)
     - `--color-secondary: #D97757` (sun-bleached terracotta)
     - `--color-tertiary: #C89B2B` (saffron bronze)
   - Update glassmorphism styles, borders, and input fields across all pages to harmonize with warm alabaster white.
5. **Route Integration**: Embed `<SEOHead />` across all 6 views with route-specific props.
6. **Verification**: Run `compile_applet` and `lint_applet` to confirm zero regressions.
