import { Router } from 'express'

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
]

const pushMessage = (body) => {
  messages.push({
    text: body.text,
    user: body.user,
    added: new Date(),
  })
}

const indexRouter = Router()

indexRouter.get('/', (req, res) => {
  res.render('index', { layout: 'main', messages: messages })
})

export { indexRouter, pushMessage }
