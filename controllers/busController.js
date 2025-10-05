const db = require("../utils/databaseUtil");

exports.addBus = (req, res, next) => {
  const { busNumber, totalSeats, availableSeats } = req.body;

  db.execute(
    "INSERT INTO Buses(busNumber, totalSeats, availableSeats) VALUES(?, ?, ?)",
    [busNumber, totalSeats, availableSeats],
    (err) => {
      if (err) {
        return res.status(500).send("Adding Bus failed");
      }
      res.status(201).send(`Bus added successfully with number ${busNumber}`);
    }
  );
};

exports.getRequiredBuses = (req, res, next) => {
  db.execute(
    "SELECT * FROM Buses WHERE availableSeats > ?;",
    [req.params.seats - 1],
    (err, buses) => {
      if (err) {
        return res.status(500).send("Fetching buses failed");
      }
      res.status(200).json({ message: "Buses fetched successfully", buses });
    }
  );
};
