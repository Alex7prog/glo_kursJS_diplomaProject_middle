// Седьмой А. Дипломный проект. GloAcademy. Средний.

window.addEventListener('DOMContentLoaded', () => {

	'use strict';

	// menuClub (выпадающее меню ВЫБРАТЬ КЛУБ)
	const menuClub = () => {
		const clubList = document.querySelector('.clubs-list ul');

		const toggleMenuClub = () => {
			clubList.style.display = (clubList.style.display === 'block') ? 'none' : 'block';
		};

		document.addEventListener('click', event => {
			const target = event.target;

			if (target.closest('.clubs-list')) {
				toggleMenuClub();
			} else {
				if (clubList.style.display === 'block') { toggleMenuClub(); }
			}
		});

	}; //end of menuClub()

	menuClub();

	// freeVisitForm (Записаться на бесплатный визит)
	const freeVisitForm = () => {
		const popupfreeVisitForm = document.getElementById('free_visit_form');

		const togglefreeVisitForm = () => {
			popupfreeVisitForm.style.display = (popupfreeVisitForm.style.display === 'block') ? 'none' : 'block';
		};

		document.addEventListener('click', event => {
			const target = event.target;

			if (target.closest('.open-popup')) {
				togglefreeVisitForm();
			}

			if (target.closest('#free_visit_form')) {
				if (target.matches('.close_icon') ||
				target.matches('.overlay') ||
				target.matches('.form-wrapper')) {
					togglefreeVisitForm();
				}
			}
		});

	};// end of freeVisitForm();

	freeVisitForm();

	// callBackForm (ПЕРЕЗВОНИТЕ МНЕ)
	const callBackForm = () => {
		const popupCallBackForm = document.getElementById('callback_form');

		const toggleCallBackForm = () => {
			popupCallBackForm.style.display = (popupCallBackForm.style.display === 'block') ? 'none' : 'block';
		};

		document.addEventListener('click', event => {
			const target = event.target;

			if (target.closest('.callback-btn')) {
				toggleCallBackForm();
			}

			if (target.closest('#callback_form')) {
				if (target.matches('.close_icon') ||
				target.matches('.overlay') ||
				target.matches('.form-wrapper')) {
					toggleCallBackForm();
				}
			}
		});

	};// end of callBackForm();

	callBackForm();

	// gift (ПОДАРОК)
	const gift = () => {
		const btnCallBack = document.querySelector('.fixed-gift'),
			popupGift = document.getElementById('gift');

		const toggleGift = () => {
			popupGift.style.display = (popupGift.style.display === 'block') ? 'none' : 'block';
		};

		document.addEventListener('click', event => {
			const target = event.target;

			if (target.closest('.fixed-gift')) {
				toggleGift();
				btnCallBack.style.display = 'none';
			}

			if (target.closest('#gift')) {
				if (target.matches('.close_icon') ||
				target.matches('.overlay') ||
				target.matches('.form-wrapper')) {
					toggleGift();
				}
			}
		});

	};// end of callBackForm();

	gift();

	//showMainSlider
	const showMainSlider = () => {
		const mainSlider = document.querySelector('.main-slider'),
			arrayMainSlider = [...mainSlider.children];

		let currentSlide = 0;

		const autoPlaySlide = () => {
			arrayMainSlider[currentSlide].style.display = 'none';
			currentSlide++;

			if (currentSlide >= arrayMainSlider.length) {
				currentSlide = 0;
			}

			arrayMainSlider[currentSlide].style.display = 'flex';
			console.log('arrayMainSlider[currentSlide]: ', arrayMainSlider[currentSlide]);
		};

		setInterval(autoPlaySlide, 2500);

	}; //end of mainSlider

	showMainSlider();


}); //end of window.addEventListener()
