import Header from '../components/Header';
import Help from '../components/Help';
import Menu from '../components/Menu';
import Solution from '../components/Solution';
import Companies from './Companies';
import Footer from './Footer';
import JoinUs from './JoinUs';
import Platforms from './Platforms';
import Prices from './Prices';

const App = () => {
	return (
		<>
			<div className='backgroundImage'>
				<div className='container mx-auto'>
					<Menu />
					<Header />
				</div>
			</div>
			<Solution />
			<Help />
			<Companies />
			<Platforms />
			<Prices />
			<JoinUs />
			<Footer />
		</>
	);
};

export default App;
