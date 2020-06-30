import React from "react";

export const ArrowRight = props => (
  <svg width={36} height={36} viewBox="0 0 24 24" {...props}>
    <path
      style={{
        textIndent: 0,
        textAlign: "start",
        lineHeight: "normal",
        textTransform: "none",
        blockProgression: "tb",
        InkscapeFontSpecification: "Sans"
      }}
      d="M12 2C6.489 2 2 6.489 2 12s4.489 10 10 10 10-4.489 10-10S17.511 2 12 2zm0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8zm.719 2.281L11.28 7.72 14.562 11H6v2h8.563l-3.282 3.281 1.438 1.438 5-5 .687-.719-.687-.719-5-5z"
      overflow="visible"
      fontFamily="Sans"
    />
  </svg>
);

export const ArrowLeft = props => (
  <ArrowRight style={{ transform: "rotate(180deg)" }} {...props} />
);
