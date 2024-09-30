import React from 'react';
import TaskItem from './TaskItem';

const TaskList = () => {
    const tasks = [
        { id: 1, title: 'Task 1' },
        { id: 2, title: 'Task 2' },
        { id: 3, title: 'Task 3' },
        { id: 4, title: 'Task 4' },
        { id: 5, title: 'Task 5' },
    ];

    return (
        <div>
            <h2>Your Tasks</h2>
            <ul>
                {tasks.map(task => (
                    <TaskItem key={task.id} title={task.title} />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;