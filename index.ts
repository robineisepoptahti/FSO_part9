import express from "express";
import calculateBmi from "./bmiCalculator";

const app = express();

app.get("/bmi", (req, res) => {
  const { weight, height } = req.query;
  try {
    if (!isNaN(Number(weight)) && !isNaN(Number(height))) {
      const answer: string = calculateBmi(Number(height), Number(weight));
      res.send({ weight: weight, height: height, bmi: answer });
    } else {
      throw new Error("Provided values were not numbers!");
    }
  } catch (error: unknown) {
    let errorMessage = "Something bad happened.";
    if (error instanceof Error) {
      errorMessage += " Error: " + error.message;
    }
    res.status(400).send(errorMessage);
  }
});

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
