const express = require('express');
//const cors = require('cors');
const bodyParser = require('body-parser');
//require('dotenv').config();



const app = express();
const port = process.env.APP_PORT || 3000;

//app.use(cors());

// Import routes here==================================================
const bookRoutes = require("./routes/routes");

//app.use(express.json())
//app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/books', bookRoutes)
app.use(bodyParser.urlencoded({ extended: false }))
//let books = require("./models/data.js")




// Use your route here================================================
//app.use("/api/v1/example", exampleRoute);


//app.post('/models/data.js', (req, res) => {
//
//const books = req.body;

// output debug
//console.log(books);
//books.push(books);
//res.send('buku di tambahkan');
//});
/*
app.get('/books', (req, res) => {
  //console.log('test');
  res.json(books);
  
});
*/


app.get('/', (req, res) => {
  res.json('MainPage');
  //console.log('test');
});
//===========================================================================
app.listen(
  port,
  () => {
    console.log("Running on port " + port)
  }
);
//============================================================================