import express from 'express';
const chatRouter = express.Router();

chatRouter.get('/', (req, res) => {
    res.send('Hello from chat router');
    });
export default chatRouter;