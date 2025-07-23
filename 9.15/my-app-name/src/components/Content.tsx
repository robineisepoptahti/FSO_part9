import Part from "./Part";
import type { ContentProps } from "../types";

const Content = (props: ContentProps) => {
  const { coursePart } = props;
  return (
    <div>
      <Part coursePart={coursePart}></Part>
    </div>
  );
};

export default Content;
