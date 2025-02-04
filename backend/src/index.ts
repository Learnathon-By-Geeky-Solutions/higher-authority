import express from "express";
import authRouter from "./routes/authRouter";
import userRouter from "./routes/userRouter";
import chatRouter from "./routes/chatRouter";

const app = express();
app.disable("x-powered-by");

app.use(express.json());
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/chat", chatRouter);

app.listen(3000, () => console.log("Server running on port 3000"));