import React, { useState, useEffect } from "react";
import "./App.css";
import Result from "./common/Result";
import Controls from "./components/Controls";

function App() {
  const handleViewImages = (selections: Object) => {
    console.log("VIEW IMAGES");
  };

  return (
    <div className="App">
      <Controls
        handleViewImages={(selections) => handleViewImages(selections)}
      />
      <div className="App__Results">
        <Result image="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg" />
        <Result image="https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg" />
        <Result image="https://images.dog.ceo/breeds/hound-afghan/n02088094_1023.jpg" />
      </div>
    </div>
  );
}

export default App;
