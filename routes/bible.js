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
// http://127.0.0.1:3000/api/bible/?book=John&chapter=3
app.get('/bible', (req, res) => {
  console.log(req.query);
  let book = req.query.book;
  console.log(book);
  let chapter = req.query.chapter;
  console.log(chapter);
  net_bible_obj.get_passage(book, chapter).then( (data) => res.send(data) );
});

module.exports = app;
