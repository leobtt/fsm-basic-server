import express from 'express'
import { homeRouter } from './routes/home.routes'
import { clientRouter } from '../src/routes/clients.routes'

const app = express()

app.use(express.json())

app.use('/', homeRouter)
app.use('/clients', clientRouter)

if(process.env.NODE_ENV !== 'test'){
  app.listen(3000, () => console.log('server is running...'))
}
export default app