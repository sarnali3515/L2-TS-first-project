import { z } from 'zod';

const academicFacultyValidationSchema = z.object({
  password: z.string({
    invalid_type_error: 'Academic faculty must be string',
  }),
});

export const AcademicFacultyValidation = {
  academicFacultyValidationSchema,
};
