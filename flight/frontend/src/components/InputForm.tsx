import { useState } from "react";
import { create } from "../services/FlightService";
import type { Weather, Visibility, postDiaryEntry, DiaryEntry } from "../types";

const InputForm = ({
  setEntries,
}: {
  setEntries: React.Dispatch<React.SetStateAction<DiaryEntry[]>>;
}) => {
  const [date, setDate] = useState("");
  const [visibility, setVisibility] = useState("");
  const [weather, setWeather] = useState("");
  const [comment, setComment] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const errorAlert = (error: string) => {
    setErrorMsg(error);
    setTimeout(() => {
      setErrorMsg("");
    }, 5000);
  };

  const saveEntry = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const toSend: postDiaryEntry = {
      date: date,
      visibility: visibility as Visibility,
      weather: weather as Weather,
      comment: comment,
    };
    const newEntry = await create(toSend, errorAlert);
    if (newEntry) {
      setEntries((state) => [...state, newEntry]);
    }
    setDate("");
    setVisibility("");
    setComment("");
    setWeather("");
  };

  return (
    <div>
      <div style={{ color: "red" }}>{errorMsg}</div>
      <h2>Add new entry</h2>
      <form onSubmit={saveEntry}>
        Date
        <input
          type="date"
          min="2000-01-01"
          max="2050-12-31"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
        <br />
        Visibility great
        <input
          name="visibility"
          type="radio"
          id="great"
          value="great"
          checked={visibility === "great"}
          onChange={(event) => setVisibility(event.target.value)}
        />{" "}
        good
        <input
          name="visibility"
          type="radio"
          id="good"
          value="good"
          checked={visibility === "good"}
          onChange={(event) => setVisibility(event.target.value)}
        />{" "}
        ok
        <input
          name="visibility"
          type="radio"
          id="ok"
          value="ok"
          checked={visibility === "ok"}
          onChange={(event) => setVisibility(event.target.value)}
        />{" "}
        poor
        <input
          name="visibility"
          type="radio"
          id="poor"
          value="poor"
          checked={visibility === "poor"}
          onChange={(event) => setVisibility(event.target.value)}
        />
        <br />
        Weather sunny
        <input
          name="weather"
          type="radio"
          id="sunny"
          value="sunny"
          checked={weather === "sunny"}
          onChange={(event) => setWeather(event.target.value)}
        />
        rainy
        <input
          name="weather"
          type="radio"
          id="rainy"
          value="rainy"
          checked={weather === "rainy"}
          onChange={(event) => setWeather(event.target.value)}
        />
        cloudy
        <input
          name="weather"
          type="radio"
          id="cloudy"
          value="cloudy"
          checked={weather === "cloudy"}
          onChange={(event) => setWeather(event.target.value)}
        />
        stormy
        <input
          name="weather"
          type="radio"
          id="stormy"
          value="stormy"
          checked={weather === "stormy"}
          onChange={(event) => setWeather(event.target.value)}
        />
        windy
        <input
          name="weather"
          type="radio"
          id="windy"
          value="windy"
          checked={weather === "windy"}
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
        <br />
        <br />
      </form>
    </div>
  );
};

export default InputForm;
