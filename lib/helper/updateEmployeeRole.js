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

// Get the employees first and last name and (employee ID) and (role_id) have the user pick the employee to edit role
// get the (roles title) and the (role id) so we can pick a title and get the id
// have the query UPDATE the employees role_id

module.exports = function updateEmployeeRole(employeeInfo) {
  let employees = [];
  for (i = 0; i < employeeInfo.length; i++) {
    let employee = {
      name: employeeInfo[i].first_name + " " + employeeInfo[i].last_name,
      value: employeeInfo[i].id,
    };
    employees.push(employee);
  }

  let roles = [];
  connection.query("SELECT * FROM role;", (err, res) => {
    if (err) throw err;

    for (i = 0; i < res.length; i++) {
      let role = {
        name: res[i].title,
        value: res[i].id,
      };
      roles.push(role);
    }
  });

  console.log(employees);

  inquirer
    .prompt([
      {
        type: "list",
        name: "employee",
        message: "Who's role would you like to change?:",
        choices: employees,
      },
      {
        type: "list",
        name: "role",
        message: "What role would you change the employee to?:",
        choices: roles,
      },
    ])
    .then((answer) => {
      connection.query(
        "UPDATE management_systemDB.employee SET role_id = ? WHERE id = ?",
        [answer.role, answer.employee],
        (err, result) => {
          if (err) throw err;

          console.log("\n employee's role has been updated \n");
        }
      );

      setTimeout(function () {
        startApp.startApp();
      }, 2000);
    });
};
