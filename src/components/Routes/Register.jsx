/* import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import axios from "axios"; */
import {Link} from 'react-router-dom'
import styled from 'styled-components';

import Container from "../Layout/Container";
import RetangularButton from "../Layout/RetangularButton";
import Input from "../Layout/Input";

function Login() {

  return (
    <ContainerExtended>
        <Logo>MyWallet</Logo>
        <Form>
          <Input type="text" placeholder='E-mail' />
          <Input type="email" placeholder='E-mail' />
          <Input type='password' placeholder="Senha" />
          <Input type='password' placeholder="Confirme a senha" />
          <RetangularButton title={'Registrar'} />
        </Form>
        <Link className="link" to={'/'}>
          Já tem uma conta? Entre agora!
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
    font-family: var(--font-main);
    font-weight: 700;
    color: var(--color-text-white)
  }
`
