// import logo from './logo.svg';

import "./App.css";
// import About from './Components/About';
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";

function App() {
	const [mode, setMode] = useState("dark");

	const toggleMode = () => {
		if (mode == "light") {
			setMode("dark");
			document.body.style.backgroundColor = "#000066";
		} else {
			setMode("light");
			document.body.style.backgroundColor = "white";
		}
	};

	return (
		<>
			<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />

			<div className="container my-3">
				<TextForm heading="Enter your text here" />

				{/* <About/> */}
			</div>
		</>
	);
}
export default App;
