import React from 'react'

const TodoItem = ({ task, deleteTask, toggleCompleted}) => {
    function handleChange() {
        toggleCompleted(task.id);
    }
  return (
    <div className='todo-list-container'>
    <div className={`todo-item ${task.completed ? 'checked' : ''}`}>
        <input type='checkbox' checked={task.completed} onChange={handleChange}/>
        <p>{task.text}</p>
        <button onClick={() => deleteTask(task.id)}>
            X
        </button>
     </div> 
    </div>
  );
}

export default TodoItem;
