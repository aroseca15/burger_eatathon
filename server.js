let express = require('express');
let exphbs  = require('express-handlebars');
 
let app = express();
 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));
 
app.get('/', function (req, res) {
    res.render('home');
});
 
app.listen(3000);