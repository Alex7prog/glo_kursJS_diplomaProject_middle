//showServicesSlider
const showServicesSlider = () => {
	const section = document.getElementById('services'),
		wrapper = section.querySelector('.wrapper'),
		servicesSlider = document.querySelector('.services-slider'),
		arrowPrev = document.createElement('a'),
		arrowNext = document.createElement('a'),
		spanArrowPrev = document.createElement('span'),
		spanArrowNext = document.createElement('span'),
		responsive = [
			{
				breakpoint: 1024,
				slideToShow: 3
			},
			{
				breakpoint: 768,
				slideToShow: 1
			}
		];

	let slidesToShow = 5,
		slides = servicesSlider.querySelectorAll('.slide'),
		widthSlide = Math.floor(100 / slidesToShow);

	const addSliderStyle = () => {
		let style = document.getElementById('style-services-slider');
		if (!style) {
			style = document.createElement('style');
			style.id = 'style-services-slider';
		}

		style.textContent = `
				.service-slider-wrap-addstyle {
					overflow: hidden !important;
				}
				.service-slider-addstyle {
					transition-property: transform;
    				transition-duration: 0.5s;
					will-change: transform !important;
					justify-content: center;
				}
				.service-slider-item-addstyle {
					align-items: center;
					justify-content: center;
					flex: 0 0 ${widthSlide}% !important;
				}
				.services-slider-arrow {
					position: absolute;
					top: 45%;
					margin-top: -18px;
					z-index: 100;
					cursor: pointer
				}
				.services-slider-arrow.prev {
					left: 0px
				}
				.services-slider-arrow.next {
					right: 0px
				}
				.services-slider-arrow-span {
					width: 36px;
					height: 37px;
					background-color: #f4c71b;
					border-radius: 50%;
					text-align: center;
					padding-top: 11px
				}
			`;

		document.head.appendChild(style);

		wrapper.classList.add('service-slider-wrap-addstyle');
		servicesSlider.classList.add('service-slider-addstyle');

		for (const item of slides) {
			item.classList.add('service-slider-item-addstyle');
		}

		wrapper.style.position = 'relative';

		spanArrowPrev.className = 'fa fa-arrow-left services-slider-arrow-span';
		spanArrowNext.className = 'fa fa-arrow-right services-slider-arrow-span';
		arrowPrev.className = 'services-slider-arrow prev';
		arrowNext.className = 'services-slider-arrow next';

		wrapper.appendChild(arrowPrev);
		arrowPrev.appendChild(spanArrowPrev);
		wrapper.appendChild(arrowNext);
		arrowNext.appendChild(spanArrowNext);
	};

	const prevSlider = () => {
		const slideClone = slides[slides.length - 1].cloneNode(true);
		servicesSlider.prepend(slideClone);

		servicesSlider.style.transform = `translateX(${widthSlide / 2}%)`;

		setTimeout(() => {
			servicesSlider.style.transitionDuration = '0s';
			slides[slides.length - 1].remove();
			slides = servicesSlider.querySelectorAll('.slide');
			servicesSlider.style.transform = `translateX(0%)`;
		}, 550);

		servicesSlider.style.transitionDuration = '0.5s';
	};

	const nextSlider = () => {
		const slideClone = slides[0].cloneNode(true);
		servicesSlider.append(slideClone);

		servicesSlider.style.transform = `translateX(-${widthSlide / 2}%)`;

		setTimeout(() => {
			servicesSlider.style.transitionDuration = '0s';
			slides[0].remove();
			slides = servicesSlider.querySelectorAll('.slide');
			servicesSlider.style.transform = `translateX(0%)`;
		}, 550);

		servicesSlider.style.transitionDuration = '0.5s';
	};

	const responseServiceSlider = () => {
		const slidesToShowDefault = slidesToShow;
		const allResponse = responsive.map(item => item.breakpoint);
		const maxResponse = Math.max(...allResponse);

		const checkResponse = () => {
			const widthWindow = document.documentElement.clientWidth;

			if (widthWindow < maxResponse) {
				for (let i = 0; i < allResponse.length; i++) {
					if (widthWindow < allResponse[i]) {
						slidesToShow = responsive[i].slideToShow;
						widthSlide = Math.floor(100 / slidesToShow);
						addSliderStyle();
					}
				}
			} else {
				slidesToShow = slidesToShowDefault;
				widthSlide = Math.floor(100 / slidesToShow);
				addSliderStyle();
			}
		};

		checkResponse();

		window.addEventListener('resize', checkResponse);
	};

	wrapper.addEventListener('click', event => {
		if (event.target.matches('.fa-arrow-left')) {
			prevSlider();
		} else if (event.target.matches('.fa-arrow-right')) {
			nextSlider();
		}
	});

	responseServiceSlider();

};//end of showServicesSlider

export default showServicesSlider;
