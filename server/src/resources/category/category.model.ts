import { model, Schema } from 'mongoose';
import ICategory from './category.interface';

const categoryModel = new Schema({
    type: {
        type: String,
        default: 'investment',
        unique: true,
        enum: ['investment', 'savings', 'expense'],
    },
    color: {
        type: String,
        default: '#fcbe44',
        unique: true,
    },
});

export default model<ICategory>('categories', categoryModel);
