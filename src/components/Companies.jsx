import Airtable from '../assets/Airtable.svg';
import Algolia from '../assets/Algolia.svg';
import Allianz from '../assets/Allianz.svg';
import Bonaza from '../assets/Bonaza.svg';
import Carrera from '../assets/Carrera.svg';
import Coinbase from '../assets/Coinbase.svg';
import Expedia from '../assets/Expedia.svg';
import Grab from '../assets/Grab.svg';
import Heineken from '../assets/Heineken.svg';
import Magento from '../assets/Magento.svg';
import Microsoft from '../assets/Microsoft.svg';
import Suzuki from '../assets/Suzuki.svg';
import upWork from '../assets/UpWork.svg';
import Verizon from '../assets/Verizon.svg';
import Volvo from '../assets/Volvo.svg';
import WeTransfer from '../assets/WeTransfer.svg';

const Companies = () => {
	return (
		<div className='py-32 container mx-auto'>
			<h1 className='text-6xl font-bold text-center'>
				Findtrend make +1000 Startup grow
			</h1>
			<div className='w-full mt-16 grid grid-cols-4 gap-x-6 justify-center gap-y-6'>
				<div className='h-[120px] rounded-xl bg-[#F5F5F5] flex justify-center items-center'>
					<img src={Microsoft} alt='LogoMicrosoft' />
				</div>
				<div className='h-[120px] bg-[#F5F5F5] rounded-xl flex justify-center items-center'>
					<img src={Allianz} alt='LogoAllianz' />
				</div>
				<div className='h-[120px] bg-[#F5F5F5] rounded-xl flex justify-center items-center'>
					<img src={upWork} alt='LogoUpWorkd' />
				</div>
				<div className='h-[120px] bg-[#F5F5F5] rounded-xl flex justify-center items-center'>
					<img src={Volvo} alt='LogoVolvo' />
				</div>
				<div className='h-[120px] bg-[#F5F5F5] rounded-xl flex justify-center items-center'>
					<img src={Grab} alt='LogoGrab' />
				</div>
				<div className='h-[120px] bg-[#F5F5F5] rounded-xl flex justify-center items-center'>
					<img src={Verizon} alt='LogoVerizon' />
				</div>
				<div className='h-[120px] bg-[#F5F5F5] rounded-xl flex justify-center items-center'>
					<img src={Coinbase} alt='LogoCoinbase' />
				</div>
				<div className='h-[120px] bg-[#F5F5F5] rounded-xl flex justify-center items-center'>
					<img src={Expedia} alt='LogoExpedia' />
				</div>
				<div className='h-[120px] bg-[#F5F5F5] rounded-xl flex justify-center items-center'>
					<img src={Airtable} alt='LogoAirtable' />
				</div>
				<div className='h-[120px] bg-[#F5F5F5] rounded-xl flex justify-center items-center'>
					<img src={Magento} alt='LogoMagento' />
				</div>
				<div className='h-[120px] bg-[#F5F5F5] rounded-xl flex justify-center items-center'>
					<img src={Carrera} alt='LogoCarrera' />
				</div>
				<div className='h-[120px] bg-[#F5F5F5] rounded-xl flex justify-center items-center'>
					<img src={Bonaza} alt='LogoBonaza' />
				</div>
				<div className='h-[120px] bg-[#F5F5F5] rounded-xl flex justify-center items-center'>
					<img src={WeTransfer} alt='LogoWetransfer' />
				</div>
				<div className='h-[120px] bg-[#F5F5F5] rounded-xl flex justify-center items-center'>
					<img src={Suzuki} alt='LogoSuzuki' />
				</div>
				<div className='h-[120px] bg-[#F5F5F5] rounded-xl flex justify-center items-center'>
					<img src={Algolia} alt='LogoAlgolia' />
				</div>
				<div className='h-[120px] bg-[#F5F5F5] rounded-xl flex justify-center items-center'>
					<img src={Heineken} alt='LogoHeineken' />
				</div>
			</div>
		</div>
	);
};

export default Companies;
