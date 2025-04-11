import { useState } from "react";
import styles from "./Form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo) return;
    const newTodo = {
      name: todo,
      done: false,
      date: new Date().toLocaleString(),
    };
    setTodos([newTodo, ...todos]);
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.todoform}>
      <div className={styles.inputContainer}>
        <input
          placeholder="Enter todo..."
          className={styles.modernInput}
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit" className={styles.modernButton}>
          Add
        </button>
      </div>
    </form>
  );
}
