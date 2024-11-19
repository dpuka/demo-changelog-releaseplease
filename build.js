const fs = require('fs');
const path = require('path');

// Load the package.json
const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'), 'utf-8'));
const appVersion = packageJson.version;

// Read the source HTML
const sourceHtmlPath = path.join(__dirname, 'src', 'index.html');
let htmlContent = fs.readFileSync(sourceHtmlPath, 'utf-8');

// Inject the version into the HTML
htmlContent = htmlContent.replace('<span id="version"></span>', `<span id="version">${appVersion}</span>`);

// Write the updated HTML to the build folder
const buildFolder = path.join(__dirname, 'build');
fs.mkdirSync(buildFolder, { recursive: true });
fs.writeFileSync(path.join(buildFolder, 'index.html'), htmlContent);

console.log(`Build complete: index.html with version ${appVersion} created in build/`);
