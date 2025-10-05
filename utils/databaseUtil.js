const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "vm4udte@W",
  database: "busbookingdb",
});

connection.connect((err) => {
  if (err) {
    console.log("connection failed");
    return;
  }
  console.log("database connected");

  let usersQuery =
    "CREATE TABLE Users (id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, name VARCHAR(100) NOT NULL, email VARCHAR(100) NOT NULL);";

  connection.execute(usersQuery, (error) => {
    if (error) {
      console.log("users table not created");
      return;
    }
    console.log("users table created");
  });

  let busesQuery =
    "CREATE TABLE Buses (id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, busNumber VARCHAR(100) NOT NULL, totalSeats INT NOT NULL, availableSeats VARCHAR(100) NOT NULL);";

  connection.execute(busesQuery, (error) => {
    if (error) {
      console.log("buses table not created");
      return;
    }
    console.log("buses table created");
  });

  let bookingsQuery =
    "CREATE TABLE Bookings (id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, seatNumber INT NOT NULL);";

  connection.execute(bookingsQuery, (error) => {
    if (error) {
      console.log("bookings table not created");
      return;
    }
    console.log("bokings table created");
  });

  let paymentsQuery =
    "CREATE TABLE Payments (id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, amountPaid INT NOT NULL, paymentStatus BOOLEAN NOT NULL);";

  connection.execute(paymentsQuery, (error) => {
    if (error) {
      console.log("payments table not created");
      return;
    }
    console.log("payments table created");
  });
});

module.exports = connection;
