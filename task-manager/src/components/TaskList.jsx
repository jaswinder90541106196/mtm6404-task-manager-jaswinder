import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, showCompleted, toggleComplete, deleteTask }) => {
  // Sort tasks by priority
  const sortedTasks = [...tasks].sort((a, b) => {
    const priorities = { High: 3, Medium: 2, Low: 1 };
    return priorities[b.priority] - priorities[a.priority];
  });

  return (
    <div>
      {sortedTasks
        .filter((task) => showCompleted || !task.completed)
        .map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        ))}
    </div>
  );
};

export default TaskList;
