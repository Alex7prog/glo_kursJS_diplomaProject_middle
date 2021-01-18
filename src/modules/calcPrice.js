//calculator
const calcPrice = () => {
	const cardOrder = document.getElementById('card_order'),
		inputPromoCode = cardOrder.querySelector('[name="name"]'),
		priceTotal = document.getElementById('price-total');

	const priceClub = {
			'mozaika': { '1': 1999, '6': 9900, '9': 13900, '12': 19900 },
			'schelkovo': { '1': 2999, '6': 14990, '9': 21990, '12': 24990 }
		},
		promoCodeText = 'ТЕЛО2019';

	let selectedTime = '1',
		selectedClub = 'mozaika',
		discount = 0,
		total = priceClub[selectedClub][selectedTime];

	priceTotal.textContent = total;

	const animateTotal = () => {
		let counter = +priceTotal.textContent,
			requestId;

		const step = Math.floor((Math.abs(total - counter) / 10));

		const animateCount = () => {
			if (counter < total) {
				counter += step;
				if (counter > total) { counter = total; }
			} else if (counter > total) {
				counter -= step;
				if (counter < total) { counter = total; }
			}

			priceTotal.textContent = counter;

			if (counter === total) {
				cancelAnimationFrame(requestId);
				console.log('cancelAnimationFrame: OK');
				return;
			}
			requestAnimationFrame(animateCount);
		};

		requestId = requestAnimationFrame(animateCount);
	};

	document.addEventListener('click', event => {
		const target = event.target;

		if (target.matches('[type="radio"]')) {
			if (target.matches('[name="club-name"]')) {
				selectedClub = target.value;
			} else if (target.matches('[name="card-type"]')) {
				selectedTime  = target.value;
			}
			total = Math.round(priceClub[selectedClub][selectedTime] * (1 - discount));
			animateTotal();
		}
	});

	inputPromoCode.addEventListener('change', () => {
		if (inputPromoCode.value === promoCodeText) {
			discount = 0.3;
		} else {
			discount = 0;
		}
		total = Math.round(priceClub[selectedClub][selectedTime] * (1 - discount));
		animateTotal();
	});
}; // end of calcPrice()


export default calcPrice;
