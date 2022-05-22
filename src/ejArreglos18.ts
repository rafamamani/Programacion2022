function cargarNumero(): void {
  for (let i: number = 0; i < 5; i++) {
    arregloNumero[i] = Number(prompt("Ingresa un numero"));
  }
}
function mostrarNumero(): void {
  for (let i: number = 0; i < 5; i++) {
    console.log("el numero en el indice  ", i, "es " + arregloNumero[i]);
  }
}
let arregloNumero: number[] = new Array(5);
cargarNumero();
mostrarNumero();
