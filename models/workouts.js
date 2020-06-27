const mongoose = require("mongoose");

const WorkoutSchema = mongoose.Schema({
    day: {
        type: String,
        trim: true,
        updated: {type:Date, default: Date.now}
    },

    exercises: {
        type: Array,
    },
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;