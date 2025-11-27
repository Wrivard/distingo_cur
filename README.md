# Distingo Resto Pub Website

A modern, responsive, and elegant website for "Distingo Resto Pub", built with React, Tailwind CSS, and Framer Motion.

## Project Overview

This project is a single-page application (SPA) using `wouter` for routing. It features a cozy, upscale aesthetic suitable for a bistro or gastropub.

### Key Features
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile.
- **Modern Styling**: Custom Tailwind theme with "Dark Slate", "Warm Wood", and "Soft Amber" tones.
- **Animations**: Subtle entrance animations using Framer Motion.
- **Interactive Menu**: Tabbed menu categories for easy browsing.
- **Contact Form**: Functional form validation (logs to console for now).

## Tech Stack
- **Frontend**: React + TypeScript
- **Styling**: Tailwind CSS v4
- **Routing**: wouter
- **Animations**: framer-motion
- **Icons**: lucide-react
- **Form Handling**: react-hook-form + zod

## Getting Started

### Running Locally
1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Start the development server:
    ```bash
    npm run dev
    ```
3.  Open http://localhost:5000 in your browser.

## Customization Guide

### 1. Changing the Menu
Open `client/src/pages/Menu.tsx`.
Locate the `menuData` array at the top of the file. You can add, edit, or remove categories and items there.
```typescript
const menuData = [
  {
    id: 'starters',
    title: 'Starters',
    items: [
      { name: 'New Dish', description: 'Description here', price: '$20' },
      // ...
    ]
  },
  // ...
];
```

### 2. Changing Images
Images are located in `attached_assets/`.
To replace images:
1.  Upload your new images to the `attached_assets/` folder (or `client/src/assets` if you prefer).
2.  Update the imports in the relevant pages (`Home.tsx`, `About.tsx`, `Gallery.tsx`).
    ```typescript
    import myNewImage from '@assets/my-image.jpg';
    ```

### 3. Updating Contact Info
Open `client/src/pages/Contact.tsx` (and `Footer.tsx`) to update the address, phone number, email, and opening hours.

### 4. Modifying Colors/Theme
Open `client/src/index.css`.
The color palette is defined in the `:root` variables (e.g., `--primary`, `--secondary`).
You can adjust these HSL values to change the brand colors.

## Deployment
This project is ready to be deployed on Replit. simply hit the "Run" button.
To deploy to Vercel or Netlify, run `npm run build` and serve the `dist` folder.
