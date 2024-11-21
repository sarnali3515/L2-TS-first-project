import { z } from 'zod';

const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, 'First Name is required')
    .max(20, 'First Name cannot be more than 20 characters'),
  middleName: z.string().trim(),
  lastName: z.string().trim().min(1, 'Last Name is required'),
});

// Validation for Guardian
const guardianSchema = z.object({
  fatherName: z.string().trim().min(1, 'Father Name is required'),
  fatherOccupation: z.string().min(1, 'Father Occupation is required'),
  fatherContactNo: z.string().min(1, 'Father Contact Number is required'),
  motherName: z.string().min(1, 'Mother Name is required'),
  motherOccupation: z.string().min(1, 'Mother Occupation is required'),
  motherContactNo: z.string().min(1, 'Mother Contact Number is required'),
});

// Validation for LocalGuardian
const localGuardianValidationSchema = z.object({
  name: z.string().min(1, 'Local Guardian Name is required'),
  occupation: z.string().min(1, 'Local Guardian Occupation is required'),
  contactNo: z.string().min(1, 'Local Guardian Contact Number is required'),
  address: z.string().min(1, 'Local Guardian Address is required'),
});

// Validation for Student
const studentValidationSchema = z.object({
  id: z.string().min(1, 'Student ID is required'),
  password: z.string().min(1, 'Password is required'),
  name: userNameValidationSchema,
  gender: z.enum(['male', 'female'], {
    errorMap: () => ({
      message: "Gender must be 'male' or 'female'",
    }),
  }),
  dateOfBirth: z.string().min(1, 'Date of Birth is required'),
  email: z.string().email('Invalid email address'),
  contactNo: z.string().min(1, 'Contact Number is required'),
  emergencyContactNo: z.string().min(1, 'Emergency Contact Number is required'),
  bloodGroup: z
    .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
    .optional(),
  presentAddress: z.string().min(1, 'Present Address is required'),
  permanentAddress: z.string().min(1, 'Permanent Address is required'),
  guardian: guardianSchema,
  localGuardian: localGuardianValidationSchema,
  profileImg: z.string().optional(),
  isActive: z.enum(['active', 'blocked']).default('active'),
  isDeleted: z.boolean(),
});

export default studentValidationSchema;
