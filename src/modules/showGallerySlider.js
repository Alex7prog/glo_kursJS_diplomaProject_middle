//showServicesSlider
const showGallerySlider = () => {
	const gallerySlider = document.querySelector('.gallery-slider'),
		slides = gallerySlider.querySelectorAll('.slide'),
		arrowPrev = document.createElement('a'),
		arrowNext = document.createElement('a'),
		spanArrowPrev = document.createElement('span'),
		spanArrowNext = document.createElement('span'),
		dots = document.createElement('ul');

	let currentSlide = 0,
		interval;

	const addSliderStyle = () => {
		let style = document.getElementById('style-galerry-slider');
		if (!style) {
			style = document.createElement('style');
			style.id = 'style-galerry-slider';
		}

		style.textContent = `
                .galerry-slider-addstyle {
                    position: relative;
                    height: 550px;
                    margin: 0 auto;
                    display: block
                }
                .galerry-slider-item-addstyle {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    -webkit-transform: translate(-50%, -50%);
                    transform: translate(-50%, -50%);
                    width: 100%;
                    opacity: 0;
                    -webkit-transition: opacity .5s;
                    transition: opacity .5s
                }
                .galerry-slider-item-addstyle img {
                    height: auto;
                    width: 100%;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    -webkit-transform: translate(-50%, -50%);
                    transform: translate(-50%, -50%)
                }
                .galerry-slider-item-active {
                    opacity: 1;
                    -webkit-transition: opacity .5s;
                    transition: opacity .5s
                }
                .galerry-slider-arrow-prev {
                    left: -65px;
                }
                .galerry-slider-arrow-next {
                    right: -65px;
                }
                .galerry-slider-dots {
                    position: absolute;
                    bottom: 75px;
                    left: 50%;
                    margin-left: -65px;
                    z-index: 1000
                }
                .galerry-slider-dots li {
                    float: left;
                    height: 100%
                }
                .galerry-slider-dots li button {
                    width: 22px;
                    height: 100%;
                    background-color: #fff;
                    border: none;
                    border-radius: 2px;
                    color: transparent;
                    margin-right: 5px
                }
                .galerry-slider-dots li.slick-active button {
                    background-color: #ffd11a
                }
            `;

		document.head.appendChild(style);

		gallerySlider.classList.add('galerry-slider-addstyle');

		for (const item of slides) {
			item.classList.add('galerry-slider-item-addstyle');
		}

		slides[0].classList.add('galerry-slider-item-active');
	};

	const addSliderArrow = () => {
		spanArrowPrev.className = 'fa fa-arrow-left';
		spanArrowNext.className = 'fa fa-arrow-right';
		arrowPrev.className = 'slider-arrow galerry-slider-arrow-prev ';
		arrowNext.className = 'slider-arrow galerry-slider-arrow-next';

		gallerySlider.appendChild(arrowPrev);
		arrowPrev.appendChild(spanArrowPrev);
		gallerySlider.appendChild(arrowNext);
		arrowNext.appendChild(spanArrowNext);
	};

	const addSliderDots = () => {
		dots.style.height = '10px';
		dots.classList.add('galerry-slider-dots');

		for (let i = 0; i < slides.length; i++) {
			const lidot = document.createElement('li'),
				btn = document.createElement('button');
			dots.appendChild(lidot);
			btn.style.height = '100%';
			btn.setAttribute('index', i);
			lidot.appendChild(btn);
		}
		gallerySlider.appendChild(dots);
	};

	const prevSlide = () => {
		slides[currentSlide].classList.remove('galerry-slider-item-active');
		dot[currentSlide].classList.remove('slick-active');

	};

	const nextSlide = () => {
		slides[currentSlide].classList.add('galerry-slider-item-active');
		dot[currentSlide].classList.add('slick-active');
	};

	const autoPlaySlide = () => {
		prevSlide();
		currentSlide++;
		if (currentSlide >= slides.length) {
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

	gallerySlider.addEventListener('click', event => {
		const target = event.target;

		if (target.matches('.fa, [index]')) {
			prevSlide();
		} else {
			return;
		}

		switch (true) {
		case target.matches('[index]'):
			currentSlide = target.getAttribute('index');
			break;
		case target.matches('.fa-arrow-right'):
			currentSlide++;
			if (currentSlide >= slides.length) {
				currentSlide = 0;
			}
			break;
		case target.matches('.fa-arrow-left'):
			currentSlide--;
			if (currentSlide < 0) {
				currentSlide = slides.length - 1;
			}
			break;
		default:
			break;
		}

		nextSlide();
	});

	gallerySlider.addEventListener('mouseover', event => {
		if (event.target.closest('.gallery-slider')) {
			stopSlide();
		}
	});

	gallerySlider.addEventListener('mouseout', event => {
		if (event.target.closest('.gallery-slider')) {
			startSlide();
		}
	});

	addSliderStyle();
	addSliderArrow();
	addSliderDots();
	const dot = dots.querySelectorAll('li');
	dot[currentSlide].classList.add('slick-active');

	startSlide(3000);
};

export default showGallerySlider;
