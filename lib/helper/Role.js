const inquirer = require("inquirer");
const mysql = require("mysql");
const startApp = require("../../app");

const viewAllDept = "SELECT * FROM department;";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "management_systemDB",
});

connection.connect();

function addRole() {
  let departments = [];
  connection.query(viewAllDept, function (err, result) {
    if (err) throw err;

    for (let i = 0; i < result.length; i++) {
      departments.push(JSON.stringify(result[i].name).slice(1, -1));
    }
  });
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "Enter a new Role:",
      },
      {
        type: "input",
        name: "salary",
        message: "Enter Salary:",
      },
      {
        type: "list",
        name: "choice",
        message: "Select Department:",
        choices: departments,
      },
    ])
    .then((answer) => {
      let deptId = 0;
      for (let i = 0; i < departments.length; i++) {
        if (answer.choice == departments[i]) {
          deptId = i + 1;
        }
      }
      let values = [answer.title, answer.salary, deptId];
      connection.query(
        "INSERT INTO `management_systemDB`.`role` (`title`, `salary`, `department_id`) VALUES (?)",
        [values],
        function (err, result) {
          if (err) throw err;

          console.log(`This has been added to the database \n`);
        }
      );

      setTimeout(function () {
        startApp.startApp();
      }, 2000);
    });
}

module.exports = addRole;
