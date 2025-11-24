import mongoose from "mongoose";

const goalSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    targetAmount: { type: Number, required: true },
    currentAmount: { type: Number, default: 0 },
    description: { type: String }
  },
  { timestamps: true }
);

export default mongoose.model("Goal", goalSchema);
