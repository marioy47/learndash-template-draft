/**
 * Toggles a class for all the elements with a certain target.
 *
 * Usage in HTML:
 * ```html
 * <a data-toggle-class-target="elements-with-x-class" data-toggle-class-value="add-remove-class-when-iam-clicked" />
 * ```
 *
 * @param {string} selectorAttribute Something lie '[data-toggle-class-target]
 * @param {string} selectorWithValue The selector where the value is
 */
const toggleClassForTriggerSelector = (
	selectorAttribute,
	selectorWithValue
) => {
	const elements = document.querySelectorAll('[' + selectorAttribute + ']');

	[...elements].forEach((el) => {
		const targetClass = el.getAttribute(selectorAttribute);
		const valueToSet = el.getAttribute(selectorWithValue);
		el.addEventListener('click', () => {
			const targets = document.querySelectorAll('.' + targetClass);
			[...targets].forEach((item) => {
				item.classList.toggle(valueToSet);
			});
		});
	});
};

export default toggleClassForTriggerSelector;
