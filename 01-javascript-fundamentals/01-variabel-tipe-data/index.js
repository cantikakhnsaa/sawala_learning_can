let hari = "Senin";
hari = "Selasa";

console.log("Hari:", hari);

const nama = "Cantika";
const nilai = 90;

// Tipe data
let merk;
const sejarah = null;
const sudahMakan = true;
const belumMakan = false;

console.log("\n=== Data Siswa ===");
console.log("Nama:", nama);
console.log("Nilai:", nilai);

console.log("\n=== Tipe Data ===");
console.log("Nama:", typeof nama);
console.log("Nilai:", typeof nilai);
console.log("Merk:", merk);
console.log("Sejarah:", sejarah);
console.log("Sudah makan:", typeof sudahMakan);
console.log("Belum makan:", typeof belumMakan);

console.log("\n=== Kondisi ===");

if (sudahMakan) {
  console.log("Sudah makan. Pinter!");
} else {
  console.log("Belum makan. Jangan lupa makan.");
}