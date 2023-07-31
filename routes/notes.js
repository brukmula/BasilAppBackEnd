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

    if (!book || !verse || !note) {
        return res.status(400).json({ error: "Book, verse, and note are required fields." });
    }
    else if (!user_in) {
        res.status(400).json({ error: "No user token was sent"} );
    }
    else {
        // Get the current timestamp
        const timestamp = new Date().toISOString();

        // Create a new note object
        const newNote = {
            book: book,
            chapter: chapter,
            verse: verse,
            note: note,
            shared: shared ? shared : false,    // For later sharing
            tags: tags || [], // If no tags provided, default to an empty array
            timestamp: timestamp,
        };

        firebaseApp.auth().verifyIdToken(user_in)
            .then((token) => {
                const uid = token.uid;
                const notes_ref = db.ref(`notes/${uid}`);

                const note = {};
                note[`${book}_${chapter}_${verse}`] = newNote;

                // Save the note to the Firebase database
                notes_ref.set(note)
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

module.exports = { notesRouter: app, notesFirebaseInit };
