import ProductShoe from '../assets/13.jpg';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../store/StateProvider';
import { actionType } from '../store/Reducer';

const ProductCards = ({ product }) => {
	const [items, setItems] = useState([]);
	const [{ ItemProducts, isLoggedIn }, dispatch] = useStateValue();

	const [newOld, setNewOld] = useState('New');

	const addToCart = () => {
		dispatch({
			type: actionType.SET_ITEMPRODUCTS,
			ItemProducts: items,
		});
	};

	useEffect(() => {
		addToCart();
	}, [items]);

	return (
		<div className="">
			<div className="bg-gray-100 max-w-260 w-260 h-400 relative hover:drop-shadow-xl group">
				<img
					src={product.ProductImage}
					alt=""
					className="w-full cover max-h-52"
				/>
				<p
					className={`absolute top-0 ${
						newOld === 'New' ? 'bg-green-400' : 'bg-red-400'
					} px-6 py-1 rounded-sm`}
				>
					New
				</p>

				<p className="flex justify-center items-center mt-3 text-black font-semibold text-base">
					{product.ProductName}
				</p>

				<p className="flex justify-center items-center mt-1 text-black font-normal text-base">
					{product.ProductCatergory}
				</p>

				<p className="flex justify-center items-center mt-1 text-black font-normal text-lg">
					$<span className="text-red-700">{product.ProductPrice}</span>
				</p>

				<div className="w-full absolute bottom-0 invisible group-hover:visible group-hover:animate-opacitySetButton">
					{!isLoggedIn ? (
						<Link to="/signup">
							<button
								type="button"
								className="uppercase bg-red-600 w-full py-1 cursor-pointer text-white font-semibold hover:bg-black transition-all duration-200 ease-in-out"
							>
								Login First
							</button>
						</Link>
					) : (
						<button
							onClick={() => setItems([...ItemProducts, product])}
							type="button"
							className="uppercase bg-red-600 w-full py-1 cursor-pointer text-white font-semibold hover:bg-black transition-all duration-200 ease-in-out"
						>
							Add to Cart
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProductCards;
