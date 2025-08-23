import "./css/App.css";
import React, { useEffect } from "react";
import Category from "./components/Category";
import useLocalStorage from "./hooks/useLocalStorage";
import { Palette } from "./utils/palette";
import {
	LOCALSTORAGE_STORED_PALETTES_KEY,
	LOCALSTORAGE_CURRENT_PALETTE_KEY,
	DEFAULT_PALETTES,
} from "./utils/constants";
import { toKebabCase } from "./utils/helper";

function App() {
	const [storedPalettes, setStoredPalettes] = useLocalStorage(
		LOCALSTORAGE_STORED_PALETTES_KEY,
		DEFAULT_PALETTES
	);

	if (Object.keys(storedPalettes).length === 0) {
		console.warn("Empty palettes object, setting defaults.");
		setStoredPalettes(DEFAULT_PALETTES);
	}

	const [currentPaletteName, setCurrentPaletteName] = useLocalStorage<string>(
		LOCALSTORAGE_CURRENT_PALETTE_KEY,
		Object.keys(DEFAULT_PALETTES)[0]
	);
	const currentPalette: Palette = storedPalettes[currentPaletteName];

	useEffect(() => {
		// Iterate over each key-value pair in the currentPalette
		(Object.keys(currentPalette) as (keyof Palette)[]).forEach((key) => {
			// Convert to CSS variable naming
			const cssVarName = `--${toKebabCase(key)}`;

			// Set the CSS variable on the document's root element
			document.documentElement.style.setProperty(
				cssVarName,
				currentPalette[key]
			);
		});
	}, [currentPalette]);

	return (
		<div className="category-container">
			<Category accent="#2396bd" />
		</div>
	);
}

export default App;
