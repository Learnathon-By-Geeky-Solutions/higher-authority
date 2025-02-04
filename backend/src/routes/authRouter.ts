import express from 'express';
const authRouter = express.Router();

authRouter.get('/', (req, res) => {
    res.send('Hello from auth router');
    });
export default authRouter;