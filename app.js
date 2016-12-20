var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nodemailer = require("nodemailer");
var index = require('./routes/index');
var users = require('./routes/users');
var myMail - require('mycntrl.js');

var app = express();
//node mailer
//var smtpTransport = nodemailer.createTransport("SMTP",{
//    service: "Gmail",
//    auth: {
//        user: "",
//        pass: ""
//    }
//});
////Routing
//app.get('/',function(req,res){
//    res.sendfile('index.html');
//});
////app.get('/send',function(req,res){
//    var mailOptions={
//        to : "abhishekjain.cs99@gmail.com",
//        subject : "testing",
//        text : "test mail"
//    }
//    console.log(mailOptions);
//    smtpTransport.sendMail(mailOptions, function(error, response){
//     if(error){
//            console.log(error);
//        res.end("error");
//     }else{
//            console.log("Message sent: " + response.message);
//        res.end("sent");
//         }
//});
//});
//Routing end
// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(__dirname + '/views'));

app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

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
var port     = process.env.PORT || 9000;

app.listen(port);

console.log('The magic happens on port ' + port);
module.exports = app;
