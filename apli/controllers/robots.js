"use strict"

function robotMove(req, res){
	var params = req.params.est;
	var secuencia = params;

    var botones = 100;
    var botonRosa;
    var botonVerde;
    var segundos = 0;
    var caso = 0;
    var longitud = 0;
    var pares = [];
    var metros = 0;
    var individual = "";
    var inicio = true;
    var botonActualRosa = 0;
    var botonActualVerde = 0;
    var botonRosaPendiente = false;
    var inicioPares = true;
    var botonesPresionados = 0;
    var par = "";

    if (!Number.isInteger(parseInt(secuencia.substring(0,1)))){
        console.log("El primer caracter debe ser un número");
        res.status(200).send({message: 'deberia ser un número entero'});
    }
    longitud = secuencia.length;
/*    if (Number.isInteger(longitud / 2)){
        res.status(400).send({message: 'Esta mal formada la estrategia, después del número de botones solo debe haber pares de datos'});
    }*/

    botones = secuencia.substring(0, 1);
    botonRosa = 0;
    botonVerde = 0;
    segundos = 0;
    metros = 1

    // formar los pares
    inicioPares = true;
    var depaso = "";
    for (var i = 1; i < longitud; i++) {
        if (secuencia.substring(i,i+1).toLowerCase() == "r" || secuencia.substring(i,i+1).toLowerCase() == "v") {
            if(inicioPares){
                inicioPares=false;} 
            else {
                pares.push(par);
            }
            par = secuencia.substring(i,i+1).toLowerCase();
        } else {
            par = par + secuencia.substring(i,i+1);
        }
        if (i > longitud - 2) {pares.push(par);}
    }

    if (pares.length != parseInt(secuencia.substring(0,1))){
        res.status(500).send({message: 'El número de botones a presionar de acuerdo con los requerimientos del ejercicios debería ser igual al número de pasos en la secuencia'});
    }

    for (let i = 0; i < pares.length; i++) {
        console.log(pares[i]);
        if(pares[i].toString().substring(0,1).toLowerCase() == "r") {
            individual = pares[i].toString();
            botonRosa = parseInt(individual.substring(1));
            botonActualRosa = botonRosa - botonActualRosa;
            console.log("boton actual rosa : " + botonRosa);
            botonRosa = botonActualRosa;
            console.log("boton rosa " + botonRosa);
            if (inicio) {
                if (botonRosa >=0){
                    botonRosaPendiente = true;
                }
                segundos = segundos + botonRosa - 1;
                inicio = false;
            }
            else {
                segundos = segundos + botonRosa;
            }
            console.log("segundos : " + segundos);
            botonesPresionados = botonesPresionados + 1;
            console.log("Botones presionados : " + botonesPresionados);
        } 

        
        if (pares[i].toString().substring(0,1).toLowerCase() == "v"){
            individual = pares[i].toString();
            botonVerde = parseInt(individual.substring(1));
            botonActualVerde = botonVerde - botonActualVerde;
            console.log("boton actual verde : " + botonActualVerde);
            botonVerde = botonActualVerde;
            console.log("boton verde " + botonVerde);

            if(botonRosaPendiente){
                botonRosaPendiente = false;
                segundos = segundos + 1; // Este incremento representa cuando se presiona el boitón de permanecer, pero no estoy de acuerdo porque
                                         // no se esta avanzando asi que no debería incrementar el tiempo
            }
            segundos = segundos + botonVerde;
            console.log("verde");
            console.log("segundos : " + segundos);
            botonesPresionados = botonesPresionados + 1;
            console.log("Botones presionados : " + botonesPresionados);
        }


    }

     console.log(pares);
     res.status(200).send({message: 'Concluido'});
}


module.exports = {
	robotMove
};
