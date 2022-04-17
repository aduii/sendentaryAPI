import { Router } from "express";

import {
  createNewQuizz,
  getQuizzes,
} from "../controllers/quizzes.controller.js";

const router = Router();

router.get("/quizzes", getQuizzes);
router.post("/quizzes", createNewQuizz);

export default router;
