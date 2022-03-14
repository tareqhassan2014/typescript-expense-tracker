import { Request, Response } from 'express';
import transactionModel from '../transaction/transaction.model';

const getLabels = async (req: Request, res: Response) => {
    try {
        const result = await transactionModel.aggregate([
            {
                $lookup: {
                    from: 'categories',
                    localField: 'type',
                    foreignField: 'type',
                    as: 'categories_info',
                },
            },
            {
                $unwind: '$categories_info',
            },
        ]);

        const filter = await result.map((v) =>
            Object.assign(
                {},
                {
                    _id: v._id,
                    type: v.type,
                    color: v.categories_info['color'],
                    name: v.name,
                    amount: v.amount,
                }
            )
        );

        res.status(200).json(filter);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export default getLabels;
