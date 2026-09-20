# The House Chapter

> **Ideas for a home well lived.**

A broad home-decor and interiors publication designed primarily for **Pinterest discovery and organic search**, built with **Astro**, Tailwind CSS, and TypeScript.

---

## 🏛️ Brand & Editorial Pillars

**The House Chapter** is an independent digital interiors publication celebrating beautiful, practical, attainable ideas for the entire home. 

* **Signature Specialty Pillar**: **Entryways & Hallways** (high-authority focus on transitions, drop zones, narrow corridors, and shoe storage architectures).
* **Core Philosophy**: *Broad brand. Focused editorial authority.*
* **Visual Identity**: Warm Alabaster Linen (`#FAF7F2`), Rich Terracotta Clay (`#B66348`), Botanical Forest Olive (`#3B4734`), Meadow Sage (`#73876E`), and Antique Brushed Brass (`#C29B53`).

---

## 📁 Publication Structure

```text
├── public/
│   ├── brand/
│   │   ├── the-house-chapter-logo.svg
│   │   └── the-house-chapter-mark.svg
│   └── favicon.svg
│
├── src/
│   ├── components/
│   │   ├── cards/          # Editorial card variants (ArticleCard, SpecialtyCard, FeaturedHeroCard, HorizontalStoryCard)
│   │   ├── editorial/      # Breadcrumbs, TipBox, MistakeBox, FaqAccordion, NewsletterSignup, SocialShare, AdSlot
│   │   ├── layout/         # SiteHeader, SiteFooter
│   │   ├── search/         # Keyboard-accessible search modal (Ctrl+K)
│   │   └── ui/             # Logo, button treatments
│   │
│   ├── content/
│   │   └── articles/       # Markdown articles with strict Zod validation schema
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro     # Core HTML with JSON-LD (WebSite, Org), Pinterest & OpenGraph meta
│   │   ├── ArticleLayout.astro  # Editorial reading column (680–720px), dropcaps, schema, related articles
│   │   └── CategoryLayout.astro # Editorial category landing pages
│   │
│   ├── pages/
│   │   ├── index.astro                  # Editorial magazine homepage
│   │   ├── [slug].astro                 # Clean flat URLs (/small-entryway-ideas/)
│   │   ├── entryways-hallways/          # Signature authority landing page
│   │   ├── home-decor/                  # Home Decor chapter
│   │   ├── rooms/                       # Rooms chapter
│   │   ├── furniture-styling/           # Furniture & styling chapter
│   │   ├── organization-storage/        # Organization & storage chapter
│   │   ├── small-space-living/          # Small spaces chapter
│   │   ├── apartments/                  # Rental & studio chapter
│   │   ├── awkward-spaces/              # Awkward corners chapter
│   │   ├── outdoor-garden/              # Balconies & patios chapter
│   │   ├── seasonal-home/               # Seasonal transition chapter
│   │   ├── about.astro                  # Editorial story & standards
│   │   ├── contact.astro                # Pitches & correspondence
│   │   ├── privacy.astro                # Privacy policy
│   │   ├── terms.astro                  # Terms & disclosures
│   │   ├── search.astro                 # Archive search page
│   │   ├── 404.astro                    # Editorial 404 recovery page
│   │   ├── rss.xml.ts                   # Automated RSS 2.0 feed
│   │   └── robots.txt.ts                # Crawl directives & sitemap reference
│   │
│   ├── config/
│   │   └── site.ts                      # Centralized site settings & navigation
│   │
│   ├── styles/
│   │   ├── global.css                   # Tailwind base, dropcap, and custom utilities
│   │   └── tokens.css                   # Editorial CSS design tokens
│   │
│   └── utils/
│       ├── relatedArticles.ts           # Algorithmic recommendation engine
│       ├── schema.ts                    # Schema.org JSON-LD generators
│       └── seo.ts                       # Canonical URLs & metadata
```

---

## ⚡ Performance & Pinterest Architecture

* **Zero-JS Reading Experience**: Core reading pages deliver static, pre-rendered HTML with uncompressed client JavaScript under 6KB.
* **Pinterest Direct Save**: Articles feature an instant Pinterest Pin button with media URL and descriptive pin copy.
* **Structured Data**: Automatic `BlogPosting`, `BreadcrumbList`, `FAQPage`, `WebSite`, and `Organization` JSON-LD schemas.
* **Internal Linking Engine**: Algorithmic related-story scoring based on subcategory, primary category, tags, and specialty pillars.

---

## 🛠️ Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📄 License
© The House Chapter. All rights reserved.
