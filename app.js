const express = import('express')

const app = express()

const PORT = Number(process.env.PORT) || 3000
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}!`)
})