const Operators = () => {
	const operatorButtons = ["+", "-", "*", "/"];

	return (
		<div>
			{operatorButtons.map((button) => (
				<button key={button}>{button}</button>
			))}
		</div>
	);
};

export default Operators;
