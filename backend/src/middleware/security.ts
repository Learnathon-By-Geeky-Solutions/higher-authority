import cors from "cors";
import helmet from "helmet";
import express from "express";

const securityMiddleware = (app: express.Application) => {
  app.use(helmet()); // Secure HTTP headers
  app.use(cors()); // Enable CORS for all domains
};

export default securityMiddleware;