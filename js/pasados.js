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
    var html = "";

    //Recorrer el arreglo y concatena el HTML para cada evento
    var num = 0;
    for (let item of pasados) {
      html += `
      <div id="contenedor_lista" class="row mb-3" style="display: block;">
      <a class="p-2" href="#" id="${num}" style="padding: 0px !important;">${item.nombre}</a><br>
      <cite>${item.fecha +" - "+ item.lugar}</cite><br>
      <span>${item.descripcion}</span><br>
      <p>${"Costo: " + item.precio}</p>
      </div>
      `
      num++;
    }

    //Modifica el DOM agregando el html generado
    document.getElementById('pasados').innerHTML = html;


    //Crear el contenedor que mostrará los eventos clikeados
    $("#contenedor_lista .p-2").click(function(){
      const ruta = $(this).attr("id");
      //Buscar el link clikeado con el id que pertenece al evento!
      let cont_pasado = document.getElementById('contenedor_lista');
      cont_pasado.innerHTML = "";
      for (let item of pasados) {
        if (item.fecha < hoy) {            
          $("#pasados").html( 
            `
              <div id="contenido_pasados" class="row mb-3" style="justify-content: center; display: block; text-align: center">
              <h4>Lugar: ${pasados[ruta].lugar}</h4>
              <h4>Nombre: ${pasados[ruta].nombre}</h4>
              <h4>Descripcion: ${pasados[ruta].descripcion}</h4>
              <h4>Costo: ${pasados[ruta].precio}</h4>
              <h4>Invitados: ${pasados[ruta].invitados}</h4>
              </div>
            `
          );          
        }
      }
    });
  });
});