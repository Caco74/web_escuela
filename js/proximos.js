// Hemos omitido los acentos en los comentarios por compatibilidad

//Define las variables que necesites

$(document).ready(function () {

  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url: 'info.json'
  }).done(function (resultado) {
    fechaRef = resultado.fechaActual;
    datos = resultado.eventos;
    let prx = document.getElementById('proximos');
    prx.innerHTML = "";
    for (let item of datos) {
      console.log(item.fecha);
      if (item.fecha > fechaRef) {
        prx.innerHTML += `<ul><li class="lead" style="list-style-type: square;">${item.fecha}|</li></ul>`
      }
    }
  })
  //Guarda el resultado en variables

  //Selecciona los eventos que sean posteriores a la fecha actual del JSON

  //Ordena los eventos segun la fecha (los mas cercanos primero)

  //Crea un string que contenga el HTML que describe el detalle del evento

  //Recorre el arreglo y concatena el HTML para cada evento

  //Modifica el DOM agregando el html generado dentro del div con id=evento

});
