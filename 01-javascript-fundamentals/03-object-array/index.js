let siswa = ["Cantika", "Andi", "Budi"];

console.log(siswa);


// Mengambil data berdasarkan index

console.log(siswa[0]);
console.log(siswa[1]);
console.log(siswa[2]);


// Menambah data dengan push()

siswa.push("Dewa");

console.log(siswa);


// Mengubah data array

let buah = ["Lengkeng", "Mangga", "Pisang"];
buah[1] = "Apel";
console.log(buah);
console.log(buah.length);

let hewan = ["Babi", "Kucing", "Kuda"];
hewan.push("Sapi");
hewan.unshift("Ayam");
console.log(hewan);
hewan.pop();
console.log(hewan);
hewan.shift();
console.log(hewan);

let buku = {
  judul: "JavaScript Dasar",
  halaman: 100
};

console.log(buku);
console.log(buku.judul);
console.log(buku.halaman);
buku.halaman = 150;
console.log(buku.halaman);


//array of object
let produk = [
  {
    nama: "Buku",
    harga: 10000
  },
  {
    nama: "Pulpen",
    harga: 5000
  },
  {
    nama: "Pensil",
    harga: 3000
  }
];

console.log(produk);