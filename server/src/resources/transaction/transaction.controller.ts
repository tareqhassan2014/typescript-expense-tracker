import { Request, Response } from 'express';
import transactionModel from './transaction.model';

const createTransaction = async (req: Request, res: Response) => {
    try {
        const { type, name, amount } = req.body;
        const result = await transactionModel.create({ type, name, amount });
        res.status(201).json(result);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

const getTransactions = async (req: Request, res: Response) => {
    try {
        const result = await transactionModel.find();
        res.status(200).json(result);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

const deleteTransaction = async (req: Request, res: Response) => {
    try {
        await transactionModel.findByIdAndDelete(req.params.id);

        res.status(204).json({ message: 'Transaction deleted successfully' });
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

export { createTransaction, getTransactions, deleteTransaction };
