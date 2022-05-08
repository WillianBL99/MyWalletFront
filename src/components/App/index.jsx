import '../../styled/css/reset.css';
import '../../styled/css/index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContext from '../../hooks/UserContext';
import Login from '../Routes/Login';
import Register from '../Routes/Register';
import Trasactions from '../Routes/Transactions';
import NewEntry from '../Routes/NewEntry';
import NewExit from '../Routes/NewExit';
import { useState } from 'react';
import persistUser from '../../utils/persistUser'

function App() {
	const [user, setUser] = useState(persistUser);
	const url = 'http://localhost:5000';

	return (
		<UserContext.Provider value={{context: {user, setUser, url}}}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Login />} />
					<Route path='register' element={<Register />} />
					<Route path='transactions' element={<Trasactions />} />
					<Route path='transactions/newentry' element={<NewEntry />} />
					<Route path='transactions/newexit' element={<NewExit />} />
				</Routes>
			</BrowserRouter>
		</UserContext.Provider>
	);
}

export default App