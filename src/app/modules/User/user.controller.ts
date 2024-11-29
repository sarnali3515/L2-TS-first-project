import { NextFunction, Request, Response } from 'express';
import { UserServices } from './user.service';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student: studentData } = req.body;

    // const zodParseData = studentValidationSchema.parse(studentData);

    const result = await UserServices.createStudentIntoDB(
      password,
      studentData,
    );

    res.status(200).json({
      success: true,
      message: 'Student is created Successfully',
      data: result,
    });
  } catch (err: unknown) {
    next(err);
  }
};

export const UserControllers = {
  createStudent,
};
