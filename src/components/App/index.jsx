/* import { BrowserRouter, Routes, Route } from 'react';
import { useState, useEffect } from 'react'; */
import '../../styled/css/reset.css';
import '../../styled/css/index.css'

import RetangularButton from "../Layout/RetangularButton";
import Container from '../Layout/Container';

function App() {

    return (
     /*    <UserContext.Provider value={{ user, setUser }}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider> */
        <Container>
            <RetangularButton title={'Cadastrar'} />
        </Container>
    );
}

export default App