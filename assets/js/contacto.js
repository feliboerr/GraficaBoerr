function borrar() {
  document.getElementById("nombre").value = "";
  document.getElementById("email").value = "";
  document.getElementById("mensaje").value = "";
}

function mostrarMensaje() {
  let nombreDelCliente = document.getElementById("nombre").value;
  let emailDelCliente = document.getElementById("email").value;

  alert(
    "Hola " +
      nombreDelCliente +
      ", te vamos a responder lo antes posible a través de " +
      emailDelCliente
  );

  borrar();
}

function validarEntrada() {
  let nombreDelCliente = document.getElementById("nombre").value;
  let emailDelCliente = document.getElementById("email").value;
  let mensajeDelCliente = document.getElementById("mensaje").value;

  if (
    nombreDelCliente == "" ||
    emailDelCliente == "" ||
    mensajeDelCliente == ""
  ) {
    alert("Por favor, complete todos los campos");
  } else {
    mostrarMensaje();
  }
}
