var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(bodyParser.json());

app.use(express.static('./'))

app.get('/', function(req, res)
{
  res.status(200);
  res.sendFile("index.html");
});

app.use('*', function (req, res)
{
  res.status(404);
  res.sendFile(__dirname + "/404.html");
});

app.listen(port, function ()
{
  console.log("== Server listening on port:", port);
});
