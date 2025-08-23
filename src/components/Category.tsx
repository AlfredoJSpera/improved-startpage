import { CSSProperties } from "react";
import { HEX } from "../utils/palette";

interface props {
	accent: HEX;
	image: string;
	name: string;
}

/**
 * The main component of the page.
 */
function Category({ accent, image, name }: props) {
	const style: CSSProperties = {
		boxShadow: `inset -2px 0 ${accent}`,
	};

	return (
		<div className="category">
			<div className="category-left-section">
				<img src={image} alt=""></img>
			</div>
			<div className="category-right-section" style={style}>
				<h2>{name}</h2>
			</div>
		</div>
	);
}

export default Category;
