import "./App.css";
import React, { useEffect } from "react";
import { CSSProperties } from "react";
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
		document.body.style.backgroundColor = currentPalette.pageBackground;
	}, [currentPalette]);

	const style: CSSProperties = {
		backgroundColor: currentPalette.pageBackground,
	};

	return (
		<div style={style}>
			<CategoriesCard palette={currentPalette} />
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
