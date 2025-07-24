import axios from "axios";
import type { DiaryEntry, postDiaryEntry } from "../types";

export const getAll = () => {
  return axios
    .get<DiaryEntry[]>("http://localhost:3000/api/diaries")
    .then((response) => response.data);
};

export const create = (
  entry: postDiaryEntry,
  errorAlert: (error: string) => void
) => {
  return axios
    .post<postDiaryEntry>("http://localhost:3000/api/diaries", entry)
    .then((response) => response.data)
    .catch((error: unknown) => {
      if (axios.isAxiosError(error) && error.response !== undefined) {
        const errorDetails = `${JSON.stringify(error.response.data)}
        `;
        errorAlert(errorDetails);
      } else errorAlert("Error: not axios related error");
    });
};
