import { Document, model, Schema, Types } from 'mongoose';

interface IUser extends Document {
  name: string;
  sector_names: string[];
}

const userSchema = new Schema<IUser>({
  name: String,
  // sector_names which is string array and requered
  sector_names: {
    type: [String],
    required: true,
  },
});


const UserModel = model<IUser>('User', userSchema);

export { IUser, UserModel };
