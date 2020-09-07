const mysql = require("mysql");
const cTable = require("console.table");
const sqlQuery =
  "SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary FROM employee INNER JOIN role WHERE employee.role_id = role.id ORDER BY id ASC;";

function viewEmployees() {
  // Getting the connection with the database (You will plug in your own database info here)
  const connection = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "secret",
    database: "my_DB",
  });

  connection.connect();

  let arrOfObb = [];

  connection.query(sqlQuery, function (err, result) {
    if (err) throw err;

    for (let i = 0; i < result.length; i++) {
      id = JSON.stringify(result[i]);
      let obb = {
        id: JSON.stringify(result[i].id),
        first_name: JSON.stringify(result[i].first_name),
        last_name: JSON.stringify(result[i].last_name),
        title: JSON.stringify(result[i].title),
        department: JSON.stringify(result[i].id), // department class returns the string of the departments name?
        salary: JSON.stringify(result[i].salary),
        manager_id: JSON.stringify(result[i].id), // get the managers name thru int (maybe call a function that returns the string of the managers name)
      };

      arrOfObb.push(obb);
    }

    console.log("Im a console.log !! : " + arrOfObb);
    console.table(arrOfObb);
  });

  connection.end();
}

module.exports = viewEmployees;
