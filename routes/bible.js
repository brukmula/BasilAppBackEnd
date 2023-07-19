const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression')
const express = require('express');
const helmet = require('helmet');

// Bible(s)
const NET = require("../bibles/net");
const net_bible_obj = new NET();
// const morgan = require('morgan');

// Used for API routes
const app = express.Router();

// adding Helmet the APIs security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// Use compression to ease network burden (~37% in my testing with little overhead)
app.use(compression());

// TODO: Use later // adding morgan to log HTTP requests
// app.use(morgan('combined'));

// Bible endpoint. Used for passage retrieval. Example request:
// http://127.0.0.1:3000/api/bible/?book=John&chapter=3&version=NET
app.get('/bible', (req, res) => {
  console.log(req.query);
  let book = req.query['book'];
  console.log(book);
  let chapter = req.query['chapter'];
  console.log(chapter);

  if (!book && !chapter) {
      res.status(400).send("Invalid query");
  }

  net_bible_obj.get_passage(book, chapter)
      .then((data) => {
        res.status(200).send(data)
      }).catch((error) => {
        res.status(400).send(error);
  });
});

// Get information on valid passages for each version
app.get('/version-info', (req, res) => {
    const version = req.query['version']
    if (version === 'NET') {
        res.status(200).send(net_bible_obj.valid_passages());
    } else {
        res.status(400).send("No version information available");
    }
});

module.exports = app;
