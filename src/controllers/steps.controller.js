import { getConnection, sql } from "../databases/connection.js";

export const getSteps = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query("SELECT * FROM Steps");
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createNewStep = async (req, res) => {
  const { userName, Distance, Steps, Calorias, Fecha } = req.body;

  // validating
  if (
    userName == null ||
    Distance == null ||
    Steps == null ||
    Calorias == null ||
    Fecha == null
  ) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("userName", sql.NVarChar, userName)
      .input("Distance", sql.Float, Distance)
      .input("Steps", sql.Float, Steps)
      .input("Calorias", sql.Float, Calorias)
      .input("Fecha", sql.DateTime, Fecha)
      .query(
        "INSERT INTO Steps (userName,Distance,Steps,Calorias,Fecha) VALUES (@userName,@Distance,@Steps,@Calorias,@Fecha);"
      );

    res.json({ userName, Distance, Steps, Calorias, Fecha });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getStepsByUsername = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("userName", req.params.username)
      .query("SELECT * FROM Steps WHERE userName = @userName");
    return res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
