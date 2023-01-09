import React from "react";
import "./App.css";
import Select from "./common/Select";
import Button from "./common/Button";
import Result from "./common/Result";

function App() {
  return (
    <div className="App">
      <div className="App__Selects">
        <Select options={["Hound"]} value={""} setSelected={(value) => {}} />
        <Select options={["Basset"]} value={""} setSelected={(value) => {}} />
        <Select
          options={Array.from(Array(10).keys())}
          value={""}
          setSelected={(value) => {}}
        />
        <Button
          text="View Images"
          disabled={false}
          onClick={() => {
            console.log("click");
          }}
        />
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
