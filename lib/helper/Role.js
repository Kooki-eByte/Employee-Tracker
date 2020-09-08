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

class Role {
  constructor(title, salary, departmentId) {
    this.title = title;
    this.salary = salary;
    this.departmentId = departmentId;
  }
}
module.exports = Role;
