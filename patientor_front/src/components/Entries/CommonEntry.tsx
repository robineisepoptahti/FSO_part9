import type { EntryListProp, Entry, Diagnosis } from "../../types";
import service from "../../services/diagnosis";
import { useEffect, useState } from "react";

const CommonEntry = (props: EntryListProp) => {
  const { patient } = props;
  const [diagnoses, setDiagnoses] = useState<Diagnosis[]>([]);

  useEffect(() => {
    const fetchDiagnoses = async () => {
      const dias: Diagnosis[] = await service.getAll();
      setDiagnoses(dias);
    };
    fetchDiagnoses();
  }, []);

  return (
    <div>
      {patient.map((e: Entry) => (
        <div key={e.id}>
          <p>
            {e.date} {e.description}
          </p>
          {e.diagnosisCodes && (
            <ul>
              {e.diagnosisCodes.map((d) => {
                {
                  const diagnosis = diagnoses.find(
                    (i: Diagnosis) => d === i.code
                  );
                  if (diagnosis) {
                    return (
                      <li key={d}>
                        {d} {diagnosis.name}
                      </li>
                    );
                  }
                }
              })}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default CommonEntry;
