import ChildrenSection from '../assets/imgbox-1-375x240.jpg';
import AccesoriesSection from '../assets/imgbox-2-375x240.jpg';
import MenSection from '../assets/imgbox-1-375x500.jpg';
import WomenSection from '../assets/imgbox-2-375x500.jpg';

const BannerGrid = () => {
	return (
		<div className="grid grid-cols-3 grid-rows-2 bg-white justify-center items-center gap-2 w-full h-[60vh]">
			<div className="row-span-2 max-w-full group relative flex items-center justify-center">
				<button className="absolute text-black px-7 py-2 rounded-sm text-lg uppercase bg-white cursor-pointer z-40 hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out">
					for Men's
				</button>
				<div className="py-224 absolute z-30 px-168 invisible group-hover:visible bg-tranparentBlack group-hover:animate-opacitySet"></div>
				<img src={MenSection} alt="" className="cover w-full" />
			</div>
			<div className="max-w-full group relative flex justify-center items-center">
				<button className="absolute uppercase text-black px-7 py-2 rounded-sm text-lg bg-white cursor-pointer z-40 hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out">
					For Kid's
				</button>
				<div className="py-108 absolute z-30 px-168 invisible group-hover:visible bg-tranparentBlack group-hover:animate-opacitySet"></div>
				<img src={ChildrenSection} alt="" className="cover w-full" />
			</div>
			<div className="row-span-2 max-w-full group relative flex items-center justify-center">
				<button className="absolute text-black px-7 py-2 rounded-sm text-lg uppercase bg-white cursor-pointer z-40 hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out">
					for Women's
				</button>
				<div className="py-224 absolute z-30 px-168 invisible group-hover:visible bg-tranparentBlack group-hover:animate-opacitySet"></div>
				<img src={WomenSection} alt="" className="cover w-full" />
			</div>
			<div className="max-w-full group relative flex justify-center items-center">
				<button className="absolute uppercase text-black px-7 py-2 rounded-sm text-lg bg-white cursor-pointer z-40 hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out">
					accessories
				</button>
				<div className="py-108 absolute z-30 px-168 invisible group-hover:visible bg-tranparentBlack group-hover:animate-opacitySet"></div>
				<img src={AccesoriesSection} alt="" className="cover w-full" />
			</div>
		</div>
	);
};

export default BannerGrid;
