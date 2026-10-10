# Jahongir Jabbarov — Portfolio (React + Vite)

Ikki tilli (UZ / EN) shaxsiy portfolio sayti. Texnologiyalar: React, Vite, JavaScript, CSS, Lucide React.

## Papka tuzilmasi

```
portfolio/
├─ index.html              # title, meta, Open Graph
├─ package.json
├─ vite.config.js
├─ public/
│  ├─ favicon.svg
│  ├─ robots.txt
│  ├─ sitemap.xml
│  └─ images/              # profile.jpg shu yerga qo'yiladi
└─ src/
   ├─ main.jsx, App.jsx, index.css
   ├─ context/LanguageContext.jsx
   ├─ translations/        # uz.js, en.js  (barcha matnlar)
   ├─ data/                # projects.js, certificates.js, socials.js
   ├─ components/          # Navbar, Footer, SafeImage, ...
   └─ sections/            # Hero, About, Skills, Projects, Certificates, Contact
```

## 1–5. Ishga tushirish (Windows PowerShell + VS Code)

Node.js (LTS) o'rnatilgan bo'lishi kerak: https://nodejs.org

```powershell
# Papkani VS Code'da oching: File > Open Folder > portfolio
# Terminal: Ctrl + ` (PowerShell). Papka: portfolio (package.json turgan joy)
npm install
npm run dev
```

Brauzerda `http://localhost:5173` ni oching. To'xtatish: `Ctrl + C`.

Ishlab chiqarish uchun build tekshiruvi:

```powershell
npm run build
npm run preview
```

## 6. GitHub'ga joylashtirish

Avval https://github.com/new da bo'sh repo yarating (masalan `portfolio`). Keyin, `portfolio` papkasida:

```powershell
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/GITHUB-USERNAME/portfolio.git
git push -u origin main
```

`GITHUB-USERNAME` o'rniga o'zingizning haqiqiy GitHub foydalanuvchi nomingizni yozing.

## 7. Vercel yoki Netlify orqali internetga chiqarish

**Vercel:** vercel.com > Add New > Project > GitHub repo'ni tanlang > Framework: Vite (avtomatik) > Deploy.

**Netlify:** netlify.com > Add new site > Import from Git > Build command: `npm run build`, Publish directory: `dist` > Deploy.

Deploy'dan keyin sizga berilgan manzilni (masalan `https://nomingiz.vercel.app`) quyidagi joylarda
`YOUR-DOMAIN.vercel.app` o'rniga yozing, so'ng qayta push qiling:

- `index.html` (canonical va `og:url`)
- `public/robots.txt`
- `public/sitemap.xml`

## Google Search Console orqali indekslash

1. https://search.google.com/search-console ga kiring > "Add property" > "URL prefix" > sayt manzilingiz.
2. Egalikni tasdiqlang (HTML tag usuli: berilgan `<meta>` ni `index.html` `<head>` ga qo'shing, deploy qiling, "Verify").
3. "Sitemaps" bo'limida `sitemap.xml` ni yuboring.
4. "URL Inspection" ga bosh sahifa manzilini kiriting > "Request indexing".

Indekslash bir necha kundan bir necha haftagacha vaqt olishi mumkin; sayt deploy qilinmaguncha Google'da ko'rinmaydi.

## 8. Keyinchalik yangilash

- **Rasm:** o'z rasmingizni `public/images/profile.jpg` nomi bilan qo'ying (eski faylni almashtiring). Rasm topilmasa, placeholder ko'rinadi.
- **Loyiha qo'shish:** `src/data/projects.js` — fayl ichidagi shablonni nusxalab massivga qo'ying. Rasmlar: `public/images/projects/`.
- **Sertifikat qo'shish:** `src/data/certificates.js` — shablonni to'ldiring. Rasmlar: `public/images/certificates/`.
  Bo'sh bo'lganda bo'limni butunlay yashirish uchun `hideSectionWhenEmpty = true` qiling.
- **Matnlarni o'zgartirish:** `src/translations/uz.js` va `src/translations/en.js`.
- **Ijtimoiy tarmoqlar:** `src/data/socials.js`.

O'zgarishdan keyin:

```powershell
git add .
git commit -m "Update portfolio"
git push
```

Vercel/Netlify avtomatik qayta deploy qiladi.
