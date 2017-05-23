import ejs from 'ejs';
import config from '../config/config';
import path from 'path';
import fs from 'fs';
import html from 'html';
const hash = Date.now();

fs.readdir(config.templatesDir, (err, files) => {
	if (err) {
		throw err;
	}

	files
		.filter(file => file.indexOf('.ejs') > -1)
		.forEach(file => {
			const templatePath = path.join(config.templatesDir, file);
			const targetPath = path.join(config.buildDir, file.replace('.ejs', '.html'));

			let generatedHTML = ejs.render(fs.readFileSync(templatePath, 'utf-8'), {
				env: process.env.NODE_ENV,
				hash,
				filename: templatePath,
				currentPage: file.replace('.ejs', '.html')
			});

			generatedHTML = html.prettyPrint(generatedHTML, {unformatted: []});

			fs.writeFileSync(targetPath, generatedHTML);
			console.log(`Rendered ${targetPath}`);
		});
});
