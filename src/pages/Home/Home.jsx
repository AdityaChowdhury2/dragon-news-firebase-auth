import Header from '../Shared/Header/Header';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import Navbar from '../Shared/Navbar/Navbar';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import BreakingNews from './BreakingNews/BreakingNews';

const Home = () => {
	return (
		<div className="px-3">
			<Header />
			<BreakingNews />
			<Navbar />

			<h2 className="font-medium text-3xl font-poppins">This is home</h2>
			<div className="grid grid-cols-1 gap-y-6 lg:gap-x-6 lg:grid-cols-4">
				<div className="">
					<LeftSideNav />
				</div>
				<div className="col-span-2 border">
					{/* <h3 className="text-xl">news Coming soon</h3> */}
				</div>
				<div className="">
					<RightSideNav />
				</div>
			</div>
		</div>
	);
};

export default Home;
