// IMPPORT USESTATE FROM REACT
import React, { useState } from "react";

const Offers = () => {
	const [order, setorder] = useState(0);

	return (
		<div className=" flex justify-center">
			<div className=" flex justify-center items-center gap-4 w-[90%]">
				<div className=" border-b-2 w-auto text-center border-[#B6B0AA] hover:border-y-2 hover:border-[#FF8450]">
					<p className=" font-semibold py-2 px-14 text-[14px] uppercase text-[#B6B0AA]  hover:text-[#FF8450]">
						ALL
					</p>
				</div>
				<div className=" border-b-2 w-auto text-center border-[#B6B0AA] hover:border-y-2 hover:border-[#FF8450] ">
					<p className=" font-semibold py-2 px-14 text-[14px] uppercase text-[#B6B0AA] hover:text-[#FF8450]">
						experience and packages
					</p>
				</div>
				<div className=" border-b-2 w-auto text-center border-[#B6B0AA] hover:border-y-2 hover:border-[#FF8450] ">
					<p className=" font-semibold py-2 px-14 text-[14px] uppercase text-[#B6B0AA] hover:text-[#FF8450]">
						staying with us
					</p>
				</div>
				<div className=" border-b-2 w-auto text-center border-[#B6B0AA] hover:border-y-2 hover:border-[#FF8450] ">
					<p className=" font-semibold py-2 px-14 text-[14px] uppercase text-[#B6B0AA] hover:text-[#FF8450]">
						food & Drinks
					</p>
				</div>
			</div>
		</div>
	);
};

export default Offers;
