const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.get('/', (req, res) => {
	res.render('colorPickerGame');
});

app.listen('3000', () => {
	// hostname = '127.0.0.1';
	// port = 3000;
	// console.log(`Color Picker running at http://${hostname}:${port}/`);
	process.env.PORT, process.env.IP;
});
