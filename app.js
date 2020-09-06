const fs = require("fs");
const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");
const mysql = require("mysql");

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
