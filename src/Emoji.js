import React from "react";
const Emoji = props => (
  <div className={`Emotion BackgroundColor ${props.background}`}>
    <span
      className="emoji Fz(10vh)"
      role="img"
      aria-label={props.label ? props.label : ""}
      aria-hidden={props.label ? "false" : "true"}
    >
      {props.symbol}
    </span>
  </div>
);
export default Emoji;
