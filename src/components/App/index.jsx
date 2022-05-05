import { BrowserRouter, Routes, Route } from 'react-router-dom';
/*import { useState, useEffect } from 'react'; */
import '../../styled/css/reset.css';
import '../../styled/css/index.css'

import Login from '../Routes/Login';
import Register from '../Routes/Register';

function App() {

    return (
     /*    <UserContext.Provider value={{ user, setUser }}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider> */
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App