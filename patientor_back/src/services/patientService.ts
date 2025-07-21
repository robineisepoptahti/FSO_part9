import patientsData from "../../data/patients";
import { Patient, FilteredPatient } from "../types";

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

const addPatient = () => {
  return null;
};

export default {
  getEntries,
  getFilteredEntries,
  addPatient,
};
