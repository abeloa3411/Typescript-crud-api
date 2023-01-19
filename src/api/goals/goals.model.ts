import { WithId } from "mongodb";
import * as z from "zod";
import { db } from "../../db";

export const Goal = z.object({
  content: z.string().min(1),
  done: z.boolean(),
});

export type Goal = z.infer<typeof Goal>;
export type GoalWithId = WithId<Goal>;
export const Goals = db.collection<Goal>("goals");
