const express = require("express");
const mysql = require("mysql");

const app = express();

// Create a MySQL connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "yourdatabase",
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database: " + err.stack);
    return;
  }
  console.log("Connected to MySQL database as id " + connection.threadId);
});

// Create an API for fetching data from a table
app.get("/api/data", (req, res) => {
  const sql = "SELECT * FROM yourtable";
  connection.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching data from MySQL database: " + err.stack);
      res.status(500).send("Internal server error");
      return;
    }
    res.json(results);
  });
});

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
