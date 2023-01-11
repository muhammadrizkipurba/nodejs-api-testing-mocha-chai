const router = require("express").Router();
const { getUsers, addUser, getSingleUser, deleteUser, updateUser } = require("../controller/user");

router.post("/add-user", addUser);
router.get("/users", getUsers);
router.get("/user/:id", getSingleUser);
router.put("/update-user/:id", updateUser);
router.delete("/delete-user/:id", deleteUser);

module.exports = router;
