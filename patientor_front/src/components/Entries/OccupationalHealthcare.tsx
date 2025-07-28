import CommonEntry from "./CommonEntry";
import type { PatientProp, Entry } from "../../types";

const OccupationalHealthcare = (prop: PatientProp) => {
  const { patient } = prop;
  const occupationalHealthcareEntries: Entry[] = patient.entries.filter((e) => {
    return e.type === "OccupationalHealthcare";
  });
  return (
    <div>
      <CommonEntry patient={occupationalHealthcareEntries}></CommonEntry>
    </div>
  );
};

export default OccupationalHealthcare;
