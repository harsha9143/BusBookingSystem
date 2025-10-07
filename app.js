const express = require("express");
const db = require("./utils/databaseUtil");

//routes
const userRouter = require("./routes/userRouter");
const busRouter = require("./routes/busRouter");

//models
//const Bus = require("./models/bus");
// const User = require("./models/user");
// const Booking = require("./models/Booking");
const Payment = require("./models/Payment");
const { User, Booking, Bus } = require("./models/index");
const bookingRouter = require("./routes/bookingRouter");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log("Middleware 1");
  next();
});

app.use("/users", userRouter);
app.use("/buses", busRouter);
app.use("/bookings", bookingRouter);

const PORT = 4000;

db.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `connection eshtablished successfully http://localhost:${PORT}`
      );
    });
  })
  .catch((err) => {
    console.log("failed to start server");
  });
