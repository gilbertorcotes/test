"use strict"

var fs = require("fs");
var path = require("path");
var bcrypt = require("bcrypt-nodejs");
var User = require("../models/user");
var jwt = require("../services/jwt");


function pruebas(req, res){
	res.status(200).send({
		message: "prueba"
	});
}

function saveUser(req, res){
	var user = new User();
	
	var params = req.body;
	
	console.log(params);
	
	user.name = params.name;
	user.email = params.email;
	
	if(params.password){
		bcrypt.hash(params.password, null, null, function (err, hash) {
			user.password = hash;
			if (user.name != null && user.email != null){
				//Guardar el usuario
				user.save((err, userStored) => {
					if (err){
						res.status(500).send({message: "Error al guardar el usuario"});
					}else {
						if(!userStored){
							res.status(404).send({message: "No se guardo el usario en la base de datos"});
						}else {
							res.status(200).send({user: userStored});
						}
					}
				});
			} else {
				res.status(500).send({message: "Introduce todos los datos"});
			}
		});
		//enciptar ñla contraseeña
	} else {
		res.status(500).send({message: "Introduce la contraseña"});
	}
}

function loginUser(req, res) {
	var params = req.body;
	
	var email = params.email;
	var password = params.password;
	
	User.findOne({email: email.toLowerCase()}, (err, user) => {
		if(err) {
			res.status(500).send({message: "Error en la peticion"});
		} else {
			if(!user){
				res.status(404).send({message: "Usuario no existe"});
			}else {
				//comprobar que existe la contraseña
				bcrypt.compare(password, user.password, function(err, check){
					if(check){
						// Regresar los datos del usario logueado
						if(params.gethash){  // aqui se necesita una entrada en el body que se llame gethash = true
							// devolver un token de jwt
							res.status(200).send({
								token: jwt.createToken(user)
							});
						}else {
							res.status(200).send({hola: user});
						}
					}else {
						res.status(500).send({message: "La contraseña es incorrecta"});
					}
				});
			}
		}
	});
}

function updateUser(req, res){
	var userId = req.params.id;
	var update = req.body;
	
	if (userId == req.user.sub){
		return res.status(500).send({message: "No tienes permisos para actualizar al usuario"});
	}

	User.findByIdAndUpdate(userId, update, (err, userUpdate) => {
		if(err){
			res.status(500).send({message: "Error al actualizar el usario"});
		}else {
			if(!userUpdate){
				res.status(404).send({message: "No se ha podido actualizar el usuario"});
			}else {
				res.status(200).send({user: userUpdate});
			}
		}		
	});
}


module.exports = {
	pruebas,
	saveUser,
	loginUser,
	updateUser
};