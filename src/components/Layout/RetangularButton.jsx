import styled from 'styled-components';

function RetangularButton({title}){
    return (
        <Button>{title}</Button>
    );
}

export default RetangularButton;

const Button = styled.button`
    width: 100%;
    height: 3rem;

    border-radius: var(--radio-button);

    font-size: var(--font-size-button);

    background-color: var(--color-button);
    color: var(--color-text-white)
`
