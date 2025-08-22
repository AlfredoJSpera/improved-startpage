import { CSSProperties } from "react";
import { Palette } from "../utils/palette";

interface props {
	palette: Palette;
}

function CategoriesCard({ palette }: props) {
	let style: CSSProperties = {
		backgroundColor: palette.componentColors.categoriesCardBackground,
		color: palette.componentColors.categoryText,
		width: "100px",
	};

	return <div style={style}>Hello</div>;
}

export default CategoriesCard;
