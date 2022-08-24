import express from 'express';
import {
	addNewProducts,
	getAllProducts,
	getSingleProducts,
} from '../controllers/product-controller';

const ProductRouter = express.Router();

ProductRouter.get('/', getAllProducts);

ProductRouter.post('/add', addNewProducts);

ProductRouter.get('/:id', getSingleProducts);

export default ProductRouter;
