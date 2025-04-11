import styles from "./TodoItem.module.css";

export default function TodoItem({ todo, todos, setTodos }) {
  function handleDelete(todo) {
    const updatedList = todos.filter((item) => item.date != todo);
    setTodos(updatedList);
  }

  function handleComplete(task) {
    const newList = todos.map(
      (item) =>
        item.date === task.date
          ? { ...item, done: !item.done } 
          : item 
    );

    setTodos(newList);
  }
  let isCompleted = todo.done ? styles.taskCompleted : "";

  return (
    <div className={styles.item}>
      <div className={styles.todoName}>
        <span
          className={isCompleted}
          onClick={() => {
            handleComplete(todo);
          }}
        >
          {todo.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(todo.date)}
            className={styles.deleteButton}
          >
            X
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
