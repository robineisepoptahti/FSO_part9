import type { DiaryProp } from "../types.ts";

const DiaryEntries = (props: DiaryProp) => {
  const { entries } = props;

  return (
    <div>
      <h2>Diary Entries</h2>
      {entries.map((e) => (
        <div>
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
