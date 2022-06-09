const Operators = ({ handleClick }) => {
	const operatorButtons = ["+", "-", "*", "/", "="];

	return (
		<div>
			{operatorButtons.map((button) => (
				<button key={button} onClick={handleClick}>
					{button}
				</button>
			))}
		</div>
	);
};

export default Operators;
