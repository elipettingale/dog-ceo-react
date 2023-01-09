import React, { useState, useEffect } from "react";
import "./App.css";
import Select from "./common/Select";
import Button from "./common/Button";
import Result from "./common/Result";
import { getBreeds, getSubBreeds } from "./services/dogApiService";

function App() {
  const [breeds, setBreeds] = useState<any>([]);
  const [subBreeds, setSubBreeds] = useState<string[]>([]);

  const [selectedBreed, setSelectedBreed] = useState<string>("");
  const [selectedSubBreed, setSelectedSubBreed] = useState<string>("");
  const [selectedNumberOfImages, setSelectedNumberOfImages] =
    useState<string>("");

  useEffect(() => {
    getBreeds().then((breeds) => {
      setBreeds(breeds);
    });
  }, []);

  useEffect(() => {
    if (selectedBreed === "") {
      setSubBreeds([]);
    } else {
      getSubBreeds(selectedBreed).then((subBreeds) => {
        setSubBreeds(subBreeds);
      });
    }
  }, [selectedBreed]);

  return (
    <div className="App">
      <div className="App__Selects">
        <Select
          options={breeds}
          value={selectedBreed}
          setSelected={(value) => setSelectedBreed(value)}
        />
        <Select
          options={subBreeds}
          value={selectedSubBreed}
          setSelected={(value) => setSelectedSubBreed(value)}
        />
        <Select
          options={["1", "2", "3", "4", "5", "6", "7", "8"]}
          value={selectedNumberOfImages}
          setSelected={(value) => setSelectedNumberOfImages(value)}
        />
        <Button
          text="View Images"
          disabled={false}
          onClick={() => {
            console.log("click");
          }}
        />
      </div>
      <div className="debug--remove">
        <p>Breed: {selectedBreed}</p>
        <p>SubBreed: {selectedSubBreed}</p>
        <p>NumberOfImages: {selectedNumberOfImages}</p>
      </div>
      <div className="App__Results">
        <Result image="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg" />
        <Result image="https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg" />
        <Result image="https://images.dog.ceo/breeds/hound-afghan/n02088094_1023.jpg" />
      </div>
    </div>
  );
}

export default App;
