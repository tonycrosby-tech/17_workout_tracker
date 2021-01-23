const router = require("express").Router();
const mongoose = require("mongoose");
const Workout = require("../models/schema.js");

router.post("/api/workouts", ({ body }, res) => {
  if (!body || !body.day) {
    body.day = new Date();
  }
  if (!body || !body.exercises) {
    body.exercises = [];
  }

  Workout.create(body)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  console.log(req);
  Workout.updateOne({ _id: mongoose.Types.ObjectId(req.params.id)}, {$push: {exercises: req.body}})
    .then(data => { 
      console.log(data);
      
      res.json(data);
    })
    .catch(err => { res.status(400).error(err) });
})

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  // console.log(req);
  // let oneWeek = new Date();
  // oneWeek.setDate(new Date().getDate() - 7);
  // oneWeek.setHours(0,0,0);

  // console.log(oneWeek, new Date());

  let dayOfWeek = new Date().getDay();     //  For offset since Sunday...
  let lastSunday = new Date()
  lastSunday.setDate(new Date().getDate() - dayOfWeek);
  lastSunday.setHours(0, 0, 0);

  // console.log(lastSunday);

  Workout.find({ "day": { $gte: lastSunday }})
    .then(data => { 
      // console.log(data);
      res.json(data) 
    })
    .catch(err => { res.status(400).json(err) });
});

router.get("/api/workouts/:id", (req, res) => {
  Workout.find({ _id: mongoose.Types.ObjectId(req.params.id)})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


module.exports = router;