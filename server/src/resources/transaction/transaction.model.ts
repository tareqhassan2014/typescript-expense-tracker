import { model, Schema } from 'mongoose';
import ITransaction from './transaction.interface';

const transactionModel = new Schema(
    {
        name: {
            type: String,
            default: 'Anonymous',
        },
        amount: Number,
        type: {
            type: String,
            enum: ['investment', 'savings', 'expense'],
            default: 'investment',
        },
        date: {
            type: Date,
            default: Date.now,
        },
    },
    {
        versionKey: false,
    }
);

export default model<ITransaction>('Transaction', transactionModel);
