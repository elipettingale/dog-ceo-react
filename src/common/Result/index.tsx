import * as React from "react";
import { Url } from "url";
import "./styles.css";

interface Props {
  image: string;
}

function Result({ image }: Props) {
  return (
    <div
      className="App__Result"
      style={{
        backgroundImage: `url(${image})`,
      }}
    ></div>
  );
}

export default Result;
