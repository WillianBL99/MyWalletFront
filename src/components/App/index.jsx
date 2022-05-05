import { BrowserRouter, Routes, Route } from 'react-router-dom';
/*import { useState, useEffect } from 'react'; */
import '../../styled/css/reset.css';
import '../../styled/css/index.css'

import Login from '../Routes/Login';
import Register from '../Routes/Register';
import Trasactions from '../Routes/Transactions';

function App() {

    return (
     /*    <UserContext.Provider value={{ user, setUser }}></UserContext.Provider> */
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/transactions' element={<Trasactions />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App