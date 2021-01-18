const showMenuBurger = () => {
	const menuTop = document.querySelector('.top-menu'),
		menuNav = menuTop.querySelector('ul'),
		menuBurger = menuTop.querySelector('.menu-button'),
		menuTopOffsetTop = menuTop.offsetTop;

	window.addEventListener('resize', () => {
		const widthWindow = document.documentElement.clientWidth;

		if (widthWindow < 768) {
			menuNav.style.display = 'none';
			menuBurger.classList.add('menu-burger-fix');
		} else {
			menuNav.style.display = 'flex';
			menuBurger.classList.remove('menu-burger-fix');
		}
	});

	window.addEventListener('scroll', () =>{
		if (menuTopOffsetTop <= window.pageYOffset) {
			menuTop.classList.add('menu-fix');
		} else {
			menuTop.classList.remove('menu-fix');
		}
	});

};

export default showMenuBurger;
