var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "eatPlants",
});

con.connect(function (err) {
  if (err) throw err;
  con.query("SELECT * FROM recipes", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
