import {lazy} from 'react';
import type {RouteObject} from 'react-router-dom';

const Layout = lazy(() => import('./pages/Layout'));
const Home = lazy(() => import('./pages/Home'));

const routes: RouteObject[] = [
	{
		path: '/',
		element: <Layout />,
		children: [
			{path: '/', element: <Home />}
		],
	}
];

const pages = [
	{route: '/'},
];

export default routes;
