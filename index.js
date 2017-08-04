if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const PORT = process.env.PORT || 3000;
const express = require('express');
const routes = require('./src/routes/index');

const app = express();

app.set ('views', 'views');
app.set('view engine', 'ejs');
app.set('html', require('ejs'));

app.use('/', routes);

app.listen(PORT, () => {
	console.log(`Express server listening on ${PORT}`);
});