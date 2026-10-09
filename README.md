# Beybars Oto Servis — TypeScript

[English](#english) · [Türkçe](#türkçe)

## English

A multilingual website for Beybars Oto Servis in Kestel, Alanya, built with TypeScript and React. The website is available in Turkish, English, and Russian and includes service information, contact details, directions, and WhatsApp links.

### Requirements

- Node.js 22.13 or newer
- npm

### Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

### Validation and production build

```bash
npx tsc --noEmit
npm run lint
npm run build
```

### Project structure

- `app/page.tsx` — React page entry point
- `app/site-markup.ts` — website markup
- `app/site-controller.ts` — client-side behavior and translations
- `app/globals.css` — global styles
- `public/` — images and other static assets

## Türkçe

Kestel, Alanya'daki Beybars Oto Servis için TypeScript ve React ile geliştirilmiş çok dilli web sitesi. Site Türkçe, İngilizce ve Rusça dillerinde hizmet bilgileri, iletişim bilgileri, yol tarifi ve WhatsApp bağlantıları sunar.

### Gereksinimler

- Node.js 22.13 veya daha yeni bir sürüm
- npm

### Yerel geliştirme

```bash
npm install
npm run dev
```

Tarayıcınızda `http://localhost:3000` adresini açın.

### Kontrol ve üretim derlemesi

```bash
npx tsc --noEmit
npm run lint
npm run build
```

### Proje yapısı

- `app/page.tsx` — React sayfasının giriş noktası
- `app/site-markup.ts` — web sitesi işaretlemesi
- `app/site-controller.ts` — istemci tarafı işlevleri ve çeviriler
- `app/globals.css` — genel stiller
- `public/` — görseller ve diğer statik dosyalar
