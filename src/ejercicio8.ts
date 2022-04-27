/*-----------ACTIVIDAD------------------------------------
/*Algoritmo que evalua si un numero ingresado 
esta entre 20 y 50

*/
let numero1: number = Number(prompt("Ingresa cualquier un numero"));
if (numero1 > 20 && numero1 < 50) {
  console.log("el numero ingresado esta dentro del rango");
} else {
  console.log("el numero ingresado esta fuera del rango");
}

/*-----------ACTIVIDAD------------------------------------
/*Algoritmo que evalua si un numero ingresado 
es positivo o negativo

*/
let numero2: number = Number(prompt("Ingresa cualquier un numero"));
if (numero2 > 0 || numero2 == 0) {
  console.log("el numero ingresado es positivo");
} else {
  console.log("el numero ingresado es negativo");
}

/*-----------ACTIVIDAD------------------------------------
/*Algoritmo que evalua si un numero ingresado 
es distinto de cero

*/
let numero3: number = Number(prompt("Ingresa cualquier un numero"));
if (!(numero3 == 0)) {
  console.log("el numero ingresado es distinto de cero");
} else {
  console.log("el numero ingresado es cero");
}
