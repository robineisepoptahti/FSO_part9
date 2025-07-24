import { useState } from "react";
import { create } from "../services/FlightService";
import type { Weather, Visibility, postDiaryEntry } from "../types";

const InputForm = () => {
  const [date, setDate] = useState("");
  const [visibility, setVisibility] = useState("");
  const [weather, setWeather] = useState("");
  const [comment, setComment] = useState("");

  const saveEntry = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const toSend: postDiaryEntry = {
      date: date,
      visibility: visibility as Visibility,
      weather: weather as Weather,
      comment: comment,
    };
    create(toSend);
    setDate("");
    setVisibility("");
    setComment("");
    setWeather("");
  };

  return (
    <div>
      <h1>Add new entry</h1>
      <form onSubmit={saveEntry}>
        Date
        <input value={date} onChange={(event) => setDate(event.target.value)} />
        <br />
        Visibility
        <input
          value={visibility}
          onChange={(event) => setVisibility(event.target.value)}
        />
        <br />
        Weather
        <input
          value={weather}
          onChange={(event) => setWeather(event.target.value)}
        />
        <br />
        Comment
        <input
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
        <br />
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default InputForm;
