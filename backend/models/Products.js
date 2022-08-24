import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// schema creation
const productSchema = new Schema(
	{
		ProductName: {
			type: String,
			required: true,
			maxlength: 20,
		},
		ProductDesc: {
			type: String,
			required: true,
			minlength: 10,
		},
		ProductImage: {
			type: String,
			required: true,
		},
		ProductPrice: {
			type: String,
			required: true,
		},
		ProductCatergory: {
			type: String,
			required: true,
		},
		Ratings: {
			type: String,
			required: true,
			maxlength: 5,
		},
	},
	{ timestamps: true }
);

export default mongoose.model('Product', productSchema);
// in mongo db the collection will be stored as the : the first small and added a s in the end as : users
