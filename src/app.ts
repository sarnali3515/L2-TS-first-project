import express, { Application } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/student.route';
import { userRoutes } from './app/modules/User/user.route';
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

// application route
app.use('/api/v1/students', StudentRoutes);
app.use('/api/v1/users', userRoutes);

//just example
// const getAController = (req: Request, res: Response) => {
//   const a = 10;
//   res.send(a);
// };

// app.get('/', getAController);

export default app;
