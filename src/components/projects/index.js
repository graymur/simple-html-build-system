import $ from 'jquery';
import context from '../../js/context';
const Isotope = require('isotope-layout');
const Packery = require('isotope-packery');
require('./projects.scss');

$('.page-projects').each(function () {
	const container = $(this);
	const projectsContainer = container.find('.projects');

	/*eslint-disable */
	setTimeout(() => {
		const iso = new Isotope(projectsContainer.get(0), {
			layoutMode: 'packery'
		});
	}, context.webpackDelay);
	/*eslint-enable */
});
