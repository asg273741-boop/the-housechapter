# Deploying The House Chapter to Cloudflare Pages

This repository is configured for **Cloudflare Pages** static hosting with enterprise-grade caching, edge delivery, and security headers.

---

## 1. Quick Cloudflare Pages Deployment

1. Go to the [Cloudflare Dashboard](https://dash.cloudflare.com/) and navigate to **Workers & Pages**.
2. Click **Create application** > **Pages** > **Connect to Git**.
3. Select the repository: `asg273741-boop/the-housechapter`.
4. In the **Set up builds and deployments** screen, enter:
   - **Project name**: `the-housechapter`
   - **Production branch**: `main`
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (leave blank or default)
5. **Environment variables** (Optional, `.nvmrc` and `.node-version` are already included):
   - Variable name: `NODE_VERSION`
   - Value: `20`
6. Click **Save and Deploy**.

---

## 2. Included Cloudflare Optimizations

| File | Purpose |
| :--- | :--- |
| **`.nvmrc`** / **`.node-version`** | Pins Node.js version 20 so Cloudflare Pages CI runner executes flawlessly |
| **`wrangler.toml`** | Cloudflare project configuration declaring `pages_build_output_dir = "dist"` and `nodejs_compat` |
| **`public/_headers`** | Caches `/_astro/*` and `/fonts/*` immutably (1 year), sets 1-month image caching, 1-hour RSS/sitemap freshness, and strict security headers (`HSTS`, `nosniff`, `SAMEORIGIN`, `strict-origin-when-cross-origin`) |
| **`public/_redirects`** | Configures clean error routing and custom 404 handling |

---

## 3. Custom Domain Setup

Once deployed on your `*.pages.dev` subdomain:
1. Go to your Pages project > **Custom domains**.
2. Click **Set up a custom domain**.
3. Enter `thehousechapter.com` (and `www.thehousechapter.com`).
4. If your domain's DNS is managed on Cloudflare, DNS records and free SSL certificates will be configured automatically with zero downtime.
