import "./App.css";
import React, { useEffect } from "react";
import CategoriesCard from "./components/CategoriesCard";
import useLocalStorage from "./hooks/useLocalStorage";
import CurrentPaletteDisplay from "./components/CurrentPaletteDisplay";
import CurrentPaletteSelect from "./components/CurrentPaletteSelect";
import { Palette } from "./utils/palette";
import {
	STORED_PALETTES_KEY,
	PALETTE_KEY,
	DEFAULT_PALETTES,
} from "./utils/constants";
import { toKebabCase } from "./utils/helper";

function App() {
	const [storedPalettes, setStoredPalettes] = useLocalStorage(
		STORED_PALETTES_KEY,
		DEFAULT_PALETTES
	);
	const [currentPaletteKey, setCurrentPaletteKey] = useLocalStorage<string>(
		PALETTE_KEY,
		Object.keys(DEFAULT_PALETTES)[0]
	);
	const currentPalette: Palette = storedPalettes[currentPaletteKey];

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
		<div className="app">
			<CategoriesCard />
			<CurrentPaletteSelect
				currentPaletteKey={currentPaletteKey}
				storedPalettes={storedPalettes}
				setCurrentPaletteKey={setCurrentPaletteKey}
			/>
			<CurrentPaletteDisplay palette={currentPalette} />
		</div>
	);
}

export default App;
