//showButtonToTop - отображение стрелки при проскролле 1-го блока страницы
const showButtonToTop = () => {
	const buttonToTop = document.getElementById('totop'),
		secondBlock = document.getElementById('banner'),
		topMenu = document.querySelector('.top-menu');

	buttonToTop.style.display = 'none';

	window.addEventListener('scroll', () => {

		if (window.pageYOffset > secondBlock.offsetTop - topMenu.offsetHeight) {
			buttonToTop.style.display = 'inline-block';
		} else {
			buttonToTop.style.display = 'none';
		}
	});

};

export default showButtonToTop;

