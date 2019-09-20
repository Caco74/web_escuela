let proximos = [];
let hoy;
let eventos;

$(document).ready(function () {  
  
  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url: 'http://127.0.0.1:5500/info.json'
  }).done(function (resultado) {

    //Guarda el resultado en variables
    hoy = resultado.fechaActual;
    eventos = resultado.eventos;    

    //Selecciona los eventos que sean anteriores a la fecha actual del JSON

    for (let item of eventos) {
      if (item.fecha > hoy) {
        proximos.push(item);
      }
    }

    //Ordena los eventos según la fecha (Los más recientes primero)
    proximos = proximos.sort(function (x, y) {
      if (x.fecha > y.fecha) {
        return 1;
      }
      return -1;
    });

    //Crea un string que contenga el HTML que describe el detalle del evento
    var html = "";

    //Recorrer el arreglo y concatena el HTML para cada evento
    var num = 0;
    for (let item of proximos) {
      html += `
      <div id="contenedor_evento" class="row mb-3" style="display: block;">
      <a class="p-2" href="#" id="${num}" style="padding: 0px !important">${item.nombre}</a><br>
      <cite>${item.fecha + " - " + item.lugar}</cite><br>
      <span>${item.descripcion}</span><br>
      <p>${"Costo: " + item.precio}</p>
      </div>
      `
      num++;
    }

    //Modifica el DOM agregando el html generado
    document.getElementById('proximos').innerHTML = html;    
    
    //Click en el hipervinculo lleva a la página detalles del evento seleccionado
    $("#contenedor_evento .p-2").click(function () {
      const ruta = $(this).attr("id");
      let finalPage = proximos[ruta].id;
      function reloadPage() {
        let identificador = finalPage;
        location.replace('http://127.0.0.1:5500/detalle.html?id=' + identificador);
      }
      reloadPage();
    });
  });
});