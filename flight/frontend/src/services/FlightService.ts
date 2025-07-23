import axios from "axios";
import type { DiaryEntry } from "../types";

export const getAll = () => {
  return axios
    .get<DiaryEntry[]>("http://localhost:3000/api/diaries")
    .then((response) => response.data);
};
