var precio_base = 2000;

var edad_18 = 0.1; // 10%
var edad_25 = 0.2; // 20%
var edad_50 = 0.3; // 30%

var casado_18 = 0.1; // 10%
var casado_25 = 0.2; // 20%
var casado_50 = 0.3; // 30%

var hijos_recargo = 0.2; // 20%

var recargo_edad = 0;
var recargo_conyuge = 0;
var recargo_hijos = 0;
var recargo_total = 0;

var precio_final = 0;

var nombre = prompt("Ingrese su nombre, por favor");
var edad = prompt("¿Cuántos años tiene? Ingrese solamente números ");

var casado = prompt("¿Está casado actualmente?");
//Comprobamos la edad del cónyuge, solamente si se está casado/a
var edad_conyuge;
if ("SI" == casado.toUpperCase()) {
  edad_conyuge = prompt("¿Qué edad tiene su esposo/a?", "si/no");
}

var edad_numero = parseInt(edad);
var edad_conyuge_numero = 0;
if ("SI" == casado.toUpperCase()) {
  edad_conyuge_numero = parseInt(edad_conyuge);
}

var hijos = prompt("¿Tiene hijos o hijas?");
var cantidad_hijos;
if ("SI" == hijos.toUpperCase()) {
  cantidad_hijos = prompt("¿Cuántos hijos tiene?", "Ingrese un número");
  cantidad_hijos = parseInt(cantidad_hijos);
}

//Calcular el recargo total basado en las respuestas ingresadas


if (edad_numero >= 18 && edad_numero < 25) {
  
  recargo_edad = precio_base * edad_18;
} else if (edad_numero >= 25 && edad_numero < 50) {

  recargo_edad = precio_base * edad_25;
} else {
  // Recargo 30% para edades 50+
  recargo_edad = precio_base * edad_50;
}
if ("SI" == casado.toUpperCase() && edad_conyuge_numero > 0) {
  if (edad_conyuge_numero >= 18 && edad_conyuge_numero < 25) {
    recargo_conyuge = precio_base * edad_18;
  } else if (edad_conyuge_numero >= 25 && edad_conyuge_numero < 50) {
    recargo_conyuge = precio_base * edad_25;
  } else {
    recargo_conyuge = precio_base * edad_50;
  }
}


if ("SI" == hijos.toUpperCase() && cantidad_hijos > 0) {
  recargo_hijos = precio_base * recargo_hijos * cantidad_hijos;
}

//Calcular el recargo total
recargo_total = recargo_edad + recargo_conyuge + recargo_hijos;


precio_final = precio_base + recargo_total;

//Resultado
alert("Para el asegurado " + nombre);
alert("El recargo total será de: " + recargo_total.toFixed(2));
alert("El precio final del seguro de vida será de: " + precio_final.toFixed(2));