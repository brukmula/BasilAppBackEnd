const cors = require('cors');
const compression = require('compression')
const express = require('express');
const bodyParser = require('body-parser');
const firebase = require('firebase');
const helmet = require('helmet');

const app = express();
const port = process.env.PORT || 3001;

const firebaseConfig = {
  apiKey: "AIzaSyBd0Y7I4YMf4hW7UQm8bu-eJPGeF35oEns",
  authDomain: "basil-backend-47d01.firebaseapp.com",
  projectId: "basil-backend-47d01",
  storageBucket: "basil-backend-47d01.appspot.com",
  messagingSenderId: "300649571476",
  appId: "1:300649571476:web:ba0270dd36fa594b6e8081",
  measurementId: "G-0TWY109F6B"
};
firebase.initializeApp(firebaseConfig);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());
app.use(compression());

app.use(
    helmet.contentSecurityPolicy({
      directives: {
        ...helmet.contentSecurityPolicy.getDefaultDirectives(),
        "script-src": ["'unsafe-inline'", "https://www.gstatic.com"],
      },
    })
);


app.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

app.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Login' });
});

app.post('/signup', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // User created successfully
        res.send('User created successfully!');
      })
      .catch((error) => {
        // Error creating user
        res.send(`Error creating user: ${error.message}`);
      });
});

app.post('/signin', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // User signed in successfully
            const user = userCredential.user;
            res.send(`Successfully signed in ${user.email}`);
        })
        .catch((error) => {
            // Error signing in user
            const errorCode = error.code;
            const errorMessage = error.message;
            res.send(error);
            console.log(errorCode, errorMessage);
        });

});

app.listen(port, () => {
  console.log(`Login server listening on port ${port}`);
});

module.exports = app;
