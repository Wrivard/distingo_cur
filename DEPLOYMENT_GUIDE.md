# 🚀 Deployment Guide: React SPA to GitHub & Vercel

A step-by-step guide for deploying a React Single Page Application (SPA) with Express backend to GitHub and Vercel.

---

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Project Structure Overview](#project-structure-overview)
3. [Step 1: Prepare Your Project](#step-1-prepare-your-project)
4. [Step 2: Initialize Git & Push to GitHub](#step-2-initialize-git--push-to-github)
5. [Step 3: Deploy to Vercel](#step-3-deploy-to-vercel)
6. [Step 4: Configure Vercel](#step-4-configure-vercel)
7. [Step 5: Verify Deployment](#step-5-verify-deployment)
8. [Troubleshooting](#troubleshooting)
9. [Understanding the Architecture](#understanding-the-architecture)

---

## Prerequisites

Before you begin, make sure you have:

- ✅ [Node.js](https://nodejs.org/) installed (v18 or higher recommended)
- ✅ [Git](https://git-scm.com/) installed
- ✅ A [GitHub](https://github.com/) account
- ✅ A [Vercel](https://vercel.com/) account (free tier works great!)
- ✅ Your project builds successfully locally (`npm run build`)

---

## Project Structure Overview

This guide assumes your project has this structure:

```
your-project/
├── client/                 # React frontend
│   ├── src/
│   └── index.html
├── server/                 # Express backend (optional)
│   ├── index.ts
│   └── routes.ts
├── api/                    # Vercel serverless functions (optional)
│   └── index.ts
├── dist/                   # Build output (generated)
│   └── public/             # React build files
├── package.json
├── vite.config.ts         # Vite configuration
├── vercel.json            # Vercel configuration
└── .gitignore
```

---

## Step 1: Prepare Your Project

### 1.1 Create or Update `.gitignore`

Make sure you have a `.gitignore` file to exclude unnecessary files:

```gitignore
# Dependencies
node_modules/
npm-debug.log*
package-lock.json

# Build outputs
dist/
build/
.next/

# Environment variables
.env
.env.local
.env.production

# Vercel
.vercel/

# System files
.DS_Store
Thumbs.db
.replit
.local/

# IDE files
.vscode/
.idea/
*.swp
*.swo

# Logs
*.log
logs/
```

### 1.2 Create `vercel.json`

Create a `vercel.json` file in your project root:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist/public",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

**What this does:**
- `buildCommand`: Tells Vercel how to build your project
- `outputDirectory`: Where your built React files are located
- `rewrites`: Enables client-side routing (React Router) by falling back to `index.html`

### 1.3 Verify Your Build Configuration

Make sure your `package.json` has a build script:

```json
{
  "scripts": {
    "dev": "vite dev --port 5000",
    "build": "tsx script/build.ts",
    "start": "NODE_ENV=production node dist/index.cjs"
  }
}
```

And your `vite.config.ts` outputs to the correct directory:

```typescript
export default defineConfig({
  // ...
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
});
```

### 1.4 Test Build Locally

Before deploying, make sure your build works:

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Verify dist/public contains index.html and assets
ls dist/public
```

You should see files like:
```
index.html
assets/
  - index-[hash].js
  - index-[hash].css
  - ...
```

---

## Step 2: Initialize Git & Push to GitHub

### 2.1 Initialize Git Repository

If you haven't already initialized Git:

```bash
# Initialize Git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: React SPA with Express backend"

# Set main branch
git branch -M main
```

### 2.2 Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Fill in the details:
   - **Repository name**: `your-project-name` (e.g., "distingo")
   - **Description**: Optional description of your project
   - **Visibility**: Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. Click **"Create repository"**

### 2.3 Connect Local Repository to GitHub

Copy the repository URL from GitHub (looks like `https://github.com/username/repo-name.git`)

```bash
# Add GitHub as remote origin
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Verify remote was added
git remote -v

# Push to GitHub
git push -u origin main
```

### 2.4 Verify Upload

Go to your GitHub repository in your browser - you should see all your files uploaded!

---

## Step 3: Deploy to Vercel

### 3.1 Sign Up / Sign In to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** or **"Log In"**
3. **Important:** Sign in with your **GitHub account** for easy integration

### 3.2 Import Your Project

1. Click **"Add New..."** → **"Project"**
2. You'll see a list of your GitHub repositories
3. Find your repository and click **"Import"**

### 3.3 Configure Project Settings

Vercel will auto-detect most settings, but verify these:

**Framework Preset:**
- Select: **"Vite"** (or "Other" if Vite isn't detected)

**Build & Development Settings:**
- **Build Command**: `npm run build` ✅ (should auto-detect)
- **Output Directory**: `dist/public` ✅ (from your vercel.json)
- **Install Command**: `npm install` ✅ (should auto-detect)

**Root Directory:**
- Leave **empty** (unless your app is in a subdirectory)

### 3.4 Environment Variables (If Needed)

If your app needs environment variables:

1. Click **"Environment Variables"** section
2. Add any required variables:
   - `DATABASE_URL` (if using a database)
   - `API_KEY` (for third-party services)
   - etc.

**For this project:** You likely don't need any environment variables since there are no active API routes.

### 3.5 Deploy!

1. Click **"Deploy"**
2. Wait for the build to complete (usually 1-2 minutes)
3. You'll see a success screen with your deployment URL!

---

## Step 4: Configure Vercel

### 4.1 Custom Domain (Optional)

After deployment, you can add a custom domain:

1. Go to your project in Vercel Dashboard
2. Click **"Settings"** → **"Domains"**
3. Add your domain and follow DNS configuration instructions

### 4.2 Deployment Settings

**Auto-Deploy on Push:**
By default, Vercel automatically deploys when you push to GitHub. You can configure this:

1. Go to **"Settings"** → **"Git"**
2. Configure:
   - **Production Branch**: `main` (deploys to your main URL)
   - **Preview Branches**: All other branches (get preview URLs)

**Build Settings:**
- Go to **"Settings"** → **"Build & Development Settings"**
- Verify your build command and output directory are correct

---

## Step 5: Verify Deployment

### 5.1 Test Your Deployed Site

1. Visit the deployment URL (e.g., `https://your-project.vercel.app`)
2. Check that:
   - ✅ Homepage loads correctly
   - ✅ Navigation works (React Router)
   - ✅ All images/assets load
   - ✅ No console errors

### 5.2 Test Client-Side Routing

Try navigating to different routes:
- `https://your-project.vercel.app/about`
- `https://your-project.vercel.app/menu`
- `https://your-project.vercel.app/contact`

All should work without 404 errors (thanks to the rewrite rule in `vercel.json`).

### 5.3 Check Deployment Logs

If something isn't working:

1. Go to Vercel Dashboard → Your Project
2. Click on the deployment
3. Check the **"Build Logs"** tab for errors
4. Check the **"Functions"** tab if you're using serverless functions

---

## Troubleshooting

### ❌ Build Fails: "Command not found"

**Error:**
```
Error: Command "npm run build" exited with 1
```

**Solution:**
- Verify `package.json` has a `"build"` script
- Check that all dependencies are in `package.json` (not just in `node_modules`)

---

### ❌ 404 on All Routes

**Error:**
```
404 - This page could not be found
```

**Solution:**
- Check `vercel.json` has the rewrite rule:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

### ❌ Assets Not Loading (404 on JS/CSS)

**Error:**
```
Failed to load resource: the server responded with a status of 404
```

**Solution:**
- Verify `outputDirectory` in `vercel.json` matches your build output
- Check that `vite.config.ts` builds to `dist/public`
- Ensure `base` path in `vite.config.ts` is `"/"` or not set

---

### ❌ Serverless Function Crashes

**Error:**
```
500: INTERNAL_SERVER_ERROR
FUNCTION_INVOCATION_FAILED
```

**Solution:**
For a static React SPA, you don't need serverless functions. Simplify `vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist/public",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

If you need API routes later, create files in `api/` folder:
```typescript
// api/hello.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default (req: VercelRequest, res: VercelResponse) => {
  res.json({ message: 'Hello from API!' });
};
```

---

### ❌ Environment Variables Not Working

**Error:**
```
undefined environment variable
```

**Solution:**
1. Add variables in Vercel Dashboard → Settings → Environment Variables
2. Redeploy (environment changes require a new deployment)
3. Make sure variables are prefixed correctly:
   - Vite: `VITE_API_KEY` (accessible in client)
   - Node: `API_KEY` (only in serverless functions)

---

## Understanding the Architecture

### How Vercel Serves Your React SPA

```
User Request
    ↓
Vercel Edge Network (CDN)
    ↓
┌─────────────────────────────────┐
│ Is it a static file?            │
│ (JS, CSS, images, etc.)         │
└─────────────────────────────────┘
    ↓                    ↓
   YES                  NO
    ↓                    ↓
Serve from CDN    Rewrite to /index.html
  (super fast!)         ↓
                   React App Loads
                         ↓
                   React Router Handles Route
                         ↓
                   Show Correct Component
```

### Static vs Serverless

**Static Files (CDN):**
- ⚡ Served from edge locations worldwide (fastest)
- 💰 No compute cost (cheapest)
- 📦 JS, CSS, images, fonts, etc.

**Serverless Functions (Optional):**
- 🔧 For dynamic backend logic
- 💰 Pay per invocation
- 📡 API routes, database queries, auth, etc.

**Your current setup:** Pure static (fastest & cheapest!)

---

## Future: Adding API Routes

If you need backend functionality later:

### 1. Create API File

```typescript
// api/submit-form.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async (req: VercelRequest, res: VercelResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email } = req.body;

  // Process form submission
  // Send email, save to database, etc.

  return res.status(200).json({ success: true });
};
```

### 2. Call from React

```typescript
// client/src/components/ContactForm.tsx
const handleSubmit = async (data) => {
  const response = await fetch('/api/submit-form', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  console.log(result);
};
```

### 3. Update `vercel.json` (Optional)

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist/public",
  "rewrites": [
    {
      "source": "/api/(.*)",
      "destination": "/api/$1"
    },
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## 🎉 You're All Set!

Your React SPA is now:
- ✅ Version controlled with Git
- ✅ Backed up on GitHub
- ✅ Deployed on Vercel's global CDN
- ✅ Auto-deploys on every push to `main`

### Workflow for Future Updates

```bash
# 1. Make changes to your code
# 2. Test locally
npm run dev

# 3. Build and verify
npm run build

# 4. Commit changes
git add .
git commit -m "Add new feature"

# 5. Push to GitHub
git push origin main

# 6. Vercel automatically deploys! 🚀
```

---

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- [React Router Documentation](https://reactrouter.com/)
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)

---

## Credits

Created: 2025-01-27
Project: Distingo Resto Pub
Deployment: Vercel + GitHub
Framework: React + Vite + Express
