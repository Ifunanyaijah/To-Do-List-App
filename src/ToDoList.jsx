import React, { useState } from 'react'
import TodoItem from './TodoItem';
import './App.css'

const ToDoList = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctor Appointment',
            completed: true
        },
        {
            id: 2,
            text: 'PTA Meeting',
            completed: false
        }
    ]);
    const [text, setText] = useState('');
    function addTask(text) {
        const newTask = {
            id: Date.now(),
            text,
            completed: false
        };
        setTasks([...tasks, newTask]); //adds the new tasks and keeps the old one
        setText(''); //the text is set back empty
    }
    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }
    function toggleCompleted(id) {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return {...task, completed: !task.completed};
            } else {
                return task;
            }
        }));
    }
  return (
    
    <div className='todo-list'>
         <div className='header'>
        <div className='input-group'>
        <h2>My To-Do list</h2>
        <input value={text} onChange={e => setText(e.target.value)}/>
        <button onClick={() => addTask(text)} className='addBtn'> Add </button>
       </div>
       </div>
        {tasks.map(task => (
            <TodoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleCompleted={toggleCompleted}
            />
        ))}
       
    </div>
  );
}

export default ToDoList;
