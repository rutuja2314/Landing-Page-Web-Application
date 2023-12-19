const nav = document.getElementById('navigation');

window.addEventListener('scroll', function() {
  if (window.scrollY > 100) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});