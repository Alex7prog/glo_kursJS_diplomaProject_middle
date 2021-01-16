// menuClub (выпадающее меню ВЫБРАТЬ КЛУБ)
const menuClub = () => {
	const clubList = document.querySelector('.clubs-list ul');

	const toggleMenuClub = () => {
		clubList.style.display = (clubList.style.display === 'block') ? 'none' : 'block';
	};

	document.addEventListener('click', event => {
		const target = event.target;

		if (target.closest('.clubs-list')) {
			toggleMenuClub();
		} else {
			if (clubList.style.display === 'block') { toggleMenuClub(); }
		}
	});

}; //end of menuClub()

export default menuClub;
