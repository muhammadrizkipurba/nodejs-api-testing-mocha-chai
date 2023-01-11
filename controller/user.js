const User = require("../model/User");

// Create new User
exports.addUser = async (req, res) => {
  try {
    const { name, email, age } = req.body;

    const findUser = await User.findOne({ email });
    if (findUser)
      return res.status(422).json({
        error:
          "User with this email has already exist. Please use another email!",
      });
    if (!name) return res.status(422).json({ error: "Name is required!" });
    if (!email) return res.status(422).json({ error: "Email is required!" });
    if (!age) return res.status(422).json({ error: "Age is required!" });
    if (isNaN(age))
      return res.status(422).json({ error: "Age must be number!" });

    const userInfo = new User({
      name,
      email,
      age,
    });

    const addedUser = await User.create(userInfo);

    return res.status(201).json({
      message: "New user has been added successfully",
      data: addedUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: "Something went wrong!" });
  }
};

// Get all users list
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ created_date: "desc" });

    return res.status(200).json({
      message: "success",
      data: users,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: "Something went wrong!" });
  }
};

// Get single user details
exports.getSingleUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userDetails = await User.findOne({ _id: id });

    return res.status(200).json({
      message: "success",
      data: userDetails,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({ error: "User not found!" });
  }
};

// Update user info
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, age } = req.body;

    const updatedUser = await User.findOneAndUpdate(
      { _id: id },
      { name, email, age },
      {
        new: true,
      }
    );

    return res.status(200).json({
      message: "success",
      data: updatedUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({ error: "User not found!" });
  }
};

// Delete user
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.deleteOne({ _id: id });

    return res.status(200).json({
      message: "success",
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({ error: "User not found!" });
  }
};
