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

export default callBackForm;
