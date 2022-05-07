import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import BoxTransactions from '../Layout/BoxTransactions';

import Container from "../Layout/Container";
import SquareButton from '../Layout/SquareButton';
import UserContext from '../../hooks/UserContext';

function Trasactions() {
	const [transactions, setTransactions] = useState()
	const {user} = useContext(UserContext);
	const token = undefined;

	useEffect(() => {
		const promise = axios.get('http://localhost:5000/get-transactions', user.config)

		promise.then(res => {
			console.log(res);
			setTransactions(res.data)
		});
		promise.catch(e => console.log(e))

	}, []);

  return (
    <ContainerExtended>
        <header>
            <h1>Olá, Fulano</h1>
            <ion-icon name="exit-outline"></ion-icon>
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

