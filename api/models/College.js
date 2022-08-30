const mongoose = require("mongoose");

const CollegeSchema = new mongoose.Schema({
  Id: {
    type: Number,
  },
  Name: {
    type: String,
  },
  Year_founded: {
    type: Number,
  },
  City: {
    type: String,
  },
  State: {
    type: String,
  },
  country: {
    type: String,
  },
  No_of_students: {
    type: Number,
  },
  Courses: {
    type: String,
  },
  Students: [
    {
      Id: Number,
      Name: String,
      Year_of_batch: Number,
      College_ID: String,
      Skills: String,
    },
  ],
});

module.exports = mongoose.model("College", CollegeSchema);
