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

function App() {
	const [user, setUser] = useState(persistUser);
	const url = 'http://localhost:5000';

	function persistUser() {
		const userInfo = localStorage.getItem('userInfo');
		if (userInfo) return JSON.parse(userInfo);
		return {};
	}

	return (
		<UserContext.Provider value={{ user, setUser, persistUser, url}}>
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