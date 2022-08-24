import React, { useState } from 'react';
import { useStateValue } from '../store/StateProvider';

const CartAbs = () => {
	const [{ ItemProducts }, dispatch] = useStateValue();
	let val = 0;
	return (
		<div className="max-w-7xl mx-auto w-full">
			{/* items */}
			{ItemProducts &&
				ItemProducts.map((ele) => {
					let numItem = Number(ele.ProductPrice);
					val += numItem;

					return (
						<div className="bg-gray-200 h-52 max-w-6xl mx-auto flex justify-around items-center my-10 max-h-52">
							<div className="w-44">
								<img
									src={ele.ProductImage}
									alt=""
									srcset=""
									className="object-contain w-full h-44"
								/>
							</div>
							<div className="w-44 text-center">{ele.ProductName}</div>
							<div className="w-44 text-center">${ele.ProductPrice}</div>
							<div className="w-44 text-center">
								<button type="button" className="bg-red-300 px-5 py-3">
									Remove
								</button>
							</div>
						</div>
					);
				})}

			<div className="flex items-center justify-center text-2xl">
				Price : {val}
			</div>
			<div className="flex items-center justify-center text-2xl">
				<button type="button" className="bg-orange-300 px-5 py-3">
					Check Out
				</button>
			</div>
		</div>
	);
};

export default CartAbs;
