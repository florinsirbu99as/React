import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "dbname",
  port: "3306", // DB PORT
});

app.get("/", (req, res) => {
  return res.json("From Backend side");
});

app.get("/recipes", (req, res) => {
  const sql = "SELECT * FROM table";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

const port = process.env.PORT || 8888;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
