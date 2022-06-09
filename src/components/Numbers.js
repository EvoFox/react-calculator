const Numbers = ({handleClick}) => {
	const buttons = [
		"7",
		"8",
		"9",
		"4",
		"5",
		"6",
		"1",
		"2",
		"3",
		"c",
		"0",
		".",
		
	];
	return (
		<div>
			{buttons.map((button) => (
				<button key={button} onClick={handleClick}>{button}</button>
			))}
		</div>
	);
};

export default Numbers;
