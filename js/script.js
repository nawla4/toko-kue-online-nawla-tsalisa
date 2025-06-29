// Toggle class active untuk navbar
const navbarNav = document.querySelector(".navbar-nav");

// Ketika ikon hamburger diklik
document.querySelector("#hamburger-menu").onclick = () => {
  // Tambah atau hapus class 'active' pada navbar
  navbarNav.classList.toggle("active");
};
// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
