const express = require("express");

const busController = require("../controllers/busController");

const busRouter = express.Router();

busRouter.post("/", busController.addBus);
busRouter.get("/available/:seats", busController.getRequiredBuses);
busRouter.get("/:id/bookings", busController.getBusBookings);

module.exports = busRouter;
