const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.get('/', (req, res) => {
	res.render('colorPickerGame');
});

app.listen(process.env.PORT, process.env.IP);
