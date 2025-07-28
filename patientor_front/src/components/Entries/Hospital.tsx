import type { Entry, PatientProp } from "../../types";
import CommonEntry from "./CommonEntry";

const Hospital = (prop: PatientProp) => {
  const { patient } = prop;
  const hospitalEntries: Entry[] = patient.entries.filter(
    (e) => e.type === "Hospital"
  );
  return (
    <div>
      <CommonEntry patient={hospitalEntries}></CommonEntry>
    </div>
  );
};

export default Hospital;
