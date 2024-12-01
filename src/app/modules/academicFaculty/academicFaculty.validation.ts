import { z } from 'zod';

const createAcademicFacultyValidationSchema = z.object({
  password: z.string({
    invalid_type_error: 'Academic faculty must be string',
  }),
});
const updateAcademicFacultyValidationSchema = z.object({
  password: z.string({
    invalid_type_error: 'Academic faculty must be string',
  }),
});

export const AcademicFacultyValidation = {
  createAcademicFacultyValidationSchema,
  updateAcademicFacultyValidationSchema,
};
