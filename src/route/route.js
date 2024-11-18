import express from 'express';
import ProductController from '../controller/ProductController.js';

const router = express.Router();

router.get('/products', ProductController.getAll);

export default router;