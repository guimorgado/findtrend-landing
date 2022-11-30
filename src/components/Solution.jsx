import BottomHero from '../assets/BottomText.svg';
import leftHero from '../assets/leftHero.svg';
import rightHero from '../assets/rightHero.svg';
import tab5 from '../assets/tab5.svg';
import TopHero from '../assets/TopText.svg';
import { useMatchMedia } from '../hooks/useMatchMedia';

const Solution = () => {
	const isMobileResolution = useMatchMedia('(max-width:1060px)');
	return (
		<div className='px-5 xl:px-0 flex flex-col justify-center items-center h-[742px] bg-[#A8FF35]'>
			<h1 className='md:text-7xl text-5xl text-center font-bold'>
				Open new tabs is sh*t
			</h1>
			<div className='mt-16 relative'>
				<img
					src={tab5}
					className='lg:border-[70px] border-[30px] rounded-3xl border-[#F5F5F5]'
				/>
				{isMobileResolution ? (
					<>
						<img src={TopHero} className='absolute -top-10 right-0' />
						<img src={BottomHero} className='absolute -bottom-10' />
					</>
				) : (
					<>
						<img src={leftHero} className='absolute top-20 -left-32' />
						<img src={rightHero} className='absolute top-20 -right-32' />
					</>
				)}
			</div>
			<p className='max-w-[666px] mt-16 px-5 text-center'>
				A solution for your browser tabs and don’t make your device get slower
				over time. Get ease and faster to discover a trend with just one tab.
			</p>
		</div>
	);
};

export default Solution;
