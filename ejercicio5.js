let usuarios = [{nombre: "Juan", movimientos: [250000, -50000, 30000]},
{nombre: "Ana", movimientos: [100000, -25000]}, {nombre: "Pedro", movimientos: [50000, 20000, -10000]}];
for(let i = 0; i < usuarios.length; i++){
    let totalUsuario = 0
    for(let j = 0; j < usuarios[i].movimientos.length; j++){
        totalUsuario = totalUsuario + usuarios[i].movimientos[j];
    }
    console.log(usuarios[i].nombre);
    console.log(totalUsuario);
}