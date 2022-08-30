const express = require("express");

const app = express();
app.use(express.json());
app.use("/", (req, res) => {
  res.send("Server is Live...");
});

app.listen("5000", () => {
  console.log("Server is running...");
});
