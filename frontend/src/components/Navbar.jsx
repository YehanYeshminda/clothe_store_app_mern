import Logo from '../assets/logo.png';
import { MdSearch, MdPersonPin, MdShoppingCart } from 'react-icons/md';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../store/StateProvider';

const Navbar = () => {
	const [active, setActive] = useState('Search');

	const [{ ItemProducts }, dispatch] = useStateValue();

	return (
		<div className="flex justify-between items-center px-32 w-full h-24 top-0 sticky z-50 bg-white">
			<ul className="flex items-center justify-center">
				<li className="flex w-36">
					<img src={Logo} alt="logo" className="w-full cover" />
				</li>
			</ul>
			<ul className="flex gap-10 justify-center items-center">
				<Link to="/">
					<li className="text-black hover:text-red-600 transition-all duration-300 ease-in-out">
						HOME
					</li>
				</Link>
				<li className="text-black hover:text-red-600 transition-all duration-300 ease-in-out">
					SHOP
				</li>
				<li className="text-black hover:text-red-600 transition-all duration-300 ease-in-out">
					PAGE
				</li>
				<li className="text-black hover:text-red-600 transition-all duration-300 ease-in-out">
					BLOG
				</li>
				<li className="text-black hover:text-red-600 transition-all duration-300 ease-in-out">
					CONTACT
				</li>
				<div className="group flex justify-between items-center gap-10">
					<li
						className={`${
							active === 'Search'
								? 'px-2 py-2 bg-gray-300 rounded-full text-xl'
								: ''
						}`}
						onClick={() => setActive('Search')}
					>
						<MdSearch className="text-black hover:text-red-600 transition-all duration-300 ease-in-out text-xl" />
					</li>
					<li
						className={`${
							active === 'Person'
								? 'px-2 py-2 bg-gray-300 rounded-full text-xl'
								: ''
						}`}
						onClick={() => setActive('Person')}
					>
						<Link to="/signup">
							<MdPersonPin className="text-black hover:text-red-600 transition-all duration-300 ease-in-out text-xl" />
						</Link>
					</li>
					<Link to="/userCart">
						<li
							className={`${
								active === 'Shopping'
									? 'px-2 py-2 bg-gray-300 rounded-full text-xl'
									: ''
							} relative`}
							onClick={() => setActive('Shopping')}
						>
							<span className="absolute bottom-4 left-5 bg-red-500 w-5 flex justify-center items-center rounded-full text-base">
								{ItemProducts ? ItemProducts.length : 0}
							</span>
							<MdShoppingCart className="text-black hover:text-red-600 transition-all duration-300 ease-in-out text-xl" />
						</li>
					</Link>
				</div>
			</ul>
		</div>
	);
};

export default Navbar;
