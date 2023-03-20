import toggleClassForTriggerSelector from './toggle-class';

window.addEventListener('DOMContentLoaded', () => {
	toggleClassForTriggerSelector(
		'data-toggle-class-target',
		'data-toggle-class-value'
	);
});
