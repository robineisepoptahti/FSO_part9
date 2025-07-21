import express from "express";
import { Response } from "express";
import service from "../services/patientService";
import { FilteredPatient } from "../types";

const router = express.Router();

router.get("/", (_req, res: Response<FilteredPatient[]>) => {
  res.send(service.getFilteredEntries());
});

export default router;
