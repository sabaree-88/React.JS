const db = require("../config/db");

const User = {
  getAllUsers: (show) => {
    const sql = "SELECT * FROM data";
    db.query(sql, (err, results) => {
      if (err) {
        console.error("Error fetching users: ", err);
        return show(err, null);
      }
      return show(null, results);
    });
  },

  saveUsers: (values, create) => {
    const sql = "INSERT INTO data (name, email) VALUES (?)";
    const values = this.values;
    db.query(sql, values, (err, result) => {
      if (err) {
        return create(err, null);
      }
      return create(null, result);
    });
  },
};

module.exports = User;
