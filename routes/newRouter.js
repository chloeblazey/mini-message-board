import { Router } from 'express'

import { pushMessage } from './indexRouter.js'

const newRouter = Router()

newRouter.get('/', (req, res) => {
  res.render('form', { layout: 'main' })
})

newRouter.post('/', (req, res) => {
  pushMessage(req.body)
  res.redirect('/')
})

export default newRouter
