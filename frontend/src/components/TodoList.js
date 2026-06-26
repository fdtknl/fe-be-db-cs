import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onToggleTodo, onDeleteTodo }) {
  if (todos.length === 0) {
    return (
      <div>
        <p>No todos yet!</p>
        <p>Add one above to get started.</p>
      </div>
    );
  }

  const completedCount = todos.filter(t => t.isCompleted).length;

  return (
    <div>
      <p>{completedCount} of {todos.length} completed</p>
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={() => onToggleTodo(todo.id, !todo.isCompleted)}
            onDelete={() => onDeleteTodo(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;