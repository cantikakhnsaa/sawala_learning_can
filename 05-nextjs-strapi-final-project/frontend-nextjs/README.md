# Minggu 9–10 — Next.js + Strapi

Frontend final mengambil artikel dari Strapi melalui REST API. Ini adalah proyek frontend terpisah; tidak mengubah proyek PILAR.

## 1. Siapkan Strapi
Buat proyek Strapi terpisah untuk latihan, atau gunakan instance Strapi latihan yang memang boleh dipakai. Jangan mengubah database PILAR hanya untuk mengikuti contoh ini.

Di Content-Type Builder, buat collection type bernama `Article` dengan field:
- `title`: Text, required
- `slug`: UID berdasarkan `title`, required
- `excerpt`: Long text
- `content`: Rich text atau Blocks (opsional untuk tahap awal)
- `author`: Text
- `cover`: Media, single image (opsional)

Simpan dan restart Strapi jika diminta. Buat artikel contoh, lalu **Publish**.

## 2. Atur izin API
Di Strapi Admin → Settings → Users & Permissions Plugin → Roles → Public:
- Aktifkan `find` untuk Article agar halaman daftar bisa membaca artikel terbit.
- Aktifkan `findOne` bila nanti membuat endpoint detail berdasarkan ID/slug.
- Simpan.

Jangan mengaktifkan create/update/delete untuk Public pada situs publik. Untuk akses privat, gunakan API token server-side dan jangan pernah memakai awalan `NEXT_PUBLIC_` untuk token rahasia.

## 3. Jalankan Next.js
Di folder ini:

```bash
npm install
```

Salin `.env.example` menjadi `.env.local`, lalu atur:

```env
STRAPI_URL=http://localhost:1337
```

Jalankan:

```bash
npm run dev
```

Buka `http://localhost:3000`.

## Alur data
Strapi CMS → endpoint REST `/api/articles` → fungsi server `getArticles()` → Server Component Next.js → komponen atoms/molecules/organisms → UI browser.

## Konsep silabus
- App Router: `src/app/page.tsx`, `src/app/layout.tsx`, `src/app/artikel/[slug]/page.tsx`.
- Routing: halaman daftar dan detail berdasarkan slug.
- Server Component: `page.tsx` memanggil `getArticles()` di server.
- Atomic Design: `Badge`/`Container` (atoms), `ArticleCard` (molecule), `ArticleGrid` (organism).
- Data fetching: `fetch` dengan revalidate 60 detik.
- Environment variable: `STRAPI_URL`, token opsional server-side.
- Deployment: set environment variables yang sama di platform hosting; gunakan URL Strapi HTTPS yang dapat diakses frontend server.

## Catatan Strapi v5
Contoh endpoint mengasumsikan collection type API ID `article`, sehingga endpoint-nya `/api/articles`. Jika API ID berbeda, sesuaikan URL. Strapi v5 umumnya mengembalikan field langsung; normalisasi pada `src/lib/strapi.ts` juga menyediakan fallback struktur `attributes` Strapi v4.

Detail halaman contoh menampilkan judul dan excerpt/metadata. Untuk menampilkan field Blocks/rich text secara penuh, tambahkan renderer sesuai format field yang dipilih di Strapi.
