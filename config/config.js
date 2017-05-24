import path from 'path';

export default {
	sourceDir: path.resolve(path.join(__dirname, '/../src')),
	templateEngine: 'ejs',
	templatesDir: path.resolve(path.join(__dirname, '/../src/templates')),
	buildDir: path.resolve(path.join(__dirname, '/../_html')),
	dllDir: path.join(path.resolve(path.join(__dirname, '/../node_modules')), '_dll'),
	dllFileName: 'vendors.js',
	devPort: 3000,
	prodPort: 8080,
	host: '0.0.0.0',
	staticDirs: ['img', 'fonts'],
	copyDirs: ['img', 'fonts'],
	aliases: {
		'masonry': 'masonry-layout',
		'isotope': 'isotope-layout'
	}
};
