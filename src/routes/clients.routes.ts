import { Router }from 'express'
const clientRouter = Router()

import {create, list} from '../controllers/clients'

clientRouter.get('/list', create)
clientRouter.get('/new', list)

export { clientRouter }