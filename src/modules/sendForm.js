//sendForm

const sendForm = () => {
	const loadMessage = 'Передача данных...',
		successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

	const formCallBack = document.getElementById('form1'),
		formFreeVisit = document.getElementById('form2'),
		formBanner = document.getElementById('banner-form'),
		formCardOrder = document.getElementById('card_order'),
		formFooterForm = document.getElementById('footer_form');


	const statusMessage = document.createElement('div');

	const patternInputForm = new Map([
			['name', /[^А-яЁё\s]+$/],
			['phone', /[^+? \d]/]
		]),
		patternTestInputForm = new Map([
			['name', /^[А-яЁё]{2,}[\s]?[А-яЁё]*$/],
			['phone', /^\+\d{12}$/]
		]),
		titleInputForm = new Map([
			['name', 'Используйте ввод только кириллицы и пробелов. Должно содержать минимум 2-е буквы.'],
			['phone', 'Укажите номер телефона в формате: + 12 цифр или 12 цифр.']
		]);

	const priceClubCards = {
		'mozaika': { '1s': 1999, '6s': 9900, '9s': 13900, '12d': 9900, '12s': 19900 },
		'schelkovo': { '1s': 2999, '6s': 14990, '9s': 21990, '12d': 14990, '12s': 24990 }
	};


	statusMessage.style.cssText = 'font-size: 2rem; color: white;';

	// отправка данных формы на сервер
	const postData = body => fetch('./server.php', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body)
	});

	// подготовка данных формы
	const formDataPost = event => {
		event.preventDefault();
		const form = event.target,
			formInput = form.querySelectorAll('input'),
			formThanks = document.getElementById('thanks');

		let formDataValid = true,
			formRadioChecked = false;

		if (form.querySelector('[placeholder="Промокод"]')) {
			form.querySelector('[placeholder="Промокод"]').name = 'name-promo';
		}

		const inputErrorMessage = (element, errorText, check, timeMessage = 2500) => {
			if (!check) {
				const divError = document.createElement('div');

				divError.style.color = 'orangered';
				form.append(divError);

				divError.textContent = errorText;
				element.style.border = 'solid orangered 1px';

				setTimeout(() => {
					element.style.border = '';
				}, timeMessage);
				setTimeout(() => {
					divError.remove();
				}, timeMessage);
			} else {
				element.style.border = 'solid green 1px';
				setTimeout(() => {
					element.style.border = '';
				}, timeMessage);
			}

		};

		if (form.querySelector('.personal-data')) {
			const personalDataCheck = form.querySelector('.personal-data');
			if (!personalDataCheck.querySelector('input').checked) {
				formDataValid = false;
				inputErrorMessage(personalDataCheck,
					'Необходимо дать согласие на обработку персональных данных', formDataValid);
			}
		}

		if (form.querySelector('[name="club-name"]')) {
			const clubName = form.querySelectorAll('[name="club-name"]');

			clubName.forEach(elem => {
				if (elem.checked) {
					formRadioChecked = true;
				}
			});

			if (!formRadioChecked) {
				inputErrorMessage(clubName[0], 'Выберите клуб', formRadioChecked);
			}
		} else {
			formRadioChecked = true;
		}

		form.querySelectorAll('[type="text"], [type="tel"]').forEach(elem => {

			if (elem.placeholder !== 'Промокод') {
				elem.value = elem.value.trim();
				if (!patternTestInputForm.get(elem.name).test(elem.value)) {
					formDataValid = false;
					inputErrorMessage(elem, `Неверный формат данных. Введите "${elem.placeholder}" еще раз.`,
						false);
				} else {
					inputErrorMessage(elem, '', true);
				}
			}
		});

		if (!formDataValid || !formRadioChecked) { return; }

		const formData = new FormData(form),
			body = {};

		if (form.id === 'card_order' && form.querySelector('#price-total')) {
			body['price-total'] = form.querySelector('#price-total').textContent;
		}

		formData.forEach((val, key) => {
			if (key !== 'form_name') {
				body[key] = val;
			}
		});

		if (form.id === 'card_order' && form.querySelector('.cards-types')) {
			const pageClub = document.querySelector('.club-head').querySelector('h3');
			const cardsClubName = (pageClub.textContent === 'Тело Мозаика') ? 'mozaika' : 'schelkovo';
			body['club-name'] = cardsClubName;
			body['card-price'] = priceClubCards[cardsClubName][body['card-type']];
		}

		statusMessage.textContent = loadMessage;
		form.appendChild(statusMessage);

		const messagePost = msg => {
			if (form.closest('.popup')) {
				form.closest('.popup').style.display = 'none';
			}
			statusMessage.remove();
			formThanks.style.display = 'block';
			formThanks.querySelector('p').textContent = msg;
		};

		postData(body)
			.then(response => {
				if (response.status !== 200) {
					throw new Error('status network not 200');
				}

				messagePost(successMessage);

				formInput.forEach(elem => {
					if (elem.type === 'text' || elem.type === 'tel') {
						elem.value = '';
					}
				});
			})
			.catch(error => {
				messagePost(error);

			});


	}; // end formDataPost()

	const validInputForm = function() {
		const pattern = patternInputForm.get(this.name);

		this.title = titleInputForm.get(this.name);

		if (this.name === 'phone') {
			if (this.value[0] === '+') {
				this.value = this.value.replace(pattern, '');
			} else if (this.value.length > 0) {
				this.value = '+' + this.value.replace(pattern, '');
			}
			if (this.value.length >= 13) {
				this.value = this.value.substr(0, 13);
			}
		} else {
			if (this.placeholder !== 'Промокод') {
				this.value = this.value.replace(pattern, '');
			} else {
				this.value = this.value.replace(/[^А-яЁё0-9\s]+$/, '');
			}
		}
	};

	formCallBack.setAttribute('novalidate', true);
	formCallBack.addEventListener('submit', formDataPost);

	formFreeVisit.setAttribute('novalidate', true);
	formFreeVisit.addEventListener('submit', formDataPost);

	formBanner.setAttribute('novalidate', true);
	formBanner.addEventListener('submit', formDataPost);

	formCardOrder.setAttribute('novalidate', true);
	formCardOrder.addEventListener('submit', formDataPost);

	formFooterForm.setAttribute('novalidate', true);
	formFooterForm.addEventListener('submit', formDataPost);

	document.addEventListener('click', event => {
		const target = event.target;

		if (patternInputForm.has(target.name)) {
			target.addEventListener('input', validInputForm);
		}
	});

}; //end sendForm()

export default sendForm;

