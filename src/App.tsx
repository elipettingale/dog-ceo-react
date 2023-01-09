import React, { useState } from "react";
import "./App.css";
import Controls from "./components/Controls";
import Results from "./components/Results";
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
    <div className="App" data-testid="app">
      <Controls
        handleViewImages={(selectedOptions) =>
          handleViewImages(selectedOptions)
        }
      />
      <Results results={results} />
    </div>
  );
}

export default App;
