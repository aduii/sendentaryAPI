import { getConnection } from "../databases/connection.js";

export const getAnswers = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query("SELECT * FROM Answers");
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getAnswerByQuestionId = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("QuestionId", req.params.id)
      .query("SELECT * FROM Answers WHERE QuestionId = @QuestionId");
    return res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
