let subTotalPm = 0;
let subTotalCalc = 0;
let subTotalEco = 0;
let subTotal = 0;
let total = 0;

let valorEnvio = 0;

let aplicoDescuento = false;

let seleccionoUnidadesPm = false;
let seleccionoUnidadesCalc = false;
let seleccionoUnidadesEco = false;

let yaIngresoPm = false;
let yaIngresoCalc = false;
let yaIngresoEco = false;

// Calcular el precio neto de los productos
function calcularSubTotal() {
  let portaminas = document.getElementById("portaminas").value;
  let calculadoras = document.getElementById("calculadoras").value;
  let eco = document.getElementById("eco").value;

  // Chequeo de portaminas
  if (portaminas == "Pm1") {
    subTotalPm += 5580;
  }
  if (portaminas == "Pm2") {
    subTotalPm += 1638;
  }
  if (portaminas == "Pm3") {
    subTotalPm += 14136;
  }
  if (portaminas == "Pm4") {
    subTotalPm += 5332;
  }
  if (portaminas == "Pm5") {
    subTotalPm += 2852;
  }
  if (portaminas == "Pm6") {
    subTotalPm += 3844;
  }
  if (portaminas == "Pm7") {
    subTotalPm += 6696;
  }
  if (portaminas == "Pm8") {
    subTotalPm += 7688;
  }
  if (portaminas == "Pm9") {
    subTotalPm += 19840;
  }

  // Chequeo calculadoras
  if (calculadoras == "Casio") {
    subTotalCalc += 17360;
  }
  if (calculadoras == "TI") {
    subTotalCalc += 9920;
  }
  if (calculadoras == "Sharp") {
    subTotalCalc += 13883;
  }

  //Chequeo eco-friendly
  if (eco == "Eco1") {
    subTotalEco += 4464;
  }
  if (eco == "Eco2") {
    subTotalEco += 2976;
  }
  if (eco == "Eco3") {
    subTotalEco += 1407;
  }
  if (eco == "Eco4") {
    subTotalEco += 6175;
  }
  if (eco == "Eco5") {
    subTotalEco += 1482;
  }

  // A partir de aca se calculan las unidades
  let Pm1Ud = document.getElementById("Pm1Ud").checked
  let Pm10Ud = document.getElementById("Pm10Ud").checked;
  let Pm20Ud = document.getElementById("Pm20Ud").checked;

  let Calc1Ud = document.getElementById("Calc1Ud").checked
  let Calc10Ud = document.getElementById("Calc10Ud").checked;
  let Calc20Ud = document.getElementById("Calc20Ud").checked;

  let Cco1Ud = document.getElementById("Eco1Ud").checked
  let Eco10Ud = document.getElementById("Eco10Ud").checked;
  let Eco20Ud = document.getElementById("Eco20Ud").checked;
  
  if (Pm1Ud) {
    yaIngresoPm = true;
  }
  if (Pm10Ud) {
    subTotalPm *= 10;
    subTotalPm = (95 * subTotalPm) / 100;
    yaIngresoPm = true;
  }
  if (Pm20Ud) {
    subTotalPm *= 20;
    subTotalPm = (90 * subTotalPm) / 100;
    yaIngresoPm = true;
  }

  if (Calc1Ud) {
    yaIngresoCalc = true;
  }
  if (Calc10Ud) {
    subTotalCalc *= 10;
    subTotalPm = (95 * subTotalCalc) / 100;
    yaIngresoCalc = true;
  }
  if (Calc20Ud) {
    subTotalCalc *= 20;
    subTotalCalc = (90 * subTotalCalc) / 100;
    yaIngresoCalc = true;
  }

  if (Eco1Ud) {
    yaIngresoEco = true;
  }
  if (Eco10Ud) {
    subTotalEco *= 10;
    subTotalEco = (95 * subTotalEco) / 100;
    yaIngresoEco = true;
  }
  if (Eco20Ud) {
    subTotalEco *= 10;
    subTotalEco = (90 * subTotalEco) / 100;
    yaIngresoEco = true;
  }

  subTotal = subTotalPm + subTotalCalc + subTotalEco;

  return subTotal;
}

function chequearUnidades() {
  let Pm1Ud = document.getElementById("Pm10Ud").checked;
  let Pm10Ud = document.getElementById("Pm10Ud").checked;
  let Pm20Ud = document.getElementById("Pm20Ud").checked;

  let Calc1Ud = document.getElementById("Calc10Ud").checked;
  let Calc10Ud = document.getElementById("Calc10Ud").checked;
  let Calc20Ud = document.getElementById("Calc20Ud").checked;

  let Eco1Ud = document.getElementById("Eco10Ud").checked;
  let Eco10Ud = document.getElementById("Eco10Ud").checked;
  let Eco20Ud = document.getElementById("Eco20Ud").checked;

  if (Pm1Ud == true && Pm10Ud == true && Pm20Ud == true) {
    seleccionoUnidadesPm = true;
  }
  if (Calc1Ud == true && Calc10Ud == true && Calc20Ud == true) {
    seleccionoUnidadesCalc = true;
  }
  if (Eco1Ud == true && Eco10Ud == true && Eco20Ud == true) {
    seleccionoUnidadesEco = true;
  }
}

