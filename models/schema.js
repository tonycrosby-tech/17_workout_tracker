var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var workoutSchema = new Schema({
  day: { type: Date, default: Date.now() },
  exercises: [
    {
      type: { type: String, required: true },
      name: {
        type: String,
        required: "You must enter the name of the exercise",
      },
      duration: {
        type: Number,
        required: "You must enter the duration of the exercise",
      },
      weight: { type: Number },
      reps: { type: Number },
      sets: { type: Number },
      distance: { type: Number },
    },
  ],
});

var Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
