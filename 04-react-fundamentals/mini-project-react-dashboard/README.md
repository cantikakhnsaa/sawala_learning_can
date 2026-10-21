# ArticleHub Dashboard

ArticleHub adalah mini project dashboard artikel yang dibuat untuk memenuhi praktik pembelajaran React Fundamentals pada Minggu 7–8 di Sawala Learning.

Project ini menggunakan React, TypeScript, dan Vite untuk membangun antarmuka berbasis komponen yang interaktif dan responsif.

## Fitur

- Menampilkan daftar artikel dalam bentuk kartu.
- Mencari artikel berdasarkan kata kunci.
- Memfilter artikel berdasarkan kategori.
- Menampilkan status loading saat data disiapkan.
- Menampilkan empty state jika artikel tidak ditemukan.
- Menampilkan pesan ketika tombol baca artikel diklik.
- Menyediakan tombol untuk menutup pesan.
- Menggunakan desain responsif untuk berbagai ukuran layar.

## Materi React yang Dipraktikkan

- **JSX:** Menulis struktur antarmuka menggunakan sintaks JSX.
- **Component:** Membagi antarmuka menjadi komponen yang dapat digunakan kembali.
- **Props:** Mengirim data dari parent component ke child component.
- **State:** Mengelola data dan perubahan tampilan menggunakan `useState`.
- **Event Handling:** Menangani interaksi pengguna melalui event seperti `onClick` dan `onChange`.
- **Conditional Rendering:** Menampilkan antarmuka sesuai kondisi data.
- **List Rendering:** Menampilkan daftar artikel menggunakan `map()`.
- **useEffect:** Menjalankan proses dasar ketika komponen dimuat.
- **TypeScript:** Mendefinisikan tipe data dan props komponen.

## Teknologi

- React
- TypeScript
- Vite
- CSS

## Cara Menjalankan Project

Pastikan Node.js sudah terpasang di komputer.

1. Buka terminal pada folder project.
2. Instal dependency:

   ```bash
   npm install
   ```

3. Jalankan development server:

   ```bash
   npm run dev
   ```

4. Buka alamat lokal yang muncul di terminal.

## Pemeriksaan Build

Untuk memeriksa TypeScript dan membuat build produksi, jalankan:

```bash
npm run build
```

Build project telah berhasil dijalankan tanpa error pada pemeriksaan terakhir.

## Struktur Folder

```text
mini-project-react-dashboard/
├── public/
├── src/
│   ├── components/
│   │   ├── Button.tsx
│   │   └── Card.tsx
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Tujuan Pembelajaran

Project ini bertujuan untuk memahami dasar React dan TypeScript, membangun UI menggunakan komponen yang dapat digunakan kembali, serta mengelola data, kondisi tampilan, dan interaksi pengguna.

---

Sawala Learning — React Fundamentals, Minggu 7–8.
