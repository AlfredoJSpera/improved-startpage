//* Source: https://stackoverflow.com/a/60965885

import { useState, CSSProperties } from "react";
import { HEX } from "../utils/palette";
import { SketchPicker } from "react-color";

interface props {
	/** The HEX color value to be displayed in the circle. */
	color: HEX;
}

/**
 * Renders a colored circle that, when clicked, displays a color picker.
 * @param color The HEX color value to be displayed in the circle.
 */
function ColoredCircle({ color }: props) {
	const [isColorPickerVisible, setIsColorPickerVisible] = useState(false);

	/** Toggles the visibility of the color picker when clicking the colored circle. */
	const handleClick = () => {
		setIsColorPickerVisible(!isColorPickerVisible);
	};

	/** Hides the color picker when clicking the transparent overlay. */
	const handleClose = () => {
		setIsColorPickerVisible(false);
	};

	/** The color of the circle. */
	const style: CSSProperties = {
		backgroundColor: color,
	};

	return (
		<div>
			<span
				className="colored-circle"
				style={style}
				onClick={handleClick}
			/>
			{isColorPickerVisible && (
				<div style={{ position: "absolute", zIndex: 2 }}>
					<div
						style={{
							position: "fixed",
							top: 0,
							right: 0,
							bottom: 0,
							left: 0,
						}}
						onClick={handleClose}
					/>
					<SketchPicker color={color} />
				</div>
			)}
		</div>
	);
}

export default ColoredCircle;
