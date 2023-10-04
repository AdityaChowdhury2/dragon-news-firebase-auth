import { Navigate, createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Error from '../pages/Error/Error';
import NewsDetails from '../pages/NewsDetails/NewsDetails';
import PrivateRoute from './PrivateRoute';
import isUserLoggedIn from '../utils/isUserLoggedIn';

const Routes = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <Error />,
		children: [
			{
				path: '/',
				element: <Home />,
				loader: () => fetch('/news.json'),
			},
			{
				path: '/login',
				element: isUserLoggedIn() ? <Navigate to={'/'} /> : <Login />,
			},
			{
				path: '/register',
				element: isUserLoggedIn() ? <Navigate to={'/'} /> : <Register />,
			},
			{
				path: '/news/:id',
				element: (
					<PrivateRoute>
						<NewsDetails />
					</PrivateRoute>
				),
				loader: () => fetch('/news.json'),
			},
		],
	},
]);

export default Routes;
