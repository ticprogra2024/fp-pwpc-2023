// Dependencia de la app
// Permite manejar errores http
var createError = require('http-errors');
// Dependencia principal
// Crear el servidor express
var express = require('express');
// Nucleo de Node
// Maneja rutas rutas del sistema de archivos
var path = require('path');
// Ayuda a manejar las cookies
var cookieParser = require('cookie-parser');
// Permite registar loggear en la consola
// Eventos de la aplicación o server
var logger = require('morgan');
// Definen rutas y rutinas de respuesta
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// Se crea la instancia de express
// el server
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// registramos una y que se hara como respuesta
// los argumentos son ruta middleware

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/author', (req,res)=>{

// respondiendo con un json
res.status(200).json({
  "autor":"Rodrigo"
});
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
