const headerHeight = document.querySelector('header').offsetHeight; // Tinggi header (jika ada)

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const elementPosition = target.offsetTop - headerHeight;
      const offsetCenter = (window.innerHeight - target.offsetHeight) / 2; // Menyesuaikan posisi tengah
      window.scrollTo({
        top: elementPosition - offsetCenter,
        behavior: 'smooth'
      });
    }
  });
});