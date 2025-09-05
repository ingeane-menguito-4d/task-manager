import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./config/db.js";
import taskRoutes from "./routes/task.route.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

connectDB().catch(() => {
  // connection errors are logged in connectDB
});

app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.send("🚀 Task API is running...");
});

app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));


