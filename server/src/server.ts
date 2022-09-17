import express from 'express'

const app = express()

app.get('/ads', (request, response) => {
  return response.json([
    {id: 1, name: 'Anúncio1' }
  ])
})

app.listen(3333)