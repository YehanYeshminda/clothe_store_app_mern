import User from '../models/User';
import bcrypt from 'bcryptjs';

export const getAllUsers = async (req, res, next) => {
	let users;

	try {
		users = await User.find();
	} catch (error) {
		console.log(error);
	}

	if (!users) {
		return res.status(404).json({ message: 'No users are found in the DB!' });
	}

	// if users are available
	return res.status(200).json({ users });
};

export const signUpUser = async (req, res, next) => {
	// fields which are posting into the database and getting from the body
	const { name, email, mobile, city, postcode, password } = req.body;

	// adding validation to check for existing user
	let existingUser;

	try {
		// will check from the User schema to check whether an existing user with this email exists
		existingUser = await User.findOne({
			email,
		});
	} catch (error) {
		return console.log(error);
	}

	// if the user does exist after finding
	if (existingUser) {
		return res
			.status(400)
			.json({ message: 'User already exists! Login Instead!' });
	}

	const encyrptedPassword = bcrypt.hashSync(password);

	// if the user is not found which means a new entry
	const newUser = new User({
		name,
		email,
		mobile,
		city,
		postcode,
		password: encyrptedPassword,
	});

	// inserting the entry into the database
	try {
		await newUser.save();
	} catch (error) {
		return console.log(error);
	}

	return res.status(201).json({ newUser });
};

export const userLogin = async (req, res, next) => {
	// getting the name, email and the password from the body
	const { email, password } = req.body;

	let existingUser;

	try {
		// will check from the User schema to check whether an existing user with this email exists
		existingUser = await User.findOne({
			email,
		});
	} catch (error) {
		return console.log(error);
	}

	// if the user does exist after finding
	if (!existingUser) {
		return res
			.status(404)
			.json({ message: 'Invalid Password or Email! User does not exist!' });
	}

	// used to check the encrypted password agaist provided password and the already existing one
	const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);

	if (!isPasswordCorrect) {
		return res.status(400).json({ message: 'Incorrect Password!' });
	}

	return res.status(200).json({ existingUser });
};
