import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Button from '../Layout/Button';
import Container from "../Layout/Container";
import UserContext from '../../hooks/UserContext';
import SquareButton from '../Layout/SquareButton';
import BoxTransactions from '../Layout/BoxTransactions';

function Trasactions() {
	const [transactions, setTransactions] = useState()
	const {user, url} = useContext(UserContext).context;

	useEffect(() => {
		const promise = axios.get(`${url}/get-transactions`, user.config)

		promise.then(res => {
			setTransactions(res.data)
		});
		promise.catch(e => alert(e.response.data));

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