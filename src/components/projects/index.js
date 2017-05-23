import $ from 'jquery';
import context from '../../js/context';
const Isotope = require('isotope-layout');
require('isotope-packery');
require('./projects.scss');

$('.page-projects').each(function () {
	const container = $(this);
	const projectsContainer = container.find('.projects');

	setTimeout(() => {
		const isotope = new Isotope(projectsContainer.get(0), { // eslint-disable-line
			layoutMode: 'packery'
		});
	}, context.webpackDelay);
});
