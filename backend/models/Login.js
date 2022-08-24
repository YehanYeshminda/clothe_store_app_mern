import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// schema creation
const loginSchema = new Schema(
	{
		userId: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

export default mongoose.model('Login', loginSchema);
// in mongo db the collection will be stored as the : the first small and added a s in the end as : users
