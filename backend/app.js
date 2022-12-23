const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const compression = require('compression');
const cors = require ('cors');
const dotenv = require ('dotenv');
dotenv.config(); // Allow all routes to get access to the environment variables

const {dbConnection} = require ('./database/config');
dbConnection();

const houses = require('./routes/houses');

const app = express();


app.use(cors()); //Enabled cors
app.use(compression()); //Enabled Compression
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/*Rutas de la aplicacion*/
app.use('/api/houses', houses);


app.use(function(req, res, next) {
  console.error("Ruta no encontrada")
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  console.error(err);
});

module.exports = app;
