const mysql = require("mysql");

function viewEmployees() {
  // Getting the connection with the database (You will plug in your own database info here)
  var con = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword",
    database: "mydb",
  });

  connection.connect();

  connection.query("SELECT * FROM management_systemDB.employee;", function (
    err,
    result
  ) {
    if (err) throw err;

    for (let i = 0; i < result.length; i++) {
      let stringObj = JSON.stringify(result[i]);

      console.log(`\n ${stringObj}`);
    }
  });
  connection.end();
}

module.exports = viewEmployees;
