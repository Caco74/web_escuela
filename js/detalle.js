// Hemos omitido los acentos en los comentarios por compatibilidad
$(document).ready(function () {

  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url: "http://127.0.0.1:5500/info.json"
  }).done(function(resultado) {
    eventos = resultado.eventos;

    //Esta es la instruccion para tomar el id del URL detalle.html?id=<identificador>
    var id = location.search.match(/id=(\d)*/)[1];

    //Guarda el resultado en una variable
    evento = eventos.find(function (element) {
      return element.id == id
    })

    //Crea un string que contenga el HTML que describe el detalle del evento
    var html = `
              <div id="contenedor_detalle" class="row mb-3" style="display: block;">
                <h1>${evento.nombre}</h1>
                <cite>${evento.fecha + " - " + evento.lugar}</cite><br>
                <span>${evento.descripcion}</span>
                <p class="costo">${"Costo: " + evento.precio}</p>
                <p class="invitados">${"Invitados: " + evento.invitados}</p>
              </div>
              `

    //Modifica el DOM agregando el html generado dentro del div con id=evento
    document.getElementById("evento").innerHTML = html;
  })
});