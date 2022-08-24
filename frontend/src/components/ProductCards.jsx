import ProductShoe from '../assets/13.jpg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCards = ({
	id,
	ProductName,
	ProductPrice,
	ProductImage,
	ProductCatergory,
}) => {
	const [newOld, setNewOld] = useState('New');

	return (
		<div className="">
			<Link to={`/product/${id}`}>
				<div className="bg-gray-100 max-w-260 w-260 h-400 relative hover:drop-shadow-xl group">
					<img src={ProductImage} alt="" className="w-full cover max-h-52" />
					<p
						className={`absolute top-0 ${
							newOld === 'New' ? 'bg-green-400' : 'bg-red-400'
						} px-6 py-1 rounded-sm`}
					>
						New
					</p>

					<p className="flex justify-center items-center mt-3 text-black font-semibold text-base">
						{ProductName}
					</p>

					<p className="flex justify-center items-center mt-1 text-black font-normal text-base">
						{ProductCatergory}
					</p>

					<p className="flex justify-center items-center mt-1 text-black font-normal text-lg">
						$<span className="text-red-700">{ProductPrice}</span>
					</p>

					<div className="w-full absolute bottom-0 invisible group-hover:visible group-hover:animate-opacitySetButton">
						<button
							type="button"
							className="uppercase bg-red-600 w-full py-1 cursor-pointer text-white font-semibold hover:bg-black transition-all duration-200 ease-in-out"
						>
							add to cart
						</button>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default ProductCards;
