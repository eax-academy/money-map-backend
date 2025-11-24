import express from "express";
import {
  addGoal,
  getGoals,
  updateGoal,
  deleteGoal
} from "../services/goal.service.js";

const router = express.Router();

router.post("/", addGoal);
router.get("/", getGoals);
router.put("/:id", updateGoal);
router.delete("/:id", deleteGoal);

export default router;
