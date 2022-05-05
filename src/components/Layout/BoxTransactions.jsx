
import styled from 'styled-components';

function BoxTransactions() {

  return (
    <Container>
			<ul>
					<li>
							<span>
									<small>30/11</small>
									<strong>Amoço mãe</strong>
							</span>
							<strong>38.50</strong>
					</li>
			</ul>
			<section>
					<strong>SALDO</strong>
					<strong>2345.39</strong>
			</section>
		</Container>
  );
}

export default BoxTransactions;

const Container = styled.article`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	width: 100%;
	height: 60%;

	margin-bottom: 0.8rem;

	padding: 10px;

	background-color: var(--color-white);

	li {
			display: flex;
			justify-content: space-between;
	}

	li span small {
			color: var(--color-text-gray);
			margin-right: 8px;
	}    

	li>strong {
			color: red; 
	}

	section {
			display: flex;
			justify-content: space-between;
	}

	section strong {
			font-weight: 700;
	}

	section strong:last-child {
			color: green;
	}
`

