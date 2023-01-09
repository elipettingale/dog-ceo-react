import React, { useState, useEffect } from "react";
import Select from "../../common/Select";
import Button from "../../common/Button";
import { getBreeds, getSubBreeds } from "../../services/dogApiService";
import { SelectedOptions } from "../../types/SelectedOptions";

interface Props {
  handleViewImages: (selections: SelectedOptions) => void;
}

function Controls({ handleViewImages }: Props) {
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

    setSelectedSubBreed("");
  }, [selectedBreed]);

  const handleOnClick = () => {
    // todo: validate

    handleViewImages({
      breed: selectedBreed,
      subBreed: selectedSubBreed,
      numberOfImages: selectedNumberOfImages,
    });
  };

  return (
    <div className="App__Controls">
      <Select
        options={breeds}
        value={selectedBreed}
        setSelected={(value) => setSelectedBreed(value)}
      />
      {subBreeds.length > 0 ? (
        <Select
          options={subBreeds}
          value={selectedSubBreed}
          setSelected={(value) => setSelectedSubBreed(value)}
        />
      ) : null}
      <Select
        options={["1", "2", "3", "4", "5", "6", "7", "8"]}
        value={selectedNumberOfImages}
        setSelected={(value) => setSelectedNumberOfImages(value)}
      />
      <Button
        text="View Images"
        disabled={false}
        onClick={() => handleOnClick()}
      />
      <div className="debug--remove">
        <p>Breed: {selectedBreed}</p>
        <p>SubBreed: {selectedSubBreed}</p>
        <p>NumberOfImages: {selectedNumberOfImages}</p>
      </div>
    </div>
  );
}

export default Controls;
