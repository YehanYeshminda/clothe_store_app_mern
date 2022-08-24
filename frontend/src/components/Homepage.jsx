import React from 'react';
import BannerGrid from './BannerGrid';
import Banner from './BannerHeader';
import NewProducts from './NewProducts';

const Homepage = () => {
	return (
		<>
			<Banner />
			<div className="max-w-5xl mx-auto">
				<BannerGrid />
				<NewProducts />
			</div>
		</>
	);
};

export default Homepage;
