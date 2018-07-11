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

//Creamos una ruta tipo GET con Express, la ruta es prueba
//Parametros, con el ? es opcional, sin el, es obligarorio
app.get('/prueba/:nombre?', function(req, res){

	if(req.params.nombre){
		var nombre = req.params.nombre;
	}else{
		var nombre = "SIN NOMBRE";
	}

	

	res.status(200).send({
			data:[2,3,4],
			texto: "Hola Mundo con NodeJS y Express "+nombre
			});
});

app.listen(3678, function(){
	console.log(`El servidor está funcionando en http://localhost:${port} (API REST FAVORITOS)`);
	console.log("PRUEBA DE NODEMON");
});