import path from 'path';
import express from 'express';
import opener from 'opener';
import watch from 'node-watch';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';
import config from '../config/config';
import webpackConfig from '../webpack/webpack.config.dev';

const app = express();

app.set('view engine', config.templateEngine);
app.set('views', config.templatesDir);

if (config.staticDirs) {
	config.staticDirs.forEach(dir => {
		app.use(`/${dir}`, express.static(path.join(config.sourceDir, dir)));
	});
}

app.use('/node_modules', express.static(path.join(__dirname, '/../node_modules')));

const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
	publicPath: webpackConfig.output.publicPath,
	quiet: true,
	stats: {
		colors: true
	},
	serverSideRender: true
}));

const hotMiddleware = webpackHotMiddleware(compiler);

watch(config.templatesDir, { recursive: true }, (evt, name) => {
	hotMiddleware.publish({action: 'reload'});
});

app.use(hotMiddleware);

app.get(/^(\/|.*\.html)$/, (req, res) => {
	let template = req.path;

	if (template === '/') {
		template = 'index.html';
	}

	template = path.join(config.templatesDir, template.replace('.html', ''));

	res.render(template, {
		env: process.env.NODE_ENV,
		currentPage: req.path.replace('/', '')
	});
});

app.listen(config.devPort, () => {
	const host = config.host === '0.0.0.0' ? 'localhost' : config.host;
	console.log(`Listening at ${host}:${config.devPort}`);
	opener(`http://${host}:${config.devPort}`);
});
