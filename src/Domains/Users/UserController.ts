import { Request, Response } from "express"
import { UsersService } from './UsersServices'

export class UserController {
  async create(req: Request, res: Response) {
    const { email, name, surname, password } = req.body

    const birthday = new Date()

    const usersService = new UsersService()
    const user = await usersService.create({ email, name, surname, birthday, password })

    const response = {
      body: user
    }

    res.send(response)
  }
  async hello(req: Request, res: Response) {
    res.send("PARABENS DEU CERTO")
  }
}
