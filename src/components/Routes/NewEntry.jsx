import styled from 'styled-components';

import Container from "../Layout/Container";
import RetangularButton from "../Layout/RetangularButton";
import Input from "../Layout/Input";
import { useContext, useState } from 'react';
import axios from 'axios';
import UserContext from '../../hooks/UserContext';
import { useNavigate } from 'react-router-dom';

function NewEntry() {
  const [entryData, setEntryData] = useState({price:0, description:'', operation:'entry'});
  const {user, url} = useContext(UserContext).context;
  const navigate = useNavigate();

  function handleEntry(event){
    event.preventDefault();
    console.log(`${url}/post-transaction`,
    entryData,
    user.config)
    const promise = axios.post(
      `${url}/post-transaction`,
      entryData,
      user.config
    );
    promise.then(() => {
      console.log('foi')
      navigate('/transactions');
    })
    promise.catch(error => console.log(error))

  }

  return (
    <ContainerExtended>
      <h1>Nova entrada</h1>
      <form onSubmit={handleEntry}>
        <Input 
          type='number' 
          placeholder='Valor' 
          value={entryData.price}
          min='0'
          step='0.01'
          onChange={e => {
            setEntryData({...entryData, price: parseFloat(e.target.value)})
          }} 
        />
        <Input type='text' placeholder='Descrição' value={entryData.description}
            onChange={e => {setEntryData({...entryData, description: e.target.value})}} 
        />
        <RetangularButton type='submit' title='Salvar entrada' />
      </form>
    </ContainerExtended>
  );
}

export default NewEntry;

const ContainerExtended = styled(Container)`
    justify-content: start;

    h1 {
        width: 100%;
        margin-bottom: 2rem;
        text-align: left;

        font-weight: 700;
        font-size: var(--font-size-header);
        color: var(--color-text-white);
    }
`
