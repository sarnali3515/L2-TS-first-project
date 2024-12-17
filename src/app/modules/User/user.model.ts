import { model, Schema } from 'mongoose';
import { TUser, UserModel } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../config';

const userSchema = new Schema<TUser, UserModel>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: ['student', 'faculty', 'admin'],
    },
    status: {
      type: String,
      enum: ['in-progress', 'blocked'],
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

// pre save middleware/ hook:will work on create() save()
userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this; // doc

  // hashing pass and save into DB
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

// pre save middleware/ hook
userSchema.post('save', function (doc, next) {
  doc.password = '';
  // console.log( 'post hook: we saved our data');
  next();
});

userSchema.statics.isUserExistsByCustomId = async function (id: string) {
  return await User.findOne({ id });
};

userSchema.statics.isPasswordMatched = async function (
  plainTextPassword,
  hashedPassword,
) {
  return await bcrypt.compare(plainTextPassword, hashedPassword);
};

export const User = model<TUser, UserModel>('User', userSchema);
