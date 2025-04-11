import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

export default function TodoList({ todos,setTodos }) {
  return (
    <div className={styles.list}>
      {todos.map((todo, index) => {
        return (
          <TodoItem todo={todo} todos={todos} setTodos = {setTodos} key={index}   />
        );
      })}
    </div>
  );
}
