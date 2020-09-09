// Dependencies used in this file
const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");

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
  "Exit Program",
];

// Creates and logs the banner into the console
console.log(
  chalk.green(
    figlet.textSync("Employee Manager", {
      font: "Doom",
      horizontalLayout: "fitted",
      verticalLayout: "fitted",
      width: 80,
      whitespaceBreak: true,
    })
  )
);

// Creates and logs the banner into the console when leaving the app
function endApp() {
  console.log(
    chalk.red(
      figlet.textSync("Goodbye!", {
        font: "Doom",
        horizontalLayout: "fitted",
        verticalLayout: "fitted",
        width: 80,
        whitespaceBreak: true,
      })
    )
  );
  process.exit();
}

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
      require("./lib/databasePath")(answer.choice);
    });
}

startApp();

module.exports = {
  startApp: startApp,
  endApp: endApp,
  userChoices: userChoices,
};
