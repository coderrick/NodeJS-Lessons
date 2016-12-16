/**
 *  ExpressJS Tutorial 19: POST Method (body-parser)
 */
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
require("nodejs-dashboard");

var index = require('./routes/index');
var users = require('./routes/users');
var post_example = require('./routes/post_example');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/post_example', post_example);

app.get( '/', function( req, res){
  res.render('/', {qs: req.query})
})

// app.post('/', urlencodedParser, function( req, res){
//   console.log(req.body); 
//   console.log('RES########   ' + res.body);
//   //res.send(req.body);
//   //res.render('index', {qs: req.query}, {title:'POST PAGE'})
// });
app.post('/', urlencodedParser, function(req, res, next) {
  console.log(req.body);
  //res.render('post_example', { title: 'EX' });
  console.log('RES =   ' + res.body);
  res.send(JSON.stringify(req.body));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

