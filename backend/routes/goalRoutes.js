const express = require("express");
const router = express.Router();

const {
  getGoals,
  setGoals,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

router.get("/", getGoals);
router.post("/", setGoals);
router.put("/:id", updateGoal);
router.delete("/:id", deleteGoal);

// Line 11 and 12 can be written together as
// router.route("/").get(getGoals).post(setGoals);
// Line 13 and 14 can be written together as
// router.route("/:id").put(updateGoal).delete(deleteGoal);

module.exports = router;
