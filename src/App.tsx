import {useRoutes} from 'react-router-dom';
import routes from './routes';
import './assets/css/includes.css';

function App() {
	const element = useRoutes(routes);
	return element;
}

export default App;
