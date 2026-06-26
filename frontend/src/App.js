import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const API_BASE_URL = 'http://localhost:8080/api/todoitems';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch todos from API
  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_BASE_URL);
      if (!response.ok) throw new Error('Failed to fetch todos');
      const data = await response.json();
      setTodos(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching todos:', err);
    } finally {
      setLoading(false);
    }
  };

  // Load todos on component mount
  useEffect(() => {
    fetchTodos();
  }, []);

  // Add new todo
  const addTodo = async (title, description) => {
    try {
      const response = await fetch(API_BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          description,
          isCompleted: false,
        }),
      });

      if (!response.ok) throw new Error('Failed to add todo');
      const newTodo = await response.json();
      setTodos([...todos, newTodo]);
    } catch (err) {
      setError(err.message);
      console.error('Error adding todo:', err);
    }
  };

  // Update todo
  const updateTodo = async (id, updates) => {
    try {
      const todo = todos.find(t => t.id === id);
      const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...todo, ...updates }),
      });

      if (!response.ok) throw new Error('Failed to update todo');
      setTodos(todos.map(t => t.id === id ? { ...t, ...updates } : t));
    } catch (err) {
      setError(err.message);
      console.error('Error updating todo:', err);
    }
  };

  // Delete todo
  const deleteTodo = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete todo');
      setTodos(todos.filter(t => t.id !== id));
    } catch (err) {
      setError(err.message);
      console.error('Error deleting todo:', err);
    }
  };

  return (
    <div>
      <h1>My Todo App</h1>
      
      {error && <div><p>Error: {error}</p></div>}
      
      <TodoForm onAddTodo={addTodo} />
      
      {loading ? (
        <div><p>Loading todos...</p></div>
      ) : (
        <TodoList
          todos={todos}
          onToggleTodo={(id, isCompleted) => updateTodo(id, { isCompleted })}
          onDeleteTodo={deleteTodo}
        />
      )}
    </div>
  );
}

export default App;