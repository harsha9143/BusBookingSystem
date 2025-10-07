const express = require("express");

const userController = require("../controllers/userController");

const userRouter = express.Router();

userRouter.post("/", userController.addUser);
userRouter.get("/", userController.getAllUsers);
userRouter.get("/:id/bookings", userController.getUserBookings);

module.exports = userRouter;
