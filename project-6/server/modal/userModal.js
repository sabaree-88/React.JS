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
    const sql = "INSERT INTO data (name, email) VALUES (?,?)";
    db.query(sql, values, (err, result) => {
      if (err) {
        return create(err, null);
      }
      return create(null, result);
    });
  },
  updateUser: (values, id, update) => {
    const sql = "UPDATE data SET name = ?, email = ? WHERE id = ?";
    db.query(sql, [...values, id], (err, result) => {
      if (err) {
        console.error("Error updating the user:", err);
        return update(err, null);
      }
      return update(null, result);
    });
  },
  getUserById: (id, show) => {
    const sql = "SELECT * FROM data WHERE id = ?";
    db.query(sql, [id], (err, result) => {
      if (err) {
        console.error("Error fetching user by ID:", err);
        return show(err, null);
      }
      return show(null, result);
    });
  },
  deleteUser: (id, del) => {
    const sql = "DELETE FROM data WHERE id = ?";
    db.query(sql, [id], (err, result) => {
      if (err) {
        console.error("Error deleting the user:", err);
        return del(err, null);
      }
      return del(null, result);
    });
  },
};

module.exports = User;
