import {Request, Response} from 'express'

export const list = (req: Request, res: Response): Response => {
  return res.send('Fullstack Master')
}