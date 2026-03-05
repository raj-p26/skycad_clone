# 🏗️ SkyCAD | Industrial 3D Printing & Engineering

**SkyCAD** is a premium, high-performance web application designed for industrial 3D printing and engineering services. Built with a focus on precision, speed, and modern aesthetics, it showcases a dynamic project gallery, service technologies, and a functional lead-generation contact system.

---

## 🚀 Key Features

- **Industrial-Grade UI**: A sleek, dark-themed interface built with **Tailwind CSS 4** and **DaisyUI 5**, emphasizing structural depth and engineering aesthetics.
- **Dynamic Portfolio Gallery**: Seamless image delivery from Google Drive, featuring lazy-loading, responsive grid layouts, and high-resolution detail views.
- **Infinite SEO**: Pre-configured with dynamic document titles, meta descriptions, Open Graph tags, `robots.txt`, and `sitemap.xml` to ensure 99-100 Lighthouse performance.
- **Admin Command Center**: A secret administrative interface triggered by `Ctrl + Shift + A`. Securely upload new project images with descriptions directly to the backend.
- **Serverless Backend**: Integrated with **Google Apps Script (GAS)** for contact form submissions and Google Drive image management.
- **Performance Optimized**: Leverages React 19 memoization (`React.memo`, `useCallback`, `useMemo`) to prevent cascading re-renders and ensure stable 60FPS interactions.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 7](https://vitejs.dev/)
- **Runtime**: [Bun](https://bun.sh/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/), [DaisyUI v5](https://daisyui.com/)
- **Backend API**: [Google Apps Script](https://developers.google.com/apps-script)
- **Deployment Ready**: Optimized for production with single-command builds.

---

## 🚦 Getting Started

### 1. Prerequisites

Ensure you have [Bun](https://bun.sh/) installed. Alternatively, you can use `npm` or `yarn`.

### 2. Installation

Clone the repository and install dependencies:

```bash
bun install
```

### 3. Environment Variables

Create a `.env` file in the root directory and configure your backend secrets:

```env
VITE_GAS_BACKEND_URL=your_google_apps_script_url
VITE_ADMIN_TOKEN=your_secure_upload_token
VITE_ADMIN_PASSWORD=your_admin_secret_password
```

### 4. Local Development

Start the VITE development server:

```bash
bun run dev
```

### 5. Production Build

Generate the optimized build in the `dist/` directory:

```bash
bun run build
```

---

## ⌨️ Shortcuts

- **`Ctrl + Shift + A`**: Open the Admin Login dialog.
- **`Esc`**: Close active dialogs or modals.

---

## 🛡️ Architecture & Optimizations

- **Component Stability**: Every critical component is memoized to prevent parent-heavy re-renders.
- **Native Image Loading**: Uses `loding="lazy"` and asynchronous decoding to keep the TBT (Total Blocking Time) under 100ms.
- **State-Based Navigation**: High-performance internal routing without external dependencies like `react-router`, keeping the bundle size minimal.

---

## 📄 License

Private Project - © 2026 SkyCAD Engineering.
