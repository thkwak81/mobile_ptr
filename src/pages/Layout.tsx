import {useEffect} from 'react';
import '../assets/css/includes.css';

const Layout: React.FC = () => {

	useEffect(() => {
		const element = document.getElementById('container');
		const ptr = document.querySelector('.ptr_content');
		const maxHeight = 100;
		let timer = 2000;
		let startY = 0;
		let isLoading = false;

		element.addEventListener('touchstart', (e) => {
			startY = e.touches[0].clientY;
		});

		element.addEventListener('touchmove', (e) => {
			const currentY = e.touches[0].clientY;
			const pullDistance = currentY - startY;

			if(pullDistance > 0 && !isLoading){
				e.preventDefault();
				if(pullDistance > maxHeight){
					ptr.style.height = maxHeight + 'px';
				}else{
					ptr.style.height = pullDistance + 'px';
				}
			}
		});

		element.addEventListener('touchend', (e) => {
			const endY = e.changedTouches[0].clientY;
			const pullDistance = endY - startY;

			if(pullDistance > maxHeight && !isLoading){
				isLoading = true;
				ptr.classList.add('active');

				setTimeout(() => {
					isLoading = false;
					ptr.style.height = 0 + 'px';
					ptr.classList.remove('active');
				}, timer);
			}else{
				ptr.style.height = 0 + 'px';
			}
		});
	}, []);

	return (
		<div id="wrap">
			<header>
				<h1>Pull to refresh</h1>
			</header>
			<div id="container">
				<section className="ptr_content">
					<div className="ptr_loader"></div>
					<div className="ptr_status">Pull to Refresh!!</div>
				</section>
				<section className="content">
					<div className="card_section">
						<div className="card"></div>
						<div className="card"></div>
						<div className="card"></div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Layout;
