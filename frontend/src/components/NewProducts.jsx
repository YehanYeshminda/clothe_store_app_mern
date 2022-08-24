import ProductCards from '../components/ProductCards';
import axios from 'axios';
import { useEffect, useState } from 'react';

const NewProducts = () => {
	const [products, setProducts] = useState();

	// get request to all the blogs using axios
	const sendRequest = async () => {
		const res = await axios
			.get('http://localhost:5000/api/product')
			.catch((err) => console.log(err));

		const data = await res.data;
		return data;
	};

	useEffect(() => {
		sendRequest().then((data) => setProducts(data.products));
	}, []);

	// console.log(products);

	return (
		<div className="">
			<div className="text-center mt-10 text-3xl relative">
				Products
				<div className="w-20 py-0.5 bg-red-500 absolute left-[46%]"></div>
			</div>
			<div className="grid grid-cols-3 gap-4 w-full h-[70vh] mt-10">
				{products &&
					products.map((ele) => {
						const {
							_id,
							ProductName,
							ProductPrice,
							ProductImage,
							ProductCatergory,
						} = ele;

						return (
							<ProductCards
								id={_id}
								ProductName={ProductName}
								ProductPrice={ProductPrice}
								ProductImage={ProductImage}
								ProductCatergory={ProductCatergory}
							/>
						);
					})}
			</div>
		</div>
	);
};

export default NewProducts;
