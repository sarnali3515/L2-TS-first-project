import express, { Application } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/student.route';
import { userRoutes } from './app/modules/User/user.route';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
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

app.use(globalErrorHandler);

app.use(notFound);

export default app;
