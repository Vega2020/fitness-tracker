const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

//require the models folder - was getting a "db is not defined" error from line 46
const db = require("./models");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// make sure to change "budget" below to be the right database - according to seed.js, the database will be called workout
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

//just build routes inside of here for now

//send exercise.html when the /exercise api route is called
app.get('/exercise', function (req, res) {
    res.sendFile(path.join(__dirname,'./public/exercise.html'))
  });

// send stats.html when the /stats api route is called
app.get('/stats', function (req, res) {
    res.sendFile(path.join(__dirname,'./public/stats.html'))
  });

  // app.get('/api/workouts', function (req, res) {
  //   // Find all data in a Collection with `db.[COLLECTION_NAME].find()`.
  //   const workouts = db.workouts.find();
  //   console.log(workouts);
  //   //this syntax is a total guess
  //   res.send(res.json(workouts));
  // })
  
//write an app.get for "/api/workouts" from api.js
app.get("/api/workouts", (req, res) => {
  db.workouts.find({}, (err, found) => {
    if (err) {
      console.log(err);
    } else {
      res.json(found);
    }
  });
});

app.post('/api/workouts', function (req, res) {
  //take in json.stringify data
  console.log("post /api/workouts req" + req.body);
  console.log("post /api/workouts res" + res.body); 
})

app.put('/api/workouts', function (req, res) {
  console.log('put /api/workouts req: ' + req.body);
  console.log('put /api/workouts res: ' + res.body);
})