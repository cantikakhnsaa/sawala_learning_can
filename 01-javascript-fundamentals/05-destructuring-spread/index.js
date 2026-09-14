//destructuring object

let siswa = {
  nama: "Cantika",
  umur: 18,
  kelas: "XII"
};

let { nama, umur, kelas } = siswa;

console.log(nama);
console.log(umur);
console.log(kelas);

//destructuring array

let warna = ["Merah", "Biru", "Hijau"];
let [warna1, warna2, warna3] = warna;

console.log(warna1);
console.log(warna2);
console.log(warna3);

//spread 
let buah = ["Apel", "Jeruk", "Mangga"];
let buahBaru = [...buah, "Pisang"];

console.log(buahBaru);




let sayur = ["Wortel", "Bayam"];
let makanan = [...buah, ...sayur];

console.log(makanan);

//spread object

let produk = {
  nama: "Buku",
  harga: 10000
};

let produkBaru = {
  ...produk,
  stok: 10
};

console.log(produkBaru);

let produkUpdate = {
  ...produk,
  harga: 15000
};

console.log(produkUpdate);