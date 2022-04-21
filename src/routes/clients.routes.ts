import { Router }from 'express'
const clientRouter = Router()

import {create, list} from '../controllers/clients'

clientRouter.get('/list', list)
clientRouter.get('/new', create)

export { clientRouter }