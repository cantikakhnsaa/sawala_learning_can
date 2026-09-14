const usia = 18;

if (usia > 17){
  console.log("buatlahKTP");
} else {
   console.log("belumadaKTP");
}

let nilai = 75;

if (nilai >= 90) {
  console.log("A");
} else if (nilai >= 80) {
  console.log("B");
} else {
  console.log("C");
}
 //operator
 
console.log(7 > 3);
console.log(7 < 3);
console.log(5 >= 5);
console.log(3 <= 5);
console.log(10 === 10);
console.log(10 === "10");
console.log(10 !== 5);

//if else dengan ===

let nama = "Cantika";

if (nama === "hntika") {
  console.log("Halo Cantika");
} else {
  console.log("Bukan Cantika");
}

// Membikin function yang menerima masukan (nama, nilai)
function cekKelulusan(nama, nilai) {
  if (nilai >= 75) {
    console.log(nama + " dinyatakan LULUS!");
  } else {
    console.log(nama + " dinyatakan TIDAK LULUS.");
  }
}

// Memanggil function dengan data yang berbeda-beda
cekKelulusan("Cantika", 90);
cekKelulusan("Budi", 60);

// Function dengan parameter

function sapa(nama) {
  console.log("Halo " + nama);
}

sapa("Cantika");
sapa("dewa");


// Function dengan beberapa parameter

function hitung(a, b, c) {
  console.log(a - b + c);
}

hitung(20, 10, 3);
hitung(6, 5, 7);
 //return

function kali(a, b) {
  return a * b;
}
let hasil = kali(8, 7);
console.log(hasil);

//fungsi - kondisi

function cekUmur(umur) {
  if (umur >= 18) {
    return "Dewasa";
  } else {
    return "Belum dewasa";
  }
}

console.log(cekUmur(98));
console.log(cekUmur(8));
