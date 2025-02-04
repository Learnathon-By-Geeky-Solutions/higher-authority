import express from "express";
import authRouter from "./routes/authRouter";
import userRouter from "./routes/userRouter";
import chatRouter from "./routes/chatRouter";
import securityMiddleware from "./middleware/security";
import rateLimiter from "./middleware/rateLimiter";
import errorHandler from "./middleware/errorHandler";

const app = express();
app.disable("x-powered-by");

securityMiddleware(app);

app.use(rateLimiter);



app.use(express.json());
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/chat", chatRouter);

app.use(errorHandler);

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => console.log(`SYSTEM INITIALIZED ON PORT ${PORT}`));