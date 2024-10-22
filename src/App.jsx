import './App.css';
import React, { useState, useEffect, useCallback } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { FILTERS } from './constants';
import { v4 as uuidv4 } from 'uuid'; // For generating unique IDs

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState(FILTERS.ACTIVE);
  const [, setCurrentDate] = useState(new Date());

  // Retrieve tasks from localStorage on initial load
  useEffect(() => {
    const savedTasks = localStorage.getItem('todoTasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to localStorage
  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem('todoTasks', JSON.stringify(tasks));
    }, 500);

    return () => clearTimeout(timer);
  }, [tasks]);

  // Update the time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Add new task
  const addTask = useCallback((title, deadline) => {
    const newTask = {
      id: uuidv4(),
      title,
      deadline,
      isCompleted: false,
      isImportant: false,
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  }, []);

  // Mark as completed/not completed
  const toggleCompletion = useCallback((taskId) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  }, []);

  // Mark as important/not important
  const toggleImportant = useCallback((taskId) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, isImportant: !task.isImportant } : task
      )
    );
  }, []);

  // Mark as completed/not completed
  const deleteTask = useCallback((taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  }, []);

  // Filter tasks
  const filteredTasks = tasks.filter(task => {
    if (filter === FILTERS.IMPORTANT) {
      return task.isImportant && !task.isCompleted;
    } else if (filter === FILTERS.COMPLETED) {
      return task.isCompleted;
    }
    return !task.isCompleted; // Default to active tasks
  });

  return (
    <div className="app-container">
      <header className="header">
        <h1>TASKBRIO</h1>
        <div className="datetime-container">
          <div className="current-date">Date: {new Date().toLocaleDateString()}</div>
          <div className="current-time">Time: {new Date().toLocaleTimeString()}</div>
        </div>
      </header>

      

      {/* New Task Form */}
      <TaskForm addTask={addTask} />

      {/* Filter Navigation */}
      <nav className="category-nav">
        {Object.values(FILTERS).map((filterName) => (
          <button
            key={filterName}
            onClick={() => setFilter(filterName)}
            className={`category-btn${filter === filterName ? ' active' : ''}`}
          >
            {filterName}
          </button>
        ))}
      </nav>

      {/* Task List */}
      <TaskList
        tasks={filteredTasks}
        toggleCompletion={toggleCompletion}
        toggleImportant={toggleImportant}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default TodoApp;
