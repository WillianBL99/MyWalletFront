import {Link, useLocation, useNavigate} from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Container from "../Layout/Container";
import RetangularButton from "../Layout/RetangularButton";
import Input from "../Layout/Input";
import UserContext from '../../hooks/UserContext';

function Login() {
  const [loginData, setLoginData] = useState({email:'', password: ''});
	const {persistUser} = useContext(UserContext);
  const {state} = useLocation();
  const navigate = useNavigate();
  
  function handleLogin(event) {
    event.preventDefault();

    const promise = axios.post('http://localhost:5000/sign-in',loginData);

    promise.then((res) => {
      storeLogin(res.data);
      navigate('/transactions');
    });

    promise.catch(error => {
      alert(error.response.data)
    });
  }

  function storeLogin(res){
    const {token, name, email} = res;
    const userInfo = {
      name,
      email,
      config: {headers: {Authorization: `Bearer ${token}`}}
    }

    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    persistUser(userInfo)
  }

  useEffect(() => {
    if(state){
      setLoginData({...state})
    }
  }, [state]);

  return (
    <ContainerExtended>
        <Logo>MyWallet</Logo>
        <Form onSubmit={handleLogin}>
          <Input type="email" placeholder='E-mail' value={loginData.email}
            onChange={e => {setLoginData({...loginData, email: e.target.value})}} 
          />
          <Input type='password' placeholder="Senha" value={loginData.password}
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
