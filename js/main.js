// main.js
// Puedes agregar aquí scripts generales para el sitio
$(function() {
  // Ejemplo: efecto scroll suave para anclas
  $('a.nav-link').on('click', function(e) {
    if (this.hash) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $(this.hash).offset().top }, 600);
    }
  });
});
