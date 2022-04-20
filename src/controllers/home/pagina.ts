import { Request, Response} from 'express'

export const pagina = (req: Request, res: Response) : Response => {
  return res.send('Fullstack Master')
}