import React, {Suspense} from 'react';
import {Outlet} from 'react-router-dom';
import PullToRefresh from '../components/PullToRefresh';

const Layout: React.FC = () => {
	return (
		<div id="wrap">
			<header>
				<h1>Pull to refresh</h1>
			</header>
			<div id="container">
				<PullToRefresh />
				<Suspense fallback={'loading...'}>
					<Outlet />
				</Suspense>
			</div>
		</div>
	);
};

export default Layout;
