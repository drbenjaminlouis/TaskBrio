import React, { useState } from 'react';

// TaskForm Component to handle task input and submission
const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [deadlineDate, setDeadlineDate] = useState('');
  const [deadlineTime, setDeadlineTime] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && deadlineDate && deadlineTime) {
      const deadline = `${deadlineDate} ${deadlineTime}`;
      addTask(title, deadline);
      setTitle('');
      setDeadlineDate('');
      setDeadlineTime('');
    }
  };

  return (
    <div className="input-section">
      <form onSubmit={handleSubmit}>
        <div className="task-input">
          <input
            type="text"
            placeholder="Add a new task..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="date-time-pickers">
          <input
            type="date"
            value={deadlineDate}
            onChange={(e) => setDeadlineDate(e.target.value)}
            required
          />
          <input
            type="time"
            value={deadlineTime}
            onChange={(e) => setDeadlineTime(e.target.value)}
            required
          />
        </div>
        <input className='addBtn' type='submit' value='Add Task' />
      </form>
    </div>
  );
};

export default TaskForm;
