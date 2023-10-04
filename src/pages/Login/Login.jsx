import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import useAuth from '../../hooks/useAuth';
// import { useEffect } from 'react';

const Login = () => {
	const { /*user,*/ signInUser } = useAuth();
	const navigate = useNavigate();
	/* 
	
	//check if user is logged in
	
	useEffect(() => {
		user && navigate('/');
	}, [user, navigate]);
	*/
	const handleLogin = e => {
		e.preventDefault();
		const form = new FormData(e.currentTarget);
		const user = {};
		for (const data of form.entries()) {
			user[data[0]] = data[1];
		}
		signInUser(user)
			.then(res => {
				navigate('/');
			})
			.catch(err => {
				console.log(err.message);
			});
	};
	return (
		<div>
			<Navbar />
			<div>
				<div className="w-full max-w-sm mx-auto mt-12 shadow-2xl bg-base-100 rounded-md">
					<form className="card-body" onSubmit={handleLogin}>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								type="email"
								name="email"
								placeholder="email"
								className="input input-bordered"
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input
								type="password"
								name="password"
								placeholder="password"
								className="input input-bordered"
								required
							/>
							<label className="label">
								<a href="#" className="label-text-alt link link-hover">
									Forgot password?
								</a>
							</label>
						</div>
						<div className="form-control mt-6">
							<button className="btn btn-secondary">Login</button>
						</div>
					</form>
					<p className="text-center py-4">
						Don&apos;t have a account?{' '}
						<Link to="/register" className="font-semibold text-blue-500">
							Register
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
