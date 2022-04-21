import { Response, Request } from "express";

export const home = (req: Request, res: Response) => {
  return res.render('home', { 
    time: 10,
    list: ['Leonardo','Rodrigo','Jessica'],
    animals: [
      { name: 'cacy' },
      { name: 'tihuana' },
      { name: 'Qqi' }
    ]
  })
}