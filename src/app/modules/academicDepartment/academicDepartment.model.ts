import { model, Schema } from 'mongoose';
import { TAcaDemicDepartment } from './academicDepartment.interface';

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

export const AcademicDepartment = model<TAcaDemicDepartment>(
  'academicDepartment',
  academicDepartmentSchema,
);
