const myutil = require('./myutil');
const events = require('events');
const express = require('express'); 
const cons = require('consolidate');
let {log, slow} = myutil;

// -------------------------------------------
log('app.js starts');
let app = express();
// assign the handlebars engine to .html files
app.engine('hbs', cons.handlebars);
// set .html as the default extension
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use((req, res, next) => (log(new Date().toString(), '\nreq.id is', req.id, '\nreq.method is', req.method, '\nreq.url is', req.url),next()), express.static('public'));
commonPartials = {about: __dirname + '/views/partials/about'};
commonHelpers = {getCurrentYear: function(){return new Date().getFullYear();}, addOne: function(num) {return num++}}

app.get('/about', (req, res) => {
    res.render('index', {getCurrentYear:20, partials: Object.assign({}, commonPartials), helpers: Object.assign({}, commonHelpers)}) ;
}) 
app.listen(5000);

log('app.js ends');