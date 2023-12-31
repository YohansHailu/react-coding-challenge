import { Document, model, Schema, Types } from 'mongoose';

interface IUser extends Document {
  name: string;
  sector_id: Types.ObjectId;
}

const userSchema = new Schema<IUser>({
  name: String,
  sector_id: Types.ObjectId,
});


const UserModel = model<IUser>('User', userSchema);

export { IUser, UserModel };
