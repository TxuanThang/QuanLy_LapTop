const path = require('path')
const express = require('express')
const app = express()
const morgan = require('morgan')
const hbs = require('express-handlebars')
const port = 3000
const route = require('./routes')
const db = require('./config/db')
const methodOverride = require('method-override')


// connect to DB
db.connect()


app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())
// HTTP logger
app.use(morgan('combined'))
// Template engine 
app.engine('hbs', hbs.engine(
  { extname: '.hbs',
    helpers: {
      sum:(a,b) => a + b,
    }    
}
));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
app.use(methodOverride('_method'))

route(app)