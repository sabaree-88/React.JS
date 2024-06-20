const User = require("../modal/userModal");

const getUsers = (req, res) => {
  User.getAllUsers((err, data) => {
    if (err) {
      return res.status(500).json("Error");
    }
    return res.json(data);
  });
};

// const saveUsers = (req, res) => {
//   const values = [req.body.name, req.body.email];

//   User.saveUsers(values, (err, data) => {
//     if (err) {
//       console.error("Error saving the user:", err);
//       return res.status(500).json("Error saving the user");
//     }
//     return res.json(data);
//   });
// };

module.exports = {
  getUsers,
  // saveUsers,
};
