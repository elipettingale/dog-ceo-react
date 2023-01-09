import * as React from "react";
import Result from "../../common/Result";

interface Props {
  results: string[];
}

function Results({ results }: Props) {
  return (
    <div className="App__Results" data-testid="results">
      {results.map((result) => {
        return <Result key={result} image={result} />;
      })}
    </div>
  );
}

export default Results;
