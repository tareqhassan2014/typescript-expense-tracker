import { Document } from 'mongoose';

export default interface ITransaction extends Document {
    name: string;
    amount: number;
    type: string;
    date: Date;
}
