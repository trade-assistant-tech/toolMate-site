# ToolMate

[![Netlify Status](https://api.netlify.com/api/v1/badges/78a86a7a-fbc1-41f4-a062-005ca1bad0a8/deploy-status)](https://app.netlify.com/projects/toolmateuk/deploys)

**Your craft. Our admin.**

ToolMate is an AI-powered assistant for UK tradespeople that handles enquiries, quotes, and follow-ups via WhatsApp. You stay in control — reviewing and approving everything before it's sent.

## About

Tradespeople lose hours every week to admin: missed calls, late quotes, forgotten follow-ups. ToolMate picks up every enquiry, drafts every quote, and handles every follow-up — so you can focus on the work you're actually good at.

- Responds to enquiries instantly via WhatsApp
- Drafts quotes for your review and approval
- Follows up automatically so no job slips through
- Works around your schedule, not the other way around

## Tech Stack

- Static HTML/CSS/JS landing page
- [Tailwind CSS](https://tailwindcss.com) (CDN)
- [Barlow Semi Condensed](https://fonts.google.com/specimen/Barlow+Semi+Condensed) + [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts
- Deployed on [Netlify](https://www.netlify.com)
- Analytics via [Umami](https://umami.is) (privacy-friendly, cookieless)

## Local Development

This is a static site with no build step. To run locally:

```bash
# Using Python
python3 -m http.server 8000

# Or using Node
npx serve .
```

Then open `http://localhost:8000` in your browser.

## Project Structure

```
.
├── index.html                 # Main landing page
├── netlify.toml               # Netlify deployment config
├── assets/
│   ├── brand-guidelines.md    # Brand guidelines and design tokens
│   ├── favicon.svg            # Site favicon
│   ├── logo.html              # Logo source (SVG)
│   ├── logo.png               # Logo raster export
│   └── whatsapp-jobmate-demo.png  # WhatsApp demo screenshot
└── README.md
```

## Configuration

The waitlist form webhook URL is configured at runtime via `window.TOOLMATE_WEBHOOK_URL`. If no webhook is configured, form submissions are logged to the browser console.

## License

All rights reserved.
