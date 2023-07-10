const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression')
const express = require('express');
const helmet = require('helmet');

const NET = require("../bibles/net");
const net_bible_obj = new NET();
// const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;

async function net_bible_old(book, chapter) {
  try {
    const response = await fetch(`https://labs.bible.org/api/?passage=${book}%20${chapter}&type=json`);
    return await response.json();
  } catch (error) {
    console.log(error);
    return error;
  }
}

// adding Helmet the APIs security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// Use compression to ease network burden
app.use(compression());

// TODO: Use later // adding morgan to log HTTP requests
// app.use(morgan('combined'));

// http://127.0.0.1:3000/api/bible/?book=John&chapter=3
app.get('/api/bible', (req, res) => {
  console.log(req.query);
  let book = req.query.book;
  console.log(book);
  let chapter = req.query.chapter;
  console.log(chapter);
  net_bible_obj.get_passage(book, chapter).then( (data) => res.send(data) );
});

// starting the server
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});

module.exports = app;
