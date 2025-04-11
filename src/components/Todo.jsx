import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import { Footer } from "./Footer";

export default function Todo() {
  const [todos, setTodos] = useState([]);

  const totalTodos = todos.length;
  const completedTodos = todos.filter((item) => item.done).length;
  return (
    <div className="Todo">
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer totalTodos={totalTodos} completedTodos={completedTodos} />
    </div>
  );
}
