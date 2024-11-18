import { Request, Response } from 'express';
import todos from '../data.json'

interface Todo {
    id: number;
    name: string;
}

export const getTodos = (req: Request, res: Response) => {
    return res.json(todos);
};

export const addTodo = (req: Request, res: Response) => {
    const { name }: { name?: string } = req.body as { name?: string };
    if (!name) {
        return res.status(400).json({ error: "Todo name is required." });
    }
    const newTodo: Todo = { id: todos.length + 1, name };
    todos.push(newTodo);
    res.status(201).json(newTodo);
};