import { useLoaderData } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Header from '../Shared/Header/Header';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import Navbar from '../Shared/Navbar/Navbar';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import BreakingNews from './BreakingNews/BreakingNews';
import { key } from 'localforage';
import NewsCard from './NewsCard/NewsCard';

const Home = () => {
	const { user } = useAuth();
	const allNews = useLoaderData();

	return (
		<div className="px-3">
			<Header />
			<BreakingNews />
			<Navbar />
			<div className="grid grid-cols-1 gap-y-6 lg:gap-x-6 lg:grid-cols-4">
				<div className="">
					<LeftSideNav />
				</div>
				<div className="col-span-2 space-y-5">
					{/* <h3 className="text-xl">news Coming soon</h3> */}
					{allNews.map(singleNews => (
						<NewsCard news={singleNews} key={singleNews._id} />
					))}
				</div>
				<div className="">
					<RightSideNav />
				</div>
			</div>
		</div>
	);
};

export default Home;
