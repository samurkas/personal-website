# ismailsamurkas.dev

Kişisel web sitem, blogum ve proje vitrinim.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/samurkas/personal-website)

> **[TR]** Next.js 15, Tailwind CSS ve MDX ile oluşturulmuş, Türkçe/İngilizce destekli kişisel web sitesi.
>
> **[EN]** A personal website built with Next.js 15, Tailwind CSS, and MDX with Turkish/English language support.

---

## Teknoloji / Tech Stack

| Teknoloji | Açıklama |
|-----------|----------|
| [Next.js 15](https://nextjs.org/) | React framework (App Router) |
| [Tailwind CSS 4](https://tailwindcss.com/) | Utility-first CSS |
| [next-intl](https://next-intl-docs.vercel.app/) | i18n (TR / EN) |
| [Framer Motion](https://www.framer.com/motion/) | Animasyonlar |
| [MDX](https://mdxjs.com/) | Markdown + React blog |
| [Lucide Icons](https://lucide.dev/) | Ikonlar |

## Ozellikler / Features

- Turkce / Ingilizce dil degistirme
- MDX ile blog yazilari (kod vurgulama destekli)
- Koyu tema, minimal developer tasarimi
- Framer Motion animasyonlari
- SEO (metadata, sitemap.xml, robots.txt)
- Tam responsive (mobil uyumlu)
- Vercel'e tek tikla deploy

## Sayfalar / Pages

| Sayfa | Aciklama |
|-------|----------|
| `/` | Ana sayfa - Hero |
| `/about` | Hakkimda - Timeline |
| `/projects` | Projeler vitrini |
| `/blog` | Blog yazilari |
| `/blog/[slug]` | Yazi detayi |
| `/skills` | Yetenekler |
| `/contact` | Iletisim formu |
| `/resume` | Ozgecmis / CV |

## Kurulum / Setup

```bash
# Bagimliliklari yukle
npm install

# Gelistirme sunucusunu baslat
npm run dev

# Production build
npm run build
```

Tarayicida [http://localhost:3000](http://localhost:3000) adresini acin.

## Blog Yazisi Ekleme

`content/blog/tr/` veya `content/blog/en/` klasorune `.mdx` dosyasi ekleyin:

```mdx
---
title: "Yazi Basligi"
description: "Kisa aciklama"
date: "2026-03-12"
tags: ["etiket1", "etiket2"]
---

Yazi icerigi buraya...
```

## Kisisellestirme

| Ne | Dosya |
|----|-------|
| Isim, baslik, metinler | `src/messages/tr.json` ve `en.json` |
| Sosyal linkler | `Hero.tsx`, `Footer.tsx`, `ContactContent.tsx` |
| Projeler | `src/data/projects.ts` |
| Yetenekler | `src/data/skills.ts` |
| Ozgecmis | `src/data/resume.ts` |
| Renkler / Tema | `src/app/globals.css` (`@theme` blogu) |

## Deploy

### Vercel (Onerilen)

1. Bu repoyu GitHub'a push edin
2. [vercel.com](https://vercel.com) > "Add New Project"
3. GitHub reponuzu secin
4. "Deploy" butonuna tiklayin
5. Hazir!

### Vercel CLI

```bash
npm i -g vercel
vercel
```

---

**Ismail Samurkas** - [GitHub](https://github.com/samurkas) - [LinkedIn](https://www.linkedin.com/in/ismail-samurka%C5%9F-6a566820a)
