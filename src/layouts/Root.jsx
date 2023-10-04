import { Outlet } from 'react-router-dom';
import AuthProvider from '../providers/AuthProvider/AuthProvider';

const Root = () => {
	return (
		<div className="container font-poppins">
			<AuthProvider>
				<Outlet />
			</AuthProvider>
		</div>
	);
};

export default Root;
