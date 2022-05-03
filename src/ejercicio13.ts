/*-------------------------------------------------------------------------
Escriba un programa que pida al usuario dos números enteros, y luego
retorne la suma de todos los números que están entre ellos
------------------------------------------------------------------------*/

let primerNumero: number = Number(prompt("ingrese el primer número"));
let segundoNumero: number = Number(prompt("ingrese el segundo número"));
let auxiliar: number = 0;
let suma: number = 0;
//verifico que no sean iguales los numeros ingresados
while (primerNumero === segundoNumero) {
  console.log(
    "los números ingresados son iguales no se puede sumar entre ellos"
  );
  primerNumero = Number(prompt("ingrese nuevamente el primer número"));
  segundoNumero = Number(prompt("ingrese nuevamente el segundo número"));
}
// verifico si el primer numero ingresado es mayor
if (primerNumero > segundoNumero) {
  auxiliar = segundoNumero;
  segundoNumero = primerNumero;
  primerNumero = auxiliar;
}
// realizo la suma y muestra los reultados parciales

for (let indice: number = primerNumero; indice <= segundoNumero; indice++) {
  console.log(suma + "+" + indice);
  suma = suma + indice;
}
// muestra el resultado total
console.log("la suma total es: ", suma);
