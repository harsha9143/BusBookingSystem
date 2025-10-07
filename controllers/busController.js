const { Op } = require("sequelize");

const db = require("../utils/databaseUtil");
const { Bus, Booking, User } = require("../models/index");

exports.addBus = async (req, res, next) => {
  const { busNumber, totalSeats, availableSeats } = req.body;
  try {
    const bus = await Bus.create({
      busNumber,
      totalSeats,
      availableSeats,
    });

    if (!bus) {
      return res.status(404).send("Error adding bus");
    }

    res.status(201).send("Bus added successfully");
  } catch (error) {
    res.status(500).send("Adding Bus failed");
  }
};

exports.getRequiredBuses = async (req, res, next) => {
  try {
    const buses = await Bus.findAll({
      where: {
        availableSeats: {
          [Op.gt]: req.params.seats,
        },
      },
    });

    if (!buses) {
      return res.status(404).send("Failed to fetch requires buses");
    }

    console.log(buses);
    res.status(200).json({ data: buses });
  } catch (error) {
    res.status(500).send("Buses not found");
  }
};

exports.getBusBookings = async (req, res, next) => {
  const busId = req.params.id;

  try {
    const booking = await Booking.findAll({
      where: {
        id: busId,
      },
      attributes: ["id", "seatNumber"],
      include: [
        {
          model: User,
          attributes: ["name", "email"],
        },
      ],
    });

    res.status(200).json(booking);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Failed to fetch bookings of bus");
  }
};
