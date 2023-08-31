import mongoose, { Document, Model, Schema } from 'mongoose';

const userSchema = new Schema({ googleID: String });

export interface IUser extends Document {
    googleID: string;
}
declare global {
    namespace Express {
        interface User extends IUser { }  // Here IUser is your defined User type.
    }
}
const User: Model<IUser> = mongoose.model<IUser>('users', userSchema);

export default User;