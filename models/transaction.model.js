import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    type: { type: String, enum: ["income", "expense"], required: true },
    category: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, required: true },
    note: { type: String }
  },
  { timestamps: true }
);

export default mongoose.model("Transaction", transactionSchema);
