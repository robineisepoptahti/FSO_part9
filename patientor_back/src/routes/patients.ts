import express from "express";
import { Response } from "express";
import service from "../services/patientService";
import { NonSensitivePatient, NewPatient, Patient } from "../types";
import toNewPatient from "../utils";
import * as z from "zod";

const router = express.Router();

router.get("/", (_req, res: Response<NonSensitivePatient[]>) => {
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

router.get("/:id", (req, res) => {
  res.send(service.getOne(req.params.id));
});

export default router;
