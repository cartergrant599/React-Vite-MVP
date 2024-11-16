const todos = [
    { id: 1, name: "Learn React" },
    { id: 2, name: "Build a Todo App" },
    { id: 3, name: "Explore Node.js" },
];

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
