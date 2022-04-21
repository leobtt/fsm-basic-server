import { Request, Response} from 'express'

export const par = (req : Request, res: Response) : Response => {
  const num = Number(req.params.num)
  const isPar = (num % 2) === 0

  if(isPar){
    return res.send('Número é par')
  } else {
    return res.send('Número é impar')
  }
}
