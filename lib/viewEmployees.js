const cTable = require("console.table");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Python0011!",
  database: "management_systemDB",
});

connection.connect();

function getManager(selectedEmp, allEmp) {
  // make a conditional to return the first and last name of of whichever employee.id is matched with the employee.manager_id

  for (let i = 0; i < allEmp.length; i++) {
    // console.log(JSON.stringify(allEmp[i].id) == selectedEmp);
    // console.log("i is :", i);
    // console.log("1.) ", JSON.stringify(allEmp[i].id));
    // console.log("2.) ", selectedEmp);

    if (JSON.stringify(allEmp[i].id) == selectedEmp) {
      let fullName = `${JSON.stringify(allEmp[i].first_name).slice(
        1,
        -1
      )} ${JSON.stringify(allEmp[i].last_name).slice(1, -1)}`;

      return fullName;
    }
  }
}

// All of the functions to view the employee exported for databasePath.js to use for each case
module.exports = {
  viewAll: function viewEmployees(result) {
    // Getting the connection with the database (You will plug in your own database info here)

    let arrOfObb = [];

    for (let i = 0; i < result.length; i++) {
      let managerId = JSON.stringify(result[i].manager_id);
      let manager = getManager(managerId, result);

      let obb = {
        id: JSON.stringify(result[i].id),
        first_name: JSON.stringify(result[i].first_name).slice(1, -1),
        last_name: JSON.stringify(result[i].last_name).slice(1, -1),
        title: JSON.stringify(result[i].title).slice(1, -1),
        department: JSON.stringify(result[i].name).slice(1, -1),
        salary: JSON.stringify(result[i].salary),
        manager: manager,
      };

      // console.log(obb);
      arrOfObb.push(obb);
    }

    console.table(arrOfObb);
  },
  viewByDept: function viewEmployeeByDept(type) {
    let sqlQuery =
      "SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name , employee.manager_id FROM ((employee INNER JOIN role ON employee.role_id = role.id) INNER JOIN department ON role.department_id = department.id AND department.name = ?) ORDER BY employee.id ASC;";

    connection.query(sqlQuery, [type], function (err, result) {
      if (err) throw err;

      console.log(type);
      let arrOfObb = [];

      for (let i = 0; i < result.length; i++) {
        id = JSON.stringify(result[i]);
        let managerId = JSON.stringify(result[i].manager_id);
        let manager = getManager(managerId, result);

        let obb = {
          id: JSON.stringify(result[i].id),
          first_name: JSON.stringify(result[i].first_name).slice(1, -1),
          last_name: JSON.stringify(result[i].last_name).slice(1, -1),
          title: JSON.stringify(result[i].title).slice(1, -1),
          department: JSON.stringify(result[i].name).slice(1, -1),
          salary: JSON.stringify(result[i].salary),
          manager: manager,
        };

        arrOfObb.push(obb);
      }

      console.table(arrOfObb);
    });
  },
  viewByRole: function viewEmployeeByRole(type) {
    let sqlQuery =
      "SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name , employee.manager_id FROM ((employee INNER JOIN role ON employee.role_id = role.id AND role.title = ?) INNER JOIN department ON role.department_id = department.id) ORDER BY employee.id ASC;";

    connection.query(sqlQuery, [type], function (err, result) {
      if (err) throw err;

      console.log(type);
      let arrOfObb = [];

      for (let i = 0; i < result.length; i++) {
        id = JSON.stringify(result[i]);
        let managerId = JSON.stringify(result[i].manager_id);
        let manager = getManager(managerId, result);

        let obb = {
          id: JSON.stringify(result[i].id),
          first_name: JSON.stringify(result[i].first_name).slice(1, -1),
          last_name: JSON.stringify(result[i].last_name).slice(1, -1),
          title: JSON.stringify(result[i].title).slice(1, -1),
          department: JSON.stringify(result[i].name).slice(1, -1),
          salary: JSON.stringify(result[i].salary),
          manager: manager,
        };

        arrOfObb.push(obb);
      }

      console.table(arrOfObb);
    });
  },
};
