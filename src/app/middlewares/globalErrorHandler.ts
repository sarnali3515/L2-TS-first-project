/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  //setting default values
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Something went wrong!';

  type TErrorSources = {
    path: string | number;
    message: string;
  }[];
  const errorSources: TErrorSources = [
    {
      path: '',
      message: 'Something went wrong!',
    },
  ];

  res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    // error: err,
  });
};

export default globalErrorHandler;
