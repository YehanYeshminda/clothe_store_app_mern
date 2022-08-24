import { Navbar, Homepage, ProductDetails, Signup } from './components';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/product/:id" element={<ProductDetails />} />
			</Routes>
		</>
	);
}

export default App;
