const todos = require('../data.json');

exports.getTodos = (req, res) => {
    res.json(todos);
};

exports.addTodo = (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ error: "Todo name is required." });
    }
    const newTodo = { id: todos.length + 1, name };
    todos.push(newTodo);
    res.status(201).json(newTodo);
};
