import { Palette } from "../utils/palette";

interface props {
	/** The name/key of the currently active palette. */
	currentPaletteKey: string;
	/** An object containing all available palettes, with keys as palette names. */
	storedPalettes: Record<string, Palette>;
	/** A function to update the current palette key in the parent component's state. */
	setCurrentPaletteKey: (value: string) => void;
}

/**
 * A dropdown menu for selecting a color palette.
 *
 * @param currentPaletteKey The name/key of the currently active palette.
 * @param storedPalettes An object containing all available palettes, with keys as palette names.
 * @param setCurrentPaletteKey A function to update the current palette key in the parent component's state.
 */
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
