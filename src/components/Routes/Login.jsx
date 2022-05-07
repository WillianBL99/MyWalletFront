import {Link, useLocation, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Container from "../Layout/Container";
import RetangularButton from "../Layout/RetangularButton";
import Input from "../Layout/Input";

function Login() {
  const [loginData, setLoginData] = useState({email:'', password: ''});
  const {state} = useLocation();
  const navigate = useNavigate();
  
  function handleLogin(event) {
    event.preventDefault();

    const promise = axios.post('http://localhost:5000/sign-in',loginData);
    promise.then((res) => {
      const {token} = res.data;
      navigate('/transactions', {state: {token}});
    });
    promise.catch(error => {
      console.log(error);
      alert(error.response.data)
    })

  }

  return (
    <ContainerExtended>
        <Logo>MyWallet</Logo>
        <Form onSubmit={handleLogin}>
          <Input type="email" placeholder='E-mail'
            onChange={e => {setLoginData({...loginData, email: e.target.value})}} 
          />
          <Input type='password' placeholder="Senha" 
            onChange={e => {setLoginData({...loginData, password: e.target.value})}} 
          />
          <RetangularButton type='submit' title={'Entrar'} />
        </Form>
        <Link className="link" to={'register'}>
          Não tem uma conta? Cadastre-se!
        </Link>
    </ContainerExtended>

  );
}

export default Login;

const Logo = styled.h1`

  margin-bottom: 1.5rem;

  font-family: var(--font-logo);
  font-size: var(--font-size-logo);

  color: var(--color-text-white);
`

const Form = styled.form`
  margin-bottom: 2rem;
`

const ContainerExtended = styled(Container)`
  a {
    font-weight: 700;
    color: var(--color-text-white)
  }
`
