function hitung(operator) {
  const angka1 = parseFloat(document.getElementById("angka1").value);
  const angka2 = parseFloat(document.getElementById("angka2").value);
  let hasil = 0;

  if (isNaN(angka1)) {
      alert("Masukkan angka pertama!");
      return;
  }

  // Cek operator dan lakukan perhitungan
  switch (operator) {
      case '+': hasil = angka1 + angka2; break;
      case '-': hasil = angka1 - angka2; break;
      case '*': hasil = angka1 * angka2; break;
      case '/': hasil = angka2 !== 0 ? angka1 / angka2 : "Tidak bisa bagi 0!"; break;
      case '^': hasil = Math.pow(angka1, angka2); break;
      case '%': hasil = angka1 % angka2; break;
      case '√': hasil = `akar ${angka1} = ${Math.sqrt(angka1)}`; break;
      default:
          alert("Pilih operator yang valid!");
          return;
  }

  // Tampilkan hasil di bagian bawah
  document.getElementById("hasil-kalkulator").textContent = `Hasil: ${angka1} ${operator} ${angka2 || ""} = ${hasil}`;
}

// Fungsi reset
function reset() {
  document.getElementById("angka1").value = "";
  document.getElementById("angka2").value = "";
  document.getElementById("hasil-kalkulator").textContent = "";
}