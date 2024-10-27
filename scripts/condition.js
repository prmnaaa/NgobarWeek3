//! if ... else ... basic structure

if (condition) {
  // blok code
} else {
  // blok kode yg dijalankan saat kondisi tidak terpenuhi
}

//! IF ELSE
const angkaPertama = 10;
const angkaKedua = 20;
const angkaKetiga = 32;

if (angkaPertama > angkaKedua) {
  console.log("Angka Pertama lebih besar dari angka Kedua");
} else {
  console.log("Angka Pertama lebih kecil dari angka Kedua");
}

//! IF ELSE TERNARY
angkaPertama > angkaKedua
  ? console.log("Angka Pertama lebih besar dari angka Kedua")
  : console.log("Angka Pertama lebih kecil dari angka Kedua");

//! KETIKA ADA ELSE IF DI TERNARY
angkaPertama > angkaKedua // kondisi pertama
  ? console.log("Angka Pertama lebih besar dari angka Kedua")
  : angkaPertama > angkaKetiga // kondisi kedua
  ? console.log("Angka Pertama lebih besar dari angka Ketiga")
  : console.log("Angka Pertama lebih kecil dari angka Kedua dan Ketiga"); // kondisi ketiga jika tidak ada yang memenuhi


//! SWITCH CASE
const nilai = "A";

switch (nilai) {
  case "A":
    console.log("Sangat Bagus");
    break;
  case "B":
    console.log("Bagus");
    break;
  case "C":
    console.log("Cukup");
    break;
  case "D":
    console.log("Kurang");
    break;
  default:
    console.log("Tidak Lulus");
    break;
}