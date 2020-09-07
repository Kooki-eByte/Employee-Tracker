const cTable = require("console.table");

function getManager(selectedEmp, allEmp) {
  // make a conditional to return the first and last name of of whichever employee.id is matched with the employee.manager_id

  for (let i = 0; i < allEmp.length; i++) {
    // console.log(JSON.stringify(allEmp[i].id) == selectedEmp);
    // console.log("1.) ", JSON.stringify(allEmp[i].id));
    // console.log("2.) ", selectedEmp);

    let allEmployeesId = JSON.stringify(allEmp[i].id);

    if (allEmployeesId == selectedEmp) {
      let fullName =
        JSON.stringify(allEmp[i].first_name).slice(1, -1) +
        " " +
        JSON.stringify(allEmp[i].last_name).slice(1, -1);
      return fullName;
    }
  }
}

module.exports = function viewEmployees(result) {
  // Getting the connection with the database (You will plug in your own database info here)

  let arrOfObb = [];

  for (let i = 0; i < result.length; i++) {
    id = JSON.stringify(result[i]);
    let managerId = JSON.stringify(result[i].manager_id);

    let obb = {
      id: JSON.stringify(result[i].id),
      first_name: JSON.stringify(result[i].first_name).slice(1, -1),
      last_name: JSON.stringify(result[i].last_name).slice(1, -1),
      title: JSON.stringify(result[i].title).slice(1, -1),
      department: JSON.stringify(result[i].name).slice(1, -1),
      salary: JSON.stringify(result[i].salary),
      manager: getManager(managerId, result),
    };

    arrOfObb.push(obb);
  }

  // console.log("Im a console.log !! : " + arrOfObb);
  console.table(arrOfObb);
};
