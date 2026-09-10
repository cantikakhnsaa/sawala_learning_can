// ============================================
// 01 - VARIABEL DAN TIPE DATA
// ============================================

// --------------------------------------------
// 1. Variabel dengan const
// --------------------------------------------

const nama = "Cantika";
const umur = 18;
const mahasiswa = true;

console.log("Nama:", nama);
console.log("Umur:", umur);
console.log("Mahasiswa:", mahasiswa);


// --------------------------------------------
// 2. Variabel dengan let
// --------------------------------------------

let statusBelajar = "belum selesai";

console.log("Status awal:", statusBelajar);

statusBelajar = "sedang belajar";

console.log("Status setelah diubah:", statusBelajar);


// --------------------------------------------
// 3. Tipe data primitif
// --------------------------------------------

const namaLengkap = "icantsaa"; // string
const usia = 18 // number
const sudahLulus = false; // boolean
const nilaiKosong = null; // null
let belumDiisi; // undefined
const idUnik = Symbol("id"); // symbol
const angkaBesar = 9007199254740991n; // bigint

console.log("String:", namaLengkap);
console.log("Number:", usia);
console.log("Boolean:", sudahLulus);
console.log("Null:", nilaiKosong);
console.log("Undefined:", belumDiisi);
console.log("Symbol:", idUnik);
console.log("BigInt:", angkaBesar);


// --------------------------------------------
// 4. Mengecek tipe data
// --------------------------------------------

console.log(typeof namaLengkap);
console.log(typeof usia);
console.log(typeof sudahLulus);
console.log(typeof belumDiisi);
console.log(typeof angkaBesar);


// --------------------------------------------
// 5. Perbedaan let dan const
// --------------------------------------------

let skor = 70;

console.log("Skor awal:", skor);

skor = 85;

console.log("Skor setelah diubah:", skor);

const sekolah = "Sawala";

console.log("Sekolah:", sekolah);

// Baris berikut sengaja tidak dijalankan karena
// akan menghasilkan TypeError:
//
// sekolah = "Sekolah Baru";


// --------------------------------------------
// 6. Debugging sederhana
// --------------------------------------------

const harga = 25000;
const jumlah = 3;
const total = harga * jumlah;

console.log("DEBUG harga:", harga);
console.log("DEBUG jumlah:", jumlah);
console.log("DEBUG total:", total);


// --------------------------------------------
// 7. Perbandingan nilai
// --------------------------------------------

const nilaiA = 80;
const nilaiB = 75;

console.log("Apakah nilai A lebih besar?", nilaiA > nilaiB);
console.log("Apakah nilai A sama dengan nilai B?", nilaiA === nilaiB);


// --------------------------------------------
// 8. Template literal
// --------------------------------------------

const pesan = `Halo, nama saya ${nama}. Saya berumur ${umur} tahun.`;

console.log(pesan);