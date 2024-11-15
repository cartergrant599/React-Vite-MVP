import { useEffect, useState } from "react";
import FormContainer from "../components/FormContainer";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import ErrorMessage from "../components/ErrorMessage";
import axios from "axios";
import { BACKEND_URL } from "../utils/api";

const TodoList = () => {
  const [todos, setTodos] = useState<{ id: number; name: string }[]>([]);
  const [todo, setTodo] = useState("");
  const [errors, setErrors] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/todos`);
      setTodos(response.data);
      setErrors(null);
    } catch (error) {
      console.error("Error fetching todos:", error);
      setErrors({
        message: "Failed to fetch todos. Please try again.",
        type: "error",
      });
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleAddTodo = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${BACKEND_URL}/api/todos`, {
        name: todo,
      });
      setTodos([...todos, response.data]);
      setTodo("");
      setErrors({ message: "Todo added successfully!", type: "success" });
    } catch (error) {
      console.error("Error adding todo:", error);
      setErrors({
        message: "Failed to add todo. Please try again.",
        type: "error",
      });
    }
  };

  return (
    <FormContainer>
      <form onSubmit={handleAddTodo}>
        {errors && <ErrorMessage message={errors.message} type={errors.type}/>}
        <div className="flex items-start gap-2">
          <TextInput
            id="todo-input"
            name="todo"
            placeholder="Enter a new todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <Button type="submit">Add Todo</Button>
        </div>
      </form>
      <ul className="list-disc list-inside text-slate-800 mt-4">
        {todos.map((todo) => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
    </FormContainer>
  );
};

export default TodoList;
