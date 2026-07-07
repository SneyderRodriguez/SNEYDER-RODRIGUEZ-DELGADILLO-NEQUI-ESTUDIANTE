let movimientos = [250000, 0, 1200000, 0, 48900, -15750];
let posicionEncontrada = 0;

for(let i = 0; i < movimientos.length; i++){
    if(movimientos[i] == 0){
        continue;
    }

    if(movimientos[i] == 48900){
        posicionEncontrada = i;
        console.log(posicionEncontrada);
        break;
    }
}