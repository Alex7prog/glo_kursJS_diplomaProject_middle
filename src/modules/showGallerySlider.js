//showServicesSlider
const showGallerySlider = () => {
	// const sliderGallery = document.querySelector('.portfolio-content'),
	// slide = document.querySelectorAll('.portfolio-item'),
	// sliderGallery = document.querySelector('.portfolio-content');
	// 	//btn = document.querySelectorAll('portfolio-btn'),
	// 	portfolioDots = document.querySelector('.portfolio-dots'),
	// 	//dot = document.querySelectorAll('.dot'),
	const galleryBG = document.querySelector('.gallery-bg'),
		galleryWrap = galleryBG.querySelector('.wrapper'),
		gallerySlider = document.querySelector('.gallery-slider'),
		slides = gallerySlider.querySelectorAll('.slide');


	galleryBG.id = "gallery";

	let currentSlide = 0,
		interval;

	const dots = document.createElement('ul');

	dots.classList.add('slider-dots');
	for (let i = 0; i < slides.length; i++) {
		const lidot = document.createElement('li');
		lidot.className = 'dot';
		dots.appendChild(lidot);
	}
	gallerySlider.append(dots);

	const dot = document.querySelectorAll('.dot');
	//dot[0].classList.add('dot-active');

};

export default showGallerySlider;
