# HVACS Website

Modern responsive website for **HVACS** at `hvacs.in`, built with Next.js, Tailwind CSS, Framer Motion and local optimized visuals.

## Pages

- Home
- About Us
- Services
- Industries
- Projects
- Blog / Insights
- Contact Us

## Local Development

```bash
npm install
npm run generate:profile
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run generate:profile
npm run build
npm run start
```

## Deployment

The project is ready for Vercel, Netlify or any Node-compatible hosting provider.

1. Push the `hvacs-website` folder to a Git repository.
2. Set the framework preset to `Next.js`.
3. Use `npm install` as the install command.
4. Use `npm run build` as the build command.
5. Set the production domain to `hvacs.in`.

## Contact Form

The contact form posts to `/api/contact` and returns a success response after validation. Connect this route to an email service, CRM or database when production lead capture details are finalized.

## Brand Updates

Update these values before launch if needed:

- Contact details in `lib/site.ts`
- WhatsApp number in `lib/site.ts`
- Google Maps embed area in `app/contact/page.tsx`
- Company profile content in `scripts/generate-profile-pdf.mjs`
