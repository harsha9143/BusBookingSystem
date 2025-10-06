const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/databaseUtil");

const Booking = sequelize.define("bookings", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  seatNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Booking;
