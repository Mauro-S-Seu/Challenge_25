//! .......... CHALLENGE 25 ..........

// En un juego de pelea recibimos un array (generarlo) con 10 golpes aleatorios que recibe un personaje,
// mostrar todos los valores y luego buscar cual es el golpe mas fuerte que se dio.


let cantgolpes = prompt("Ingresar cantidad de golpes que recibió el personaje: ");


for (let i = 1 ; i<= cantgolpes ; i++){
    let golpes = Math.floor(Math.random() * 1000);
    console.log(`Golpe ${i} = ` + golpes);
}

console.log('\n')
//let golpes = Math.floor(Math.random() * 1000);

console.log("El golpe más fuerte fue de: ", golpes, "fuerza.");


