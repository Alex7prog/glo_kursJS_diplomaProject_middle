// thanksForm (сообщение об удачной отправке данных пользователя или ошибки)
const thanksForm = () => {
	const popupThanksForm = document.getElementById('thanks');

	popupThanksForm.addEventListener('click', event => {
		const target = event.target;

		if (target.matches('.close_icon') ||
				target.matches('.overlay') ||
				target.matches('.close-btn')) {
			popupThanksForm.style.display = '';
		}
	});

};// end of thanksForm();

export default thanksForm;
