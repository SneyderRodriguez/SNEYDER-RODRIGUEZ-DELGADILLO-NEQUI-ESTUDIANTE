const prompt = require("prompt-sync")();
const pinCorrento = 4580;
let intento = Number (prompt("Ingresa tu pin:   "));
let numeroIntentos = 0;

while(intento != pinCorrento){
    numeroIntentos++;
    console.log("Pin incorrecto");
    console.log("Intentos: " + numeroIntentos);

    intento = Number (prompt("Ingresa tu pin:   "));
}
console.log("Pin correcto")

