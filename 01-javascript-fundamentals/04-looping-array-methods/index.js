//for each

let siswa = ["Cantika", "Andi", "Budi"];

siswa.forEach(function(nama) {
  console.log(nama);
});

siswa.forEach(function(nama, index) {
  console.log(index + 1 + ". " + nama);
});

//for loop

for (let i = 0; i < 6;i++) {
  console.log(i);
}
 //map

let angka = [10, 20, 30];
let angkaBaru = angka.map(function(item) {
  return item * 2;
});

console.log(angkaBaru);


// map pada array of objects

let dataSiswa = [
  { nama: "Cantika", nilai: 90 },
  { nama: "Andi", nilai: 85 },
  { nama: "Budi", nilai: 80 }
];

let namaSiswa = dataSiswa.map(function(item) {
  return item.nama;
});

console.log(namaSiswa);


// filter

let angkaFilter = [10, 20, 30, 40, 50];

let angkaLebihDari20 = angkaFilter.filter(function(item) {
  return item > 20;
});
console.log(angkaLebihDari20);


// find pada data produk

let produk = [
  { nama: "Buku", harga: 10000 },
  { nama: "Tas", harga: 50000 },
  { nama: "Pensil", harga: 70000},
  { nama: "Pulpen", harga: 5000 }
];

let produkDitemukan = produk.find(function(item) {
  return item.harga > 10000;
});

console.log(produkDitemukan);

// reduce

// Menjumlahkan nilai siswa

let totalNilai = dataSiswa.reduce(function(total, item) {
  return total + item.nilai;
}, 0);

console.log(totalNilai);


// Menjumlahkan harga produk

let totalHarga = produk.reduce(function(total, item) {
  return total + item.harga;
}, 0);

console.log(totalHarga);