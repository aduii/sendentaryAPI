import express from "express";
import config from "./config.js";
import cors from "cors";
import questionsRoutes from "./routes/questions.routes.js";
import answersRoutes from "./routes/answers.routes.js";
import quizzesRoutes from "./routes/quizzes.routes.js";
import stepsRoutes from "./routes/steps.routes.js";
import morgan from "morgan";

const app = express();

app.set("port", config.port);

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", questionsRoutes);
app.use("/api", answersRoutes);
app.use("/api", quizzesRoutes);
app.use("/api", stepsRoutes);

export default app;
