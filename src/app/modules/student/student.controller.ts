import { NextFunction, Request, Response } from 'express';
import { StudentServices } from './student.service';

const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await StudentServices.getAllStudentFromDB();

    res.status(200).json({
      success: true,
      message: 'Students are retrieved Successfully',
      data: result,
    });
  } catch (err) {
    // let errorMessage = 'Something went wrong';
    // if (err instanceof Error) {
    //   errorMessage = err.message;
    // }

    // res.status(500).json({
    //   success: false,
    //   message: errorMessage,
    //   error: err, // Avoid directly exposing `err` in production
    // });
    next(err);
  }
};

const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Student is retrieved Successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.deleteStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Student is deleted Successfully',
      data: result,
    });
  } catch (err: unknown) {
    next(err);
  }
};

export const StudentController = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
