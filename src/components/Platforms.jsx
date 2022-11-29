import Tweet1 from '../assets/tweet1.svg';
import Tweet2 from '../assets/tweet2.svg';

const Platforms = () => {
	return (
		<div className='py-32 bg-[#FAFAFA] flex flex-col justify-center items-center'>
			<h1 className='text-6xl font-bold'>All platform connect to Findtrend</h1>
			<div className='flex gap-10 flex-col mt-20 items-center justify-center'>
				<img src={Tweet1} />
				<img src={Tweet2} />
				<img src={Tweet1} />
				<button className='mt-10 px-10 py-3 text-white bg-black rounded-3xl'>
					View More Trend
				</button>
			</div>
		</div>
	);
};

export default Platforms;
