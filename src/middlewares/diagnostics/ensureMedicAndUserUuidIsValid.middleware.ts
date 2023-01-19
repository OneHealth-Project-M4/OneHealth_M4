import { Request, Response, NextFunction } from "express";
import { AppError } from "../../errors/AppError";

const ensureMedicAndUserUuidIsValidMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const newDiagnosticUserId = req.user.id;
  const newDiagnosticMedicId = req.user.id;

  if (newDiagnosticUserId.length !== 36 || newDiagnosticMedicId.length !== 36) {
    throw new AppError("Invalid medic or user id!", 400);
  }

  return next();
};

export default ensureMedicAndUserUuidIsValidMiddleware;
