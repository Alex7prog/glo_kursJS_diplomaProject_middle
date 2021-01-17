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
			target.matches('.form-wrapper') ||
			target.matches('.close-btn')) {
				toggleGift();
			}
		}
	});

};// end of callBackForm();

export default gift;
