import cors from 'cors';
import express, { Application } from 'express';
import helmet from 'helmet';
import mongoose from 'mongoose';
import morgan from 'morgan';
import categoryRouter from './resources/category/category.router';
import labelsRouter from './resources/labels/labels.router';
import transactionRouter from './resources/transaction/transaction.router';
import { notFound } from './utility/errorHandler';

class App {
    public app: Application;

    constructor(public port: number, private uri: string) {
        this.app = express();
        this.initializeDataBaseConnection();
        this.initializeMiddleWare();
        this.initializeControllers();
    }

    private initializeMiddleWare(): void {
        this.app.use(helmet());
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    private async initializeDataBaseConnection(): Promise<void> {
        try {
            await mongoose.connect(this.uri);
            console.log('database connected successfully');
        } catch (error: any) {
            console.log(error.message);
        }
    }

    private initializeControllers() {
        this.app.use('/api/v1/transaction', transactionRouter);
        this.app.use('/api/v1/categories', categoryRouter);
        this.app.use('/api/v1/labels', labelsRouter);
        this.app.all('*', notFound);
    }

    public listen(): void {
        this.app.listen(this.port, () =>
            console.log(`server is running http://localhost:${this.port}/`)
        );
    }
}

export default App;