function imprimirSubTotal() {
  let subTotalCompra = calcularSubTotal();
  let campoSubTotal = document.getElementById("subTotal");
  chequearUnidades();

  if (!seleccionoUnidadesPm && subTotalPm > 0 && !yaIngresoPm) {
    alert("Seleccione cuántas unidades de portaminas desea");
    console.log("If portaminas");
  } else if (!seleccionoUnidadesPm && subTotalCalc > 0 && !yaIngresoCalc) {
    alert("Seleccione cuántas unidades de calculadora desea");
    console.log("If calculadoras");
  } else if (!seleccionoUnidadesPm && subTotalEco > 0 && !yaIngresoEco) {
    alert("Seleccione cuántas unidades de productos eco-friendly desea");
    console.log("If eco");
  } else {
    campoSubTotal.textContent = "Subtotal: $";
    campoSubTotal.textContent += subTotalCompra;
    if (subTotalCompra > 0) {
      alert("Se agregaron productos al carrito con éxito");
      borrarSeleccionCarrito();
    } else {
      alert("Por favor, seleccione un producto para agregar al carrito");
    }
  }
  
  if (total > 0) {
    imprimirTotal();
  }
}

function borrarSeleccionCarrito() {
  document.getElementById("portaminas").value = "";
  document.getElementById("calculadoras").value = "";
  document.getElementById("eco").value = "";

  document.getElementById("Pm1Ud").checked = false;
  document.getElementById("Pm10Ud").checked = false;
  document.getElementById("Pm20Ud").checked = false;

  document.getElementById("Calc1Ud").checked = false;
  document.getElementById("Calc10Ud").checked = false;
  document.getElementById("Calc20Ud").checked = false;

  document.getElementById("Eco1Ud").checked = false;
  document.getElementById("Eco10Ud").checked = false;
  document.getElementById("Eco20Ud").checked = false;
}

function vaciarCarrito() {
  subTotalPm = 0;
  subTotalCalc = 0;
  subTotalEco = 0;
  subTotal = 0;

  let campoSubTotal = document.getElementById("subTotal");

  campoSubTotal.textContent = "Subtotal: $";
  campoSubTotal.textContent += subTotal;
  
  alert("Se vació el carrito")
}

function calcularEnvio() {
  let ciudad = document.getElementById("ciudad").value;
  let codigoPostal = document.getElementById("codigoPostal").value;
  let provincia = document.getElementById("provincia").value;

  if (ciudad == "Bell Ville" || ciudad == "bell ville" && codigoPostal == "2550" && provincia == "CBA") {
    valorEnvio = 0;
    imprimirTotal();
  } else {
    valorEnvio = 750;
    imprimirTotal();
  }

  return valorEnvio;
}

function imprimirEnvio() {
  let valorEnvioCompra = calcularEnvio();
  let campoEnvio = document.getElementById("envio");

  campoEnvio.textContent = "Envio: $";
  campoEnvio.textContent += valorEnvioCompra;
}

function valuarEntrada() {
  let nombreDelCliente = document.getElementById("nombre").value;
  let apellidoDelcliente = document.getElementById("apellido").value;
  let provincia = document.getElementById("provincia").value;
  let ciudad = document.getElementById("ciudad").value;
  let direccion = document.getElementById("direccion").value;
  let codigoPostal = document.getElementById("codigoPostal").value;

  if (
    nombreDelCliente == "" ||
    apellidoDelcliente == "" ||
    provincia == "" ||
    ciudad == "" ||
    direccion == "" ||
    codigoPostal == ""
  ) {
    alert("Por favor, complete todos los campos");
  } else {
    imprimirEnvio();
  }
}

function aplicarDescuento() {
  let descuentoIngresado = document.getElementById("campo-descuento").value;
  let campoSubTotal = document.getElementById("subTotal");

  if (!aplicoDescuento) {
    if (descuentoIngresado === "DESCUENTO10") {
      subTotal = (90 * subTotal) / 100;
      aplicoDescuento = true;
      campoSubTotal.textContent = "Subtotal: $";
      campoSubTotal.textContent += subTotal;
      imprimirTotal();
    } else if (descuentoIngresado === "DESCUENTO15") {
      subTotal = (85 * subTotal) / 100;
      aplicoDescuento = true;
      campoSubTotal.textContent = "Subtotal: $";
      campoSubTotal.textContent += subTotal;
      imprimirTotal();
    } else {
      alert("No es valido el descuento")
    }
  } else {
    alert("Usted ya aplicó un descuento")
  }
}

// Agregar que se calcule el total cuando el usuario agrega mas items despues de haber
// calculado el envio.
function calcularTotal() {
  total = subTotal + valorEnvio;
}

function imprimirTotal() {
  calcularTotal();
  let campoTotal = document.getElementById("total");
  
  campoTotal.textContent = "Total: $";
  campoTotal.textContent += total;
}

function comprar() {
  borrarDatos();
  let apay = document.getElementById("apay").checked;
  let gpay = document.getElementById("gpay").checked
  if (subTotal == 0 || document.getElementById("nombre").value == "") {
    alert("Por favor ingrese sus datos o agregue productos al carrito")
  } else {
    if (apay == false && gpay == false) {
      alert("Por favor, elija un método de pago");
    } else {
      alert("Compra realizada con éxito");
      borrarDatos();
      borrarSeleccionCarrito();
    }
  }
}

function borrarDatos() {
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("provincia").value = "";
  document.getElementById("ciudad").value = "";
  document.getElementById("direccion").value = "";
  document.getElementById("codigoPostal").value = "";

}