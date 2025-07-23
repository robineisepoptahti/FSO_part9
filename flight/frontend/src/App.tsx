import { useEffect, useState } from "react";
import InputForm from "./components/InputForm";
import DiaryEntries from "./components/DiaryEntries";
import { getAll } from "./services/FlightService";
import type { DiaryEntry } from "./types";

const App = () => {
  const [entries, setEntries] = useState<DiaryEntry[]>([]);

  useEffect(() => {
    getAll().then((data) => setEntries(data));
  }, []);

  return (
    <div>
      <InputForm></InputForm>
      <DiaryEntries entries={entries}></DiaryEntries>
    </div>
  );
};

export default App;
