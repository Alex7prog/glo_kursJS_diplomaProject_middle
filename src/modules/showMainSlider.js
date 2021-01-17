// showMainSlider
const showMainSlider = () => {
	const mainSlider = document.querySelector('.main-slider'),
		arrayMainSlider = [...mainSlider.children],
		dots = document.createElement('ul');

	let currentSlide = 0,
		interval;

	const createDots = () => {
		dots.style.height = '10px';
		dots.classList.add('slider-dots');

		for (let i = 0; i < arrayMainSlider.length; i++) {
			const lidot = document.createElement('li'),
				btn = document.createElement('button');
			lidot.style.height = '100%';
			dots.appendChild(lidot);
			btn.style.height = '100%';
			btn.setAttribute('index', i);
			lidot.appendChild(btn);
		}
		mainSlider.appendChild(dots);
	};

	const prevSlide = () => {
		arrayMainSlider[currentSlide].style.display = 'none';
		dot[currentSlide].classList.remove('slick-active');

	};

	const nextSlide = () => {
		arrayMainSlider[currentSlide].style.display = 'flex';
		dot[currentSlide].classList.add('slick-active');
	};

	const autoPlaySlide = () => {
		prevSlide();
		currentSlide++;
		if (currentSlide >= arrayMainSlider.length) {
			currentSlide = 0;
		}
		nextSlide();
	};

	const startSlide = (time = 3000) => {
		interval = setInterval(autoPlaySlide, time);
	};

	const stopSlide = () => {
		clearInterval(interval);
	};

	dots.addEventListener('click', event => {
		const target = event.target;
		if (target.matches('[index]')) {
			prevSlide();
			currentSlide = target.getAttribute('index');
			nextSlide();
		}
	});
	mainSlider.addEventListener('mouseover', event => {
		if (event.target.closest('.main-slider')) {
			stopSlide();
		}
	});

	mainSlider.addEventListener('mouseout', event => {
		if (event.target.closest('.main-slider')) {
			startSlide();
		}
	});

	createDots();

	const dot = dots.querySelectorAll('li');
	dot[currentSlide].classList.add('slick-active');

	startSlide(3000);

}; //end of mainSlider

export default showMainSlider;
