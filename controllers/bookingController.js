const { User, Booking, Bus } = require("../models/index");

exports.addBookingForUser = async (req, res, next) => {
  const { userId, seatNumber, busId } = req.body;

  try {
    const booking = await Booking.create({
      seatNumber,
      userId,
      busId,
    });

    res.status(201).json(booking);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Booking failed");
  }
};
