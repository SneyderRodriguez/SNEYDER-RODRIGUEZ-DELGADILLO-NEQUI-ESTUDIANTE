let movimientos = [250000, -75500, 1200000, -320000, 48900, -15750];
let total = 0;
let cantidadRetiros = 0;

for(let i = 0; i <movimientos.length; i++){
    total = total + movimientos[i];

    if(movimientos[i] < 0){ //movimientos que están en la posición de [i]
        cantidadRetiros = cantidadRetiros + 1;
    }
}

console.log("Total: " + total);
console.log("Cantidad de Retiros" + cantidadRetiros);