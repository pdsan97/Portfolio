import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Contact } from './components/Contact/Contact';
import { About } from './components/About/About';
import { Switch, Route } from 'react-router-dom';
import { Landing } from './components/Landing/Landing';
import { Projects } from './components/Projects/Projects';
const App = () => {
	return (
		<>
			<Header />
			<Switch>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/projects">
					<Projects />
				</Route>
				<Route path="/contact">
					<Contact />
				</Route>
				<Route path="/">
					<Landing />
				</Route>
			</Switch>
			<Footer></Footer>
		</>
	);
};

export default App;
