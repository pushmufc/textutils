import React, { useState } from "react";

export default function TextForm(props) {
	const handleUpClick = () => {
		const newText = text.toUpperCase();
		setText(newText);
		props.showalert("Converted to Uppercase", "success");
	};

	const handleLoClick = () => {
		const newText = text.toLowerCase();
		setText(newText);
		props.showalert("Converted to Lowercase", "success");
	};

	const handleClearClick = () => {
		const newText = "";
		setText(newText);
		props.showalert("Text Cleared", "success");
	};

	const handleonChange = (event) => {
		console.log("On Change");
		setText(event.target.value);
	};

	const [text, setText] = useState("");
	return (
		<>
			<div
				style={{
					color: props.mode === "dark" ? "white" : "#16325B",
				}}>
				<h2>{props.heading}</h2>
				<div
					className="mb-3"
					style={{
						backgroundColor: props.mode === "dark" ? "#16325B" : "white",
						color: props.mode === "dark" ? "white" : "black",
					}}>
					<textarea
						className="form-control"
						value={text}
						onChange={handleonChange}
						style={{
							backgroundColor: props.mode === "dark" ? "grey" : "white",
							color: props.mode === "dark" ? "white" : "black",
							caretColor: "lime",
						}}
						id="MyBox"
						rows="8"></textarea>
				</div>
				<button className="btn btn-primary mx-2" onClick={handleUpClick}>
					{" "}
					Convert to Upper Case
				</button>
				<button className="btn btn-primary" onClick={handleLoClick}>
					{" "}
					Convert to Lower Case
				</button>
				<button className="btn btn-primary mx-2" onClick={handleClearClick}>
					{" "}
					Clear Text
				</button>
			</div>
			<div
				className="container my-3"
				style={{
					color: props.mode === "dark" ? "white" : "black",
				}}>
				<h1>Your Text Summary</h1>
				<p>
					{" "}
					{text.split(" ").length} words and {text.length} characters
				</p>
				<h2>Preview</h2>
				<p>{text.length > 0 ? text : "Enter Your text to see preview"}</p>
			</div>
		</>
	);
}
