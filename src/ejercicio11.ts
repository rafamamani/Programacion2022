/*----------------------------------------------------------------------------
Desarrolle un algoritmo que, dada una posición en una carrera se determine el
tipo de medalla a entregar. 

Tenga en cuenta que para el primer puesto se entrega medalla de oro, segundo
puesto medalla de plata y tercer puesto medalla de bronce. En caso que quede
en otra posición se entrega certificado de participación.
*-----------------------------------------------------------------------------*/
let posicionLlegada: number = Number(
  prompt("Ingresa el resultados de la carrera")
);
//verifico ingreso de numero positivo
if (posicionLlegada < 1) {
  console.log("ingreso una posicion invalida");
} else {
  //verificacion para  entrega medalla de ORO
  if (posicionLlegada === 1) {
    console.log("Entregar medalla de ORO");
  } else {
    //verificacion para  entrega medalla de PLATA
    if (posicionLlegada === 2) {
      console.log("Entregar medalla de PLATA");
    } else {
      //verificacion para  entrega medalla de BRONCE
      if (posicionLlegada === 3) {
        console.log("Entregar medalla de BRONCE");
      } else {
        console.log("Entregar certificado de PARTICIPACION");
      }
    }
  }
}
