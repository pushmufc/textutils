// import logo from "./logo.svg";

import "./App.css";
import Alerts from "./Components/Alerts";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React from "react";
import { useState } from "react";
import {
	HashRouter as Router,
	Switch,
	Route,
	Link,
	Routes,
} from "react-router-dom";

function App() {
	const [mode, setMode] = useState("light");

	const [alert, setAlert] = useState(null);

	const showalert = (message, type) => {
		setAlert({
			msg: message,
			type: type,
		});

		setTimeout(() => {
			setAlert(null);
		}, 2000);
	};

	function toggleMode() {
		if (mode === "light") {
			setMode("dark");
			document.body.style.backgroundColor = "grey";
			showalert("Dark Mode has been enabled", "success");
		} else {
			setMode("light");
			document.body.style.backgroundColor = "white";
			showalert("Light Mode has been enabled", "success");
		}
	}

	return (
		<>
			<Router>
				<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
				<Alerts alert={alert} />
				<div className="container my-3">
					<Routes>
						<Route path="/" exact>
							<TextForm
								showalert={showalert}
								heading="Enter your text here"
								mode={mode}
							/>
						</Route>
						<Route path="/about">
							<About />
						</Route>
					</Routes>
				</div>
			</Router>
		</>
	);
}
export default App;
