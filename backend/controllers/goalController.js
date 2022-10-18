// @desc get all goals
// @route GET api/goals
// @access Private
const getGoals = (req, res) => {
  res.send({
    message: "Get Goals",
  });
};

// @desc set goal
// @route POST api/goals
// @access Private
const setGoals = (req, res) => {
  console.log(req.body);
  res.send({
    message: "Set Goal",
  });
};

// @desc update goal with id
// @route PUT api/goals/:id
// @access Private
const updateGoal = (req, res) => {
  res.send({
    message: `Update Goal for id=${req.params.id}`,
  });
};

// @desc delete goal with id
// @route PUT api/goals/:id
// @access Private
const deleteGoal = (req, res) => {
  res.send({
    message: `Delete Goal for id=${req.params.id}`,
  });
};
module.exports = { getGoals, setGoals, updateGoal, deleteGoal };
