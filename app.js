// Modules
const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const express = require('express');
const logger = require('morgan');
const path = require('path');

// Routes
const bibleRouter = require('./routes/bible');
// const indexRouter = require('./routes/index');
const { usersRouter, usersFirebaseInit } = require('./routes/users');
const { socialRouter, socialFirebaseInit } = require('./routes/social');
const { notesRouter, notesFirebaseInit } = require('./routes/notes')

// Firebase imports
const firebase = require('firebase');
const admin = require("firebase-admin");
const { applicationDefault } = require("firebase-admin/app");
const { firebaseConfig } = require('./routes/firebaseConf');

// Firebase setup
const firebaseApp = admin.initializeApp({
  credential: applicationDefault(),
  databaseURL: 'https://basil-backend-47d01-default-rtdb.firebaseio.com/'
});
const db = admin.database();
firebase.initializeApp(firebaseConfig);
usersFirebaseInit(firebase, firebaseApp, db);
socialFirebaseInit(firebase, firebaseApp, db);
notesFirebaseInit(firebase, firebaseApp, db);

// App
const app = express();
const port = process.env.PORT || 3000;
app.use(helmet());  // For security policy
app.use(cors());    // For Cross-Origin Resource Sharing
app.use(compression());     // For bandwidth saving on the more intensive actions

// view engine setup
/*
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('caseSensitive', true);
 */

// Express setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Routes usage
app.use('/api', bibleRouter);
app.use('/', usersRouter, socialRouter, notesRouter);

app.get('/health', (req, res) => {
  res.status(200).send("Healthy: OK");
})

app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});

module.exports = app;
