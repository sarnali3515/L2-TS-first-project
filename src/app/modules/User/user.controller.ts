import { Request, Response } from 'express';
import { UserServices } from './user.service';

const createStudent = async (req: Request, res: Response) => {
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
    let errorMessage = 'Something went wrong';
    if (err instanceof Error) {
      errorMessage = err.message;
    }

    res.status(500).json({
      success: false,
      message: errorMessage,
      error: err,
    });
  }
};

export const UserControllers = {
  createStudent,
};
