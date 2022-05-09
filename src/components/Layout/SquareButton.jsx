import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

function SquareButton({title, ion_icon, to}){
    const navigate = useNavigate();

    return (
        <Button onClick={() => navigate(to?to:'')}>
            <ion-icon name={ion_icon}></ion-icon>
            <p>{title}</p>
        </Button>
    );
}

export default SquareButton;

const Button = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 100%;
    height: 5rem;

    padding: 5px;
    border-radius: var(--radio-button);

    font-size: var(--font-size-button);

    background-color: var(--color-button);
    color: var(--color-text-white);

    p {
        text-align: left;
    }
`
