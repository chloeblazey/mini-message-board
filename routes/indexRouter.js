import { Router } from 'express'

const indexRouter = Router()

indexRouter.get('/', (req, res) => {
  res.render('index', { layout: 'main', message: 'Hello, World!' })
})

export default indexRouter
