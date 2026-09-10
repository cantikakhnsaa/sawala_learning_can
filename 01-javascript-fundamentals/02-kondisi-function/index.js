// ============================================
// MINI EXERCISE - KALKULATOR SEDERHANA
// TAHAP 1: PENJUMLAHAN
// ============================================

function tambah(a, b) {
    return a + b;
}

const angka1 = 30;
const angka2 = 89;

const hasil = tambah(angka1, angka2);

console.log("Angka pertama:", angka1);
console.log("Angka kedua:", angka2);
console.log("Hasil penjumlahan:", hasil);

//function kurang

function kurang(a, b) {
    return a - b;
}

const angka3 = 50;
const angka4 = 20;

const hasilPengurangan = kurang(angka3, angka4);

console.log("Angka pertama:", angka3);
console.log("Angka kedua:", angka4);
console.log("Hasil pengurangan:", hasilPengurangan);

// function kali
function kali(a, b) {
    return a * b;
}

const angka5 = 6;
const angka6 = 7;

const hasilPerkalian = kali(angka5, angka6);

console.log("Angka pertama:", angka5);
console.log("Angka kedua:", angka6);
console.log("Hasil perkalian:", hasilPerkalian);

//function bagi 
function bagi(a, b) {
    return a / b;
}

const angka7 = 20;
const angka8 = 4;

const hasilPembagian = bagi(angka7, angka8);

console.log("Angka pertama:", angka7);
console.log("Angka kedua:", angka8);
console.log("Hasil pembagian:", hasilPembagian);

function hitung(a, operator, b) {
    switch (operator) {
        case "+":
            return tambah(a, b);

        case "-":
            return kurang(a, b);

        case "*":
            return kali(a, b);

        case "/":
            return bagi(a, b);

        default:
            return "Operator tidak dikenal";
    }
}
