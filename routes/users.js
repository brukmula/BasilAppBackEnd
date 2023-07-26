const cors = require('cors');
const compression = require('compression')
const express = require('express');
const bodyParser = require('body-parser');
const firebase = require('firebase');
const admin = require("firebase-admin");
const helmet = require('helmet');
const { applicationDefault } = require("firebase-admin/app");

// Firebase setup
const firebaseApp = admin.initializeApp({
    credential: applicationDefault(),
    databaseURL: 'https://basil-backend-47d01-default-rtdb.firebaseio.com/'
});
const db = admin.database();
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

// Express setup
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));     // Parse requests
app.use(helmet());  // For security policy
app.use(cors());    // For Cross-Origin Resource Sharing
app.use(compression());     // For bandwidth saving on the more intensive actions

// Security policy for user logins
app.use(
    helmet.contentSecurityPolicy({
      directives: {
        ...helmet.contentSecurityPolicy.getDefaultDirectives(),
        "script-src": ["'unsafe-inline'", "https://www.gstatic.com"],
      },
    })
);

// get user data for auth
app.post('/signup', (req, res) => {
    const email = req.header('email');
    const password = req.header('password');

    // TODO: Add more email filtering (regex/firebase) and more informative response
    if (email.length < 8 || password.length < 8) {
        res.status(400).send("Invalid email or password length")
    }

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
          // User created successfully
          const user = userCredential.user;
          console.log(`Successfully signed up ${user.email}`);
          user.getIdToken(/* forceRefresh */ true)
              .then((token) => {
                  res.status(201).send(token);
              }).catch((error) => {
                res.status(500).send(error);
              })
      })
      .catch((error) => {
        // Error creating user
        res.status(400).send(`Error creating user: ${error.message}`);
      });
});

// get user data to create an account
app.post('/signin', (req, res) => {
    const email = req.header('email');
    const password = req.header('password');

    // TODO: Add more email filtering (regex/firebase) and more informative response
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // User signed in successfully
            const user = userCredential.user;
            console.log(`Successfully signed in ${user.email}`);
            user.getIdToken(/* forceRefresh */ true)
                .then((token) => {
                    res.status(200).send(token);
                }).catch((error) => {
                    res.status(500).send(error);
                });
        })
        .catch((error) => {
            // Error signing in user
            const errorCode = error.code;
            const errorMessage = error.message;
            res.status(500).send(error);    // TODO: parse different errors later
            console.log(errorCode, errorMessage);
        });

});

app.post('/update-profile', (req, res) => {
    // Firebase user credentials
    const user_in = req.header('user');
    const userName = req.header('displayName')
    const profilePicture = req.header('photoURL')

    // No valid data sent, so immediately throw an error
    if (!userName && ! profilePicture && !user_in) {
        res.status(400).send("No valid data was sent")
    }
    // If there is a token, proceed
    if (user_in) {
        let newData = {}    // JS Object for the new data
        // Assign new data as given
        if (userName) {
            newData['displayName'] = userName;
        }
        if (profilePicture) {
            newData['photoURL'] = profilePicture;
        }
        // Verify the token
        firebaseApp.auth().verifyIdToken(user_in)
            .then((token) => {
                // Update the user data
                const uid = token.uid;
                return firebaseApp.auth().updateUser(uid, newData);
            })
            .then((record) => {
                // Log (for now) the updated record in the console and return success
                console.log(record.toJSON());
                res.status(200).send("Success");
            })
            .catch((error) => {
                // Invalid token sent. Perhaps it is invalid or a bad token.
                console.log(error);
                res.status(403).send("Invalid token");
        });
    } else {
        // No token was sent in the request.
        res.status(401).send("No user token was sent");
    }
});

app.get('/streak', (req, res) => {
    // Firebase user credential
    const user_in = req.header('user');

    // Make sure the user credentials were passed
    if (user_in) {
        firebaseApp.auth().verifyIdToken(user_in)
            .then((token) => {
                const uid = token.uid;
                const streak_ref = db.ref(`streaks/${uid}`)
                streak_ref.once('value')
                    .then((data) => {
                        res.status(200).send(data);
                    }).catch((error) => {
                        console.log(error);
                        res.status(500).send("No streak data to retrieve");
                });
            }).catch((error) => {
            console.log(error);
            res.status(400).send("Invalid token");
        });
    } else {
        res.status(400).send("No user token was sent");
    }
});

