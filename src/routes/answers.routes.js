import { Router } from "express";

import {
  getAnswers,
  getAnswerByQuestionId,
} from "../controllers/answers.controller.js";

const router = Router();

router.get("/answers", getAnswers);
router.get("/answers/:id", getAnswerByQuestionId);

export default router;
