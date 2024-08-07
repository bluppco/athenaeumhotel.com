// IMPORT USE STATE
import React, { useState } from "react";

const Slider = ({ review_data }) => {
	// ON CLICK LOGIC
	const [currentIndex, setCurrentIndex] = useState(0);

	// Function to go to the next review
	const nextReview = () => {
		setCurrentIndex((currentIndex) =>
			currentIndex === review_data.length - 1 ? 0 : currentIndex + 1
		);
	};

	// Function to go to the previous review
	const prevReview = () => {
		setCurrentIndex((currentIndex) =>
			currentIndex === 0 ? review_data.length - 1 : currentIndex - 1
		);
	};

	return (
		<div>
			<div className="flex justify-center gap-6">
				<button
					className="h-8 w-14"
					onClick={() => {
						prevReview();
					}}
				>
					<img src="/icons/left_arrow.svg" alt="left arrow" />
				</button>
				<div className="flex flex-col gap-5 w-[500px] items-center justify-center">
					<p className="font-sans text-[#3E5667] text-center font-semibold tracking-wide">
						{review_data[currentIndex].data.description}
					</p>
					<p className="uppercase font-sans font-bold text-[#A9A39C] text-[18px] tracking-widest">
						{review_data[currentIndex].data.title}
					</p>
				</div>
				<button
					className="h-8 w-14"
					onClick={() => {
						nextReview();
					}}
				>
					<img src="/icons/right_arrow.svg" alt="right arrow" />
				</button>
			</div>
		</div>
	);
};

export default Slider;
