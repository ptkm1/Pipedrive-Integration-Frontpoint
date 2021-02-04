import cors from 'cors'
import express, { urlencoded } from 'express'
import routes from './routes/routes'

class App {

  public App:any

  constructor() {
    this.App = express()
    this.App.listen(3000, ()=>console.log("rodando"))
    this.App.use(urlencoded({ extended: true }))
    this.App.use(express.json())
    this.App.use(routes)
    this.App.use(cors())
  }

}

export default new App()