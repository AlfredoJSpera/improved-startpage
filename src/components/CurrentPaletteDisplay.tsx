import { CSSProperties } from "react";
import { Palette } from "../utils/palette";
import ColoredCircle from "./ColoredCircle";

interface props {
	palette: Palette;
}

function CurrentPaletteDisplay({ palette }: props) {
	const paletteKeys = Object.keys(palette) as (keyof Palette)[];

	return (
		<table className="current-palette-display">
			<thead>
				<tr>
					<th>Variable Name</th>
					<th>Value</th>
				</tr>
			</thead>
			<tbody>
				{paletteKeys.map((key) => (
					<tr key={key}>
						<td>{key}</td>
						<td>
							{palette[key]}
							<ColoredCircle color={palette[key]} />
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default CurrentPaletteDisplay;
