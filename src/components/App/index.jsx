/* import { BrowserRouter, Routes, Route } from 'react';
import { useState, useEffect } from 'react'; */
import '../../styled/css/reset.css';
import '../../styled/css/index.css'

import Login from '../Routes/Login';

function App() {

    return (
     /*    <UserContext.Provider value={{ user, setUser }}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider> */
        <Login />
    );
}

export default App