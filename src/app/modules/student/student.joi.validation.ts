// // creating a schema validation using joi
// import Joi from 'joi';

// const userNameValidationSchema = Joi.object({
//   firstName: Joi.string()
//     .trim()
//     .max(20)
//     .pattern(/^[A-Z][a-z]*$/, 'Capitalized format')
//     .required()
//     .messages({
//       'string.empty': 'First Name is required',
//       'string.max': 'First Name cannot be more than 20 characters',
//       'string.pattern.name': '{#value} is not in Capitalize format',
//     }),
//   middleName: Joi.string()
//     .trim()
//     .required()
//     .messages({ 'string.empty': 'Middle Name is required' }),
//   lastName: Joi.string()
//     .trim()
//     .pattern(/^[a-zA-Z]+$/, 'alphabetical')
//     .required()
//     .messages({
//       'string.empty': 'Last Name is required',
//       'string.pattern.name': '{#value} is not valid',
//     }),
// });

// // Guardian schema
// const guardianValidationSchema = Joi.object({
//   fatherName: Joi.string().trim().required().messages({
//     'string.empty': 'Father Name is required',
//   }),
//   fatherOccupation: Joi.string().required().messages({
//     'string.empty': 'Father Occupation is required',
//   }),
//   fatherContactNo: Joi.string().required().messages({
//     'string.empty': 'Father Contact Number is required',
//   }),
//   motherName: Joi.string().required().messages({
//     'string.empty': 'Mother Name is required',
//   }),
//   motherOccupation: Joi.string().required().messages({
//     'string.empty': 'Mother Occupation is required',
//   }),
//   motherContactNo: Joi.string().required().messages({
//     'string.empty': 'Mother Contact Number is required',
//   }),
// });

// // LocalGuardian schema
// const localGuardianSchema = Joi.object({
//   name: Joi.string().required().messages({
//     'string.empty': 'Local Guardian Name is required',
//   }),
//   occupation: Joi.string().required().messages({
//     'string.empty': 'Local Guardian Occupation is required',
//   }),
//   contactNo: Joi.string().required().messages({
//     'string.empty': 'Local Guardian Contact Number is required',
//   }),
//   address: Joi.string().required().messages({
//     'string.empty': 'Local Guardian Address is required',
//   }),
// });

// // Main Student schema
// const studentValidationSchema = Joi.object({
//   id: Joi.string().required().messages({
//     'string.empty': 'Student ID is required',
//   }),
//   name: userNameValidationSchema.required().messages({
//     'any.required': 'Student Name is required',
//   }),
//   gender: Joi.string().valid('male', 'female').required().messages({
//     'any.only':
//       "The gender field can only be one of the following: 'male' or 'female'",
//     'string.empty': 'Gender is required',
//   }),
//   dateOfBirth: Joi.string().required().messages({
//     'string.empty': 'Date of Birth is required',
//   }),
//   email: Joi.string().email().required().messages({
//     'string.email': '{#value} is not a valid email type',
//     'string.empty': 'Email is required',
//   }),
//   contactNo: Joi.string().required().messages({
//     'string.empty': 'Contact Number is required',
//   }),
//   emergencyContactNo: Joi.string().required().messages({
//     'string.empty': 'Emergency Contact Number is required',
//   }),
//   bloodGroup: Joi.string()
//     .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
//     .messages({
//       'any.only': '{#value} is not a valid blood group',
//     }),
//   presentAddress: Joi.string().required().messages({
//     'string.empty': 'Present Address is required',
//   }),
//   permanentAddress: Joi.string().required().messages({
//     'string.empty': 'Permanent Address is required',
//   }),
//   guardian: guardianValidationSchema.required().messages({
//     'any.required': 'Guardian information is required',
//   }),
//   localGuardian: localGuardianSchema.required().messages({
//     'any.required': 'Local Guardian information is required',
//   }),
//   profileImg: Joi.string().uri().optional(),
//   isActive: Joi.string().valid('active', 'blocked').default('active').messages({
//     'any.only': '{#value} is not a valid status',
//   }),
// });

// export default studentValidationSchema;
