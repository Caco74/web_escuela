let pasados = [];
let hoy;
let eventos;

$(document).ready(function () {

  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url: 'info.json'
  }).done(function (resultado) {

    //Guarda el resultado en variables
    hoy = resultado.fechaActual;
    eventos = resultado.eventos;

    //Selecciona los eventos que sean anteriores a la fecha actual del JSON

    for(let item of eventos){
      if (item.fecha < hoy) {       
        pasados.push(item);
      }
    }

    //Ordena los eventos según la fecha (Los más recientes primero)
    pasados = pasados.sort(function(x,y){
      if (x.fecha < y.fecha){
        return 1;
      }
      return -1;
    });

    //Crea un string que contenga el HTML que describe el detalle del evento
    let html = "";

    //Recorrer el arreglo y concatena el HTML para cada evento
    for (let item of pasados) {
      html += `
              <div id="contenedor_lista" class="row mb-3" style="display: block;">
              <a class="p-2" href="#" id="${item.id}">${item.nombre}</a><br>
              <cite>${item.fecha +" - "+ item.lugar}</cite><br>
              <span>${item.descripcion}</span><br>
              <p>${"Costo: " + item.precio}</p>
              </div>
              `
    }

    //Modifica el DOM agregando el html generado
    document.getElementById('pasados').innerHTML = html;


    //Crear el contenedor que mostrará los eventos clikeados
    $(".p-2").click(function(){
      //var ruta = $(this).attr("id");
      //cargarDatos();
      //Buscar el link clikeado con el id que pertenece al evento!
      let cont_pasado = document.getElementById('contenedor_lista');
      cont_pasado.innerHTML = "";
      for (let item of pasados) {
        if (item.fecha < hoy) {
          $("#pasados").html(
            `
              <div id="contenido_pasados" class="row mb-3" style="justify-content: center; display: block; text-align: center">
              <h4>Lugar: ${pasados[item.id].lugar}</h4>
              <h4>Nombre: ${pasados[item.id].nombre}</h4>
              <h4>Descripcion: ${pasados[item.id].descripcion}</h4>
              <h4>Costo: ${pasados[item.id].precio}</h4>
              <h4>Invitados: ${pasados[item.id].invitados}</h4>
              </div>
              `
          );
        }
        //console.log(item.id);

      }
    });
  });
});
    
    //

    /*let pas = document.getElementById('pasados');
    pas.innerHTML = "";
    for (let item of datos) {
      console.log(item.id);      
      if (item.fecha < hoy) {
        pas.innerHTML += `<div id="contenido_pasados" class="row mb-3" style="justify-content: center; display: block; text-align: center"><a class="p-2" href="#" id="${item.id}">${item.nombre}</a></div>`
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
          if (item.fecha < hoy) {
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
    });*/

