import { Router } from 'express';
import getLabels from './labels.controller';

const labelsRouter = Router();

labelsRouter.route('/').get(getLabels);

export default labelsRouter;
