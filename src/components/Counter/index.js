import React from "react";
import "./Counter.css";

const Counter = ({ step = 1, value, onChange }) => {
  return (
    <div className="Counter">
      <button className="Counter-button" onClick={() => onChange(value - step)}>
        -
      </button>
      <span className="Counter-value">{value}</span>
      <button className="Counter-button" onClick={() => onChange(value + step)}>
        +
      </button>
    </div>
  );
};

export default Counter;
