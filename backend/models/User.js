import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// schema creation
const userSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	mobile: {
		type: String,
		required: true,
	},
	city: {
		type: String,
		required: true,
	},
	postcode: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
		minlength: 6,
	},
});

export default mongoose.model('User', userSchema);
// in mongo db the collection will be stored as the : the first small and added a s in the end as : users
