var express = require('express'),
    app = express(),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    config = require('./config/config.js'),
    connectMongo = require('connect-mongo')(session),
    //mongoose = require('mongoose').connect(config.dbUrl),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strtegy,
    knox = require('knox'),
    bodyParser = require('body-parser');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
//GET ENVIRONMENT
var env = process.env.NODE_ENV || 'development';
if(env === 'development'){
  app.use(session({secret: config.sessionSecret}));
}else{
  app.use(session({
    secret: config.sessionSecret,
    store: new connectMongo({
      url: config.dbUrl,
      stringify: true
    })
  }))
}

var server = require('http').createServer(app);

require('./routes/routes.js')(express, app, config);

// app.use(function (req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });

app.set('port', process.env.PORT || '3002');

server.listen(app.get('port'), function(){
  console.log("WpStore working on PORT: "+app.get('port'));
  console.log("Mode: "+env);
});
