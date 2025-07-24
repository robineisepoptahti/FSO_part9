export type Weather = "sunny" | "rainy" | "cloudy" | "stormy" | "windy";

export type Visibility = "great" | "good" | "ok" | "poor";

export type fullDiaryEntry = {
  id: string;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment: string;
};

export type postDiaryEntry = Omit<fullDiaryEntry, "id">;

export type DiaryEntry = Omit<postDiaryEntry, "comment">;

export interface DiaryProp {
  entries: DiaryEntry[];
}
