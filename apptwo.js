const express = require('express')
const app = express()
app.use(express.json())
var PORT = process.env.PORT || 3000

// GET method route
app.get('/', function (req, res) {
    res.send('GET request to the homepage');
  });

// POST method route
app.post('/', function (req, res) {
    console.log('Viene inviata la seguente stringa: Il mio nome è ', req.body.nome);
  res.send('Ciao io mi chiamo ' + req.body.nome + ";");
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
