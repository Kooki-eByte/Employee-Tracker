const mysql = require("mysql");
const startApp = require("../app");
const inquirer = require("inquirer");

const viewEmployeeQuery =
  "SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name , employee.manager_id FROM ((employee INNER JOIN role ON employee.role_id = role.id) INNER JOIN department ON role.department_id = department.id) ORDER BY employee.id ASC;";

const viewAllRoles = "SELECT * FROM role;";

const viewAllDept = "SELECT * FROM department;";

var connection = mysql.createConnection({
  host: "localhost",
  user: "me",
  password: "secret",
  database: "my_db",
});

connection.connect();

module.exports = function sqlRoute(response) {
  switch (response) {
    case startApp.userChoices[0]: // VIEW ALL EMPLOYEES
      connection.query(viewEmployeeQuery, function (err, result) {
        if (err) throw err;

        require("./viewEmployees").viewAll(result);
        setTimeout(function () {
          startApp.startApp();
        }, 2000);
      });
      break;

    case startApp.userChoices[1]: // VIEW EMPLOYEES BASED ON DEPT.
      connection.query(viewAllDept, function (err, result) {
        if (err) throw err;

        // array to store the choices dynamically
        let deptArray = [];
        for (let i = 0; i < result.length; i++) {
          deptArray.push(JSON.stringify(result[i].name).slice(1, -1));
        }

        inquirer
          .prompt({
            type: "list",
            name: "choice",
            message: "Which department do you want to search by?",
            choices: deptArray,
          })
          .then((response) => {
            require("./viewEmployees").viewByDept(response.choice);
            setTimeout(function () {
              startApp.startApp();
            }, 2000);
          });
      });
      break;

    case startApp.userChoices[2]: // VIEW ALL EMPLOYEES BASED ON ROLE
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
            name: "choice",
            message: "Which role do you want to search by?",
            choices: roleArray,
          })
          .then((response) => {
            require("./viewEmployees").viewByRole(response.choice);
            setTimeout(function () {
              startApp.startApp();
            }, 2000);
          });
      });
      break;

    case startApp.userChoices[3]:
      console.log("4");
      break;

    case startApp.userChoices[4]:
      console.log("5");
      break;

    case startApp.userChoices[5]:
      console.log("6");
      break;

    case startApp.userChoices[6]: // view all roles
      connection.query(viewAllRoles, function (err, result) {
        if (err) throw err;
        require("./viewRoles")(result);
        setTimeout(function () {
          startApp.startApp();
        }, 2000);
      });
      break;

    case startApp.userChoices[7]:
      console.log("8");
      break;

    case startApp.userChoices[8]:
      console.log("9");
      break;

    case startApp.userChoices[9]: // view all departments
      connection.query(viewAllDept, function (err, result) {
        if (err) throw err;
        require("./viewDept").viewDepts(result);
        setTimeout(function () {
          startApp.startApp();
        }, 2000);
      });
      break;

    case startApp.userChoices[10]:
      console.log("11");
      break;

    case startApp.userChoices[11]:
      console.log("12");
      break;

    case startApp.userChoices[12]:
      connection.end();
      startApp.endApp();
      break;
  }
};
