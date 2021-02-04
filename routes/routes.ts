import { Request, Response, Router } from 'express';
import FormsController from '../controller/FormsController';
import FormsFrontPoint from '../controller/frontpoint/FormsFrontPoint';

const routes = Router()

routes.post('/formdatas', FormsController.getDataForm) // <- linkedin form


routes.post('/fpcarreira', FormsFrontPoint.Carreira)
routes.post('/fpnegocio', FormsFrontPoint.Negocio)
routes.post('/fpcontato', FormsFrontPoint.Contato)
routes.post('/fplinkedin', FormsFrontPoint.Linkedin)

//Rota de teste

routes.post('/testrequest' , ( req:Request, res: Response )=> {
  const data = req.body;

  return res.json(data)
})


export default routes;