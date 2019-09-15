// Hemos omitido los acentos en los comentarios por compatibilidad

//Define las variables que necesites


$(document).ready(function () {
  console.log("Cargado ..");
  
  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url: 'info.json'
  }).done(function(resultado){
    fechaRef = resultado.fechaActual;
    datos = resultado.eventos;
    let prx = document.getElementById('proximos');
    prx.innerHTML = "";
    let pas = document.getElementById('pasados');
    pas.innerHTML = "";
    for(let item of datos) {
      console.log(item.fecha);
      
      if (item.fecha > fechaRef) {
        prx.innerHTML += `<ul><li class="lead" style="list-style-type: square;">${item.fecha}|</li></ul>`
      }
      if (item.fecha < fechaRef) {
        pas.innerHTML += `<ul><li class="lead" style="list-style-type: square;">${item.fecha}|</li></ul>`
      }
      
    }
    
  })


  //Guarda el resultado en variables

  //Clasifica los eventos segun la fecha actual del JSON

  //Ordena los eventos segun la fecha (los mas cercanos primero)

  //Extrae solo dos eventos

  //Ordena los eventos segun la fecha (los mas cercanos primero)

  //Extrae solo dos eventos

  //Crea un string que contenga el HTML que describe el detalle del evento

  //Recorre el arreglo y concatena el HTML para cada evento

  //Modifica el DOM agregando el html generado

  //Crea un string que contenga el HTML que describe el detalle del evento

  //Recorre el arreglo y concatena el HTML para cada evento

  //Modifica el DOM agregando el html generado

});
