//calculator
const calcPrice = () => {

	const cardOrder = document.getElementById('card_order'),
		time = cardOrder.querySelector('.time'),
		cardTerm = time.querySelectorAll('input'),
		cardMozaika = document.getElementById('card_leto_mozaika'),
		cardSchelkovo = document.getElementById('card_leto_schelkovo'),
		inputPromoCode = cardOrder.querySelector('[name="name"]'),
		priceTotal = document.getElementById('price-total');

	const priceClub = {
		'mozaika': { '1': 1999, '6': 9900, '9': 13900, '12': 19900 },
		'schelkovo': { '1': 2999, '6': 14990, '9': 21990, '12': 24990 }
	};

	let selectedTime = '1',
		selectedClub = 'mozaika',
		discount = 0,
		price;

	priceTotal.textContent = priceClub[selectedClub][selectedTime];
	console.log();

	document.addEventListener('click', event => {
		const target = event.target;
		if (target.matches('[type="radio"]')) {
			if (target.matches('[name="club-name"]')) {
				selectedClub = target.value;
			} else if (target.matches('[name="card-type"]')) {
				selectedTime  = target.value;
			}
			price = Math.round(priceClub[selectedClub][selectedTime] * (1 - discount));
			priceTotal.textContent = price;
		}
	});

	inputPromoCode.addEventListener('change', () => {
		if (inputPromoCode.value === 'ТЕЛО2019') {
			discount = 0.3;
		} else {
			discount = 0;
		}
		price = Math.round(priceClub[selectedClub][selectedTime] * (1 - discount));
		priceTotal.textContent = price;
	});



}; // end of calcPrice


export default calcPrice;
