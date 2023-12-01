//alert("Hola este es mi Javascript");
// let nombre = “mi nombre”;
// const nombre = “mi nombre”;
// var nombre = “mi nombre”;
// let nombre = "javier";
// console.log(nombre);

// let contenidoTitulo="Javier";
// let titulo = document.querySelector(".logo .fuente-acento");
// let tii = document.querySelector("tittle");
// console.log(tii);
// titulo.innerHTML = contenidoTitulo;
const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");
console.log(nombre);
function validarFormulario() {
  let warnings = "El nombre debe contener minimo 4 letras";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});