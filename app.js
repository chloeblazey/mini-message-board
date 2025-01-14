import express from 'express'
import { engine } from 'express-handlebars'

import { indexRouter } from './routes/indexRouter.js'
import newRouter from './routes/newRouter.js'

const app = express()
app.engine(
  'hbs',
  engine({
    defaultLayout: 'main',
    extname: 'hbs',
  })
)
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))

app.use('/', indexRouter)
app.use('/new', newRouter)

const PORT = Number(process.env.PORT) || 3000
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}!`)
})
