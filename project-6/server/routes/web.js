const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.get("/", userController.getUsers);
router.post("/", userController.saveUsers);
router.put("/:id", userController.updateUser);
// router.get("/:id", userController.getUserById);

module.exports = router;