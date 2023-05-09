import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: "rdbms.strato.de",
  user: "dbu2454404",
  password: "retterschen123",
  database: "dbs5617911",
  //port: "3306", // MAMP port 3306
});

app.get("/", (req, res) => {
  const sql = "SELECT * FROM Rezepte";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

const port = process.env.PORT || 8888;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
