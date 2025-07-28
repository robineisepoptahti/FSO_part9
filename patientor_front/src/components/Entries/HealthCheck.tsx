import type { PatientProp, Entry } from "../../types";
import CommonEntry from "./CommonEntry";
const HealthCheck = (prop: PatientProp) => {
  const { patient } = prop;
  console.log(patient);
  const healthChecklEntries: Entry[] = patient.entries.filter((e) => {
    return e.type === "HealthCheck";
  });
  return (
    <div>
      <CommonEntry patient={healthChecklEntries}></CommonEntry>
    </div>
  );
};

export default HealthCheck;
