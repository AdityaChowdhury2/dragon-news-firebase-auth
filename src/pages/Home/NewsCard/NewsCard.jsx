import moment from 'moment';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import ReactStarsRating from 'react-awesome-stars-rating';
import ReactStars from 'react-rating-stars-component';
const NewsCard = ({ news }) => {
	const {
		_id,
		total_view,

		title,
		details,
		image_url,
		rating,
		author,
	} = news;
	const { name, published_date, img } = author;
	const { number } = rating;
	console.log(news);
	return (
		<div className="border rounded-lg">
			<div className="p-5 bg-gray-200 rounded-t-lg">
				<div className="flex justify-between items-center">
					<div className="flex gap-4">
						<div className="w-10">
							<img src={img} className="rounded-full" />
						</div>
						<div>
							<h3 className="font-bold">{name}</h3>
							<p className="text-gray-500">
								{moment(published_date).format('YYYY-MM-DD')}
							</p>
						</div>
					</div>
					<div className="flex gap-3">
						<Icon icon="teenyicons:bookmark-outline" width="24" height="24" />
						<Icon icon="clarity:share-line" width="24" height="24" />
					</div>
				</div>
			</div>
			<div className="p-5">
				<h2 className="text-xl font-bold mt-3 mb-5">{title}</h2>
				<div>
					<img className="w-full" src={image_url} alt="" />
				</div>
				<p className="text-gray-500 mt-8">{details.slice(0, 300)}...</p>
				<Link to={`/news/${_id}`} className="text-orange-400 font-medium">
					Read More
				</Link>
				<div className="divider"></div>
				<div className="flex justify-between ">
					<div className="flex items-center gap-4">
						<ReactStars
							count={5}
							value={number}
							size={28}
							isHalf={true}
							emptyIcon={<Icon icon="ic:outline-star-border-purple500" />}
							halfIcon={<Icon icon="ic:outline-star-half" />}
							filledIcon={<Icon icon="ic:outline-star-purple500" />}
							edit={false}
							activeColor="rgb(251,146,60)"
						/>
						<p className="font-medium text-gray-500">{number}</p>
					</div>
					<div className="flex items-center gap-4">
						<Icon icon="mdi:eye" color="#6b7280" width={24} height={24} />
						<p className="font-medium text-gray-500">{total_view}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

NewsCard.propTypes = {
	news: PropTypes.object,
};

export default NewsCard;
