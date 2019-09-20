// Hemos omitido los acentos en los comentarios por compatibilidad

//Define las variables que necesites

let pasados = [];
let proximos = [];
let hoy;
let eventos;

$(document).ready(function () {
  
  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url: 'http://127.0.0.1:5500/info.json'
  }).done(function(resultado){

    //Guarda el resultado en variables
    hoy = resultado.fechaActual;
    eventos = resultado.eventos;

    //Clasifica los eventos segun la fecha actual del JSON
    for(let evento of eventos) {
      if(evento.fecha < hoy) {
        pasados.push(evento);
      } else {
        proximos.push(evento);
      }
    }

    //Ordena los eventos segun la fecha (los mas cercanos primero)
    pasados = pasados.sort(function (x, y) {
      if (x.fecha < y.fecha) {
        return 1;
      }
      return -1;
    });
    
    //Extrae solo dos eventos
    var ind_pasa = [pasados[0],pasados[1]];
    
    //Crea un string que contenga el HTML que describe el detalle del evento
    var html_pasa = "";
    
    //Recorre el arreglo y concatena el HTML para cada evento
    var num = 0;
    for (let i of ind_pasa) {
      html_pasa += `
      <div id="contenedor_index" style="display: block;">
      <a class="p-2" href="#" id="${num}" style="padding: 0px !important;">${i.nombre}</a><br>
      <cite>${i.fecha + " - " + i.lugar}</cite><br>
      <span>${i.descripcion}</span><br>
      <p>${"Costo: " + i.precio}</p>
      </div>
      `
      num++;
    }
  
    //Modifica el DOM agregando el html generado
    document.getElementById('pasados').innerHTML = html_pasa;   
    
    //Ordena los eventos segun la fecha (los mas cercanos primero)
    proximos = proximos.sort(function (x, y) {
      if (x.fecha > y.fecha) {
        return 1;
      }
      return -1;
    });

    //Extrae solo dos eventos
    let ind_prox = [proximos[0],proximos[1]];
    
    //Crea un string que contenga el HTML que describe el detalle del evento
    var html_prox = "";
    
    //Recorre el arreglo y concatena el HTML para cada evento
    var num = 0;
    
    for (let i of ind_prox) {
      html_prox += `
      <div id="contenedor_index" style="display: block;">
      <a class="p-2" href="#" id="${num}" style="padding: 0px !important;">${i.nombre}</a><br>
      <cite>${i.fecha + " - " + i.lugar}</cite><br>
      <span>${i.descripcion}</span><br>
      <p>${"Costo: " + i.precio}</p>
      </div>
      `
      num++;
    }
  
    //Modifica el DOM agregando el html generado
    document.getElementById('proximos').innerHTML = html_prox;

    //Click en el hipervinculo lleva a la página detalles de eventos proximos seleccionado
    $("#proximos #contenedor_index .p-2").click(function () {
      const ruta = $(this).attr("id");
      console.log(proximos[ruta].id);
      let finalPage = proximos[ruta].id;
      function reloadPage() {
        let identificador = finalPage;
        console.log(identificador);
        location.replace('http://127.0.0.1:5500/detalle.html?id=' + identificador);
      }
      reloadPage();
    });

    //Click en el hipervinculo lleva a la página detalles de eventos pasados seleccionado
    $("#pasados #contenedor_index .p-2").click(function () {
      const ruta = $(this).attr("id");
      console.log(pasados[ruta].id);
      let finalPage = pasados[ruta].id;
      function reloadPage() {
        let identificador = finalPage;
        console.log(identificador);
        location.replace('http://127.0.0.1:5500/detalle.html?id=' + identificador);
      }
      reloadPage();
    });
  })
});
