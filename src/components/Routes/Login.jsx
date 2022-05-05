/* import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import axios from "axios"; */

import Container from "../Layout/Container";
import RetangularButton from "../Layout/RetangularButton";
import Input from "../Layout/Input";

function Login() {

  return (
    <Container>
        <Input type="email" placeholder='E-mail' />
        <RetangularButton title={'Cadastrar'} />
    </Container>
  );
}

export default Login;