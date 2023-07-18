// Modules
const cookieParser = require('cookie-parser');
const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const path = require('path');

// Routes
const bibleRouter = require('./routes/bible');
// const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

// App
const app = express();
const port = process.env.PORT || 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('caseSensitive', true);

// Express setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Routes usage
// app.use('/', indexRouter);
app.use('/api', bibleRouter);
app.use('/', usersRouter);

app.get('/health', (req, res) => {
  res.status(200).send("Healthy: OK");
})

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

app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});

module.exports = app;
