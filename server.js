const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3000

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// make sure to change "budget" below to be the right database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

//just build routes inside of here for now
// respond with "hello world" when a GET request is made to the homepage
app.get('/exercise', function (req, res) {
    res.sendFile(path.join(__dirname,'./public/exercise.html'))
  });

  app.get('/stats', function (req, res) {
    res.sendFile(path.join(__dirname,'./public/stats.html'))
  });