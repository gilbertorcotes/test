"use strict"
var mongoose = require("mongoose");
var app = require("./app");
var port = process.env.PORT || 3977;

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/evaluatdb", (err, res) => {
	if (err) {
		throw err;
	} else {
		console.log("la conexion a la base de datos es correcta ...");
		app.listen(port, function(){
			console.log("Servidor del API Rest evaluat escuchando en http://localhost:"+port);
		});
	}
});
