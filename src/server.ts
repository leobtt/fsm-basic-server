import express from 'express'
import { homeRouter } from './routes/home.routes'
import { clientRouter } from '../src/routes/clients.routes'
import path from 'path'

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.json())

app.use('/', homeRouter)
app.use('/clients', clientRouter)

if(process.env.NODE_ENV !== 'test'){
  app.listen(3000, () => console.log('server is running...'))
}
export default app