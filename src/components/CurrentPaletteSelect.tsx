import { Palette } from "../utils/palette";

interface props {
	currentPaletteKey: string;
	storedPalettes: Record<string, Palette>;
	setCurrentPaletteKey: (value: string) => void;
}

function CurrentPaletteSelect({
	currentPaletteKey,
	storedPalettes,
	setCurrentPaletteKey,
}: props) {
	return (
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
	);
}

export default CurrentPaletteSelect;
