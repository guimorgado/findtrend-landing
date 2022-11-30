import { useState } from 'react';
import iconMenu from '../assets/icon.svg';
import iconClose from '../assets/iconClose.svg';
import logoMobile from '../assets/logoMobile.svg';
import WhiteLogo from '../assets/WhiteLogo.svg';
import { useMatchMedia } from '../hooks/useMatchMedia';

const Menu = () => {
	const isMobileResolution = useMatchMedia('(max-width:1060px)');
	const [showModal, setShowModal] = useState(false);

	return (
		<div
			className={
				showModal
					? 'relative text-white xl:mx-0 flex justify-between items-center h-[100px]'
					: 'relative text-white mx-5 xl:mx-0 flex justify-between items-center h-[100px]'
			}
		>
			{isMobileResolution ? (
				<>
					<div className={showModal ? 'z-20 ml-5' : ''}>
						<img src={logoMobile} />
					</div>
				</>
			) : (
				<>
					<div>
						<img src={WhiteLogo} />
					</div>
				</>
			)}

			{isMobileResolution ? (
				<>
					{showModal ? (
						<>
							<button
								onClick={() => setShowModal(false)}
								className='mr-5 flex justify-end z-20'
							>
								<img src={iconClose} />
							</button>
						</>
					) : (
						<>
							<button
								onClick={() => setShowModal(true)}
								className='flex justify-end'
							>
								<img src={iconMenu} />
							</button>
						</>
					)}

					{showModal && (
						<div className='absolute w-[100%] bg-black z-10'>
							<ul className='text-white flex flex-col justify-center items-center mt-[600px] gap-10 text-md'>
								<li>About</li>
								<li>How it work</li>
								<li>Pricing</li>
								<li>Solution</li>
								<li>Features</li>
								<button>Login</button>
								<button className='mb-10 px-7 py-2 rounded-3xl bg-white text-black'>
									Register
								</button>
							</ul>
						</div>
					)}
				</>
			) : (
				<>
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
				</>
			)}
		</div>
	);
};

export default Menu;
