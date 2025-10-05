const db = require("../utils/databaseUtil");

exports.addUser = (req, res, next) => {
  const { name, email } = req.body;

  db.execute(
    "INSERT INTO Users(name, email) VALUES(?, ?)",
    [name, email],
    (err) => {
      if (err) {
        return res.status(500).send("User registration failed");
      }
      res.status(201).send(`User registered successfully with name ${name}`);
    }
  );
};

exports.getAllUsers = (req, res, next) => {
  db.execute("SELECT * FROM Users;", (err) => {
    if (err) {
      return res.status(500).send("Fetching users failed");
    }
    res.status(200).send("Users fetched successfully");
  });
};
