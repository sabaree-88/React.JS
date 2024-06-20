const User = require("../modal/userModal");

const getUsers = (req, res) => {
  User.getAllUsers((err, data) => {
    if (err) {
      return res.status(500).json("Error");
    }
    return res.json(data);
  });
};

module.exports = {
  getUsers,
};
