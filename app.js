const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

// handlebars helpers
const {
  truncate,
} = require('./helpers/hbs');

const app = express();

// Load router
const index = require('./routes/index');
const about = require('./routes/about');
const myWork = require('./routes/myWork');
const contact = require('./routes/contact');

app.use('*/public', express.static('public'));

// Handlebars Middleware
app.engine('hbs', exphbs({
  extname: 'hbs',
  defaultLayout: 'main',
  LayoutsDir: __dirname + '/views/layouts',
  partialsDir: __dirname + '/views/partials',
  myWorkDir: __dirname + '/views/myWork',
  helpers: {
    truncate
  }
}));
app.set('view engine', 'hbs');

// Use routes
app.use('/', index);
app.use('/about', about);
app.use('/portfolio', myWork);
app.use('/contact', contact);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server started on ${port}`);
})

//references: https://www.youtube.com/watch?v=xodD0nw2veQ for toggle switch
//references: https://shashankracherla.com/ portfolio reference
//references: https://www.youtube.com/watch?v=Q76tlblH5Mw for adding portfolio