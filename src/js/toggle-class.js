const toggleClass = () => {
	const elements = document.querySelectorAll('[data-toggle-class-target]');

	[...elements].forEach((el) => {
		const targetClass = el.dataset.toggleClassTarget;
		const valueToSet = el.dataset.toggleClassValue;
		el.addEventListener('click', () => {
			console.log('clicked');
			const targets = document.querySelectorAll('.' + targetClass);
			[...targets].forEach((item) => {
				item.classList.toggle(valueToSet);
			});
		});
	});
};

export default toggleClass;
