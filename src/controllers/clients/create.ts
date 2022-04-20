import {Request, Response} from 'express'

export const create = (req: Request, res: Response) : Response => {
  return res.send('Fullstack Master')
}

