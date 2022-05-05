import styled from 'styled-components';

import Container from "../Layout/Container";
import RetangularButton from "../Layout/RetangularButton";
import Input from "../Layout/Input";

function NewEntry() {

  return (
    <ContainerExtended>
        <h1>Nova entrada</h1>
        <Input type='number' placeholder='Valor' />
        <Input type='text' placeholder='Descrição' />
        <RetangularButton title='Salvar entrada' />
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
