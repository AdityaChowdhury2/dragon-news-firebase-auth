import PropTypes from 'prop-types';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
	const { loading, user } = useAuth();
	const location = useLocation();
	console.log(location);
	if (loading) {
		return (
			<div className="flex justify-center items-center h-[50vh]">
				<span className="loading loading-infinity loading-lg"></span>
			</div>
		);
	}
	if (user) {
		return children;
	}
	return <Navigate state={location.pathname} to={'/login'} />;
};

PrivateRoute.propTypes = {
	children: PropTypes.node,
};

export default PrivateRoute;
