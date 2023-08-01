const express = require('express');
const bodyParser = require('body-parser');

// Firebase features
let firebase = null;
let firebaseApp = null;
let db = null;

function notesFirebaseInit(firebaseIn, firebaseAppIn, dbIn) {
    firebase = firebaseIn;
    firebaseApp = firebaseAppIn;
    db = dbIn;

    if (!firebase || !firebaseApp || !db) {
        throw new Error("Invalid initialization");
    }
}

const app = express();
app.use(bodyParser.json());

// POST endpoint to store notes
// Endpoint for submitting a new note
app.post('/notes', (req, res) => {
    const user_in = req.header('user'); // JWT to identify the user
    const { book, chapter, verse, note, tags, shared } = req.body;

    if (!book || !chapter || !note) {
        return res.status(400).json({ error: "book, chapter, and note are required fields." });
    }
    else if (!user_in) {
        res.status(400).json({ error: "No user token was sent"} );
    }
    else {
        // Get the current timestamp
        const timestamp = new Date().toISOString();

        // Create a new note object
        const newNote = {
            book: book,                         // Book reference
            chapter: chapter,                   // Chapter reference
            verse: verse,                       // Verse reference
            note: note,                         // Note text (data)
            shared: shared ? shared : false,    // For later sharing
            tags: tags || [],                   // If no tags provided, default to an empty array
            timestamp: timestamp,               // Timestamp for feed and age purposes
        };

        firebaseApp.auth().verifyIdToken(user_in)
            .then((token) => {
                const uid = token.uid;                      // User id for DB references
                const notes_ref = db.ref(`notes/${uid}`);   // User's notes reference

                // Save the note to the Firebase database
                notes_ref.child(`${book}_${chapter}_${verse}`).set(newNote)
                    .then(() => {
                        return res.status(201).json({ message: "Note saved successfully." });
                    })
                    .catch((error) => {
                        console.log(error);
                        return res.status(500).json({ error: "Failed to save the note." });
                    });
            });
    }
});

app.get('/notes', (req, res) => {
    const user_in = req.header('user'); // JWT to identify the user
    const { book, chapter, verse, tag } = req.query;
 
    if (!user_in) {
        res.status(400).json({ error: "No user token was sent"} );
    }
    else {
        firebaseApp.auth().verifyIdToken(user_in)
            .then((token) => {
                const uid = token.uid;                      // User id for DB references

                if (book && chapter && verse) {
                    const notes_ref = db.ref(`notes/${uid}/${book}_${chapter}_${verse}`);   // User's notes reference
                    notes_ref.once('value')
                        .then((data) => {
                            res.status(200).json(data.toJSON());
                        }).catch((error) => {
                            console.log(error);
                            res.status(500).json({error: "Error retrieving note"});
                    })
                } else if (tag) {
                    const notes_ref = db.ref(`notes/${uid}`);   // User's notes reference
                    notes_ref.once('value')
                        .then((data) => {
                            data = data.toJSON();

                            let note_matches = [];

                            for (let note in data) {
                                for (let data_tag in data[note]['tags']) {
                                    if (tag === data[note]['tags'][data_tag]) {
                                        note_matches.push(data[note]);
                                        break;
                                    }
                                }
                            }

                            res.status(200).send(note_matches);
                        }).catch((error) => {
                            console.log(error);
                            res.status(500).json({error: "Error retrieving note"});
                    })
                }
                else {
                    const notes_ref = db.ref(`notes/${uid}`);   // User's notes reference
                    notes_ref.once('value')
                        .then((data) => {
                            res.status(200).json(data.toJSON());
                        }).catch((error) => {
                            console.log(error);
                            res.status(500).json({error: "Error retrieving note"});
                    })
                }
            });
    }
});

module.exports = { notesRouter: app, notesFirebaseInit };
