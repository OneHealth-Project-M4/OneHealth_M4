import { NextFunction, Request, Response } from "express";
import { UsersMedic } from "../../entities/usermedic.entity";
import { AppError } from "../../errors/AppError";
import AppDataSource from "../../data-source";

export const ensureMedicNoRepeatMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const medicsRepository = AppDataSource.getRepository(UsersMedic);

  const alredyExists = await medicsRepository.findOneBy({
    email: req.body.email,
  });

  if (alredyExists) {
    throw new AppError("Email is already in use!", 409);
  }

  return next();
};
