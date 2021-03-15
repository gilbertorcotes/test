"use strict"

var express = require("express");
var UserController = require("../controllers/user");
var RobotController = require("../controllers/robots");

var api = express();
var md_auth = require("../midlewares/authenticated")

var multipart = require("connect-multiparty");
//var md_upload = multipart({ uploadDir: "./upload/users" });


api.get("/probando-controlador",md_auth.ensureAuth, UserController.pruebas);
api.post("/register", UserController.saveUser);
api.post("/login", UserController.loginUser);
api.put("/update-user/:id", md_auth.ensureAuth, UserController.updateUser);
api.get("/robot/:est", RobotController.robotMove);

module.exports = api; 