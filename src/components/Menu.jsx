import WhiteLogo from '../assets/WhiteLogo.svg';

const Menu = () => {
	return (
		<div className='text-white flex justify-between items-center h-[100px]'>
			<div>
				<img src={WhiteLogo} />
			</div>
			<div>
				<ul className='flex gap-10 text-md'>
					<li>About</li>
					<li>How it work</li>
					<li>Pricing</li>
					<li>Solution</li>
					<li>Features</li>
				</ul>
			</div>
			<div className='flex gap-10 text-md'>
				<button>Login</button>
				<button className='px-7 py-2 rounded-3xl bg-white text-black'>
					Register
				</button>
			</div>
		</div>
	);
};

export default Menu;
