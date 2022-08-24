import BannerImage from '../assets/slider-bg-1.jpg';

const BannerHeader = () => {
	return (
		<div className="w-full h-[100vh] relative">
			<img src={BannerImage} alt="banner" className="w-full cover" />
			<div className="absolute top-60 left-[60%]">
				<p className="text-3xl font-semibold text-gray-800 leading-10">
					New Summer Fashion
				</p>
				<p className="text-2xl font-semibold text-red-500 leading-10">
					Up to 30% Sale
				</p>
				<div className="flex hover:animate-pulse transition-all ease-in-out duration-150">
					<button
						type="button"
						className="bg-red-500 text-white w-28 text-xl font-medium rounded-md py-2"
					>
						Buy now!
					</button>
				</div>
			</div>
		</div>
	);
};

export default BannerHeader;
