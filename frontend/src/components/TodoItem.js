import React from 'react';

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li>
      <div>
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={onToggle}
        />
        <div>
          <h3 style={todo.isCompleted ? { textDecoration: 'line-through', opacity: 0.7 } : {}}>
            {todo.title}
          </h3>
          {todo.description && <p>{todo.description}</p>}
          <small>
            {new Date(todo.createdAt).toLocaleDateString()}
          </small>
        </div>
      </div>
      <button
        onClick={onDelete}
        title="Delete todo"
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;