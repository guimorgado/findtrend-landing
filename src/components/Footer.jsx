import logoDark from '../assets/logoDark.svg';

const Footer = () => {
	return (
		<div className='container mx-auto h-[100px]  flex justify-between items-center'>
			<div>
				<img src={logoDark} />
			</div>
			<div className='flex justify-end'>
				<ol className='flex gap-5'>
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
