const express = require('express');
const hostname = "frostracktennis";
const app = express();
const POST = process.env.PORT || 443;

const handlebars = require('express-handlebars').create({
  defaultLayout: 'main'
});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.post('home.handlebars', function(req, res) {
    res.render('home.handlebars');
  res.send('You successfully created a POST route!');
});





// Get Handlebars

app.get('home.handlebars', function(req, res) {
    res.render('home.handlebars');
  res.send('You successfully created a GET route!');
});

app.get('about.handlebars', function(req, res) {
    res.render('about.handlebars');
  res.send('You successfully created a GET route!');
});

app.get('contact.handlebars', function(req, res) {
    res.render('contact.handlebars');
  res.send('You successfully created a GET route!');
});

app.get('solution.handlebars', function(req, res) {
    res.render('solution.handlebars');
  res.send('You successfully created a GET route!');
});

app.get('sponsors.handlebars', function(req, res) {
    res.render('sponsors.handlebars');
  res.send('You successfully created a GET route!');
});

app.get('shop.handlebars', function(req, res) {
    res.render('shop.handlebars');
  res.send('You successfully created a GET route!');
});

app.get('signUp.handlebars', function(req, res) {
    res.render('signUp.handlebars');
  res.send('You successfully created a GET route!');
});

app.get('friendRequest.handlebars', function(req, res) {
    res.render('friendRequest.handlebars');
  res.send('You successfully created a GET route!');
});

app.use((request, response) => {
  response.status(200);
  response.render('200');
});



///////////
app.put('/', function(req, res) {
  res.send('You successfully created a PUT route!');
});

app.delete('/', function(req, res) {
  res.send('You successfully created a DELETE route!');
});

app.listen(443, () => {
  console.log('Simple Server is running on 443');
});

server.listen(443, frostracktennis, () => {
  console.log(
    `Server started on http://${hostname}:${port}/; press Ctrl-C to terminate....`
  );
});