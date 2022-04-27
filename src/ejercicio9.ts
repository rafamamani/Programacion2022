/*-----------ACTIVIDAD------------------------------------
Algoritmo que calcula y muestra por pantalla el precio 
final de un producto 
 
*/
//let descuento: number = 0;
let precioFinal: number = 0;
let precioProducto: number = Number(prompt("ingrese el precio del producto"));
let cantidadProducto: number = Number(prompt("ingrese la cantidad a comprar"));
let precioParcial = precioProducto * cantidadProducto;
if (precioParcial > 1000) {
  let porcentajeDescuento: number = 0.1;
  let descuento: number = precioParcial * porcentajeDescuento; //cálculo del % descuento
  let precioFinal: number = precioParcial - descuento; //aplicacion del descuento
} else {
  let precioFinal = precioParcial;
}

console.log("El precio final es: $", precioFinal);

/*-----------ACTIVIDAD------------------------------------
Algoritmo que calcula y muestra por pantalla el precio 
final de un producto 
 
*/
