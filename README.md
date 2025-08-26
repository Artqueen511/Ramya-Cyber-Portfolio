# Ramya Arumugam — Cybersecurity Portfolio (README)

**Last updated:** 2025-08-26 08:06 UTC

This repository contains a modern, dark-themed cybersecurity portfolio built with **Next.js (App Router)**, **TailwindCSS**, and **Framer Motion**. The site is designed to showcase projects, certifications, CTF work, blog posts, and contact details with a neon cyber aesthetic and smooth UI/UX interactions.

---

## Goals of this README
1. Provide step-by-step developer instructions to run, build, and deploy the site.
2. Show how to integrate a production-ready contact form (SendGrid / SMTP examples).
3. Explain how to add assets (avatar, case studies) and update content.
4. Provide recommended security, accessibility, and SEO practices.
5. Include a sample GitHub Actions CI workflow and deployment notes.
6. Present a full directory map (generated and attached separately).

---

## Prerequisites
- Node.js v18+ (recommended Node 18/20)
- npm (or your package manager of choice: pnpm, yarn)
- Git (for cloning / version control)
- Optional: Vercel account (recommended) or other hosting provider that supports Next.js

---

## Quick start (local development)

1. **Clone the repo**
```bash
git clone <your-repo-url>.git
cd cyber-portfolio-ramya
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment file (local)**  
Create a `.env.local` file at the project root for development secrets. Example (DO NOT commit `.env.local`):
```
# Basic site
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Contact / email integration (example for SendGrid)
SENDGRID_API_KEY=your_sendgrid_api_key
EMAIL_TO=you@example.com
EMAIL_FROM=portfolio@example.com

# SMTP alternative (for nodemailer)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_pass

