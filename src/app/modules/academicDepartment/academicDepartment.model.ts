import { model, Schema } from 'mongoose';
import { TAcaDemicDepartment } from './academicDepartment.interface';
import AppError from '../../errors/AppError';

const academicDepartmentSchema = new Schema<TAcaDemicDepartment>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicFaculty',
    },
  },

  {
    timestamps: true,
  },
);

// academicDepartmentSchema.pre('save', async function (next) {
//   const isDepartmentExist = await AcademicDepartment.findOne({
//     name: this.name,
//   });

//   if (isDepartmentExist) {
//     throw new AppError(404, 'This Department is already exist');
//   }
//   next();
// });

academicDepartmentSchema.pre('findOneAndUpdate', async function (next) {
  const query = this.getQuery();
  const isDepartmentExist = await AcademicDepartment.findOne(query);

  if (!isDepartmentExist) {
    throw new AppError(404, 'This Department does not exist');
  }
  next();
});

export const AcademicDepartment = model<TAcaDemicDepartment>(
  'AcademicDepartment',
  academicDepartmentSchema,
);
