import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div>
            <p>Welcome!</p>
            <Routes>
                <Route path="/" element={<p>Home page</p>} />
            </Routes>
        </div>
    );
}

export default App;
