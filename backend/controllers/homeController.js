const asyncHandler = require("express-async-handler");

// @desc     Get homepage
// @route    GET /api/goals
// @accsess  Private
const getHome = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get homepage" });
});

module.exports = {
  getHome,
};
