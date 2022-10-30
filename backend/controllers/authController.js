const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// @desc     Register new user
// @route    POST /api/auth
// @accsess  Public
const registerUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  // * Check if user exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // * Hash a password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // * Create user
  const user = await User.create({
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc     Authenticate user
// @route    POST /api/auth/singin
// @accsess  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // * Check for user email
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

// @desc     Get user data
// @route    GET /api/auth/me
// @accsess  Private
const getMe = asyncHandler(async (req, res) => {
  const { _id, email } = await User.findById(req.user.id);
  res.status(200).json({
    id: _id,
    email,
  });
});

// Generate JWT
function generateToken(id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
}

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
