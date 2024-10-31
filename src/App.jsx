import React, { useState, useEffect } from 'react';
import axios from 'axios';

const api = 'http://localhost:5000/api/tasks'; // No need to include the backend URL here


const App =() => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    axios.get(api).then((res) => setTasks(res.data));
  }, []);

  const addTask = async () => {
    const res = await axios.post(api, { name: newTask });
    setTasks([...tasks, res.data]);
    setNewTask('');
  };

  const toggleTask = async (id, completed) => {
    const res = await axios.put(`${api}/${id}`, { completed: !completed });
    setTasks(tasks.map((task) => (task._id === id ? res.data : task)));
  };

  const deleteTask = async (id) => {
    await axios.delete(`${api}/${id}`);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  return (
    <div>
      <h1>ToDo App</h1>
      <input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <span
              onClick={() => toggleTask(task._id, task.completed)}
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            >
              {task.name}
            </span>
            <button onClick={() => deleteTask(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
