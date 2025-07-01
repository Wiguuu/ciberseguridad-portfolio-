// consejos.js
// Validación de formulario y test de seguridad

$(function() {
  // Validación de formulario
  $('#contactForm').on('submit', function(e) {
    e.preventDefault();
    let valido = true;
    $(this).find('input, textarea').each(function() {
      if (!this.checkValidity()) {
        $(this).addClass('is-invalid');
        valido = false;
      } else {
        $(this).removeClass('is-invalid');
      }
    });
    if (valido) {
      $('#formAlert').removeClass('d-none alert-danger').addClass('alert-success').text('¡Mensaje enviado correctamente!');
      this.reset();
    } else {
      $('#formAlert').removeClass('d-none alert-success').addClass('alert-danger').text('Por favor, corrige los errores.');
    }
  });

  // Test de seguridad
  const preguntas = [
    {
      pregunta: '¿Cuál es una buena práctica para crear contraseñas seguras?',
      opciones: ['Usar tu fecha de nacimiento', 'Usar combinaciones de letras, números y símbolos', 'Usar la misma contraseña en todos los sitios'],
      correcta: 1
    },
    {
      pregunta: '¿Qué debes hacer si recibes un correo sospechoso?',
      opciones: ['Abrirlo y hacer clic en los enlaces', 'Ignorarlo o reportarlo', 'Responder con tus datos personales'],
      correcta: 1
    },
    {
      pregunta: '¿Por qué es importante actualizar el software?',
      opciones: ['Para obtener nuevas funciones', 'Para corregir vulnerabilidades de seguridad', 'No es importante'],
      correcta: 1
    }
  ];

  let respuestas = [];

  function mostrarTest() {
    let html = '';
    preguntas.forEach((p, i) => {
      html += `<div class="mb-3">
        <strong>${i+1}. ${p.pregunta}</strong>
        <div>`;
      p.opciones.forEach((op, j) => {
        html += `<div class="form-check">
          <input class="form-check-input" type="radio" name="preg${i}" id="preg${i}op${j}" value="${j}">
          <label class="form-check-label" for="preg${i}op${j}">${op}</label>
        </div>`;
      });
      html += `</div></div>`;
    });
    html += '<button id="enviarTest" class="btn btn-success">Enviar respuestas</button>';
    $('#test-content').html(html);
  }

  $(document).on('show.bs.modal', '#testModal', mostrarTest);

  $(document).on('click', '#enviarTest', function() {
    respuestas = [];
    let correctas = 0;
    preguntas.forEach((p, i) => {
      let val = $(`input[name='preg${i}']:checked`).val();
      respuestas.push(val);
      if (parseInt(val) === p.correcta) correctas++;
    });
    let feedback = `<div class="alert alert-info">Respuestas correctas: ${correctas} de ${preguntas.length}.</div>`;
    if (correctas === preguntas.length) {
      feedback += '<div class="alert alert-success">¡Excelente! Tienes buenos hábitos de seguridad.</div>';
    } else if (correctas === 0) {
      feedback += '<div class="alert alert-danger">Debes mejorar tus conocimientos de ciberseguridad.</div>';
    } else {
      feedback += '<div class="alert alert-warning">¡Vas por buen camino! Revisa los consejos para mejorar.</div>';
    }
    $('#test-content').html(feedback + '<button class="btn btn-primary mt-3" data-bs-dismiss="modal">Cerrar</button>');
  });
});
