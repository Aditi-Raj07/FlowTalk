import express from "express";
import "dotenv/config";

import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";

import { clerkMiddleware } from "@clerk/express";
import { serve } from "inngest/express";
import { inngest, functions } from "./config/inngest.js";

const app = express();

/* -------------------- Middleware -------------------- */
app.use(express.json());
app.use(clerkMiddleware());

/* -------------------- Inngest Route -------------------- */
app.use(
  "/api/inngest",
  serve({
    client: inngest,
    functions,
  })
);

/* -------------------- Routes -------------------- */
app.get("/", (req, res) => {
  res.status(200).send("Hello World 🚀");
});

/* -------------------- Server Start -------------------- */
const startServer = async () => {
  try {
    await connectDB(); // ✅ FIX

    if (ENV.NODE_ENV !== "production") {
      app.listen(ENV.PORT, () => {
        console.log(`✅ Server running on port ${ENV.PORT}`);
      });
    }
  } catch (error) {
    console.error("❌ Error starting server:", error);
    process.exit(1);
  }
};

startServer();

export default app;
