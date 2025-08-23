//* Source: https://stackoverflow.com/a/60965885
//? CSS Class: App.css

import React, { useState, CSSProperties } from "react";
import { HEX } from "../utils/palette";
import { SketchPicker } from "react-color";

interface props {
	color: HEX;
}

function ColoredCircle({ color }: props) {
	const [displayColorPicker, setDisplayColorPicker] = useState(false);

	const handleClick = () => {
		setDisplayColorPicker(!displayColorPicker);
	};

	const handleClose = () => {
		setDisplayColorPicker(false);
	};

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
			{displayColorPicker && (
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
