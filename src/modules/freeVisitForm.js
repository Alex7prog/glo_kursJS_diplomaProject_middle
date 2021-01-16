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

export default freeVisitForm;
