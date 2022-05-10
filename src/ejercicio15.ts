/*-----------------------------------------------------------------------
Desarrolle un algoritmo que:
Leer valores del usuario hasta que introduzca un valor 0.
El usuario puede introducir valores numéricos, tanto positivos
como negativos.
Contar la cantidad de valores introducidos que sean mayores a 0
y el porcentaje de positivos respecto del total.
-----------------------------------------------------------------------*/

let cantidadTotal: number = 0;
let cantidadPositivos: number = 0;
let porcPositivos: number = 0;
let num = Number(
  prompt("Cantidad y Distribución de Positivos", "ingrese cualquier numero")
);
// verifico que sea distinto de cero
while (num !== 0) {
  // condicion para identificar los positivos
  if (num > 0) {
    cantidadPositivos++; // cuenta la cantidad de numeros positivos
  }
  cantidadTotal++; //cuenta la cantidad total de valores ingresados
  num = Number(prompt("Ingrese un número"));
}
if (cantidadTotal > 0) {
  //calculo del % respecto del Total
  porcPositivos = (cantidadPositivos * 100) / cantidadTotal;
  console.log(
    "Valores positivos",
    cantidadPositivos,
    "  -  ",
    porcPositivos,
    " % del total."
  );
} else {
  console.log(
    "no se puede realizar los calculos porque no se ingreso ningun numero"
  );
}
