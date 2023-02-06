const newsRouter = require('./news')
const storeRouter = require('./store')
const siteRouter = require('./site')
const ProductRouter = require('./product')
// const ProductRouter = require('./product')


function route(app) {

  app.use('/news', newsRouter)
  app.use('/store', storeRouter)
  app.use('/product', ProductRouter)
  app.use('/', siteRouter)
  
}

module.exports = route