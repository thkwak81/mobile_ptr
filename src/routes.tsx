import {lazy} from 'react';
import type {RouteObject} from 'react-router-dom';

const Layout = lazy(() => import('./pages/Layout'));

const routes: RouteObject[] = [
	{
		path: '/',
		element: <Layout />,
	}
];

const pages = [
	{route: '/'},
];

export default routes;
