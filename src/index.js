import 'bootstrap';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
require('./style/main.scss');
require('./components/index.js');

if (module.hot) {
	module.hot.accept('./components/index.js', () => {
		require('./components/index.js');
	});

	const hotClient = require('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true');

	hotClient.subscribe(event => {
		if (event.action === 'reload') {
			window.location.reload();
		}
	});
}
