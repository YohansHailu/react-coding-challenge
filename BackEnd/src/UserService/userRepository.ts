import mongoose from 'mongoose';
import { IUser, UserModel } from './userModel';


async function getUserById(id: string): Promise<IUser | null> {
  const objectId = new mongoose.mongo.ObjectId(id);
  const user = await UserModel.findById(objectId);
  return user;
}
async function getUserByName(name: string): Promise<IUser | null> {
  const user = await UserModel.findOne({ name });
  return user;
}

async function getAllUsers(): Promise<IUser[]> {
  const users = await UserModel.find({});
  return users;
}

async function addUser(newUser: Partial<IUser>): Promise<IUser> {
  const user = new UserModel(newUser);
  await user.save();
  return user;
}

async function updateUser(userId: string, updatedData: Partial<IUser>): Promise<IUser | null> {
  const objectId = new mongoose.mongo.ObjectId(userId);
  const user = await UserModel.findByIdAndUpdate(objectId, updatedData, { new: true });
  return user;
}


async function deleteUser(userId: string) {
  const objectId = new mongoose.mongo.ObjectId(userId);
  await UserModel.findByIdAndDelete(objectId);
}




let userRepo = { addUser, getUserByName, updateUser, deleteUser, getAllUsers, getUserById };
export default userRepo;
