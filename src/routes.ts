import { Router } from 'express';
import { authRouter } from './Domains/Auth';
import { usersRoutes } from './Domains/Users';

const router = Router()

router.use("/auth", authRouter)

router.use("/users", usersRoutes)

export default router

