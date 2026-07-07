const prompt = require("prompt-sync")();
let saldo = 5000000;
let opcion;

do{
    console.log("=========" + "\nMENU" + "\n=========");
    console.log("Ver tu saldo digita: 1" + "\nEnviar dinero digita: 2")
    console.log("Recargar digita: 3" + "\nPara salir digita: 4")
    opcion = Number (prompt("Digita una opción:\t"));

    if(opcion === 1){
        console.log("Tu saldo es: ${saldo}");
    } else if(opcion === 2){
        console.log("¿Cuanto dinero vas a enviar?");
    }else if(opcion === 3){
        console.log("¿Cuanto deseas recargar?");
    }else if(opcion === 4){
        console.log("Salir");
    }
}while(opcion != 4)