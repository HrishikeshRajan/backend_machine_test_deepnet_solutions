import express from 'express'
import  homeRouter from './routers/home.router.js'
import notFound from './utils/notFound.js'
import errorHandler from './utils/errorHandler.js'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

const app = express()


app.get('/healthCheck', (req, res) => {
  res.send('Hello World!')
})


app.use(cors({
  origin: '*',
}))

app.use('/api/v1/home', homeRouter)

app.use(notFound)

app.use(errorHandler)


export default app