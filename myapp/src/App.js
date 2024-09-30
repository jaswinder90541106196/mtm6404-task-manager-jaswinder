import React from 'react';
import NavBar from './navbar';
import TaskList from './Tasklist';
import Footer from './Footer';

const App = () => {
    return (
        <div>
            <NavBar />
            <TaskList />
            <Footer />
        </div>
    );
};

export default App;