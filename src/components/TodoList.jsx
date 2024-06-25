import React from "react";
import "../main";

const TodoList = ({ tasks }) => {
  return (
    <ul className="todo-list">
      {tasks.map((task, index) => (
        <li key={index} className={task.completed ? "completed" : ""}>
          {task.text}
        </li>
      ))}
    </ul>
  );
};

const styles = {
  list: {
    listStyleType: "none",
    padding: 0,
  },
  completed: {
    textDecoration: "line-through",
    color: "gray",
  },
  notCompleted: {
    textDecoration: "none",
    color: "black",
  },
};

export default TodoList;
