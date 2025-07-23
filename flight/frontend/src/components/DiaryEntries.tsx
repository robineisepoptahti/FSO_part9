import type { DiaryProp } from "../types.ts";

const DiaryEntries = (props: DiaryProp) => {
  const { entries } = props;

  return (
    <div>
      {entries.map((e) => (
        <div key={e.id}>
          <b>{e.date}</b>
          <br />
          <p>Visibility: {e.visibility}</p>
          <p>Weather: {e.weather}</p>
          <br />
        </div>
      ))}
    </div>
  );
};

export default DiaryEntries;
