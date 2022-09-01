const express = require("express");
const mongoose = require("mongoose");
const college = require("./routes/college");

const app = express();
app.use(express.json());

// connect to mongodb
const dotenv = require("dotenv");
dotenv.config();

const DB = process.env.DATABASE;
mongoose
  .connect(DB)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err.message));

app.use("/api/college", college);
app.use("/", (req, res) => {
  res.status(200).send("Server is Live...");
});

app.listen(process.env.PORT || "5000", () => {
  console.log("Server is running...");
});
