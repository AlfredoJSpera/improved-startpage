import React, { useState, useEffect } from "react";
import "./App.css";
import CategoriesCard from "./components/CategoriesCard";
import { CSSProperties } from "react";
import { defaultMocha, defaultLatte, Palette } from "./utils/palette";

const PALETTE_KEY = "currentPalette";
const ALL_PALETTES_KEY = "allPalettes";

function getAllPalettesFromStorage() {
	const stored = localStorage.getItem(ALL_PALETTES_KEY);
	const defaultObjects = {
		"Catppuccin Mocha": defaultMocha,
		"Catppuccin Latte": defaultLatte,
	};

	if (stored) {
		try {
			return JSON.parse(stored);
		} catch {
			return defaultObjects;
		}
	}
	return defaultObjects;
}

function getCurrentPaletteKeyFromStorage() {
	const stored = localStorage.getItem(PALETTE_KEY);

	if (stored) {
		return stored;
	}
	return "Catppuccin Mocha";
}

function App() {
	const [allPalettes, setAllPalettes] = useState(getAllPalettesFromStorage());
	const [currentPaletteKey, setCurrentPaletteKey] = useState(
		getCurrentPaletteKeyFromStorage()
	);

	const currentPalette: Palette =
		allPalettes[currentPaletteKey] || defaultMocha;

	useEffect(() => {
		document.body.style.backgroundColor = currentPalette.pageBackground;
		localStorage.setItem(PALETTE_KEY, currentPaletteKey);
		localStorage.setItem(ALL_PALETTES_KEY, JSON.stringify(allPalettes));
	}, [currentPalette, currentPaletteKey, allPalettes]);

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
				{Object.keys(allPalettes).map((key) => (
					<option key={key} value={key}>
						Set {key}
					</option>
				))}
			</select>
		</div>
	);
}

export default App;
