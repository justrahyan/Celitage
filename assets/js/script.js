// Tambahkan event listener untuk scroll
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  // Jika halaman di-scroll lebih dari 50px, tambahkan kelas shadow-header
  if (window.scrollY > 50) {
    header.classList.add("shadow-header");
  } else {
    // Jika tidak, hapus kelas shadow-header
    header.classList.remove("shadow-header");
  }
});

// Hamburger Menu
const hamburgerButton = document.getElementById("hamburgerButton");
const mobileMenu = document.getElementById("mobileMenu");
const closeSidebar = document.getElementById("closeSidebar");

hamburgerButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

closeSidebar.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});

// <=========================>
// Dropdown Destinasi Start
function destinationDropdown() {
  const dropdown = document.getElementById("destinationDropmenu");
  const icon = document.getElementById("dropdownIcon");

  dropdown.classList.toggle("hidden");
  icon.style.transform = dropdown.classList.contains("hidden")
    ? "rotate(0deg)"
    : "rotate(180deg)";
}

// Menutup dropdown dan memutar kembali ikon menjadi semula ketika klik di luar dropdown
window.addEventListener("click", function (event) {
  const dropdown = document.getElementById("destinationDropmenu");
  const button = document.querySelector('a[onclick="destinationDropdown()"]');

  if (!button.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.classList.add("hidden");
    document.getElementById("dropdownIcon").style.transform = "rotate(0deg)";
  }
});
//   Dropdown Destinasi End
// <=========================>

// <=========================>
//   Dropdown Destinasi Mobile Start
function mobileDestinationDropdown() {
  const submenu = document.getElementById("mobileDestinationSubmenu");
  const icon = document.getElementById("mobileDropdownIcon");

  submenu.classList.toggle("hidden");
  icon.style.transform = submenu.classList.contains("hidden")
    ? "rotate(0deg)"
    : "rotate(180deg)";
}
//   Dropdown Destinasi Mobile End
// <=========================>

// <=========================>
//   Popup Search Start
const searchButton = document.getElementById("searchButton");
const searchPopup = document.getElementById("searchPopup");

searchButton.addEventListener("click", () => {
  searchPopup.classList.toggle("hidden");
});

searchPopup.addEventListener("click", (e) => {
  if (e.target === searchPopup) {
    searchPopup.classList.add("hidden");
  }
});
//   Popup Search End
// <=========================>

// <=========================>
// Popular Slider Start
document.addEventListener("DOMContentLoaded", function () {
  const navHeight = document.querySelector("nav").offsetHeight; // Menentukan tinggi dari navigasi
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const elementPosition =
          targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navHeight; // Menyertakan offset tinggi navigasi

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });
});
// Popular Slider End
// <=========================>

// <=========================>
// Jelajahi Tab Switch Start
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  // Sembunyikan semua konten tab
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.add("hidden");
  }

  // Hapus kelas aktif dari semua tombol tab
  tablinks = document.getElementsByTagName("button");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("bg-gray-200", "text-primary");
  }

  // Tampilkan konten tab yang dipilih
  document.getElementById(tabName).classList.remove("hidden");

  // Tambahkan kelas aktif pada tombol yang diklik
  evt.currentTarget.classList.add("bg-gray-200", "text-primary");

  // Ubah gambar sesuai dengan tab yang dipilih
  var heroImage = document.getElementById("jelajahiImage");
  switch (tabName) {
    case "tab1":
      heroImage.src = "./assets/img/Pesona Image - Alam.svg";
      heroImage.title = "Destinasi Alam";
      break;
    case "tab2":
      heroImage.src = "./assets/img/Pesona Image - Penginapan.svg";
      heroImage.title = "Pilihan Akomodasi";
      break;
    case "tab3":
      heroImage.src = "./assets/img/Pesona Image - Belanja.svg";
      heroImage.title = "Pusat Belanja";
      break;
  }
}
// Jelajahi Tab Switch End
// <=========================>
