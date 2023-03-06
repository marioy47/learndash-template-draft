(function () {
	'use strict';
	const [...tabs] = document.querySelectorAll(
		'[data-selector-type="display-content"]'
	);
	const [...contents] = document.querySelectorAll('[data-content-id]');
	tabs.forEach((tab) => {
		tab.addEventListener('click', (ev) => {
			ev.preventDefault();
			const itemToDisplay = ev.target.dataset.selectorTarget;
			contents.forEach((content) => {
				if (itemToDisplay === content.dataset.contentId) {
					content.style.setProperty('--display', 1);
				} else {
					content.style.setProperty('--display', 0);
				}
			});
		});
	});
})();
