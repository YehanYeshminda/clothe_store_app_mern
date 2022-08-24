import Product from '../models/Products';

// getting all the products from the database
export const getAllProducts = async (req, res, next) => {
	let products;

	try {
		products = await Product.find();
	} catch (error) {
		return console.log(error);
	}

	if (!products) {
		return res.status(404).json({ message: 'No Products are found in the DB' });
	}

	return res.status(200).json({ products });
};

// adding products into the database
export const addNewProducts = async (req, res, next) => {
	const {
		ProductName,
		ProductDesc,
		ProductImage,
		ProductPrice,
		ProductCatergory,
		Ratings,
	} = req.body;

	const newProduct = new Product({
		ProductName,
		ProductDesc,
		ProductImage,
		ProductPrice,
		ProductCatergory,
		Ratings,
	});

	try {
		await newProduct.save();
	} catch (error) {
		return console.log(error);
	}

	res.status(200).json(newProduct);
};

export const getSingleProducts = async (req, res, next) => {
	const id = req.params.id;

	let singleProduct;

	try {
		singleProduct = await Product.findById(id);
	} catch (error) {
		return console.log(error);
	}

	if (!singleProduct) {
		return res.status(404).json({ message: 'No Products found using this id' });
	}

	return res.status(200).json({ singleProduct });
};
