var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let hbs = require('hbs');
let session = require('express-session');
let flash = require('connect-flash');
let cors = require('cors')


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let travelsRouter = require('./routes/travels');
let travelApiRouter = require('./routes/API/travelsRouter')

var app = express();
app.use(flash())

app.use(session({
  name:'session',
  secret: 'secretPass',
  resave: true,
  saveUninitialized: true,
}))

hbs.registerPartials(__dirname + '/views/partials')
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use((req, res, next) => {
  res.locals.user = req.session;
  next();
})

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('./images', express.static('./uploads'));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/travels', travelsRouter)
app.use('/api', travelApiRouter)

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
