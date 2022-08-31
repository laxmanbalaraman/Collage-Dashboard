const router = require("express").Router();
const College = require("../models/College");

router.get("/", async (req, res) => {
  try {
    const state = req.query.state;
    const course = req.query.course;
    let college;
    if (state) {
      console.log(state);
      college = await College.find({ State: state });
      console.log(college);
      res.status(200).send(college);
    } else if (course) {
      if (course) {
        console.log(course);
        college = await College.find({ Courses: course });
        console.log(college);
        res.status(200).send(college);
      }
    } else {
      college = await College.find();
      res.status(200).send(college);
    }
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.get("/count/state", async (req, res) => {
  try {
    let count = await College.aggregate([
      {
        $group: { _id: "$State", Total: { $sum: 1 } },
      },
    ]);
    res.status(200).send(count);
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.get("/count/course", async (req, res) => {
  try {
    let count = await College.aggregate([
      {
        $group: { _id: "$Courses", Total: { $sum: 1 } },
      },
    ]);
    res.status(200).send(count);
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.get("/:id/student/:cid", async (req, res) => {
  try {
    const college = await College.find({
      Id: req.params.id,
    });
    return res.status(200).send(college[0].Students[req.params.cid]);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const college = await College.find({ Id: req.params.id });
    return res.status(200).send(college);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