# Vercel (if using GitHub Actions deploy)
VERCEL_TOKEN=your_vercel_token
VERCEL_ORG_ID=your_vercel_org_id
VERCEL_PROJECT_ID=your_vercel_project_id
```

4. **Run the dev server**
```bash
npm run dev
# Open http://localhost:3000
```

5. **Build & run production locally**
```bash
npm run build
npm start
```

---

## Contact API — Production examples

By default the repository contains a demo endpoint at `/app/api/contact/route.js` that returns a JSON success. Below are two production-ready examples. Replace `/app/api/contact/route.js` with one of these implementations and add the appropriate env vars to `.env` / deployment secrets.

### A) SendGrid example (recommended for simplicity)
Install SendGrid package:
```bash
npm install @sendgrid/mail
```

Replace `route.js` with:
```js
import sendgrid from "@sendgrid/mail";
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {{
  const form = await req.formData();
  const name = form.get("name");
  const email = form.get("email");
  const subject = form.get("subject") || "Portfolio message";
  const message = form.get("message");

  const msg = {{
    to: process.env.EMAIL_TO,
    from: process.env.EMAIL_FROM,
    subject: `[Portfolio] ${subject}`,
    text: `From: ${name} <${email}>\n\n${message}`,
    html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p><p>${{message}}</p>`,
  }};

  await sendgrid.send(msg);
  return Response.json({{ ok: true, message: `Thanks ${name}, message sent.` }});
}}
```

### B) Nodemailer + SMTP example
Install nodemailer:
```bash
npm install nodemailer
```

Replace `route.js` with:
```js
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({{
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: false,
  auth: {{
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }}
}});

export async function POST(req) {{
  const form = await req.formData();
  const name = form.get("name");
  const email = form.get("email");
  const subject = form.get("subject") || "Portfolio message";
  const message = form.get("message");

  const mail = {{
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: `[Portfolio] ${subject}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  }};

  await transporter.sendMail(mail);
  return Response.json({{ ok: true, message: `Thanks ${name}, message delivered.` }});
}}
```

**Notes:** Use SMTP TLS (secure: true) if using port 465. Always keep SMTP credentials private and store them in your host's secret manager (Vercel/Netlify/GitHub secrets).

---

## How to add / update content & assets

### Avatar / Profile photo
- Replace `/public/avatar.jpg` with your photo (recommended: 800×800px, .webp/.jpg). Keep file name `avatar.jpg` or update references in `/app/page.js` and `/public` accordingly.
- For better performance, use `next/image` with `priority` for the hero avatar and an optimized format like WebP.

### Resume / Case studies
- Add your résumé to `/public/resume.pdf` (already included).
- Place case study PDFs under `/public/case-studies/` and update `data/projects.js` `links.report` to point to `/case-studies/your-report.pdf`.

### Projects / Blog / CTFs
- Edit `data/projects.js`, `data/blog.js`, and `data/ctf.js` to add or update items. The site maps these files into pages automatically.
- Blog content uses a lightweight markdown -> HTML function. For production content consider using `remark` / `rehype` + `rehype-sanitize` for safe HTML rendering and better Markdown features (code blocks, syntax highlighting).

---

## Security & best practices (must-read)
1. **Never commit secrets**. Add `.env.local` and any secret files to `.gitignore`.
2. **Sanitize user content**. The blog currently uses `dangerouslySetInnerHTML`. For public input, use a proper Markdown & sanitization pipeline (`remark`, `rehype-sanitize`).
3. **CSP**. Add a Content Security Policy header via middleware or your hosting provider to reduce XSS risk.
4. **HTTPS only**. Serve the site over HTTPS. Vercel/Netlify handle this automatically.
5. **PGP for sensitive contact**. If you accept encrypted messages, put your PGP public key in `data/profile.js` (`profile.pgp`) and mention it in the Contact section.
6. **Rate-limiting / CAPTCHA** for the contact endpoint if exposed publically to avoid spam. Integrate reCAPTCHA or hCaptcha and/or throttle submissions.
7. **Keep dependencies updated** (especially security libraries). Regularly run `npm audit` and schedule dependency updates.

---

## Accessibility / SEO / Performance
- Use semantic HTML, alt attributes for images, and ARIA labels where needed (e.g., form inputs, nav toggles).
- Ensure color contrast: neon accents are visual but confirm WCAG contrast for body text vs background.
- Use `next/image` for optimized images and `next/font` for font loading efficiency.
- Configure Tailwind JIT purge (done via `content` in `tailwind.config.js`).
- Add open graph images, `og:title`, `og:description`, and `twitter:card` tags (metadata lives in `app/layout.js`). Consider generating social preview images for richer link previews.
- Run Lighthouse audits and optimize based on suggestions (reduce JS bundle, lazy load images, compress assets).

---

## GitHub Actions — CI example (build & test)
A sample workflow is included in `.github/workflows/ci-deploy.yml`. It:
- Installs node
- Installs dependencies
- Runs lint & build
- Optionally triggers a Vercel deploy using VERCEL_TOKEN (you can instead rely on Vercel's native Git integration)

**Make sure to set `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID` in GitHub secrets if you use the action to deploy.**

---

## Deployment options
- **Vercel (recommended)**: Connect your GitHub repo to Vercel. Vercel automatically picks up Next.js app directory projects and sets environment variables via the dashboard.
- **Netlify**: Use Next.js adapter or `@netlify/plugin-nextjs` for App Router support. Production behavior differs — validate SSR/edge features.
- **Self-host**: Build (`npm run build`) and start (`npm start`) on a Node server. Use a process manager (PM2) and reverse proxy (nginx) with TLS certs.

---

## Testing & linting
- Lint: `npm run lint` (config included via `eslint-config-next`)
- Add unit tests with Jest or Vitest and E2E tests with Playwright or Cypress if desired.
- Add automated Lighthouse checks via CI for performance budgets.

---

## Troubleshooting (common issues)
- **Missing dependencies / install errors**: delete `node_modules` and `package-lock.json`, run `npm ci`.
- **Build fails on deployment**: check `NEXT_PUBLIC` env values, check Node version in host settings (use Node 18+).
- **Contact form returns 500**: check server logs and environment variables for email provider keys.

---

## Directory map (short summary)
A full directory tree is included in the repository and the zip file. See the FILE_INDEX.json for a file-by-file size listing.

---

## Next steps / Customization checklist
- [ ] Replace `public/avatar.jpg` with your headshot.
- [ ] Update `data/profile.js` social links to your real GitHub/LinkedIn/Twitter.
- [ ] Add real GitHub links for projects in `data/projects.js`.
- [ ] Add case-study PDFs to `/public/case-studies/` and link them.
- [ ] Set up email provider credentials and update `app/api/contact/route.js` as shown above.
- [ ] Connect repo to Vercel and set environment secrets.
- [ ] Add testimonials and confirm permissions to publish quotes.

---

## Support / Contact
If you want, tell me which hosting platform you prefer (Vercel/Netlify/Heroku) and I will produce a tailored deployment guide + CI example for that platform.

---
© 2025 Ramya Arumugam — generated portfolio scaffold# Ramya-Cyber-Portfolio
# Ramya-Cyber-Portfolio
