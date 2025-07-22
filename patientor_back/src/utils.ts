import { NewPatient, Gender } from "./types";
import * as z from "zod";

const newPatientSchema = z.object({
  name: z.string(),
  dateOfBirth: z.string().date(),
  ssn: z.string(),
  gender: z.enum(Gender),
  occupation: z.string(),
});

/*

const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const isGender = (param: string): param is Gender => {
  return Object.values(Gender)
    .map((i) => i.toString())
    .includes(param);
};

const parseName = (name: unknown) => {
  if (!isString(name)) {
    throw new Error("Incorrect or missing name: " + name);
  }
  return name;
};

const parseSsn = (ssn: unknown): string => {
  if (!isString(ssn)) {
    throw new Error("Incorrect or missing snn: " + ssn);
  }
  return ssn;
};

const parseDate = (date: unknown): string => {
  if (!isString(date) || !isDate(date)) {
    throw new Error("Incorrect or missing date: " + date);
  }
  return date;
};

const parseGender = (gender: unknown): Gender => {
  if (!isString(gender) || !isGender(gender)) {
    throw new Error("Incorrect or missing date: " + gender);
  }
  return gender;
};

const parseOccupation = (occupation: unknown) => {
  if (!isString(occupation)) {
    throw new Error("Incorrect or missing date: " + occupation);
  }
  return occupation;
};
*/
const toNewPatient = (object: unknown): NewPatient => {
  return newPatientSchema.parse(object);
};

export default toNewPatient;
