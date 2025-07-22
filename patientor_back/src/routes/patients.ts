import express from "express";
import { Response } from "express";
import service from "../services/patientService";
import { FilteredPatient, NewPatient, Patient } from "../types";
import toNewPatient from "../utils";

const router = express.Router();

router.get("/", (_req, res: Response<FilteredPatient[]>) => {
  res.send(service.getFilteredEntries());
});

router.post("/", (req, res: Response<Patient>) => {
  /* eslint-disable @typescript-eslint/no-unsafe-assignment */
  const NewPatient: NewPatient = toNewPatient(req.body);
  const addedPatient: Patient = service.addPatient(NewPatient);
  console.log(addedPatient);
  return res.send(addedPatient);
});

export default router;
