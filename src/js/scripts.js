import toggleClassForTriggerSelector from './toggle-class';
import tabbedContentSelector from './tabbed-content-selector';

window.addEventListener('DOMContentLoaded', () => {
	toggleClassForTriggerSelector(
		'data-toggle-class-target',
		'data-toggle-class-value'
	);
	tabbedContentSelector();
});
