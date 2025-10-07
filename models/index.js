const User = require("./user");
const Booking = require("./Booking");
const Bus = require("./bus");

User.hasMany(Booking);
Booking.belongsTo(User);

Bus.hasMany(Booking);
Booking.belongsTo(Bus);

module.exports = {
  User,
  Booking,
  Bus,
};
