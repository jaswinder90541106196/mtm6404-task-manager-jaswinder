const TaskItem = ({ task, toggleComplete, deleteTask }) => {
    return (
      <div style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        <span>{task.name}</span> - <span>{task.priority}</span>
        <button onClick={() => toggleComplete(task.id)}>
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    );
  };
  
  export default TaskItem;
  