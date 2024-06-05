const mobile = document.querySelector('.mobile-icons'),
	navLink = document.querySelector('.nav-link');

mobile.addEventListener('click', () => {
	navLink.classList.toggle('show');
	mobile.classList.toggle('show');
});
