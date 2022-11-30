import { useState } from 'react';
import Save10Mobile from '../assets/BottomPrices.svg';
import Save10 from '../assets/Save10.svg';
import Tick from '../assets/Tick.svg';
import { useMatchMedia } from '../hooks/useMatchMedia';

const Prices = () => {
	const [check, setCheck] = useState(false);
	const isMobileResolution = useMatchMedia('(max-width:1020px)');

	return (
		<div className='py-32 bg-black'>
			<div className='container mx-auto'>
				<div className='flex justify-center flex-col items-center'>
					<h1 className='text-center text-white font-bold lg:text-6xl text-5xl'>
						Get your best deal
					</h1>
					<div className='relative text-white gap-5 flex mt-10 items-center'>
						<p className='text-lg'>Monthly</p>
						<label className='toggle' htmlFor='myToggle'>
							<input
								className='toggle_input'
								checked={check}
								onChange={() => setCheck(!check)}
								type='checkbox'
								id='myToggle'
							/>
							<div className='toggle_fill'></div>
						</label>
						<p className='text-lg text-gray-400'>Yearly</p>
						{isMobileResolution ? (
							<>
								<img src={Save10Mobile} className='absolute top-10 right-0' />
							</>
						) : (
							<>
								<img src={Save10} className='absolute -top-2 -right-24' />
							</>
						)}
					</div>
				</div>

				<div className='lg:mt-10 mt-20 grid lg:grid-cols-3 justify-center items-center gap-10'>
					<div className='flex flex-col justify-between rounded-xl h-[640px] bg-white py-5 px-7'>
						<div>
							<div className='border-b-2 pb-5 border-gray-300'>
								<p className='text-3xl font-bold'>Personal</p>
								<p className='text-md'>Special first packet for all</p>
							</div>
							<p className='mt-7 font-bold text-5xl'>
								{check ? '$6' : '$8'}{' '}
								<span className='text-lg font-normal'>/Month</span>
							</p>
							<ol className='mt-7 flex flex-col gap-5'>
								<li className='flex gap-2'>
									<img src={Tick} />
									<p>Up to 5 page each group</p>
								</li>
								<li className='flex gap-2'>
									<img src={Tick} />
									<p>Up to 10 group page</p>
								</li>
								<li className='flex gap-2'>
									<img src={Tick} />
									<p>5 Days group page saved</p>
								</li>
							</ol>
						</div>
						<div className='items-end'>
							<button className='font-bold text-black flex justify-center w-[100%] py-4 bg-[#A8FF35] rounded-3xl'>
								Start Free Trial
							</button>
						</div>
					</div>
					<div className='flex flex-col justify-between rounded-xl h-[640px] bg-[#A8FF35] py-5 px-7'>
						<div>
							<div className='border-b-2 pb-5 border-gray-300'>
								<p className='text-3xl font-bold'>Regular</p>
								<p className='text-md'>Recommended for personal pro</p>
							</div>
							<p className='mt-7 font-bold text-5xl'>
								{check ? '$15' : '$20'}{' '}
								<span className='text-lg font-normal'>/Month</span>
							</p>
							<ol className='mt-7 flex flex-col gap-5'>
								<li className='flex gap-2'>
									<img src={Tick} />
									<p>Up to 15 page each group</p>
								</li>
								<li className='flex gap-2'>
									<img src={Tick} />
									<p>Download page up to 20 page</p>
								</li>
								<li className='flex gap-2'>
									<img src={Tick} />
									<p>Up to 10 group page</p>
								</li>
								<li className='flex gap-2'>
									<img src={Tick} />
									<p>15 Days group page saved</p>
								</li>
							</ol>
						</div>
						<div className='items-end'>
							<button className='font-bold text-white flex justify-center w-[100%] py-4 bg-black rounded-3xl'>
								Start Free Trial
							</button>
						</div>
					</div>
					<div className='flex flex-col justify-between rounded-xl h-[640px] bg-white py-5 px-7'>
						<div>
							<div className='border-b-2 pb-5 border-gray-300'>
								<p className='text-3xl font-bold'>Premium</p>
								<p className='text-md'>Packet for Startup & Company</p>
							</div>
							<p className='mt-7 font-bold text-5xl'>
								{check ? '$32' : '$48'}{' '}
								<span className='text-lg font-normal'>/Month</span>
							</p>
							<ol className='mt-7 flex flex-col gap-5'>
								<li className='flex gap-2'>
									<img src={Tick} />
									<p>Unlimited group pages</p>
								</li>
								<li className='flex gap-2'>
									<img src={Tick} />
									<p>Unlimited download page</p>
								</li>
								<li className='flex gap-2'>
									<img src={Tick} />
									<p>Unlimited page each group</p>
								</li>
								<li className='flex gap-2'>
									<img src={Tick} />
									<p>Customize sorting group pages</p>
								</li>
								<li className='flex gap-2'>
									<img src={Tick} />
									<p>Customize group page name</p>
								</li>
								<li className='flex gap-2'>
									<img src={Tick} />
									<p>30 Days group page saved</p>
								</li>
							</ol>
						</div>
						<div className='items-end'>
							<button className='font-bold text-black flex justify-center w-[100%] py-4 bg-[#A8FF35] rounded-3xl'>
								Start Free Trial
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Prices;
