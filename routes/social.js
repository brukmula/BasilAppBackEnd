const express = require('express');
const bodyParser = require('body-parser');

// Firebase things
let firebase = null;
let firebaseApp = null;
let db = null;

function socialFirebaseInit(firebaseIn, firebaseAppIn, dbIn) {
    firebase = firebaseIn;
    firebaseApp = firebaseAppIn;
    db = dbIn;
}

// Express setup
const app = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));     // Parse requests

app.post('/add-friend', (req, res) => {
    const user_in = req.header('user');
    const user_to_follow = req.header('to-follow');

    if (!user_to_follow) {
        res.status(400).send("No user to follow");
    }
    else if (!user_in) {
        res.status(400).send("No user token was sent");
    }
    else {
        firebaseApp.auth().verifyIdToken(user_in)
            .then((token) => {
                const uid = token.uid;
                const friends_ref = db.ref(`friends/${uid}`);
                firebaseApp.auth().getUser(user_to_follow)
                    .then((user) => {
                        let data = {};
                        data['uid'] = user.uid;

                        let already_followed = false;
                        friends_ref.once('value')
                            .then(firebase_data => {
                                if (firebase_data) {
                                    firebase_data = firebase_data.toJSON();
                                    for (const fb_user in firebase_data) {
                                        if (firebase_data[fb_user]['uid'] === data['uid']) {
                                            already_followed = true;
                                        }
                                    }
                                }
                                if (!already_followed) {
                                    friends_ref.push(data)
                                        .then(() => {
                                            res.status(201).send(`Successfully followed user ${user.uid}, ${user.displayName}`);
                                        }).catch((error) => {
                                        console.log(error);
                                        res.status(500).send("Error following user");
                                    });
                                }
                                else {
                                    res.status(409).send("User already followed");
                                }
                            }).catch((error) => {
                                console.log(error);
                            });
                    }).catch((error) => {
                        console.log(error);
                        res.status(500).send("Error finding user");
                });
            }).catch((error) => {
                console.log(error);
                res.status(500).send("Invalid token");
        });
    }
});

app.post('/remove-friend', (req, res) => {
    const user_in = req.header('user');
    const user_to_unfollow = req.header('to-unfollow');

    if (!user_to_unfollow) {
        res.status(400).send("No user to unfollow");
    }
    else if (!user_in) {
        res.status(400).send("No user token was sent");
    }
    else {
        firebaseApp.auth().verifyIdToken(user_in)
            .then((token) => {
                const uid = token.uid;
                const friends_ref = db.ref(`friends/${uid}`);

                friends_ref.once('value')
                    .then((firebase_data) => {
                        let follow_key = null;
                        if (firebase_data) {
                            firebase_data = firebase_data.toJSON();
                            for (const followed_user in firebase_data) {
                                if (firebase_data[followed_user]['uid'] === user_to_unfollow) {
                                    follow_key = followed_user;
                                }
                            }
                            if (follow_key) {
                                db.ref(`friends/${uid}/${follow_key}`).remove()
                                    .then((message) => {
                                        console.log(message);
                                        res.status(200).send(`Successfully unfollowed user ${user_to_unfollow}`);
                                    })
                                    .catch((error) => {
                                        console.log(error);
                                        res.status(500).send("Error removing user.")
                                    });
                            }
                            else {
                                res.status(404).send(`Could not find user to unfollow (${user_to_unfollow})`);
                            }
                        }
                        else {
                            res.status(404).send("Friends list is, sadly, empty");
                        }
                    });
            })
            .catch((error) => {
                console.log(error);
                res.status(500).send("Invalid token");
            });
    }
});

module.exports = { socialRouter: app, socialFirebaseInit };
