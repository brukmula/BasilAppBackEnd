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


// http://127.0.0.1:3000/login
app.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

// http://127.0.0.1:3000/signup
app.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Login' });
});

// get user data for auth
app.post('/signup', (req, res) => {
    console.log(req.get('Content-Type'));
    const email = req.header('email');
    const password = req.header('password');

    // TODO: Add more email filtering (regex/firebase) and more informative response
    if (email.length < 8 || password.length < 8) {
        res.send("Invalid email or password length")
    }

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
          // User created successfully
          console.log(userCredential)
          res.status(201).send(userCredential);
      })
      .catch((error) => {
        // Error creating user
        res.status(400).send(`Error creating user: ${error.message}`);
      });
});

// get user data to create an account
app.post('/signin', (req, res) => {
    console.log(req.get('Content-Type')); // Just to see what we are getting
    const email = req.header('email');
    const password = req.header('password');

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // User signed in successfully
            const user = userCredential.user;
            console.log(`Successfully signed in ${user.email}`);
            res.status(200).send(userCredential);
        })
        .catch((error) => {
            // Error signing in user
            const errorCode = error.code;
            const errorMessage = error.message;
            res.status(500).send(error);    // We can parse different errors later
            console.log(errorCode, errorMessage);
        });

});

/*
app.listen(port, () => {
  console.log(`Login server listening on port ${port}`);
}); */

module.exports = app;
