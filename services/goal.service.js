import Goal from "../models/goal.model.js";

// Create goal
export async function addGoal(req, res) {
  try {
    const goal = new Goal(req.body);
    await goal.save();
    res.status(201).json(goal);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// Get all goals
export async function getGoals(req, res) {
  try {
    const goals = await Goal.find();
    res.json(goals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// Update goal progress
export async function updateGoal(req, res) {
  try {
    const goal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!goal) return res.status(404).json({ message: "Goal not found" });
    res.json(goal);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// Delete goal
export async function deleteGoal(req, res) {
  try {
    const goal = await Goal.findByIdAndDelete(req.params.id);
    if (!goal) return res.status(404).json({ message: "Goal not found" });
    res.json({ message: "Goal deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
