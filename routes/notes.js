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
    const { book, verse, code, tags } = req.body;

    if (!book || !verse || !code) {
        return res.status(400).json({ error: "Book, verse, and code are required fields." });
    }

    // Get the current timestamp
    const timestamp = new Date().toISOString();

    // Create a new note object
    const newNote = {
        book: book,
        verse: verse,
        code: code,
        tags: tags || [], // If no tags provided, default to an empty array
        timestamp: timestamp,
    };

    // Save the note to the Firebase database
    db.collection('notes').add(newNote)
        .then(() => {
            return res.status(201).json({ message: "Note saved successfully." });
        })
        .catch((error) => {
            return res.status(500).json({ error: "Failed to save the note." });
        });
});

module.exports = { notesRouter: app, notesFirebaseInit };
