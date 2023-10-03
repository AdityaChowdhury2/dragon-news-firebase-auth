import moment from 'moment/moment';
import logo from '../../../assets/logo.png';
const Header = () => {
	// const formattedDate = moment(date).format('dddd MMMM Do, YYYY');

	return (
		<div className="text-center mt-4">
			<img src={logo} alt="" className="mx-auto" />
			<p className="text-lg mt-5">Journalism Without Fear Or Favour</p>
			<p className="text-xl mt-4">{moment().format('dddd, MMMM D, Y')}</p>
		</div>
	);
};

export default Header;
