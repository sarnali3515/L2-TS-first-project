import AppError from '../../errors/AppError';
import { User } from '../User/user.model';
import { TLoginUser } from './auth.interface';
import httpStatus from 'http-status';
// import bcrypt from 'bcrypt';

const loginUser = async (payload: TLoginUser) => {
  // check if the user is exist
  const user = await User.isUserExistsByCustomId(payload.id);
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
  }

  // checking if the user is already deleted

  // const isDeleted = isUserExists?.isDeleted;

  // if (isDeleted) {
  //   throw new AppError(httpStatus.FORBIDDEN, 'This user is deleted !');
  // }

  // // checking if the user is blocked

  // const userStatus = isUserExists?.status;

  // if (userStatus === 'blocked') {
  //   throw new AppError(httpStatus.FORBIDDEN, 'This user is blocked ! !');
  // }

  // // checking if the password is correct
  // const isPasswordMatched = await bcrypt.compare(
  //   payload?.password,
  //   isUserExists?.password,
  // );
  // console.log(isPasswordMatched);

  if (!(await User.isPasswordMatched(payload.password, user?.password))) {
    throw new AppError(httpStatus.FORBIDDEN, 'Password do not match !');
  }

  return {};
};

export const AuthServices = {
  loginUser,
};
