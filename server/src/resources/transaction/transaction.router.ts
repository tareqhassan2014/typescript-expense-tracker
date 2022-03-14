import { Router } from 'express';
import {
    createTransaction,
    deleteTransaction,
    getTransactions,
} from './transaction.controller';

const transactionRouter = Router();

transactionRouter.route('/').post(createTransaction).get(getTransactions);
transactionRouter.route('/:id').delete(deleteTransaction);

export default transactionRouter;
