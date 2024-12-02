import { model, Schema } from 'mongoose';
import { TAcaDemicFaculty } from './academicFaculty.interface';

const academicFacultySchema = new Schema<TAcaDemicFaculty>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);

export const AcademicFaculty = model<TAcaDemicFaculty>(
  'User',
  academicFacultySchema,
);
