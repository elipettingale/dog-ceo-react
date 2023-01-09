import React, { useState, useEffect } from "react";
import "./App.css";
import Result from "./common/Result";
import Controls from "./components/Controls";
import { getImages } from "./services/dogApiService";
import { SelectedOptions } from "./types/SelectedOptions";

function App() {
  const [results, setResults] = useState<string[]>([]);

  const handleViewImages = ({
    breed,
    subBreed,
    numberOfImages,
  }: SelectedOptions) => {
    getImages(breed, subBreed, numberOfImages).then((images) => {
      setResults(images);
    });
  };

  return (
    <div className="App">
      <Controls
        handleViewImages={(selections) => handleViewImages(selections)}
      />
      <div className="App__Results">
        {results.map((result) => {
          return <Result key={result} image={result} />;
        })}
      </div>
    </div>
  );
}

export default App;
