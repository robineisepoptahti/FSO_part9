import express from "express";
import { Response } from "express";
import service from "../services/patientService";
import { FilteredPatient, NewPatient, Patient } from "../types";
import toNewPatient from "../utils";
import * as z from "zod";

const router = express.Router();

router.get("/", (_req, res: Response<FilteredPatient[]>) => {
  res.send(service.getFilteredEntries());
});

router.post("/", (req, res) => {
  try {
    const NewPatient: NewPatient = toNewPatient(req.body);
    const addedPatient: Patient = service.addPatient(NewPatient);
    console.log(addedPatient);
    res.send(addedPatient);
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      res.status(400).send({ error: error.issues });
    } else {
      res.status(400).send({ error: "unknown error" });
    }
  }
});

export default router;
