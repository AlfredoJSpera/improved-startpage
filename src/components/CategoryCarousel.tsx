import { CSSProperties, useState } from "react";
import "../css/carousel.css";
import Category from "./Category";
import { HEX } from "../utils/palette";

interface props {
	categories: {
		name: string;
		image: string;
		accent: HEX;
	}[];
	activeCategoryIndex: number;
	setActiveCategoryIndex: React.Dispatch<React.SetStateAction<number>>;
}

function CategoryCarousel({
	categories,
	activeCategoryIndex,
	setActiveCategoryIndex,
}: props) {
	const goToPrevious = () => {
		setActiveCategoryIndex((prevIndex) =>
			prevIndex === 0 ? categories.length - 1 : prevIndex - 1
		);
	};

	const goToNext = () => {
		setActiveCategoryIndex((prevIndex) =>
			prevIndex === categories.length - 1 ? 0 : prevIndex + 1
		);
	};

	const moveToOtherCategoryTransform: CSSProperties = {
		transform: `translateX(-${activeCategoryIndex * 100}%)`,
	};

	return (
		<div className="active-category-mask">
			<div
				className="categories-track"
				style={moveToOtherCategoryTransform}
			>
				{categories.map((category, index) => (
					<div key={index} className="category-slide">
						<Category
							accent={category.accent}
							image={category.image}
							name={category.name}
						></Category>
					</div>
				))}
			</div>

			{/* Navigation Dots */}
			<div className="dots-container">
				{categories.map((_, idx) => (
					<button
						key={idx}
						onClick={() => setActiveCategoryIndex(idx)}
						className={`dot-button ${
							activeCategoryIndex === idx ? "active" : ""
						}`}
						aria-label={`Go to slide ${idx + 1}`}
					></button>
				))}
			</div>

			{/* Previous Button */}
			<button
				onClick={goToPrevious}
				className="nav-button left"
				aria-label="Previous slide"
			>
				<svg
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M15 19l-7-7 7-7"
					></path>
				</svg>
			</button>
			{/* Next Button */}
			<button
				onClick={goToNext}
				className="nav-button right"
				aria-label="Next slide"
			>
				<svg
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M9 5l7 7-7 7"
					></path>
				</svg>
			</button>
		</div>
	);
}

export default CategoryCarousel;
