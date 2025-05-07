document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let valid = true;

    // Ambil nilai input
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Validasi Nama (minimal 3 karakter)
    if (name.length < 3) {
      document.getElementById("nameError").textContent =
        "Nama harus lebih dari 3 karakter";
      valid = false;
    } else {
      document.getElementById("nameError").textContent = "";
    }

    // Validasi Email (format email yang benar)
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      document.getElementById("emailError").textContent = "Email tidak valid";
      valid = false;
    } else {
      document.getElementById("emailError").textContent = "";
    }

    // Validasi Password (minimal 8 karakter)
    if (password.length < 8) {
      document.getElementById("passwordError").textContent =
        "Password harus minimal 8 karakter";
      valid = false;
    } else {
      document.getElementById("passwordError").textContent = "";
    }

    // Jika semua valid, submit form
    if (valid) {
      alert("Form berhasil dikirim!");
    }
  });