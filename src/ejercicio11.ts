/*----------------------------------------------------------------------------
Desarrolle un algoritmo que, dada una posición en una carrera se determine el
tipo de medalla a entregar. 

Tenga en cuenta que para el primer puesto se entrega medalla de oro, segundo
puesto medalla de plata y tercer puesto medalla de bronce. En caso que quede
en otra posición se entrega certificado de participación.
*-----------------------------------------------------------------------------*/
let posicion: number = Number(prompt("Ingresa el resultados de la carrera"));
if (posicion ===1) {
  console.log("Entregar medalla de ORO");
} else {
  if (posicion ===2) {
    console.log("Entregar medalla de PLATA");
} else{
  if (posicion ===2) {
    console.log("Entregar medalla de BRONCE");
} else{
  console.log("Entregar certificado de PARTICIPACION");
}