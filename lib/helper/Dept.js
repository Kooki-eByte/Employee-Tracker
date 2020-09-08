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

class Department {
  constructor(name) {
    this.name = name;
  }
}
module.exports = Department;
