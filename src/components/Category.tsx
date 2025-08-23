import { CSSProperties } from "react";
import blueGIF from "./blue.gif";
import { HEX } from "../utils/palette";

interface props {
	accent: HEX;
}

/**
 * The main component of the page.
 */
function Category({ accent }: props) {
	const style: CSSProperties = {
		boxShadow: `inset -1.5px 0 ${accent}`,
	};

	return (
		<>
			<div className="category-left-section">
				<img src={blueGIF} alt=""></img>
			</div>
			<div className="category-right-section" style={style}>
				<p>Hello</p>
				<p>Text</p>
			</div>
		</>
	);
}

export default Category;
