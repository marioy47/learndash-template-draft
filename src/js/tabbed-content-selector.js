/**
 * Adds or removes a class on an element after an item
 * of a tab is clicked
 */
const tabbedContentSelector = () => {
	const tabs = [...document.querySelectorAll('[data-tabbed-switch]')];
	tabs.forEach((el) => {
		el.addEventListener('click', (ev) => {
			const element = document.querySelector(
				ev.target.dataset.tabbedSwitchTarget
			);
			element.classList.add(ev.target.dataset.tabbedSwitchClass);
		});
	});
};

export default tabbedContentSelector;
