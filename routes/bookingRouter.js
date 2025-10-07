const express = require("express");

const bookingController = require("../controllers/bookingController");

const bookingRouter = express.Router();

bookingRouter.post("/addbooking", bookingController.addBookingForUser);

module.exports = bookingRouter;
