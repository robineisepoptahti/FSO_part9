import express from "express";
import { Response } from "express";
import service from "../services/patientService";
import { FilteredPatient, Patient } from "../types";

const router = express.Router();

router.get("/", (_req, res: Response<FilteredPatient[]>) => {
  res.send(service.getFilteredEntries());
});

router.post("/", (req, res: Response<Patient>) => {
  /* eslint-disable @typescript-eslint/no-unsafe-assignment */
  const { name, dateOfBirth, ssn, gender, occupation } = req.body;
  const addedPatient: Patient = service.addPatient({
    name,
    dateOfBirth,
    ssn,
    gender,
    occupation,
  });
  console.log(addedPatient);
  return res.send(addedPatient);
});

export default router;
