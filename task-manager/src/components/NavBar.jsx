const Navbar = ({ toggleShowCompleted, showCompleted }) => {
    return (
      <nav>
        <h1>Task Manager</h1>
        <button onClick={toggleShowCompleted}>
          {showCompleted ? 'Hide Completed' : 'Show Completed'}
        </button>
      </nav>
    );
  };
  
  export default Navbar;
  