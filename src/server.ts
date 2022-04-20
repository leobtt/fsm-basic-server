import express from 'express'
import { homeRouter } from './routes/home.routes'
import { clientRouter } from '../src/routes/clients.routes'

const app = express()

app.use(express.json())

app.use('/', homeRouter)
app.use('/clients', clientRouter)

app.listen(3333, () => console.log('server is running...'))
