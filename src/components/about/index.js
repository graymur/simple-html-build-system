import './about.scss';
import $ from 'jquery';
const mapsapi = require('google-maps-api')('AIzaSyDU78Ayt-Iqh5EBq6PQpKUp70ORnF8Aur4');

$('.page-about').each(function () {
	const container = $(this);
	const mapContainer = container.find('#map');
	const lat = mapContainer.data('lat');
	const lon = mapContainer.data('lon');

	mapsapi().then(maps => {
		const options = {
			zoom: 19,
			center: {lat: lat, lng: lon}
		};

		const map = new maps.Map(mapContainer.get(0), options);

		map.setMapTypeId(maps.MapTypeId.SATELLITE);
	}).catch(err => {
		console.error(err);
	});
});
