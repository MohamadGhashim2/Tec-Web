# TEC Landing Page

Mobile-first automotive landing page for TEC in Başakşehir, Istanbul. The app is built with React, Vite, and Tailwind CSS, with Arabic and Turkish support, centralized content/configuration, and Playwright coverage for the main responsive behaviors.

## Run locally

```bash
npm install
npm run dev
```

Open the local Vite URL shown in the terminal.

## Production build

```bash
npm run build
```

## Playwright validation

Install the test dependency and browser once:

```bash
npm install
npx playwright install chromium
```

Run the responsive checks:

```bash
npx playwright test
```

## Editable business configuration

Main business and contact settings live in `src/content/business.js`.

This is where you can update:

- business name
- phone number and `tel:` link
- WhatsApp number
- Arabic and Turkish WhatsApp default messages
- WhatsApp icon asset path
- Instagram URL placeholder
- Google Maps directions URL
- business hours
- address details
- specialty section image URLs

## Project structure

```text
src/
  components/
    layout/
    sections/
    ui/
  content/
  hooks/
  i18n/
    translations/
  lib/
  pages/
  styles/
```

## Notes

- Browser language defaults to Arabic only when `navigator.language` starts with `ar`; otherwise Turkish is used.
- The Instagram link is intentionally left as a placeholder in config until the exact URL is available.
- Google Maps directions currently use a generated search URL from the provided address and can be replaced with a direct pin link later.
