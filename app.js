//Niv Ozer, id: 208993329
//Omri Shema, id: 313380479
//requirements
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
//Routers
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var aboutRouter = require('./routes/about');
var addcaloriesRouter = require('./routes/addcalories');
var reportRouter = require('./routes/report');

//App Initialization
var app = express();
// sets up the view engine for rendering views 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://nivoz:OITKyKPcqYlcdcqk@cluster0.enr1wwi.mongodb.net/");

//Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Models
app.use('/', indexRouter);
app.use('/users', usersRouter);
//Routes
app.use('/', aboutRouter);
app.use('/', addcaloriesRouter);
app.use('/', reportRouter);


//Error Handling
// 404 Specifically
app.use(function(req, res, next) {
  next(createError(404));
});
app.use(function(err, req, res, next) {
  //provides error in dev only
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  //Error page rendering
  res.render('error');
});

module.exports = app;
