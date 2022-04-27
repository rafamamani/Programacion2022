/* --------------------------------------------------------
Desarrolle un algoritmo que, de acuerdo a la altura de una persona,
 decida si puede entrar a un juego en un parque de diversiones
Para poder subirse a la montaña rusa la persona debe medir 1.30 mts. o más
--------------------------------------------------------------------------*/
let numero: number = Number(prompt("Ingresa la estatura en metros"));
if (numero > 1.3) {
  console.log("PUEDE INGRESAR ");
} else {
  console.log("NO PUEDE INGRESAR ");
}
