import express from 'express';
import usersRouter from './users/users.router';
import articlesRouter from './articles/articles.router';

const router = express.Router();

router.use('/auth', usersRouter);
router.use('/articles', articlesRouter);

export default router;
