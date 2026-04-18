# Netskart — ProNet® Website Clone

A production-ready **Next.js 14** + **Tailwind CSS** recreation of the Netskart D2C protective netting website, built from scratch with a premium white + warm orange design system.

---

## 🗂️ Project Structure

```
netskart-clone/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles, font imports, CSS vars
│   │   ├── layout.tsx           # Root layout + metadata
│   │   ├── page.tsx             # Homepage (all sections composed here)
│   │   ├── not-found.tsx        # Custom 404 page
│   │   ├── about/page.tsx       # About Us page
│   │   ├── enquire/page.tsx     # Enquiry / contact form
│   │   └── products/
│   │       ├── page.tsx         # Products listing
│   │       └── [slug]/page.tsx  # Dynamic product detail page
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       # Sticky nav + dropdown + mobile drawer
│   │   │   └── Footer.tsx       # Full footer with CTA banner
│   │   ├── sections/
│   │   │   ├── Hero.tsx         # Main hero with problem-nav card
│   │   │   ├── TrustBar.tsx     # Animated marquee trust strip
│   │   │   ├── ProblemNav.tsx   # 8-problem icon grid
│   │   │   ├── ProductsSection.tsx
│   │   │   ├── HowItWorks.tsx   # 4-step process
│   │   │   ├── StatsSection.tsx # Navy stats band
│   │   │   ├── WhyUs.tsx        # USP grid + highlight box
│   │   │   ├── Testimonials.tsx # Reviews carousel + grid
│   │   │   ├── FAQ.tsx          # Accordion FAQ
│   │   │   └── EnquireCTA.tsx   # Dark CTA section with form
│   │   └── ui/
│   │       ├── ProductCard.tsx  # Reusable product card
│   │       └── WhatsAppButton.tsx # Floating WA chat button
│   └── data/
│       └── index.ts             # All dummy data (products, FAQs, nav, etc.)
├── public/                      # Static assets
├── tailwind.config.js           # Custom colors, fonts, shadows, animations
├── next.config.js
├── vercel.json
└── package.json
```

---

## 🎨 Design System

| Token | Value |
|---|---|
| Primary Orange | `#E8612A` |
| Navy | `#1A2E5A` |
| Teal Accent | `#09D7CB` |
| Warm Background | `#F9F3EE` |
| Display Font | Playfair Display (serif) |
| Body Font | DM Sans (sans-serif) |

---

## 🚀 Run Locally

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Steps

```bash
# 1. Clone / download and navigate to project
cd netskart-clone

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
open http://localhost:3000
```

---

## 📦 Build for Production

```bash
npm run build
npm start
```

---

## ☁️ Deploy to Vercel

### Option A — Vercel CLI (fastest)

```bash
# Install Vercel CLI globally
npm install -g vercel

# From project root:
vercel

# Follow prompts — it auto-detects Next.js
# Your live URL will appear at the end
```

### Option B — GitHub + Vercel Dashboard

1. Push code to a GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/netskart-clone.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repo
4. Framework: **Next.js** (auto-detected)
5. Click **Deploy** — done in ~60 seconds ✅

---

## 📄 Pages Included

| Route | Description |
|---|---|
| `/` | Homepage — Hero, Trust bar, Problems, Products, Stats, Process, USPs, Reviews, FAQ, CTA |
| `/products` | All products listing with filter tabs |
| `/products/[slug]` | Dynamic product detail (6 products pre-configured) |
| `/enquire` | Enquiry form + contact sidebar |
| `/about` | Company story, team, stats |
| `*` | Custom 404 page |

---

## ✅ Features

- **Fully responsive** — mobile-first, tested at 375px → 1440px
- **Sticky navbar** with mega-dropdown on desktop, slide-out drawer on mobile
- **Animated marquee** trust strip
- **Problem-based navigation** — 8 customer problems mapped to products
- **Product cards** with discount badges, rating stars, feature chips
- **Testimonials** carousel (mobile) + grid (desktop)
- **Accordion FAQ**
- **Floating WhatsApp button** with tooltip bubble
- **Dynamic product detail pages** with static generation
- **Custom 404** page
- **SEO metadata** on every page
- **Zero external API dependencies** — all data is local, works offline

---

## 🔧 Customisation

- **Products**: Edit `src/data/index.ts` → `PRODUCTS` array
- **Colors**: Edit `tailwind.config.js` → `theme.extend.colors`
- **Nav links**: Edit `src/data/index.ts` → `NAV_LINKS`
- **Testimonials / FAQs / Problems**: All in `src/data/index.ts`
- **Images**: Replace Unsplash URLs with your own CDN URLs in the `PRODUCTS` array
