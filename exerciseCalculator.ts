interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
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

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));
