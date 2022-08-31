const express = require("express");
const mongoose = require("mongoose");
const college = require("./routes/College");

const app = express();
app.use(express.json());

// connect to mongodb
mongoose
  .connect("mongodb://localhost:27017/College")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err.message));

app.use("/api/college", college);
app.use("/", (req, res) => {
  res.status(200).send("Server is Live...");
});

app.listen("5000", () => {
  console.log("Server is running...");
});
