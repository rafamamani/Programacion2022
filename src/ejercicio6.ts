/*-----------ACTIVIDAD------------------------------------
Algoritmo que calcula y muestra por pantalla el precio final de un producto
 después de aplicarle un descuento.
*/
let precioProducto: number = Number(prompt("ingrese el precio del producto"));
let porcentajeDescuento: number = 0.1;
let descuento: number = precioProducto * porcentajeDescuento; //cálculo del % descuento
let precioFinal: number = precioProducto - descuento; //aplicacion del descuento
console.log("El precio final es: $", precioFinal);
