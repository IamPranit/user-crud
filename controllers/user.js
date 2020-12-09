const User = require("../models/User");

// @desc Get User
// @route http://localhost:8000/api/v1/users
// @access Public
exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (err) {
    console.log(err);
  }
};

// @desc Get User
// @route http://localhost:8000/api/v1/users/:id
// @access Public
exports.getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (err) {
    console.log(err);
  }
};

// @desc Create User
// @route http://localhost:8000/api/v1/users
// @access Public
exports.createUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);

    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (err) {
    console.log(err);
  }
};

// @desc Update User
// @route http://localhost:8000/api/v1/users/:id
// @access Public
exports.updateUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true,
    });

    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (err) {
    console.log(err);
  }
};

// @desc Delete User
// @route http://localhost:8000/api/v1/users/:id
// @access Public
exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    res.status(201).json({
      success: true,
      data: {},
    });
  } catch (err) {
    console.log(err);
  }
};
