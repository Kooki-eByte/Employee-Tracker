const mysql = require("mysql");
const cTable = require("console.table");

function viewEmployees() {
  // Getting the connection with the database (You will plug in your own database info here)
  const connection = mysql.createConnection({
    host: "localhost",
    user: "username",
    password: "secret",
    database: "my_DB",
  });

  connection.connect();

  connection.query("SELECT * FROM management_systemDB.employee;", function (
    err,
    result
  ) {
    if (err) throw err;

    let arrOfObb = [];

    for (let i = 0; i < result.length; i++) {
      id = JSON.stringify(result[i]);
      let obb = {
        id: JSON.stringify(result[i].id),
        first_name: JSON.stringify(result[i].first_name),
        last_name: JSON.stringify(result[i].last_name),
        role_id: JSON.stringify(result[i].role_id),
        manager_id: JSON.stringify(result[i].manager_id),
      };

      arrOfObb.push(obb);
    }

    console.log("\n");
    console.table(arrOfObb);
  });
  connection.end();
}

module.exports = viewEmployees;
