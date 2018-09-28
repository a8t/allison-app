import React from 'react';
import './TodoItem.css';

const TodoItem = ({ task, temperature, time, completed, completeTodo }) => {
  return (
    <tr className="todo-item">
      <td className="todo-item--task">{task}</td>
      <td className="todo-item--temperature">{completed ? '👌🏽' : temperature}</td>
      <td className="todo-item--time">{time}</td>
      {!completed && (
        <td>
          <button onClick={completeTodo}>Mark as completed</button>
        </td>
      )}
    </tr>
  );
};

export default TodoItem;
