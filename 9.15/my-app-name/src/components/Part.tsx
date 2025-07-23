import type { ContentProps } from "../types";

const Part = (props: ContentProps) => {
  const { coursePart } = props;
  return (
    <div>
      {coursePart.map((c) => {
        const header = (
          <div>
            <b>
              {c.name} {c.exerciseCount}
            </b>
          </div>
        );
        {
          switch (c.kind) {
            case "basic":
              return (
                <div>
                  {header}
                  <i>{c.description}</i>
                  <br />
                  <br />
                </div>
              );
            case "group":
              return (
                <div>
                  {header}
                  <p style={{ margin: 0 }}>
                    group project count{c.groupProjectCount}
                  </p>
                  <br />
                </div>
              );
            case "background":
              return (
                <div>
                  {header}
                  <i>{c.description}</i>
                  <p style={{ margin: 0 }}>submit to {c.backgroundMaterial}</p>
                  <br />
                </div>
              );
            case "special":
              return (
                <div>
                  {header}
                  <i>{c.description}</i>
                  <p>required skils: {c.requirements.join(", ")}</p>
                  <br />
                </div>
              );
            default:
              return assertNever(c);
          }
        }
      })}
    </div>
  );
};

const assertNever = (c: never): never => {
  throw new Error(`Unhandled discriminated union member: ${JSON.stringify(c)}`);
};

export default Part;
