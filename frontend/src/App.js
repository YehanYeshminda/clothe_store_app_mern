import { Navbar, Homepage, ProductDetails, Signup, Cart } from './components';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/product/:id" element={<ProductDetails />} />
				<Route path="/userCart" element={<Cart />} />
			</Routes>
		</>
	);
}

export default App;
