import React, { useEffect } from "react";
import "./App.css";
import CategoriesCard from "./components/CategoriesCard";
import { CSSProperties } from "react";
import { defaultMocha, defaultLatte, Palette } from "./utils/palette";
import useLocalStorage from "./hooks/useLocalStorage";

const PALETTE_KEY = "currentPalette";
const STORED_PALETTES_KEY = "allPalettes";

function App() {
	const [storedPalettes, setStoredPalettes] = useLocalStorage<
		Record<string, Palette>
	>(STORED_PALETTES_KEY, {
		"Catppuccin Mocha": defaultMocha,
		"Catppuccin Latte": defaultLatte,
	});
	const [currentPaletteKey, setCurrentPaletteKey] = useLocalStorage<string>(
		PALETTE_KEY,
		"Catppuccin Mocha"
	);

	const currentPalette: Palette = storedPalettes[currentPaletteKey];

	useEffect(() => {
		document.body.style.backgroundColor = currentPalette.pageBackground;
	}, [currentPalette, currentPaletteKey, storedPalettes]);

	let style: CSSProperties = {
		backgroundColor: currentPalette.pageBackground,
	};

	return (
		<div style={style}>
			<CategoriesCard palette={currentPalette} />
			<p>Current palette: {currentPaletteKey}</p>
			<select
				value={currentPaletteKey}
				onChange={(e) => setCurrentPaletteKey(e.target.value)}
			>
				{Object.keys(storedPalettes).map((key) => (
					<option key={key} value={key}>
						Set {key}
					</option>
				))}
			</select>
		</div>
	);
}

export default App;
