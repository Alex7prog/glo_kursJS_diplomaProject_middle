const showMenuBurger = () => {
	window.addEventListener('resize', () => {
		const widthWindow = document.documentElement.clientWidth,
			menuTop = document.querySelector('.top-menu'),
			menuNav = menuTop.querySelector('ul'),
			menuBurger = menuTop.querySelector('.menu-button');

		if (widthWindow < 768) {
			menuNav.style.display = 'none';
			menuBurger.classList.add('menu-burger-fix');
		} else {
			menuNav.style.display = 'flex';
			menuBurger.classList.remove('menu-burger-fix');
		}
	});
};

export default showMenuBurger;
