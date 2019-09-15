//Define las variables que necesites

$(document).ready(function () {

  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url: 'info.json'
  }).done(function (resultado) {
    fechaRef = resultado.fechaActual;
    datos = resultado.eventos;
    let pas = document.getElementById('pasados');
    pas.innerHTML = "";
    for (let item of datos) {
      if (item.fecha < fechaRef) {
        pas.innerHTML += `<ul><li class="lead" style="list-style-type: square;"><a class="p-2" href="#">${item.fecha}</a>|</li></ul>`
      }
    }

    //Se crea el contenedor que mostrará los eventos clickeados
    $("#pasados").after('<div id="contenido_pasados" class="row mb-3" style="justify-content: center;">Nuevo</div>');

    $("#contenido_pasados").hide();
  })

  //Guarda el resultado en variables

  //Selecciona los eventos que sean anteriores a la fecha actual del JSON

  //Ordena los eventos segun la fecha (los mas recientes primero)

  //Crea un string que contenga el HTML que describe el detalle del evento

  //Recorre el arreglo y concatena el HTML para cada evento

  //Modifica el DOM agregando el html generado

});
