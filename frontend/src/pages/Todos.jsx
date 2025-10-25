import { useState, useEffect } from "react";
import api from "../api/api";
import { useAuth } from "../context/AuthContext";
import TodoForm from "../components/TodoForm";
import TodoItem from "../components/TodoItem";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const { token, logout } = useAuth();

  const fetchTodos = async () => {
    const res = await api.get("/todos", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setTodos(res.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="todo-container">
      <header>
        <h1>My To-Do List</h1>
        <button onClick={logout}>Logout</button>
      </header>

      <TodoForm onAdd={fetchTodos} />
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} onUpdate={fetchTodos} />
        ))}
      </ul>
    </div>
  );
}
