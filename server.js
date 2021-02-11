let express = require('express');
let exphbs = require('express-handlebars');
let bPars = require('body-parser');
let app = express();
let routes = require('../burger_eatathon/controllers/burger_controllers');

// Handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Static Set Up
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

// Body Parser
app.use(bPars.urlencoded({ extended: true }));
app.use(bPars.json());

// Routes
app.use(routes);

// PORT:
let PORT = process.env.PORT || 3080;
app.listen(PORT, function(){
    console.log("Server is listening at: PORT" + PORT);
});