const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("bus_booking_data", "root", "vm4udte@W", {
  host: "localhost",
  dialect: "mysql",
});

async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully");
  } catch (error) {
    console.log("connecting database failed");
  }
};

module.exports = sequelize;
