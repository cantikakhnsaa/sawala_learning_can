import { produk } from "./data.js";
console.log("=== SEMUA PRODUK ===");

produk.forEach(function(item) {
  console.log(item.nama + " - Rp" + item.harga);
});

//filter
let produkMurah = produk.filter(function(item) {
  return item.harga < 50000;
});
console.log("\n=== PRODUK DI BAWAH Rp50.000 ===");
console.log(produkMurah);

//search
let kataKunci = "buku";
let hasilSearch = produk.filter(function(item) {
  return item.nama.toLowerCase().includes(kataKunci.toLowerCase());
});
console.log("\n=== HASIL SEARCH ===");
console.log(hasilSearch);

//find
let produkDitemukan = produk.find(function(item) {
  return item.nama === "Tas";
});

console.log("\n=== PRODUK YANG DITEMUKAN ===");//judul pemisah di terminal
console.log(produkDitemukan);

//reduce
let totalHarga = produk.reduce(function(total, item) {
  return total + item.harga;
}, 0);

console.log("\n=== TOTAL HARGA ===");
console.log(totalHarga);