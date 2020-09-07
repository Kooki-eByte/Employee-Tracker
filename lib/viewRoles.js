const cTable = require("console.table");

module.exports = function viewRoles(result) {
  let arrOfObb = [];

  for (let i = 0; i < result.length; i++) {
    id = JSON.stringify(result[i]);

    let obb = {
      id: JSON.stringify(result[i].id),
      title: JSON.stringify(result[i].title).slice(1, -1),
      salary: JSON.stringify(result[i].salary),
    };

    arrOfObb.push(obb);
  }

  console.table(arrOfObb);
};
