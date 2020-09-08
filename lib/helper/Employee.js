const inquirer = require("inquirer");
const mysql = require("mysql");
const startApp = require("../../app");

const viewAllRoles = "SELECT * FROM role;";
const viewAllEmployees = "SELECT * FROM employee;";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Python0011!",
  database: "management_systemDB",
});

connection.connect();

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "first_name",
        message: "What is the employee's first name?",
      },
      {
        type: "input",
        name: "last_name",
        message: "What is the employee's last name?",
      },
    ])
    .then((answer) => {
      let firstName = answer.first_name;
      let lastName = answer.last_name;
      // Ask the question for which role to give... BUT only give the actuial data the role.id
      connection.query(viewAllRoles, function (err, result) {
        if (err) throw err;

        // array to store the choices dynamically
        let roleArray = [];
        for (let i = 0; i < result.length; i++) {
          roleArray.push(JSON.stringify(result[i].title).slice(1, -1));
        }

        inquirer
          .prompt({
            type: "list",
            name: "role",
            message: "What is the employee's role?",
            choices: roleArray,
          })
          .then((answer) => {
            // Change the name of the role to the id of the role and ask the manager to do the same thing and get the manager.id
            let roleId = 0;
            for (let i = 0; i < roleArray.length; i++) {
              if (roleArray[i] == answer.role) {
                roleId = i + 1;
              }
            }

            connection.query(viewAllEmployees, function (err, result) {
              if (err) throw err;

              let empArray = [];
              for (let i = 0; i < result.length; i++) {
                let fullName =
                  JSON.stringify(result[i].first_name).slice(1, -1) +
                  " " +
                  JSON.stringify(result[i].last_name).slice(1, -1);

                empArray.push(fullName);
              }

              inquirer
                .prompt({
                  type: "list",
                  name: "employee",
                  message: "Who is the employee's manager?",
                  choices: empArray,
                })
                .then((answer) => {
                  let managerId = 0;
                  for (let i = 0; i < empArray.length; i++) {
                    if (empArray[i] == answer.employee) {
                      managerId = i + 1;
                    }
                  }
                  //   console.log(firstName, lastName, roleId, managerId);

                  const sql =
                    "INSERT INTO `management_systemDB`.`employee` (`first_name`, `last_name`, `role_id`, `manager_id`) VALUES (?)";
                  let values = [firstName, lastName, roleId, managerId];
                  connection.query(sql, [values], function (err, result) {
                    if (err) throw err;

                    console.log(`Employee has been added to the database \n`);
                  });

                  setTimeout(function () {
                    startApp.startApp();
                  }, 2000);
                });
            });
          });
      });
    });
}
module.exports = addEmployee;

// const sql = "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ?"
//
