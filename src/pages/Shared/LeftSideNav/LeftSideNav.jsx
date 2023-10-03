import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
	const [categories, setCategories] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch('categories.json')
			.then(res => res.json())
			.then(data => {
				setLoading(false);
				setCategories(data);
			})
			.catch(err => console.error(err));
	}, []);

	return (
		<div className="">
			<h2 className="text-xl font-medium mb-5">All Category</h2>
			{loading ? (
				<div className="flex justify-center items-center h-[50vh]">
					<span className="loading loading-spinner loading-lg"></span>
				</div>
			) : (
				<div className="flex flex-col gap-2 items-center lg:items-start ">
					{categories.map(category => (
						<div
							key={category.id}
							className="pl-12 text-xl py-4 w-full hover:bg-gray-200 rounded duration-500 hover:font-semibold"
						>
							<Link to={`/${category.name.split(' ').join('')}`}>
								{category.name}
							</Link>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default LeftSideNav;
