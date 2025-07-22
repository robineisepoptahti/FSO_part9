import patientsData from "../../data/patients";
import { Patient, FilteredPatient, NewPatient } from "../types";
import { v1 as uuid } from "uuid";

const getEntries = (): Patient[] => {
  return patientsData;
};

const getFilteredEntries = (): FilteredPatient[] => {
  return patientsData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const addPatient = (object: NewPatient) => {
  const id: string = uuid();
  const newPatient: Patient = { id: id, ...object };
  patientsData.push(newPatient);
  return newPatient;
};

export default {
  getEntries,
  getFilteredEntries,
  addPatient,
};
