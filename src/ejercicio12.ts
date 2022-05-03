/*---------------------------------------------------
Algoritmo que nos pida una clave y verifique 
que sea correcta
*/
let password: string = " ";
let i: number = 0;
while (i < 3) {
  let password: string = prompt("CONTROL DE CLAVES", "Ingresa una Clave");
  if (password === "eureka") {
    console.log("CLAVE INGRESADA CORRECTAMENTE");
    i = 3;
  } else {
    console.log("volever a ingresar la Clave");
    //let password: string = prompt("CONTROL DE CLAVES", "Ingresa una Clave");
  }
  i++;
  let password: string = prompt("CONTROL DE CLAVES", "Ingresa una Clave");
}

// programa para enrtegar el lunes 2-05-2022
let numero1: number = Number(prompt("ingrese numero 1"));

let numero2: number = Number(prompt("ingrese numero 2"));

let suma: number = 0;

if (numero1 > numero2) {
}

for (let indice: number = numero1; indice <= numero2; indice++) {
  suma = suma + indice;
}

console.log(suma);
