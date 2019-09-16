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
      console.log(item.id);      
      if (item.fecha < fechaRef) {
        pas.innerHTML += `<span><a class="p-2" href="#" id="${item.id}">${item.nombre}</a>|</span>`
      }
    }

    //Se crea el contenedor que mostrará los eventos clickeados
    $("#pasados").after('<div id="contenido_pasados" class="row mb-3" style="justify-content: center; display: block; text-align: center"></div>');
    //$("#contenido_pasados").hide(); 

    $(".p-2").click(function(){
      var ruta = $(this).attr("id");
        //Buscar el link clikeado con el id que pertenece al evento!      
        let cont_pasado = document.getElementById('contenido_pasados');
        cont_pasado.innerHTML = "";
        for (let item of datos) {
          if (item.fecha < fechaRef) {
            $("#contenido_pasados").html(
              `
              <h4>Lugar: ${JSON.stringify(datos[ruta - 1].lugar)}</h4>
              <h4>Nombre: ${JSON.stringify(datos[ruta - 1].nombre)}</h4>
              <h4>Descripcion: ${JSON.stringify(datos[ruta - 1].descripcion)}</h4>
              <h4>Costo: ${JSON.stringify(datos[ruta - 1].precio)}</h4>
              <h4>Invitados: ${JSON.stringify(datos[ruta - 1].invitados)}</h4>
              `
            );
          }
        }
        //$("#contenido_pasados").slideDown("slow");
    });
  })  
});
