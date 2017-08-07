require('dotenv').config();

const PORT = process.env.PORT || 3000;
const express = require('express');
const routes = require('./src/routes/index');
const path = require('path');

const app = express();

app.set ('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/', routes);

app.listen(PORT, () => {
	console.log(`Express server listening on ${PORT}`);
});
