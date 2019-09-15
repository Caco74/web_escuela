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
        pas.innerHTML += `<ul><li class="lead" style="list-style-type: square;"><a class="p-2" href="#">${item.nombre}</a>|</li></ul>`
      }
    }

    //Se crea el contenedor que mostrará los eventos clickeados
    $("#pasados").after('<div id="contenido_pasados" class="row mb-3" style="justify-content: center; display: block; text-align: center">Nuevo</div>');
    $("#contenido_pasados").hide();
    function mostrarEventos(){
      //Buscar el link clikeado con el id que pertenece al evento!
      let datosParse_lugar = JSON.stringify( datos[1].lugar)
      let datosParse_nombre = JSON.stringify( datos[1].nombre)
      let datosParse_descripcion = JSON.stringify( datos[1].descripcion)
      let datosParse_costo = JSON.stringify( datos[1].precio)
      let datosParse_numInvitados = JSON.stringify( datos[1].invitados)
      $("#contenido_pasados").html(
        `
        <h4>Lugar: ${datosParse_lugar}</h4>
        <h4>Nombre: ${datosParse_nombre}</h4>
        <h4>Descripcion: ${datosParse_descripcion}</h4>
        <h4>Costo: ${datosParse_costo}</h4>
        <h4>Invitados: ${datosParse_numInvitados}</h4>
        `
        );
      $("#contenido_pasados").slideDown("slow");
    }

    $(".p-2").click(function(){
      mostrarEventos();
    });

  })

  //Guarda el resultado en variables

  //Selecciona los eventos que sean anteriores a la fecha actual del JSON

  //Ordena los eventos segun la fecha (los mas recientes primero)

  //Crea un string que contenga el HTML que describe el detalle del evento

  //Recorre el arreglo y concatena el HTML para cada evento

  //Modifica el DOM agregando el html generado

});
