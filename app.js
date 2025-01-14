import express from 'express'
import { engine } from 'express-handlebars'

const app = express()
app.engine(
  'hbs',
  engine({
    defaultLayout: 'main',
    extname: 'hbs',
  })
)
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.render('index', { message: 'Hello World!' })
})

const PORT = Number(process.env.PORT) || 3000
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}!`)
})
