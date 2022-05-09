import '../../styled/css/reset.css';
import '../../styled/css/index.css'

import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import persistUser from '../../utils/persistUser';
import UserContext from '../../hooks/UserContext';

import Login from '../Routes/Login';
import NewExit from '../Routes/NewExit';
import Register from '../Routes/Register';
import NewEntry from '../Routes/NewEntry';
import Trasactions from '../Routes/Transactions';

function App() {
	const [user, setUser] = useState(persistUser);
	const url = 'https://my-wallet-api-back.herokuapp.com';

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