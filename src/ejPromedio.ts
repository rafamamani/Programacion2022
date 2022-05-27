/*----------------------------------------------------------------
Desarrolle un algoritmo que permita cargar alumnos y sus notas en
los tres trimestres.
Se debe permitir obtener el promedio anual (es decir, de sus tres
notas) de un alumno (ingresado por el usuario)
Luego de resolverlo, pensar en aprovechar métodos y discutir 
como representar la información.
----------------------------------------------------------------*/
// -------  DECLARO Y DEFINO VARIABLES  ---------------------------------

let alumnos: string = new Array(3);
let nombre: string;
let notas1trimestre: number = new Array(3);
let notas2trimestre: number = new Array(3);
let notas3trimestre: number = new Array(3);
let promedioAnual: number = new Array(3);
let i: number;
let prom: number;
//FUNCION PARA CAGAR ARREGLO del tipo String
function cargarNombres(alumnos: string): string {
  for (i = 0; i < 3; i++) {
    alumnos[i] = prompt(
      "Carga Nombres de Alumnos",
      "INGRESE NOMBRE DEL " + (i + 1) + "° ALUMNO"
    );
  }
  return alumnos;
}
//FUNCION PARA CAGAR ARREGLO del tipo Number
function cargarNotas(arregloNotas: number, numero: number): number {
  for (i = 0; i < 3; i++) {
    arregloNotas[i] = Number(
      prompt(
        "Carga Notas del " + numero + "° Trimeste",
        "INGRESE Nota del Alumno " + alumnos[i]
      )
    );
  }
  return arregloNotas;
}

//----------   FUNCION PARA SACAR PROMEDIO   ----------------------------
function sacarPromedio(
  trimestre1: number,
  trimestre2: number,
  trimestre3: number
): number {
  for (i = 0; i < 3; i++) {
    promedioAnual[i] =
      (notas1trimestre[i] + notas2trimestre[i] + notas3trimestre[i]) / 3;
  }
  /*for (i = 0; i < 3; i++) {
    promedioAnual[i] = promedioAnual[i] / 3;
  }*/
  return promedioAnual;
}
// -------   FUNCION PARA MOSTRAR RESULTADO  ----------------------------
function mostrarResultado(
  notas1trimestrearreglo: number,
  notas2trimestreArreglo: number,
  notas3trimestrearreglo: number,
  alumnos: string
) {
  //  ------   FUNCION QUE DIBUJA LINEA   ---------------------------------
  function dibujarGuiones() {
    let i: number;
    let linea: string = "";
    for (i = 0; i <= 45; i++) {
      linea = linea + "=";
    }
    console.log(linea);
  }
  //-------------  muestra por consola estudiante  y notas---------------------//
  console.log("------  PROMEDIO ANUAL DE LOS ALUMNOS   -------");
  dibujarGuiones();
  for (i = 0; i < 3; i++) {
    console.log(
      "ESTUDIANTE " +
        alumnos[i] +
        " = " +
        notas1trimestre[i] +
        " ║ " +
        notas2trimestre[i] +
        " ║ " +
        notas3trimestre[i] +
        "  → PROMEDIO = " +
        promedioAnual[i]
    );
  }
}
//------- FUNCION PARA BUSCAR UN ELEMENTO DEL ARREGLO  ------------------//
function buscarAlumno(nombre: string, alumnos: string): string {
  console.log("BUSQUEDA DE UN ALUMNO PARA SACAR EL PROMEDIO");
  nombre = prompt("INDIQUE EL NOMBRE DE UN ALUMNO PARA CALCULAR SU PROMEDIO");

  for (i = 0; i < 3; i++) {
           
    if (nombre === alumnos[i]) {
      prom = promedioAnual[i];
      console.log("El promedio de " + nombre + " es: " + prom);
    }
  }
  console.log("el nombre ingrsado no pertenece a la lista de Alumnos"); 
  return nombre;
 
}
      
//**************** PROGRAMA PRINCIPAL **************************//

cargarNombres(alumnos);
cargarNotas(notas1trimestre, 1);
cargarNotas(notas2trimestre, 2);
cargarNotas(notas3trimestre, 3);
sacarPromedio(notas1trimestre, notas2trimestre, notas3trimestre);
mostrarResultado(notas1trimestre, notas2trimestre, notas3trimestre, alumnos);
buscarAlumno(nombre, alumnos);
