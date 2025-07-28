import type { EntryListProp, Entry } from "../../types";

const CommonEntry = (props: EntryListProp) => {
  const { patient } = props;
  return (
    <div>
      {patient.map((e: Entry) => (
        <div key={e.id}>
          <p>
            {e.date} {e.description}
          </p>
          {e.diagnosisCodes && (
            <ul>
              {e.diagnosisCodes.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default CommonEntry;
