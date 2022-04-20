import { Router } from "express";
import { home, pagina, calc, par } from "../controllers/home";
const homeRouter = Router()
/* 
homeRouter.use((req,res,next) => {
  console.log('passou por aqui')
  return next()
})
 */
homeRouter.get('/', home)
homeRouter.get('/pagina', pagina)
homeRouter.get('/calc', calc)
homeRouter.get('/par/:num', par)

export { homeRouter }