import { useEffect, useState } from "react";
import FormContainer from "../components/layout/FormContainer";
import Button from "../components/ui-elements/Button";
import TextInput from "../components/ui-elements/TextInput";
import ErrorMessage from "../components/ui-elements/ErrorMessage";
import axios from "axios";
import { BACKEND_URL } from "../utils/api";

const TodoList = () => {
  const [todos, setTodos] = useState<{ id: number; name: string }[]>([]);
  const [todo, setTodo] = useState("");
  const [message, setMessage] = useState<{
    text: string;
    type: "success" | "error";
  } | null>(null);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/todos`);
      setTodos(response.data);
      setMessage(null);
    } catch (error) {
      console.error("Error fetching todos:", error);
      setMessage({
        text: "Failed to fetch todos. Please try again.",
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
      setMessage({ text: "Todo added successfully!", type: "success" });
    } catch (error) {
      console.error("Error adding todo:", error);
      setMessage({
        text: "Failed to add todo. Please try again.",
        type: "error",
      });
    }
  };

  return (
    <FormContainer>
      <form onSubmit={handleAddTodo}>
        {message && <ErrorMessage message={message.text} type={message.type}/>}
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
