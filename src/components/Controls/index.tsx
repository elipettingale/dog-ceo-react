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

  const [errors, setErrors] = useState<string[]>([]);

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

  const selectionsAreValid = () => {
    let newErrors = [];

    if (selectedBreed === "") {
      newErrors.push("breed");
    }

    if (selectedNumberOfImages === "") {
      newErrors.push("numberOfImages");
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleOnClick = () => {
    if (selectionsAreValid()) {
      handleViewImages({
        breed: selectedBreed,
        subBreed: selectedSubBreed,
        numberOfImages: selectedNumberOfImages,
      });
    }
  };

  return (
    <div className="App__Controls" data-testid="controls">
      <Select
        id="breedSelect"
        options={breeds}
        value={selectedBreed}
        setSelected={(value) => setSelectedBreed(value)}
        hasError={errors.includes("breed")}
      />
      {subBreeds.length > 0 ? (
        <Select
          id="subBreedSelect"
          options={subBreeds}
          value={selectedSubBreed}
          setSelected={(value) => setSelectedSubBreed(value)}
          hasError={errors.includes("subBreed")}
        />
      ) : null}
      <Select
        id="numberOfImagesSelect"
        options={["1", "2", "3", "4", "5", "6", "7", "8"]}
        value={selectedNumberOfImages}
        setSelected={(value) => setSelectedNumberOfImages(value)}
        hasError={errors.includes("numberOfImages")}
      />
      <Button
        text="View Images"
        disabled={false}
        onClick={() => handleOnClick()}
      />
    </div>
  );
}

export default Controls;
