import leftHero from '../assets/leftHero.svg';
import rightHero from '../assets/rightHero.svg';
import tab5 from '../assets/tab5.svg';

const Solution = () => {
	return (
		<div className='flex flex-col justify-center items-center h-[742px] bg-[#A8FF35]'>
			<h1 className='text-7xl font-bold'>Open new tabs is sh*t</h1>
			<div className='mt-16 relative'>
				<img
					src={tab5}
					className='border-[70px] rounded-3xl border-[#F5F5F5]'
				/>
				<img src={leftHero} className='absolute top-20 -left-32' />
				<img src={rightHero} className='absolute top-20 -right-32' />
			</div>
			<p className='w-[666px] mt-16 px-5 text-center'>
				A solution for your browser tabs and don’t make your device get slower
				over time. Get ease and faster to discover a trend with just one tab.
			</p>
		</div>
	);
};

export default Solution;
