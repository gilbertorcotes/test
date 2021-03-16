"use strict"

var results = [];

/**
 * @class Calcula el número de segundos que tardan los robots en realizar al secuencia de pasos
 */

function robotMove(req, res){

   /** 
   * @description Determina el tiempo mínimo
   */    
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
        res.status(200).send({message: 'El primer caracter debe ser un número entero'});
    }
    longitud = secuencia.length;

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
        //console.log(pares[i]);
        if(pares[i].toString().substring(0,1).toLowerCase() == "r") {
            individual = pares[i].toString();
            botonRosa = parseInt(individual.substring(1));
            botonActualRosa = botonRosa - botonActualRosa;
            botonRosa = botonActualRosa;
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
            botonesPresionados = botonesPresionados + 1;
        } 

        
        if (pares[i].toString().substring(0,1).toLowerCase() == "v"){
            individual = pares[i].toString();
            botonVerde = parseInt(individual.substring(1));
            botonActualVerde = botonVerde - botonActualVerde;
            botonVerde = botonActualVerde;

            if(botonRosaPendiente){
                botonRosaPendiente = false;
                segundos = segundos + 1; // Este incremento representa cuando se presiona el boitón de permanecer, pero no estoy de acuerdo porque
                                         // no se esta avanzando asi que no debería incrementar el tiempo
            }
            segundos = segundos + botonVerde;
            botonesPresionados = botonesPresionados + 1;
        }

    }
    
    
    var longitud = results.length;
    var cadena1 = "";
    var cadena2 = "";
    var incremento = 0;
    if (longitud > 0){
        cadena1 = results[longitud-1];
        cadena2 = cadena1.substring(7,9);
        incremento = parseInt(cadena2);
    }
    caso       = incremento + 1;
    
    results.push("Caso: #" + caso + " Segundos : " + segundos);
    console.log("Caso: #" + caso + " Segundos : " + segundos);
    res.status(200).send({message: results});
}


module.exports = {
	robotMove
};
