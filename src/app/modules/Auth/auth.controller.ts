import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import status from 'http-status';
import { AuthServices } from './auth.service';
import config from '../../config';
// import { config } from 'dotenv';

const loginUser = catchAsync(async (req, res) => {
  const result = await AuthServices.loginUser(req.body);
  const { refreshToken, accessToken, needsPasswordChange } = result;

  res.cookie('refreshToken', refreshToken, {
    secure: config.NODE_ENV === 'production',
    httpOnly: true,
  });

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'User is logged in successfully!',
    data: {
      accessToken,
      needsPasswordChange,
    },
  });
});
const changePassword = catchAsync(async (req, res) => {
  console.log(req.user, req.body);

  const { ...passwordData } = req.body;
  const result = await AuthServices.changePassword(req.user, passwordData);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Password changed successfully!',
    data: null,
  });
});

export const AuthControllers = {
  loginUser,
  changePassword,
};
