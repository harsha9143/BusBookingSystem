const db = require("../utils/databaseUtil");
const User = require("../models/user");

exports.addUser = (req, res, next) => {
  const { name, email } = req.body;

  try {
    const user = User.create({
      name,
      email,
    });

    if (!user) {
      return res.status(404).send("Error adding User");
    }

    res.status(201).send("User registered successfully");
  } catch (error) {
    res.status(500).send("Adding user failed");
  }
};

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();

    if (!users) {
      return res.status(404).send("Failed to fetch users");
    }

    console.log(users);
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).send("Users not found");
  }
};
