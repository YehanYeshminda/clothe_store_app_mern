import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
	const params = useParams();
	const [products, setProducts] = useState();

	const id = params.id;

	// get request to all the blogs using axios
	const sendRequest = async () => {
		const res = await axios
			.get(`http://localhost:5000/api/product/${id}`)
			.catch((err) => console.log(err));

		const data = await res.data;
		return data;
	};

	useEffect(() => {
		sendRequest().then((data) => setProducts(data.singleProduct));
	}, []);

	// console.log(products);

	return <div className="max-w-5xl mx-auto"></div>;
};

export default ProductDetails;
