import { Request, Response } from 'express';
import categoryModel from './category.model';

const createCategory = async (req: Request, res: Response) => {
    try {
        const { type, color } = req.body;
        const result = await categoryModel.create({ type, color });
        res.status(201).json(result);
    } catch ({ message }: any) {
        res.status(400).json({ message });
    }
};

const getCategories = async (req: Request, res: Response) => {
    try {
        const result = await categoryModel.find();
        const filter = await result.map((v) =>
            Object.assign({}, { type: v.type, color: v.color })
        );

        res.status(200).json(filter);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export { createCategory, getCategories };
