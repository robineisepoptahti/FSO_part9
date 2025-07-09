interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

interface trainingValues {
  target: number;
  trainingHours: number[];
}

const calculateExercises = (
  trainingHours: number[],
  target: number
): Result => {
  const filteredTrainingDays: number[] = trainingHours.filter((i) => i !== 0);
  const avg: number =
    trainingHours.reduce((total, current) => total + current) /
    trainingHours.length;
  let verdict: number;
  let description: string;
  if (avg >= target) {
    verdict = 3;
    description = "super job!";
  } else if (avg >= target / 2) {
    verdict = 2;
    description = "not too bad but could be better";
  } else {
    verdict = 1;
    description = "not very good job, try harder next time";
  }
  return {
    periodLength: trainingHours.length,
    trainingDays: filteredTrainingDays.length,
    success: avg >= target,
    rating: verdict,
    ratingDescription: description,
    target: target,
    average: avg,
  };
};

const parseArgumentsTrainingApp = (args: string[]): trainingValues => {
  if (args.length < 4) throw new Error("Not enough arguments");

  const newArray = args.splice(0, 3).map((item) => Number(item));
  const hoursList = args.map((item) => Number(item));
  if (!isNaN(Number(newArray[2])) && hoursList.every((item) => !isNaN(item))) {
    return {
      target: Number(newArray[2]),
      trainingHours: hoursList,
    };
  } else {
    throw new Error("Provided values were not numbers!");
  }
};
try {
  const { target, trainingHours } = parseArgumentsTrainingApp(process.argv);
  console.log(calculateExercises(trainingHours, target));
} catch (error: unknown) {
  let errorMessage = "Something bad happened.";
  if (error instanceof Error) {
    errorMessage += " Error: " + error.message;
  }
  console.log(errorMessage);
}
