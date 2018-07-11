'use strict'

var express = require('express');
//Se ejecuta el middeware antes del codigo node
//Mandamos llamar body-parser
var bodyParser = require('body-parser');

var app = express();
//agarramos la variable de entorno llamada PORT y almacenamos el puerto
var port = process.env.PORT || 3678;

//creamos un middeware para lanzar lo siguiente que nos permite convertir los datos de URL a JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.listen(3678, function(){
	console.log(`El servidor está funcionando en http://localhost:${port} (API REST FAVORITOS)`);
	console.log("PRUEBA DE NODEMON");
});