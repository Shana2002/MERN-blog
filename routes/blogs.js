import express from 'express'
import { showBlogs } from '../controllers/blogs.js';

const router = express.Router();

router.get('/',showBlogs);
router.get('/blog/:name',);

export default router;

