import PersonImage from '../assets/imgbox-1-375x500.jpg';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../store/StateProvider';
import { actionType } from '../store/Reducer';

const SignupPage = () => {
	const navigate = useNavigate();

	const [{ isLoggedIn, user }, dispatch] = useStateValue();

	const [inputs, setInputs] = useState({
		name: '',
		email: '',
		mobile: '',
		city: '',
		postcode: '',
		password: '',
	});

	const [isSignUp, setisSignUp] = useState(false);

	const handleChange = (e) => {
		setInputs((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const sendRequest = async (type = 'login') => {
		if (type === 'login') {
			const res = await axios
				.post(`http://localhost:5000/api/user/login`, {
					name: inputs.name,
					email: inputs.email,
					password: inputs.password,
				})
				.catch((err) => console.log(err));

			const data = await res.data;
			console.log(data);
			return data;
		}

		if (type === 'signup') {
			const res = await axios
				.post(`http://localhost:5000/api/user/signup`, {
					name: inputs.name,
					email: inputs.email,
					mobile: inputs.mobile,
					city: inputs.city,
					postcode: inputs.postcode,
					password: inputs.password,
				})
				.catch((err) => console.log(err));

			const data = await res.data;
			console.log(data);
			return data;
		}
	};

	const setIsLoggedIn = () => {
		dispatch({
			type: actionType.SET_ISLOGGED_IN,
			isLoggedIn: !isLoggedIn,
		});
	};

	const setUser = (data) => {
		dispatch({
			type: actionType.SET_USER,
			user: data,
		});
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		if (!isSignUp) {
			sendRequest('login')
				.then((data) => {
					localStorage.setItem('userGetId', data.existingUser._id);
					setUser(data.existingUser);
					setIsLoggedIn();
				})
				.then(() => {
					navigate('/');
				})
				.then((data) => console.log(data));
		}

		if (isSignUp) {
			sendRequest('signup')
				.then((data) => localStorage.setItem('userGetId', data.newUser._id))
				.then(() => setisSignUp(!isSignUp))
				.then((data) => console.log(data));
		}
	};

	return (
		<div className="flex max-w-5xl justify-center items-center mx-auto max-h-screen my-10 bg-gray-300">
			<div className="max-w-2xl w-full">
				<img src={PersonImage} alt="person" srcset="" className="w-full" />
			</div>
			{!isLoggedIn ? (
				<div className="flex justify-center items-center w-full">
					<form className="flex flex-col gap-10 justify-center items-center mx-auto w-full ml-10 mr-10">
						{isSignUp && (
							<input
								onChange={handleChange}
								required
								value={inputs.name}
								type="text"
								name="name"
								className="bg-gray-100 placeholder:text-gray-400 w-full h-10 rounded-lg text-black hover:bg-slate-200 hover:drop-shadow-lg placeholder:text-center"
								placeholder="Username"
							/>
						)}

						<input
							onChange={handleChange}
							required
							value={inputs.email}
							type="email"
							name="email"
							className="bg-gray-100 placeholder:text-gray-400 w-full h-10 rounded-lg text-black hover:bg-slate-200 hover:drop-shadow-lg placeholder:text-center"
							placeholder="Email"
						/>

						{isSignUp && (
							<input
								onChange={handleChange}
								required
								value={inputs.mobile}
								type="text"
								name="mobile"
								className="bg-gray-100 placeholder:text-gray-400 w-full h-10 rounded-lg text-black hover:bg-slate-200 hover:drop-shadow-lg placeholder:text-center"
								placeholder="Mobile Number"
							/>
						)}

						{isSignUp && (
							<input
								onChange={handleChange}
								required
								value={inputs.city}
								type="text"
								name="city"
								className="bg-gray-100 placeholder:text-gray-400 w-full h-10 rounded-lg text-black hover:bg-slate-200 hover:drop-shadow-lg placeholder:text-center"
								placeholder="City"
							/>
						)}

						{isSignUp && (
							<input
								onChange={handleChange}
								required
								value={inputs.postcode}
								type="text"
								name="postcode"
								className="bg-gray-100 placeholder:text-gray-400 w-full h-10 rounded-lg text-black hover:bg-slate-200 hover:drop-shadow-lg placeholder:text-center"
								placeholder="Post-code"
							/>
						)}

						<input
							onChange={handleChange}
							required
							value={inputs.password}
							type="password"
							name="password"
							className="bg-gray-100 placeholder:text-gray-400 w-full h-10 rounded-lg text-black hover:bg-slate-200 hover:drop-shadow-lg placeholder:text-center"
							placeholder="Password"
						/>
						<button
							onClick={handleFormSubmit}
							className="bg-orange-400 w-full h-20 rounded-full text-2xl font-bold hover:drop-shadow-xl hover:bg-red-400 hover:text-white"
						>
							{isSignUp ? 'Sign-up' : 'Login'}
						</button>
						<button
							onClick={() => setisSignUp(!isSignUp)}
							type="button"
							className="bg-amber-400 w-full h-10 rounded-full text-xl font-bold hover:drop-shadow-xl hover:bg-black hover:text-white"
						>
							{isSignUp ? 'Already Have a Account?' : 'Dont Have a Account?'}
						</button>
					</form>
				</div>
			) : (
				<div className="flex justify-center items-center w-full">
					<form className="flex flex-col gap-10 justify-center items-center mx-auto w-full ml-10 mr-10">
						<input
							onChange={handleChange}
							required
							value={user.name}
							type="text"
							name="name"
							className="bg-gray-100 placeholder:text-gray-400 w-full h-10 rounded-lg text-black hover:bg-slate-200 hover:drop-shadow-lg placeholder:text-center"
							placeholder="Username"
						/>

						<input
							onChange={handleChange}
							required
							value={user.email}
							type="email"
							name="email"
							className="bg-gray-100 placeholder:text-gray-400 w-full h-10 rounded-lg text-black hover:bg-slate-200 hover:drop-shadow-lg placeholder:text-center"
							placeholder="Email"
						/>

						<input
							onChange={handleChange}
							required
							value={user.mobile}
							type="text"
							name="mobile"
							className="bg-gray-100 placeholder:text-gray-400 w-full h-10 rounded-lg text-black hover:bg-slate-200 hover:drop-shadow-lg placeholder:text-center"
							placeholder="Mobile Number"
						/>

						<input
							onChange={handleChange}
							required
							value={user.city}
							type="text"
							name="city"
							className="bg-gray-100 placeholder:text-gray-400 w-full h-10 rounded-lg text-black hover:bg-slate-200 hover:drop-shadow-lg placeholder:text-center"
							placeholder="City"
						/>

						<input
							onChange={handleChange}
							required
							value={user.postcode}
							type="text"
							name="postcode"
							className="bg-gray-100 placeholder:text-gray-400 w-full h-10 rounded-lg text-black hover:bg-slate-200 hover:drop-shadow-lg placeholder:text-center"
							placeholder="Post-code"
						/>

						<button
							onClick={() => {
								setIsLoggedIn();
								setUser(null);
							}}
							type="button"
							className="bg-amber-400 w-full h-10 rounded-full text-xl font-bold hover:drop-shadow-xl hover:bg-black hover:text-white"
						>
							Logout
						</button>
					</form>
				</div>
			)}
		</div>
	);
};

export default SignupPage;
