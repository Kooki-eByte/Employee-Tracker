const cTable = require("console.table");

module.exports = {
  viewDepts: function viewDept(result) {
    let arrOfObb = [];

    for (let i = 0; i < result.length; i++) {
      let obb = {
        id: JSON.stringify(result[i].id),
        name: JSON.stringify(result[i].name).slice(1, -1),
      };

      arrOfObb.push(obb);
    }

    console.table(arrOfObb);
  },
  otherMethod: function () {},
};
