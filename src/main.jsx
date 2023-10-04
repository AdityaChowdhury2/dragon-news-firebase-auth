import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './providers/AuthProvider/AuthProvider';
import Routes from './routes/Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthProvider>
			<RouterProvider router={Routes} />
		</AuthProvider>
	</React.StrictMode>
);
