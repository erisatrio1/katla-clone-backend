import express from 'express'
import { getSolutions } from "../controller/solutionsControl.js";

const router = express.Router();

router.get('/', getSolutions);

export default router