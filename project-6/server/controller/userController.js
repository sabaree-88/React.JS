const User = require("../modal/userModal");

const getUsers = (req, res) => {
  User.getAllUsers((err, data) => {
    if (err) {
      return res.status(500).json("Error");
    }
    return res.json(data);
  });
};

const saveUsers = (req, res) => {
  const values = [req.body.name, req.body.email];

  User.saveUsers(values, (err, data) => {
    if (err) {
      console.error("Error saving the user:", err);
      return res.status(500).json("Error saving the user");
    }
    return res.json(data);
  });
};

const updateUser = (req, res) => {
  const id = req.params.id;
  const values = [req.body.name, req.body.email];

  User.updateUser(values, id, (err, data) => {
    if (err) {
      console.error("Error updating the user:", err);
      return res.status(500).json({ message: "Error updating the user" });
    }
    return res.status(200).json(data);
  });
};
module.exports = {
  getUsers,
  saveUsers,
  updateUser,
};
