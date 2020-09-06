// Dependencies used in this file
const fs = require("fs");
const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");
const mysql = require("mysql");

// Other Modules used for classes and other helpers

// List of the users choices to access them and compare them easier
const userChoices = [
  "View All Employees",
  "View Employees By Department",
  "View Employes By Role",
  "Add Employee",
  "Remove Employee",
  "Update Employee Role",
  "View All Roles",
  "Add Role",
  "Remove Role",
  "View All Departments",
  "Add Department",
  "Remove Department",
];

// Creates and logs the banner into the console
console.log(
  chalk.red(
    figlet.textSync("Employee Manager", {
      font: "Doom",
      horizontalLayout: "fitted",
      verticalLayout: "fitted",
      width: 80,
      whitespaceBreak: true,
    })
  )
);

// Getting the connection with the database (You will plug in your own database info here)
// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "me",
//   password: "secret",
//   database: "my_db",
// });

// connection.connect();

// Function to start the program and will be where the user selects options
function startApp() {
  inquirer
    .prompt({
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: userChoices,
    })
    .then((answer) => {
      switch (answer.choice) {
        case userChoices[0]:
          console.log("1");
          break;

        case userChoices[1]:
          console.log("2");
          break;

        case userChoices[2]:
          console.log("3");
          break;

        case userChoices[3]:
          console.log("4");
          break;

        case userChoices[4]:
          console.log("5");
          break;

        case userChoices[5]:
          console.log("6");
          break;

        case userChoices[6]:
          console.log("7");
          break;

        case userChoices[7]:
          console.log("8");
          break;

        case userChoices[8]:
          console.log("9");
          break;

        case userChoices[9]:
          console.log("10");
          break;

        case userChoices[10]:
          console.log("11");
          break;

        case userChoices[11]:
          console.log("12");
          break;
      }
    });
  //   connection.query("SELECT  + 1 AS solution", function (
  //     error,
  //     results,
  //     fields
  //   ) {
  //     if (error) throw error;
  //     console.log("The solution is: ", results[0].solution);
  //   });
  //   connection.end();
}

startApp();
