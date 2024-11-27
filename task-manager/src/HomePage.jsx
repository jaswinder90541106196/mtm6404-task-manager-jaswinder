import React from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const HomePage = ({ tasks, addTask, toggleShowCompleted }) => {
  return (
    <div>
      <h1>Welcome to Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} toggleShowCompleted={toggleShowCompleted} />
    </div>
  );
};

export default HomePage;
