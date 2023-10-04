import { Link } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import useAuth from '../../hooks/useAuth';

const Register = () => {
	const { createUser } = useAuth();
	const handleRegister = e => {
		e.preventDefault();
		// e.currentTarget.reset();
		const form = new FormData(e.currentTarget);
		const user = {};
		for (const data of form.entries()) {
			user[data[0]] = data[1];
		}

		createUser(user)
			.then(() => {
				console.log('successfully registered and please verify registration');
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
					<form className="card-body" onSubmit={handleRegister}>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Name</span>
							</label>
							<input
								type="text"
								name="name"
								placeholder="Name"
								className="input input-bordered"
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Photo URL</span>
							</label>
							<input
								type="text"
								name="photoURL"
								placeholder="Photo URL"
								className="input input-bordered"
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								type="email"
								name="email"
								placeholder="Email"
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
								placeholder="Password"
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
							<button className="btn btn-secondary">Register</button>
						</div>
					</form>
					<p className="text-center py-4">
						Already have an account?{' '}
						<Link to="/login" className="font-semibold text-blue-500">
							Login
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Register;
