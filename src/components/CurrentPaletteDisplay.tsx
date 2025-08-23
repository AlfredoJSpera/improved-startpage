import { Palette } from "../utils/palette";
import ColoredCircle from "./ColoredCircle";

interface props {
	/** The palette object containing color variables to be displayed. */
	palette: Palette;
}

/**
 * A table that displays all the color variables and their values from a given palette object.
 *
 * @param palette The palette object containing color variables to be displayed.
 */
function CurrentPaletteDisplay({ palette }: props) {
	/** Holds all the properties (variable names) from the palette. */
	const paletteProperties = Object.keys(palette) as (keyof Palette)[];

	return (
		<table className="current-palette-display">
			<thead>
				<tr>
					<th>Variable Name</th>
					<th>Value</th>
				</tr>
			</thead>
			<tbody>
				{paletteProperties.map((property) => (
					<tr key={property}>
						<td>{property}</td>
						<td>
							{palette[property]}
							<ColoredCircle color={palette[property]} />
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default CurrentPaletteDisplay;
