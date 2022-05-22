function cargarNombres() {
  for (let i: number = 0; i < longitud; i++) {
    arregloNombres[i] = prompt("Ingresa un Nombre");
  }
}
function mostrarNombres() {
  for (let i: number = 0; i < longitud; i++) {
    console.log("el nombre en el indice  ", i, "es " + arregloNombres[i]);
  }
}
let longitud: number = Number(
  prompt("ingrese la cantidad de nombres a ingresar")
);
let arregloNombres: string[] = new Array(longitud);

cargarNombres();
mostrarNombres();
