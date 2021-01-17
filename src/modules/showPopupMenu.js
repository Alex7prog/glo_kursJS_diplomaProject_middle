//popupMenu
const showPopupMenu = () => {
	const menuTop = document.querySelector('.top-menu'),
		btnBurger = menuTop.querySelector('img'),
		popupMenu = document.querySelector('.popup-menu');

	const handlerMenu = () => {
		popupMenu.classList.toggle('popup-menu-active');
	};

	document.addEventListener('click', event => {
		const target = event.target;

		if (target.closest('.popup-menu')) {
			if (target.closest('.close-menu-btn')) {
				handlerMenu();
			} else {
				if (target.tagName === 'A') {
					// предполагаемый в дальнейшем код
					handlerMenu();
				}
			}
		}

		if (target === btnBurger) {
			handlerMenu();
		}
	});
}; // end of showPopupMenu()

export default showPopupMenu;

