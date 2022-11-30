import logoDark from '../assets/logoDark.svg';

const Footer = () => {
	return (
		<div className='container mx-auto lg:h-[100px] py-24 lg:py-0 flex lg:flex-row flex-col lg:justify-between justify-center items-center'>
			<div>
				<img src={logoDark} />
			</div>
			<div className='flex justify-end text-center'>
				<ol className='flex lg:flex-row flex-col mt-10 lg:mt-0 gap-5'>
					<li>Privacy Policy</li>
					<li>Terms and Conditions</li>
					<li>Contact Us</li>
					<li>Careers</li>
				</ol>
			</div>
		</div>
	);
};

export default Footer;
