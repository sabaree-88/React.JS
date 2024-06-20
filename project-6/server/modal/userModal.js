const db = require("../config/db");

const User = {
  getAllUsers: (fun) => {
    const sql = "SELECT * FROM data";
    db.query(sql, (err, results) => {
      if (err) {
        console.error("Error fetching users: ", err);
        return fun(err, null);
      }
      return fun(null, results);
    });
  },
};

module.exports = User;
