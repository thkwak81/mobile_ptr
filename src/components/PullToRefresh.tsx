import {useRef, useEffect} from 'react';

const PullToRefresh = () => {
	const ptrRef = useRef(null);

	let ptrElement: any = null;
	const maxHeight: number = 100;
	let timer: number = 2000;
	let startY: number = 0;
	let isLoading: boolean = false;

	const handleTouchStart = (event: any) => {
		startY = event.touches[0].clientY;
	};

	const handleTouchMove = (event: any) => {
		const currentY: number = event.touches[0].clientY;
		const pullDistance: number = currentY - startY;

		if(pullDistance > 0 && !isLoading){
			if(pullDistance > maxHeight){
				ptrElement.style.height = maxHeight + 'px';
			}else{
				ptrElement.style.height = pullDistance + 'px';
			}
		}
	};
	const handleTouchEnd = (event: any) => {
		const endY: number = event.changedTouches[0].clientY;
		const pullDistance: number = endY - startY;

		if(pullDistance > maxHeight && !isLoading){
			isLoading = true;
			ptrElement.classList.add('active');

			setTimeout(() => {
				isLoading = false;
				ptrElement.style.height = 0 + 'px';
				ptrElement.classList.remove('active');
			}, timer);
		}else{
			ptrElement.style.height = 0 + 'px';
		}
	};

	useEffect(() => {
		ptrElement = ptrRef.current;

		window.addEventListener('touchstart', handleTouchStart, {passive: false});
		window.addEventListener('touchmove', handleTouchMove, {passive: false});
		window.addEventListener('touchend', handleTouchEnd, {passive: false});
	}, []);

	return (
		<>
			<section className="ptr_content" ref={ptrRef}>
				<div className="ptr_loader"></div>
				<div className="ptr_status">Pull to Refresh!!</div>
			</section>
		</>
	);
};

export default PullToRefresh;
