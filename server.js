let express = require('express');
let exphbs = require('express-handlebars');
let bPars = require('body-parser');
let app = express();
let routes = require('./controllers/burger_controllers');

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
app.get('/', function (req, res) {
    res.render('home');
});
app.use(routes);

app.listen(3000);



// let PORT = process.env.PORT || 3000;
// app.listen(PORT, function(){
//     console.log("Server is listening at: PORT" + PORT);
// });