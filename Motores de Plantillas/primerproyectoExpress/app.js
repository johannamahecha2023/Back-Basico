var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//importacion de los enrutamientos
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const ejercicioRouter= require('./routes/ejercicio');
const perfilRouter= require('./routes/perfil')


var app = express();

// usar las rutas importadas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


/*utilizamos middlewares que sirven como
intermediarios entre la solicitud y
la respuesta HTTP*/
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
/*usar las rutas importadas*/ 
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/ejercicio', ejercicioRouter)
/*ejercicio 2_ realizar un enrutamiento
que sea /perfil en donde muestren
su informacion, por ejemplo nombre,edad, carrera, gustos y demas */
app.use('/perfil', perfilRouter)

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
