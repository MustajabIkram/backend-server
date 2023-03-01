// Entry Point of the API Server

const express = require('express');

/* Creates an Express application.
The express() function is a top-level
function exported by the express module.
*/
const app = express();

/* To handle the HTTP Methods Body Parser
is used, Generally used to extract the
entire body portion of an incoming
request stream and exposes it on req.body
*/
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/testdata', (req, res, next) => {
  res.send('This is Working');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, function () {
  console.log('App running on port 8080');
});
