import React from "react";
import "./App.css";
import CategoriesCard from "./components/CategoriesCard";
import { CSSProperties } from "react";
import { defaultMocha as palette } from "./utils/palette";

function App() {
	// Set the page background color
	document.body.style.backgroundColor =
		palette.componentColors.pageBackground;

	let style: CSSProperties = {
		backgroundColor: palette.componentColors.pageBackground,
	};

	return (
		<div style={style}>
			<CategoriesCard palette={palette} />
			<button>Set mocha</button>
			<button>Set latte</button>
		</div>
	);
}

export default App;
