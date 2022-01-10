import express from 'express'
import next from 'next'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import { errorHandler } from './middleware/errorHandler'
require('dotenv').config()

const host = process.env.HOST || 'localhost'
const port = Number(process.env.PORT) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const app = express()

  app.use(cookieParser())
  app.use(morgan('tiny'))
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  app.use(errorHandler)

  app.all('*', (req, res) => {
    return handle(req, res)
  })

  app.listen(port, host, () => {
    console.log(`>Ready on http://${host}:${port}`)
  })
})
