const tabSelector = (querySources, queryTargets) => {
	const [...tabs] = document.querySelectorAll(querySources);
	const [...contents] = document.querySelectorAll(queryTargets);
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
};

export default tabSelector;
