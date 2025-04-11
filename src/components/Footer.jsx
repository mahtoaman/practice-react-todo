import styles from "./Footer.module.css";

export const Footer = ({ completedTodos, totalTodos }) => {
  return (
    <div className={styles.Footer}>
      <span>Completed todos: {completedTodos}</span>
      <span>Total todos: {totalTodos}</span>
    </div>
  );
};
