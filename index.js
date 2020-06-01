const express = require('express');
const hbs = require('hbs');
const routes = require('./routes/routes.js');

// TODO: modify the path below to the js file you made
const db = require('./models/db.js');

const port = 9090;
const app = express();

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'));
app.use('/', routes);

db.connect();

app.listen(port, function() {
	console.log('Listening at port ' + port);
});
