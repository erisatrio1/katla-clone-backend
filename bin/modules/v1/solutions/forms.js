import express from 'express'
import solutionsRouter from './router/solutionsRoute.js'

const router = express.Router();

router.use('/solutions', solutionsRouter)

export default router;