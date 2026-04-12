# Dax Rajani — Portfolio Website

Personal portfolio for Dax Rajani, Embedded Firmware Engineer. Built with Next.js 16, TypeScript, Tailwind CSS v4, Framer Motion, shadcn/ui, and tsParticles.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion, react-type-animation
- **Particles:** @tsparticles/react + @tsparticles/slim
- **UI Components:** shadcn/ui
- **Icons:** lucide-react
- **Email:** Resend
- **Deployment:** Vercel

## Local Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Add environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Then open `.env.local` and add your Resend API key:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxx
   ```
   Get a free key at [resend.com/api-keys](https://resend.com/api-keys).

3. **Replace the resume placeholder**
   Replace `public/DaxRajani_Resume.pdf` with your actual resume PDF.

4. **Start the dev server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000).

## Deployment to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import your repo.
3. In the Vercel dashboard, go to **Settings → Environment Variables** and add:
   ```
   RESEND_API_KEY = re_xxxxxxxxxxxx
   ```
4. Deploy. Vercel will auto-deploy on every push to `main`.

> **Before deploying:** Replace `public/DaxRajani_Resume.pdf` with your actual resume file.

## Project Structure

```
src/
  app/
    api/contact/route.ts   # Contact form API (Resend)
    globals.css            # Global styles, Tailwind v4 theme
    layout.tsx             # Root layout (Inter font, Navbar, Footer, Toaster)
    page.tsx               # Page assembly + back-to-top button
  components/
    layout/
      Navbar.tsx           # Sticky navbar with scroll state + mobile drawer
      Footer.tsx           # Footer with social links
    sections/
      Hero.tsx             # Hero with tsParticles + TypeAnimation
      Experience.tsx       # Timeline work experience
      Projects.tsx         # Project cards grid
      Skills.tsx           # Skill chips grid + Core Stack bar
      Education.tsx        # Education cards + Awards list
      Contact.tsx          # Contact info + form
    ui/                    # shadcn/ui components
  data/
    portfolio.ts           # Single source of truth for all content
  lib/
    utils.ts               # shadcn utility
```
