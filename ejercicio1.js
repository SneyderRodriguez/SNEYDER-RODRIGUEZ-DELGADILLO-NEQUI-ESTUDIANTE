let movimientos = [250000, -75500, 1200000, -320000, 48900, -15750];
let total = 0;
let cantidadRetiros = 0;

for(let i = 0; i <movimientos.length; i++){
    total = total + movimientos[i];

    if(movimientos[i] < 0){ //movimientos que están en la posición de [i]
        cantidadRetiros = cantidadRetiros + 1;
    }

    console.log("Total: " + total);
}

console.log("Total: " + total);
console.log("Cantidad de Retiros: " + cantidadRetiros);

//¿Que pasa si pones el console.log del total dentro del bucle en vez de afuera? 
// imprimira en pantalla la suma acumulada de cada posición del array
//¿Cuantas veces se imprime?
//Se imprime las veces que tenga el tamaño del array, es decir 6 veces en este caso
//¿Cuál es el valor "bueno", el ultimo o los del camino?
//eEl ultimo