import { Request, Response, NextFunction } from 'express'

type Err = {
  statusCode: number
  message: string
}

export async function errorHandler(
  err: Err,
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> {
  const defaultErr: Err = {
    statusCode: 500,
    message: 'Express error handler caught unknown middleware'
  }

  const { statusCode, message } = { ...defaultErr, ...err }

  res.status(statusCode).json({ message })
}
