//!=============== REGULAR FUNCTION ================

function cetakAngka() {
  console.log(80 + 20);
}

cetakAngka();

//!================ ARROW FUNCTION =================

const cetakNama = () => {
  console.log("Pak Muku");
};

cetakNama();

//!=========== FUNCTION DENGAN PARAMETER ===========
function penjumlahan(a, b) {
  return a + b;
}
const hasilPenjumlahan = penjumlahan(5, 10);
console.log(hasilPenjumlahan);

const perkalian = (a, b) => a * b;
console.log(perkalian(5, 10));