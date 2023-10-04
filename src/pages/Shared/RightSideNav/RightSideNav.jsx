import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
import {
	BiLogoFacebookCircle,
	BiLogoTwitter,
	BiLogoInstagram,
} from 'react-icons/bi';
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';
import useAuth from '../../../hooks/useAuth';
const RightSideNav = () => {
	const { user } = useAuth();
	return (
		<>
			{!user && (
				<div className="p-3">
					<h2 className="text-xl font-semibold mb-5">Login With</h2>
					<div className="flex md:flex-col gap-4 justify-evenly">
						<button className="md:w-full btn btn-outline">
							<FcGoogle />
							Google
						</button>

						<button className="md:w-full btn btn-outline">
							<AiFillGithub />
							Github
						</button>
					</div>
				</div>
			)}
			<div className="p-3 mb-6">
				<h2 className="text-xl font-semibold capitalize mb-4">Find Us on</h2>
				<a
					href=""
					className="p-4 flex text-lg gap-2 items-center border rounded-t-lg"
				>
					<BiLogoFacebookCircle />
					<span>Facebook</span>
				</a>
				<a href="" className="p-4 flex text-lg gap-2 items-center border-x">
					<BiLogoTwitter />
					<span>Twitter</span>
				</a>
				<a
					href=""
					className="p-4 flex text-lg gap-2 items-center border rounded-b-lg"
				>
					<BiLogoInstagram />
					<span>Instagram</span>
				</a>
			</div>
			<div className="p-3 mb-6 rounded-lg space-y-3 bg-gray-50">
				<h2 className="font-semibold">Q Zone</h2>
				<img src={qZone1} alt="" />
				<img src={qZone2} alt="" />
				<img src={qZone3} alt="" />
			</div>
			<div className="bg-ad-rotate lg:bg-ad bg-no-repeat bg-cover lg:bg-auto bg-gray-700 rounded-sm bg-blend-overlay ">
				<div className="px-8 py-16 text-white text-center mb-2">
					<h2 className="text-3xl font-bold leading-10">
						Create an Amazing NewsPaper
					</h2>
					<p className="mt-5 leading-6 mb-8">
						Discover thousands of options, easy to customize layouts, one-click
						to import demo and much more.
					</p>
					<button className="px-8 py-4 text-white bg-pink-700 hover:bg-pink-800 rounded-sm text-xl">
						Learn More
					</button>
				</div>
			</div>
		</>
	);
};

export default RightSideNav;
