/*-----------------------------------------------------------------------------
Implemente un método llamado cantidadDeDivisores que reciba un número entero y 
devuelva la cantidad de divisores 
Por ejemplo, para el número 16, sus divisores son 1, 2, 4, 8, 16, por lo que 
la respuesta debería ser 5
Re-utilice el método esMultiplo implementado para el ejercicio anterior
-------------------------------------------------------------------------------*/

//funcion para saber si un numero es multiplo de otro
function esMultiplo(dividendo: number, divisor: number): boolean {
  if (dividendo % divisor === 0) {
    return true;
  } else {
    return false;
  }
}

//Funcion para calcular la cantidad de divisores
function cantidadDeDivisores(numeroIngresado: number): number {
  let cantidadDivisores: number = 0;
  let indice: number;
  for (indice = 0; indice <= numeroIngresado; indice++) {
    if (esMultiplo(numeroIngresado, indice) === true) {
      //reutilizo la funcion es multiplo
      cantidadDivisores++;
    }
  }
  return cantidadDivisores;
}

//PROGRAMA PRINCIPAL
let numeroIngresado: number = Number(
  prompt("ingrese un numero para saber cuantos divisores tiene:")
);
console.log(
  "el numero " +
    numeroIngresado +
    " tiene " +
    cantidadDeDivisores(numeroIngresado) +
    " divisores"
);
