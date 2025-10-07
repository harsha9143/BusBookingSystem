const db = require("../utils/databaseUtil");
const { User, Booking, Bus } = require("../models/index");

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

exports.getUserBookings = async (req, res, next) => {
  const userId = req.params.id;

  try {
    const booking = await Booking.findAll({
      where: {
        id: userId,
      },
      attributes: ["id", "seatNumber"],
      include: [
        {
          model: Bus,
          attributes: ["busNumber"],
        },
      ],
    });

    res.status(200).json(booking);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Failed to fetch booking of user with id", userId);
  }
};
