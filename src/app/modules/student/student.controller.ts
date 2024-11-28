import { Request, Response } from 'express';
import { StudentServices } from './student.service';
// import studentValidationSchema from './student.validation';

// const createStudent = async (req: Request, res: Response) => {
//   try {
//     const { student: studentData } = req.body;

//     // data validation using Joi
//     // const { error, value } = studentValidationSchema.validate(studentData);
//     // console.log(error, value);

//     // data validation using zod
//     const zodParseData = studentValidationSchema.parse(studentData);

//     const result = await StudentServices.createStudentIntoDB(zodParseData);

//     // if (error) {
//     //   res.status(500).json({
//     //     success: false,
//     //     message: 'Something went wrong',
//     //     error,
//     //   });
//     // }

//     // send response
//     res.status(200).json({
//       success: true,
//       message: 'Student is created Successfully',
//       data: result,
//     });
//   } catch (err: unknown) {
//     let errorMessage = 'Something went wrong';
//     if (err instanceof Error) {
//       errorMessage = err.message;
//     }

//     res.status(500).json({
//       success: false,
//       message: errorMessage,
//       error: err, // Avoid directly exposing `err` in production
//     });
//   }
// };

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentFromDB();

    res.status(200).json({
      success: true,
      message: 'Students are retrieved Successfully',
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
      error: err, // Avoid directly exposing `err` in production
    });
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Student is retrieved Successfully',
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
      error: err, // Avoid directly exposing `err` in production
    });
  }
};

const deleteStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.deleteStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Student is deleted Successfully',
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
      error: err, // Avoid directly exposing `err` in production
    });
  }
};

export const StudentController = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
