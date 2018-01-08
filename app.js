var express = require('express');
var todocontroller = require('./controlers/todocontroller');


var app = express();


//set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//fire controllers
todocontroller(app);

//listen to a port
app.listen(3000);
console.log('you are listening to port:3000');
