const fs = require('fs');
const path = require('path');

const source = path.join(__dirname, 'src', 'index.html');
const destination = path.join(__dirname, 'build', 'index.html');

// Ensure the build folder exists
fs.mkdirSync(path.join(__dirname, 'build'), { recursive: true });

// Copy the file
fs.copyFileSync(source, destination);
console.log('Build complete: index.html copied to build/');