app.post('/streak', (req, res) => {
    // Firebase user credential
    const user_in = req.header('user');
    const streak_data = req.header('streak-data') ? JSON.parse(req.header('streak-data')) : null;

    if (!streak_data) {
        res.status(400).send("No streak data sent");
    }

    // Make sure the user credentials were passed
    if (user_in) {
        firebaseApp.auth().verifyIdToken(user_in)
            .then((token) => {
                const uid = token.uid;
                const streak_ref = db.ref(`streaks/${uid}`)
                streak_ref.set(streak_data)
                    .then((message) => {
                        console.log(message);
                        res.status(201).send("Success");
                    }).catch((error) => {
                    console.log(error);
                    res.status(500).send("Error saving data");
                });
            }).catch((error) => {
                console.log(error);
                res.status(400).send("Invalid token");
        });
    } else {
        res.status(400).send("No user token was sent");
    }
});

app.get('/roots', (req, res) => {
    // Firebase user credential
    const user_in = req.header('user');

    // Make sure the user credentials were passed
    if (user_in) {
        firebaseApp.auth().verifyIdToken(user_in)
            .then((token) => {
                const uid = token.uid;
                const streak_ref = db.ref(`roots/${uid}`)
                streak_ref.once('value')
                    .then((data) => {
                        res.status(200).send(data);
                    }).catch((error) => {
                    console.log(error);
                    res.status(500).send("No roots data to retrieve");
                });
            }).catch((error) => {
            console.log(error);
            res.status(400).send("Invalid token");
        });
    } else {
        res.status(400).send("No user token was sent");
    }
});

app.post('/roots', (req, res) => {
    // Firebase user credential
    const user_in = req.header('user');
    const streak_data = req.header('roots-data') ? JSON.parse(req.header('roots-data')) : null;
    const roots_data = {};

    if (!streak_data) {
        res.status(400).send("No roots streak data sent");
    }
    else if (!'startDate' in streak_data || !'lastIncrement' in streak_data || !'days' in streak_data ||
        isNaN(streak_data['days']) || isNaN(parseInt(streak_data['days'])) || streak_data['days'] > 7) {
        res.status(400).send("Invalid roots streak data sent");
    }

    // Make sure the user credentials were passed
    else if (user_in) {
        roots_data['startDate'] = streak_data['startDate'];
        roots_data['lastIncrement'] = streak_data['lastIncrement'];
        roots_data['days'] = streak_data['days'];

        firebaseApp.auth().verifyIdToken(user_in)
            .then((token) => {
                const uid = token.uid;
                const roots_ref = db.ref(`roots/${uid}`)
                roots_ref.set(roots_data)
                    .then((message) => {
                        console.log(message);
                        res.status(201).send("Success");
                    }).catch((error) => {
                        console.log(error);
                        res.status(500).send("Error saving data");
                });
            }).catch((error) => {
            console.log(error);
            res.status(400).send("Invalid token");
        });
    } else {
        res.status(400).send("No user token was sent");
    }
});

app.get('/profile', (req, res) => {
    const user_in = req.header('user');

    if (user_in.length < 35) {
        firebaseApp.auth().getUser(user_in)
            .then((user) => {
                let data = {};
                data['displayName'] = user.displayName;
                data['uid'] = user.uid;
                data['photoURL'] = user.photoURL;
                res.status(200).send(data);
            }).catch((error) => {
                console.log(error);
                res.status(500).send("Error finding UID");
        });
    }
    else if (user_in) {
        firebaseApp.auth().verifyIdToken(user_in)
            .then((token) => {
                const uid = token.uid;
                firebaseApp.auth().getUser(uid)
                    .then((user) => {
                        let data = {};
                        data['displayName'] = user.displayName;
                        data['uid'] = user.uid;
                        data['photoURL'] = user.photoURL;
                        res.status(200).send(data);
                    }).catch((error) => {
                        console.log(error);
                        res.status(500).send("Error finding user");
                });
            }).catch((error) => {
                console.log(error);
                res.status(500).send("Invalid token");
        });
    }
    else {
        res.status(400).send("No user information was sent");
    }
});

module.exports = app;
