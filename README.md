# Distingo Resto Pub

A modern, responsive, and elegant website for **Distingo Resto Pub**, built with React, Tailwind CSS, and Framer Motion.

![License](https://img.shields.io/badge/license-MIT-blue.svg)

## ✨ Features

- **Responsive Design** – Works seamlessly on desktop, tablet, and mobile
- **Modern Styling** – Custom Tailwind theme with "Dark Slate", "Warm Wood", and "Soft Amber" tones
- **Smooth Animations** – Subtle entrance animations using Framer Motion
- **Interactive Menu** – Tabbed menu categories for easy browsing
- **Contact Form** – Functional form validation with react-hook-form + zod

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Frontend | React + TypeScript |
| Styling | Tailwind CSS v4 |
| Routing | wouter |
| Animations | framer-motion |
| Icons | lucide-react |
| Forms | react-hook-form + zod |
| Build | Vite |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/distingo-resto-pub.git
   cd distingo-resto-pub
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5000](http://localhost:5000) in your browser

### Build for Production

```bash
npm run build
```

The production build will be output to `dist/public/`.

## 🌐 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "Add New..." → "Project"
4. Import your GitHub repository
5. Vercel will auto-detect the settings from `vercel.json`
6. Click "Deploy"

That's it! Your site will be live at `your-project.vercel.app`.

#### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/distingo-resto-pub)

## 🎨 Customization Guide

### Changing the Menu

Edit `client/src/pages/Menu.tsx` and modify the `menuData` array:

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

### Changing Images

Images are located in `attached_assets/`. To replace:

1. Upload new images to the `attached_assets/` folder
2. Update imports in the relevant pages (`Home.tsx`, `About.tsx`, `Gallery.tsx`):
   ```typescript
   import myNewImage from '@assets/my-image.jpg';
   ```

### Updating Contact Info

Edit `client/src/pages/Contact.tsx` and `client/src/components/layout/Footer.tsx` to update:
- Address
- Phone number  
- Email
- Opening hours

### Modifying Colors/Theme

Edit `client/src/index.css` and adjust the CSS variables:

```css
:root {
  --primary: /* your HSL value */;
  --secondary: /* your HSL value */;
  /* ... */
}
```

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility functions
│   │   └── index.css       # Global styles & theme
│   └── public/             # Static assets
├── attached_assets/        # Images and media
├── server/                 # Express server (dev only)
├── vercel.json             # Vercel deployment config
└── vite.config.ts          # Vite configuration
```

## 📄 License

This project is licensed under the MIT License.

---

Made with ❤️ for Distingo Resto Pub
