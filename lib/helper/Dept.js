const inquirer = require("inquirer");
const mysql = require("mysql");
const startApp = require("../../app");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Python0011!",
  database: "management_systemDB",
});

connection.connect();

function addDepartment() {
  inquirer
    .prompt({
      type: "input",
      name: "name",
      message: "Enter a new Department:",
    })
    .then((answer) => {
      const sql =
        "INSERT INTO `management_systemDB`.`department` (`name`) VALUES (?)";
      let values = [answer.name];
      connection.query(sql, [values], function (err, result) {
        if (err) throw err;

        console.log(`Department has been added to the database \n`);
      });

      setTimeout(function () {
        startApp.startApp();
      }, 2000);
    });
}
module.exports = addDepartment;
