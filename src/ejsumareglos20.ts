/*----------------------------------------------------------------------------
Sumar los elementos de cada una de las posiciones de dos vectores y guardar
el resultado en otro vector
El arreglo tiene dimensión 6 y los números de los dos vectores los carga
 el usuario
-----------------------------------------------------------------------------*/
// -------  DECLARO Y DEFINO VARIABLES  ---------------------------------

let arregloA: number = new Array(6);
let arregloB: number = new Array(6);
let arregloSuma: number = new Array(6);
let i: number;
//FUNCION PARA CAGAR ARREGLO
function cargarArreglo(arreglo: number, numero: number): number {
  for (i = 0; i < 6; i++) {
    arreglo[i] = Number(
      prompt("Carga de Arreglo" + numero, "INGRESE UN NUMERO")
    );
  }
  return arreglo;
}
//FUNCION PARA SUMAR ARREGLO
function sumarArreglos(arregloA: number, ArregloB: number): number {
  for (i = 0; i < 6; i++) {
    arregloSuma[i] = arregloA[i] + arregloB[i];
  }
  return arregloSuma;
}
// -------   FUNCION PARA MOSTRAR RESULTADO  ----------------------------
function mostrarResultado(
  arregloA: number,
  ArregloB: number,
  arregloSuma: number
) {
  //  ------   FUNCION QUE DIBUJA LINEA   ---------------------------------
  function dibujarGuiones() {
    let i: number;
    let linea: string = "";
    for (i = 0; i <= 35; i++) {
      linea = linea + "=";
    }
    console.log(linea);
  }
  //   ---------  uso del metodo .join() para colocar en una sola linea  ---
  var arreglo1 = arregloA.join();
  var arreglo2 = arregloB.join();
  var arreglo3 = arregloSuma.join();
  console.log("SUMA entre un Arreglos : A[6] + B[6]");
  dibujarGuiones();
  console.log("ARREGLO A[6] = [ " + arreglo1 + "]");
  console.log("ARREGLO B[6] = [ " + arreglo2 + "]");
  dibujarGuiones();
  console.log("ARREGLO SUMA = [ " + arreglo3 + "]");
}

//**************** PROGRAMA PRINCIPAL **************************//

cargarArreglo(arregloA, 1);
cargarArreglo(arregloB, 2);
sumarArreglos(arregloA, arregloB);
mostrarResultado(arregloA, arregloB, arregloSuma);
