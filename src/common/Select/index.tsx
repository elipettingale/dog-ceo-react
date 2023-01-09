import * as React from "react";
import "./styles.css";

interface Props {
  options: readonly string[];
  value: string;
  setSelected: (newValue: string) => void;
  hasError: boolean;
}

function Select({ options, value, setSelected, hasError }: Props) {
  return (
    <select
      className={"App__Select " + (hasError ? "App__Select--error" : "")}
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
