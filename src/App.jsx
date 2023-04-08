import React, { useState } from 'react';
import './App.css';

function App() {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if(!newTask) {
      alert('Please enter a task.');
      return;
    }
    setTasks([...tasks, newTask]); //pega os valores que estão em tasks e copia em newTasks
    setNewTask('');
    alert('Task added successfully.');
  };

  const handleTaskDelete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1); //remove um elemento do array que corresponde a posição "index"
    setTasks(updatedTasks);
    alert('Task deleted successfully.');
  };

  return (
    <main>
      <h1>Todo App</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={newTask} 
          placeholder="Add Item: "
          onChange={handleInputChange}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleTaskDelete(index)}>X</button>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default App;
