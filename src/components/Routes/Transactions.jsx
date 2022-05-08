import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import BoxTransactions from '../Layout/BoxTransactions';

import Container from "../Layout/Container";
import SquareButton from '../Layout/SquareButton';
import UserContext from '../../hooks/UserContext';

function Trasactions() {
	const [transactions, setTransactions] = useState()
	const {user, url} = useContext(UserContext).context;

	useEffect(() => {
		const promise = axios.get(`${url}/get-transactions`, user.config)

		promise.then(res => {
			setTransactions(res.data)
		});
		promise.catch(e => console.log(e))

	}, [url, user]);

  return (
    <ContainerExtended>
        <header>
            <h1>Olá, {user.name}</h1>
						<Button to={'/'} ion_icon='exit-outline' />
        </header>
        <BoxTransactions transactions={transactions} />
        <section>
            <SquareButton to='newentry' title='Nova entrada' ion_icon='add-circle-outline' />
            <Space />
            <SquareButton to='newexit' title='Nova saída' ion_icon='remove-circle-outline' />
        </section>
    </ContainerExtended>
  );
}

export default Trasactions;

const ContainerExtended = styled(Container)`
    justify-content: flex-start;

    header {
        display: flex;
        justify-content: space-between;
        width: 100%;

        margin-bottom: 1rem;
    }

    header h1,
    header ion-icon {
        font-weight: 700;
        font-size: var(--font-size-header);
        color: var(--color-text-white);
    }

    section {
        display: flex;
        width: 100%;
    }
`

const Space = styled.div`
    width: 1.6rem;
`

function Button({ion_icon, to}){
	const navigate = useNavigate()

	function logout(){
		if(!window.confirm('Deseja sair?')) return;
		localStorage.clear();
		navigate(to?to:'');
	}

	return (
		<ion-icon
			onClick={logout}
			name={ion_icon}
		></ion-icon>
	)
}