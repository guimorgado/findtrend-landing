import Facebook from '../assets/Facebook.svg';
import Linkedin from '../assets/Linkedin.svg';
import Medium from '../assets/Medium.svg';
import Pinterest from '../assets/Pinterest.svg';
import Reddit from '../assets/Reddit.svg';
import RedSocialRusa from '../assets/RedSocialRusa.svg';
import TerceraRed from '../assets/TerceraRed.svg';
import Tweet1 from '../assets/tweet1.svg';
import Tweet2 from '../assets/tweet2.svg';
import Twitter from '../assets/Twitter.svg';

const Platforms = () => {
	return (
		<div className='bg-[#FAFAFA]'>
			<div className='flex flex-col relative lg:w-3/4 lg:mx-auto py-32 bg-[#FAFAFA]'>
				<h1 className='lg:text-6xl text-5xl font-bold text-center'>
					All platform connect to Findtrend
				</h1>
				<div className='flex overflow-x-scroll gap-3 lg:gap-6 mb-4 lg:ml-10 xl:ml-20 py-6 px-10 lg:px-0 mt-10 gap-5 items-center'>
					<div className='w-[124px] rounded-xl h-[124px] flex flex-col flex-shrink-0 justify-center items-center shadow-sm  bg-white'>
						<img src={Facebook} />
					</div>
					<div className='w-[124px] h-[124px] rounded-xl flex flex-col flex-shrink-0 justify-center items-center shadow-sm  bg-[#A8FF35]'>
						<img src={Twitter} />
					</div>
					<div className='w-[124px] h-[124px] flex flex-col flex-shrink-0 justify-center items-center rounded-xl shadow-sm  bg-white'>
						<img src={TerceraRed} />
					</div>
					<div className='w-[124px] h-[124px] flex flex-col flex-shrink-0 justify-center items-center rounded-xl shadow-sm  bg-white'>
						<img src={Pinterest} />
					</div>
					<div className='w-[124px] h-[124px] flex flex-col flex-shrink-0 justify-center items-center rounded-xl shadow-sm  bg-white'>
						<img src={Medium} />
					</div>
					<div className='w-[124px] h-[124px] flex flex-col flex-shrink-0 justify-center items-center rounded-xl shadow-sm  bg-white'>
						<img src={Reddit} />
					</div>
					<div className='w-[124px] h-[124px] flex flex-col flex-shrink-0 justify-center items-center rounded-xl shadow-sm  bg-white'>
						<img src={RedSocialRusa} />
					</div>
					<div className='w-[124px] h-[124px] flex flex-col flex-shrink-0 justify-center items-center rounded-xl shadow-sm  bg-white'>
						<img src={Linkedin} />
					</div>
				</div>
				<div className='px-5 flex gap-10 flex-col mt-20 items-center justify-center'>
					<img src={Tweet1} />
					<img src={Tweet2} />
					<img src={Tweet1} />
					<button className='mt-10 px-10 py-3 text-white bg-black rounded-3xl'>
						View More Trend
					</button>
				</div>
			</div>
		</div>
	);
};

export default Platforms;
