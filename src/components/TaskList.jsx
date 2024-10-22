import React from 'react';
import { FaCheckCircle, FaRegCircle, FaStar, FaTrash } from 'react-icons/fa';

// TaskList Component for rendering tasks
const TaskList = ({ tasks, toggleCompletion, toggleImportant, deleteTask }) => {
  return (
    <div className="task-section">
      <h2>Tasks</h2>
      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id} className="task-item">
            <div className="task-info">
              <span className="task-check" onClick={() => toggleCompletion(task.id)}>
                {task.isCompleted ? <FaCheckCircle /> : <FaRegCircle />}
              </span>
              <div className="task-details">
                <span className={`task-title ${task.isCompleted ? 'completed' : ''}`}>
                  {task.title}
                </span>
                <span className="task-deadline">Due: {task.deadline}</span>
              </div>
            </div>
            <div className="task-actions">
              <span onClick={() => toggleImportant(task.id)}>
                {task.isImportant ? <FaStar className="important" /> : <FaStar className="nimportant" />}
              </span>
              <FaTrash onClick={() => deleteTask(task.id)} className="icon delete" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
