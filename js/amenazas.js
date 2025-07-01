// amenazas.js
// Tarjetas de amenazas y carrusel de casos reales

const amenazas = [
  {
    nombre: 'Phishing',
    descripcion: 'Intento de engañar a las personas para obtener información confidencial mediante correos o sitios falsos.',
    imagen: 'img/phishing.png', // Cambiado a png
    ejemplo: 'Caso: En 2020, usuarios de bancos recibieron correos falsos solicitando datos de acceso.'
  },
  {
    nombre: 'Ransomware',
    descripcion: 'Malware que cifra archivos y exige un rescate para liberarlos.',
    imagen: 'img/ransomware.jpg',
    ejemplo: 'Caso: El ataque WannaCry en 2017 afectó a hospitales y empresas en todo el mundo.'
  },
  {
    nombre: 'Malware',
    descripcion: 'Software malicioso diseñado para dañar o acceder sin permiso a sistemas.',
    imagen: 'img/malware.jpg',
    ejemplo: 'Caso: El troyano Emotet se propagó por correos infectados.'
  },
  {
    nombre: 'DDoS',
    descripcion: 'Ataques de denegación de servicio que saturan servidores y redes.',
    imagen: 'img/ddos.jpg',
    ejemplo: 'Caso: Ataque DDoS a Dyn en 2016 dejó fuera de servicio a grandes sitios web.'
  }
];

$(function() {
  // Generar tarjetas
  amenazas.forEach((a, i) => {
    $('#threat-cards').append(`
      <div class="col-md-6 col-lg-3 mb-4">
        <div class="card h-100 shadow-sm threat-card" tabindex="0" role="button" data-ejemplo="${a.ejemplo}">
          <img src="${a.imagen}" class="card-img-top" alt="${a.nombre}">
          <div class="card-body">
            <h5 class="card-title">${a.nombre}</h5>
            <p class="card-text">${a.descripcion}</p>
          </div>
        </div>
      </div>
    `);
  });

  // Interactividad: mostrar ejemplo real al hacer clic
  $(document).on('click keypress', '.threat-card', function(e) {
    if (e.type === 'click' || e.key === 'Enter') {
      const ejemplo = $(this).data('ejemplo');
      $(this).find('.card-text').html(`<strong>${ejemplo}</strong>`);
      setTimeout(() => {
        $(this).find('.card-text').html(amenazas[$(this).index()].descripcion);
      }, 4000);
    }
  });

  // Generar carrusel
  amenazas.forEach((a, i) => {
    $('#carousel-inner').append(`
      <div class="carousel-item${i === 0 ? ' active' : ''}">
        <img src="${a.imagen}" class="d-block w-100" alt="${a.nombre}">
        <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
          <h5>${a.nombre}</h5>
          <p>${a.ejemplo}</p>
        </div>
      </div>
    `);
  });
});
