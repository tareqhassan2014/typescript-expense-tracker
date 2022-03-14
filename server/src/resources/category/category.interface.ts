import { Document } from 'mongoose';

export default interface ICategory extends Document {
    color: string;
    type: string;
}
