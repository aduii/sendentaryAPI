import { getConnection, sql } from "../databases/connection.js";

export const getQuizzes = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query("SELECT * FROM Quizzes");
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createNewQuizz = async (req, res) => {
  const { StartPoints, userName, Comment, EndPoints } = req.body;

  // validating
  if (
    StartPoints == null ||
    userName == null ||
    Comment == null ||
    EndPoints == null
  ) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("StartPoints", sql.Int, StartPoints)
      .input("userName", sql.NVarChar, userName)
      .input("Comment", sql.NVarChar, Comment)
      .input("EndPoints", sql.Int, EndPoints)
      .query(
        "INSERT INTO Quizzes (StartPoints,userName,Comment,EndPoints) VALUES (@StartPoints,@userName,@Comment,@EndPoints);"
      );

    res.json({ StartPoints, userName, Comment, EndPoints });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
