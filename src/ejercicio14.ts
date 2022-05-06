/*-----------------------------------------------------------------------
Desarrolle un algoritmo dado el salario actual de un empleado
 determine el aumento de sueldo a aplicar y se lo muestre.
 Sueldo Actual            Sueldo con Aumento
0 - 15.000 $                    20%
15.001 - 20.000  $              10%
20.001 - 25.000  $              5%
Más de 25.000 $                 No hay aumento
-----------------------------------------------------------------------*/

let sueldoBase: number = Number(
  prompt("Ingrese el salario actual del empleado: ")
);
let nuevoSueldo: number = 0;
//compurebo si el sueldo base varia entre 0 y 15000
if (0 < sueldoBase && sueldoBase <= 15000) {
  nuevoSueldo = sueldoBase * 1.2; // realiza el calculo del aumento
  console.log("Ud. tiene un aumento de 20%");
  console.log("sueldo Base:      Sueldo con aumento");
  console.log("$", sueldoBase, "           $", nuevoSueldo);
  //compurebo si el sueldo base varia entre 15001 y 20000
} else if (15001 < sueldoBase && sueldoBase <= 20000) {
  nuevoSueldo = sueldoBase * 1.1; // realiza el calculo del aumento
  console.log("Ud. tiene un aumento de 10%");
  console.log("sueldo Base:      Sueldo con aumento");
  console.log("$", sueldoBase, "           $", nuevoSueldo);
  //compurebo si el sueldo base varia entre 20001 y 25000
} else if (20001 < sueldoBase && sueldoBase <= 25000) {
  nuevoSueldo = sueldoBase * 1.05; // realiza el calculo del aumento
  console.log("Ud. tiene un aumento de 5%");
  console.log("sueldo Base:      Sueldo con aumento");
  console.log("$", sueldoBase, "           $", nuevoSueldo);
  //caso en el que el sueldo es superior a 25000
} else {
  nuevoSueldo = sueldoBase;
  console.log("Ud. no tiene aumento");
  console.log("sueldo Base:");
  console.log("$", sueldoBase);
}
