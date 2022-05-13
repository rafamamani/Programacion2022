/*--------------------------------------------------------
Realizar el ejercicio de la calculadora
con 4 operaciones (suma, resta, multiplicacion y division)
utilizando Switch y la funcion dibujarLineas que veniamos usando.
-----------------------------------------------------------------*/
//creacion de la funcion para dibujar una linea
let calculo: number;
let numero1: number, numero2: number;
//funcion para ingresar numero
function ingreseNumero() {
  numero1 = Number(prompt("INGRESA UN NUMERO"));
  numero2 = Number(prompt("INGRESAS OTRO NUMERO"));
}
//funcion para realizar calculos
function calculadora() {
  let opcion: number = Number(
    prompt(
      "ingrese una OPCION",
      "1-SUMAR  2-RESTAR  3-MULTIPLICAR  4-DIVIDIR  0-FINALIZAR"
    )
  );
  // CASO DE OPCIOPNES
  switch (opcion) {
    case 1:
      console.log("VAMOS A SUMAR");
      ingreseNumero();
      calculo = numero1 + numero2;
      console.log(numero1 + "+" + numero2 + "=" + calculo);
      break;
    case 2:
      console.log("VAMOS A RESTAR");
      ingreseNumero();
      calculo = numero1 - numero2;
      console.log(numero1 + "-" + numero2 + "=" + calculo);
      break;
    case 3:
      console.log("VAMOS A MULTIPLICAR");
      ingreseNumero();
      calculo = numero1 * numero2;
      console.log(numero1 + "*" + numero2 + "=" + calculo);
      break;
    case 4:
      console.log("VAMOS A DIVIDIR");
      ingreseNumero();
      calculo = numero1 / numero2;
      console.log(numero1 + "/" + numero2 + "=" + calculo);
      break;
    case 0:
      console.log("PROGRAMA FINALIZADO");
      break;
    default:
      console.log("No se eligió ningúna de las opciones el programa finalizó");
  }
}
//FUNCION QUE DIBUJA LINEA
function dibujarGuiones() {
  let i: number;
  let linea: string = "";
  for (i = 0; i <= 40; i++) {
    linea = linea + "=";
  }
  console.log(linea);
}
//FUNCION QUE MUESTRA UN MENU DE OPCIONES
function mostrarMenu() {
  console.log("MENU DE OPCIONES");
  dibujarGuiones();
  console.log("1.- SUMAR");
  console.log("2.- RESTAR");
  console.log("3.- MULTIPLICAR");
  console.log("4.- DIVIDIR");
  console.log("0.- FINALIZAR PROGRAMA");
  dibujarGuiones();
}
// PROGRAMA PRINCIPAL
mostrarMenu();
calculadora();
