const router = require("express").Router();
const College = require("../models/College");

router.get("/", async (req, res) => {
  try {
    let college = await College.find();
    console.log("college");
    res.status(200).send(college);
  } catch (err) {
    return res.status(500).send(err);
  }
});

module.exports = router;
