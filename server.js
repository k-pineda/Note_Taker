const express = require('express');
const path = require('path');
const notes=require(`./Develop/db/db.json`)

const PORT = 3001;

const app = express();

//middleaware
app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET request for notes
app.get('/api/notes', (req, res) => {
  // Inform the client
  res.json(`${req.method} request received to get notes`);

  // Log our request to the terminal
  console.info(`${req.method} request received to get notes`);
});

// POST request for notes
app.post('/api/notes', (req, res) => {
  // Inform the client that their POST request was received
  res.json(`${req.method} request received to add a note`);

  // Log our request to the terminal
  console.info(`${req.method} request received to add a note`);
});

// DELETE request for upvotes
app.delete('/api/notes', (req, res) => {
  // Inform the client
  res.json(`${req.method} request received to delete note`);

  // Log our request to the terminal
  console.info(`${req.method} request received to delete note`);
});


app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
