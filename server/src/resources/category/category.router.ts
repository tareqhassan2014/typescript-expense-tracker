import { Router } from 'express';
import { createCategory, getCategories } from './category.controller';

const categoryRouter = Router();

categoryRouter.route('/').post(createCategory).get(getCategories);

export default categoryRouter;
