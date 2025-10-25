import api from "../api/api";
import { useAuth } from "../context/AuthContext";

export default function TodoItem({ todo, onUpdate }) {
  const { token } = useAuth();

  const toggleComplete = async () => {
    await api.put(
      `/todos/${todo._id}`,
      { completed: !todo.completed },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    onUpdate();
  };

  const handleDelete = async () => {
    await api.delete(`/todos/${todo._id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    onUpdate();
  };

  return (
    <li className="todo-item">
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        {todo.title}
      </span>
      <div>
        <button onClick={toggleComplete}>
          {todo.completed ? "Undo" : "Complete"}
        </button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </li>
  );
}
