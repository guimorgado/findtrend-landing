import btnHero from '../assets/btn-hero-socmed.svg';
import imgHero from '../assets/img-hero.svg';

const Header = () => {
	return (
		<div className=''>
			<div className='flex flex-col items-center mt-[98px]'>
				<div className='leading-tight text-center text-7xl font-bold text-white'>
					<h1>Minimize your tabs.</h1>
					<h1>Find the trends!</h1>
				</div>
				<div className='mt-5'>
					<p className='text-gray-400 max-w-[666px] text-center px-10'>
						Don&apos;t let your computer memories consumes all of those browser
						tabs. Findtrend let you gathers all of your favorite website into
						one place.
					</p>
				</div>
				<div className='mt-10 relative'>
					<button className='font-bold px-6 py-3 bg-[#A8FF35] rounded-3xl'>
						Get Started 🔥
					</button>
					<img src={imgHero} className='absolute -top-5 -right-28' />
				</div>
				<div className='mt-20 mb-12'>
					<img src={btnHero} />
				</div>
			</div>
		</div>
	);
};

export default Header;
