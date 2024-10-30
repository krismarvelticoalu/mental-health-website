// Toggle Navbar
const toggleButton = document.getElementById("navbar-toggle"); // Mengambil elemen tombol toggle navbar
const navbarMenu = document.getElementById("navbar-menu"); // Mengambil elemen menu navbar

// Menambahkan event listener untuk tombol toggle
toggleButton.addEventListener("click", () => {
  navbarMenu.classList.toggle("active"); // Mengaktifkan atau menonaktifkan kelas 'active' pada menu navbar
});

// Fade-in Animation on Scroll
const fadeInSections = document.querySelectorAll(".fade-in"); // Mengambil semua elemen dengan kelas 'fade-in'

// Menambahkan event listener untuk event scroll
window.addEventListener("scroll", () => {
  fadeInSections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top; // Mengambil posisi elemen relatif terhadap viewport
    const windowHeight = window.innerHeight; // Mengambil tinggi jendela

    // Jika elemen terlihat di viewport
    if (sectionTop < windowHeight - 50) {
      section.classList.add("visible"); // Menambahkan kelas 'visible' untuk efek fade-in
    }
  });
});

// Variabel untuk mengatur fitur
let currentFeatureIndex = 0; // Indeks fitur saat ini
const featureItems = document.querySelectorAll(".feature-item"); // Mengambil semua elemen dengan kelas 'feature-item'

// Menghapus fungsi rotasi fitur karena efek tidak digunakan
// Anda bisa menampilkan fitur pertama secara default
featureItems[currentFeatureIndex].classList.add("active"); // Menampilkan fitur pertama

// Anda dapat menambahkan kode lain di sini jika diperlukan di masa depan
