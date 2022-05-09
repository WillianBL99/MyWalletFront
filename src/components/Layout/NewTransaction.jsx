import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import UserContext from '../../hooks/UserContext';

import Button from './Button';
import Input from "../Layout/Input";
import Container from "../Layout/Container";
import RetangularButton from "../Layout/RetangularButton";

function NewTransaction({operation}) {
  const [transactionData, setTransactionData] = useState({
    operation,
    price:0, 
    description:''
  });
  const {user, url} = useContext(UserContext).context;
  const navigate = useNavigate();
  const title = operation === 'entry'?'entrada':'saida'

  const handleEntry = (event) => {
    event.preventDefault();
    const promise = axios.post(
      `${url}/post-transaction`,
      transactionData,
      user.config
    );
    promise.then(() => {
      navigate('/transactions');
    });
    promise.catch(error => {
      alert(error.response.data)
    });
  }

  const assembleHeader = () => {
    return (
      <header>
				<Button 
          to={'/transactions'} 
          ion_icon='arrow-back-outline' 
          alert='Deseja cancelar transação?'
        />
        <h1>Nova {title}</h1>
        <span></span>
      </header>
    )
  }

  return (
    <ContainerExtended>
      {assembleHeader()}
      <form onSubmit={handleEntry}>
        <Input 
          min='0'
          step='0.01'
          type='number' 
          placeholder='Valor' 
          value={transactionData.price}
          onChange={e => {setTransactionData({
            ...transactionData,
            price: parseFloat(e.target.value)
          })}} 
        />
        <Input 
          type='text' 
          placeholder='Descrição' 
          value={transactionData.description}
          onChange={e => {setTransactionData({
            ...transactionData,
            description: e.target.value
          })}} 
        />
        <RetangularButton type='submit' title={`Salvar ${title}`} />
      </form>
    </ContainerExtended>
  );
}

export default NewTransaction;

const ContainerExtended = styled(Container)`
  justify-content: start;

  header {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  header ion-icon{
    font-size: 1.4rem;
    color: var(--color-text-white);
  }
  
  h1 {
    width: 100%;
    margin-bottom: 2rem;
    text-align: center;

    font-weight: 700;
    font-size: var(--font-size-header);
    color: var(--color-text-white);
  }
`
