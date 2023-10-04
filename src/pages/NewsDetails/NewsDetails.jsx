import { useLoaderData, useParams } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import Navbar from '../Shared/Navbar/Navbar';

const NewsDetails = () => {
	const { id } = useParams();
	// const news = useLoaderData();
	return (
		<div>
			<Header />
			<Navbar />
			<div className="grid md:grid-cols-4">
				<div className="col-span-3">
					<h2 className="text-5xl">{id}</h2>
				</div>
				<div>
					<RightSideNav />
				</div>
			</div>
		</div>
	);
};

export default NewsDetails;
