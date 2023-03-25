import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/Home.component';
import Navigation from './routes/navigation/Navigation.component';
import Authenticate from './routes/authenticate/Authenticate.component';

function App() {
	const Shop = () => {
		return <h1>this is shop section</h1>;
	};
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path="shop" element={<Shop />} />
				<Route path="auth" element={<Authenticate />} />
			</Route>
		</Routes>
	);
}

export default App;
