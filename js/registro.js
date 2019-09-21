// Hemos omitido los acentos en los comentarios por compatibilidad
function limpiarErrores() {
  let errores = document.getElementsByClassName("text-danger");
  for (var i = 0; i < errores.length; i++) {
    errores[i].innerHTML = "";
  }
}

function validar(formulario) {

  limpiarErrores();

  if (formulario.nombres.value.trim().length == 0) {
    document.getElementById("errornombres").innerText = "Campo Obligatorio";
    formulario.nombres.focus();
    return false;
  }

  if (formulario.nombres.value.trim().length < 4) {
    document.getElementById("errornombres").innerText = "El campo debe contener al menos 4 caracteres";
    formulario.nombres.focus();
    return false;
  }

  //Expresion regular del correo
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(formulario.email.value)) {
    document.getElementById("errorEmail").innerText = "Campo Obligatorio";
    formulario.email.focus();
    return false;
  }

  if (formulario.contrasena.value.trim().length == 0) {
    document.getElementById("errorContrasena").innerText = "Campo Obligatorio";
    formulario.contrasena.focus();
    return false;
  }

  if (formulario.contrasena.value.trim().length != 7) {
    document.getElementById("errorContrasena").innerText = "Campo inválido (Debe contener 7 caracteres)";
    formulario.contrasena.focus();
    return false;
  }

  if (formulario.contrasena.value.trim() != formulario.confirmacion.value.trim()) {
    document.getElementById("errorConfirmacion").innerText = "Confirmación de contraseñas no coincide";
    formulario.confirmacion.focus();
    return false;
  }

  if (formulario.tipo.value == -1) {
    document.getElementById("errorTipo").innerText = "Campo Obligatorio";
    formulario.tipo.focus();
    return false;
  }

  if (!formulario.acepto.checked) {
    document.getElementById("errorAcepto").innerText = "Debes aceptar los términos y condiciones";
    formulario.acepto.focus();
    return false;
  }

  alert("Datos Enviados");

  return true;
}