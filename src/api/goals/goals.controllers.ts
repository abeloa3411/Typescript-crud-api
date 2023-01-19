import { NextFunction, Request, Response } from "express";
import { InsertOneResult } from "mongodb";
import { Goal, Goals, GoalWithId } from "./goals.model";

export async function getAll(
  req: Request,
  res: Response<GoalWithId[]>,
  next: NextFunction
) {
  try {
    const result = await Goals.find();
    const goals = await result.toArray();
    res.json(goals);
  } catch (error) {
    next(error);
  }
}

export async function createOne(
  req: Request<{}, InsertOneResult<Goal>, Goal>,
  res: Response<InsertOneResult<Goal>>,
  next: NextFunction
) {
  try {
    const validateResult = await Goal.parse(req.body);
    const insertResult = await Goals.insertOne(validateResult);
    res.json(insertResult);
  } catch (error) {
    next(error);
  }
}
