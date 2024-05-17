import { NextFunction, Request, Response } from 'express';

export const errorHandlerMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("ENTROU")
  if (err instanceof Error) {
    return res.status(400).json({
      error: err.message
    })
  }

  return res.status(500).json({
    status: "error",
    message: "Internal Server Error"
  })
}