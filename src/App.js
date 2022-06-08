import { useState } from "react";
import "./App.css";
import Numbers from "./components/Numbers";
import Operators from "./components/Operators";

const App = () => {
	const [input, setInput] = useState("");
	return (
		<div className="App">
			<h1>My Calculator</h1>
			<Operators />
			<Numbers />
		</div>
	);
};

export default App;
