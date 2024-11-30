import express, { NextFunction, Request, Response } from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

const shenaBahini = (req: Request, res: Response, next: NextFunction) => {
  console.log('i am a shenabahini');
  next();
};

router.post('/create-student', shenaBahini, UserControllers.createStudent);

export const userRoutes = router;
