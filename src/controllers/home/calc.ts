import { Request, Response} from 'express'

export const calc = (req : Request, res : Response) : Response => {
  const { n1 , n2 } = req.query
  const soma = Number(n1) + Number(n2)
  if(n1 && n2){
    return res.json({ valorDaSoma : soma})
  }
  
  return res.json({valorDaSoma: 'nenhum número fornecido'})
}