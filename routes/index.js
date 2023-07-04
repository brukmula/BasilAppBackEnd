const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({ origin: true }));

app.get('/hello-world', (req, res) => {
    return res.status(200).send('Hello World!');
});

module.exports = app;
