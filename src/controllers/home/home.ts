import { Response, Request } from "express";

export const home = (req: Request, res: Response) : Response => {
  return res.json({ ok : 'Fullstack Master'})
}