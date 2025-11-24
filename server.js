import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import transactionRoutes from "./routes/transaction.routes.js";
import goalRoutes from "./routes/goal.routes.js";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect DB
connectDB();

// Routes
app.use("/api/transactions", transactionRoutes);
app.use("/api/goals", goalRoutes);

app.get("/", (req, res) => res.json({ message: "Money Map Backend is running 💸" }));

// Global error handler
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).json({ message: "Internal Server Error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
