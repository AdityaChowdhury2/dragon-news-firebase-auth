import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
	return (
		<div className="flex items-center p-4 bg-gray-100 rounded mt-7">
			<button className="px-8 py-2 text-white bg-pink-700 hover:bg-pink-800 rounded-md">
				Latest
			</button>
			<Marquee pauseOnHover direction="left" gradient gradientColor={'#f3f4f6'}>
				Match Highlights: Germany vs Spain — as it happened !
			</Marquee>
		</div>
	);
};

export default BreakingNews;
