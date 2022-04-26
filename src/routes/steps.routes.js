import { Router } from "express";

import {
  getSteps,
  createNewStep,
  getStepsByUsername,
  updateStepsByUsername,
} from "../controllers/steps.controller.js";

const router = Router();

router.get("/steps", getSteps);
router.post("/steps", createNewStep);
router.get("/steps/:username", getStepsByUsername);
router.put("/steps/:username", updateStepsByUsername);

export default router;
