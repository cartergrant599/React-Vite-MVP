const express = require("express");
const todoController = require("../controllers/todoController");

const router = express.Router();

router.get("/", todoController.getTodos);
router.post("/", todoController.addTodo);

export default router;