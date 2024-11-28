import config from '../../config';
import { TStudent } from '../student/student.interface';
import { NewUser } from './user.interface';
import { User } from './user.model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  //create a user object

  const user: NewUser = {};

  // if pass is not given, use default pass

  user.password = password || (config.default_pass as string);

  //set student role
  user.role = 'student';

  //set manually generated id
  user.id = '20251001';

  // create a user
  const result = await User.create(user);

  //create a student
  if (Object.keys(result).length) {
    // set id, _id as user
    studentData.id = result.id;
    studentData.user = result._id;
  }

  return result;
};

export const UserServices = {
  createStudentIntoDB,
};
