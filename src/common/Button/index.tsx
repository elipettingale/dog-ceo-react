import * as React from "react";
import "./styles.css";

interface Props {
  text: string;
  disabled: boolean;
  onClick: () => void;
}

function Button({ text, disabled, onClick }: Props) {
  return (
    <button
      className="App__Button"
      disabled={disabled}
      onClick={() => {
        onClick();
      }}
    >
      {text}
    </button>
  );
}

export default Button;
