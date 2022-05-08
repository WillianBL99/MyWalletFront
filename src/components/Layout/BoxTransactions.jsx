
import styled from 'styled-components';

function BoxTransactions({transactions}) {
	const showTransactions = () => {
		return (
			<ul>
				{transactions?.map( (transactio, id) => 
					<AssembleTrasaction key={id} transactio={transactio} />
				)}
			</ul>
		)
	}

	const showBalance = () => {
		let total = 0;

		transactions?.forEach(trasaction => {
			const {price, operation} = trasaction
			if(operation === 'entry') total += price;
			else total -= price;
		});

		return (
			<section>
				<strong>SALDO</strong>
				<strong>{total.toFixed(2)}</strong>
			</section>
		)
	}

  return (
		<Container>
			{showTransactions()}
			{showBalance()}
		</Container>
  );
}

export default BoxTransactions;



function AssembleTrasaction({transactio}) {
	const {date, description, price, operation} = transactio;
	const className = operation === 'entry'?'green':'red';
	return (
		<li>
			<span>
				<small>{date}</small>
				<strong>{description}</strong>
			</span>
			<strong className={className}>
				{price.toFixed(2)}
			</strong>
		</li>
	)
}

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
		margin-bottom: 0.25rem;
	}

	li span small {
		color: var(--color-text-gray);
		margin-right: 8px;
	}    

	strong.red {
		color: red; 
	}   

	strong.green {
		color: green; 
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

