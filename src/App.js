import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo = {
        text: inputValue,
        completed: false,
        id: Date.now(),
      };
      setTodos([newTodo, ...todos]);
      setInputValue('');
    }
  };

  const markTodoComplete = (id) => {
    let temp;
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        temp = { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    updatedTodos = updatedTodos.filter((todo)=>{return todo.id !== id})
    console.log(updatedTodos)
    updatedTodos.push(temp)
    setTodos(updatedTodos);
  };

  const resetTodos = () => {
    setTodos([]);
  };

  return (
    <div className="container">
      <h1>TODO App</h1>
      <input
        type="text"
        placeholder="Add a new TODO..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyUp={(e) => e.key === 'Enter' && addTodo()}
      />
      <button className='add' onClick={addTodo}>Add</button>
      <button className='reset' onClick={resetTodos}>Reset</button>
      <div className="todo-list">
        <ul>

        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`todo-card ${todo.completed ? 'completed' : ''}`}
            onClick={() => markTodoComplete(todo.id)}
          >
            {todo.text}
          </li>
        ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
