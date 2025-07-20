import { calculateExercises } from "./exerciseCalculator";
import express from "express";

const app = express();
app.use(express.json());

app.post("/exercises", (req, res) => {
  const { daily_exercises, target } = req.body;
  if (!daily_exercises || !target)
    return res.status(400).send({ error: "parameters missing" });

  if (
    !isNaN(Number(target)) &&
    Array.isArray(daily_exercises) &&
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    daily_exercises.every((item: any) => !isNaN(Number(item)))
  ) {
    const typed_daily_exercises = daily_exercises as number[];
    const typed_target = target as number;
    const result = calculateExercises(typed_daily_exercises, typed_target);
    return res.send({ result });
  } else return res.status(400).send({ error: "malformatted parameters" });
});

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
