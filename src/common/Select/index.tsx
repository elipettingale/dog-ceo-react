import * as React from "react";
import "./styles.css";

interface Props {
  options: readonly (string | number)[];
  value: string;
  setSelected: (newValue: string) => void;
}

function Select({ options, value, setSelected }: Props) {
  return (
    <select
      className="App__Select"
      onChange={(event) => setSelected(event.target.value)}
    >
      <option></option>
      {options.map((option) => {
        return (
          <option key={option} value={option}>
            {option}
          </option>
        );
      })}
    </select>
  );
}

export default Select;
